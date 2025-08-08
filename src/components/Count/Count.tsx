'use client';
import { useEffect, useState } from "react";
interface CountUpProps {
  target: number;
  duration?: number;
}

export default function CountUp({ target, duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // frame approx 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>{count}</span>
  );
}
// 'use client';
// import { useEffect } from "react";
// import PureCounter from "@srexi/purecounterjs";

// export default function Counter({ target = 100, duration = 2000, start = 0, decimals = 0, separator = false }) {
  
//   useEffect(() => {
//     new PureCounter(); // initialize PureCounter
//   }, []);

//   return (
//     <span
//       className="purecounter"
//       data-purecounter-start={start}
//       data-purecounter-end={target}
//       data-purecounter-duration={duration / 1000} // in seconds
//       data-purecounter-decimals={decimals}
//       data-purecounter-separator={separator ? true : false}
//     ></span>
//   );
// }
