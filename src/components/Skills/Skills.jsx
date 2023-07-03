import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init({duration: 3000});
  }, []);
  return (
    <div id="skills" data-aos="zoom-in">
      <div>
        <h1 className="text-4xl font-bold text-center mt-16">
          My <span className="text-primary">Skills</span>
        </h1>
        <hr className="border-2 border-indigo-500 w-[100px] mx-auto mt-2" />
      </div>
      <div className="mt-10 grid lg:grid-cols-4 pl-16">
        {/* 1 */}
        <div className="space-y-2">
          <div>
            <h3 className="text-xl font-semibold">HTML</h3>
            <div className="w-3/4 h-4 bg-gray-300 rounded-md">
              <div
                className="h-full bg-blue-500 rounded-md text-xs text-center text-white"
                style={{ width: "90%" }}
              >
                90%
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">CSS</h3>
            <div className="w-3/4 h-4 bg-gray-300 rounded-md">
              <div
                className="h-full bg-blue-500 rounded-md text-xs text-center text-white"
                style={{ width: "80%" }}
              >
                80%
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div>
          <div className="space-y-2">
            <div>
              <h3 className="text-xl font-semibold">JavaScript</h3>
              <div className="w-3/4 h-4 bg-gray-300 rounded-md">
                <div
                  className="h-full bg-blue-500 rounded-md text-xs text-center text-white"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Node.js</h3>
              <div className="w-3/4 h-4 bg-gray-300 rounded-md">
                <div
                  className="h-full bg-blue-500 rounded-md text-xs text-center text-white"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div className="space-y-2">
            <div>
              <h3 className="text-xl font-semibold">Express.js</h3>
              <div className="w-3/4 h-4 bg-gray-300 rounded-md">
                <div
                  className="h-full bg-blue-500 rounded-md text-xs text-center text-white"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">MongoDB</h3>
              <div className="w-3/4 h-4 bg-gray-300 rounded-md">
                <div
                  className="h-full bg-blue-500 rounded-md text-xs text-center text-white"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div>
          <div className="space-y-2">
            <div>
              <h3 className="text-xl font-semibold">Tailwind CSS</h3>
              <div className="w-3/4 h-4 bg-gray-300 rounded-md">
                <div
                  className="h-full bg-blue-500 rounded-md text-xs text-center text-white"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Bootstrap</h3>
              <div className="w-3/4 h-4 bg-gray-300 rounded-md">
                <div
                  className="h-full bg-blue-500 rounded-md text-xs text-center text-white"
                  style={{ width: "75%" }}
                >
                  75%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
