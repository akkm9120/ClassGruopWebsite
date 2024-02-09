

document.addEventListener("DOMContentLoaded",async ()=>{
    let foods =  await loadFoods();

    let menu = document.querySelector("#menu");
    console.log(foods);
        for(let food of foods){
        menu.innerHTML+= `
        <div class="card col-12 col-sm-4 col-md-3">
        <div class="card-body">
            <h5 class="card-title">${food.foodname}</h5>
            <p class="card-text">${food.description}</p>
            <button type="button" class="btn btn-success">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
        </div>
        </div>
`;
    }
})
