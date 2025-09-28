import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SpecialEvents from "./SpecialEvents/pages/SpecialEvents";
import TestimonialTop100 from "./SpecialEvents/pages/TestimonialTop100";
import TestimonialLaunchpad from "./SpecialEvents/pages/TestimonialLaunchpad";
import TestimonialTrivialIdeas from "./SpecialEvents/pages/TestimonialTrivialIdeas";
import TestimonialPermute from "./SpecialEvents/pages/TestimonialPermute";
import TestimonialIN50 from "./SpecialEvents/pages/TestimonialIN50";
import TestimonialMutate from "./SpecialEvents/pages/TestimonialMutate";
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
              <Route
                path="/special-events/launchpad-testimonial"
                element={<TestimonialLaunchpad />}
              />
              <Route
                path="/special-events/trivialideas-testimonial"
                element={<TestimonialTrivialIdeas />}
              />
              <Route
                path="/special-events/permute-testimonial"
                element={<TestimonialPermute />}
              />
              <Route
                path="/special-events/in50-testimonial"
                element={<TestimonialIN50 />}
              />
              <Route
                path="/special-events/mutate-testimonial"
                element={<TestimonialMutate />}
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
