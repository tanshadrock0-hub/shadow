import Card from "./Card";

 function About() {
  return (
    <>
      <section className="card">
        <img src="images/Profile.jpg" alt="Profile photo" width="180" />
        <h2>Shadrock Tan</h2>
        <p>IT Student | Web Systems and Technologies</p>
        <p>
          Email: <a href="mailto:tan.shadrock0@gmail.com">tan.shadrock0@gmail.com</a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/tanshadrock0-hub" target="_blank" rel="noreferrer">
            github.com
          </a>
        </p>
      </section>

      <Card title="About Me">
        <p>I'm learning as I go, pretending I know what I'm doing, and somehow getting things done.</p>
      </Card>
    </>
  );
}

export default About;