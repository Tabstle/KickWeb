function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("animR")) {
    x = 100;
    y = 0;
  } else if (elem.classList.contains("animL")) {
    x = -100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.5, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".quote").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      start: "top 70%",
      end: "bottom 30%",
      markers: false,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem) },
      onLeave: function() { hide(elem) }, // assure that the element is hidden when scrolled into view
      
      onLeaveBack: function () { hide(elem) }

    });
  });
});






