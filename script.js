
//scroll effect from locomotive

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

//video section animation 

function videoSectionAnimation() {
  const videoContainer = document.querySelector("#video-container");
  const playButton = document.querySelector("#play");

  videoContainer.addEventListener("mouseenter", function () {
    gsap.to(playButton, {
      scale: 1,
      opacity: 1
    })
  })

  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(playButton, {
      scale: 0,
      opacity: 0
    })
  })

  videoContainer.addEventListener("mousemove", function (dets) {
    gsap.to(playButton, {
      left: dets.x - 50,
      top: dets.y - 60
    })
  })
}

//Title animation 

function headingAnimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
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

// Function to create popping-down animation
function poppingDownAnimation() {
  gsap.from("#navBar", {
    y: -50, 
    opacity: 0, 
    delay: 1.3,
    duration: 1.5, 
    ease: "power4.out", 
  });
}


document.addEventListener("mousemove", function (dets) {
  gsap.to('#cursor', {
    left: dets.x,
    top: dets.y
  })
});
function addScrollListenerToPageOne() {
  // Select the #bg-one element
  const bgOne = document.getElementById('bg-one');

  // Add a scroll event listener to the window
  window.addEventListener("scroll", function () {
    gsap.to(bgOne, {
      opacity: 0, // Change opacity to hide
      duration: 1, // Duration of the animation
      ease: "power4.out"
    });
    bgOne.style.display = "none"
  });

}

// Call the function to add scroll listener to pageOne
addScrollListenerToPageOne();


// document.querySelector("#child1").addEventListener('mouseenter',function(){
//   gsap.to("#cursor",{
//     transform: 'translate(-50%, -50%) scale(1)'
//   })
// })
// document.querySelector("#child1").addEventListener('mouseleave',function(){
//   gsap.to("#cursor",{
//     transform: 'translate(-50%, -50%) scale(0)'
//   })
// })

function cursorAnimation() {
  const childrens = document.querySelectorAll(".child");

  childrens.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: 'translate(-50%, -50%) scale(1)'
      })
    })
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: 'translate(-50%, -50%) scale(0)'
      })
    })
  })
}

function animateBackgground(){
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  console.log("its eoks");

  // Define the animation
  gsap.to("#bg-one", {
    scrollTrigger: {
      trigger: "#pageOne",
      start: "top top",
      end: "bottom top",
      scrub: true // Adjusts the speed of the animation relative to the scroll distance
    },
    opacity: 0, // Change this value as needed
    duration: 1 // Change the duration of the animation as needed
  });

}

// videoSectionAnimation();
headingAnimation();
cursorAnimation();
poppingDownAnimation();
// animateBackgground()