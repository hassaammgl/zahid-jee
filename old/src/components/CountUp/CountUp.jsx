"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CountUp({ value, duration = 2, className = "" }) {
  const numberRef = useRef(null);

  useEffect(() => {
    const counterObj = { val: 0 };

    gsap.to(counterObj, {
      val: value,
      duration,
      ease: "power3.out",
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent = Math.floor(counterObj.val);
        }
      },
      onComplete: () => {
        gsap.fromTo(
          numberRef.current,
          { scale: 1.1 },
          { scale: 1, duration: 0.3, ease: "back.out(4)" }
        );
      },
    });
  }, [value, duration]);

  return (
    <span ref={numberRef} className={className}>
      0
    </span>
  );
}
