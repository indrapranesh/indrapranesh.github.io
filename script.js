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
              },
	{
                  city : 'bhavanisagar',
                  desc : '108',
                  phone: '9998887774',
                  lat : 11.478237,
                  long : 77.1236157
              },
        
        
              {
                  city : 'erode fire station',
                  desc : '108',
                  phone: '9998887774',
                  lat : 11.332618,
                  long : 77.7249898
              },
          
               {
                  city : 'pulliyampati',
                  desc : '108',
                  phone: '9998887774',
                  lat : 11.3543302,
                  long : 77.149472
              },
        
             {
                  city : 'karungalpalayam',
                  desc : '108',
                  phone: '9998887774',
                  lat : 11.3528028,
                  long :  77.7268968
              },
            
          
               {
                
                  city : 'thalavadi',
                  desc : '108',
                  phone: '9998887774',
                  lat  : 11.7787624 ,
                  long : 77.149472 
                },
           
           
          {
                
                  city : 'cift erode gh',
                  desc : '108',
                  phone: '9998887775',
                  lat  : 11.3395825 ,
                  long : 77.7149836 
                },
           
               {
                
                  city : 'kodumudi',
                  desc : '108',
                  phone: '9998887776',
                  lat  : 11.0739022 ,
                  long : 77.8839768
                },
           
                  {
                
                  city : 'gopi',
                  desc : '108',
                  phone: '9998887777',
                  lat  : 11.4544518 ,
                  long : 77.4134442 
                },
           
            {
                
                  city : 'anthiyu',
                  desc : '108',
                  phone: '9998887778',
                  lat  : 11.5791226 ,
                  long : 77.5721882
                },
           
           {
                
                  city : 'kavinthapadi',
                  desc : '108',
                  phone: '9998887779',
                  lat  : 11.4277735 ,
                  long : 77.546693
                },
           
               {
                
                  city : 'bhavanii',
                  desc : '108',
                  phone: '9998887780',
                  lat  : 11.4466914 ,
                  long : 77.6634047
                },
           
             {
                
                  city : 'sathy',
                  desc : '108',
                  phone: '9998887781',
                  lat  : 11.5026891 ,
                  long : 77.2200664
                },
           
           {
                
                  city : 'ammapettai',
                  desc : '108',
                  phone: '9998887782',
                  lat  : 11.62089,
                  long : 77.7379489
                },
           
            {
                
                  city : 'lakkapuram',
                  desc : '108',
                  phone: '9998887784',
                  lat  : 11.3068013,
                  long : 77.74866112
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
