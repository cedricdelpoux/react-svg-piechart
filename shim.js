/* eslint no-undef:off */
global.requestAnimationFrame = callback => {
  setTimeout(callback, 0)
}
