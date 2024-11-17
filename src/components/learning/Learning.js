import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import Crousel from "./Crousel";
import ResponsiveCrousal from "./ResponsiveCrousal";
import BackgrounGif from "../../assets/video/animation-logo-mentority-transparent.gif";

export default function Learning() {
  const { t } = useTranslation();
  const [gifLoaded, setGifLoaded] = useState(false);

  const preloadImages = () => {
    const img = new Image();
    img.src = BackgrounGif;
    img.onload = () => {
      setGifLoaded(true);
    };
  };

  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <Element id="features">
      <div className="videoBackground">
        <div className="video-main">
          <div className="video-container">
            <div className="videoBackground-learning">
              <div className="videoBackground-learning-left">
                <span className="videoBackground-learning-left-heading">
                  {t("videoBackground-learning-left-heading-lg")}
                </span>
                <span className="videoBackground-learning-left-mainhead">
                  {t("videoBackground-learning-left-mainhead-lg")}{" "}
                  <span className="videoBackground-learning-left-mainheadsub  mainHeadingBlack">
                    {t("videoBackground-learning-left-mainheadsub-lg")}
                  </span>
                </span>
                {window.innerWidth < 700 && gifLoaded && (
                  <div className="video-container-max">
                    <div style={{ alignItems: "center", display: "flex" }}>
                      <img src={BackgrounGif} alt="" />
                    </div>
                    {/* <video autoPlay loop muted style={{ maxWidth: "300px" }}>
                    <source src={BackgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                  </div>
                )}
                <div className="videoBackground-learning-left-para">
                  {t("videoBackground-learning-left-para-lg")}
                </div>
              </div>
            </div>
          </div>

          {window.innerWidth > 700 && (
            <div className="video-container-max">
              <div style={{ alignItems: "center", display: "flex" }}>
                <img src={BackgrounGif} alt="" />
              </div>
              {/* <video autoPlay loop muted >
              <source src={BackgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            </div>
          )}
        </div>
        <div>
          {window.innerWidth > 700 ? <Crousel /> : <ResponsiveCrousal />}
        </div>

      </div>
    </Element>
  );
}
