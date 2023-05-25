let sidebar = false

document.querySelector('#sidebar #toggle').onclick = () => {
    if (sidebar) {
        document.querySelector('#sidebar').style.width = '0px'
        document.querySelector('#sidebar #toggle').dataset.status = 'off'
        sidebar = false
    } else {
        document.querySelector('#sidebar').style.width = ''
        document.querySelector('#sidebar #toggle').dataset.status = 'on'
        sidebar = true
    }
}