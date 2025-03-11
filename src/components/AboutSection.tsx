
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-white to-hackathon-gray-light"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`transition-all duration-700 ease-out delay-100 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-hackathon-blue mb-2">
            About The Hackathon
          </h2>
          <div className="w-20 h-1 bg-hackathon-orange mx-auto mb-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className={`transition-all duration-700 ease-out delay-200 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-semibold text-hackathon-blue-light mb-4">
              Organized By
            </h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h4 className="text-xl font-bold text-hackathon-blue mb-3">
                  SODS Club
                </h4>
                <p className="text-hackathon-gray-dark">
                  The Society of Data Science (SODS) is dedicated to fostering a
                  community focused on data science, machine learning, and AI.
                  With regular workshops, competitions, and industry
                  connections, SODS helps students develop data skills essential
                  for the modern tech landscape.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h4 className="text-xl font-bold text-hackathon-orange mb-3">
                  Garuda Club
                </h4>
                <p className="text-hackathon-gray-dark">
                Garuda, the university's premier drone club, 
                is dedicated to the thrilling world of drone technology. 
                Members dive into drone design, development, and innovation through hands-on projects,
                 exciting drone competitions, and skill-building workshops, 
                 empowering enthusiasts to soar to new heights in aerial technology.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ease-out delay-300 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-hackathon-blue-light mb-4">
                Why Participate?
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hackathon-blue flex items-center justify-center text-white font-bold mr-3">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-hackathon-blue">
                      Skill Development
                    </h4>
                    <p className="text-hackathon-gray-dark">
                      Apply your technical knowledge to real-world problems and learn new tools
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hackathon-blue flex items-center justify-center text-white font-bold mr-3">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-hackathon-blue">
                      Network & Collaborate
                    </h4>
                    <p className="text-hackathon-gray-dark">
                      Connect with like-minded individuals and industry professionals
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hackathon-blue flex items-center justify-center text-white font-bold mr-3">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-hackathon-blue">
                      Exciting Prizes
                    </h4>
                    <p className="text-hackathon-gray-dark">
                      Win cash prizes, mentorship opportunities, and recognition
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hackathon-blue flex items-center justify-center text-white font-bold mr-3">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-hackathon-blue">
                      Build Your Portfolio
                    </h4>
                    <p className="text-hackathon-gray-dark">
                      Create projects that showcase your abilities to future employers
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
