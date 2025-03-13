import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ProblemCard, { ProblemCardProps } from "../components/ProblemCard";

// Sample data for software track problem statements
const softwareProblems = [
  {
    "title": "AI-Based Plant Disease Diagnosis",
    "shortDescription": "Mobile app for real-time plant disease detection using AI.",
    "fullDescription": "Develop a mobile application that uses image recognition and AI to diagnose plant diseases in real-time, providing farmers with instant treatment recommendations."
  },
  // {
  //   "title": "Smart Farming Assistant",
  //   "shortDescription": "Software integrating weather, soil, and crop data for farmers.",
  //   "fullDescription": "Create a software platform that integrates weather forecasts, soil data, and crop information to provide farmers with personalized irrigation and fertilization schedules, optimizing resource usage."
  // },
  // {
  //   "title": "Blockchain-Based Agricultural Traceability",
  //   "shortDescription": "Blockchain solution for tracking agricultural produce.",
  //   "fullDescription": "Design a blockchain-based traceability system for agricultural produce, ensuring transparency in the supply chain from farm to consumer."
  // },
  // {
  //   "title": "Farmer-to-Consumer Digital Marketplace",
  //   "shortDescription": "A marketplace connecting small-scale farmers directly to consumers.",
  //   "fullDescription": "Build a digital marketplace that connects small-scale farmers directly with consumers, eliminating intermediaries and ensuring fair pricing."
  // },
  {
    "title": "AI-Based Mental Health Detection",
    "shortDescription": "AI-powered voice analysis for early mental health diagnosis.",
    "fullDescription": "Develop a mobile application that uses AI to analyze voice patterns and detect early signs of mental health conditions, providing personalized support and resources."
  },
  // {
  //   "title": "Telemedicine for Rural Healthcare",
  //   "shortDescription": "Remote healthcare access through a telemedicine platform.",
  //   "fullDescription": "Create a telemedicine platform that enables remote consultations between patients and doctors, particularly in underserved rural areas."
  // },
  // {
  //   "title": "AI-Powered Medical Image Analysis",
  //   "shortDescription": "Machine learning system for analyzing medical images.",
  //   "fullDescription": "Design a system that uses machine learning to analyze medical images (X-rays, MRIs) and assist doctors in early detection of diseases."
  // },
  // {
  //   "title": "Adaptive Learning Platform",
  //   "shortDescription": "Personalized education platform based on student progress.",
  //   "fullDescription": "Develop an adaptive learning platform that personalizes educational content based on individual student learning styles and progress."
  // },
  // {
  //   "title": "VR/AR for STEM Education",
  //   "shortDescription": "Immersive learning experiences using VR/AR in STEM.",
  //   "fullDescription": "Create an interactive virtual reality (VR) or augmented reality (AR) application that enhances learning experiences in science, technology, engineering, and mathematics (STEM) subjects."
  // },
  // {
  //   "title": "Mentorship & Tutoring Platform",
  //   "shortDescription": "Connecting students with mentors and tutors.",
  //   "fullDescription": "Design a platform that connects students with mentors and tutors for personalized academic support and career guidance."
  // },
  {
    "title": "Energy Optimization System",
    "shortDescription": "Machine learning system to optimize energy consumption.",
    "fullDescription": "Design a system that uses sensor data and machine learning to monitor and optimize energy consumption in buildings and public spaces."
  },
  {
    "title": "Flood Prediction & Warning System",
    "shortDescription": "Early flood risk detection and warning notifications.",
    "fullDescription": "Develop a system that predicts areas of high flood risk and sends out early warning notifications to residents."
  },
  {
    "title": "Financial Literacy & Budgeting App",
    "shortDescription": "Mobile app for financial education and budgeting tools.",
    "fullDescription": "Develop a mobile application that provides financial literacy education and tools for budgeting and saving, particularly for underserved populations."
  },
  // {
  //   "title": "AI-Based Fraud Detection",
  //   "shortDescription": "AI-powered platform for financial fraud prevention.",
  //   "fullDescription": "Create a platform that uses AI to detect and prevent financial fraud, protecting users from scams and identity theft."
  // },
  // {
  //   "title": "Micro-Lending & Financial Inclusion",
  //   "shortDescription": "A platform facilitating micro-loans for small businesses.",
  //   "fullDescription": "Design a system that facilitates micro-lending and financial inclusion for small businesses and entrepreneurs in rural areas."
  // },
  // {
  //   "title": "Carbon Emissions Tracking System",
  //   "shortDescription": "Software solution for tracking carbon emissions.",
  //   "fullDescription": "Develop a software solution that tracks and analyzes carbon emissions from various sources, providing insights for businesses and individuals to reduce their environmental impact."
  // },
  // {
  //   "title": "Sustainable Product Marketplace",
  //   "shortDescription": "Platform connecting consumers with eco-friendly businesses.",
  //   "fullDescription": "Create a platform that connects consumers with local businesses offering sustainable products and services, promoting eco-friendly choices."
  // },
  // {
  //   "title": "Digital Marketplace for Rural Artisans",
  //   "shortDescription": "Online marketplace for rural artisans to sell products.",
  //   "fullDescription": "Develop a platform that provides rural artisans with access to online marketplaces and digital marketing tools, expanding their reach and income."
  // },
  // {
  //   "title": "Community Collaboration Platform",
  //   "shortDescription": "A platform for rural residents to share knowledge.",
  //   "fullDescription": "Create a community-based platform that facilitates knowledge sharing and collaboration among rural residents, promoting self-help and development initiatives."
  // },
  {
    "title": "AI-Based Disaster Prediction & Tracking",
    "shortDescription": "Real-time disaster prediction using AI and data analysis.",
    "fullDescription": "Develop a platform that uses real-time data and AI to predict and track natural disasters, providing early warnings and evacuation alerts."
  },
  {
    "title": "Disaster Relief Coordination System",
    "shortDescription": "A system for efficient disaster relief resource distribution.",
    "fullDescription": "Create a system that facilitates efficient coordination and distribution of disaster relief resources, ensuring timely assistance to affected populations."
  },
  {
    "title": "Emergency Communication Platform",
    "shortDescription": "Communication system for disaster-affected individuals.",
    "fullDescription": "Design a communication platform that allows disaster-affected individuals to connect with emergency services and loved ones, even in areas with limited connectivity."
  },
  {
    "title": "Open Innovation in Software",
    "shortDescription": "Encouraging unique and innovative software solutions.",
    "fullDescription": "Encourages all types of innovative ideas related to software development. If your problem statement doesn't align with the predefined categories, it can still be considered under this open innovation category. This approach values creativity and welcomes unique solutions that address real-world software challenges, ensuring no innovative idea is overlooked."
  }
];

