// Text Animation 
function breakTheText() {
    var elements = document.querySelectorAll(".md_goodbye, .bestfriend h2, .bestfriend h3, .md_dandruffAndItching");

    elements.forEach(function(element) {
        var text = element.textContent;
        var splittedText = text.split("");
        var clutter = "";

        // Loop through each character and wrap them in <span>
        splittedText.forEach(function(char) {
            // Check if the character is a space and use &nbsp; instead
            if (char === " ") {
                clutter += `<span>&nbsp;</span>`;
            } else {
                clutter += `<span>${char}</span>`;
            }
        });

        element.innerHTML = clutter;
    });
}

breakTheText();


// Call the function
breakTheText();



gsap.from(".md_goodbye span", {
    y: 70,
    opacity: 0,
    duration: 0.5,
    delay: 1.5,
    stagger: 0.1,
})
gsap.from(".md_dandruffAndItching span", {
    y: 50,
    opacity: 0,
    duration: 0.2,
    delay: 1.5,
    stagger: 0.02,
})

gsap.from(".bannerTextArea p, .mo_dandruffAndItching, .sayAni, .mo_goodbye", {
    x: -70,
    opacity: 0,
    duration: 1,
    delay: 1.5,
})
gsap.from(".bannerBoy img", {
    x: 70,
    opacity: 0,
    duration: 1,
    delay: 1.5,
})

// ScrollTrigger 
gsap.from(".bestfriend h2 span, .bestfriend h3 span", {
    y: 70,
    opacity: 0,
    duration: 0.5,
    delay: 0.8,
    stagger: 0.1,
    scrollTrigger: ".bestfriend"
})
// Shampoo
gsap.from(".sayGoodbyeParent", {
    y:"100%",
    duration: 1,
    delay:2,
    scrollTrigger: ".bestfriend"
})
gsap.from(".shampoo_image", {
    y:"100%",
    x:"80%",
    duration: 1,
    delay:3,
    scrollTrigger: ".bestfriend"
})
// Shampoo end
// Daily Care
gsap.from(".gentleEnoughParent", {
    y:"100%",
    duration: 1,
    delay:2.2,
    scrollTrigger: ".bestfriend"
})
gsap.from(".gentleEnoughImage", {
    y:"100%",
    duration: 1,
    delay:3.2,
    scrollTrigger: ".bestfriend"
})
// Daily care end
// Care
gsap.from(".hydrateParent", {
    y:"100%",
    duration: 1,
    delay:2.4,
    scrollTrigger: ".bestfriend"
})
gsap.from(".hydrateImage", {
    y:"100%",
    x:"-80%",
    duration: 1,
    delay:3.4,
    scrollTrigger: ".bestfriend"
})
// Care end
// Round Feature 
gsap.from(".round_featureParent",{
    scale:0,
    duration: 1,
    delay:4,
    scrollTrigger: ".bestfriend"
})
// Round Feature End
gsap.from(".yourScalpsBottomParent",{
    y:50,
    opacity:0.8,     // Start fully transparent
    duration:1,
    delay:4,
    scrollTrigger: ".bestfriend"
})
// ScrollTrigger End

// Blink Animation 
// Remove the blinking element after 2 seconds
setTimeout(() => {
    const blinkText = document.getElementById('blinkText');
    blinkText.style.display = 'none';
}, 1000);

// FullPage
new fullpage("#fullPage",{
    autoScrolling:true
})