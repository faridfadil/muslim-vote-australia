import React from "react";
import { Badge } from "@/components/ui/badge";
import { Crown, Star, Users, Info, BookOpen } from "lucide-react";

interface PartyCardProps {
  party: {
    id: string;
    name: string;
    logo?: string;
    color: string;
    partyType: "Major" | "Minor" | "Independent";
    inclusivityRating:
      | "Excellent"
      | "Good"
      | "Moderate"
      | "Poor"
      | "Extremely Poor";
    gazaStanceRating: "Excellent" | "Good" | "Mixed" | "Negative" | "Very Poor";
    domesticPolicyRating:
      | "Excellent"
      | "Good"
      | "Moderate"
      | "Poor"
      | "Very Poor";
    globalMuslimOppressionRating:
      | "Excellent"
      | "Good"
      | "Moderate"
      | "Poor"
      | "Very Poor";
    inclusivitySummary: string;
    gazaSummary: string;
    domesticPolicySummary: string;
    globalMuslimOppressionSummary: string;
    historicWinRate: number;
    nationalPopularity: number;
    websiteUrl?: string;
    runningCandidate?: {
      name: string;
      position: string;
      imageUrl?: string;
    };
  };
  onClick?: () => void;
}

const PartyCard: React.FC<PartyCardProps> = ({ party, onClick }) => {
  const getRatingVariant = (rating: string) => {
    switch (rating.toLowerCase()) {
      case "excellent":
        return "excellent";
      case "good":
        return "good";
      case "moderate":
      case "mixed":
        return "moderate";
      case "poor":
      case "negative":
        return "poor";
      case "extremely poor":
      case "very poor":
      case "dangerous":
        return "extremely-poor";
      default:
        return "default";
    }
  };

  const getRatingNumber = (rating: string) => {
    switch (rating.toLowerCase()) {
      case "excellent":
        return 90;
      case "good":
        return 80;
      case "moderate":
      case "mixed":
        return 70;
      case "poor":
      case "negative":
        return 50;
      case "extremely poor":
      case "very poor":
      case "dangerous":
        return 30;
      default:
        return 60;
    }
  };

  const inclusivityNumber = getRatingNumber(party.inclusivityRating);
  const gazaNumber = getRatingNumber(party.gazaStanceRating);

  return (
    <div
      className="border-2 border-gray-200 rounded-xl bg-white hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {/* Removed colored banner */}

      <div className="p-5">
        {/* Party info */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-md overflow-hidden border border-gray-200">
              {party.name === "Teal Independents" ? (
                <div className="w-full h-full flex items-center justify-center bg-teal-500 text-white font-bold text-xl">
                  TI
                </div>
              ) : (
                <img
                  src={party.logo}
                  alt={`${party.name} logo`}
                  className="w-full h-full object-contain p-1"
                />
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold">{party.name}</h3>
              <Badge className="mt-1 flex items-center justify-center gap-1 bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200 px-2 py-0.5 h-6 w-28">
                {party.partyType === "Major" && (
                  <Crown size={12} className="text-amber-500" />
                )}
                {party.partyType}{" "}
                {party.partyType !== "Independent" ? "Party" : ""}
              </Badge>
            </div>
          </div>
        </div>

        {/* Political leaning graph - minimalist style */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-500">
              Political Leaning
            </span>
          </div>
          <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden mb-1">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="h-full bg-gradient-to-r from-blue-400 to-red-400 w-full opacity-30"></div>
            </div>
            <div
              className="absolute top-1/2 h-4 w-4 bg-white shadow-sm border border-gray-200 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
              style={{ left: `${party.politicalLeaning}%` }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-between px-3 items-center text-xs font-medium">
              <span className="text-gray-500">Left</span>
              <span className="text-gray-500">Right</span>
            </div>
          </div>
        </div>

        {/* Removed national popularity and win rate stats as requested */}

        {/* Rating badges */}
        <div className="space-y-4 mt-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600 font-bold">
                Muslim Inclusivity
              </span>
              <Badge
                variant={getRatingVariant(party.inclusivityRating)}
                className="font-bold"
              >
                {party.inclusivityRating}
              </Badge>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600 font-bold">
                Gaza Stance
              </span>
              <Badge
                variant={getRatingVariant(party.gazaStanceRating)}
                className="font-bold"
              >
                {party.gazaStanceRating}
              </Badge>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600 font-bold">
                Global Muslim Oppression Response
              </span>
              <Badge
                variant={getRatingVariant(party.globalMuslimOppressionRating)}
                className="font-bold"
              >
                {party.globalMuslimOppressionRating}
              </Badge>
            </div>
          </div>

          {/* Domestic Policy Summary */}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <div className="mb-2">
              <span className="text-xs text-gray-600 font-bold">
                Domestic Policy
              </span>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed line-clamp-3 hover:line-clamp-none transition-all duration-300">
              {party.domesticPolicySummary}
            </p>
          </div>

          {/* Running Candidate */}
          {party.runningCandidate && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-3 mt-2">
                {party.runningCandidate.imageUrl ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                    <img
                      src={party.runningCandidate.imageUrl}
                      alt={party.runningCandidate.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border border-gray-200">
                    <span className="text-xs text-gray-500">
                      {party.runningCandidate.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="text-xs font-medium text-gray-800">
                    {party.runningCandidate.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {party.runningCandidate.position}
                  </p>
                </div>
              </div>
            </div>
          )}

          {party.websiteUrl && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a
                href={party.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                Visit official website
              </a>
            </div>
          )}
        </div>

        {/* View Details Button */}
        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-center items-center">
          <button
            onClick={onClick}
            className="w-full text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Info size={16} />
            Click to View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartyCard;
