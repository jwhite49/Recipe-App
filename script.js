document.getElementById("addRecipeButton").addEventListener("click", addRecipe);

function addRecipe() {
    const name = document.getElementById("recipeName").value.trim();
    const description = document.getElementById("recipeDescription").value.trim();
    const imageInput = document.getElementById("recipeImage");
    const message = document.getElementById("message");
    
    //validating that all fields were filled in
    if (!name || !description || !imageInput.files.length) {
        displayMessage("Fill out all fields.", "error");
        return;
    }

    const recipeDisplay = document.getElementById("recipeDisplay");
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    const recipeTitle = document.createElement("h3");
    recipeTitle.textContent = name;
    recipeCard.appendChild(recipeTitle);

    const recipeDesc = document.createElement("p");
    recipeDesc.textContent = description;
    recipeCard.appendChild(recipeDesc);

    //image
    const recipeImg = document.createElement("img");
    recipeImg.src = URL.createObjectURL(imageInput.files[0]);
    recipeCard.appendChild(recipeImg);

    //deleting recipe
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        recipeCard.remove();
    });
    recipeCard.appendChild(deleteBtn);

    recipeDisplay.appendChild(recipeCard);

    //clears after submitted recipe
    document.getElementById("recipeForm").reset();
    displayMessage("Recipe added!", "success");
}

//display whether error with recipe or success
function displayMessage(text, type) {
    const message = document.getElementById("message");
    message.textContent = text;
    switch (type) {
        case "error":
            message.style.color = "red";
            break;
        case "success":
            message.style.color = "green";
            break;
        default:
            message.style.color = "black";
    }
}
// adds more than one view of recipe
function displayAllRecipes(recipes) {
    recipes.forEach(recipe => {
    });
}
