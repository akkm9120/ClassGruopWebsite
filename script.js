let foods = [];


  
document.querySelector("#btnMenuAdd").addEventListener("click", function (event){

    event.preventDefault();
    
    console.log("route hit at btn menu add event listener");

    const food_name = document.querySelector("#txtFoodname").value;
    const food_description = document.querySelector("#txtDescription").value;

    addFood(foods,food_name,food_description);
    console.log(foods);
    saveFoods(foods);

})
