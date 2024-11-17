import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./i18n";
import "./assets/css/styles.scss";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Pdf from "./pages/Pdf";
import "./App.css";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  //for dev
  gtmId: "G-0TYH5KP0XZ",

  //for prod
  // gtmId: 'G-VQ7TRLW682',
};

TagManager.initialize(tagManagerArgs);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pdf />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
