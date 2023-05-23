const { appWindow } = window.__TAURI__.window

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#title #min').onclick = appWindow.minimize
  document.querySelector('#title #max').onclick = appWindow.toggleMaximize
  document.querySelector('#title #close').onclick = appWindow.close
})
