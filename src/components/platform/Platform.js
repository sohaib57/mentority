import React from "react";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";
import { browserName, isMobile } from 'react-device-detect';

import DeviceVideo from "../../assets/video/devices.mp4";
import MobileVideo from "../../assets/video/mobile-mockup.mp4";
import ThumbnailImageDevices from "../../assets/images/devices-thumbnail.webp";
import ThumbnailImageDesktop from "../../assets/images/desktop-thumbnail.webp";

export default function Platform() {
  const { t } = useTranslation();

  return (
    <div className="platform" id="platform">
      {/* <div className="platform-leftImg">
        <img src={TimeLineGifLeft} alt="" />
      </div> */}
      <div className="platform-content">
      <div className="platform-content-header">
          <div className="platform-content-header-heading">
            <div className="team-heading">{t("platform-lg")}</div>
            <div className="platform-content-header-heading-main mainHeading">
            {t("platform-des-lg")}
            </div>
          </div>
        </div>
        <div className="platform-content-video">
          <div className="platform-content-video-left">
          {isMobile && browserName == "Safari" ? (
            <ReactPlayer
              className="platform-content-video-left-tag"
              url={DeviceVideo}
              playsinline={true}
              width={'100%'}
              height={351}
              loop
              muted
              playing
          />
          ) : (
            <video autoPlay loop muted playsInline className="platform-content-video-left-tag" poster={ThumbnailImageDesktop}>
              <source src={DeviceVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) }

          </div>
          <div className="platform-content-video-right">
          {isMobile && browserName == "Safari" ? (
            <ReactPlayer
                className="platform-content-video-left-tag"
                url={MobileVideo}
                playsinline={true}
                width={'100%'}
                loop
                muted
                playing
            />
          ) : (
            <video autoPlay loop muted playsInline className="platform-content-video-left-tag" poster={ThumbnailImageDevices}>
              <source src={MobileVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          </div>
        </div>
      </div>
      {/* <div className="platform-leftImg">
        <img src={TimeLineGifRight} alt="" />
      </div> */}
    </div>
  );
}
