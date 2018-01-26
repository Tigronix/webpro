"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-drafts" viewBox="0 0 32 32"><title>drafts</title><path d="M29.32 10.667c0-0.96-0.493-1.8-1.253-2.267l-12.067-7.067-12.067 7.067c-0.76 0.467-1.267 1.307-1.267 2.267v13.333c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667l-0.013-13.333zM16 17.333l-11.013-6.88 11.013-6.453 11.013 6.453-11.013 6.88z"></path></symbol><symbol id="icon-keyboard-arrow-left" viewBox="0 0 32 32"><title>keyboard-arrow-left</title><path d="M20.547 21.453l-6.107-6.12 6.107-6.12-1.88-1.88-8 8 8 8z"></path></symbol><symbol id="icon-keyboard-arrow-right" viewBox="0 0 32 32"><title>keyboard-arrow-right</title><path d="M11.453 21.787l6.107-6.12-6.107-6.12 1.88-1.88 8 8-8 8z"></path></symbol><symbol id="icon-location-on" viewBox="0 0 32 32"><title>location-on</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-phone" viewBox="0 0 32 32"><title>phone</title><path d="M8.827 14.387c1.92 3.773 5.013 6.853 8.787 8.787l2.933-2.933c0.36-0.36 0.893-0.48 1.36-0.32 1.493 0.493 3.107 0.76 4.76 0.76 0.733 0 1.333 0.6 1.333 1.333v4.653c0 0.733-0.6 1.333-1.333 1.333-12.52 0-22.667-10.147-22.667-22.667 0-0.733 0.6-1.333 1.333-1.333h4.667c0.733 0 1.333 0.6 1.333 1.333 0 1.667 0.267 3.267 0.76 4.76 0.147 0.467 0.040 0.987-0.333 1.36l-2.933 2.933z"></path></symbol><symbol id="icon-place" viewBox="0 0 32 32"><title>place</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-portrait" viewBox="0 0 32 32"><title>portrait</title><path d="M16 16.333c1.653 0 3-1.347 3-3s-1.347-3-3-3-3 1.347-3 3 1.347 3 3 3zM22 21.667c0-2-4-3-6-3s-6 1-6 3v1h12v-1zM25.333 4h-18.667c-1.467 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667zM25.333 25.333h-18.667v-18.667h18.667v18.667z"></path></symbol><symbol id="icon-vpn-key" viewBox="0 0 32 32"><title>vpn-key</title><path d="M16.867 13.333c-1.093-3.107-4.053-5.333-7.533-5.333-4.413 0-8 3.587-8 8s3.587 8 8 8c3.48 0 6.44-2.227 7.533-5.333h5.8v5.333h5.333v-5.333h2.667v-5.333h-13.8zM9.333 18.667c-1.467 0-2.667-1.2-2.667-2.667s1.2-2.667 2.667-2.667 2.667 1.2 2.667 2.667-1.2 2.667-2.667 2.667z"></path></symbol></defs></svg>'
	})

//wow animation
function scrollEffects(){
	new WOW().init();
}

//active
function active(elem) {
	$(elem).on('click', function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});
}

//bodyOverflow
function bodyOverflow(elem) {
	var btn = $(elem);
	var body = $('body');
	btn.on('click', function(){
		body.toggleClass('overflow');
	});
}

//Universal Tabs
function tabs() {
	$(document).on('click', '[data-tabclass]', function() {
		var content = $(this).attr('data-tabclass');
		var number = $(this).attr('data-tabnumber');
		$('[data-tabclass="' + content + '"]').each(function() {
			if ($(this).attr('data-tabnumber') == number) {
				$(this).addClass('active').siblings().removeClass('active');
			}
		});
		$('.' + content + ' > [data-tabnumber="' + number + '"]').show().addClass('active flex').css('display', 'flex').siblings().hide().removeClass('active flex');
	});
};

//animate
function animate(button, content, animationIn, animationOut, hideTiming) {
	hideTiming = hideTiming || 1000;
	var elem = document.querySelector(content);
	$(button).on('click', function() {
		$(content).show();
		var animateContent = content;
		if ($(content).hasClass(animationIn)) {
			$(content).removeClass(animationIn).addClass(animationOut);
		} else {
			$(content).removeClass(animationOut).addClass(animationIn + ' animated');
		}
	});
}

//accordion
function accordion() {
	$( ".accordion" ).accordion();
}

//owl bug fixes
function owlVerticalAlign(elem) {
	$(window).on('load && resize', function() {
		var height = $(elem + ' .owl-dots').innerHeight();
		var elem = document.querySelector(elem + ' .owl-nav');
		elem.style.marginTop = -height + 'px';
	});
}

//owl-slider
function slider(animationIn, animationOut, elem) {
	elem = elem || '.slider';
	animationIn = animationIn || 'fadeIn';
	animationOut = animationOut || 'fadeOut';
	$(elem).owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		dots: false,
		animateIn: animationIn,
		animateOut: animationOut,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		navText: ['<svg class="icon icon-arrow-back"><use xlink:href="#icon-arrow-back"></use></svg>', '<svg class="icon icon-arrow-forward"><use xlink:href="#icon-arrow-forward"></use></svg>'],
	});
}

window.onload = function() {
	slider('zoomIn', 'fadeOut');
	scrollEffects()
	accordion();
	tabs();
	active('.hamburger');
	bodyOverflow('.hamburger');
	active('.slider-main__btn-menu');
	animate('.hamburger', '.hamburger__line1', 'rotate_in_45', 'rotate_in_45_out');
	animate('.hamburger', '.hamburger__line3', 'rotate_in_-45', 'rotate_in_-45_out');
	animate('.slider-main__btn-menu', '.menu', 'slideInRight', 'slideOutRight');
	animate('.slider-main__btn-menu', '.slider-main__btn-menu', 'btnMenuIn', 'btnMenuOut');
};
