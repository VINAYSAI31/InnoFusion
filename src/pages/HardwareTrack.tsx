
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProblemCard from "../components/ProblemCard";

// Sample data for hardware track problem statements
const hardwareProblems = [
  {
    title: "Smart Water Conservation System",
    shortDescription:
      "Build an IoT solution that monitors and optimizes water usage in agricultural or residential settings.",
    fullDescription:
      "Water scarcity is becoming a critical issue globally. Design and build a smart water management system that uses sensors to monitor water usage, detect leaks, and automatically optimize consumption. The solution should include hardware components for sensing and control, along with software for data visualization and management. Focus on affordability and ease of installation for widespread adoption.",
    expectedOutcomes: [
      "Functional prototype with water flow sensors and control mechanisms",
      "Low-power design suitable for battery or solar operation",
      "Real-time monitoring dashboard with usage analytics",
      "Automated control systems for optimizing water usage",
      "Leak detection and alert system",
    ],
    resources: [
      {
        name: "Water Flow Sensor Documentation",
        url: "https://example.com/flow-sensors",
      },
      {
        name: "Microcontroller Programming Guides",
        url: "https://example.com/microcontrollers",
      },
      {
        name: "IoT Communication Protocols",
        url: "https://example.com/iot-protocols",
      },
      {
        name: "Power Management for IoT Devices",
        url: "https://example.com/power-management",
      },
    ],
  },
  {
    title: "Wearable Health Monitor for Elderly Care",
    shortDescription:
      "Develop a non-intrusive wearable device that monitors vital signs and can alert caregivers in emergency situations.",
    fullDescription:
      "The aging population needs solutions that help maintain independence while ensuring safety. Create a wearable health monitoring system designed specifically for elderly users that tracks vital signs, detects falls, and can automatically alert caregivers in emergency situations. The device should be comfortable, have long battery life, and respect privacy while providing critical health insights.",
    expectedOutcomes: [
      "Comfortable, unobtrusive wearable prototype",
      "Reliable vital sign monitoring (heart rate, temperature, etc.)",
      "Fall detection with minimal false positives",
      "Emergency alert system with location tracking",
      "Companion app for caregivers with historical data",
    ],
    resources: [
      {
        name: "Biomedical Sensor Integration",
        url: "https://example.com/biomedical-sensors",
      },
      {
        name: "PCB Design Resources",
        url: "https://example.com/pcb-design",
      },
      {
        name: "Machine Learning for Fall Detection",
        url: "https://example.com/ml-fall-detection",
      },
      {
        name: "Low-Energy Bluetooth Implementation",
        url: "https://example.com/ble-implementation",
      },
    ],
  },
  {
    title: "Solar-Powered Environmental Monitoring Station",
    shortDescription:
      "Create a self-sustaining device that monitors air quality, temperature, humidity, and other environmental factors.",
    fullDescription:
      "Environmental data is critical for understanding and addressing climate change and pollution. Design a solar-powered monitoring station that can be deployed in urban or remote locations to collect environmental data continuously. The station should be weather-resistant, energy-efficient, and capable of transmitting data wirelessly to a central database for analysis and visualization.",
    expectedOutcomes: [
      "Functional prototype with multiple environmental sensors",
      "Solar power system with battery backup",
      "Weather-resistant enclosure suitable for outdoor deployment",
      "Wireless communication capabilities (cellular, LoRa, etc.)",
      "Data storage and transmission protocols",
    ],
    resources: [
      {
        name: "Environmental Sensor Selection Guide",
        url: "https://example.com/env-sensors",
      },
      {
        name: "Solar Power Sizing Calculations",
        url: "https://example.com/solar-sizing",
      },
      {
        name: "Long-Range Communication Technologies",
        url: "https://example.com/long-range-comms",
      },
      {
        name: "Weatherproof Enclosure Design",
        url: "https://example.com/weatherproofing",
      },
    ],
  },
];

const HardwareTrack = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading for smoother animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
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
              className={`transition-all duration-700 ease-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
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
              <ProblemCard key={index} {...problem} index={index} />
            ))}
          </div>

          <div
            className={`mt-12 text-center transition-all duration-700 ease-out transform delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-semibold text-hackathon-orange mb-4">
              Ready to build something amazing?
            </h3>
            <Link
              to="https://forms.google.com"
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
