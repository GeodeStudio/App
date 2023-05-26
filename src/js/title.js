const { appWindow } = __TAURI__.window

window.addEventListener("DOMContentLoaded", async () => {
  if (await __TAURI__.os.type() == 'Darwin') document.body.classList.add('darwin')

  document.querySelector('#title #controls #min').onclick = appWindow.minimize
  document.querySelector('#title #controls #max').onclick = appWindow.toggleMaximize
  document.querySelector('#title #controls #close').onclick = appWindow.close
  
  document.querySelector('#title #stoplight #close').onclick = appWindow.close
  document.querySelector('#title #stoplight #min').onclick = appWindow.minimize
  document.querySelector('#title #stoplight #max').onclick = appWindow.toggleMaximize
})