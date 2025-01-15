const themeSelector = document.querySelector('#color-select');
function  changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('img').src = 'byu-logo-dark.png';
    } else {
        document.body.classList.remove('dark');
        document.querySelector('.logo').src = 'byu-logo_blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);