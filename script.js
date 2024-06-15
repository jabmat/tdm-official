// 1 hiding splash page on click
// DOM variables
const splash = document.querySelector('.splash');
const entryButton = document.getElementsByClassName('entry-button')[0];
const main = document.querySelector('main');
const header = document.querySelector('header');
const menuNav = document.querySelector('.main-nav-mobile');

// main.innerHTML = '';

// TO DO TURN ON
entryButton.addEventListener('click', () => {
	splash.classList.add('opacity-none');
	splash.innerHTML = '';
});

// for splash motion - optional
// document.addEventListener('DOMContentLoaded', (e) => {
//     setTimeout(() => {
//         splash.classList.add('display-none');
//     }, 2000);
// });

// document.addEventListener('DOMContentLoaded', (e) => {
// 	setTimeout(() => {
// 		entryButton.innerHTML = '';
// 	}, 2000);
// });
// for splash motion - optional
// 1 hiding splash page on click

// 2 yt-videos attach handler
const loadYT = (link, placeholder) => {
	const iframe = document.createElement('iframe');

	iframe.setAttribute('src', link);
	iframe.setAttribute('width', '560');
	iframe.setAttribute('height', '315');
	iframe.setAttribute('title', 'YouTube video player');
	iframe.setAttribute('frameborder', '0');
	iframe.setAttribute(
		'allow',
		'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
	);
	iframe.setAttribute('allowfullscreen', '');
	iframe.style.width = '100%';
	iframe.style.borderRadius = '10px';

	placeholder.innerHTML = '';
	placeholder.appendChild(iframe);
};
// 2 yt-videos attach handler

// yt-links-maintenance
linkYtIdOne = 'https://www.youtube.com/embed/KbaWi_c16qk?si=bnK6B778XjM3JZLl';
attachYtIdOne = document.getElementById('attach-yt-id-one');
attachYtIdOne.addEventListener('click', (e) =>
	loadYT(linkYtIdOne, attachYtIdOne)
);

linkYtRpOne = 'https://www.youtube.com/embed/o_b0RjumTnw?si=f3zRrWLTH4Kq6ZRw';
attachYtRpOne = document.getElementById('attach-yt-rp-one');
attachYtRpOne.addEventListener('click', (e) =>
	loadYT(linkYtRpOne, attachYtRpOne)
);

linkYtRpTwo = 'https://www.youtube.com/embed/an4-PQndA6U?si=oWKixSoRVj8jwUV7';
attachYtRpTwo = document.getElementById('attach-yt-rp-two');
attachYtRpTwo.addEventListener('click', (e) =>
	loadYT(linkYtRpTwo, attachYtRpTwo)
);

linkYtIdTwo = 'https://www.youtube.com/embed/zJ-yKYWJ380?si=Zj4BiapR2Ypqe2dS';
attachYtIdTwo = document.getElementById('attach-yt-id-two');
attachYtIdTwo.addEventListener('click', (e) =>
	loadYT(linkYtIdTwo, attachYtIdTwo)
);

linkYtIdThree = 'https://www.youtube.com/embed/coywjXhxwtI?si=ekKtKghxnf0brBB0';
attachYtIdThree = document.getElementById('attach-yt-id-three');
attachYtIdThree.addEventListener('click', (e) =>
	loadYT(linkYtIdThree, attachYtIdThree)
);

linkYtRnOne =
	'https://www.youtube.com/embed/videoseries?si=h7RQtb5gunzGPbe7&amp;list=OLAK5uy_mDqITx8adTnli5xEMPNB7qPth5oFYjSqg';
attachYtRnOne = document.getElementById('attach-yt-rn-one');
attachYtRnOne.addEventListener('click', (e) =>
	loadYT(linkYtRnOne, attachYtRnOne)
);

linkYtRnTwo = 'https://www.youtube.com/embed/mH4pnPEEaMQ?si=EbDonApMoud8py_h';
attachYtRnTwo = document.getElementById('attach-yt-rn-two');
attachYtRnTwo.addEventListener('click', (e) =>
	loadYT(linkYtRnTwo, attachYtRnTwo)
);

// yt-links-maintenance

// 3 header fixed
window.onscroll = function () {
	addSticky();
};

// document.addEventListener('scroll', function () {
// 	alert('scrolled');
// });

// .offsetTop returns the distance from the outer border of current element = get the offset position of the header
const sticky = header.offsetTop;

// add sticky class to header when you reach its scroll position, remove 'sticky' when you leave the scroll posiiton
const addSticky = () => {
	if (window.scrollY > sticky) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
};

// 3 header fixed

// 4 toggling nav-mobile
// menu mobile item
const menuItem = document.querySelector('.menu-mobile-item');
// menu mobile items all
const menuItems = document.querySelectorAll('.menu-mobile-item');
// nav mobile button
const navButton = document.querySelector('.nav-mobile-handler');
// nav mobile button icons
const menuOpen = document.querySelector('.menu-button');
const menuClose = document.querySelector('.menu-close-button');

const toggleMenu = () => {
	if (menuNav.classList.contains('show-nav-mobile')) {
		menuNav.classList.remove('show-nav-mobile');
		menuClose.style.display = 'none';
		menuOpen.style.display = 'block';
	} else {
		menuNav.classList.add('show-nav-mobile');
		menuClose.style.display = 'flex';
		menuOpen.style.display = 'none';
	}
};

navButton.addEventListener('click', toggleMenu);

menuItems.forEach((menuItem) => {
	menuItem.addEventListener('click', toggleMenu);
});

// 4 toggling nav-mobile

// 5 show nav mobile dropdown content
const mobileDropdownContent = document.querySelector(
	'.mobile-dropdown-content'
);
const mobileDropdownButton = document.querySelector('.mobile-dropdown-button');

const mobileDropdownContentHandler = () => {
	if (mobileDropdownContent.style.display === 'flex') {
		mobileDropdownContent.style.display = 'none';
		arrowMobile.classList.remove('arrow-u');
		arrowMobile.classList.add('arrow-d');
	} else {
		mobileDropdownContent.style.display = 'flex';
		arrowMobile.classList.remove('arrow-d');
		arrowMobile.classList.add('arrow-u');
	}
};

mobileDropdownButton.addEventListener('click', mobileDropdownContentHandler);
// 5 show nav mobile dropdown content

// 6 change dropdown icon on navs
const deskDropdown = document.querySelector('.desk-dropdown');
const arrow = document.querySelector('.arrow');
const arrowMobile = document.querySelector('#arrow-mobile');
const arrowUp = () => {
	arrow.classList.remove('arrow-d');
	arrow.classList.add('arrow-u');
};
const arrowDown = () => {
	arrow.classList.remove('arrow-u');
	arrow.classList.add('arrow-d');
};

deskDropdown.addEventListener('mouseover', arrowUp);
deskDropdown.addEventListener('mouseout', arrowDown);
// 6 change dropdown icon on navs

// 7 add string to icon-youtube
const iconYt = document.getElementsByClassName('icon-youtube');
// const iconYtBefore = document.createElement('span').innerText = '[ PLAY ';
// const iconYtAfter = document.createElement('span').innerText = ' ]';
const iconYtBefore = 'PLAY';

for (let icon of iconYt) {
	icon.innerHTML = iconYtBefore + icon.innerHTML;
};
// 7 add string to icon-youtube
