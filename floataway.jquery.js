(function($){
    $.fn.floatAway = function() {  
        return this.each(function() {
                var that = $(this);
            that.animate({
                    'margin-right': '-40px',
                    'margin-top': '-60px',
                    'opacity': 0.0
                }, 1500, 'linear', function() {
                    that.remove();
                }
            );
        });
    };
})( jQuery );