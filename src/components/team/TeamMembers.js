import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Element } from 'react-scroll';

import Hood from "../../assets/images/team/Adriano-casual-updated.webp";
import Romain from "../../assets/images/team/romain-casual-updated.webp";
import Moad from "../../assets/images/team/moad-casual-updated.webp";
import Ayoub from "../../assets/images/team/Ayoube-casual-updated.webp";
import HoodMentority from "../../assets/images/team/Adriano-mentority-updated.webp";
import RomainMentority from "../../assets/images/team/romain-mentority-updated.webp";
import MoadMentority from "../../assets/images/team/moad-mentority-updated.webp";
import AyoubMentority from "../../assets/images/team/Ayoube-mentority-updated.webp";

export default function TeamMembers() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const users = [
    {
      id: 1,
      name: "Adriano Melillo",
      position: "Chief Executive Officer",
      image: Hood,
      imageHovered: HoodMentority,
      Linkedin: "https://www.linkedin.com/in/adrianomelillocareer/",
      Mail: "a.melillo@mentority.app",
    },
    {
      id: 2,
      name: "Romain Debecq",
      position: "Chief Partnership Officer",
      image: Romain,
      imageHovered: RomainMentority,
      Linkedin: "https://www.linkedin.com/in/romain-debecq-683ab9195/",
      Mail: "r.debecq@mentority.app",
    },
    {
      id: 3,
      name: "Moad Lotf",
      position: "Chief Finance Officer",
      image: Moad,
      imageHovered: MoadMentority,
      Linkedin: "https://www.linkedin.com/in/moad-lotf-33b657148/",
      Mail: "m.lotf@mentority.app",
    },
    {
      id: 4,
      name: "Ayoube Bourma",
      position: "Chief Business Officer",
      image: Ayoub,
      imageHovered: AyoubMentority,
      Linkedin: "",
      Mail: "a.bourma@mentority.app",
    },
  ];

  const handleChangeBackground = (index) => {
    setHoveredIndex(index);
  };

  return (
    <Element id="team">
    <div className="team">
      <span className="team-heading">{t("team-lg")}</span>
      <span className="team-mainHeading">{t("team-des-lg")}</span>
      <div className="team-members">
        {users.map((val, index) => (
          <div className="team-members-single">
            <div
              class="team-members-single-card"
              onMouseEnter={() => handleChangeBackground(index)}
              onMouseLeave={() => handleChangeBackground(-1)}
            >
              <div className="team-image">
                <img
                  src={val.image}
                  key={`image-${index}`}
                  style={{
                    zIndex: hoveredIndex == index ? 0 : 1,
                    position: "absolute",
                  }}
                  alt=""
                />
                <img
                  src={val.imageHovered}
                  key={`hovered-image-${index}`}
                  style={{
                    zIndex: hoveredIndex == index ? 1 : 0,
                    position: "absolute",
                  }}
                  alt=""
                />
              </div>
              <div class="card-content">
                <h4>{val.Mail}</h4>
                <h5 style={{ display: "" }}>
                  <div className="team-members-single-image-link">
                    <a href={val.Linkedin}>
                      <span>
                        <i
                          style={{ color: "white", marginLeft: "70px" }}
                          class="fa-brands fa-linkedin"
                        ></i>
                      </span>
                    </a>
                  </div>
                </h5>

                <a href="" class="button"></a>
              </div>
            </div>
            <div className="team-members-single-name whitepara">{val.name}</div>
            <div className="team-members-single-designation blackpara">
              {val.position}
            </div>
          </div>
        ))}
      </div>
    </div>
    </Element>
  );
}
