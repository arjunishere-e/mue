import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SpecialEvents from "./SpecialEvents/pages/SpecialEvents";
import TestimonialTop100 from "./SpecialEvents/pages/TestimonialTop100";
import Gallery from "./SpecialEvents/pages/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<SpecialEvents />} />
              <Route
                path="/special-events/top100-testimonial"
                element={<TestimonialTop100 />}
              />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
