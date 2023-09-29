import about from "../../assets/about.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div id="about">
      <div data-aos="fade-up">
        <h1 className="text-4xl font-bold text-center mt-16">
          <span className="text-primary">About</span> Me
        </h1>
        <hr className="border-2 border-indigo-500 w-[150px] mx-auto mt-2" />
      </div>
      <div className="mt-8 lg:flex items-center">
        <div
          className="lg:w-[30%] flex justify-center mb-4 lg:mb-0"
          data-aos="flip-left"
        >
          <img src={about} alt="" className="w-[300px] h-[300px] rounded-xl" />
        </div>
        <div className="lg:w-[70%]" data-aos="zoom-in-up">
          <p className="text-lg text-justify">
            I am MD. Saifullah Sajib, a dedicated and confident MERN (MongoDB,
            ExpressJS, ReactJS, NodeJS) stack web developer. With a strong work
            ethic and enthusiasm, I aim to utilize my knowledge and personal
            skills in web development to contribute effectively to a
            professional organization. My true dedication, hard work, and
            commitment drive me to provide exceptional results. Alongside my
            professional attributes, I am down-to-earth, honest, fun-loving, and
            caring. I strive to create a positive work environment while
            delivering excellence in every project I undertake.
          </p>
          {/* TODO: icon of the social site */}
          <div className="flex gap-3 pt-6">
            <a
              href="https://www.linkedin.com/in/md-saifullah-sajib/"
              target="blank"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/sajib.saifullah.md" target="blank">
              <FaFacebookSquare className="w-6 h-6" />
            </a>
            <a href="https://github.com/sajibsaifullah" target="blank">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
