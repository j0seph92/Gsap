import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  useGSAP(() => {
    // gsap code here...
    gsap.to(".box2", { x: 1500, duration: 2, delay: 1, rotate: 720 }); // <-- automatically reverted
  });

  const gsapRef = useRef();

  useGSAP(() => {
    gsap.to(gsapRef.current, {
      x: 1500,
      duration: 2,
      delay: 1,
      rotate: 720,
    });
  });

  // Ref  ***********************************

  const boxRef = useRef();

  useGSAP(() => {
    gsap.from(boxRef.current, {
      x: 0,
      duration: 2,
      delay: 1,
      rotate: 360,
    });
  });

  // Scope  ***********************************
  // scope to define a particular element in the scope we want to animate

  useGSAP(
    () => {
      gsap.from(".circle", {
        y: -50,
        duration: 2,
        delay: 1,
        rotate: 360,
      });
    },
    { scope: ".cage1" }
  );

  // scope using useref

  const contRef = useRef();
  useGSAP(
    () => {
      gsap.from(".circle", {
        y: 50,
        duration: 2,
        delay: 1,
        rotate: 360,
      });
    },
    { scope: contRef }
  );

  // usestate
  const [xValue, setxValue] = useState(0);
  const [yValue, setyValue] = useState(0);
  const [btntxt, setbtntxt] = useState("Hunt the Crow");

  const [roti, setRoti] = useState(0);

  const imageRef = useRef();

  const randomX = gsap.utils.random(-500, 500, 10);
  const randomY = gsap.utils.random(-200, 200, 10);
  const rotatex = gsap.utils.random(-100, 100, 10);
  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        x: xValue,
        y: yValue,
        rotate: roti,
        duration: 0.5,
      });
    },
    { scope: "main3", dependencies: [randomX, randomY, rotatex] }
  );
  // Context save  ***********************************
  // context save to save memory(memory management) and be dead after animation is complete

  const box2Ref = useRef();

  const { contextSafe } = useGSAP();

  const rotateBox = contextSafe(function () {
    gsap.to(box2Ref.current, {
      rotate: 360,
      duration: 1,
    });
  });

  // scroll trigger  ************************************************************
  gsap.registerPlugin(ScrollTrigger);
  const boxRef2 = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  useGSAP(() => {
    gsap.from(boxRef2.current, {
      scale: 0,
      duration: 2,
      rotate: 360,
      borderRadius: "100%",
      scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });

    gsap.from(h1Ref.current, {
      opacity: 0,
      duration: 2,
      x: 500,
      scrollTrigger: {
        trigger: h1Ref.current,
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
      },
    });

    gsap.from(h2Ref.current, {
      opacity: 0,
      duration: 2,
      x: -500,
      scrollTrigger: {
        trigger: h2Ref.current,
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 60%",
        scrub: 3,
      },
    });
  }, []);
  return (
    <>
      <main>
        <div ref={gsapRef} className="box"></div>
        <div className="box2"></div>
      </main>
      <main className="main2">
        <div className="cage cage1">
          <div className="circle"></div>
          <div ref={boxRef} className="square"></div>
        </div>
        <div ref={contRef} className="cage cage2">
          <div className="circle"></div>
          <div className="square square2"></div>
        </div>
      </main>
      <main className="main2a">
        <div id="page2">
          <div id="box" ref={boxRef2}></div>
          <h1 ref={h1Ref}>GSAP</h1>
          <h2 ref={h2Ref}>React</h2>
        </div>
      </main>
      <main className="main3">
        <button>{btntxt}</button>
        <div
          ref={imageRef}
          onMouseOver={() => {
            setxValue(randomX);
            setyValue(randomY);
            setRoti(rotatex);
            setbtntxt("Crow Grabbed");
          }}
          onMouseLeave={() => {
            setbtntxt("Hunt the Crow");
          }}
          className="squarefly"
        >
          <img src="https://cdna.artstation.com/p/assets/images/images/033/954/724/original/aleksandr-crown.gif?1611010072" />
          {/* <img src="/output-onlinegiftools.gif" /> */}
        </div>
      </main>
      <main className="main4">
        <button onClick={rotateBox}>Animate</button>
        <div ref={box2Ref} className="boxnew">
          Box
        </div>
      </main>
    </>
  );
};

export default App;
