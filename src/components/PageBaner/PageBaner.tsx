import React from "react";

import "./PageBaner.css";
// import banerImage from "@image/bg/bg-14.webp";
import banerImage from "@image/services/Home.png"

interface PageBanerProps {
  heading: string;
}

const PageBaner:React.FC<PageBanerProps> =  ({heading}) => {
  return (
    <div className="page-title dark-background" style={{ backgroundImage: `url(${banerImage.src})` }}>
      <div className="container position-relative">
        <h1>{heading}</h1>
      </div>
    </div>
  )
}

export default PageBaner;