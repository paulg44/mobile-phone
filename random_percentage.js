// Create a random battery percentage on load 

const randomPercentage = document.getElementById('random-percentage')

function generateRandomPercentage() {
    const randomPercent = Math.floor(Math.random() * 101)
    randomPercentage.textContent = `${randomPercent}%`
}

generateRandomPercentage()
