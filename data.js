
BASE_API ="https://api.jsonbin.io/v3/b";
BIN_ID = "65c33452dc74654018a16c1a";
MASTER_KEY = "$2a$10$JW0IiZb7G0Zz2VbHsYNoW.SjITUv.wcScj6VdQgYlqvjt/FjlUk5q";




function addFood(foodArray,foodname,food_description) {

    let newFood = {
      "foodname": foodname, 
      "description": food_description
    };
    console.log("this is new food =>",newFood);
    foodArray.push(newFood);
    console.log("this is food array=>",foodArray)
    return foodArray;   
}


async function saveFoods(foods){
  console.log("save food route hit")
  const response = await axios.put(`${BASE_API}/${BIN_ID}`, foods, {
  headers: {
    "Content-Type": "application/json",
    "X-Master-Key": MASTER_KEY
  }
});
return response.data;
}


async function loadFoods() {
  const response = await axios.get(BASE_API + "/" + BIN_ID + "/latest");
  console.log("this is load food =>", response.data.record)
  return response.data.record;
}

function renderFood(foods){

  let menu = document.querySelector("#menu");
  menu.innerHTML = "";
  for(let food of foods){
      menu.innerHTML+= `
      <div class="card col-12 col-sm-4 col-md-3">
      <h5 class="card-header">${food.foodname}</h5>
          <div class="card-body">
              <p class="card-text">${food.description}</p>
              <button  class="btn btn-success btn_edit">Edit</button>
              <button  class="btn btn-danger btn_delete">Delete</button>
          </div>
      </div>
  `; 
  } menu.querySelector(".btn_delete").addEventListener("click",()=>{
    console.log("btn delete was clicked")
   deleteFood(foods, food.foodname);
  })

  
  function deleteFood(foods, foodname){
    let wantedIndex = null;
    for (let i = 0; i < foods.length ; i++) {
        if (foodname == foods[i].foodname) {
            wantedIndex = i;
        }
    }
    if (wantedIndex) {
        foods.splice(wantedIndex, 1);
    }
    saveFoods(foods);
renderFood(foods);
}
}

