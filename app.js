const themeButtonsContainer = document.querySelector('.theme-mode-buttons');

themeButtonsContainer.addEventListener('click', e => {
    const body = document.body;
    if (
        body.id === 'light' && e.target.closest('button').id === 'light' ||
        body.id === 'dark' && e.target.closest('button').id === 'light'
    ) {
        body.id = 'light'
    } else {

        body.id = 'dark';
    }



})