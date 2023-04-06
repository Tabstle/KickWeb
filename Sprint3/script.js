gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".quote").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 60%",
    end: "bottom 40%",
    markers: true,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { x: 400, autoAlpha: 0 },
        {
          duration: 1.25,
          x: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { x: 400, autoAlpha: 0 },
        {
          duration: 1.25,
          x: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});
