import "../../scss/about.scss";

const About = () => {
  
  return (
    <div className="about title">
      <div className="container">
        <div className="about__body">
          <h1 className="about__title">
            Built by{" "}
            <a href="https://github.com/hjdskhooba" target="_blank">
              me
            </a>
          </h1>
          <div className="description">
            <h2>Technologies stack:</h2>
            <div className="tech">React.js v18</div>
            <div className="tech">React Router, hook form, icons</div>
            <div className="tech">Eslint</div>
            <div className="tech">Vite</div>
            <div className="tech">Jest, Testing library/react</div>
            <div className="tech">Json server, Json server auth</div>
            <div className="tech">KY</div>
            <div className="tech">Material UI</div>
            <div className="tech">SASS</div>
            <div className="tech">Swiper.js</div>
            <div className="tech">Framer motion</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
