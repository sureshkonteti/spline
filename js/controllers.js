(function(){

	angular.module('appSpline').controller('contactCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.saveData = function(isValid){
			$scope.success = true;
			$scope.error = false;

			$scope.sendMessage = function(input){
				$http({
					method:'post',
					url: 'contactForm.php',
					data: angular.element.param(input),
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
				})
				.success( function(data){
					if(data.success){
						$scope.success = true;					
					}
					else{
						$scope.error = true;
						alert('Form is not valid');
					}
				});
			}

		}
	}]);


})();