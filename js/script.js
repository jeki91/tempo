const btnNext = document.querySelector('.btn-next');
const btnPrew = document.querySelector('.btn-prew');
const blocks = document.querySelectorAll('.block__item');

blocks[0].classList.add('active');
blocks[1].classList.add('next');
blocks[blocks.length -1].classList.add('prew');

const fadeIn = function (el) {

	var opacity = 0.01;

	document.querySelector(el).style.display = "block";

	var timer = setInterval(function () {

		if (opacity >= 1) {

			clearInterval(timer);

		}

		document.querySelector(el).style.opacity = opacity;

		opacity += opacity * 0.1;

	}, 10);

}



let elemIndex;
let prew;
let next;
btnNext.addEventListener('click', function (e) {
	e.preventDefault();

	blocks.forEach((item, index) => {
		item.classList.remove('prew');
		item.classList.remove('next');



		if (item.classList.contains('active')) {
			item.classList.remove('active');

			elemIndex = index;

			next = index + 1;
			if (next === blocks.length) {
				next = 0;
			}
			prew = index - 1;
			if (prew < 0) {
				prew = blocks.length - 1;
			}


		}



	});


	elemIndex += 1;
	if (elemIndex === blocks.length) {
		elemIndex = 0;
	};

	prew = elemIndex - 1;
	if (prew < 0) {
		prew = blocks.length - 1;
	}
	next += 1;
	if (next === blocks.length) {
		next = 0;
	}

	//console.log('вперед' + prew + '-' + elemIndex + '-' + next);

	blocks[elemIndex].classList.add('active');
	blocks[prew].classList.add('prew');
	blocks[next].classList.add('next');
	//fadeIn('.active');
});


btnPrew.addEventListener('click', function (e) {
	e.preventDefault();

	blocks.forEach((item, index) => {
		item.classList.remove('prew');
		item.classList.remove('next');
		if (item.classList.contains('active')) {

			item.classList.remove('active');
			elemIndex = index;
			next = index + 1;
			if (next === blocks.length) {
				next = 0;
			}
			prew = index - 1;
			if (prew < 0) {
				prew = blocks.length - 1;
			}
		}

	});

	if (elemIndex === 0) {
		elemIndex = blocks.length - 1;
	} else {
		elemIndex -= 1;
	}

	prew = elemIndex - 1;
	if (prew < 0) {
		prew = blocks.length - 1;
	}

	next -= 1;
	if (next < 0) {
		next = blocks.length - 1;
	}

	blocks[elemIndex].classList.add('active');
	blocks[prew].classList.add('prew');
	blocks[next].classList.add('next');
	//fadeIn('.active');
});

