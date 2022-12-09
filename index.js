'use strict';

function clock() {
	let d = new Date();
	let hour = d.getHours();
	let min = d.getMinutes();
	let minCorrect = min.toString().padStart(2, '0');
	let sec = d.getSeconds();
	let secCorrect = sec.toString().padStart(2, '0');

	$('#hour').text(hour);
	$('#min').text(minCorrect);
	$('#sec').text(secCorrect);
	setTimeout(clock, 1000);
}

clock();

$('#menuIcon').click(function (e) {
	e.preventDefault();
	$('.sidebar').addClass('show-sidebar');
});

$('.close-btn').click(function (e) {
	e.preventDefault();
	$('.sidebar').removeClass('show-sidebar');
});

$('#black').click(function (e) {
	e.preventDefault();
	$('body').css('background-color', '#191919');
});

$('#red').click(function (e) {
	e.preventDefault();
	$('body').css('background-color', 'red');
});

let arrFont = [
	'"Anton", sans-serif',
	'"Josefin Sans", sans-serif',
	'"Martian Mono", monospace',
	'"Press Start 2P", cursive',
	'"Zen Dots", cursive',
];

let num = 1;

$('#changeFont').click(function (e) {
	e.preventDefault();
	if(num > arrFont.length) num = 1;
	$('.number').css('font-family', arrFont[num]);
	num++;
	console.log(num);
});
