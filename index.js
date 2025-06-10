const homer = document.querySelector('.jumping-homer')
const hydrant = document.querySelector('.hydrant')
const clouds = document.querySelector('.clouds')

const verifyLoose = setInterval(() => {
    const hydrantPosition = hydrant.offsetLeft
    const homerAltitude = window
        .getComputedStyle(homer)
        .bottom
        .slice(0, -2)

    if ((homerAltitude <= 30 && hydrantPosition >= 25 && hydrantPosition <= 160) ||
        (homerAltitude <= 40 && hydrantPosition >= 35 && hydrantPosition <= 130) ||
        (homerAltitude <= 50 && hydrantPosition >= 45 && hydrantPosition <= 120) ||
        (homerAltitude <= 60 && hydrantPosition >= 55 && hydrantPosition <= 110)) {
        hydrant.style.animation = 'none'
        hydrant.style.left = `${hydrantPosition}px`
        homer.style.animation = 'none'
        homer.style.bottom = `${homerAltitude}px`
        const cloudsPosition = clouds.offsetLeft
        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        clearInterval(verifyLoose)
    }
}, 100)

let isJumping = false

const jump = () => {
    isJumping = true
    homer.classList.add('jump-action')

    setTimeout(() => {
        homer.classList.remove('jump-action')
        isJumping = false
    }, 1500)
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && !isJumping) jump()
})

console.log('testeeeeera')
