
    var app = angular.module("myApp", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "1_home.html"
            })
            .when("/gallery", {
                templateUrl: "2_gallery.html"
            })
            .when("/event", {
                templateUrl: "3_event.html"
            })
            .when("/booking", {
                templateUrl: "4_booking.html"
            })
            .when("/contact", {
                templateUrl: "contact.html"
            })
            .when("/feedback", {
                templateUrl: "7_feedback.html"
            })
            .when("/bristlenose", {
                templateUrl: "Bristlenose.html"
            })
            .when("/glass", {
                templateUrl: "GlassCatfish.html"
            })
            .when("/blackneon", {
                templateUrl: "Blackneon.html"
            })
            .when("/blue", {
                templateUrl: "Bluearaca.html"
            })
            .when("/honey", {
                templateUrl: "Honey.html"
            })
            .when("/harlequin", {
                templateUrl: "Harlequin.html"
            })
            .when("/discus", {
                templateUrl: "Discus.html"
            });
    });
app.run(function($rootScope,$http){
    $rootScope.data=[];
    $http.get("index.json").then(function(r){
    $rootScope.data = r.data.Fish;
    });
    });
app.controller("homectrol",function($scope){
    $scope.sortType     = 'id'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchName   = '';     // set the default search/filter term

});

app.controller("contactCtrol",function($scope){
    $scope.submit = function(){
        alert("Succussed!!!");
    };
});



app.controller("footerCrol", ["$scope", "$interval", function($scope, $interval) {
    $scope.currentTime = new Date();
  
    var updateTime = function() {
      $scope.currentTime = new Date();
    };
  
    // Cập nhật thời gian mỗi giây
    var timer = $interval(updateTime, 1000);
  
    // Xóa bộ đếm khi controller bị hủy
    $scope.$on('$destroy', function() {
      $interval.cancel(timer);
    });
  }]);
  
  
// Nhan
    // let app = angular.module("myApp", []);
app.controller("bookingCtrl", function ($scope) {
        $scope.submitBK = function(){
            alert("Booking successfull");
            
        };


});


app.controller("fbCtrl", function($scope){
    $scope.submitFB = function(){
        alert("Thanks you for your Feedback");
    };
});

