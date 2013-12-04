/*
function DribblerListCtrl($scope, $http) {
  $http.jsonp(' zhttp://api.dribbble.com/shots/everyone?output=jsonp&callback=process=JSON_CALLBACK').success(function(data) {

    $scope.dribblers = data.shots;    	
  });
 
  $scope.orderProp = 'title';
}
 
var dribblercatApp = angular.module('dribblercatApp',[]);
dribblercatApp.controller('DribblerListCtrl', DribblerListCtrl);*/




'use strict';

function searchNasaListCtrl($scope, $http) {
  /*$http.jsonp('http://data.nasa.gov/api/get_search_results/?search&output=jsonp&callback=process=JSON_CALLBACK').success(function(data) {

    $scope.searchNasa = data.shots;    	
  });*/

	$http.jsonp('http://data.nasa.gov/api/get_search_results/?search=carbon+cycle&output=jsonp&callback=process=JSON_CALLBACK').success(function(data) {

		var posts = data.posts;

    $scope.searchNasa = posts.title;    	
  });
 
  $scope.orderProp = 'title';
}
 
var searchNasaApp = angular.module('searchNasaApp',[]);
searchNasaApp.controller('searchNasaListCtrl', searchNasaListCtrl);
//http://data.nasa.gov/api/get_search_results/?search=carbon+cycle#sthash