$(document).ready(function(){

 $('.readmore').click(readMore);
 $("a").click(function(event){
    event.preventDefault();
});
 $('.readless').click(readLess);
 $('.learnmore').click(learnMore);


 function readMore() {
 	$('#show-this-on-click').slideDown();
 	$('#show-this-on-click').show();
 	$('.readmore').hide();
 	$('.readless').show();
 }

 function readLess () {
 	$('#show-this-on-click').slideUp();
 	$('.readless').hide();
 	$('.readmore').show();
 }

 function learnMore() {
 	$('.learnmore').hide();
 	$('#learnmoretext').slideDown();
 	$('#learnmoretext').show();
 }


});