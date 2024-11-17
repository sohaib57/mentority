import React from "react";
import { useTranslation } from "react-i18next";

import PartnerList from "../../assets/images/contact/Header.svg";
import PartnerList2 from "../../assets/images/contact/logo QNT.png";





const PartnersSection = () => {
  const { t } = useTranslation();

    return(
        <div className="partners-section">
            <span className="partners-section-title">
                {t("partners-section-title-lg")}
            </span>
            <div className="partners-section-logos">
                <img src={PartnerList} alt='' style={{minWidth: "95px", maxHeight: "53px"}} />
                <img src={PartnerList2} alt='' style={{maxWidth: "135px", maxHeight: "33px"}} />
                
            </div>
        </div>
    );

}

export default PartnersSection;