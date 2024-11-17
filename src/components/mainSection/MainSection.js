import React from "react";

import { ReactComponent as ArrowIcon } from "../../assets/icons/arrowright.svg";
import { useTranslation } from "react-i18next";

const MainSection = () => {

  const { t } = useTranslation();

    const scrollTo = (value) => {
        const element = document.getElementById(value);
        element.scrollIntoView({
          behavior: "smooth",
        });
      };
  return (
    <div className="main-section">
      <div className="main-section-first">
        <span className="main-section-first-fund">{t("main-section-first-fund-lg")}</span>
        <span className="main-section-first-sign">{` | `}</span>
        <span className="main-section-first-comingsoon">{t("main-section-first-comingsoon-lg")}</span>
        <ArrowIcon />
      </div>
      {/* <span className="main-section-tailor">Tailor your learning journey</span> */}
      <span className="main-section-knowledge">{t("main-section-knowledge-lg")}</span>
      <span className="main-section-foster">
        {t("main-section-foster-lg")}
      </span>
      <div className="main-section-button">
        <div className="main-section-button-inner" onClick={() => scrollTo("waitlist")}> {t("header-btn-lg")}</div>
      </div>
      {/* <div className="main-section-last">
                <TickIcon />
                <span  className="main-section-description">
                Learn on Your Terms, Earn on Your Schedule
                </span>
            </div> */}
    </div>
  );
};

export default MainSection;
