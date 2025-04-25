import React from "react";
import { Link } from "react-router-dom";
import { parties } from "@/data/partyData";
import { Button } from "@/components/ui/button";
import { BookOpen, Crown, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ReportsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <img
              src="https://imgur.com/C5uYQou.png"
              alt="Muslim Vote Logo"
              className="h-20 md:h-32 mx-auto"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 text-center">
              2025 Election Reports
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Detailed analysis of Australian political parties' positions on
              issues affecting Muslim Australians and their stance on the
              Israel-Gaza conflict.
            </p>

            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1 mb-8"
            >
              &larr; Back to home
            </Link>
          </div>

          <div className="grid gap-4">
            {parties.map((party) => (
              <div
                key={party.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-2">
                  {party.logo && (
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
                      <img
                        src={party.logo}
                        alt={`${party.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="text-xl font-semibold">{party.name}</h2>
                    <Badge className="mt-1 flex items-center justify-center gap-1 bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200 px-2 py-0.5 h-6 w-28">
                      {party.partyType === "Major" && (
                        <Crown size={12} className="text-amber-500" />
                      )}
                      {party.partyType}{" "}
                      {party.partyType !== "Independent" ? "Party" : ""}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className={`text-sm px-2 py-1 rounded ${
                      party.inclusivityRating === "Excellent"
                        ? "bg-emerald-100 text-emerald-800"
                        : party.inclusivityRating === "Good"
                          ? "bg-green-100 text-green-800"
                          : party.inclusivityRating === "Moderate"
                            ? "bg-blue-100 text-blue-800"
                            : party.inclusivityRating === "Poor"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-red-100 text-red-800"
                    }`}
                  >
                    Muslim Inclusivity: {party.inclusivityRating}
                  </span>
                  <span
                    className={`text-sm px-2 py-1 rounded ${
                      party.gazaStanceRating === "Excellent"
                        ? "bg-emerald-100 text-emerald-800"
                        : party.gazaStanceRating === "Good"
                          ? "bg-green-100 text-green-800"
                          : party.gazaStanceRating === "Mixed"
                            ? "bg-blue-100 text-blue-800"
                            : party.gazaStanceRating === "Negative"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-red-100 text-red-800"
                    }`}
                  >
                    Gaza Stance: {party.gazaStanceRating}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {party.inclusivitySummary}
                </p>

                <Link to={`/reports/${party.id}`}>
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <BookOpen size={16} />
                    View Detailed Party Report
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            Based on 2025 publicly available data (news, interviews, articles,
            official websites, etc)
          </p>
          <p className="text-sm text-gray-500 mt-2">
            For all enquiries please email hello@muslimvote.au
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ReportsPage;