const SoftwareTrack = () => {
  // const [isLoaded, setIsLoaded] = useState(true);

  // // Scroll to top on page load
  // useEffect(() => {
  //   window.scrollTo(0, 0);
    
  //   // Simulate loading for smoother animations
  //   const timer = setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 100);
    
  //   return () => clearTimeout(timer);
  // }, []);
  const navigate = useNavigate();


  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
          <button
              onClick={() => navigate("/")}
              className="inline-flex items-center text-hackathon-blue hover:text-hackathon-blue-light transition-colors mb-4 group"
            >
              <ArrowLeft
                size={18}
                className="mr-2 transition-transform group-hover:-translate-x-1"
              />
              Back to Home
            </button>

            <div
              className="transition-all duration-700 ease-out transform opacity-100 translate-y-0" 
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
              <ProblemCard key={index} {...problem} index={index} category="software" />

            ))}
          </div>

          <div
            className="mt-12 text-center transition-all duration-700 ease-out transform delay-500 opacity-100 translate-y-0"

          >
            <h3 className="text-xl font-semibold text-hackathon-blue mb-4">
              Ready to take on a challenge?
            </h3>
            <Link
              to="https://forms.gle/KBC4Ppqe6vknuVzT6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-hackathon-blue text-white px-8 py-3 rounded-full font-medium hover:bg-hackathon-blue-light transition-colors shadow-lg hover:shadow-xl"
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

export default SoftwareTrack;
