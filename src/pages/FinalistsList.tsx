import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Trophy, Star, Users } from "lucide-react";

const FinalistsList = () => {
  const finalists = [
    {
      id: 1,
      teamName: "Echo Care",
      teamLead: "Satya Venkata Hemanth Challapalli",
      category: "Software Track",
      project: "",
    },
    {
      id: 2,
      teamName: "MAD-MAVERICKS",
      teamLead: "Tharak Nagaveti",
      category: "Software Track",
      project: "",
    },
    {
      id: 3,
      teamName: "MAD CLUB",
      teamLead: "HEM CHARAN",
      category: "Software Track",
      project: "",
    },
    {
      id: 4,
      teamName: "VR Nexus",
      teamLead: "Jaya Varshitha Buddala",
      category: "Software Track",
      project: "",
    },
    {
      id: 5,
      teamName: "TECH NOVA",
      teamLead: "Jeffersen Godfrey A M",
      category: "Software Track",
      project: "",
    },
    {
      id: 6,
      teamName: "The AI-Chemists",
      teamLead: "G NAGA VAMSHI",
      category: "Software Track",
      project: "",
    },
    {
      id: 7,
      teamName: "work.siddharth",
      teamLead: "Siddharth Bisht",
      category: "Software Track",
      project: "",
    },
    {
      id: 8,
      teamName: "Swastya",
      teamLead: "Addanki Ganesh Suraj",
      category: "Software Track",
      project: "",
    },
    {
      id: 9,
      teamName: "sethipearl74",
      teamLead: "Pearl Sethi",
      category: "Software Track",
      project: "",
    },
    {
      id: 10,
      teamName: "raghuvanshiaryan1331",
      teamLead: "Aryan Raghuvanshi",
      category: "Software Track",
      project: "",
    },
    {
      id: 11,
      teamName: "nagavamshi91",
      teamLead: "G Naga Vamshi",
      category: "Software Track",
      project: "",
    },
    {
      id: 12,
      teamName: "mukul_megh",
      teamLead: "Mukul Baghel",
      category: "Software Track",
      project: "",
    },
    {
      id: 13,
      teamName: "lakshmideepak2005",
      teamLead: "Lakshmi Deepak Ananthoju",
      category: "Software Track",
      project: "",
    },
    {
      id: 14,
      teamName: "HackoNauts",
      teamLead: "Sneha Vadrevu",
      category: "Software Track",
      project: "",
    },
    {
      id: 15,
      teamName: "Dual Paradox",
      teamLead: "Kritthika V",
      category: "Software Track",
      project: "",
    },
    {
      id: 16,
      teamName: "Code Crusaders",
      teamLead: "Siddhant Mishra",
      category: "Software Track",
      project: "",
    },
    {
      id: 17,
      teamName: "BlueSec",
      teamLead: "Ayush Jadhav",
      category: "Software Track",
      project: "",
    },
    {
      id: 18,
      teamName: "Arsenal",
      teamLead: "Vanshika Sharma",
      category: "Software Track",
      project: "",
    },
    {
      id: 19,
      teamName: "anyeshabiswas2003",
      teamLead: "Anyesha Biswas",
      category: "Software Track",
      project: "",
    },
    {
      id: 20,
      teamName: "ALT+F4",
      teamLead: "G Abhinav Reddy",
      category: "Software Track",
      project: "",
    },
    {
      id: 21,
      teamName: "AI-aqua solwind",
      teamLead: "Abisha Alexander",
      category: "Hardware Track",
      project: "",
    },
    {
      id: 22,
      teamName: "Marine Minders",
      teamLead: "Sruthi Raj J",
      category: "Hardware Track",
      project: "",
    },
    {
      id: 23,
      teamName: "Agrilnnovators",
      teamLead: "Makadia kishan g.",
      category: "Hardware Track",
      project: "",
    },
    {
      id: 24,
      teamName: "tejaswinipawar9435",
      teamLead: "Tejaswini Pawar",
      category: "Hardware Track",
      project: "",
    },
    {
      id: 25,
      teamName: "Stepspark",
      teamLead: "Debasmita Rana",
      category: "Hardware Track",
      project: "",
    },
    {
      id: 26,
      teamName: "SolarWave",
      teamLead: "ROSHAN S",
      category: "Hardware Track",
      project: "",
    },
    {
      id: 27,
      teamName: "Leo",
      teamLead: "Hari Rakeshwar",
      category: "Hardware Track",
      project: "",
    },
    {
      id: 28,
      teamName: "Fantastic Four",
      teamLead: "ROSHAN RS",
      category: "Hardware Track",
      project: "",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-hackathon-blue/5 to-white/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-2 bg-hackathon-orange/10 rounded-full mb-4">
                <Trophy className="text-hackathon-orange h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-hackathon-blue mb-4">
                Hackathon 2025 Finalists
              </h1>
              <p className="text-lg text-hackathon-gray-dark max-w-2xl mx-auto">
                Congratulations to the teams who have been selected for the
                final round! These teams demonstrated exceptional creativity,
                technical skill, and innovation.
              </p>
            </div>

            <div className="grid gap-6">
              {finalists.map((team) => (
                <div
                  key={team.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-hackathon-blue/10"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <Star className="text-hackathon-orange h-5 w-5 mr-2" />
                        <h3 className="font-bold text-xl text-hackathon-blue">
                          {team.teamName}
                        </h3>
                      </div>
                      <div className="flex items-center text-hackathon-gray-dark mb-2">
                        <Users className="h-4 w-4 mr-2" />
                        <span>
                          Team Lead:{" "}
                          <span className="font-medium">{team.teamLead}</span>
                        </span>
                      </div>
                      <p className="text-hackathon-gray-dark">{team.project}</p>
                    </div>
                    <div className="md:text-right">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          team.category === "Software Track"
                            ? "bg-hackathon-blue/10 text-hackathon-blue"
                            : "bg-hackathon-orange/10 text-hackathon-orange"
                        }`}
                      >
                        {team.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-hackathon-gray-dark italic">
                Final presentations will be held on April 8, 2025. Good luck to
                all finalists!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FinalistsList;
