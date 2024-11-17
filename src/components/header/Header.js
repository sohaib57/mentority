import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Logo from "../../assets/images/MAIN LOGO_White.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/Menu.svg";
import { ReactComponent as MenuIconClose } from "../../assets/images/menu/close.svg";
import { useTranslation } from "react-i18next";
import { Switch } from "antd";

const Header = ({ handleOpenMenu, isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(localStorage.getItem("isFrench") === "true" ? "fr" : "en");

  const changeLanguage = (lng) => {
    setIsEnglish(lng ? "en" : "fr");
  };

  useEffect(() => {
    if (isEnglish === "en") {
      i18n.changeLanguage("en");
      localStorage.setItem("isFrench", false);
      window.dispatchEvent(new Event("storage"));
    } else if (isEnglish === "fr") {
      i18n.changeLanguage("fr");
      localStorage.setItem("isFrench", true);
      window.dispatchEvent(new Event("storage"));
    }
  }, [isEnglish]);

  const scrollTo = (value) => {
    const element = document.getElementById(value);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Check if the current path matches the "Contact Us" route
  const isContactUsPage = location.pathname === "/contactUs";

  return (
    <div className="header">
      <div onClick={() => navigate("/")}>
        <img src={Logo} width={130} height={45} />
      </div>

      <div className="header-rightsection">
        {!isContactUsPage && (
          <Switch
            className="language-toggle"
            onClick={(e) => changeLanguage(e)}
            checkedChildren="EN"
            unCheckedChildren="FR"
            defaultChecked={isEnglish === "en"}
          />
        )}
        {!isContactUsPage && (
          <div className="header-button" onClick={()=>{scrollTo("waitlist")}}>
            {t("header-btn-lg")}
          </div>
        )}
        {isOpen ? (
          <MenuIconClose onClick={handleOpenMenu} className="header-icon" />
        ) : (
          <MenuIcon onClick={handleOpenMenu} className="header-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
