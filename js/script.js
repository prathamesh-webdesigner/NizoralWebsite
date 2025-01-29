// Header visible to invisible start
document.onreadystatechange = function () {
    let lastScrollPosition = 0;
    const navbar = document.querySelector('header');
    window.addEventListener('scroll', function (e) {
        lastScrollPosition = window.scrollY;

        if (lastScrollPosition > 100)
            navbar.classList.add('hide-header');
        else
            navbar.classList.remove('hide-header');
    });
}
// 100vh scrolling 
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    let currentIndex = 0;
    let isThrottled = false; // Prevent multiple scroll events

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
            currentIndex = index;
        }
    }

    document.addEventListener('wheel', (event) => {
        if (isThrottled) return; // Ignore if throttled

        isThrottled = true;
        setTimeout(() => { isThrottled = false; }, 1500); // Adjust throttle duration as needed

        if (event.deltaY > 0) {
            scrollToSection(currentIndex + 1);
        } else {
            scrollToSection(currentIndex - 1);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (isThrottled) return; // Ignore if throttled

        isThrottled = true;
        setTimeout(() => { isThrottled = false; }, 1500); // Adjust throttle duration as needed

        if (event.key === 'ArrowDown') {
            scrollToSection(currentIndex + 1);
        } else if (event.key === 'ArrowUp') {
            scrollToSection(currentIndex - 1);
        }
    });
});

// Header visible to invisible end
// Text Animation 
function breakTheText() {
    var elements = document.querySelectorAll(".md_goodbye, .bestfriend h2, .bestfriend h3, .md_dandruffAndItching, .theNezroralDiffrenceParent h2");

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

// Shampoo
gsap.from(".sayGoodbyeParent", {
    // y:"100%",
    clipPath: "inset(100% 0 0 0)",
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
    clipPath: "inset(100% 0 0 0)",
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
    clipPath: "inset(100% 0 0 0)",
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
    clipPath: "inset(70% 0 0 0)",
    duration:1,
    delay:1,
    scrollTrigger: ".bestfriend"
})
gsap.from(".bestfriend h2 span, .bestfriend h3 span, .theNezroralDiffrenceParent h2 span", {
    y: 70,
    opacity: 0,
    duration: 0.5,
    delay: 0.8,
    stagger: 0.1,
    scrollTrigger: ".bestfriend"
})
// ScrollTrigger End

// Blink Animation 
// Remove the blinking element after 2 seconds
setTimeout(() => {
    const blinkText = document.getElementById('blinkText');
    blinkText.style.display = 'none';
}, 1000);



