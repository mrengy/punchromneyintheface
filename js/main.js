$( document ).ready(function() {
	var spotCounter = 1;
    $('#face-container').mousedown(function(event){
    	$(this).addClass('punching');
    	$(this).append($('#original-spot').clone().removeAttr('id').attr('id','spot-'+spotCounter).css('left', event.pageX).css('top', event.pageY));
    	spotCounter++;
    });
    $('#face-container').mouseup(function(){
    	$(this).removeClass('punching');
    });
});