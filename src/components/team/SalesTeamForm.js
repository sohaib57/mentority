import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { notification } from "antd";
import { useTranslation } from "react-i18next";
import { isMobile } from 'react-device-detect';

import countryList from "react-select-country-list";
import SubmitButton from "../button/SubmitButton";
import FrenchPDF from "../../assets/pdfs/Politique_de_confidentialité_Mentority.pdf";
import EngPDF from "../../assets/pdfs/Privacy_Statement_Mentority.pdf";
import parse from 'html-react-parser';

export default function SalesTeamForm() {
  const { t } = useTranslation();
  const adjustingSpace = localStorage.getItem("i18nextLng")

  const [formDataState, setFormDataState] = useState({
    content: "",
    rate: "1",
    firstname: "",
    lastname: "",
    name: "",
    experties: "",
    email: "",
    discover: "",
    country: "",
    content: "",
    study: "",
  });
  const [isStudent, setIsStudent] = useState("student");
  const countryOptions = useMemo(() => countryList().getData(), []);
  const [errors, setErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    studyError: "",
    expertiesError: "",
    nameError: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormDataState({ ...formDataState, [name]: value });
  };

  const handleFirstNameBlur = (event) => {
    const { value } = event.target;
    if (!value) {
      setErrors({ ...errors, firstNameError: `${t("firstname-required-lg")}` });
    } else {
      setErrors({ ...errors, firstNameError: "" });
    }
  };
  const handleNameBlur = (event) => {
    const { value } = event.target;
    if (!value) {
      setErrors({ ...errors, nameError: `${t("name-required-lg")}` });
    } else {
      setErrors({ ...errors, nameError: "" });
    }
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
    } else if (!/\S+@\S+\.\S+/.test(formDataState.email)) {
      setErrors({ ...errors, emailError: `${t("email-invalid-lg")}` });
    } else {
      setErrors({ ...errors, emailError: "" });
    }
  };
  const handleStudyBlur = (event) => {
    const { value } = event.target;
    if (!value) {
      setErrors({ ...errors, studyError: `${t("field-required-lg")}` });
    } else {
      setErrors({ ...errors, studyError: "" });
    }
  };
  const handleExpertiesBlur = (event) => {
    const { value } = event.target;
    if (!value) {
      setErrors({ ...errors, expertiesError: `${t("field-required-lg")}` });
    } else {
      setErrors({ ...errors, expertiesError: "" });
    }
  };

  const validateForm = () => {
    let errors = {};

    if (isStudent == "mentor") {
      if (!formDataState.name) {
        errors.nameError = `${t("name-required-lg")}`;
      }
    }
    if (!formDataState.firstname && isStudent == "student") {
      errors.firstNameError = `${t("firstname-required-lg")}`;
    }

    if (!formDataState.lastname && isStudent == "student") {
      errors.lastNameError = `${t("lastname-required-lg")}`;
    }

    if (!formDataState.email) {
      errors.emailError = `${t("email-required-lg")}`;
    } else if (!/\S+@\S+\.\S+/.test(formDataState.email)) {
      errors.emailError = `${t("email-invalid-lg")}`;
    }

    if (!formDataState.experties) {
      errors.expertiesError = `${t("field-required-lg")}`;
    }
    if (!formDataState.study  && isStudent == "student") {
      errors.studyError = `${t("field-required-lg")}`;
    }

    setErrors(errors);

    // Return true if there are no errors, false otherwise
    return Object.keys(errors).length === 0;
  };

  const defaultStateFormData = () => {
    setFormDataState({
      content: "",
      rate: "1",
      firstname: "",
      lastname: "",
      name: "",
      experties: "",
      email: "",
      discover: "",
      country: "",
      content: "",
      study: "",
    });
  };

  const handleSubmit = async () => {
    validateForm();
    if (validateForm()) {
      const submit_hubspot_form = async () => {
        const portalId = "26708650"; // example portal ID (not real)
        const formGuid =
          isStudent === "student"
            ? "b292066c-a3af-44c2-bbac-b62192572644"
            : "3a77c36e-fc31-484e-bb16-d95f56cd5aa0"; // example form GUID (not real)
        const config = {
          // important!
          headers: {
            "Content-Type": "application/json",
          },
        };

        const menteeFormData = [
          {
            name: "firstname",
            value: formDataState?.firstname,
          },
          {
            name: "lastname",
            value: formDataState?.lastname,
          },
          {
            name: "email",
            value: formDataState?.email,
          },
          {
            name: "country",
            value: formDataState?.country,
          },
          {
            name: "how_did_you_discover_mentority_",
            value: formDataState?.discover,
          },
          {
            name: "field",
            value: formDataState?.study,
          },
          {
            name: "experties",
            value: formDataState?.experties,
          },
        ];

        const mentorFormData = [
          {
            name: "full_name",
            value: formDataState?.name,
          },
          {
            name: "email",
            value: formDataState?.email,
          },
          {
            name: "country",
            value: formDataState?.country,
          },
          {
            name: "how_did_you_discover_mentority__mentor__",
            value: formDataState?.discover,
          },
          {
            name: "any_online_content__mentor_",
            value: formDataState?.content,
          },
          {
            name: "domain_experties__mentor_",
            value: formDataState?.experties,
          },
          {
            name: "interested_scale__mentor_",
            value: formDataState?.rate,
          },
        ];

        try {
          const response = await axios.post(
            `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
            {
              portalId,
              formGuid,
              fields: isStudent === "student" ? menteeFormData : mentorFormData,
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
    <div className="sales">
      <div className="sales-heading">
        <span className="mainHeading" id="waitlist">
          {t("sales-lg")}
        </span>
        <span className="subHeading">{t("sales-des-lg")}</span>
      </div>
      <div className="sales-content">
        <div className="sales-content-left">
          <span className="sales-content-title">{t("signup-lg")}</span>
          <div className="sales-content-left-btn">
            <div className="sales-mentee-button" style={{background: isStudent !== "student" ? "#20232D" : "linear-gradient(0deg, rgba(0, 255, 255, 0.2), rgba(0, 255, 255, 0.2)), linear-gradient(88.26deg, #00FFFF -84.88%, #B700FF 114.13%)"}} onClick={() => setIsStudent("student")}>
              <span>{t("signup-mentee-lg")}</span>
            </div>
            &nbsp;&nbsp;
            <div className="sales-mentee-button" style={{background: isStudent !== "mentor" ? "#20232D" : "linear-gradient(0deg, rgba(0, 255, 255, 0.2), rgba(0, 255, 255, 0.2)), linear-gradient(88.26deg, #00FFFF -84.88%, #B700FF 114.13%)"}} onClick={() => setIsStudent("mentor")}>
              <span>{t("signup-mentor-lg")}</span>
            </div>
          </div>
          {isStudent == "student" && (
            <div className="sales-borderbox">
              <div className="sales-content-left-box">
                <div className="sales-content-left-box-container">
                  <label className="sales-content-left-box-container-label">
                    {t("signup-first-lg")}
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formDataState?.firstname}
                    onChange={handleInputChange}
                    className="sales-content-left-box-container-input"
                    onBlur={handleFirstNameBlur}
                  />
                  {errors?.firstNameError && (
                    <span className="form-error-field">
                      {errors.firstNameError}
                    </span>
                  )}
                </div>
                <div className="sales-content-left-box-container">
                  <label className="sales-content-left-box-container-label">
                    {t("signup-last-lg")}
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formDataState?.lastname}
                    onChange={handleInputChange}
                    className="sales-content-left-box-container-input"
                    onBlur={handleLastNameBlur}
                  />
                  {errors?.lastNameError && (
                    <span className="form-error-field">
                      {errors.lastNameError}
                    </span>
                  )}
                </div>
                <div className="sales-content-left-box-container">
                  <label className="sales-content-left-box-container-label">
                    {t("signup-email-lg")}
                  </label>
                  <input
                    style={{ textTransform: "lowercase" }}
                    type="email"
                    id="email"
                    name="email"
                    value={formDataState?.email}
                    onChange={handleInputChange}
                    className="sales-content-left-box-container-input"
                    onBlur={handleEmailBlur}
                  />
                  {errors?.emailError && (
                    <span className="form-error-field">
                      {errors?.emailError}
                    </span>
                  )}
                </div>
                <div className="sales-content-left-box-container">
                  <label className="sales-content-left-box-container-label">
                    {t("signup-country-lg")}
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formDataState?.country}
                    onChange={handleInputChange}
                    className="sales-content-left-box-container-input"
                  >
                    {countryOptions.map((item) => (
                      <option value={item.label}>{item.label}</option>
                    ))}
                  </select>
                </div>

                <div className="sales-content-left-box-container discover">
                  <label className="sales-content-left-box-container-label">
                    {t("signup-discover-lg")}
                  </label>
                  <select
                    id="discover"
                    name="discover"
                    value={formDataState?.discover}
                    onChange={handleInputChange}
                    className="sales-content-left-box-container-input"
                  >
                    <option value={t("signup-option-online-lg")}>
                      {t("signup-option-online-lg")}
                    </option>
                    <option value={t("signup-option-social-lg")}>
                      {t("signup-option-social-lg")}
                    </option>
                    <option value={t("signup-option-ref-lg")}>
                      {t("signup-option-ref-lg")}
                    </option>
                    <option value={t("signup-option-advertising-lg")}>
                      {t("signup-option-advertising-lg")}
                    </option>
                    <option value={t("signup-option-news-lg")}>
                      {t("signup-option-news-lg")}
                    </option>
                    <option value={t("signup-option-networking-lg")}>
                      {t("signup-option-networking-lg")}
                    </option>
                  </select>
                </div>
                <div className="container-text">
                  <div style={{height: 'auto'}} className={`sales-content-left-box-containertext ${localStorage.getItem('isFrench') === "true" ? '' : 'sales-margin'}`}>
                    <label className={`sales-content-left-box-container-label ${adjustingSpace == "en"?"adjusting-label":adjustingSpace=="fr" && null}`}>
                      {t("signup-field-lg")}
                    </label>
                    <textarea
                      id="study"
                      name="study"
                      value={formDataState?.study}
                      onChange={handleInputChange}
                      className="sales-content-left-box-container-input sales-content-left-box-container-text"
                      onBlur={handleStudyBlur}
                    />
                    {errors?.studyError && (
                      <span className="form-error-field">
                        {errors?.studyError}
                      </span>
                    )}
                  </div>
                  <div className={`sales-content-left-box-containertext`} style={{height: "auto"}}>
                    <label className="sales-content-left-box-container-label expert-label">
                      {t("signup-expert-lg")}
                    </label>
                    <textarea
                      id="experties"
                      name="experties"
                      value={formDataState?.experties}
                      onChange={handleInputChange}
                      className="sales-content-left-box-container-input sales-content-left-box-container-text expert-input"
                      onBlur={handleExpertiesBlur}
                    />
                    {errors?.expertiesError && (
                      <span className="form-error-field">
                        {errors?.expertiesError}
                      </span>
                    )}
                  </div>
                </div>

                <SubmitButton
                  text={t("signup-submit-lg")}
                  onClick={handleSubmit}
                />
              </div>
            </div>
          )}
          {isStudent == "mentor" && (
            <div className="sales-borderbox">
              <div className="sales-content-left-box">
                <div className="sales-content-left-box-container">
                  <label className="sales-content-left-box-container-label">
                    {t("signup-name-lg")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formDataState?.name}
                    onChange={handleInputChange}
                    className="sales-content-left-box-container-input"
                    onBlur={handleNameBlur}
                  />
                  {errors?.nameError && (
                    <span className="form-error-field">{errors.nameError}</span>
                  )}
                </div>
                <div className="sales-content-left-box-container">
                  <label className="sales-content-left-box-container-label">
                    {t("signup-email-lg")}
                  </label>
                  <input
                    style={{ textTransform: "lowercase" }}
                    type="text"
                    id="email"
                    name="email"
                    value={formDataState?.email}
                    onChange={handleInputChange}
                    className="sales-content-left-box-container-input"
                    onBlur={handleEmailBlur}
                  />
                  {errors?.emailError && (
                    <span className="form-error-field">
                      {errors?.emailError}
                    </span>
                  )}
                </div>
                <div className="sales-content-left-box-container sales-margin-top-updated">
                  <label className="sales-content-left-box-container-label">
                    {t("signup-country-lg")}
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formDataState?.country}
                    onChange={handleInputChange}
                    className="sales-content-left-box-container-input"
                  >
                    {countryOptions.map((item) => (
                      <option value={item.label}>{item.label}</option>
                    ))}
                  </select>
                </div>
                <div className="sales-content-left-box-container sales-margin-top-updated">
                  <label className="sales-content-left-box-container-label">
                    {t("signup-discover-lg")}
                  </label>
                  <select
                    id="discover"
                    name="discover"
                    value={formDataState?.discover}
                    onChange={handleInputChange}
                    className="sales-content-left-box-container-input"
                  >
                    <option value={t("signup-option-online-lg")}>
                      {t("signup-option-online-lg")}
                    </option>
                    <option value={t("signup-option-social-lg")}>
                      {t("signup-option-social-lg")}
                    </option>
                    <option value={t("signup-option-ref-lg")}>
                      {t("signup-option-ref-lg")}
                    </option>
                    <option value={t("signup-option-advertising-lg")}>
                      {t("signup-option-advertising-lg")}
                    </option>
                    <option value={t("signup-option-news-lg")}>
                      {t("signup-option-news-lg")}
                    </option>
                    <option value={t("signup-option-networking-lg")}>
                      {t("signup-option-networking-lg")}
                    </option>
                  </select>
                </div>
                <div className="sales-content-left-box-container sales-margin-top">
                  <label className="sales-content-left-box-container-label">
                    {t("signup-platform-lg")}
                  </label>
                  <select
                    id="rate"
                    name="rate"
                    value={formDataState?.rate}
                    onChange={handleInputChange}
                    className="sales-content-left-box-container-input"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div
                  className="sales-content-left-box-container sales-margin-top"
                  id="discover"
                  style={{minHeight: formDataState?.contentCreation == 'yes' ? 140 : 80}}
                >
                  <label className="sales-content-left-box-container-label">
                    {t("signup-content-lg")}?
                  </label>
                  <select
                    id="contentCreation"
                    name="contentCreation"
                    value={formDataState?.contentCreation}
                    onChange={handleInputChange}
                    className="sales-content-left-box-container-input"
                  >
                    <option value="no">{t("signup-no-lg")}</option>
                    <option value="yes">{t("signup-yes-lg")}</option>
                  </select>

                  {formDataState?.contentCreation == "yes" && (
                    <div className="sales-content-left-box-containertext">
                      <label className="sales-content-left-box-container-label">
                        {t("signup-plat-lg")}
                      </label>
                      <textarea
                        id="content"
                        name="content"
                        value={formDataState?.content}
                        onChange={handleInputChange}
                        className="sales-content-left-box-container-input sales-content-left-box-container-text"
                      />
                    </div>
                  )}
                </div>

                <div className="sales-content-left-box-containertext">
                  <label className="sales-content-left-box-container-label">
                    {t("signup-domain-lg")}
                  </label>
                  <textarea
                    id="experties"
                    name="experties"
                    value={formDataState?.experties}
                    onChange={handleInputChange}
                    className="sales-content-left-box-container-input sales-content-left-box-container-text"
                    onBlur={handleExpertiesBlur}
                  />
                  {errors?.expertiesError && (
                    <span className="form-error-field">
                      {errors?.expertiesError}
                    </span>
                  )}
                </div>

                <SubmitButton
                  text={t("signup-submit-lg")}
                  onClick={handleSubmit}
                />
              </div>
            </div>
          )}
          <div className="sales-content-left-tnc sales-subHeading">
            {t("sales-submitting-lg")} &nbsp;{" "}
              <span className="anchor"style={{cursor: 'pointer'}}
                onClick={()=>{
                  if(t("sales-statement-lg") == "Privacy Statement.") {
                    handleDownload("eng")
                  } else {
                    handleDownload("fr")
                  }}}
              >
                {" "}
                {t("sales-statement-lg")}{" "}
              </span>
          </div>
        </div>
        <div className="sales-content-right">
          <div className="sales-content-right-para">
            {t("sales-content-lg")}
          </div>
          <div className="sales-content-right-para parawhite">
            {t("sales-team-lg")}
          </div>
          <div className="sales-content-right-divider"></div>
        </div>
      </div>
    </div>
  );
}
