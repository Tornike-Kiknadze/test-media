import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../components/styles/navbar.module.css";
import Image from "next/image";

const NavBar = () => {
  const [width, setWidth] = React.useState(0);
  const [coordinates, setCoordinates] = React.useState({});
  const [tooltip, showTooltip] = React.useState(false);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  });

  const hoverFunction = (e) => {
    let currentTargetRect = e.currentTarget.getBoundingClientRect();
    const coordinates = {
      top: currentTargetRect.top + 40,
      right: currentTargetRect.right,
      left: currentTargetRect.left,
    };
    setCoordinates(coordinates);
    showTooltip((value) => !value);
  };

  console.log(coordinates);
  if (width < 1024) {
    return (
      <div className={styles.navbar}>
        {" "}
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <div className={styles.navbarLogo}>
            {" "}
            <Image
              src="/assets/hamburger.png"
              alt="logo"
              height="20px"
              width="20px"
            />
          </div>{" "}
          <select className={styles.padScreenSelect}>
            <option>ქარ</option>
            <option>ENG</option>
          </select>
        </div>
        <div className={styles.navbarLogo}>
          {" "}
          <Image
            src="/assets/Logo@3x.png"
            alt="logo"
            height="59px"
            width="59px"
          />
        </div>
        <div className={styles.navbarWrapper}>
          <ul>
            <li>
              <Link href="/about">
                <a className={styles.liveText}>
                  {" "}
                  <span className={styles.liveButton}>&#8226;</span> LIVE
                </a>
              </Link>
            </li>
          </ul>
          <div className={styles.buttonDiv}>
            <button>ბილეთები</button>
          </div>
        </div>
      </div>
    );
  } else if (width < 600) {
    return (
      <div className={styles.navbar}>
        {" "}
        <div className={styles.navbarLogo}>
          {" "}
          <Image
            src="/assets/hamburger.png"
            alt="logo"
            height="20px"
            width="20px"
          />
        </div>
        <div className={styles.navbarLogo}>
          {" "}
          <Image
            src="/assets/Logo@3x.png"
            alt="logo"
            height="59px"
            width="59px"
          />
        </div>
        <div className={styles.navbarWrapper}>
          <ul>
            <li>
              <Link href="/about">
                <a className={styles.liveText}>
                  {" "}
                  <span className={styles.liveButton}>&#8226;</span> LIVE
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  } else
    return (
      <div className={styles.navbar}>
        <div className={styles.navbarLogo}>
          {" "}
          <Image
            src="/assets/Logo@3x.png"
            alt="logo"
            height="59px"
            width="59px"
          />
        </div>
        <div className={styles.navbarWrapper}>
          {tooltip && (
            <div className={styles.navTooltip} style={coordinates}>
              <p>მთავარი</p>
              <p>შედეგები</p>
              <p>კალენდარი</p>
              <p>ახალი ამბები</p>
              <p>ფოტო და ვიდეო</p>
            </div>
          )}
          <ul>
            <li onMouseOver={hoverFunction}>
              <Link href="/">
                <a>კაცთა ეროვნული</a>
              </Link>
            </li>
            <li onMouseOver={hoverFunction}>
              {" "}
              <Link href="/about">
                <a>ქალთა ეროვნული</a>
              </Link>
            </li>
            <li onMouseOver={hoverFunction}>
              {" "}
              <Link href="/about">
                <a> 21-წლამდელები</a>
              </Link>
            </li>
            <li onMouseOver={hoverFunction}>
              {" "}
              <Link href="/about">
                <a>ასაკობრივები</a>
              </Link>
            </li>
            <li onMouseOver={hoverFunction}>
              {" "}
              <Link href="/about">
                <a>ფუტსალი</a>
              </Link>
            </li>
            <li onMouseOver={hoverFunction}>
              {" "}
              <Link href="/about">
                <a> ფანშოპი</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={styles.liveText}>
                  {" "}
                  <span className={styles.liveButton}>&#8226;</span> LIVE
                </a>
              </Link>
            </li>
          </ul>
          <div className={styles.buttonDiv}>
            <button>ბილეთები</button>
            <select>
              <option>ქარ</option>
              <option>ENG</option>
            </select>
          </div>
        </div>
      </div>
    );
};

export default NavBar;
