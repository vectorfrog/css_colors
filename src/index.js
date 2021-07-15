import colors from './colors'
import slideIn from './slide_in'
import './style.css';
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.store('colors', colors())
Alpine.store('slideIn', slideIn())
Alpine.start()

const resizeWindow = () => {
  const pL = window.innerWidth % 142 / 2 - 10
  document.querySelector("#table").style.paddingLeft=(pL + "px")
}

resizeWindow()
window.onresize = resizeWindow;
