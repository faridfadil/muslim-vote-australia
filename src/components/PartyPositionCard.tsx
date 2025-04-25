import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, ThumbsDown, Minus, ExternalLink } from "lucide-react";

interface PartyPositionCardProps {
  party?: {
    name: string;
    logo: string;
    color: string;
  };
  issue?: {
    name: string;
    category: string;
  };
  position?: {
    stance: "supportive" | "neutral" | "opposed";
    summary: string;
    keyPoints: string[];
    votingRecord?: {
      for: number;
      against: number;
      abstained: number;
    };
    sourceUrl?: string;
  };
}

const PartyPositionCard = ({
  party = {
    name: "Australian Labor Party",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=ALP",
    color: "#E53935",
  },
  issue = {
    name: "Palestine Recognition",
    category: "Foreign Policy",
  },
  position = {
    stance: "supportive",
    summary:
      "Supports recognition of Palestinian state as part of two-state solution",
    keyPoints: [
      "Committed to eventual recognition",
      "Supports UN resolutions on Palestinian rights",
      "Advocates for peace negotiations",
    ],
    votingRecord: {
      for: 12,
      against: 2,
      abstained: 1,
    },
    sourceUrl: "https://example.com/alp-palestine-policy",
  },
}: PartyPositionCardProps) => {
  const getStanceIcon = (stance: string) => {
    switch (stance) {
      case "supportive":
        return <ThumbsUp className="h-4 w-4 text-emerald-600" />;
      case "opposed":
        return <ThumbsDown className="h-4 w-4 text-red-500" />;
      case "neutral":
        return <Minus className="h-4 w-4 text-amber-500" />;
      default:
        return null;
    }
  };

  const getStanceBadgeColor = (stance: string) => {
    switch (stance) {
      case "supportive":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";
      case "opposed":
        return "bg-red-50 text-red-700 border-red-100";
      case "neutral":
        return "bg-amber-50 text-amber-700 border-amber-100";
      default:
        return "bg-gray-50 text-gray-700 border-gray-100";
    }
  };

  return (
    <Card className="w-full h-full bg-white border border-gray-100 shadow-sm hover:shadow transition-all duration-200">
      <div
        className="h-1 w-full rounded-t-lg"
        style={{ backgroundColor: party.color }}
      ></div>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div
              className="h-8 w-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: party.color }}
            >
              <span className="text-white text-xs font-medium">
                {party.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </span>
            </div>
            <h3 className="text-base font-medium text-gray-800">
              {party.name}
            </h3>
          </div>
          <Badge
            className={`text-xs px-2 py-0.5 ${getStanceBadgeColor(position.stance)}`}
          >
            <span className="flex items-center gap-1">
              {getStanceIcon(position.stance)}
              <span className="capitalize">{position.stance}</span>
            </span>
          </Badge>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            {position.summary}
          </p>
        </div>

        <div className="mb-3">
          <h4 className="text-xs font-medium text-gray-600 mb-2">Key Points</h4>
          <ul className="text-xs text-gray-600 space-y-2">
            {position.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {position.sourceUrl && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            <a
              href={position.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1"
            >
              <ExternalLink className="h-3 w-3" />
              View source
            </a>
          </div>
        )}

        {/* Click to see more prompt */}
        <div className="mt-4 pt-3 border-t border-gray-100 text-center">
          <span className="text-xs text-blue-500 hover:text-blue-700 cursor-pointer inline-block px-3 py-1.5 rounded-md hover:bg-blue-50 transition-colors duration-200">
            More details
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PartyPositionCard;
