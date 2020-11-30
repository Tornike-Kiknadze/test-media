import React, { useState, useEffect } from "react";
import styles from "../components/styles/news.module.css";
import Navbar from "./navbar";
import news from "./newsArray";
import NewsCard from "./newsCard";
import "@brainhubeu/react-carousel/lib/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = (props) => {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  });
  const settingsMain = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    /*     autoplay: true,
    draggable: true,
    autoplaySpeed: 3500, */
  };

  if (width < 600) {
    return (
      <React.Fragment>
        <div className={styles.heading}>
          <span className={styles.headingSpan}>ბოლო სიახლეები</span>
        </div>
        <React.Fragment>
          <Slider
            {...settingsMain}
            className={styles.newsSlider}
            alt="newSlider"
          >
            {news.map((item) => (
              <div className={styles.newsCards}>
                <NewsCard {...item} />
              </div>
            ))}
          </Slider>{" "}
        </React.Fragment>
        <div className={styles.newButtonMobile}>
          <span>ყველა სიახლე</span>
        </div>{" "}
      </React.Fragment>
    );
  }

  return (
    <div className={styles.news}>
      <div className={styles.heading}>
        <span className={styles.headingSpan}>ბოლო სიახლეები</span>
      </div>{" "}
      <div className={styles.newsCards}>
        {news.map((item) => (
          <NewsCard {...item} />
        ))}
      </div>{" "}
      <div className={`${styles.newsButton} ${styles.headingSpan}`}>
        <span>ყველა სიახლე</span>
      </div>{" "}
    </div>
  );
};

export default News;
