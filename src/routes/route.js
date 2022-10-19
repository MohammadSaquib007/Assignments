const express = require('express');

const router = express.Router();


// //problem1
//Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.


router.get('/movies', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let movies =['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

    res.send(movies)
})


    ///problem2
    //Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api



    router.get('/movies/:indexMovies',function(req,res){

     
      const movies= ['dilber','kgf','laila','sultan','hella']

      //for(let i=0;i<movies.length;i++){
        const index = req.params.indexMovies
       
        
     return res.send(movies[index])
       
     // } 
    })



//problem3
//Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message



    router.get('/movies/:indexNumber', function(req, res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let myParams = req.params.indexNumber
    if(myParams.indexNumber < movies.length){
        console.log(movies[myParams.indexNumber])
        res.send("check the console")
    }else{
        res.send("Please enter the correct index less than " + movies.length )
    }
})



//problem4
//Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. 
//Each movie object should have values - id, name. An example of movies array is 



router.get('/films', function(req,res){


let films=[ {
  id : 1,
  name: "The Shining"
 }, {
  id: 2,
  name: "Incendies"
 }, {
  id: 3,
  name: "Rang de Basanti"
 }, {
  id: 4,
  name: "Finding Nemo"
 }]

 res.send(films)
})




//problem5
//Write api GET /films/:filmId where filmId is the value received in request path params.
// Use this value to return a movie object with this id. In case there is no such movie present in the array,
// return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 


router.get('/films/:filmId', function(req, res){
  let a = [ {
      id: 1,
      name: 'The Shining'
     }, {
      id: 2,
      name: 'Incendies'
     }, {
      id: 3,
      name: 'Rang de Basanti'
     }, {
      id: 4,
      name: 'Finding Nemo'
     }]
  
  let myParams = req.params
  // let idIndex = id.f
  
      if(myParams.filmId == 0){
          res.send(a[myParams.filmId])
      }else if(myParams.filmId == 1){
          res.send(a[myParams.filmId])
      }else if(myParams.filmId == 2){
          res.send(a[myParams.filmId])
      }else if(myParams.filmId == 3){
          res.send(a[myParams.filmId])
      }else{
          res.send("No movie exit with this id")
      }
      
    })



  




 module.exports = router;