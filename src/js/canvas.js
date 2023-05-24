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

document.body.addEventListener('mousedown', e => {
    if (e.button != 1 || document.querySelector('#content canvas:hover') == null) return
    canvas.canvas.style.cursor = 'grabbing'
    dragging = 1
})

document.body.addEventListener('mouseup', e => {
    if (e.button != 1) return
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

