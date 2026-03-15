import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Footer from "./components/Footer";
import Stats from "./pages/Stats";

const App = () => {
  return (
    <Router>
      <Navbar />

      {/* SINGLE PAGE SECTIONS */}
      <main>
        <section id="home" style={{ scrollMarginTop: "100px" }}>
          <Home />
        </section>

        <section id="stats" style={{ scrollMarginTop: "100px" }}>
          <Stats />
        </section>

        <section id="skills" style={{ scrollMarginTop: "100px" }}>
          <Skills />
        </section>

        <section id="work" style={{ scrollMarginTop: "100px" }}>
          <Work />
        </section>

        <section id="about" style={{ scrollMarginTop: "100px" }}>
          <About />
        </section>

        <section id="connect" style={{ scrollMarginTop: "100px" }}>
          <Connect />
        </section>
      </main>

      <Footer />
      <Analytics />
      <SpeedInsights />
    </Router>
  );
};

export default App;
