/* eslint-disable @typescript-eslint/no-require-imports */

'use client';
import { useEffect } from "react";
// import PureCounter from "@srexi/purecounterjs";
interface CountUpProps {
  target: number;
  duration: number;
  start?: number;
}

const CountUp:React.FC<CountUpProps> =({ target = 100, duration = 2000, start = 0, }) => {
  
  useEffect(() => {
    const PureCounter = require("@srexi/purecounterjs");
    new PureCounter(); 
  }, []);

  return (
    <span
      className="purecounter"
      data-purecounter-start={start}
      data-purecounter-end={target}
      data-purecounter-duration={duration / 1000} 
     
    ></span>
  );
}
export default CountUp ;