(function() {


    'use strict';
    
     angular.module('theApp', [])
        .controller('theController', theController);

        theController.$inject = ['$scope'];

        function theController($scope) {

          
             
            $scope.lunchItems = "list comma separated dishes you usually have for lunch";
            $scope.theMessage = "Enjoy!";
            
            $scope.btnCheck = function () { 
            
         
             var theArray = SplitTheString($scope.lunchItems);
             if (theArray == "") {
                $scope.theMessage = "Please enter data first"
                
             }
               else if (theArray.length > 3 ) {
                    $scope.theMessage = "Too Much!"
                } else{
                    $scope.theMessage = "Enjoy!"
                } ;
            
            }
            
            function SplitTheString(theString) {
                return theString.split(",");
            };
        };
     
  
    })();


 