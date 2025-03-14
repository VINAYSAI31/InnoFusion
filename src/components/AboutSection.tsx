import { useEffect, useRef, useState } from "react";
import { Trophy, Gift } from "lucide-react";

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
        {/* Title section */}
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

        {/* Sections (Rules, Judging, Prizes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Rules Section */}
          <div
            className={`transition-all duration-700 ease-out delay-200 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all h-full">
              <h3 className="text-2xl font-semibold text-hackathon-blue-light mb-4">
                Rules & Guidelines
              </h3>
              <ul className="space-y-3 text-hackathon-gray-dark">
                <li>• Each team can submit up to 2 projects</li>
                <li>• Team size: 1-4 members</li>
                <li>• Members cannot be part of multiple teams</li>
                <li>• Projects must be original work</li>
                <li>• Follow code of conduct</li>
              </ul>
            </div>
          </div>

          {/* Judging Criteria */}
          <div
            className={`transition-all duration-700 ease-out delay-300 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all h-full">
              <h3 className="text-2xl font-semibold text-hackathon-orange mb-4">
                Judging Criteria
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Innovation</span>
                  <span className="font-semibold text-hackathon-blue">40%</span>
                </div>
                <div className="flex justify-between">
                  <span>Prototype</span>
                  <span className="font-semibold text-hackathon-blue">30%</span>
                </div>
                <div className="flex justify-between">
                  <span>Business Model</span>
                  <span className="font-semibold text-hackathon-blue">20%</span>
                </div>
                <div className="flex justify-between">
                  <span>Presentation</span>
                  <span className="font-semibold text-hackathon-blue">10%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Prizes Section */}
          <div
            className={`transition-all duration-700 ease-out delay-400 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all h-full">
              <h3 className="text-2xl font-semibold text-hackathon-blue-light mb-4 flex items-center">
                <Trophy className="mr-2 text-hackathon-orange" /> Exciting Prizes
              </h3>
              <div className="space-y-4">
                {/* <div className="flex items-start space-x-3">
                  <Gift className="text-hackathon-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-hackathon-blue">Swag & Goodies</h4>
                    <p className="text-hackathon-gray-dark">
                      T-shirts, stickers, and exclusive hackathon merchandise
                    </p>
                  </div>
                </div> */}
                {/* <div className="flex items-start space-x-3">
                  <Trophy className="text-hackathon-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-hackathon-blue">Special Awards</h4>
                    <p className="text-hackathon-gray-dark">
                      Mentorship programs
                    </p>
                  </div>
                </div> */}
                <div className="flex items-start space-x-3">
                  <Gift className="text-hackathon-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-hackathon-blue">Mementos</h4>
                    <p className="text-hackathon-gray-dark">
                      Special mementos for outstanding participants
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Trophy className="text-hackathon-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-hackathon-blue">Top 3 Winners</h4>
                    <p className="text-hackathon-gray-dark">
                      Top 3 projects from both software and hardware categories will be awarded special prizes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organizers Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div
            className={`transition-all duration-700 ease-out delay-500 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-hackathon-blue mb-3">
                SODS Club
              </h4>
              <p className="text-hackathon-gray-dark">
                The Society of Data Science (SODS) is dedicated to fostering a
                community focused on data science, machine learning, and AI.
              </p>
            </div>
          </div>
          <div
            className={`transition-all duration-700 ease-out delay-600 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-hackathon-orange mb-3">
                Garuda Club
              </h4>
              <p className="text-hackathon-gray-dark">
                Garuda is the university's premier electronics and robotics club.
                From circuit design to IoT applications, Garuda members explore
                hardware innovations.
              </p>
            </div>
          </div>
        </div>

        {/* Hackathon Poster */}
        <div className="flex justify-center mt-12">
          <img
            src="/hack.jpg"
            alt="Hackathon Poster"
            className="w-full max-w-2xl rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
