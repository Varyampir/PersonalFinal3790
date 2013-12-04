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
var loc_api_images = [];

function locListCtrl($scope, $http) {  

  

  callLOC($http);

  var singleImg = loc_api_images[0];

  
}
 
function callLOC($http) {
  $http.jsonp('http://loc.gov/pictures/collections?fo=json&callback=process=JSON_CALLBACK').success(function(data) {

    loc_api_images = data.collections;
  });
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