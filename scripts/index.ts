const body = document.querySelector('body');

const header = {
	nav: document.querySelector('nav'),
	toggle: document.getElementById('nav-toggle'),
	menuIcon: document.getElementById('nav-menu-icon'),
	closeIcon: document.getElementById('nav-close-icon'),
};

header.toggle?.addEventListener('click', () => {
	header.menuIcon?.classList.toggle('hidden');
	header.closeIcon?.classList.toggle('hidden');

	body?.classList.toggle('overflow-hidden');

	header.nav?.classList.toggle('hidden');
});
