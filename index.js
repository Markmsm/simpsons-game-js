document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        const homer = document.querySelector('.jumping-homer')

        homer.classList.add('jump-action')

        setTimeout(() => homer.classList.remove('jump-action'), 1100)
    }
})