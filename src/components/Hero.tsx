
import { ArrowRight,Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-hackathon-blue/5 to-white/80 -z-10"></div>
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-hackathon-blue/10 rotate-12 transform -translate-y-1/2 translate-x-1/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-hackathon-orange/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-700 ease-out transform ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hackathon-blue mb-6 tracking-tight leading-tight">
              InnoFusion{" "}
              <span className="text-hackathon-orange">Hackathon</span>
            </h1>
          </div>

          <div
            className={`transition-all duration-700 delay-100 ease-out transform ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-xl md:text-2xl text-hackathon-blue-light mb-8">
              Innovate • Collaborate • Create
            </h2>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ease-out transform ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-hackathon-gray-dark mb-8 max-w-2xl mx-auto">
            Join us on  for an exciting opportunity to tackle real-world challenges and showcase your technical skills.
            </p>
          </div>

          <div className="mt-6">
              <Link
                to="/finalists"
                className="inline-flex items-center gap-2 bg-hackathon-orange text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-hackathon-orange/90 hover:scale-105 active:scale-100 animate-pulse"
              >
                <Trophy size={18} />
                View Finalists List
                <ArrowRight size={18} />
              </Link>
            </div>
        </div>

        <div
          className={`mt-16 transition-all duration-700 delay-400 ease-out transform ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              to="/software-track"
              className="block group relative overflow-hidden bg-white hover:bg-gradient-to-br hover:from-white hover:to-hackathon-blue/5 rounded-xl shadow-md hover:shadow-lg hover-lift"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-hackathon-blue mb-4">
                  Software Track
                </h3>
                <p className="text-hackathon-gray-dark mb-6">
                  Develop innovative software solutions for real-world problems.
                  Perfect for coders, designers, and problem solvers.
                </p>
                <div className="flex items-center text-hackathon-blue font-medium">
                  Explore Challenges
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-hackathon-blue/5 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
            </Link>

            <Link
              to="/hardware-track"
              className="block group relative overflow-hidden bg-white hover:bg-gradient-to-br hover:from-white hover:to-hackathon-orange/5 rounded-xl shadow-md hover:shadow-lg hover-lift"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-hackathon-orange mb-4">
                  Hardware Track
                </h3>
                <p className="text-hackathon-gray-dark mb-6">
                  Build physical prototypes and IoT solutions. Ideal for
                  electronics enthusiasts and makers.
                </p>
                <div className="flex items-center text-hackathon-orange font-medium">
                  Explore Challenges
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-hackathon-orange/5 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
