
let menu = document.getElementById('menu')
let menuchanged = false

addEventListener('scroll', function() {
    if (this.window.pageYOffset >= 50 && menuchanged == false) {
        menu.setAttribute('class', 'menumodified')
        menuchanged = true
    } else if (this.window.pageYOffset <= 49 && menuchanged == true) {
        menu.removeAttribute('class', 'menumodified')
        menuchanged = false
    }
})
