// Text Animation 
function breakTheText() {
    var h1 = document.querySelector(".bannerTextArea h1");
    var h1Text = h1.textContent;

    var splittedText = h1Text.split("");
    var cultter = "";

    splittedText.forEach(function (elem) {
        cultter += `<span>${elem}</span>`;
    })

    h1.innerHTML = cultter;
}

breakTheText()


gsap.from(".bannerTextArea h1 span", {
    y: 70,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.1
})
// gsap.from("h2 span",  {
//     y:70,
//     opacity:0,
//     duration:0.5,
//     delay:0.5,
//     stagger: 0.03
// })
gsap.from(".sayAni", {
    x: -70,
    opacity: 0,
    duration: 1,
    delay: 0.9,
})
gsap.from(".bannerTextArea p, .bannerTextArea h2", {
    x: -70,
    opacity: 0,
    duration: 1,
    delay: 0.9,
})
gsap.from(".bannerBoy img", {
    x: 70,
    opacity: 0,
    duration: 1,
    delay: 0.9,
})

// Blink Animation 
// Remove the blinking element after 2 seconds
setTimeout(() => {
    const blinkText = document.getElementById('blinkText');
    blinkText.style.display = 'none';
}, 1000);