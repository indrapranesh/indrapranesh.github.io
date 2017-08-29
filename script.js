var cities = [
              {
                  city : 'Erode',
                  desc : 'GH 108',
                  phone: '9998887771',
                  lat : 11.3410,
                  long : 77.7172
              },
              {
                  city : 'Perundurai',
                  desc : 'GH 108',
                  phone: '9998887772',
                  lat : 11.2681,
                  long : 77.5906
              },
              {
                  city : 'Chennimalai',
                  desc : '108',
                  phone: '9998887773',
                  lat : 11.1606789,
                  long : 77.6015692
              },
              {
                  city : 'Nambiyur',
                  desc : '108',
                  phone: '9998887774',
                  lat : 11.3583519,
                  long : 77.3136663
              }
          ];


	// create the module and name it lifeSaverBot
	var lifeSaverBot = angular.module('lifeSaverBot', ['ngRoute']);

	// configure our routes
	lifeSaverBot.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	lifeSaverBot.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'LifeSaverBot Home Page';

		var latlng = {lat: 11.2681, lng: 77.5906};

		var mapOptions = {
		  zoom: 10,
		  center: new google.maps.LatLng(latlng.lat, latlng.lng)                  
		}

		$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

		$scope.markers = [];

		var infoWindow = new google.maps.InfoWindow();

		var createMarker = function (info){
		  
		  var marker = new google.maps.Marker({
		      map: $scope.map,
		      position: new google.maps.LatLng(info.lat, info.long),
		      title: info.city
		  });
		  
		  marker.content = '<div class="infoWindowContent">' + info.desc + '<br/ > ph : +91 ' + info.phone + '</div>';
		  
		  google.maps.event.addListener(marker, 'click', function(){
		      infoWindow.setContent('<h5>' + marker.title + '</h5>' + marker.content);
		      infoWindow.open($scope.map, marker);
		  });
		  
		  $scope.markers.push(marker);
		  
		}  

		for (i = 0; i < cities.length; i++){
		  createMarker(cities[i]);
		}


	});

	lifeSaverBot.controller('aboutController', function($scope) {
		$scope.message = 'LifeSaverBot About Page.';
	});

	lifeSaverBot.controller('contactController', function($scope) {
		$scope.message = 'LifeSaverBot Contact Page';
	});
