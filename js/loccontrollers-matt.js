'use strict';

/*function locListCtrl($scope, $http) {
  /*$http.jsonp('http://data.nasa.gov/api/get_search_results/?search&output=jsonp&callback=process=JSON_CALLBACK').success(function(data) {

    $scope.searchNasa = data.shots;     
  });*/

  /*var loc_api_images = [];

  $http.jsonp('http://loc.gov/pictures/collections?fo=json&callback=process=JSON_CALLBACK').success(function(data) {

    //$scope.searchLoc = data.collections;
    loc_api_images = data.collections;
  });
 
  //$scope.orderProp = 'title';

  var searchLoc = angular.module('searchLoc',[]);
//searchNasaApp.controller('locListCtrl', locListCtrl);
}*/

var varVar = [];


/*first function (runs automatically) {

  getApiStuffs();
  createImage();
  ...start the timer-ey stuff.
}

function getApiStuffs(){}

function createImage(){}
*/

/*Setting up a var to hold the list of images returned by the API call.*/
var loc_api_images = [];

/*This var holds a single img from the previous array.*/
var singleImg;

/*This holds the index of the current image we're viewing*/
var currentIndex = 0;

/*Calling the API*/
function locListCtrl($scope, $http) {
  $http.jsonp('http://loc.gov/pictures/collections?fo=json&callback=process=JSON_CALLBACK').success(function(data) {

    /*This is putting the info from the API call into the var above.*/
    loc_api_images = data.collections;

    /*This puts the frist img from the array into the var for gallery purposes.*/
    singleImg = [loc_api_images[currentIndex]];
    console.log(singleImg);

    /*Set the $scope.whatever we need (.whatever being the class of the element/tag) to the singleImg.*/
    $scope.searchLoc = singleImg;
  }); 

  var myTimmer = setInterval(function(){
    console.log("trying to refresh");
    if(currentIndex === loc_api_images.length - 1) {
      currentIndex = 0;
    }
    else {
      currentIndex = currentIndex + 1;
    }

    singleImg = [loc_api_images[currentIndex]];
    $scope.searchLoc = singleImg;
    
  },500);

  function updateImage(){
    console.log("trying to refresh");
    if(currentIndex === loc_api_images.length - 1) {
      currentIndex = 0;
    }
    else {
      currentIndex = currentIndex + 1;
    }

    singleImg = [loc_api_images[currentIndex]];
    $scope.searchLoc = singleImg;

  };

}

var searchLoc = angular.module('searchLoc',[]);






//http://data.nasa.gov/api/get_search_results/?search=carbon+cycle#sthash
//http://loc.gov/pictures/item/89709841/?fo=json

//1 - declare var
//2 - create JSON_CALLBACK
//3 - get data returned by data.collections
//4 - DONE!
//5 - Do a little dance!

//1 - declare a var
//2 - call the $http JSONP for the api
//3 - the $http JSONP will be a build in data function and within that callback func we'll set the var declared in //1 to the value in .data
//4 - we'll call a function to grab the image or url or other data to display and make an <image /> from it.
//5 - have a timer or setInterval and use that to updated the data to the next image in the array.
//6 - lather, rinse, repeat.

/*
create a variable to hold the nth item in the array
pass that variable to $scope.whateverClass, which will
use its properties to make the image
when the timer/whatever it's called ticks, change the values in the 
single item variable and it SHOULD update the image automatically...
*/