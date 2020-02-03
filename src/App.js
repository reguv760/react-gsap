import React, { useRef, useEffect, useState } from "react";
import "./App.css";

import { TweenMax, Power3 } from "gsap";

function App() {
  //import useRef then define a null useRef object as a variable
  //then assign React hook as to HTML element (el) as ref by running an arrow function:
  //ref={ el => (<variable> = el) }
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  let app = useRef(null);

  const [state, setState] = useState(false);

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    //stagger animation function basedon DRY principle
    TweenMax.staggerFrom(
      [circle, circleRed, circleBlue],
      0.8,
      { opacity: 0, x: 40, ease: Power3.easeOut },
      0.2
    );
  }, []);

  const handleExpand = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeOut
    });
    setState(true);
  };

  const handleShrink = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 75,
      height: 75,
      ease: Power3.easeOut
    });
    setState(false);
  };

  return (
    <div className='App' ref={el => (app = el)}>
      <header className='App-header'>
        <div className='circle-container'>
          <div className='circle' ref={el => (circle = el)}></div>
          <div
            className='circle red '
            ref={el => (circleRed = el)}
            onClick={state !== true ? handleExpand : handleShrink}
          ></div>
          <div className='circle blue' ref={el => (circleBlue = el)}></div>
        </div>
      </header>
    </div>
  );
}

export default App;
