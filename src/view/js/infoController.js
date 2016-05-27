/**
 * Created by Administrator on 2016/5/26.
 */





app
    .controller("infoController", ["$scope", "dataservice", function ($scope, dataservice) {
        $scope.my = dataservice.datas;
        console.log("222",$scope.my.name)
        $scope.face =$scope.my.face;
        $scope.jibenxinxi = false;
        $scope.jiben = function () {
            $scope.face = !$scope.face;
            $scope.jibenxinxi = !$scope.jibenxinxi;
        }

        $scope.showbiye = function () {
            $('#saveModal').modal('show');
        }
        console.log("Enter the info");
    }])
