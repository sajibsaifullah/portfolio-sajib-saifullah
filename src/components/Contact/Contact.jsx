import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  //
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rhwdbtr",
        "template_a2nu4eu",
        form.current,
        "7OeNHpeLstmqXkAVe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div>
        <h1 className="text-4xl font-bold text-center mt-12">
          Get <span className="text-primary">In Touch</span>
        </h1>
        <hr className="border-2 border-indigo-500 w-[150px] mx-auto mt-2" />
      </div>
      <div className="lg:grid grid-cols-3 mt-10">
        <div className="space-y-4 mt-4" data-aos="fade-right">
          <div className="flex items-center">
            <FaMailBulk className="w-8 h-8" />
            <div className="ml-3">
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-lg">saifullah.sajib202@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaLocationArrow className="w-8 h-8" />
            <div className="ml-3">
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-lg">Jamalpur-2000, Bangladesh</p>
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <a
              href="https://www.linkedin.com/in/saifullah-sajib-325a17280/"
              target="blank"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/Kb202" target="blank">
              <FaFacebookSquare className="w-6 h-6" />
            </a>
            <a href="https://github.com/sajibsaifullah" target="blank">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
        {/* form starts */}
        <form className="col-span-2" ref={form} onSubmit={sendEmail}>
          <div className="flex gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="user_name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg">Email *</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="user_email"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg">Subject</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="subject"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message *</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Message"
              name="message"
              required
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
