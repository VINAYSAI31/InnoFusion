
import { useState, useEffect } from "react";
import { Check, Clock, AlertTriangle, Flag } from "lucide-react";

type Stage = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const stages: Stage[] = [
  {
    id: 1,
    title: "Ideation",
    description:
      "Brainstorm solutions, research the problem space, and outline your approach",
    icon: <Clock size={20} className="text-hackathon-blue" />,
  },
  {
    id: 2,
    title: "Prototyping",
    description:
      "Create mockups, design the architecture, and validate your concepts",
    icon: <AlertTriangle size={20} className="text-hackathon-orange" />,
  },
  {
    id: 3,
    title: "Development",
    description:
      "Build your solution, implement core features, and test functionality",
    icon: <Check size={20} className="text-green-600" />,
  },
  {
    id: 4,
    title: "Submission",
    description:
      "Finalize your project, create documentation, and prepare your presentation",
    icon: <Flag size={20} className="text-indigo-600" />,
  },
];

type RoadmapVisualizationProps = {
  // Optional current stage, defaults to 1
  currentStage?: number;
};

const RoadmapVisualization = ({
  currentStage = 1,
}: RoadmapVisualizationProps) => {
  const [active, setActive] = useState(currentStage);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStageClick = (stageId: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActive(stageId);
    
    // Animation cooldown
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="mb-8">
      {/* Desktop visualization */}
      <div className="hidden md:block relative">
        {/* Connecting line */}
        <div className="absolute top-10 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>

        <div className="flex justify-between relative z-10">
          {stages.map((stage) => {
            const isActiveStage = stage.id === active;
            const isPastStage = stage.id < active;

            return (
              <div
                key={stage.id}
                className="flex flex-col items-center w-1/4 cursor-pointer"
                onClick={() => handleStageClick(stage.id)}
              >
                {/* Stage circle */}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                    isActiveStage
                      ? "bg-white scale-110 shadow-lg"
                      : isPastStage
                      ? "bg-hackathon-blue-light/10"
                      : "bg-gray-100"
                  }`}
                >
                  {stage.icon}
                </div>

                {/* Stage content */}
                <div
                  className={`text-center transform transition-all duration-300 ${
                    isActiveStage ? "scale-105" : "scale-100"
                  }`}
                >
                  <h4
                    className={`font-semibold mb-1 transition-colors ${
                      isActiveStage || isPastStage
                        ? "text-hackathon-blue"
                        : "text-gray-500"
                    }`}
                  >
                    {stage.title}
                  </h4>
                  <p
                    className={`text-sm transition-colors ${
                      isActiveStage
                        ? "text-hackathon-gray-dark"
                        : "text-gray-400"
                    }`}
                  >
                    {isActiveStage ? stage.description : ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile visualization */}
      <div className="md:hidden">
        <div className="relative pl-8 before:absolute before:left-3.5 before:top-0 before:h-full before:w-px before:bg-gray-200">
          {stages.map((stage) => {
            const isActiveStage = stage.id === active;
            const isPastStage = stage.id < active;

            return (
              <div
                key={stage.id}
                className={`mb-6 relative cursor-pointer ${
                  isActiveStage ? "opacity-100" : "opacity-80"
                }`}
                onClick={() => handleStageClick(stage.id)}
              >
                <div
                  className={`absolute left-0 top-0 w-7 h-7 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${
                    isActiveStage
                      ? "bg-white scale-110 shadow-md"
                      : isPastStage
                      ? "bg-hackathon-blue-light/10"
                      : "bg-gray-100"
                  }`}
                >
                  {stage.icon}
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h4
                    className={`font-semibold mb-1 transition-colors ${
                      isActiveStage || isPastStage
                        ? "text-hackathon-blue"
                        : "text-gray-500"
                    }`}
                  >
                    {stage.title}
                  </h4>
                  <p className="text-sm text-gray-600">{stage.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoadmapVisualization;
