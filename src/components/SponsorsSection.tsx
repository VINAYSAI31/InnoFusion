import { useEffect, useRef, useState } from "react";

const SponsorsSection = () => {
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
      className="py-16 md:py-24 bg-hackathon-gray-light"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-hackathon-blue mb-2">
            Our Sponsor
          </h2>
          <div className="w-20 h-1 bg-hackathon-orange mx-auto mb-6"></div>
          <p className="text-center text-hackathon-gray-dark max-w-2xl mx-auto mb-12">
            We're grateful to SVKDT for making this hackathon possible and providing valuable resources to participants.
          </p>
        </div>

        <div
          className={`flex justify-center transition-all duration-700 ease-out delay-200 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="  rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center hover-lift">
            <img
              src="/images/sukdt.jpg" 
              alt="SUKDT Logo"
              className="h-[10.8rem] w-auto"
            />
          </div>
        </div>

        {/* <div
          className={`mt-12 text-center transition-all duration-700 ease-out delay-300 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-hackathon-blue-light">
            Interested in sponsoring our hackathon? {" "}
            <a
              href="mailto:sponsor@hackathon.com"
              className="text-hackathon-blue font-medium hover:underline"
            >
              Contact us
            </a>
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default SponsorsSection;
