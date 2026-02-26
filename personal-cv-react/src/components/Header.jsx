import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header>
      <h1>Personal Online CV</h1>
      <button id="themeToggle" onClick={toggleTheme}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}