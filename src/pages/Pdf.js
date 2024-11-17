import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFViewer = () => {
  const handleDownloadButton = () => {
    const downloadButton = document.querySelector(
      ".rpv-default-layout__toolbar"
    );
    if (downloadButton) {
      downloadButton.style.display = "none";
    }
  };

  // Initialize the default layout plugin
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    toolbarPlugin: {
      disableDownload: true,
    },
    onDocumentLoad: handleDownloadButton,
  });

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer
        fileUrl={"https://pdf-lib.js.org/assets/with_update_sections.pdf"}
        plugins={[defaultLayoutPluginInstance]} // Add the plugin instance to the Viewer component
      />
    </Worker>
  );
};

export default PDFViewer;
