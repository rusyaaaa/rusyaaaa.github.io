console.log("Выйди отсюда, тебе здесь не рады")
$(function() {
    var title = document.title,
      animSeq = ["|"],
        animIndex = 0,
        titleIndex = 0;
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 1) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[0];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 150);
});
let preloader = document.querySelector('.preloader')
window.addEventListener('load', () => {
    preloader.classList.add('hide')
    setTimeout(() => {
        preloader.remove()
    }, 300);
})
const links = document.querySelector(".links")
setTimeout(() => {
    links.style.pointerEvents = "all"
}, 1550);
tippy('#verified', {
    placement: 'right',
    animation: 'shift-toward',
    content: 'Verified',
    followCursor: true,
    theme: 'translucent',
});
ScrollReveal().reveal('.header', {delay: 500, origin: 'top', distance: '20%'});
ScrollReveal().reveal('.information', {delay: 1000, origin: 'bottom', distance: '20%'});
ScrollReveal().reveal('.links', {delay: 1500, origin: 'top', distance: '20%'});
