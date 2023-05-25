document.addEventListener('load', () => {
    var context = document.querySelector('#context')
})

function clearContext() {
    context.innerHTML = ''
}

function populateContext(input, icon = '') {
    let e = document.createElement('button')
    context.append(e)
    e.innerHTML += `<span>${input}</span><span>${icon}</span>`
    return e
}

function showContext(e) {
    e.preventDefault()

    if (e.target.dataset.context == undefined) return hideContext()

    context.style.top = e.clientY + 'px'
    context.style.left = e.clientX + 'px'

    let bounding = context.getBoundingClientRect()

    if (bounding.bottom >= window.innerHeight)
        context.style.top = e.clientY - bounding.height + 'px'
    
    if (bounding.right >= window.innerWidth)
        context.style.left = e.clientX - bounding.width + 'px'

    context.style.opacity = ''
    context.style.pointerEvents = ''
}

function hideContext(e) {
    if ((e.button == 2 && e.target.dataset.context != undefined) || context.contains(e.target)) return
    context.style.opacity = '0'
    context.style.pointerEvents = 'none'
}

document.addEventListener('contextmenu', showContext)

document.addEventListener('mousedown', hideContext)