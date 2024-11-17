import React from "react";
import ReactPlayer from "react-player";
import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";
import { useNavigate} from 'react-router-dom';

import PartnersVideo from "../../assets/videos/partners.mp4";
import TimeLineGifLeft from "../../assets/images/gifs/lines-rotate.gif";
import TimeLineGifRight from "../../assets/images/gifs/lines-rotate-right.gif";

const InvestorsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Element id="investors">
    <div className="investors">
        <div className="investors-platform-leftImgg">
        <img src={TimeLineGifLeft} alt="" />
      </div>
      <div className="investors-main">

      <span className="investors-title">{t("investors-lg")}</span>
      <span className="investors-description">
      {t("investors-des-lg")}
      </span>
      <span className="investors-detail">
      {t("investors-detail-lg")}
      </span>
      <div className="investors-container">
        <div className="investors-video-container" >

        <ReactPlayer
          className="investors-player"
          url={PartnersVideo}
          playsinline={true}
          // light={ThumbnailImageInvestor}
          width={window.innerWidth > 700 ? '100%' : '100%' }
            height={window.innerWidth > 1600 ? 520 : window.innerWidth > 700 ? 321 : 180 }
          loop
          muted
          playing
        />
        </div>
        <div className="investors-buttons">
          <div
            className="investors-partner"
            onClick={()=>{navigate('/contactUs',{state:{name:'partner'}});}}
          >
                  {t("investors-partners-lg")}
          </div>
          <div
            className="investors-partners"
            onClick={()=>{navigate('/contactUs',{state:{name:'investor'}});}}

          >
                 {t("investors-btn-lg")}
          </div>
        </div>
      </div>
      </div>
      <div className="investors-platform-leftImg-right">
        <img src={TimeLineGifRight} alt="" />
      </div>
    </div>
    </Element>
  );
};

export default InvestorsSection;
