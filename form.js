document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
});

angular.module("bot",[]).controller("catbot", function($scope){
    $scope.name=""
    $scope.dob=""
    $scope.gender=""
    $scope.street=""
    $scope.city=""
    $scope.state=""
    $scope.pincode=""
    $scope.country=""
    $scope.email=""
    $scope.number=""

    $scope.name_check = true
    $scope.dob_check = true
    $scope.gender_check = true
    $scope.address_check = true
    $scope.email_check = true
    $scope.number_check = true

    $scope.checkform = function () {
        if ($scope.name=="") {
            $scope.name_check = false
        }
        else{
            $scope.name_check = true
        }
        if ($scope.dob=="") {
            $scope.dob_check = false
        }
        else{
            $scope.dob_check = true
        }
        if ($scope.gender=="") {
            $scope.gender_check = false
        }
        else{
            $scope.gender_check = true
        }
        if ($scope.street=="" || $scope.city=="" || $scope.state=="" || $scope.pincode=="" || $scope.country=="") {
            $scope.address_check = false
        }
        else{
            $scope.address_check = true
        }
        if ($scope.email=="") {
            $scope.email_check = false
        }
        else{
            $scope.email_check = true
        }
        if ($scope.number=="") {
            $scope.number_check = false
        }
        else{
            $scope.nUMBER_check = true
        }
    }
})
