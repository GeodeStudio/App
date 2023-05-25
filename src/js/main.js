document.querySelector('#sidebar #toggle').onclick = () => {
    if (sidebar) closeSidebar()
    else openSidebar()
}