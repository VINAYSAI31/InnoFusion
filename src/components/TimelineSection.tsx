
import { useState, useEffect, useRef } from "react";
import { Check, Calendar } from "lucide-react";

const events = [
  {
    date: "March 13, 2025",
    title: "Registration Opens",
    description: "Begin your journey by registering your team",
  },
  {
    date: "March 27, 2025",
    title: "Registration Closes",
    description: "Last day to register and form teams",
  },
  {
    "date": "April 1, 2025",
    "title": "Results",
    "description": "Announcement of selected teams"
  },
  {
    "date": "April 8",
    "title": "Final Round (OffLine)",
    "description": "Evaluation of shortlisted projects and final presentations."
  }
  

 
];

const TimelineSection = () => {
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
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-hackathon-blue mb-2">
            Event Timeline
          </h2>
          <div className="w-20 h-1 bg-hackathon-orange mx-auto mb-12"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-hackathon-blue-light/30 transform md:-translate-x-1/2"></div>

          {events.map((event, index) => (
            <div
              key={index}
              className={`relative mb-12 transition-all duration-700 delay-${
                index * 100
              } transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div
                className={`flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0
                    ? "md:flex-row-reverse text-left md:text-right"
                    : "text-left"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white rounded-full border-2 border-hackathon-blue-light flex items-center justify-center transform md:-translate-x-1/2 z-10">
                  <Calendar
                    size={16}
                    className="text-hackathon-blue-light"
                  />
                </div>

                {/* Content */}
                <div
                  className={`pl-16 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-12 md:pl-0"
                      : "md:pl-12 md:pr-0"
                  } w-full md:w-1/2`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-gradient-to-br hover:from-white hover:to-hackathon-blue/5">
                    <span className="inline-block px-3 py-1 bg-hackathon-blue/10 text-hackathon-blue rounded-full text-sm font-medium mb-3">
                      {event.date}
                    </span>
                    <h3 className="text-xl font-bold text-hackathon-blue mb-2">
                      {event.title}
                    </h3>
                    <p className="text-hackathon-gray-dark">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternate alignment */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
