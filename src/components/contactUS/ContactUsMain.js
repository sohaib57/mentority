import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser';

import StartLab from "../../assets/images/contact/Header.svg";
import PartnetList from "../../assets/images/contact/logo QNT.png";
import SubmitButton from "../button/SubmitButton";
import FrenchPDF from "../../assets/pdfs/Politique_de_confidentialité_Mentority.pdf";
import EngPDF from "../../assets/pdfs/Privacy_Statement_Mentority.pdf";
import axios from "axios";
import { notification } from "antd";

export default function ContactUsMain() {
  const location = useLocation();
  const { t } = useTranslation();

  const [valueText, setValueText] = useState("");
  const [valueFName, setValueFName] = useState("");
  const [valueLName, setValueLName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valuePhone, setValuePhone] = useState("");
  const [company, setCompany] = useState("");
  const [valueTeaxtAre, setValueTeaxtAre] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    phoneError: "",
    companyError: "",
    // nameError: "",
  });
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleTextareaChange = (event) => {
    setValueText(event.target.value);
  };
  const handleInputChange = (event) => {
    setCompany(event.target.value);
  };
  const handleFNameChange = (event) => {
    setValueFName(event.target.value);
  };
  const handleLNameChange = (event) => {
    setValueLName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setValueEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setValuePhone(event.target.value);
  };

  const handleFirstNameBlur = (event) => {
    const { value } = event.target;
    if (!value) {
      setErrors({ ...errors, firstNameError: `${t("firstname-required-lg")}` });
    } else {
      setErrors({ ...errors, firstNameError: "" });
    }
  };
  const handleCompanyBlur = (event) => {
    const { value } = event.target;
      setErrors({ ...errors, companyError: "" });
  };
  const handleLastNameBlur = (event) => {
    const { value } = event.target;
    if (!value) {
      setErrors({ ...errors, lastNameError: `${t("lastname-required-lg")}` });
    } else {
      errors.lastNameError = "";
    }
  };
  const handleEmailBlur = (event) => {
    const { value } = event.target;
    if (!value) {
      setErrors({ ...errors, emailError: `${t("email-required-lg")}` });
    } else if (!/\S+@\S+\.\S+/.test(valueEmail)) {
      setErrors({ ...errors, emailError: `${t("email-invalid-lg")}` });
    } else {
      setErrors({ ...errors, emailError: "" });
    }
  };
  const handlePhoneBlur = (event) => {
    const { value } = event.target;
      setErrors({ ...errors, phoneError: "" });
  };

  const validateForm = () => {
    let errors = {};

    if (!valueFName) {
      errors.firstNameError = `${t("firstname-required-lg")}`;
    }

    if (!valueLName) {
      errors.lastNameError = `${t("lastname-required-lg")}`;
    }

    if (!valueEmail) {
      errors.emailError = `${t("email-required-lg")}`;
    } else if (!/\S+@\S+\.\S+/.test(valueEmail)) {
      errors.emailError = `${t("email-invalid-lg")}`;
    }

    // if (!valuePhone) {
    //   errors.phoneError = "Experties are required.";
    // }
    // if (!company) {
    //   errors.companyError = "Study is required.";
    // }

    setErrors(errors);

    // Return true if there are no errors, false otherwise
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async () => {
    const url = location?.state?.name;
    validateForm();
    if (validateForm()) {
      const submit_hubspot_form = async () => {
        const portalId = "26708650"; // example portal ID (not real)
        const formGuid =
        url === "partner"
            ? "dc60549d-786d-4720-82b3-271a279b0f5b" : url === "investor" ?
             "ef736873-22a0-4ccf-bf60-651d97e50272" :
             "3a6515dd-6ecb-46f4-ad00-9f2ede25bfb7" // example form GUID (not real)
        const config = {
          // important!
          headers: {
            "Content-Type": "application/json",
          },
        };

        const partnerFormData = [
          {
            name: "firstname",
            value: valueFName,
          },
          {
            name: "lastname",
            value: valueLName,
          },
          {
            name: "email",
            value: valueEmail,
          },
          {
            name: "phone",
            value: valuePhone,
          },
          {
            name: "language",
            value: selectedValue ?? 'English',
          },
          {
            name: "about",
            value: valueText,
          },
          {
            name: "notifications",
            value: isChecked,
          },
          {
            name: "company",
            value: company,
          },
        ];

        const investorFormData = [
          {
            name: "firstname",
            value: valueFName,
          },
          {
            name: "lastname",
            value: valueLName,
          },
          {
            name: "email",
            value: valueEmail,
          },
          {
            name: "phone",
            value: valuePhone,
          },
          {
            name: "company",
            value: company,
          },
          {
            name: "language__investor_",
            value: selectedValue ?? 'English',
          },
          {
            name: "about__investor_",
            value: valueText,
          },
          {
            name: "notifications__investor_",
            value: isChecked,
          },
        ];

        const waitlistFormData = [
          {
            name: "firstname",
            value: valueFName,
          },
          {
            name: "lastname",
            value: valueLName,
          },
          {
            name: "email",
            value: valueEmail,
          },
          {
            name: "phone",
            value: valuePhone,
          },
          {
            name: "company",
            value: company,
          },
          {
            name: "language__waitlist_",
            value: selectedValue ?? 'English',
          },
          {
            name: "about__waitlist_",
            value: valueText,
          },
          {
            name: "notifications__waitlist_",
            value: isChecked,
          },
        ];

        try {
          const response = await axios.post(
            `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
            {
              portalId,
              formGuid,
              fields: url === "partner" ? partnerFormData : url === "investor" ? investorFormData : waitlistFormData,
            },
            config
          );
          if (response.status === 200) {
            defaultStateFormData();
            notification.success({
              message: `${t("success-lg")}`,
              description: parse(response.data.inlineMessage),
            });
          } else {
            notification.error({
              message: `${t("error-lg")}`,
              description: `${t("tryagain-lg")}`,
            });
          }
          return response;
        } catch (error) {
          notification.error({
            message: `${t("error-lg")}`,
            description: error,
          });
        }
      };

      const hubspot_response = await submit_hubspot_form();
      console.log(hubspot_response); // make sure it succeeded!
    }
  };

  const defaultStateFormData = () => {
    setValueEmail("");
    setValueFName("");
    setValueLName("");
    setValuePhone("");
    setValueText("");
    setCompany("");
    setSelectedValue("")
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
    <div className="contact">
      <div className="contact-right">
        <div className="contact-right-wrapper">
          <div className="contact-right-wrapper-heading">
            {location?.state?.name == "partner"
              ? t("investors-partners-lg")
              : location?.state?.name == "investor"
              ? t("investors-btn-lg")
              : `${t("header-btn-lg")}`}
          </div>
          <div className="contact-right-wrapper-paragraph">
            {location?.state?.name !== "partner"
              ? t("contactus-des-lg")
              : t("contactus-partner-lg")}
          </div>
          <div className="contact-right-wrapper-partner">
            {t("contactus-trusted-lg")}
          </div>
          <div className="contact-right-wrapper-partnerList">
            <img src={StartLab} alt='' style={{minWidth: "95px", maxHeight: "53px"}} />
            <img src={PartnetList} alt='' style={{maxWidth: "135px", maxHeight: "33px"}} />
          </div>
        </div>
      </div>
      <div className="contact-left">
        <div className="contact-left-heading">
          {t("contactus-title-lg")}
          <div className="contact-left-paragrapg">
            {t("contactus-form-des-lg")}
          </div>
        </div>
        <div className="contact-left-wrapper">
          <div className="contact-left-input">
            <input
              type="text"
              id="my-input"
              value={valueFName}
              onChange={handleFNameChange}
              placeholder={t("contactus-first-lg")}
              className="contact-left-wrapper-input"
              onBlur={handleFirstNameBlur}
            />
            {errors?.firstNameError && <span className="form-error-field">{errors.firstNameError}</span>}
          </div>

          <div className="contact-left-input">
            <input
              type="text"
              id="my-input"
              value={valueLName}
              onChange={handleLNameChange}
              placeholder={t("contactus-last-lg")}
              className="contact-left-wrapper-input"
              onBlur={handleLastNameBlur}
            />
            {errors?.lastNameError && <span className="form-error-field">{errors.lastNameError}</span>}
          </div>
          <div className="contact-left-input">
            <input
              type="email"
              id="my-input"
              value={valueEmail}
              onChange={handleEmailChange}
              placeholder={t("contactus-email-lg")}
              className="contact-left-wrapper-input"
              onBlur={handleEmailBlur}
            />
            {errors?.emailError && <span className="form-error-field">{errors.emailError}</span>}
          </div>

          <div className="contact-left-input">
            <input
              type="text"
              id="my-input"
              value={valuePhone}
              onChange={handlePhoneChange}
              placeholder={t("contactus-phone-lg")}
              className="contact-left-wrapper-input"
              onBlur={handlePhoneBlur}
            />
            {errors?.phoneError && <span className="form-error-field">{errors.phoneError}</span>}
          </div>
          <div className="contact-left-input">
            <input
              type="text"
              id="my-input"
              value={company}
              onChange={handleInputChange}
              placeholder={t("contactus-company-lg")}
              className="contact-left-wrapper-input"
              onBlur={handleCompanyBlur}
            />
            {errors?.companyError && <span className="form-error-field">{errors.companyError}</span>}
          </div>
          <div className="contact-left-input">
            <select
              value={selectedValue}
              onChange={handleSelectChange}
              className="contact-left-wrapper-input contact-select"
            >
              <option value={t("contactus-default-lg")}>{t("contactus-default-lg")}</option>
              <option value={t("contactus-english-lg")}>{t("contactus-english-lg")}</option>
              <option value={t("contactus-french-lg")}>{t("contactus-french-lg")}</option>
              <option value={t("contactus-italian-lg")}>{t("contactus-italian-lg")}</option>
            </select>
          </div>
          <div className="contact-left-input" style={{minHeight: 70}}>
            <textarea
              id="my-textarea"
              value={valueText}
              onChange={handleTextareaChange}
              rows="4"
              cols="50"
              className="contact-left-wrapper-input contact-textarea"
              placeholder={t("contactus-textarea-lg")}
            />
          </div>
          <div className="contact-left-wrapper-check">
            <input
              type="checkbox"
              id="my-checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="contact-left-wrapper-check-checkbox"
            />
            <div className="contact-left-paragrapg contact-left-wrapper-check-para">
              {t("contactus-agree-lg")}
            </div>
          </div>
          <div className="contact-left-wrapper-subpara">
            {t("sales-submitting-lg")} &nbsp;{" "}
            <a className="anchor" href="#" onClick={()=>{
                if(t("sales-statement-lg") == "Privacy Statement.") {
                  handleDownload("eng")
                } else {
                  handleDownload("fr")
                }}}>
                {" "}
                {t("sales-statement-lg")}{" "}
              </a>
          </div>
        </div>
        <div className="contact-submit-btn">
          <div style={{display: 'flex', justifyContent: 'start'}}>
            <SubmitButton text={t("contactus-submit-lg")} onClick={handleSubmit}/>
          </div>
        </div>
      </div>
    </div>
  );
}
