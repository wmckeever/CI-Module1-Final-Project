//* - generate weekly meal plan url - https://api.spoonacular.com/mealplanner/generate -- https://api.spoonacular.com/mealplanner/generate?timeFrame=week

//* - generate one meal plan url - https://api.spoonacular.com/mealplanner/generate -- https://api.spoonacular.com/mealplanner/generate?timeFrame=day

//* -search recipies by ingredients - GET https://api.spoonacular.com/recipes/findByIngredients?apiKey=63aa00c3b9a14b4d81e35606c1528c2c


//*api key: ?apiKey=63aa00c3b9a14b4d81e35606c1528c2c 



//*<------------- gloabal variables ------------->*//
//*<----------------------------------------->*//
let myAPIKey = "apiKey=63aa00c3b9a14b4d81e35606c1528c2c";
let searchUrl = "https://api.spoonacular.com/recipes/findByIngredients=";

let recipeID1 = "";
let recipeID2 = "";
let recipeID3 = "";
let recipeID4 = "";
let recipeID5 = "";
let recipeID6 = "";

let bookmarks = [];

let randomFood = document.querySelector("#random-food");

//* click sound
let clickSound = new Audio("./click-21156.mp3");


//*<------------- querySelectors ------------->*//
//*<----------------------------------------->*//
let userInput = document.querySelector('#userInput');
let searchButton = document.querySelector('#searchButton');

//* modal buttons
let modalButton1 = document.querySelector('.modal-button1');
let modalButton2 = document.querySelector('.modal-button2');
let modalButton3 = document.querySelector('.modal-button3');
let modalButton4 = document.querySelector('.modal-button4');
let modalButton5 = document.querySelector('.modal-button5');
let modalButton6 = document.querySelector('.modal-button6');

//* modal save buttons
let saveButton = document.querySelector('#save-button');
let saveSpot = document.querySelector('ul');

//* modal image area
let modalRecipeImage = document.querySelector('#modal-recipe-image');
let modalTitle = document.querySelector('.modal-title');


//*-------------------------------------------------------------//
let cardContainer1 = document.querySelector('#card-container1');
let cardContainer2 = document.querySelector('#card-container2');

let card1Image = document.querySelector('.card1-img-top');
let card1Title = document.querySelector('.card1-title');
let card1Text = document.querySelector('.card1-text');

let card2Image = document.querySelector('.card2-img-top');
let card2Title = document.querySelector('.card2-title');
let card2Text = document.querySelector('.card2-text');

let card3Image = document.querySelector('.card3-img-top');
let card3Title = document.querySelector('.card3-title');
let card3Text = document.querySelector('.card3-text');

let card4Image = document.querySelector('.card4-img-top');
let card4Title = document.querySelector('.card4-title');
let card4Text = document.querySelector('.card4-text');

let card5Image = document.querySelector('.card5-img-top');
let card5Title = document.querySelector('.card5-title');
let card5Text = document.querySelector('.card5-text');

let card6Image = document.querySelector('.card6-img-top');
let card6Title = document.querySelector('.card6-title');
let card6Text = document.querySelector('.card6-text');



//*<------------- variable resets ------------->*//
//*<------------------------------------------>*//
try {
  userInput.value = "";


//*<------------- random food trivia API call -------------->*//
//*<------------------------------------------------------->*//

fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=63aa00c3b9a14b4d81e35606c1528c2c`)
  //fetch(`https://api.spoonacular.com/recipes/${recipeID1}/card?${myAPIKey}`)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data.text);
      randomFood.innerText = data.text;

    })
.catch(function(error){
  console.log("This is the error:");
  console.log(error);
});




//*<------------- API Fetch Call 1 ------------->*//
//*<------------------------------------------->*//

searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    clickSound.play();
    console.log("Search Button Works")
    console.log("User Iput is working and prints out:")
    console.log(userInput.value);  
  
      fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=63aa00c3b9a14b4d81e35606c1528c2c&ingredients=${userInput.value}`)
      .then(function(response){
        return response.json()
      })
      .then(function(data){
                console.log(data);
                card1Image.src = data[0].image;
                card1Title.innerText = data[0].title;
                card1Text.innerHTML = "Number of Likes: " + data[0].likes;
                
                card2Image.src = data[1].image;
                card2Title.innerText = data[1].title;
                card2Text.innerHTML = "Number of Likes: " + data[1].likes;
                
                card3Image.src = data[2].image;
                card3Title.innerText = data[2].title;
                card3Text.innerHTML = "Number of Likes: " + data[2].likes;

                
                card4Image.src = data[3].image;
                card4Title.innerText = data[3].title;
                card4Text.innerHTML = "Number of Likes: " + data[3].likes;
                        
                card5Image.src = data[4].image;
                card5Title.innerText = data[4].title;
                card5Text.innerHTML = "Number of Likes: " + data[4].likes;

                card6Image.src = data[5].image;
                card6Title.innerText = data[5].title;
                card6Text.innerHTML = "Number of Likes: " + data[5].likes;

          recipeID1 = data[0].id;
            console.log(recipeID1);

          recipeID2 = data[1].id
            console.log(recipeID2);

          recipeID3 = data[2].id
            console.log(recipeID3);

          recipeID4 = data[3].id
            console.log(recipeID4);

          recipeID5 = data[4].id
            console.log(recipeID5);

          recipeID6 = data[5].id
            console.log(recipeID6);
      
      })
  .catch(function(error){
    console.log("This is the error:");
    console.log(error);
  })
});


//*<------------- modal buttons----------------->*//
//*<------------------------------------------->*//
modalButton1.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("ModalButton Works")
  console.log(recipeID1)
fetch(`https://api.spoonacular.com/recipes/${recipeID1}/card?apiKey=63aa00c3b9a14b4d81e35606c1528c2c`)
  //fetch(`https://api.spoonacular.com/recipes/${recipeID1}/card?${myAPIKey}`)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data.url);
      //change image url here
     modalRecipeImage.src = data.url;
      bookmarks.push(data.url);
     
     console.log(bookmarks);

    })
.catch(function(error){
  console.log("This is the error:");
  console.log(error);
})
});

modalButton2.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("ModalButton Works")
  console.log(recipeID2)
fetch(`https://api.spoonacular.com/recipes/${recipeID2}/card?apiKey=63aa00c3b9a14b4d81e35606c1528c2c`)
  //fetch(`https://api.spoonacular.com/recipes/${recipeID1}/card?${myAPIKey}`)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data.url);
      //change image url here
     modalRecipeImage.src = data.url;
     bookmarks.push(data.url);
     
     console.log(bookmarks);


    })
.catch(function(error){
  console.log("This is the error:");
  console.log(error);
})
});

modalButton3.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("ModalButton Works")
  console.log(recipeID3)
fetch(`https://api.spoonacular.com/recipes/${recipeID3}/card?apiKey=63aa00c3b9a14b4d81e35606c1528c2c`)
  //fetch(`https://api.spoonacular.com/recipes/${recipeID1}/card?${myAPIKey}`)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data.url);
      //change image url here
     modalRecipeImage.src = data.url;
     bookmarks.push(data.url);
     
     console.log(bookmarks);


    })
.catch(function(error){
  console.log("This is the error:");
  console.log(error);
})
});

modalButton4.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("ModalButton Works")
  console.log(recipeID4)
fetch(`https://api.spoonacular.com/recipes/${recipeID4}/card?apiKey=63aa00c3b9a14b4d81e35606c1528c2c`)
  //fetch(`https://api.spoonacular.com/recipes/${recipeID1}/card?${myAPIKey}`)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data.url);
      //change image url here
     modalRecipeImage.src = data.url;
     bookmarks.push(data.url);
     
     console.log(bookmarks);

    })
.catch(function(error){
  console.log("This is the error:");
  console.log(error);
})
});

modalButton5.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("ModalButton Works")
  console.log(recipeID5)
fetch(`https://api.spoonacular.com/recipes/${recipeID5}/card?apiKey=63aa00c3b9a14b4d81e35606c1528c2c`)
  //fetch(`https://api.spoonacular.com/recipes/${recipeID1}/card?${myAPIKey}`)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data.url);
      //change image url here
     modalRecipeImage.src = data.url;
     bookmarks.push(data.url);
     
     console.log(bookmarks);


    })
.catch(function(error){
  console.log("This is the error:");
  console.log(error);
})
});

modalButton6.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("ModalButton Works")
  console.log(recipeID6)
fetch(`https://api.spoonacular.com/recipes/${recipeID6}/card?apiKey=63aa00c3b9a14b4d81e35606c1528c2c`)
  //fetch(`https://api.spoonacular.com/recipes/${recipeID1}/card?${myAPIKey}`)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data.url);
      //change image url here
     modalRecipeImage.src = data.url;
     bookmarks.push(data.url);
     
     console.log(bookmarks);


    })
.catch(function(error){
  console.log("This is the error:");
  console.log(error);
})
});

//*<------------- save recipe modal buttons----------------->*//
//*<------------------------------------------------------->*//

saveButton.addEventListener('click', function(event){
  event.preventDefault();
  console.log("saveButton Works")
  
      
    localStorage.setItem('url', JSON.stringify(bookmarks));
    console.log(localStorage.getItem("url"))
    onclick = "window.open('./bookmarks.html')"

    //* remember to clear the local storage on page load

})
}
catch(error){
console.log(error);
}
//https://api.spoonacular.com/recipes/715477/card?apiKey=63aa00c3b9a14b4d81e35606c1528c2c
//https://api.spoonacular.com/recipes/716429/card?apiKey=63aa00c3b9a14b4d81e35606c1528c2c