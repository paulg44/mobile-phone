// A dark mode toggle switch for twitter

const darkModeBtn = document.getElementById('dark-mode')
const twitterWrapper = document.querySelector('.twitter-wrapper')

darkModeBtn.addEventListener('click', function() {
    twitterWrapper.classList.toggle('dark-mode')
})