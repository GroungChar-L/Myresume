/**
 * Created by Administrator on 2016/5/26.
 */



var app = angular.module("infoApp", [])

    .controller("infoController", function ($scope) {
        $scope.face=true
        $scope.jibenxinxi=false;
        $scope.jiben = function(){
            $scope.face=!$scope.face;
            $scope.jibenxinxi = !$scope.jibenxinxi;
        }

        $scope.showbiye = function () {
            $('#saveModal').modal('show');
        }
        console.log("Enter the info");
    })
