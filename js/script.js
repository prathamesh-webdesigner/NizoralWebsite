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

// Header visible to invisible end

// owl carousel 
// Owl Carosel
$('.homeSlider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    autoplayHoverPause:true,
    navText: [
        '<img src="image/prev-thin.png" alt="Previous" style="width:40px;">',
        '<img src="image/next-thin.png" alt="Next" style="width:40px;">'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.nizoral-product').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    navText: [
        '<img src="image/prev.png" alt="Previous" style="width:40px;">',
        '<img src="image/next.png" alt="Next" style="width:40px;">'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});
// owl carousel end 

// Text Animation 
// function breakTheText() {
//     var elements = document.querySelectorAll(".bestfriend h2, .bestfriend h3, .theNezroralDiffrenceParent h2");

//     elements.forEach(function (element) {
//         var text = element.textContent;
//         var splittedText = text.split("");
//         var clutter = "";

//         splittedText.forEach(function (char) {
//             if (char === " ") {
//                 clutter += `<span>&nbsp;</span>`;
//             } else {
//                 clutter += `<span>${char}</span>`;
//             }
//         });

//         element.innerHTML = clutter;
//     });
// }

// breakTheText();

// breakTheText();

// gsap.from(".md_dandruffAndItching span", {
//     y: 50,
//     opacity: 0,
//     duration: 0.2,
//     delay: 1.5,
//     stagger: 0.02,
// })

// gsap.to(".sayAni", {
//     x: 70,
//     visibility: "visible",
//     opacity: 1,
//     duration: 1,
//     delay: 1.5,
//     ease: "power2.out",
// })
gsap.to(".sayAni, .bannerTextArea p, .md_goodbye, .md_dandruffAndItching, .bannerBoy img", {
    filter: "blur(0px)",  // Removes blur gradually
    clipPath: "inset(0 0% 0 0)", // Reveals text from left to right
    duration: 2,
    delay: 1.5,
    filter: "blur(0px)",
    opacity: 1,
    ease: "power2.out"
});


gsap.to(".bannerBoy img", {
    x: -50,
    duration: 1,
    delay: 1.4,
    opacity: 1,
    ease: "power2.out"
});

gsap.to(".bestfriend h2, .bestfriend h3", {
    filter: "blur(0px)",  // Removes blur gradually
    clipPath: "inset(0 0% 0 0)", // Reveals text from left to right
    duration: 1.5,
    delay: 1.5,
    filter: "blur(0px)",
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: ".bestfriend"
});

gsap.to(".theNezroralDiffrenceParent h2", {
    filter: "blur(0px)",  // Removes blur gradually
    clipPath: "inset(0 0% 0 0)", // Reveals text from left to right
    duration: 1.5,
    delay: 0.5,
    filter: "blur(0px)",
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: ".theNezroralDiffrenceParent_main"
});

// gsap.from(".bannerBoy img", {
//     x: 70,
//     opacity: 0,
//     duration: 1,
//     delay: 1.5,
// })

// ScrollTrigger 

// Shampoo
gsap.from(".sayGoodbyeParent", {
    // y:"100%",
    clipPath: "inset(100% 0 0 0)",
    duration: 1,
    delay: 2,
    scrollTrigger: ".bestfriend"
})
gsap.from(".shampoo_image", {
    y: "100%",
    x: "80%",
    duration: 1,
    delay: 3,
    scrollTrigger: ".bestfriend"
})
// Shampoo end
// Daily Care
gsap.from(".gentleEnoughParent", {
    clipPath: "inset(100% 0 0 0)",
    duration: 1,
    delay: 2.2,
    scrollTrigger: ".bestfriend"
})
gsap.from(".gentleEnoughImage", {
    y: "100%",
    duration: 1,
    delay: 3.2,
    scrollTrigger: ".bestfriend"
})
// Daily care end
// Care
gsap.from(".hydrateParent", {
    clipPath: "inset(100% 0 0 0)",
    duration: 1,
    delay: 2.4,
    scrollTrigger: ".bestfriend"
})
gsap.from(".hydrateImage", {
    y: "100%",
    x: "-80%",
    duration: 1,
    delay: 3.4,
    scrollTrigger: ".bestfriend"
})
// Care end
// Round Feature 
gsap.from(".round_featureParent", {
    scale: 0,
    duration: 1,
    delay: 4,
    scrollTrigger: ".bestfriend"
})
// Round Feature End
gsap.from(".yourScalpsBottomParent", {
    clipPath: "inset(70% 0 0 0)",
    duration: 1,
    delay: 1,
    scrollTrigger: ".bestfriend"
})

