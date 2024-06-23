import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BouncingText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (text) {
      const chars = text.querySelectorAll('.char');

      gsap.fromTo(
        chars,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.in',
          stagger: 0.1,
          scrollTrigger: {
            trigger: text,
            start: 'top 75%',
            onEnter: () => {
              gsap.to(chars, {
                y: -20,
                animationDuration: 0.6,
                repeat: -1,
                yoyo: true,
                stagger: 1,
                duration: 0.6,
                ease: 'power1',
              });
            },
          },
        }
      );
    }
  }, []);

  return (
    <div ref={textRef} className="flex justify-center space-x-5 text-gray-100 text-6xl font-bold">
      {'Catch - a - Vibe'.split('').map((char, index) => (
        <span key={index} className="char font-rowdies inline-block">
          {char}
        </span>
      ))}
    </div>
  );
};

export default BouncingText;