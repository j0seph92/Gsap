// Cursor ************************************************************
var main = document.querySelector("body");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (e) {
  // console.log(e);
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
    ease: "back.out(1.7)",
  });
});

imageDiv.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffffff8a",
  });
});

imageDiv.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});

// video 1 ************************************************************
gsap.from("#page1 #box", {
  scale: 0,
  duration: 10,
  delay: 1,
  repeat: -1,
  yoyo: true,
  rotate: 360,
});

// video 2 ************************************************************

gsap.from("#page2 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,
  borderRadius: "100%",
  // scrollTrigger: "#page2 #box",
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    scrub: true,
  },
});

gsap.from("#page2 h1", {
  opacity: 0,
  duration: 2,
  x: 500,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 20%",
    scrub: 2,
  },
});

gsap.from("#page2 h2", {
  opacity: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: "#page2 h2",
    scroller: "body",
    // markers: true,
    start: "top 40%",
    end: "top 10%",
    scrub: 3,
  },
});
gsap.to("#page3 h1", {
  transform: "translateX(-32%)",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: true,
    pin: true,
  },
});

// timeline ************************************************************
var tl = gsap.timeline();
tl.from(".box ", {
  duration: 1.5,
  delay: 1,
  x: 1000,
});
tl.to(".box1 ", {
  duration: 1.5,
  delay: 1,
  x: 1000,
});
gsap.from(".box2 ", {
  duration: 1.5,
  delay: 3.5,
  x: 1000,
  y: -300,
});

// timeline animation ************************************************************
var menu = document.querySelector("#nav .nav-menu");
var cross = document.querySelector("#full .nav-x");

var tlm = gsap.timeline();

tlm.to("#full", {
  right: 0,
  width: "40%",
  duration: 0.5,
});

tlm.from("#full h4", {
  x: 150,
  duration: 0.6,
  stagger: 0.2,
  opacity: 0,
});
tlm.from("#full .nav-x", {
  opacity: 0,
});

tlm.pause();

menu.addEventListener("click", function () {
  tlm.play();
});

cross.addEventListener("click", function () {
  tlm.reverse();
});

// text animation ************************************************************
function breakTheText() {
  var h1 = document.querySelector("#page5 h1");
  // console.log(h1);

  var h1text = h1.textContent;

  var clutter = "";
  var splittedText = h1text.split("");

  var halfvalue = splittedText.length / 2;

  splittedText.forEach(function (e, key) {
    // clutter = clutter + e;
    if (key < halfvalue) {
      clutter += `<span class="first">${e}</span>`;
    } else {
      clutter += `<span class="second">${e}</span>`;
    }
  });
  // console.log(clutter);

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .first", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
});

gsap.from("h1 .second", {
  y: -80,
  duration: 0.6,
  opacity: 0,
  delay: 0.5,
  stagger: -0.15,
});

// scroll animation ************************************************************
window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      repeat: -1,
      duration: 10,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: 180,
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      repeat: -1,
      duration: 10,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: 0,
    });
  }
});
