import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { parties } from "@/data/partyData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  Info,
  ChevronUp,
  ChevronDown,
  BookOpen,
  Crown,
  Star,
  Users,
} from "lucide-react";
import CitationButton from "@/components/CitationButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PartyReportPage = () => {
  const { id } = useParams<{ id: string }>();
  const [party, setParty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showReferences, setShowReferences] = useState(false);

  useEffect(() => {
    // Find the party with the matching ID
    const foundParty = parties.find((p) => p.id === id);
    setParty(foundParty);
    setLoading(false);
  }, [id]);

  const toggleReferences = () => {
    setShowReferences(!showReferences);
  };

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

  // Function to find citation references in text and add citation buttons
  const addCitationReferences = (text: string) => {
    if (!party?.citations || party.citations.length === 0) return text;

    // Create a regex pattern that matches citation numbers in square brackets
    const citationPattern = /\[(\d+)\]/g;

    // Split the text by citation references
    const parts = text.split(citationPattern);

    if (parts.length <= 1) return text;

    return (
      <>
        {parts.map((part, index) => {
          // Even indices are text segments
          if (index % 2 === 0) return part;

          // Odd indices are citation numbers
          const citationId = parseInt(part, 10);
          const citation = party.citations?.find(
            (c: any) => c.id === citationId,
          );

          if (!citation) return `[${part}]`;

          return (
            <CitationButton
              key={`citation-${index}`}
              index={citationId}
              url={citation.url}
            />
          );
        })}
      </>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!party) {
    return (
      <div className="min-h-screen bg-gray-50">
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

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Party Not Found</h1>
            <p className="text-gray-600 mb-6">
              The party you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/reports">
              <Button variant="outline">Back to Reports</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const inclusivityNumber = getRatingNumber(party.inclusivityRating);
  const gazaNumber = getRatingNumber(party.gazaStanceRating);
  const domesticNumber = getRatingNumber(party.domesticPolicyRating);

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
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1 p-0"
            >
              <ArrowLeft size={16} />
              Back
            </Button>
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              Home
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Party Header */}
            <div
              className="h-24 w-full"
              style={{ backgroundColor: party.color + "20" }} // Adding transparency
            ></div>

            <div className="p-6">
              {/* Party Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 border-b pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-md overflow-hidden border border-gray-200 -mt-16 bg-white">
                    <img
                      src={party.logo}
                      alt={`${party.name} logo`}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-3xl font-bold">{party.name}</h1>
                      <Badge className="flex items-center justify-center gap-1 bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200 px-2 py-0.5 h-6 w-28">
                        {party.partyType === "Major" && (
                          <Crown size={12} className="text-amber-500" />
                        )}
                        {party.partyType}{" "}
                        {party.partyType !== "Independent" ? "Party" : ""}
                      </Badge>
                    </div>
                    <p className="text-gray-500 mt-1">
                      {party.description || "Australian Political Party"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Party leader image */}
              {party.runningCandidate && (
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                    <img
                      src={party.runningCandidate.imageUrl}
                      alt={party.runningCandidate.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-base font-medium">
                      {party.runningCandidate.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {party.runningCandidate.position}
                    </p>
                  </div>
                </div>
              )}

              {/* Political leaning graph */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-medium">Political Leaning</h2>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto"
                        >
                          <Info size={16} className="text-gray-400" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-xs p-3">
                        <p className="text-xs">
                          Political leaning is measured on a scale from 0 (far
                          left) to 100 (far right) based on party policies and
                          voting records.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden mb-2">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-red-400 w-full"></div>
                  </div>
                  <div
                    className="absolute top-0 h-full w-4 bg-white shadow-md rounded-full transform -translate-x-1/2"
                    style={{ left: `${party.politicalLeaning}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600 px-2 mt-1">
                  <span>Far Left</span>
                  <span>Center-Left</span>
                  <span>Center</span>
                  <span>Center-Right</span>
                  <span>Far Right</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base font-medium">
                      Muslim Inclusivity
                    </span>
                    <span className="text-base font-bold">
                      {inclusivityNumber}
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-1">
                    <div
                      className={`h-full ${inclusivityNumber >= 80 ? "bg-emerald-500" : inclusivityNumber >= 70 ? "bg-green-500" : inclusivityNumber >= 60 ? "bg-blue-500" : inclusivityNumber >= 50 ? "bg-orange-500" : "bg-red-500"}`}
                      style={{ width: `${inclusivityNumber}%` }}
                    ></div>
                  </div>
                  <Badge
                    variant={getRatingVariant(party.inclusivityRating)}
                    className={`text-sm px-3 py-1 mt-1 ${
                      party.inclusivityRating === "Excellent"
                        ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                        : party.inclusivityRating === "Good"
                          ? "bg-green-100 text-green-800 border-green-200"
                          : party.inclusivityRating === "Moderate" ||
                              party.inclusivityRating === "Mixed"
                            ? "bg-blue-100 text-blue-800 border-blue-200"
                            : party.inclusivityRating === "Poor"
                              ? "bg-orange-100 text-orange-800 border-orange-200"
                              : "bg-red-100 text-red-800 border-red-200"
                    }`}
                  >
                    {party.inclusivityRating}
                  </Badge>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base font-medium">Gaza Stance</span>
                    <span className="text-base font-bold">{gazaNumber}</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-1">
                    <div
                      className={`h-full ${gazaNumber >= 80 ? "bg-emerald-500" : gazaNumber >= 70 ? "bg-green-500" : gazaNumber >= 60 ? "bg-blue-500" : gazaNumber >= 50 ? "bg-orange-500" : "bg-red-500"}`}
                      style={{ width: `${gazaNumber}%` }}
                    ></div>
                  </div>
                  <Badge
                    variant={getRatingVariant(party.gazaStanceRating)}
                    className={`text-sm px-3 py-1 mt-1 ${
                      party.gazaStanceRating === "Excellent"
                        ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                        : party.gazaStanceRating === "Good"
                          ? "bg-green-100 text-green-800 border-green-200"
                          : party.gazaStanceRating === "Mixed"
                            ? "bg-blue-100 text-blue-800 border-blue-200"
                            : party.gazaStanceRating === "Negative"
                              ? "bg-orange-100 text-orange-800 border-orange-200"
                              : "bg-red-100 text-red-800 border-red-200"
                    }`}
                  >
                    {party.gazaStanceRating}
                  </Badge>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base font-medium">
                      Domestic Policy
                    </span>
                    <span className="text-base font-bold">
                      {domesticNumber}
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-1">
                    <div
                      className={`h-full ${domesticNumber >= 80 ? "bg-emerald-500" : domesticNumber >= 70 ? "bg-green-500" : domesticNumber >= 60 ? "bg-blue-500" : domesticNumber >= 50 ? "bg-orange-500" : "bg-red-500"}`}
                      style={{ width: `${domesticNumber}%` }}
                    ></div>
                  </div>
                  <Badge
                    variant={getRatingVariant(party.domesticPolicyRating)}
                    className={`text-sm px-3 py-1 mt-1 ${
                      party.domesticPolicyRating === "Excellent"
                        ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                        : party.domesticPolicyRating === "Good"
                          ? "bg-green-100 text-green-800 border-green-200"
                          : party.domesticPolicyRating === "Moderate"
                            ? "bg-blue-100 text-blue-800 border-blue-200"
                            : party.domesticPolicyRating === "Poor"
                              ? "bg-orange-100 text-orange-800 border-orange-200"
                              : "bg-red-100 text-red-800 border-red-200"
                    }`}
                  >
                    {party.domesticPolicyRating}
                  </Badge>
                </div>
              </div>

              {/* Party Popularity and Win Rate */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base font-medium">
                      National Popularity
                    </span>
                    <span className="text-base font-bold">
                      {party.nationalPopularity}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-1">
                    <div
                      className={`h-full ${party.nationalPopularity >= 30 ? "bg-emerald-500" : party.nationalPopularity >= 15 ? "bg-green-500" : party.nationalPopularity >= 5 ? "bg-blue-500" : party.nationalPopularity >= 2 ? "bg-orange-500" : "bg-red-500"}`}
                      style={{ width: `${party.nationalPopularity}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Based on recent polling data
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base font-medium">
                      Historic Win Rate
                    </span>
                    <span className="text-base font-bold">
                      {(party.historicWinRate * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-1">
                    <div
                      className={`h-full ${party.historicWinRate >= 0.4 ? "bg-emerald-500" : party.historicWinRate >= 0.2 ? "bg-green-500" : party.historicWinRate >= 0.1 ? "bg-blue-500" : party.historicWinRate > 0 ? "bg-orange-500" : "bg-gray-400"}`}
                      style={{ width: `${party.historicWinRate * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Percentage of federal elections won
                  </p>
                </div>
              </div>

              {/* Detailed Analysis Sections */}
              <div className="space-y-8 mt-12">
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-medium">Muslim Inclusivity</h2>
                    <Badge
                      variant={getRatingVariant(party.inclusivityRating)}
                      className={`text-sm px-3 py-1 ${
                        party.inclusivityRating === "Excellent"
                          ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                          : party.inclusivityRating === "Good"
                            ? "bg-green-100 text-green-800 border-green-200"
                            : party.inclusivityRating === "Moderate" ||
                                party.inclusivityRating === "Mixed"
                              ? "bg-blue-100 text-blue-800 border-blue-200"
                              : party.inclusivityRating === "Poor"
                                ? "bg-orange-100 text-orange-800 border-orange-200"
                                : "bg-red-100 text-red-800 border-red-200"
                      }`}
                    >
                      {party.inclusivityRating}
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    {party.inclusivitySummary}
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Detailed Analysis
                    </h3>
                    <div className="text-gray-600 whitespace-pre-line leading-relaxed">
                      {addCitationReferences(party.fullInclusivityDetails)}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-md font-medium text-gray-800 mb-3">
                        Key Policies & Actions
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {party.id === "labor" && (
                          <>
                            <li>
                              Appointed Australia's first Muslim federal
                              ministers – Ed Husic and Dr Anne Aly in 2022
                            </li>
                            <li>
                              Welcomed the first hijab-wearing Senator, Fatima
                              Payman
                            </li>
                            <li>
                              Regular engagement with Muslim communities through
                              outreach programs
                            </li>
                            <li>
                              Opposed divisive proposals such as burqa bans
                            </li>
                            <li>
                              Supported Religious Discrimination Bill with
                              amendments to protect minorities
                            </li>
                            <li>
                              Consistently voted to uphold racial hate speech
                              protections that shield Muslim communities
                            </li>
                          </>
                        )}
                        {party.id === "coalition" && (
                          <>
                            <li>
                              Few Muslim parliamentarians in current federal
                              lineup
                            </li>
                            <li>
                              Former Attorney-General George Brandis defended
                              Muslim Australians against discrimination
                            </li>
                            <li>
                              Peter Dutton suggested in 2016 that accepting
                              Lebanese Muslim refugees was a mistake
                            </li>
                            <li>
                              Some Coalition MPs pushed to repeal Section 18C of
                              the Racial Discrimination Act
                            </li>
                            <li>
                              Championed Religious Discrimination Bill in 2021,
                              though it stalled amid controversy
                            </li>
                            <li>
                              Emphasizes "welcome and respect all who integrate
                              and uphold our values" approach
                            </li>
                          </>
                        )}
                        {party.id === "greens" && (
                          <>
                            <li>
                              Senator Mehreen Faruqi serves as Greens Deputy
                              Leader
                            </li>
                            <li>
                              Party policy explicitly opposes Islamophobia and
                              religious discrimination
                            </li>
                            <li>
                              Greens MPs walked out during Pauline Hanson's 2016
                              anti-Muslim speech
                            </li>
                            <li>
                              Led parliamentary condemnation of the Christchurch
                              mosque attacks
                            </li>
                            <li>
                              Consistently advocated for refugee rights,
                              opposing offshore detention
                            </li>
                            <li>
                              Stood against surveillance overreach affecting
                              Muslim communities
                            </li>
                          </>
                        )}
                        {party.id === "one-nation" && (
                          <>
                            <li>
                              Called for a ban on Muslim immigration in their
                              2022 election platform
                            </li>
                            <li>
                              Pauline Hanson wore a burqa in Parliament as a
                              publicity stunt in 2017
                            </li>
                            <li>
                              Claimed Australia was "in danger of being swamped
                              by Muslims" in 2016 Senate speech
                            </li>
                            <li>
                              Promoted conspiracy theories about halal
                              certification funding terrorism
                            </li>
                            <li>
                              Consistently voted against anti-discrimination
                              protections benefiting Muslims
                            </li>
                            <li>
                              No Muslim members in party leadership or among
                              parliamentarians
                            </li>
                          </>
                        )}
                        {party.id === "australia-voice" && (
                          <>
                            <li>
                              Founded by Fatima Payman, a Muslim former Labor
                              senator
                            </li>
                            <li>
                              Explicitly champions multiculturalism and
                              religious freedoms in founding charter
                            </li>
                            <li>
                              "Inclusive Australia" policy platform includes
                              measures to combat Islamophobia
                            </li>
                            <li>
                              Committed to fielding candidates from diverse
                              backgrounds in the 2025 election
                            </li>
                            <li>
                              Advocates for culturally appropriate healthcare
                              and education services
                            </li>
                            <li>
                              Supports stronger hate speech laws and increased
                              funding for Islamic schools
                            </li>
                          </>
                        )}
                        {party.id === "uap" && (
                          <>
                            <li>
                              No routine singling out of Muslims in messaging
                            </li>
                            <li>
                              Senator Ralph Babet has voted with conservative
                              positions on social issues
                            </li>
                            <li>
                              Clive Palmer distanced himself from a candidate's
                              anti-Islam comments in 2019
                            </li>
                            <li>
                              Supported religious freedom bills that would
                              protect Muslims' right to practice
                            </li>
                            <li>No Muslim UAP parliamentarians to date</li>
                            <li>
                              Generally neutral stance with focus on economic
                              issues rather than cultural ones
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-medium">Gaza Stance</h2>
                    <Badge
                      variant={getRatingVariant(party.gazaStanceRating)}
                      className={`text-sm px-3 py-1 ${
                        party.gazaStanceRating === "Excellent"
                          ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                          : party.gazaStanceRating === "Good"
                            ? "bg-green-100 text-green-800 border-green-200"
                            : party.gazaStanceRating === "Mixed"
                              ? "bg-blue-100 text-blue-800 border-blue-200"
                              : party.gazaStanceRating === "Negative"
                                ? "bg-orange-100 text-orange-800 border-orange-200"
                                : "bg-red-100 text-red-800 border-red-200"
                      }`}
                    >
                      {party.gazaStanceRating}
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    {party.gazaSummary}
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Detailed Analysis
                    </h3>
                    <div className="text-gray-600 whitespace-pre-line leading-relaxed">
                      {addCitationReferences(party.fullGazaDetails)}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-md font-medium text-gray-800 mb-3">
                        Key Positions & Statements
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {party.id === "labor" && (
                          <>
                            <li>
                              Initially affirmed Israel's right to self-defense
                              while urging humanitarian restraint
                            </li>
                            <li>
                              Minister Ed Husic publicly criticized Israel's
                              Gaza offensive as "very disproportionate"
                            </li>
                            <li>
                              Gradually shifted to supporting UN ceasefire
                              resolution after internal pressure
                            </li>
                            <li>
                              Introduced special visa program for people fleeing
                              the conflict
                            </li>
                            <li>
                              Penny Wong explicitly stated that "a ceasefire is
                              desperately needed"
                            </li>
                            <li>
                              Advocated for a clear timeline toward Palestinian
                              statehood
                            </li>
                            <li>
                              Joined calls for humanitarian pauses to allow aid
                              into Gaza
                            </li>
                          </>
                        )}
                        {party.id === "coalition" && (
                          <>
                            <li>
                              Unequivocally pro-Israel throughout the Gaza
                              conflict
                            </li>
                            <li>
                              Peter Dutton opposed any ceasefire or humanitarian
                              pauses
                            </li>
                            <li>Voted against UN ceasefire motions</li>
                            <li>
                              Framed the conflict exclusively as Israel fighting
                              terrorism
                            </li>
                            <li>
                              Shadow Foreign Minister characterized
                              pro-Palestinian protests as "extremist"
                            </li>
                            <li>
                              Proposed banning Hamas symbols and prosecuting
                              supporters under terrorism laws
                            </li>
                            <li>
                              James Paterson claimed Labor was being too
                              "generous" in granting visas to Gazans
                            </li>
                            <li>
                              Dutton stated Australia should put "pressure" on
                              the ICC not to pursue Israeli leaders
                            </li>
                          </>
                        )}
                        {party.id === "greens" && (
                          <>
                            <li>
                              Called for immediate ceasefire within 48 hours of
                              October 7 attacks
                            </li>
                            <li>
                              First Australian party to describe Israel's
                              response as "collective punishment"
                            </li>
                            <li>
                              Used terms like "war crimes" and "genocide" to
                              describe Israel's actions
                            </li>
                            <li>
                              Staged a Senate walkout to protest Labor's refusal
                              to call for permanent ceasefire
                            </li>
                            <li>
                              Participated in and supported pro-Palestinian
                              rallies across Australia
                            </li>
                            <li>
                              Called for sanctions against Israel and suspension
                              of defense cooperation
                            </li>
                            <li>
                              Advocated for recognition of Palestinian statehood
                            </li>
                            <li>
                              Pushed for referral to the International Criminal
                              Court
                            </li>
                          </>
                        )}
                        {party.id === "one-nation" && (
                          <>
                            <li>
                              Fully supported Israel's military actions as
                              "necessary self-defense"
                            </li>
                            <li>
                              Consistently opposed any ceasefire proposals
                            </li>
                            <li>
                              Senator Malcolm Roberts called ceasefire efforts
                              "appeasement of terrorists"
                            </li>
                            <li>
                              Pauline Hanson dismissed Palestine as a
                              "non-existent state"
                            </li>
                            <li>
                              Characterized pro-Palestinian activists as
                              "extremists" and "terrorist sympathizers"
                            </li>
                            <li>Called for banning pro-Palestinian protests</li>
                            <li>
                              Proposed cutting all Australian aid to Palestinian
                              territories
                            </li>
                            <li>
                              Urged revoking visas of Gaza supporters who
                              participated in protests
                            </li>
                          </>
                        )}
                        {party.id === "australia-voice" && (
                          <>
                            <li>
                              Formed explicitly in response to the Gaza conflict
                            </li>
                            <li>
                              Founder Fatima Payman cited Labor's Gaza stance as
                              primary reason for resignation
                            </li>
                            <li>
                              First policy statement called for immediate and
                              permanent ceasefire
                            </li>
                            <li>
                              Advocated for unrestricted flow of humanitarian
                              aid
                            </li>
                            <li>
                              Consistently used terms like "genocide" to
                              describe Israel's actions
                            </li>
                            <li>
                              Organized numerous pro-Palestinian rallies across
                              Australia
                            </li>
                            <li>
                              Called for sanctions against Israel and arms
                              embargoes
                            </li>
                            <li>
                              Advocated for immediate recognition of Palestinian
                              statehood
                            </li>
                          </>
                        )}
                        {party.id === "uap" && (
                          <>
                            <li>
                              Senator Ralph Babet has been an outspoken
                              supporter of Israel
                            </li>
                            <li>
                              Consistently voted against motions urging
                              ceasefire or humanitarian focus
                            </li>
                            <li>
                              Framed the conflict as Western civilization
                              against terrorism
                            </li>
                            <li>
                              Criticized Melbourne City Council for debating a
                              Gaza ceasefire
                            </li>
                            <li>
                              Expressed skepticism of reported civilian casualty
                              figures
                            </li>
                            <li>
                              Clive Palmer has deep personal ties to Jewish
                              business partners
                            </li>
                            <li>
                              Argued Australia should be cautious in taking
                              refugees from the conflict
                            </li>
                            <li>
                              Accused mainstream media of bias against Israel
                            </li>
                          </>
                        )}
                      </ul>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-md font-medium text-gray-800 mb-3">
                        Timeline of Key Actions
                      </h4>
                      <div className="space-y-4">
                        {party.id === "labor" && (
                          <>
                            <div className="flex">
                              <div className="font-medium w-24 flex-shrink-0">
                                Oct 2023
                              </div>
                              <div>
                                Initial statement supporting Israel's right to
                                defend itself while urging restraint
                              </div>
                            </div>
                            <div className="flex">
                              <div className="font-medium w-24 flex-shrink-0">
                                Dec 2023
                              </div>
                              <div>
                                Minister Ed Husic publicly criticized Israel's
                                Gaza offensive as "disproportionate"
                              </div>
                            </div>
                            <div className="flex">
                              <div className="font-medium w-24 flex-shrink-0">
                                Dec 2023
                              </div>
                              <div>
                                Australia voted for UN resolution calling for
                                ceasefire
                              </div>
                            </div>
                            <div className="flex">
                              <div className="font-medium w-24 flex-shrink-0">
                                Oct 2024
                              </div>
                              <div>
                                Introduced special visa program for people
                                fleeing the conflict
                              </div>
                            </div>
                            <div className="flex">
                              <div className="font-medium w-24 flex-shrink-0">
                                Late 2024
                              </div>
                              <div>
                                Penny Wong advocated for clear timeline toward
                                Palestinian statehood
                              </div>
                            </div>
                          </>
                        )}
                        {party.id === "coalition" && (
                          <>
                            <div className="flex">
                              <div className="font-medium w-24 flex-shrink-0">
                                Oct 2023
                              </div>
                              <div>
                                Dutton criticized Albanese for urging restraint,
                                called for unequivocal support of Israel
                              </div>
                            </div>
                            <div className="flex">
                              <div className="font-medium w-24 flex-shrink-0">
                                Dec 2023
                              </div>
                              <div>
                                Coalition voted against UN ceasefire motions
                              </div>
                            </div>
                            <div className="flex">
                              <div className="font-medium w-24 flex-shrink-0">
                                Mar 2024
                              </div>
                              <div>
                                Dutton pledged to "stand with Israel" and move
                                Australia closer to Israel in international
                                forums
                              </div>
                            </div>
                            <div className="flex">
                              <div className="font-medium w-24 flex-shrink-0">
                                Aug 2024
                              </div>
                              <div>
                                Opposition called for halting visas to
                                Palestinians fleeing Gaza
                              </div>
                            </div>
                            <div className="flex">
                              <div className="font-medium w-24 flex-shrink-0">
                                Late 2024
                              </div>
                              <div>
                                Criticized Australia's support for UN
                                resolutions critical of Israel's actions
                              </div>
                            </div>
                          </>
                        )}
                        {party.id === "greens" && (
                          <>
                            <div className="flex">
                              <div className="font-medium w-24 flex-shrink-0">
                                Oct 2023
                              </div>
                              <div>
                                Called for immediate ceasefire within 48 hours
                                of October 7 attacks
                              </div>
                            </div>
                            <div className="flex">
                              <div className="font-medium w-24 flex-shrink-0">
                                Nov 2023
                              </div>
                              <div>
                                Greens senators staged walkout during Senate
                                debate on Gaza
                              </div>
                            </div>
                            <div className="flex">
                              <div className="font-medium w-24 flex-shrink-0">
                                Dec 2023
                              </div>
                              <div>
                                Introduced Senate motion for ceasefire that was
                                defeated
                              </div>
                            </div>
                            <div className="flex">
                              <div className="font-medium w-24 flex-shrink-0">
                                Feb 2024
                              </div>
                              <div>
                                Staged Senate walkout to protest Labor's refusal
                                to call for permanent ceasefire
                              </div>
                            </div>
                            <div className="flex">
                              <div className="font-medium w-24 flex-shrink-0">
                                Throughout
                              </div>
                              <div>
                                Participated in pro-Palestinian rallies across
                                Australia
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-medium">Domestic Policy</h2>
                    <Badge
                      variant={getRatingVariant(party.domesticPolicyRating)}
                      className={`text-sm px-3 py-1 ${
                        party.domesticPolicyRating === "Excellent"
                          ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                          : party.domesticPolicyRating === "Good"
                            ? "bg-green-100 text-green-800 border-green-200"
                            : party.domesticPolicyRating === "Moderate"
                              ? "bg-blue-100 text-blue-800 border-blue-200"
                              : party.domesticPolicyRating === "Poor"
                                ? "bg-orange-100 text-orange-800 border-orange-200"
                                : "bg-red-100 text-red-800 border-red-200"
                      }`}
                    >
                      {party.domesticPolicyRating}
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg">
                    {party.domesticPolicySummary}
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Detailed Analysis
                    </h3>
                    <div className="text-gray-600 whitespace-pre-line leading-relaxed">
                      {addCitationReferences(party.fullDomesticPolicyDetails)}
                    </div>

                    {(party.id === "labor" ||
                      party.id === "coalition" ||
                      party.id === "greens" ||
                      party.id === "one-nation") && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="text-md font-medium text-gray-800 mb-3">
                          Policy Priorities by Sector
                        </h4>

                        {party.id === "labor" && (
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium text-gray-700">
                                Economy & Taxation
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>
                                  Income tax cuts in 2025-26, reducing the 19%
                                  tax bracket to 15%
                                </li>
                                <li>
                                  Targeting multinationals and high-balance
                                  superannuation accounts
                                </li>
                                <li>
                                  Expansion of paid parental leave to 26 weeks
                                </li>
                                <li>
                                  Energy bill rebates (around $150) to ease
                                  household costs
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-gray-700">
                                Healthcare
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>
                                  $8.5 billion investment to boost GP
                                  bulk-billing
                                </li>
                                <li>
                                  Expansion of Medicare to cover newer health
                                  services
                                </li>
                                <li>Lowering medication costs</li>
                                <li>
                                  Support for restoring Medicare-subsidized
                                  psychologist visits to 20 sessions
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-gray-700">
                                Climate & Environment
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>
                                  43% emissions reduction target by 2030 and net
                                  zero by 2050
                                </li>
                                <li>
                                  Rewiring the Nation project for electricity
                                  grid investment
                                </li>
                                <li>
                                  Tightened emissions caps on big polluters
                                </li>
                                <li>
                                  No new coal or gas projects unless they fit
                                  within climate targets
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-gray-700">
                                Housing
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>
                                  Housing Australia Future Fund to build 30,000
                                  new social and affordable homes
                                </li>
                                <li>
                                  National target of 1.2 million homes over 5
                                  years
                                </li>
                                <li>
                                  Help to Buy shared equity scheme for
                                  first-home buyers
                                </li>
                                <li>
                                  Stronger renters' rights working with states
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}

                        {party.id === "coalition" && (
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium text-gray-700">
                                Economy & Cost of Living
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>
                                  Slashing fuel excise by 50% to cut petrol
                                  prices by 25 cents per liter
                                </li>
                                <li>
                                  Income-splitting for couples to lower tax for
                                  single-income families
                                </li>
                                <li>
                                  Expanded instant asset write-off up to $30k
                                  for small businesses
                                </li>
                                <li>
                                  Focus on reducing government spending to tame
                                  inflation
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-gray-700">
                                Healthcare
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>
                                  Restoration of Medicare-subsidized psychology
                                  sessions from 10 back to 20 per year
                                </li>
                                <li>
                                  Incentives to increase bulk-billing of GP
                                  visits
                                </li>
                                <li>
                                  Improved rural and regional health services
                                </li>
                                <li>
                                  Making younger Australians' insurance premiums
                                  tax-deductible
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-gray-700">
                                Climate & Energy
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>
                                  Commitment to net-zero by 2050 but critical of
                                  Labor's 43% by 2030 target
                                </li>
                                <li>Removal of moratorium on nuclear energy</li>
                                <li>
                                  Support for new gas projects to ensure energy
                                  security
                                </li>
                                <li>
                                  Focus on "technology, not taxes" approach to
                                  emissions reduction
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-gray-700">
                                Housing
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>
                                  Allowing first-home buyers to use part of
                                  their superannuation for a house deposit
                                </li>
                                <li>
                                  $5 billion fund for housing-enabling
                                  infrastructure
                                </li>
                                <li>
                                  Focus on cutting red tape and speeding up
                                  approvals
                                </li>
                                <li>
                                  Tax incentives for Build-to-Rent developments
                                  to increase rental stock
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}

                        {party.id === "greens" && (
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium text-gray-700">
                                Economic Justice & Tax
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>6% annual wealth tax on billionaires</li>
                                <li>40% super-profits tax on corporations</li>
                                <li>
                                  Minimum 15% tax on multinational companies
                                </li>
                                <li>
                                  Public transport fares reduced to 50¢
                                  nationwide
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-gray-700">
                                Healthcare
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>
                                  Inclusion of dental care in Medicare ("dental
                                  into Medicare")
                                </li>
                                <li>
                                  Unlimited psychologist or counseling sessions
                                  without cost
                                </li>
                                <li>
                                  Medicare coverage for physiotherapy and allied
                                  health
                                </li>
                                <li>
                                  Free GP visits for all by abolishing gap fees
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-gray-700">
                                Education
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>
                                  Free public education from early childhood
                                  through university
                                </li>
                                <li>Wiping all existing student debt</li>
                                <li>
                                  $800 "Back-to-School" allowance for every
                                  student
                                </li>
                                <li>
                                  Boosting funding for public schools to 100% of
                                  required standard
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-gray-700">
                                Housing
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>
                                  Building 1 million public and affordable homes
                                  over 20 years
                                </li>
                                <li>
                                  Nationwide rent freeze for two years followed
                                  by caps on increases
                                </li>
                                <li>Ban on no-grounds evictions</li>
                                <li>
                                  Right for renters to have solar panels
                                  installed with government support
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}

                        {party.id === "one-nation" && (
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium text-gray-700">
                                Government Spending
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>
                                  Slash federal spending by up to $40 billion
                                </li>
                                <li>
                                  Eliminate funding for climate change programs
                                </li>
                                <li>
                                  Cut the National Indigenous Australians Agency
                                </li>
                                <li>
                                  Reform the National Disability Insurance
                                  Scheme (NDIS)
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-gray-700">
                                Cost of Living
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>
                                  Temporary removal of GST on certain groceries
                                </li>
                                <li>Fuel excise cuts to lower prices</li>
                                <li>
                                  Halt closure of coal power plants to ensure
                                  cheap electricity
                                </li>
                                <li>
                                  Invest in new coal-fired power if needed
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-gray-700">
                                Climate & Energy
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>Withdrawal from Paris Agreement</li>
                                <li>Restart coal and gas expansion</li>
                                <li>Opposition to any net-zero target</li>
                                <li>
                                  Focus on "energy self-sufficiency" rather than
                                  emissions reduction
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-gray-700">
                                Immigration & Social Policy
                              </h5>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>
                                  Near-zero net migration for several years
                                </li>
                                <li>
                                  Prioritize migrants from "culturally
                                  compatible" backgrounds
                                </li>
                                <li>
                                  Opposition to transgender rights policies
                                </li>
                                <li>
                                  Support for return of death penalty for
                                  extreme cases
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {(party.id === "labor" ||
                      party.id === "coalition" ||
                      party.id === "greens" ||
                      party.id === "one-nation") && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="text-md font-medium text-gray-800 mb-3">
                          Budget & Economic Impact
                        </h4>
                        <div className="space-y-3 text-gray-600">
                          {party.id === "labor" && (
                            <>
                              <p>
                                Labor's economic approach balances targeted
                                spending with fiscal responsibility. Their tax
                                cuts and social programs are estimated to cost
                                approximately $20 billion over the forward
                                estimates, offset by revenue measures targeting
                                multinational tax avoidance and high-balance
                                superannuation accounts.
                              </p>
                              <p>
                                Independent analysis suggests Labor's climate
                                policies could create up to 600,000 new jobs by
                                2030, particularly in renewable energy sectors,
                                while their housing initiatives aim to address
                                supply constraints in the market.
                              </p>
                            </>
                          )}
                          {party.id === "coalition" && (
                            <>
                              <p>
                                The Coalition's fuel excise cut would cost
                                approximately $3 billion annually in lost
                                revenue. Their economic plan focuses on
                                stimulating growth through tax incentives and
                                deregulation rather than direct government
                                spending.
                              </p>
                              <p>
                                Their approach to energy policy prioritizes
                                affordability and security over emissions
                                reduction, with economic modeling suggesting
                                their policies would result in lower electricity
                                prices in the short term but potentially higher
                                adaptation costs in the future.
                              </p>
                            </>
                          )}
                          {party.id === "greens" && (
                            <>
                              <p>
                                The Greens' ambitious spending programs would be
                                funded by new taxes on billionaires,
                                corporations, and multinationals, which they
                                estimate would raise over $500 billion over the
                                decade. Independent economists have questioned
                                these revenue projections.
                              </p>
                              <p>
                                Their housing policies would represent the
                                largest public housing investment in Australian
                                history, while their free education proposals
                                would eliminate financial barriers to education
                                but require significant budget allocation.
                              </p>
                            </>
                          )}
                          {party.id === "one-nation" && (
                            <>
                              <p>
                                One Nation's proposed $40 billion in spending
                                cuts would significantly reduce government
                                services but potentially allow for tax
                                reductions. Their protectionist economic
                                policies aim to rebuild Australian manufacturing
                                but could increase consumer prices.
                              </p>
                              <p>
                                Their climate skepticism would likely result in
                                continued investment in fossil fuel industries
                                while avoiding costs associated with emissions
                                reduction, though this approach carries
                                long-term economic risks.
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                {/* References Section */}
                {party.citations && party.citations.length > 0 && (
                  <section className="pt-8 border-t border-gray-200">
                    <Button
                      variant="outline"
                      onClick={toggleReferences}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
                    >
                      <BookOpen size={16} />
                      References
                      {showReferences ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </Button>

                    {showReferences && (
                      <div className="mt-4 space-y-4 bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">
                          Sources & Citations
                        </h3>
                        {party.citations.map((citation: any) => (
                          <div
                            key={citation.id}
                            className="text-sm text-gray-600 flex mb-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0 last:mb-0"
                          >
                            <span className="font-medium mr-3 text-gray-800">
                              [{citation.id}]
                            </span>
                            <div>
                              <p className="mb-1">{citation.text}</p>
                              <a
                                href={citation.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                              >
                                <ExternalLink size={12} />
                                {citation.url}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                )}

                {/* Methodology Section */}
                <section className="pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    Methodology
                  </h3>
                  <div className="text-sm text-gray-600">
                    <p className="mb-4">
                      <strong>Historic Win Rate:</strong>{" "}
                      {party.historicWinRateCalculation}
                    </p>
                    <p>
                      <strong>National Popularity:</strong>{" "}
                      {party.nationalPopularityCalculation}
                    </p>
                  </div>
                </section>

                {/* Official Website */}
                {party.websiteUrl && (
                  <section className="pt-8 border-t border-gray-200">
                    <a
                      href={party.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink size={16} />
                      Visit Official Website
                    </a>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Based on 2025 publicly available data (news, interviews, articles,
            official websites, etc)
          </p>
          <p className="text-xs text-gray-400">
            This report is for informational purposes only and does not
            constitute an endorsement of any political party.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PartyReportPage;
