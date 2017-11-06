/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myApp = angular.module("myApp", [ "ngRoute", "ngAnimate", "ui.bootstrap" ]);
myApp.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "view/home.html",
		controller : "ItemListCtrl"
	}).when("/login", {
		templateUrl : "view/login.html",
		controller : "loginCtrl"
	}).when("/kart", {
		templateUrl : "view/kart-list.html",
		controller : "ItemListCtrl"
	}).when("/order", {
		templateUrl : "view/order.html",
		controller : "orderCtrl"
	}).when("/contact", {
		templateUrl : "view/contactUs.html",
		controller : ""
	}).when("/terms", {
		templateUrl : "view/terms.html",
		controller : ""
	}).when("/policy", {
		templateUrl : "view/policy.html",
		controller : ""
	}).otherwise({
		redirectTo : "/"
	});
});
myApp.directive("headerDirective", function() {
	return {
		restrict : "E",
		templateUrl : "view/header.html",
		conntroller : "headerCtrl"
	};

});

myApp.factory("kartServices", function() {
	var kart = [];
	return {
		getKart : function() {
			return kart;
		},
		addToKart : function(item) {
			kart.push(item);
		},
		buy : function(item) {
			alert("Thanks for buying: ", item.name);
		}
	};
});

myApp.factory("itemServices", function() {
	// create store
	// var myStore = new store();

	// create shopping cart
	var myCart = new shoppingCart("myApp");
	// "ITEMNO":"string",
	// "ITEMCATOGARY ":"string",
	// "QUANTITY ":"string",
	// "ITEMDESC ":"string",
	// "PRICE ":"string",
	// "ITEM-IMAGE":"string"
	
	
	var items = [ {
		itemNo : 01,
		itemCatagory : "",
		itemName : "MEGARITE MPS 200ML LIQUID",
		itemDesc : "Aluminium hydroxide 250 MG+Dimethicone 50 MG+Magnesium hydroxide 250 MG /5ML",
		itemQuantity : "",
		imageSrc:"./img/images.jpg",
		categoryName : "Antacids, Antireflux Agents &amp; Antiulcerants",
		itemPrice : 70
	}, {
		itemNo : 02,
		itemCatagory : "",
		itemName : "7 LA SF 200ML SYRUP",
		itemDesc : "Aluminium hydroxide 250 MG+Magnesium hydroxide 250 MG+Oxetacaine 10 MG+Simethicone 50 MG ",
		itemQuantity : "",
		categoryName : "Antacids, Antireflux Agents &amp; Antiulcerants",
		imageSrc:"./img/index2.jpg",
		itemPrice : 65.80
	}, {
		itemNo : 03,
		itemCatagory : "",
		itemName : "ACE PROXYVON CR TABLET",
		itemDesc : "Aceclofenac 200 MG+Rabeprazole 20 MG ",
		itemQuantity : "",
		categoryName:"Haemostatics",
		imageSrc:"./img/index1.jpg",
		itemPrice : 140
	}, {
		itemNo : 04,
		itemCatagory : "",
		itemName : "ACILOC S 200ML SYRUP",
		itemDesc : "Magaldrate 540 MG+Oxetacaine 10 MG+Simethicone 20 MG ",
		itemQuantity : "",
		imageSrc:"./img/index.jpg",
		categoryName : "Antacids, Antireflux Agents &amp; Antiulcerants",
		itemPrice : 94.20
	}, {
		itemNo : 05,
		itemCatagory : "",
		itemName : "DENTOGEL TUBE 15GM GEL",
		itemDesc : "Benzalkonium chloride 0.01 %W/W+Choline Salicylate 8.7 %W/W+Lignocaine 2 %W/W ",
		itemQuantity : "",
		categoryName:"Haemostatics",
		imageSrc:"./img/GRANULES.jpg",
		itemPrice : 75
	}, {
		itemNo : 06,
		itemCatagory : "",
		itemName : "ORAHELP 15GM GEL",
		itemDesc : "Benzalkonium chloride 0.01 %W/W+Choline Salicylate 8.7 %W/W+Lignocaine 2 %W/W ",
		itemQuantity : "",
		imageSrc:"./img/images1.jpg",
		categoryName : "Calcium Antagonists",
		itemPrice : 200
	}, {
		itemNo : 07,
		itemCatagory : "",
		itemName : "DIOVOL FORTE LA 170ML SYRUP",
		itemDesc : "Aluminium hydroxide 300 MG+Dimethicone 40 MG+Magnesium hydroxide 250 MG+Oxetacaine 10 MG+Sorbitol 1000 MG ",
		itemQuantity : "",
		imageSrc:"./img/images2.jpg",
		categoryName : "Calcium Antagonists",
		itemPrice : 230
	}, {
		itemNo : 08,
		itemCatagory : "",
		itemName : "CARPELA 21S KIT",
		itemDesc : "Cyproterone acetate 2 MG+Ethinyl estradiol 0.035 MG ",
		itemQuantity : "",
		imageSrc:"./img/images3.jpg",
		categoryName : "Antidiarrheals",
		itemPrice : 980
	}, {
		itemNo : 09,
		itemCatagory : "",
		itemName : "ELESTRA 21S KIT TABLET",
		itemDesc : "Cyproterone acetate 2 MG+Ethinyl estradiol 0.035 MG ",
		itemQuantity : "",
		imageSrc:"./img/images4.jpg",
		categoryName : "Antidiarrheals",
		itemPrice : 730
	}, {
		itemNo : 010,
		itemCatagory : "",
		itemName : "KRIMSON 35MG 21S TABLET",
		itemDesc : "Cyproterone acetate 2 MG+Ethinyl estradiol 0.035 MG ",
		itemQuantity : "",
		imageSrc:"./img/images2.jpg",
		categoryName : "Antidiarrheals",
		itemPrice : 120
	}, {
		itemNo : 011,
		itemCatagory : "",
		itemName : "HERFACE 21S KIT",
		itemDesc : "Cyproterone acetate 2 MG+Ethinyl estradiol 0.035 MG ",
		itemQuantity : "",
		imageSrc:"./img/images6.jpg",
		categoryName : "GIT Regulators &amp; Anti-Inflammatories",
		itemPrice : 350
	}, {
		itemNo : 012,
		itemCatagory : "",
		itemName : "ALPRAX FORTE TABLET",
		itemDesc : "Alprazolam 0.5 MG+Sertraline 50 MG ",
		itemQuantity : "",
		imageSrc:"./img/images7.jpg",
		categoryName : "GIT Regulators &amp; Anti-Inflammatories",
		itemPrice : 400
	} ];
	return {

		cart : myCart,
		getItems : function() {
			return items;
		},
		getProduct : function(itemNo) {
			for (var i = 0; i < items.length; i++) {
				if (items[i].itemNo == itemNo)
					return items[i];
			}
			return null;
		}

	};
});

