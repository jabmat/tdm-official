// 1 hiding splash page on click
// DOM variables
const splash = document.querySelector('.splash');
const entryButton = document.getElementsByClassName('entry-button')[0];

entryButton.addEventListener('click', () => {
    splash.classList.add('opacity-none');
    splash.innerHTML = '';
});

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

// 1 hiding splash page on click

// 2 yt-videos attach handler
const loadYT = () => {
	const container = document.getElementById('yt-placeholder');
	const iframe = document.createElement('iframe');

	iframe.setAttribute(
		'src',
		'https://www.youtube.com/embed/KbaWi_c16qk?si=bnK6B778XjM3JZLl'
	);
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

	container.innerHTML = '';
	container.appendChild(iframe);
};
// 2 yt-videos attach handler
