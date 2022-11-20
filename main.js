//* - generate weekly meal plan url - https://api.spoonacular.com/mealplanner/generate -- https://api.spoonacular.com/mealplanner/generate?timeFrame=week

//* - generate one meal plan url - https://api.spoonacular.com/mealplanner/generate -- https://api.spoonacular.com/mealplanner/generate?timeFrame=day

//* -search recipies by ingredients - GET https://api.spoonacular.com/recipes/findByIngredients?apiKey=63aa00c3b9a14b4d81e35606c1528c2c


//*api key: ?apiKey=63aa00c3b9a14b4d81e35606c1528c2c 



//*<------------- gloabal variables ------------->*//
//*<----------------------------------------->*//
let myAPIKey = "?apiKey=63aa00c3b9a14b4d81e35606c1528c2c";
let searchUrl = "https://api.spoonacular.com/recipes/findByIngredients";


//*<------------- querySelectors ------------->*//
//*<----------------------------------------->*//
let userInput = document.querySelector('#userInput');
let searchButton = document.querySelector('#searchButton')






//*<------------- API Fetch Call ------------->*//
//*<----------------------------------------->*//

searchButton.addEventListener('click', (event) => {
    console.log("Search Button Works")
    console.log("User Iput is working and prints out:")
    console.log(userInput.value);  
  event.preventDefault();

  fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=63aa00c3b9a14b4d81e35606c1528c2c&${userInput}`)
    .then(function(response){
          return response.json()
    })
    .then(function(data){
      console.log(data);
           })

          });