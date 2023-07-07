import image from "../../assets/sajib.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/u/1/uc?id=1NzZLFMsSKmZxNmttjAUQe-_4h151hHaI&export=download",
      "_parent"
    );
  };

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="bg-base-200 pt-12 text-center lg:text-left">
      <div className="lg:flex justify-between items-center">
        <div data-aos="fade-right">
          <h4 className="text-2xl font-semibold">Hi, I am</h4>
          <h1 className="text-4xl lg:text-6xl font-bold py-3">Md. Saifullah Sajib</h1>
          <p className="lg:text-3xl font-semibold">
            <TypeAnimation
              sequence={[
                "A passionate Web Developer",
                1500,
                "A passionate Frontend Developer",
                1500,
                "A passionate MERN Stack Developer",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </p>
          <button className="btn btn-primary my-6 hover:bg-purple-600">
            <a href="#contact">Hire Me</a>
          </button>
          <button
            onClick={handleDownload}
            className="btn btn-primary my-6 mx-3 hover:bg-purple-600"
          >
            Download Resume
          </button>
        </div>
        <div data-aos="fade-left" className="flex justify-center">
          <img
            src={image}
            //   className="w-1/2 rounded-lg shadow-2xl"
            className="w-[300px] rounded-full shadow-2xl border-8 border-indigo-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
