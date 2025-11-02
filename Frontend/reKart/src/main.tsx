import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Vendor CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "swiper/css";               // ✅ fixed path
import "swiper/css/navigation";    // optional
import "swiper/css/pagination";    // optional

// Your main CSS
import "./assets/css/main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