// myApp.controller("KartListCtrl", function ($scope, kartServices) {
// $scope.kart = kartServices.getKart();
// $scope.buy = function (item) {
// kartServices.buy(item);
// };
// $scope.increaseItemCount = function(item) {
// console.log("item"+item);
// item.quantity++;
// };
// $scope.decreaseItemCount = function(item) {
// if (item.quantity > 0) {
// item.quantity--;
// }
//
// };
// $scope.sumCalc = function() {
// var sum = 0;
// angular.forEach($scope.itemList, function(item, index) {
// sum += parseInt(item.quantity,10);
// });
// return sum;
// };
// });

myApp.controller("ItemListCtrl", function($scope, $log, itemServices,
		kartServices) {

	var categories=[
		{categoryNo : 01,
		categoryName : "Antacids, Antireflux Agents &amp; Antiulcerants",
		on: false},
		{categoryNo : 02,
			on: false,
		categoryName : "GIT Regulators &amp; Anti-Inflammatories"},
		{categoryNo : 03,
			on: false,
	    categoryName : "Antispasmodics"},
	    
		{categoryNo : 04,
	    	on: false,
		categoryName : "Antidiarrheals"},
		{categoryNo : 05,
			on: false,
		categoryName : "Laxatives,Purgatives"},
		{categoryNo : 06,
			on: false,
		categoryName : "Digestives and Antiflatulents"},
		{categoryNo : 07,
			on: false,
		categoryName : "Cholagogues, Cholelitholytics &amp; Hepatic Protectors"},
		{categoryNo : 08,
			on: false,
		categoryName : "Anorectal Preparations"},
		{categoryNo : 09,
			on: false,
		categoryName : "Antiemetics"},
		{categoryNo : 10,
			on: false,
		categoryName : "Other Gastrointestinal Drugs"},
		{categoryNo : 11,
			on: false,
		categoryName : "Cardiac Drugs"},
		{categoryNo : 12,
			on: false,
			categoryName : "Anti-Anginal Drugs"},
			{categoryNo : 13,
				on: false,
			categoryName : "ACE Inhibitors / Direct Renin Inhibitors"},
			{categoryNo : 14,
				on: false,
		    categoryName : "Beta-Blockers"},
			{categoryNo : 15,
		    	on: false,
			categoryName : "Calcium Antagonists"},
			{categoryNo : 16,
				on: false,
			categoryName : "Angiotensin II Antagonists"},
			{categoryNo : 17,
				on: false,
			categoryName : "Other Antihypertensives"},
			{categoryNo : 18,
				on: false,
			categoryName : "Diuretics"},
			{categoryNo : 19,
				on: false,
			categoryName : "Antidiuretics"},
			{categoryNo : 20,
				on: false,
			categoryName : "Peripheral Vasodilators &amp; Cerebral Activators"},
			{categoryNo : 21,
				on: false,
			categoryName : "Vasoconstrictors"},
			{categoryNo : 22,
				on: false,
			categoryName : "Dyslipidaemic Agents"},
			{categoryNo : 23,
				on: false,
				categoryName : "Haemostatics"},
				{categoryNo : 24,
					on: false,
				categoryName : "Anticoagulants and Antiplatelets"},
				{categoryNo : 25,
					on: false,
				categoryName : "Fibrinolytics &amp; Thrombolytics"},
				{categoryNo : 26,
					on: false,
				categoryName : "Phlebitis &amp; Varicose Preparations"},
				{categoryNo : 27,
					on: false,
				categoryName : "Haemorrheologicals"},
				{categoryNo : 28,
					on: false,
					categoryName : "Haematopoietic Agents"},
					{categoryNo : 29,
						on: false,
					categoryName : "Other Cardiovascular Drugs"}
													
		];
	$scope.categories=categories;
	$scope.items = itemServices.getItems();
	console.log($scope.items);
	var self = this;
	  
	  // Variables - Public
	  self.filter = {};
	$scope.cart = itemServices.cart;
	
//	$rootScope.$on("logoutfunc", function(data) {
//		console.log("logoutfunc" + data);
//		
//
//	});
	// $scope.addToKart = function (item) {
	// kartServices.addToKart(item);
	// };

	$scope.totalItems = 64;
	$scope.currentPage = 4;

	$scope.setPage = function(pageNo) {
		$scope.currentPage = pageNo;
	};

	$scope.pageChanged = function() {
		$log.log('Page changed to: ' + $scope.currentPage);
	};

	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;
});

