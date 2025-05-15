// src/components/AnimatedName.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const AnimatedName = () => {
  const name = "Smit Morjariya";
  const [spans, setSpans] = useState([]);
  const nameRef = useRef(null);

  useEffect(() => {
    const splitText = name.split("");
    const half = Math.floor(splitText.length / 2);

    const spanElements = splitText.map((char, idx) => ({
      char,
      cls: idx < half ? "a" : "b",
      key: idx,
    }));

    setSpans(spanElements);
  }, [name]);

  useEffect(() => {
    if (spans.length === 0) return;

    const aSpans = nameRef.current.querySelectorAll(".a");
    const bSpans = nameRef.current.querySelectorAll(".b");

    gsap.from(aSpans, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
      stagger: 0.15,
      repeat: -1,
      yoyo: true,
    });

    gsap.from(bSpans, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.1,
      stagger: -0.15,
      repeat: -1,
      yoyo: true,
    });
  }, [spans]);

  return (
    <h1
      ref={nameRef}
      className="text-white text-2xl font-semibold"
      style={{ display: "inline-block" }}
    >
      {spans.map(({ char, cls, key }) => (
        <span key={key} className={cls}>
          {char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedName;
