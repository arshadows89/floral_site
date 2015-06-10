// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap-sprockets
//= require imagesloaded
$(document).ready(function() {
	(function( $ ) {

	    var $container = $('.masonry-container');
	    $container.imagesLoaded( function () {
	        $container.masonry({
	            columnWidth: '.item',
	            itemSelector: '.item'
	        });
	    });
	    
	    //Reinitialize masonry inside each panel after the relative tab link is clicked - 
	    $('a[data-toggle=tab]').each(function () {
	        var $this = $(this);

	        $this.on('shown.bs.tab', function () {
	        
	            $container.imagesLoaded( function () {
	                $container.masonry({
	                    columnWidth: '.item',
	                    itemSelector: '.item'
	                });
	            });

	        }); //end shown
	    });  //end each
	    
	})(jQuery);
});