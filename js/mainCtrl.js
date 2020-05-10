'use strict';

angular.module('appSpline').controller('mainCtrl', function ($scope) {
	$scope.isUserLoggedIn = true;
	$scope.$on("$viewContentLoaded", function(){
		//$(document).ready( function() {
		    $('#carousel').carousel({
		        interval: 1800
		    });
		    
		    var clickEvent = false;
		    $('#carousel').on('click', '.nav a', function() {
		            clickEvent = true;
		            $('.nav li').removeClass('active');
		            $(this).parent().addClass('active');        
		    }).on('slid.bs.carousel', function(e) {
		        if(!clickEvent) {
		            var count = $('.nav li[data-slide-to]').size() -1;
		            var current = $('.nav li.active');
		            var id = parseInt(current.attr('data-slide-to'));
		            if(count == id) {
		            	current.removeClass('active');
		                $('.nav li[data-slide-to]').first().addClass('active');    
		            } else {
		            	current.removeClass('active').next().addClass('active');
		            }
		        }
		        clickEvent = false;
		    });
		//});
	});
});