import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";

import IntroVideo from "../../assets/videos/menotrity-intro.mp4";
import IntroVideoFrench from "../../assets/videos/mentority-intro-french.mp4";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import { ReactComponent as PlayIconWhite } from "../../assets/icons/play-icon-white.svg";

const IntroSection = () => {
  const { t } = useTranslation();
  const [isPlay, setIsPlay] = useState(false);
  const [isPlayHover, setIsPlayHover] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isVideoZoom, setIsVideoZoom] = useState(false);
  const [isVideoEnglish, setIsVideoEnglish] = useState(false);

  let [count, setCount] = useState(0);

  const handlePlayHover = (value) => {
    setIsPlayHover(value)
  }

  const handleChange = () => {
    setIsPlay(!isPlay);
    setCount(count + 1);
  };

  const handleChangeBackground = (value) => {
    setIsHover(value);
  };

  useEffect(() => {
    function handleChangeStorage() {
      if (localStorage.getItem("isFrench") === "true") {
        setIsVideoEnglish(true);
      } else {
        setIsVideoEnglish(false);
      }
    }
    window.addEventListener("storage", handleChangeStorage);
    return () => window.removeEventListener("storage", handleChangeStorage);
  }, []);

  const handleMouseEvent = (value) => {
    setIsVideoZoom(value);
  };

  const buttonClassName = isPlayHover
    ? "intro-section-playicon-hover intro-section-playicon-hover-15 custom-btn btn-15"
    : "intro-section-playicon custom-btn btn-15";



  return (
    <div className="intro-section">
    <div
      className="intro-section-main"
      onMouseEnter={(e) => window.innerWidth > 700 ? handleMouseEvent(true) : e.preventDefault()}
      onMouseLeave={(e) => window.innerWidth > 700 ? handleMouseEvent(false) : e.preventDefault()}
    >
      {!count && (
        <div className="intro-section-playicon-container">
          <button
            className={buttonClassName}
            onClick={() => handleChange()}
            onMouseEnter={(e) => window.innerWidth > 700 ? handlePlayHover(true) : e.preventDefault()}
            onMouseLeave={(e) => window.innerWidth > 700 ? handlePlayHover(false) : e.preventDefault()}
          >
            {isPlayHover ? (
              <PlayIconWhite className="intro-section-playicon-inner" />
            ) : (
              <PlayIcon className="intro-section-playicon-inner" />
            )}
            <div
              className={
                isPlayHover
                  ? "intro-section-container-hover"
                  : "intro-section-container"
              }
            >
              <span className="intro-section-title">
                {t("meetmentority-lg")}
              </span>
              <span className="intro-section-time">00:49</span>
            </div>
          </button>
        </div>
      )}
      <div
        className={
          isVideoZoom && isHover
            ? "intro-section-player-conatainer"
            : "intro-section-player-conatainer-default"
        }
      >
        <ReactPlayer
          className="intro-section-player"
          url={isVideoEnglish ? IntroVideoFrench : IntroVideo}
          playing={isPlay}
          controls={isPlay}
          playsinline={true}
          width={
            window.innerWidth < 767
              ? 320
              : window.innerWidth < 1279
              ? "100%"
              : 757
          }
          height={
            window.innerWidth < 767
              ? 180
              : window.innerWidth < 1279
              ? 285
              : 426
          }
          onMouseEnter={(e) => window.innerWidth > 700 ? handleChangeBackground(true) : e.preventDefault()}
          onMouseLeave={(e) => window.innerWidth > 700 ? handleChangeBackground(false) : e.preventDefault()}
        />
      </div>
    </div>
  </div>
  
  );
};

export default IntroSection;
