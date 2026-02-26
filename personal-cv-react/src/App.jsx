import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <About />
          <Skills />
          <Education />
          <Contact />
        </div>
      </main>
      <footer>
        <p>&copy; 2026 Shadrock Tan. All rights reserved.</p>
      </footer>
    </>
  );
}