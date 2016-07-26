// mobile nav
$(document).ready(function() {
	$('.nav_btn').on('click', function(e){
		e.preventDefault();
		$('nav').toggleClass('active');
		$(this).toggleClass('rotate');
	});
// open feature
    $("#section0 .intro-btn").click( function() {
      $("#section0 .intro-feature").stop().toggleClass('intro-open');
    });
    $("#section1 .intro-btn").click(function() {
      $("#section1 .intro-feature").stop().toggleClass('intro-open');
    });
// qa dropdown
	$('#qaContent ul.accordionPart li div.qa_title').hover(function(){
			$(this).addClass('qa_title_on');
		}, function(){
			$(this).removeClass('qa_title_on');
		}).click(function(){
			$(this).next('div.qa_content').slideToggle();
		}).siblings('div.qa_content').hide();
	});
