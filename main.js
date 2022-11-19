//* - generate weekly meal plan url - https://api.spoonacular.com/mealplanner/generate -- https://api.spoonacular.com/mealplanner/generate?timeFrame=week

//* - generate one meal plan url - https://api.spoonacular.com/mealplanner/generate -- https://api.spoonacular.com/mealplanner/generate?timeFrame=day

//* -search recipies by ingredients - GET https://api.spoonacular.com/recipes/findByIngredients?apiKey=63aa00c3b9a14b4d81e35606c1528c2c


//*api key: ?apiKey=63aa00c3b9a14b4d81e35606c1528c2c 



//*<------------- querySelectors ------------->*//
//*<----------------------------------------->*//




//*<------------- API Fetch Call ------------->*//
//*<----------------------------------------->*//

  fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey=63aa00c3b9a14b4d81e35606c1528c2c')
    .then(function(response){
        console.log("json request is working")
          return response.json()
    })
    .then(function(data){
      console.log(data);
       
    });












// let mealPlanAPIrequest = async () => {
//   let response = await fetch('https://api.spoonacular.com/mealplanner/generate -- https://api.spoonacular.com/mealplanner/generate?apiKey=YOUR-API-KEY=63aa00c3b9a14b4d81e35606c1528c2ctimeFrame=day');
  
//   let data = await response.json();
//   console.log(data);
//   //img.src = data.message

//   console.log(data);
//   };