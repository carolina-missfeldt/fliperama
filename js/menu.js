$(document).ready(function(){
	$('#menu-categorias li').click( function(){
		$(this).addClass('menu-hover').siblings('.menu-hover').removeClass();
		$('.menu-jogos:nth-child('+ ($(this).index()+1) +')').fadeIn().siblings('.menu-jogos').fadeOut();
	});

	$('.nota li').click( function() {
		$(this).parent('.nota').children('li').addClass('like-hover');
		$(this).parent('.nota').children('li:nth-child(n+'+ ($(this).index()+2) +')').removeClass('like-hover');
	});
});