gsap.from(".round_icon_area, .round_icon_area_for_clinically_proven, .fast_relief_round_icon_area, .triple_action_round_icon_area", {
    scale: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: ".slider_first"
})
gsap.to(".allAboutDandruffImage img", {
    top: "-15%",
    duration: 1.5,
    delay: 0,
    scrollTrigger: {
        trigger: ".allAboutDandruffParent",
        scroller: "body",
        start: "top 50",
        end: "top 50%",
        scrub: false,
        markers: false,
    }
})
gsap.to(".hairCareRoutineHeading h2", {
    filter: "blur(0px)",  // Removes blur gradually
    clipPath: "inset(0 0% 0 0)", // Reveals text from left to right
    duration: 1.5,
    delay: 1,
    filter: "blur(0px)",
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: "#hairCareRoutine"
});
// treat_parent
gsap.from(".treat_hed", {
    y: -100, // Moves text up before revealing
    opacity: 0, // Starts with invisible text
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out", // Smooth easing effect
    scrollTrigger: ".treat_parent"
});
gsap.from(".shampoo_drop", {
    x: -200, // Moves text up before revealing
    opacity: 0, // Starts with invisible text
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out", // Smooth easing effect
    scrollTrigger: ".treat_parent"
});
gsap.from(".treat_shampoo_image", {
    x: 200, // Moves text up before revealing
    opacity: 0, // Starts with invisible text
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out", // Smooth easing effect
    scrollTrigger: ".treat_parent"
});
gsap.to(".treat_text p", {
    filter: "blur(0px)",  // Removes blur gradually
    clipPath: "inset(0 0% 0 0)", // Reveals text from left to right
    duration: 1.5,
    delay: 0.5,
    filter: "blur(0px)",
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: ".treat_parent"
});
// Prevent 
gsap.from(".prevent_area h2", {
    y: -100, // Moves text up before revealing
    opacity: 0, // Starts with invisible text
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out", // Smooth easing effect
    scrollTrigger: {
        trigger: ".prevent",
        scroller: "body",
        start: "top 50",
        end: "top 50%",
        scrub: false,
        markers: false,
    }
});
gsap.from(".daily_care_product", {
    x: -200, // Moves text up before revealing
    opacity: 0, // Starts with invisible text
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out", // Smooth easing effect
    scrollTrigger: {
        trigger: ".prevent",
        scroller: "body",
        start: "top 50",
        end: "top 50%",
        scrub: false,
        markers: false,
    }
});
gsap.from(".blue-drop", {
    x: 200, // Moves text up before revealing
    opacity: 0, // Starts with invisible text
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out", // Smooth easing effect
    scrollTrigger: {
        trigger: ".prevent",
        scroller: "body",
        start: "top 50",
        end: "top 50%",
        scrub: false,
        markers: false,
    }
});
gsap.to(".daily_care_text p", {
    filter: "blur(0px)",  // Removes blur gradually
    clipPath: "inset(0 0% 0 0)", // Reveals text from left to right
    duration: 1.5,
    delay: 0.5,
    filter: "blur(0px)",
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".prevent",
        scroller: "body",
        start: "top 50",
        end: "top 50%",
        scrub: false,
        markers: false,
    }
});
// Restore
gsap.from(".restore_area h2", {
    y: -100, // Moves text up before revealing
    opacity: 0, // Starts with invisible text
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out", // Smooth easing effect
    scrollTrigger: {
        trigger: ".restore",
        scroller: "body",
        start: "top 50",
        end: "top 50%",
        scrub: false,
        markers: false,
    }
});
gsap.from(".restore_product", {
    x: 200, // Moves text up before revealing
    opacity: 0, // Starts with invisible text
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out", // Smooth easing effect
    scrollTrigger: {
        trigger: ".restore",
        scroller: "body",
        start: "top 50",
        end: "top 50%",
        scrub: false,
        markers: false,
    }
});
gsap.from(".restore-drop", {
    x: -200, // Moves text up before revealing
    opacity: 0, // Starts with invisible text
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out", // Smooth easing effect
    scrollTrigger: {
        trigger: ".restore",
        scroller: "body",
        start: "top 50",
        end: "top 50%",
        scrub: false,
        markers: false,
    }
});
gsap.to(".restore_para p", {
    filter: "blur(0px)",  // Removes blur gradually
    clipPath: "inset(0 0% 0 0)", // Reveals text from left to right
    duration: 1.5,
    delay: 0.5,
    filter: "blur(0px)",
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".restore",
        scroller: "body",
        start: "top 50",
        end: "top 50%",
        scrub: false,
        markers: false,
    }
});
// Expert Advice 
gsap.from(".expret_advice_wrapper", {
    y: 200, // Moves text up before revealing
    opacity: 0, // Starts with invisible text
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out", // Smooth easing effect
    scrollTrigger: ".expret_advice"
});
// ScrollTrigger End

// Blink Animation 
// Remove the blinking element after 2 seconds
setTimeout(() => {
    const blinkText = document.getElementById('blinkText');
    blinkText.style.display = 'none';
}, 1000);



