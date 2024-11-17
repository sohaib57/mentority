import React from "react";

export default function SubmitButton({text , onClick}) {
  return (
    <div className="submit-btn">
      <button type="submit" className="contact-left-wrapper-btn" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
