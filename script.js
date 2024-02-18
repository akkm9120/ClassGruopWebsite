let foods = [];
document.addEventListener("DOMContentLoaded", async () => {

    foods = await loadFoods();

    console.log("after load foods in DOMcontentloaded", foods)
    renderFood(foods);

})

document.querySelector("#btnMenuAdd").addEventListener("click", () => {

    const food_name = document.querySelector("#txtFoodname").value;
    const food_description = document.querySelector("#txtDescription").value;

    let new_foodarray = addFood(foods, food_name, food_description);
    saveFoods(new_foodarray);
    renderFood(foods);
})







function renderFood(foods) {

    let menu = document.querySelector("#menu");
    menu.innerHTML = "";
    for (let food of foods) {
        menu.innerHTML += `
        <div class="card col-12 col-sm-4 col-md-3">
        <h5 class="card-header">${food.foodname}</h5>
            <div class="card-body">
                <p class="card-text">${food.description}</p>
                <button  class="btn btn-success edit-btn">Edit</button>
                <button  class="btn btn-danger del-btn" value="${food.index}">Delete</button>
            </div>
        </div>
    `;
        document.querySelectorAll(".del-btn").forEach(delbutton => {
            delbutton.addEventListener("click", function () {
                alert(`button ${delbutton.value} is clicked`);
                foods.splice(delbutton.value, 1);
                saveFoods(foods);
                renderFood(foods);
            })
        })
        document.querySelectorAll(".edit-btn").forEach(editbutton => {
            editbutton.addEventListener("click", function () {
                let found = false;
                const indextoUpdate = food.index;
                for (let i = 0; i < foods.length; i++) {
                    if (foods[i].index == indextoUpdate) {
                        found = true;
                        document.querySelector("#txtFoodname").value = foods[i].name;
                        document.querySelector("#txtDescription").value =foods[i].description;
                        document.querySelector("#btnMenuAdd").style.display = 'none';
                        document.querySelector("#btnMenuUpdate").style.display= 'block';
                       let  editedItem = {
                       "index": food.index,
                       "foodname": foodname, 
                       "description": food_description
                       }
                        foods.splice(indextoUpdate, 0, editedItem);
                        saveFoods(foods);
                        renderFood(foods);
                    }
                }


            })
        })
    }
}





