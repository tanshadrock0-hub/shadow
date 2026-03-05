import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

const skills = [
  { category: "Cybersecurity", items: "Cybersecurity Fundamentals, Ethical Hacking & Penetration Testing, Web Security (XSS, SQL Injection), Incident Response, Firewall & Intrusion Detection" },
  { category: "Networking", items: "Networking (TCP/IP, DNS, HTTP), Cryptography Basics" },
  { category: "Systems", items: "Linux & Windows Administration, Secure Coding" },
  { category: "Security Tools", items: "Wireshark, Nmap" },
  { category: "Frontend", items: "HTML, CSS, JavaScript" },
  { category: "Backend", items: "PHP, Python (Basic), SQL" },
];

const education = [
  { year: "2028", program: "BS Information Technology", school: "College of Information Technology and Computing, USTP – CDO Campus" },
  { year: "2022", program: "Senior High School", school: "Liceo de Cagayan University" },
  { year: "2020", program: "Junior High School", school: "Misamis Oriental General Comprehensive High School" },
  { year: "2016", program: "Elementary", school: "City Central School" },
  { year: "2010", program: "Kindergarten", school: "City Central School" },
];

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <About />
          <Skills skills={skills} />
          <Education education={education} />
          <Contact />
        </div>
      </main>
      <footer>
        <p>&copy; 2026 Shadrock Tan. All rights reserved.</p>
      </footer>
    </>
  );
}