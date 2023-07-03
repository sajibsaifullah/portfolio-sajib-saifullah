import img1 from "../../assets/project-images/flaming-fork.png";
import img2 from "../../assets/project-images/toy-house.png";
import img3 from "../../assets/project-images/sportique.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div id="projects" data-aos="fade-up">
      <div>
        <h1 className="text-4xl font-bold text-center mt-16">
          My <span className="text-primary">Projects</span>
        </h1>
        <hr className="border-2 border-indigo-500 w-[150px] mx-auto mt-2" />
      </div>
      {/* projects card */}
      <div className="grid lg:grid-cols-3 gap-4 mt-10">
        {/* 1 */}
        <div className="card w-full h-[500px] bg-base-100 shadow-xl">
          <figure>
            <img
              src={img1}
              alt="photo"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-150"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">FlamingFork</h2>
            <p className="text-justify">
              It is a Chef service website, which is focused on providing
              information about chefs.Designed to offer a comprehensive
              testing.Users can view recipes of each chef.Users can sign up and
              log in to this website using google & github.
            </p>
            <div className="card-actions justify-end mt-2">
              <div className="badge badge-outline hover:bg-blue-500">
                <a
                  href="https://chef-recipe-hunter-a5f77.web.app"
                  target="blank"
                >
                  Live Site
                </a>
              </div>
              <div className="badge badge-outline hover:bg-blue-500">
                <a
                  href="https://github.com/sajibsaifullah/chef-recipe-hunter-client"
                  target="blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="card w-full h-[500px] bg-base-100 shadow-xl">
          <figure>
            <img
              src={img2}
              alt="photo"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-150"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">ToyHouse</h2>
            <p className="text-justify">
              It is a online toy marketplace website, where you can buy
              toys.Users can sign up and log in to this website using
              google.Users can shop toys by ages.User can route add all toys,
              add a toy.
            </p>
            <div className="card-actions justify-end mt-2">
              <div className="badge badge-outline hover:bg-blue-500">
                <a href="https://toy-marketplace-3136b.web.app/" target="blank">
                  Live Site
                </a>
              </div>
              <div className="badge badge-outline hover:bg-blue-500">
                <a
                  href="https://github.com/sajibsaifullah/toy-marketplace-client"
                  target="blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="card w-full h-[500px] bg-base-100 shadow-xl">
          <figure>
            <img
              src={img3}
              alt="photo"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-150"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sportique</h2>
            <p className="text-justify">
              It is a Summer Camp School website, where you can learn different
              sports.Users and Admin can sign up and log in to this website
              using google.Admin can see all orders of the users, add new
              classes and make a new admin & instructor.
            </p>
            <div className="card-actions justify-end mt-2">
              <div className="badge badge-outline hover:bg-blue-500">
                <a
                  href="https://summer-camp-school-ffad2.web.app/"
                  target="blank"
                >
                  Live Site
                </a>
              </div>
              <div className="badge badge-outline hover:bg-blue-500">
                <a
                  href="https://github.com/sajibsaifullah/summer-camp-school-client"
                  target="blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
