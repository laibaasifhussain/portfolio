export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Laiba Asif Hussain</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color"> Exploring the MERN STACK </span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="https://cdn.create.vista.com/api/media/medium/315117808/stock-photo-cropped-view-girl-studying-online-notepad-laptop-cafe-cup-coffee?token=" alt="" />
      </div>
    </section>
  );
}
