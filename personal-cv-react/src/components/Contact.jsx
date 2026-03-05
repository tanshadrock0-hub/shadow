import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email) {
      alert("Invalid! Please fill in all fields.");
      return;
    }
    alert(`Thank you ${name}!`);

    setName("");
    setEmail("");
    set
  }

  return (
    <section className="card">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
         
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;