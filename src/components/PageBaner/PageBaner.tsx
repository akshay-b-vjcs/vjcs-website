import React from "react";

import "./PageBaner.css";
import banerImage from "@image/bg/bg-14.webp";

interface PageBanerProps {
  heading: string;
  description?: string;
}

const PageBaner:React.FC<PageBanerProps> =  ({heading, description}) => {
  return (
    <div className="page-title dark-background" style={{ backgroundImage: `url(${banerImage.src})` }}>
      <div className="container position-relative">
        <h1>{heading}</h1>
        { description && <p>{description}</p> }
      </div>
    </div>
  )
}

export default PageBaner;