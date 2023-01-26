// Carousel
const owl = $('.owl-carousel');

owl.owlCarousel({
	center: true,
	loop: true,
	margin: 20,
	startPosition: 0,
	items: 1,
	responsive: {
		540: {
			items: 3,
			startPosition: 1,
		},
		1200: {
			items: 3,
			margin: 30,
		},
	},
});

$('.slider__btn--prev').click(function () {
	owl.trigger('prev.owl.carousel');
});


$('.slider__btn--next').click(function () {
	owl.trigger('next.owl.carousel');
});

// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function () {
	nav.classList.toggle('nav--mobile')
	menuIcon.classList.toggle('menu-icon--active');
	document.body.classList.toggle('no-scroll');
};

// Footer update year
let span = document.querySelector('.rights > span');
span.innerHTML = new Date().getFullYear();

// Menu

/*
let icon = document.querySelector('#icon');
document.querySelector('.link').addEventListener('click', function (e) {
	icon.style.transform = 'rotate(180deg)';
});

document.querySelector('body').addEventListener('click', function (e) {
	if (e.target.className !== 'link') {
		icon.style.transform = '';
	}
})
*/

// Increment Image
let modal = document.getElementById('myModal');
let img = document.querySelectorAll('.myImg');
let modalImg = document.getElementById('img01');
let captionText = document.getElementById('caption');

img.forEach(item => {
	item.addEventListener('click', function (e) {
		modal.style.display = 'block';
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	});
})

let closeImg = document.getElementsByClassName('close')[0];
closeImg.addEventListener('click', function (e) {
	modal.style.display = 'none';
});

/*img.addEventListener('click', function (e) {
	modal.style.display = 'block';
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
});*/




