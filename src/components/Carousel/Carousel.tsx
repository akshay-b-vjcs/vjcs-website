import Image, { StaticImageData } from "next/image";
import "./Carousel.css";

// Import local service banner images
import imgCax from "@image/carousel/carousel-cax.png";
import imgPlm from "@image/carousel/carousel-plm.png";
import imgEds from "@image/carousel/carousel-eds.png";
import imgDs from "@image/carousel/carousel-ds.png";

import imgCaxMob from "@image/carousel/mobile/carousel-cax-Sq.png";
import imgPlmMob from "@image/carousel/mobile/carousel-plm-Sq.png";
import imgEdsMob from "@image/carousel/mobile/carousel-eds-Sq.png";
import imgDsMob from "@image/carousel/mobile/carousel-ds-Sq.png";

type VideoSlide = {
  title: string;
  videoSrc: string;
};

type ImageSlide = {
  title: string;
  desktop: StaticImageData;
  mobile: StaticImageData;
};

type Slide = VideoSlide | ImageSlide;

const Carousel: React.FC = () => {
  const slides: Slide[] = [
    {
      title: "VJCS Video",
      videoSrc: "./video/vjcs.mp4",
    },
    {
      desktop: imgCax,
      mobile: imgCaxMob,
      title: "CAx Software Services",
    },
    {
      desktop: imgPlm,
      mobile: imgPlmMob,
      title: "PLM",
    },
    {
      desktop: imgEds,
      mobile: imgEdsMob,
      title: "Engineering Design Services",
    },
    {
      desktop: imgDs,
      mobile: imgDsMob,
      title: "Digitization Services",
    },
  ];

  return (
    <div id="bgCarousel" className="carousel slide">
      <div className="carousel-indicators">
        {slides.map((s, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#bgCarousel"
            data-bs-slide-to={i}
            className={`${i === 0 ? "active" : ""}`}
            aria-current="true"
            aria-label={s.title}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map((s, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
            {"videoSrc" in s ? (
              <video className={`d-block w-100`} autoPlay muted loop playsInline>
                <source src={s.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="d-block carousel-image-wrapper">
                <picture>
                  <source srcSet={s.mobile.src} media="(max-width: 768px)" />
                  <Image
                    src={s.desktop}
                    alt={s.title}
                    priority={i === 0}
                    layout="intrinsic" // This will keep the aspect ratio
                    placeholder="blur"
                    className="animate-ken-burns"
                  />
                </picture>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
