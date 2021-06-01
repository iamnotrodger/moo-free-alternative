export const handleTabClick = (event) => {
	const activeTab = document.querySelector('.active-tab');
	const selectedTab = document.getElementById(event.target.value);

	if (activeTab.id !== selectedTab.id) {
		activeTab.classList.remove('active-tab');
		activeTab.classList.add('inactive-tab');
		selectedTab.classList.add('active-tab');
		selectedTab.classList.remove('inactive-tab');
	}
};
