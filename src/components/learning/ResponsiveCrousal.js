import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CrouselCard from "./CrouselCard";
const ResponsiveCrousal = () => {
  const { t } = useTranslation();
  const [isMenteeSelected, setIsMenteeSelected] = useState(true);
  const [showItem, setShowItem] = useState(3);

  const scrollTo = (value) => {
    const element = document.getElementById(value);
    element.scrollIntoView({
      behavior: "smooth",
    });
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
  const handleData1Click = () => {
    setIsMenteeSelected(false);
  };
  const handleDataClick = () => {
    setIsMenteeSelected(true);
  };
  return (
    <>
      <div className="button-group">
        <button
          className={`carousel-button ${isMenteeSelected ? "selected" : ""}`}
          id="carousel-button"
          onClick={handleDataClick}
        >
          {t("signup-mentee-lg")}
        </button>
        <button
          className={`carousel-button ${!isMenteeSelected ? "selected" : ""}`}
          id="carousel-button1"
          onClick={handleData1Click}
        >
          {t("signup-mentor-lg")}
        </button>
      </div>
      <div>
        {(isMenteeSelected ? menteeData : mentorData)
          .slice(0, showItem)
          .map((el) => {
            return (
              <div className="px-2">
                <CrouselCard el={el} />
              </div>
            );
          })}
      </div>
      <div className="button-group">
        <button
          className="carousel-button "
          style={{ border: "1px solid #FFFFFF" }}
          onClick={() => {
            if (showItem == 3) {
              setShowItem((isMenteeSelected ? menteeData : mentorData).length);
            } else {
              setShowItem(3);
            }
          }}
        >
          {showItem == 3 ? "Show More" : "Show Less"}
        </button>
      </div>

      <div className="videoBackground-learning-left-btn">
        <div className="blackButton" onClick={() => scrollTo("waitlist")}>
          {t("videoBackground-learning-left-btn-lg")}
        </div>
      </div>
    </>
  );
};
export default ResponsiveCrousal;
