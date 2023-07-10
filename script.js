document.addEventListener('click', () => {
	document.getElementById('flowers')
	.animate([
		{ transform: 'rotate(0deg)' },
		{ transform: 'rotate(720deg)' }
	], {
		duration: 1500,
		iterations: 1,
		easing: 'ease-in-out'
	})
});
