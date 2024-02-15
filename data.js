
BASE_API ="https://api.jsonbin.io/v3/b";
BIN_ID = "65c33452dc74654018a16c1a";
MASTER_KEY = "$2a$10$JW0IiZb7G0Zz2VbHsYNoW.SjITUv.wcScj6VdQgYlqvjt/FjlUk5q";




function addFood(foodArray,foodname,food_description) {
 let index = foodArray.length ; 
    let newFood = {
      "index": index,
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


