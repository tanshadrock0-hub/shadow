import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";

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