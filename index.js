var prevScrollPos = window.scrollY
var header = document.getElementById('header')

window.onscroll = function () {
  var currentScrollPos = window.scrollY

  if (prevScrollPos > currentScrollPos) {
    header.classList.remove('hide-header')
    header.classList.add('show-header')
  } else {
    header.classList.remove('show-header')
    header.classList.add('hide-header')
  }
  prevScrollPos = currentScrollPos
}