let foods = []; 
document.addEventListener("DOMContentLoaded",async ()=>{
    
    foods =  await loadFoods();

    console.log("after load foods in DOMcontentloaded", foods)
    renderFood(foods);
   
})

document.querySelector("#btnMenuAdd").addEventListener("click",()=>{

    const food_name = document.querySelector("#txtFoodname").value;
    const food_description = document.querySelector("#txtDescription").value;

    let new_foodarray =addFood(foods,food_name,food_description);
    saveFoods(new_foodarray); 
    renderFood(foods);
})
