$( document ).ready(function() {
	$('audio#eel').trigger('load');
    var spotCounter = 1;
	var eelWidth=127;
	var eelHeight=127;

    $('#face-container').mousedown(function(event){
    	$(this).addClass('punching');
    	$(this).append($('#original-spot').clone().removeAttr('id').attr('id','spot-'+spotCounter).css('left', event.pageX - eelWidth).css('top', event.pageY - eelHeight));
    	$('audio#eel').trigger('play');
        spotCounter++;
    });
    $('#face-container').mouseup(function(){
    	$(this).removeClass('punching');
    });
});