
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import RoadmapVisualization from "./RoadmapVisualization";

export type ProblemCardProps = {
  title: string;
  shortDescription: string;
  fullDescription: string;
  expectedOutcomes: string[];
  resources: Array<{
    name: string;
    url: string;
  }>;
  index: number;
  category: "software" | "hardware"; // Added category prop
};

const ProblemCard = ({
  title,
  shortDescription,
  fullDescription,
  index,
  category,
}: ProblemCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Determine the challenge code
  const challengeCode = category === "software" 
  ? `SF${String(index + 1).padStart(2, "0")}` 
  : `HD${String(index + 1).padStart(2, "0")}`;

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } delay-${index * 100}`}
    >
      <div
        className={`p-6 cursor-pointer transition-colors ${
          isExpanded ? "bg-hackathon-blue-light/5" : "hover:bg-gray-50"
        }`}
        onClick={toggleExpand}
      >
        <div className="flex justify-between items-start">
          <div>
            <span className="inline-block px-3 py-1 bg-hackathon-blue/10 text-hackathon-blue rounded-full text-sm font-medium mb-3">
              {challengeCode}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-hackathon-blue mb-2">
              {title}
            </h3>
            <p className="text-hackathon-gray-dark">{shortDescription}</p>
          </div>
          <div className="text-hackathon-blue ml-4">
            {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </div>
      </div>

      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: height !== undefined ? `${height}px` : "auto" }}
      >
        <div ref={contentRef} className="p-6 pt-0 bg-white">
          <div className="border-t border-gray-100 pt-6 mt-2">
            <h4 className="text-lg font-semibold text-hackathon-blue mb-3">
              Problem Description
            </h4>
            <p className="text-hackathon-gray-dark mb-6">{fullDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemCard;