myApp.controller("orderCtrl",
		function($scope, $log, itemServices) {

			$scope.cart = itemServices.cart;
		});

myApp.directive('backImg', function() {
	return function(scope, element, attrs) {
		var url = attrs.backImg;
		element.css({
			'background-image' : 'url(' + url + ')',
			'background-repeat' : 'no-repeat',
			
			'background-position' : '34% 14%'
			
			
			    
			 
		});
	};
});
myApp.directive('backImg1', function() {
	return function(scope, element, attrs) {
		var url = attrs.backImg1;
		element.css({
			'background-image' : 'url(' + url + ')',
			'background-repeat' : 'no-repeat',
			
			'background-position' : '34% 14%',
			'height':'272px'
			
			
			    
			 
		});
	};
});
myApp.filter('slice', function() {
	  return function(arr, start, end) {
	    return arr.slice(start, end);
	  };
	});

myApp.controller("headerCtrl", function($scope, $rootScope, itemServices) {
	$scope.isLogin = false;

	$rootScope.$on("someEvent", function(data) {
		console.log("someEvent" + data);
		$scope.isLogin = data;

	});

	$scope.logout = function() {
		$scope.isLogin = false;
		//$rootScope.$emit('logoutfunc', "logout");
	}

	$scope.checkWhetherLoginorNot = function() {

		if ($scope.isLogin) {
			location.href = "#/kart"
		}
	}
	$scope.cart = itemServices.cart;
	$scope.items = $scope.cart.items;
});
myApp.filter('customFilter', function() {
    return function(input, techs) {
    	console.log(input+" customFilter"+techs);
      if(!techs || techs.length === 0) return input;
      var out = [];
      angular.forEach(input, function(item) {
        angular.forEach(techs, function(tech) {
          if (item.categoryName === tech.categoryName) {
            out.push(item);
          }
        });
      });
      return out;
    }
  });

myApp.controller("loginCtrl", function($scope, $rootScope) {
	
	$rootScope.username = ["Username1", "Username2", "Username3","Username4"];
	$rootScope.password=["password1","password2","password3","password4"];
	$scope.userName="";
	$scope.password="";
	console.log($rootScope.username+" checkLogin "+$rootScope.password);
	$scope.isLoginavailable = false;
	// $scope.$emit('someEvent', $scope.isLoginavailable);
	$scope.checkLogin = function() {
		console.log($scope.userName+" checkLogin "+$scope.password);
		if($scope.userName){
		var a=$rootScope.username.indexOf($scope.userName);
		console.log(" checkLogin "+a);
		}
		if($scope.password && $scope.userName && $scope.userName==$rootScope.username[a] && $scope.password==$rootScope.password[a]){
			$scope.isLoginavailable = true;
			console.log("isLoginavailable" + $scope.isLoginavailable);
			$rootScope.$emit('someEvent', $scope.isLoginavailable);
			location.href = "#/"
		}
		else{
			alert("invalid username or password")
		}
		
		
	}
	// $scope.$watch('isLoginavailable', function() {
	// // alert('hey, myVar has changed!');
	// console.log("data"+$scope.isLoginavailable);
	//	        
	// });
	// $scope.kart = kartServices.getKart();

	$("#yourphone").keypress(function(e) {
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
		}
		var curchr = this.value.length;
		var curval = $(this).val();
		if (curchr == 3) {
			$(this).val(curval + "-");
		} else if (curchr == 7) {
			$(this).val(curval + "-");
		}
		$(this).attr('maxlength', '12');
	});
	
	
	$scope.addUserName=function(){
		console.log($scope.confirmemail+" addUserName "+$scope.confirmPassword);
		$rootScope.username.push($scope.confirmemail);	
		$rootScope.password.push($scope.confirmPassword);	
	}
});
