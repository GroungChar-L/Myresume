/**
 * Created by Administrator on 2016/5/26.
 */





app.controller("infoController", ["$scope", "dataservice", function ($scope, dataservice) {
    $scope.baseinfo = dataservice.getbasedatas();
    $scope.workinfo = dataservice.getworkinfo();
    console.log("222", $scope.baseinfo)


    $scope.jiben = function () {
        $scope.baseinfo.jibenxinxi = true;
        $scope.baseinfo.face = false;
        $scope.baseinfo.work = false;

    }
    $scope.workjob = function () {
        $scope.baseinfo.jibenxinxi = false;
        $scope.baseinfo.face = false;
        $scope.baseinfo.work = true;
    }

    $scope.showbiye = function () {
        $('#saveModal').modal('show');
    }
    console.log("Enter the info");
}])
