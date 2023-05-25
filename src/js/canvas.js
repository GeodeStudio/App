let canvas = document.querySelector('#content canvas').getContext('2d')

canvas.fillStyle = '#444'

for (let x = 10; x < canvas.canvas.width; x += 60) {
    for (let y = 10; y < canvas.canvas.height; y += 60) {
        canvas.beginPath();
        canvas.arc(x, y, 1.5, 0, 2 * Math.PI, true);
        canvas.fill();
    }
}

canvas.canvas.style.top = (canvas.canvas.height * -0.5) + (window.innerHeight * 0.5)  + 'px'
canvas.canvas.style.left = (canvas.canvas.width * -0.5) + (window.innerWidth * 0.5) + 'px'

let dragging = 0
let recentering = 0

document.body.addEventListener('mousedown', e => {
    if (recentering == 1) return
    if ((e.button != 0 && e.button != 1) || document.querySelector('#content canvas:hover') == null) return
    canvas.canvas.style.cursor = 'grabbing'
    dragging = 1
})

document.body.addEventListener('mouseup', e => {
    if (recentering == 1) return
    if (e.button != 0 && e.button != 1) return
    canvas.canvas.style.cursor = ''
    dragging = 0
})

document.addEventListener('mousemove', e => {
    if (dragging == 0) return

    let top = parseInt(canvas.canvas.style.top) + e.movementY
    let left = parseInt(canvas.canvas.style.left) + e.movementX

    canvas.canvas.style.top = top + 'px'
    canvas.canvas.style.left = left + 'px'
})

canvas.canvas.oncontextmenu = async() => {
    clearContext()
    let add = populateContext('Add', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M479.825-200Q467-200 458.5-208.625T450-230v-220H230q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-510h220v-220q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-730v220h220q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T730-450H510v220q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Z"/></svg>')
    let recenter = populateContext('Recenter')

    recenter.onclick = async () => {
        hideContext()

        if (recentering == 1) return
        if (parseInt(canvas.canvas.style.top) == (canvas.canvas.height * -0.5) + (window.innerHeight * 0.5) && parseInt(canvas.canvas.style.left) == (canvas.canvas.width * -0.5) + (window.innerWidth * 0.5)) return

        recentering = 1

        canvas.canvas.style.transition = '600ms cubic-bezier(0.25, 1, 0.5, 1)'
        canvas.canvas.style.cursor = 'not-allowed'

        await new Promise(resolve => requestAnimationFrame(resolve))

        canvas.canvas.style.top = (canvas.canvas.height * -0.5) + (window.innerHeight * 0.5)  + 'px'
        canvas.canvas.style.left = (canvas.canvas.width * -0.5) + (window.innerWidth * 0.5) + 'px'

        await new Promise(resolve => setTimeout(resolve, 650))

        canvas.canvas.style.transition = ''
        canvas.canvas.style.cursor = ''

        recentering = 0
    }

    add.onclick = () => {
        hideContext()
        openSidebar()
    }
}