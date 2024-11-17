import React from "react";
import Header from "../header/Header";
import { useTranslation } from "react-i18next";
import { Link, scroller } from "react-scroll";
import { useLocation, useNavigate, Link as RouterLink } from "react-router-dom";
import Facebook from "../../assets/icons/facebook-white.svg";
import LinkdIn from "../../assets/icons/linkedin-white.svg";
import Twitter from "../../assets/icons/twitter-white.svg";
import Instagram from "../../assets/icons/instagram-white.svg";
import Youtube from "../../assets/icons/youtube-white.svg";
import Tiktok from "../../assets/icons/tiktok-white.svg";

export default function Menu({ handleOpenMenu, isOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const isHomePage = location.pathname === "/home";

  const menuItems = [
    {
      name: t("header-feature-lg"),
      id: "features"
    },
    {
      name: t("header-roadmap-lg"),
      id: "roadmap"
    },
    {
      name: t("header-investors-lg"),
      id: "investors"
    },
    {
      name: t("header-pricing-lg"),
      id: "pricing"
    },
    {
      name: t("header-team-lg"),
      id: "team"
    }
  ];

  const goToHomeAndScroll = (id) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(id, {
          spy: true,
          smooth: true,
          duration: 500,
          offset: -50,
        });
      }, 100);
    }, 500);
  };

  return (
    <div className={`menu ${isOpen ? "slide-down" : "slide-up"}`}>
      <Header handleOpenMenu={handleOpenMenu} isOpen={isOpen} />
      <div className="menu-container">
        <div className="menu-container-list">
          {!isHomePage ?
          menuItems.map((val) => (
                <RouterLink
                  onClick={() => {
                    goToHomeAndScroll(val.id);
                  }}
                  style={{textDecoration: 'none', scrollBehavior: 'smooth'}}
                  to={"/"}
                  activeClass= "active"
                >
                  <div className="menu-container-list-item">{val.name}</div>
                </RouterLink>
              )) : menuItems.map((val) => (
                <Link
                  activeClass="active"
                  to={val.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  <div className="menu-container-list-item">{val.name}</div>
                </Link>
              ))}
            <div className="menu-header-icons">
              <a href="https://www.facebook.com/Mentorityapp/" className="footer-bottom-left-list-last" ><img alt="Facebook" width={20} height={20} src={Facebook}/></a>
              <a style={{marginLeft: 25}} href="https://www.instagram.com/mentorityapp/" className="footer-bottom-left-list-last" ><img alt="Instagram" width={20} height={20} src={Instagram}/></a>
              <a style={{marginLeft: 25}} href="https://twitter.com/Mentorityapp/" className="footer-bottom-left-list-last" ><img alt="Twitter" width={20} height={20} src={Twitter}/></a>
              <a style={{marginLeft: 25}} href="https://www.linkedin.com/company/mentorityapp/" className="footer-bottom-left-list-last"><img alt="LinkdIn" width={20} height={20} src={LinkdIn}/></a>
              <a style={{marginLeft: 25}} href="https://www.youtube.com/@Mentorityapp/" className="footer-bottom-left-list-last" ><img alt="Youtube" width={20} height={20} src={Youtube}/></a>
              <a style={{marginLeft: 25}} href="https://www.tiktok.com/@mentorityapp" className="footer-bottom-left-list-last" ><img alt="Tiktok" width={20} height={20} src={Tiktok}/></a>
            </div>
        </div>
      </div>
    </div>
  );
}
