import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../assets/css/styles.scss";
import CrouselCard from "./CrouselCard";

const SliderMentee = ({
  isMenteeSelected,
  menteeData,
  mentorData,
  settings,
  isHover,
  handleHoverParent
}) => {
  const [activeHoverIndex, setActiveHoverIndex] = useState(-1);
  return (
    <Slider {...settings} variableWidth={true}>
      {" "}
      {(isMenteeSelected ? menteeData : mentorData).map((el, index) => (
        <CrouselCard
          el={el}
          activeHoverIndex={activeHoverIndex}
          index={index}
          handleHover={setActiveHoverIndex}
          isHover={isHover}
          handleHoverParent={handleHoverParent}
        />
      ))}
    </Slider>
  );
};

const SliderMentor = ({
  isMenteeSelected,
  menteeData,
  mentorData,
  settings,
  isHover,
  handleHoverParent
}) => {
  const [activeHoverIndex, setActiveHoverIndex] = useState(-1);
  return (
    <div
      className="main-slider"
      // style={{ width: activeHoverIndex != -1 ? "94%" : "90%" }}
    >
      <Slider
        {...settings}
        // slidesToShow={activeHoverIndex != -1 ? 4 : 4}
        variableWidth={true}
      >
        {" "}
        {(isMenteeSelected ? menteeData : mentorData).map((el, index) => (
          <CrouselCard
            el={el}
            activeHoverIndex={activeHoverIndex}
            index={index}
            handleHover={setActiveHoverIndex}
            isHover={isHover}
            handleHoverParent={handleHoverParent}
          />
        ))}
      </Slider>
    </div>
  );
};

const Carousel = () => {
  const { t } = useTranslation();
  const [isMenteeSelected, setIsMenteeSelected] = useState(true);
  const [activeHoverIndex, setActiveHoverIndex] = useState(-1);

  // settings for slider
  let settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2
      //   }
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };
  const mentorData = [
    {
      id: 1,
      name: "01",

      fun: <span>{t("slider-container-head-lg")}</span>,
      description: <span>{t("slider-container-blackheading-lg")}</span>,
    },

    {
      id: 2,
      name: "02",

      fun: <span>{t("slider-container-live-lg")}</span>,
      description: <span>{t("slider-container-live-desc-lg")}</span>,
    },

    {
      id: 3,
      name: "03",

      fun: <span>{t("slider-container-public-lg")}</span>,
      description: <span>{t("slider-container-public-des-lg")}</span>,
    },

    {
      id: 4,
      name: "04",

      fun: <span>{t("slider-container-consulting-lg")}</span>,
      description: <span>{t("slider-container-consulting-des-lg")}</span>,
    },
    {
      id: 5,
      name: "05",

      fun: <span>{t("slider-container-courses-lg")}</span>,
      description: <span>{t("slider-container-courses-des-lg")}</span>,
    },
    {
      id: 6,
      name: "06",

      fun: <span>{t("slider-container-online-lg")}</span>,
      description: <span>{t("slider-container-online-des-lg")}</span>,
    },
  ];
  const menteeData = [
    {
      id: 1,
      name: "01",

      fun: <span>{t("slider-container-subs-lg")}</span>,
      description: <span>{t("slider-container-subs-des-lg")}</span>,
    },

    {
      id: 2,
      name: "02",

      fun: <span>{t("slider-container-session-lg")}</span>,
      description: <span>{t("slider-container-session-des-lg")}</span>,
    },

    {
      id: 3,
      name: "03",

      fun: <span>{t("slider-container-consult-lg")}</span>,
      description: <span>{t("slider-container-consult-des-lg")}</span>,
    },

    {
      id: 4,
      name: "04",

      fun: <span>{t("slider-container-demand-lg")}</span>,
      description: <span>{t("slider-container-demand-des-lg")}</span>,
    },
    {
      id: 5,
      name: "05",

      fun: <span>{t("slider-container-events-lg")}</span>,
      description: <span>{t("slider-container-events-des-lg")}</span>,
    },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenteeSelected(!isMenteeSelected);
  };

  const scrollTo = (value) => {
    const element = document.getElementById(value);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
    <div className="caraousel-padding" style={{ paddingRight: activeHoverIndex != -1 ? '8%' : '13%'}}>
      <div
        className="button-group carousel-margin"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className={`carousel-button carousel-mentee ${
            isMenteeSelected ? "selected" : ""
          }`}
          id="carousel-button"
          onClick={(e) => handleChange(e)}
        >
          {t("signup-mentee-lg")}
        </div>

        <div
          className={`carousel-button ${!isMenteeSelected ? "selected" : ""}`}
          onClick={(e) => handleChange(e)}
        >
          {t("signup-mentor-lg")}
        </div>
      </div>
      <div className="mannnnn">
        {isMenteeSelected ? (
          <div className="main-slider" 
          // style={{ width: "97%" }}
          >
            <SliderMentee
              isMenteeSelected={true}
              menteeData={menteeData}
              mentorData={mentorData}
              settings={settings}
              isHover={activeHoverIndex}
              handleHoverParent={setActiveHoverIndex}
            />
          </div>
        ) : (
          <SliderMentor
            isMenteeSelected={false}
            menteeData={menteeData}
            mentorData={mentorData}
            settings={settings}
            isHover={activeHoverIndex}
            handleHoverParent={setActiveHoverIndex}
          />
        )}

      </div>
      <div className="videoBackground-learning-left-btn">
        <div className="blackButton" onClick={() => scrollTo("waitlist")}>
          {t("videoBackground-learning-left-btn-lg")}
        </div>
      </div>
    </div>
    </>
  );
};

export default Carousel;
