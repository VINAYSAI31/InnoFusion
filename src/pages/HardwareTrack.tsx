import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProblemCard from "../components/ProblemCard";

const hardwareProblems = [
  
  {
    "title": "UAV-based Agriculture Monitoring",
    "shortDescription": "Develop a drone system to monitor crop health, soil conditions, and irrigation efficiency.",
    "fullDescription": "Agriculture can benefit significantly from UAV-based monitoring. Create a drone solution equipped with sensors and cameras to capture aerial data on crop health, soil moisture, and irrigation efficiency. The system should process and analyze the collected data to help farmers make informed decisions, improving productivity and sustainability."
  },
  {
    "title": "UAV-based Infrastructure Monitoring",
    "shortDescription": "Design a drone solution for inspecting bridges, buildings, and other infrastructure for safety and maintenance.",
    "fullDescription": "Traditional infrastructure monitoring is time-consuming and risky. Develop a UAV-based system that can autonomously inspect bridges, buildings, and other infrastructure for cracks, corrosion, or structural weaknesses. The solution should provide real-time data analysis and reporting for proactive maintenance."
  },
  {
    "title": "UAV-based Logistic Delivery",
    "shortDescription": "Create an autonomous drone system for delivering small packages in urban or remote areas.",
    "fullDescription": "Logistics can be enhanced with UAV-based delivery systems. Design a drone capable of transporting small packages, navigating autonomously, and ensuring secure delivery in urban and remote regions. The system should consider factors like air traffic, weather conditions, and landing precision."
  },
  {
    "title": "UAV-based Pipeline Monitoring",
    "shortDescription": "Develop a drone system for inspecting and monitoring oil, gas, or water pipelines for leaks and damages.",
    "fullDescription": "Pipeline monitoring is crucial for preventing leaks and environmental hazards. Build a UAV-based system equipped with thermal and optical sensors to inspect pipelines for damages, leaks, and irregularities. The drone should provide real-time reporting and alert mechanisms."
  },
  {
    "title": "Disaster Response and Search & Rescue Robot",
    "shortDescription": "Design an autonomous or semi-autonomous robot for search and rescue operations in disaster zones.",
    "fullDescription": "Traditional search and rescue missions are slow and risky for humans. Develop a robot that can navigate disaster zones such as earthquakes, collapsed buildings, and floods to locate survivors, deliver essential supplies, and map hazardous areas in real-time."
  },
  {
    "title": "Water Pollution Detection and Cleanup Bot",
    "shortDescription": "Create an aquatic robot that detects and removes pollutants from water bodies.",
    "fullDescription": "Water pollution is a growing concern, harming ecosystems and communities. Design a robotic system capable of detecting pollutants such as plastics, chemicals, and oil spills. The bot should autonomously clean or mark heavily polluted areas for further action."
  },
  {
    "title": "Open Innovation in Hardware",
    "shortDescription": "Encourage innovative hardware ideas beyond predefined categories.",
    "fullDescription": "This category welcomes any unique and creative hardware solutions that address real-world challenges. If your idea does not fit into existing problem statements but has the potential for significant impact, it can be submitted under this open innovation category."
  }
];

const HardwareTrack = () => {
  // const [isLoaded, setIsLoaded] = useState(true);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
    
  //   const timer = setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 100);
    
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-hackathon-orange hover:text-hackathon-blue transition-colors mb-4 group"
            >
              <ArrowLeft
                size={18}
                className="mr-2 transition-transform group-hover:-translate-x-1"
              />
              Back to Home
            </Link>

            <div
              className="transition-all duration-700 ease-out transform opacity-100 translate-y-0"
              
            >
              <h1 className="text-3xl md:text-4xl font-bold text-hackathon-orange mb-4">
                Hardware Track Challenges
              </h1>
              <p className="text-lg text-hackathon-gray-dark mb-4 max-w-3xl">
                Build innovative hardware solutions and physical prototypes to solve
                real-world problems. Each challenge requires a combination of
                electronic design, programming, and creativity.
              </p>
              <div className="h-1 w-20 bg-hackathon-blue mb-8"></div>
            </div>
          </div>

          <div className="space-y-8">
            {hardwareProblems.map((problem, index) => (
              <ProblemCard key={index} {...problem} index={index} category="Hardware" />

            ))}
          </div>

          <div
            className="mt-12 text-center transition-all duration-700 ease-out transform delay-500
              opacity-100 translate-y-0"
          >
            <h3 className="text-xl font-semibold text-hackathon-orange mb-4">
              Ready to build something amazing?
            </h3>
            <Link
              to="https://forms.gle/KBC4Ppqe6vknuVzT6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-hackathon-orange text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-colors shadow-lg hover:shadow-xl"
            >
              Register Now
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HardwareTrack;
