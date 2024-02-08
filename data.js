
BASE_API ="https://api.jsonbin.io/v3/b";
BIN_ID = "65c33452dc74654018a16c1a";
MASTER_KEY = "$2a$10$JW0IiZb7G0Zz2VbHsYNoW.SjITUv.wcScj6VdQgYlqvjt/FjlUk5q";

function addFood(foodArray,foodname,fooddescription) {

    let newFood = {
      "foodname": foodname, 
      "description": fooddescription
    };
    foodArray.push(newFood);
    
}

async function saveFoods(foods) {
 await axios.post(BASE_API+"/"+BIN_ID,foods
}




async function loadFoods() {
  const response = await axios.get(BASE_API + "/" + BIN_ID + "/latest");
  return response.data.record;
}

