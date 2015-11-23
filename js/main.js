$( document ).ready(function() {
    $('#face-container').mousedown(function(){
    	console.log('punch');
    	$(this).addClass('punching');
    });
    $('#face-container').mouseup(function(){
    	$(this).removeClass('punching');
    });
});