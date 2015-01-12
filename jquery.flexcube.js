/**
 * flexCube.js
 * jQuery Plugin.
 */


;(function($) {
    $.fn.equalize = function(options) {
    	"use strict";
    	  
        var $containers = this, // this is the jQuery object
            children    = false,
            reset       = false,
            equalize,
            type,
    		childrenArray;
    
        // when options are an object
        if ($.isPlainObject(options)) {
          equalize = options.equalize || 'height';
          children = options.children || false;
          reset    = options.reset || false;
        } else { // otherwise, a string was passed in or default to height
          equalize = options || 'height';
        }
    
        if (!$.isFunction($.fn[equalize])) { return false; }
    
        // determine if the height or width is being equalized
        type = (equalize.indexOf('eight') > 0) ? 'height' : 'width';
    	  
    	 
    	childrenArray = children.split(',');
    	 
    	 /*for (var i = 0; i < childrenArray.length; i++) {
    	  alert(childrenArray[i]);
    	} */ 
    	  
    	 
    	return $containers.each(function() {
              // when children exist, equalize the passed in child elements, otherwise equalize the children
    	  for (var i = 0; i < childrenArray.length; i++) {	
    		  var $children = (children) ? $(this).find(childrenArray[i]) : $(this).children(),
    			  max = 0; // reset for each container
    
    		  $children.each(function() {
    			var $element = $(this),
    				value;
    			if (reset) { $element.css(type, ''); } // remove existing height/width dimension
    			value = $element[equalize]();          // call height(), outerHeight(), etc.
    			if (value > max) { max = value; }      // update max
    		  });
    
    		  $children.css(type, max +'px'); // add CSS to children
    	  }
        });
    	  
    
     };
 
}(jQuery));
