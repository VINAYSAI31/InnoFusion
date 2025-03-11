
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProblemCard from "../components/ProblemCard";

// Sample data for software track problem statements
const softwareProblems = [
  {
    title: "AI-Powered Mental Health Assistant",
    shortDescription:
      "Develop a chatbot that can help users manage stress and anxiety through conversation and guided exercises.",
    fullDescription:
      "Mental health challenges affect millions globally, yet access to professional help remains limited. Build an AI-powered assistant that can engage users in conversation, identify potential signs of stress or anxiety, and recommend evidence-based coping strategies. The solution should be privacy-focused, accessible, and capable of providing personalized support based on user interactions.",
    expectedOutcomes: [
      "Conversational interface with natural language processing capabilities",
      "Implementation of validated psychological assessment methods",
      "Personalized recommendation system for coping strategies",
      "Privacy-first design with appropriate data protection measures",
      "User-friendly interface with intuitive navigation",
    ],
    resources: [
      {
        name: "Natural Language Processing APIs",
        url: "https://example.com/nlp-resources",
      },
      {
        name: "Mental Health Assessment Tools",
        url: "https://example.com/assessment-tools",
      },
      {
        name: "Privacy and Data Protection Guidelines",
        url: "https://example.com/privacy-guidelines",
      },
      {
        name: "User Experience Design Principles",
        url: "https://example.com/ux-design",
      },
    ],
  },
  {
    title: "Smart Campus Navigation System",
    shortDescription:
      "Create a mobile app that helps students navigate campus buildings, find classrooms, and discover facilities efficiently.",
    fullDescription:
      "University campuses can be challenging to navigate, especially for new students or visitors. Design a smart navigation system that goes beyond basic maps to offer indoor positioning, real-time occupancy data for study spaces, accessibility routes, and integration with campus schedules. The solution should work offline and consider various accessibility needs.",
    expectedOutcomes: [
      "Interactive map with indoor navigation capabilities",
      "Real-time updates on space availability and crowdedness",
      "Accessibility features for users with different needs",
      "Integration with campus timetables and event schedules",
      "Location-based notifications and recommendations",
    ],
    resources: [
      {
        name: "Indoor Positioning Technologies",
        url: "https://example.com/indoor-positioning",
      },
      {
        name: "Map Visualization Libraries",
        url: "https://example.com/map-libraries",
      },
      {
        name: "Accessibility Guidelines",
        url: "https://example.com/accessibility",
      },
      {
        name: "Mobile Development Frameworks",
        url: "https://example.com/mobile-dev",
      },
    ],
  },
  {
    title: "Sustainable Food Consumption Tracker",
    shortDescription:
      "Build an application that helps users track the environmental impact of their food choices and suggests sustainable alternatives.",
    fullDescription:
      "Food production accounts for approximately 26% of global greenhouse gas emissions. Develop a solution that allows users to track their food consumption patterns and understand the environmental footprint of their choices. The application should provide actionable insights, suggest more sustainable alternatives, and help users reduce their carbon footprint through informed dietary choices.",
    expectedOutcomes: [
      "Food database with environmental impact metrics",
      "User-friendly tracking interface for meals and groceries",
      "Visualization of environmental impact over time",
      "Personalized recommendations for more sustainable choices",
      "Social features to encourage community engagement",
    ],
    resources: [
      {
        name: "Food Carbon Footprint Databases",
        url: "https://example.com/food-carbon",
      },
      {
        name: "Data Visualization Libraries",
        url: "https://example.com/data-viz",
      },
      {
        name: "Sustainable Food Research",
        url: "https://example.com/sustainable-food",
      },
      {
        name: "Gamification Design Patterns",
        url: "https://example.com/gamification",
      },
    ],
  },
];

const SoftwareTrack = () => {
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
              className="inline-flex items-center text-hackathon-blue hover:text-hackathon-blue-light transition-colors mb-4 group"
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
              <h1 className="text-3xl md:text-4xl font-bold text-hackathon-blue mb-4">
                Software Track Challenges
              </h1>
              <p className="text-lg text-hackathon-gray-dark mb-4 max-w-3xl">
                Create innovative software solutions to address real-world problems.
                Choose one of the challenges below and develop an application that
                makes a difference.
              </p>
              <div className="h-1 w-20 bg-hackathon-orange mb-8"></div>
            </div>
          </div>

          <div className="space-y-8">
            {softwareProblems.map((problem, index) => (
              <ProblemCard key={index} {...problem} index={index} />
            ))}
          </div>

          <div
            className={`mt-12 text-center transition-all duration-700 ease-out transform delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-semibold text-hackathon-blue mb-4">
              Ready to take on a challenge?
            </h3>
            {/* <Link
              to="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-hackathon-blue text-white px-8 py-3 rounded-full font-medium hover:bg-hackathon-blue-light transition-colors shadow-lg hover:shadow-xl"
            >
              Register Now
            </Link> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SoftwareTrack;
