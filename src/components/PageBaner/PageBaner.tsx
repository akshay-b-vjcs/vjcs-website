import React from "react";

import "./PageBaner.css";
import banerImage from "@image/bg/Home.png";

interface PageBanerProps {
  heading: string;
  image? : {src : string} | null;
}

const PageBaner:React.FC<PageBanerProps> =  ({heading, image}) => {
  const img = image ? image?.src : banerImage.src;
  return (
    <div className="page-title dark-background" style={{ backgroundImage: `url(${img})` }}>
      <div className="container position-relative">
        <h1>{heading}</h1>
      </div>
    </div>
  )
}

export default PageBaner;