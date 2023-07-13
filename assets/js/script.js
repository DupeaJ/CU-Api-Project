const callBtn = document.querySelector("#call-button");
//selecting button

var Url = "https://www.themealdb.com/api/json/v1/1/categories.php?";
// url variable

const categoriesElement = document.getElementById("categoryDescription");

function filterCall() {
    const filterUrl =
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
    fetch(filterUrl)
        //call api return response as json
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.meals);
        });
}

function callRecipeApi() {
    fetch(Url)
        //call api return response as json
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const categories = data.categories;
            //selecting categories tag
            categories.forEach(function (category) {
                //for each category the following will happen for each
                const strCategory = category.strCategory;
                const categoryElement = document.createElement("p");
                //create element
                categoryElement.textContent = strCategory;
                //set text
                categoriesElement.appendChild(categoryElement);
                //append to page
            });
        })
        .catch((error) => {
            console.log(error);
            //if error console log what the error is
        });
}

callBtn.addEventListener("click", callRecipeApi);
callBtn.addEventListener("click", filterCall);
//event listener on btn to call recipeapi

$(function () {
    var hamburgerMenu = $("#hamburger-menu");
    var closeBtn = $("#close-btn");

    hamburgerMenu.on("click", function () {
        $("#side-bar").attr("style", "width: 400px;");
    });

    closeBtn.on("click", function () {
        $("#side-bar").attr("style", "width: 0px;");
    });
});
