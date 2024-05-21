function page1Animation() {
  var tl = gsap.timeline();

  tl.from("#header img, nav li, #header button ", {
    y: -30,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2,
  });
  tl.from("#banner h1", {
    x: -200,
    opacity: 0,
    duration: 0.4,
  });
  tl.from("#banner p", {
    x: -200,
    opacity: 0,
    duration: 0.4,
  });
  tl.from("#banner button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    "#banner img",
    {
      x: 200,
      opacity: 0,
      duration: 0.4,
    },
    "-=0.5"
  ); //to give delay in timeline

  tl.from("#partners h2, #partners img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.4,
  });
}
function page3Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#services",
      scroller: "body",
      markers: true,
      start: "top 50%",
      end: "top 30%",
      scrub: 2,
    },
  });

  tl2.from("#services h2", {
    opacity: 0,
    y: 30,
    duration: 0.4,
  });

  // LINE 1
  tl2.from(
    ".servicesbox1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "line1"
  ); //same name animation will start together. i.e line1

  tl2.from(
    ".servicesbox1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
      // backgroundColor: "#000",
    },
    "line1"
  ); //same name animation will start together i.e line1

  // LINE 2
  tl2.from(".servicesbox2.left", {
    x: -300,
    opacity: 0,
    duration: 1,
  });

  tl2.from(".servicesbox2.right", {
    x: 300,
    opacity: 0,
    duration: 1,
  });
}

page1Animation();
page3Animation();
