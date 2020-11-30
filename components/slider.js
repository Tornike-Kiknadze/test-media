import React, { useState, useEffect } from "react";
import styles from "../components/styles/slider.module.css";
import "@brainhubeu/react-carousel/lib/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slidesData from "./sliderArray";
import Image from "next/image";

const SliderContainer = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [divIndex, setDivIndex] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [width, setWidth] = React.useState(0);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
    setWidth(window.innerWidth);
  });

  const settingsMain = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 3500,
    asNavFor: ".slider-nav",
  };

  const sliderChange = (old, newIndex) => {
    setDivIndex(newIndex);
  };

  const onInit = (e) => {
    setDivIndex(0);
  };
  const tabletWidth = width === 768;
  const settingsThumbs = {
    slidesToShow: width === 768 ? 2 : 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    centerMode: true,
    centerPadding: "330px",
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
    accessibility: true,
    arrows: true,
    prevArrow: (
      <div className="slick-arrow  slick-prev" to="prev">
        {" "}
        <Image src="/assets/back.png" alt="logo" height="10px" width="10px" />
      </div>
    ),
    nextArrow: (
      <div className="slick-arrow  slick-next" to="next">
        {" "}
        <Image src="/assets/next.png" alt="logo" height="10px" width="10px" />
      </div>
    ),
  };

  return (
    <div className={styles.slider}>
      <Slider
        {...settingsMain}
        asNavFor={nav2}
        onInit={onInit}
        ref={(slider) => setSlider1(slider)}
        beforeChange={sliderChange}
      >
        {slidesData.map((slide) => (
          <div className={styles.carouselSlide}>
            <div className={styles.carouselImageGradient}></div>
            <div
              className={styles.carouselImage}
              style={{
                backgroundImage: `url(/assets/${slide.id}.jpg)`,
              }}
            ></div>
            <div className={styles.carouselImageText}>
              <span>{slide.categ}</span>
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </Slider>

      <div className="thumbnail-slider-wrap">
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={(slider) => setSlider2(slider)}
          className={styles.thumbnail}
        >
          {slidesData.map((slide, index) => (
            <React.Fragment>
              <div className={styles.slickSlide} key={slide.id} alt={index}>
                {tabletWidth && (
                  <div
                    className={styles.thumbnailImageRed}
                    style={
                      divIndex === index
                        ? { width: "32%" }
                        : { width: "0", transition: "none" }
                    }
                    key={slide.id}
                  ></div>
                )}
                {!tabletWidth && (
                  <div
                    className={styles.thumbnailImageRed}
                    style={
                      divIndex === index
                        ? { height: "77%" }
                        : { height: "0", transition: "none" }
                    }
                    key={slide.id}
                  ></div>
                )}
                <div
                  className={styles.thumbnailImageWhite}
                  key={slide.text}
                ></div>
                <div
                  className={styles.thumbnailImage}
                  alt={index}
                  style={{
                    backgroundImage: `url(/assets/${slide.id}.jpg)`,
                    after: {
                      content: "",
                      position: "absolute",
                      width: " 2.5px",
                      height: " 100%",
                      backgroundColor: "red",
                      borderRadius: "6px",
                      left: "-5%",
                      transform: "translateY(-50%, -50%)",
                      borderRadius: "4px",
                    },
                  }}
                ></div>{" "}
                <div className={styles.thumbnailText}>
                  <p>{slide.title}</p>
                  <span
                    style={{ backgroundColor: slide.style, color: slide.color }}
                  >
                    {slide.thumbnail}
                  </span>
                </div>
              </div>
            </React.Fragment>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderContainer;
