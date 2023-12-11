function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotiveAnimation();

function navbarAnimation() {
  gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
  gsap.to("#nav-part2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
}
navbarAnimation()

function imageBackAmination() {
  gsap.registerPlugin(ScrollTrigger);

  const imageOne = document.querySelector("#image-One");

  gsap.to(imageOne, {
    opacity: 0,
    scrollTrigger: {
      trigger: "#pageOne",
      scroller: "#main",
      start: "top 0",
      end: "bottom 80%",
      scrub: true,
      onUpdate: (self) => {
        const opacityValue = 1 - self.progress; // Update opacity based on scroll progress
        gsap.to(imageOne, { opacity: opacityValue, duration: 0.5, ease: "power2.inOut" });
      },
    },
  });

  // gsap.to("#image-two", {
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: "#pageOne",
  //     scroller: "#main",
  //     start: "top 0",
  //     end: "bottom 100%",
  //     scrub: true,
  //     onUpdate: (self) => {
  //       const opacityValue = self.progress;
  //       gsap.to("#image-two", { opacity: opacityValue, duration: 0.3 });
  //     },
  //   },
  // });


}
// imageBackAmination()


function videoconAnimation() {
  var videocon = document.querySelector("#video-container");
  var playbtn = document.querySelector("#play");
  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
  document.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 70,
      top: dets.y - 80,
    });
  });
}
// videoconAnimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
  // document.querySelector("#child1").addEventListener("mouseenter",function(){

  // })

  // document.querySelector("#child1").addEventListener("mouseleave",function(){
  //   gsap.to("#cursor",{
  //     transform: 'translate(-50%,-50%) scale(0)'
  //   })
  // })
  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}

// Function to create popping-down animation
function poppingDownAnimation() {
  gsap.from("#navigate", {
    y: -50,
    opacity: 0,
    delay: 1.3,
    duration: 1.5,
    ease: "power4.out",
  });
}

function headingAnimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  })

  gsap.from("#page1 h4", {
    y: 100,
    opacity: 0,
    delay: 0.8,
    duration: 1,
    stagger: 0.3,
  })

  gsap.from("#page1 h3", {
    y: 100,
    opacity: 0,
    delay: 0.7,
    duration: 0.9,
    stagger: 0.3,
  })

  gsap.from("#page1 h2", {
    y: 100,
    opacity: 0,
    delay: 0.9,
    duration: 0.9,
    stagger: 0.3,
  })

  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  })
}


const text = `WE DO ORGANIZE THE EVENTS.`;
let index = 0;

function typeWriter() {
  document.getElementById('typing-text').textContent = text.slice(0, index);
  index++;

  if (index <= text.length) {
    setTimeout(typeWriter, 800); // Change delay here (in milliseconds)
  }
}

// Start typing effect on page load
window.onload = function () {
  // typeWriter();
};

function subTitlesAnimation(entries =[], observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      gsap.from("#subtitle h3", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        stagger: 0.3,
      });
      observer.disconnect(); // Stop observing once animation starts
    }
  });
}

const options = {
  threshold: 0.5 // Adjust this value based on when you want the effect to trigger
};

const observer = new IntersectionObserver(subTitlesAnimation, options);
// observer.observe(document.getElementById('subtitle'));

subTitlesAnimation();
headingAnimation();
poppingDownAnimation();
cursorAnimation();
