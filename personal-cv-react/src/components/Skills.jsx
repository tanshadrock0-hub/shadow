import { useState } from "react";

const skills = [
  { category: "Cybersecurity", items: "Cybersecurity Fundamentals, Ethical Hacking & Penetration Testing, Web Security (XSS, SQL Injection), Incident Response, Firewall & Intrusion Detection" },
  { category: "Networking", items: "Networking (TCP/IP, DNS, HTTP), Cryptography Basics" },
  { category: "Systems", items: "Linux & Windows Administration, Secure Coding" },
  { category: "Security Tools", items: "Wireshark, Nmap" },
  { category: "Frontend", items: "HTML, CSS, JavaScript" },
  { category: "Backend", items: "PHP, Python (Basic), SQL" },
];

export default function Skills() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button id="toggleSkills" onClick={() => setVisible(!visible)}>
        {visible ? "Hide Skills" : "Show Skills"}
      </button>

      {visible && (
        <section className="card" id="skillsSection">
          <h2>Skills</h2>
          <table id="skillsTable">
            <thead>
              <tr>
                <th>Category</th>
                <th>Skills</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((row) => (
                <tr key={row.category}>
                  <td>{row.category}</td>
                  <td>{row.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}