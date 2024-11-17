import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate} from 'react-router-dom';

import Logo from "../../assets/images/logo-white.png";
import Facebook from "../../assets/icons/facebook-grey.svg";
import LinkdIn from "../../assets/icons/linkedin-grey.svg";
import Twitter from "../../assets/icons/twitter-grey.svg";
import Instagram from "../../assets/icons/instagram-grey.svg";
import Youtube from "../../assets/icons/youtube-grey.svg";
import Tiktok from "../../assets/icons/tiktok-grey.svg";
import FrenchPDF from "../../assets/pdfs/Politique_de_confidentialité_Mentority.pdf";
import EngPDF from "../../assets/pdfs/Privacy_Statement_Mentority.pdf";

export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollTo = (value) => {
    const element = document.getElementById(value);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleDownload = (lang) => {
    const anchor = document.createElement('a');
    if(lang == "eng") {
      anchor.href = EngPDF;
      anchor.download = 'Privacy_Statement_Mentority.pdf';
      anchor.click();
    } else {
      anchor.href = FrenchPDF;
      anchor.download = 'Politique_de_confidentialité_Mentority.pdf';
      anchor.click();
    }
  };

  return (
    <div className="footer">
      <div className="footer-up">
        <div className="footer-up-logo">
          <div>
            {" "}
            <img alt="logo" src={Logo} width={130} height={45} />
          </div>
          <div></div>
        </div>
        <div className="footer-up-resources">
          <span className="footer-up-resources-heading">{t("footer-lg")}</span>
          <span className="footer-up-usecase-list" onClick={() => scrollTo("waitlist")}>{t("footer-waitlist-lg")}</span>
          <span className="footer-up-usecase-list" onClick={()=>{navigate('/contactUs',{state:{name:'investor'}});}}>{t("footer-investor-lg")}</span>
          <span className="footer-up-usecase-list" onClick={()=>{navigate('/contactUs',{state:{name:'partner'}});}}>{t("footer-partner-lg")}</span>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div className="footer-bottom-left-list">
            <span className="footer-bottom-left-list-desc">©2023 {t("footer-copyright-lg")}</span>
            <span className="footer-bottom-left-list-last"
                onClick={()=>{
                  if(t("sales-statement-lg") == "Privacy Statement.") {
                    handleDownload("eng")
                  } else {
                    handleDownload("fr")
                  }}}>{t("footer-policy-lg")}</span>
            {window.innerWidth < 700 && (
              <div className="footer-bottom-right">
            <a href="https://www.facebook.com/Mentorityapp/"><img alt="Facebook" width={20} height={20} src={Facebook}/></a>
            <a href="https://www.instagram.com/mentorityapp/" className="footer-bottom-left-list-last" ><img alt="Instagram" width={20} height={20} src={Instagram}/></a>
            <a href="https://twitter.com/Mentorityapp/" className="footer-bottom-left-list-last" ><img alt="Twitter" width={20} height={20} src={Twitter}/></a>
            <a href="https://www.linkedin.com/company/mentorityapp/" className="footer-bottom-left-list-last"><img alt="LinkdIn" width={20} height={20} src={LinkdIn}/></a>
            <a href="https://www.youtube.com/@Mentorityapp/" className="footer-bottom-left-list-last" ><img alt="Youtube" width={20} height={20} src={Youtube}/></a>
            <a href="https://www.tiktok.com/@mentorityapp" className="footer-bottom-left-list-last" ><img alt="Tiktok" width={20} height={20} src={Tiktok}/></a>
              </div>
            )}
          </div>
          <div className="footer-bottom-left-para">
          {t("footer-des-lg")}
          </div>
        </div>
        {window.innerWidth > 700 && (
          <div className="footer-bottom-right">
            <a href="https://www.facebook.com/Mentorityapp/"><img alt="Facebook" width={20} height={20} src={Facebook}/></a>
            <a href="https://www.instagram.com/mentorityapp/" className="footer-bottom-left-list-last" ><img alt="Instagram" width={20} height={20} src={Instagram}/></a>
            <a href="https://twitter.com/Mentorityapp/" className="footer-bottom-left-list-last" ><img alt="Twitter" width={20} height={20} src={Twitter}/></a>
            <a href="https://www.linkedin.com/company/mentorityapp/" className="footer-bottom-left-list-last"><img alt="LinkdIn" width={20} height={20} src={LinkdIn}/></a>
            <a href="https://www.youtube.com/@Mentorityapp/" className="footer-bottom-left-list-last" ><img alt="Youtube" width={20} height={20} src={Youtube}/></a>
            <a href="https://www.tiktok.com/@mentorityapp" className="footer-bottom-left-list-last" ><img alt="Tiktok" width={20} height={20} src={Tiktok}/></a>
          </div>
        )}
      </div>
    </div>
  );
}
