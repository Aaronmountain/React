import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ReactComponent as Cogicon } from "../../images/cog.svg";
import { ReactComponent as Plusicon } from "../../images/plus.svg";
import { ReactComponent as ArrowLefticon } from "../../images/arrowLeft.svg";

import './App.css'

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const refOne = useRef(null)
  const refTwo = useRef(null)
  const refThird = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    const line = lineRef.current;
    const cog = refOne.current;
    const plus = refTwo.current;
    const arrow = refThird.current;

    tl
      .to(line, {
        duration: 3,
        width: '100%',
        backgroundColor: 'rgb(33, 154, 184)',
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: line,
          scrub: true,
        },
      })
      .to(
        cog,
        {
          xPercent: 100,
          y: '100vh',
          duration: 5,
          rotate: 720,
          scrollTrigger: {
            trigger: cog,
            scrub: true
          },
        }
      )
      .fromTo(
        plus,
        {
          opacity: 0,
          scale: 0.2,
          x: 0,
        },
        {
          opacity: 1,
          x: 200,
          scale: 2,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: plus,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        }
      )
      .to(
        arrow, {
        scale: 5,
        ease: "none",
        scrollTrigger: {
          trigger: arrow,
          scrub: true,
        },
      });
  }, [])

  return (
    <div className='wrap'>
      <div className='box box1'>
        <Cogicon ref={refOne} />
      </div>
      <div className="line" ref={lineRef}></div>
      <div className='box box2'>
        <Plusicon ref={refTwo} />
      </div>
      <div className='box box3'>
        <ArrowLefticon ref={refThird} />
      </div>
    </div>
  )
}

export default App
