import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Crown,
  ExternalLink,
  Info,
  Star,
  Users,
} from "lucide-react";
import CitationButton from "@/components/CitationButton";
import Timeline from "@/components/Timeline";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { type Party } from "@/data/partyData";

interface PartyDetailViewProps {
  party: Party;
  onBack?: () => void;
}

const PartyDetailView: React.FC<PartyDetailViewProps> = ({
  party,
  onBack = () => {},
}) => {
  const [showReferences, setShowReferences] = useState(false);

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

  const inclusivityNumber = getRatingNumber(party.inclusivityRating);
  const gazaNumber = getRatingNumber(party.gazaStanceRating);
  const globalMuslimNumber = getRatingNumber(
    party.globalMuslimOppressionRating || "Moderate",
  );

  // Timeline events for Labor party
  const laborEvents = [
    {
      date: "2022",
      title: "Muslim Representation",
      description:
        "Appointed Australia's first Muslim federal ministers – Ed Husic and Dr Anne Aly – and welcomed the first hijab-wearing Senator, Fatima Payman",
    },
    {
      date: "Feb 2023",
      title: "Labor Sanctions Myanmar",
      description:
        "Labor government imposed sanctions on Myanmar's generals for Rohingya persecution",
    },
    {
      date: "Dec 2023",
      title: "Gaza Criticism",
      description:
        "Minister Ed Husic decried Israel's Gaza offensive as 'very disproportionate,' saying Palestinian civilians were being 'collectively punished'",
    },
    {
      date: "Late 2023",
      title: "Anti-Islamophobia Envoy",
      description:
        "Appointed Australia's first Special Envoy to Combat Islamophobia",
    },
    {
      date: "Dec 2024",
      title: "UN Ceasefire Support",
      description:
        "Australia's UN ambassador backed resolutions urging an 'immediate, unconditional and permanent ceasefire' in Gaza",
    },
    {
      date: "Feb 2025",
      title: "Uyghur Parliamentary Group",
      description:
        "Labor MP Tony Zappia co-launched the Australian All-Party Parliamentary Group for Uyghurs",
    },
    {
      date: "Mar 2025",
      title: "Rohingya Support",
      description:
        "Provided additional $7 million in humanitarian support for Rohingya refugees",
    },
  ];

  // Timeline events for Coalition party
  const coalitionEvents = [
    {
      date: "Nov 2016",
      title: "Dutton's Comments",
      description:
        "Peter Dutton suggested it was a mistake to resettle Lebanese Muslims in the 1970s, linking that cohort to criminal and terror offenses",
    },
    {
      date: "Mar 2021",
      title: "Blocked Uyghur Motion",
      description:
        "Coalition blocked a Senate motion that would have declared China's treatment of Uyghurs a genocide",
    },
    {
      date: "Oct 2023",
      title: "Gaza Response",
      description:
        "Opposition Leader Dutton unequivocally backed Israel's military response in Gaza",
    },
    {
      date: "Aug 2024",
      title: "Gaza Refugee Opposition",
      description:
        "Opposition MPs argued the government was being too 'generous' in granting visas to Gazans",
    },
    {
      date: "Oct 2024",
      title: "Ceasefire Opposition",
      description:
        "Dutton refused to support a motion calling for a ceasefire in Gaza",
    },
    {
      date: "Feb 2025",
      title: "Uyghur Support",
      description:
        "Liberal MP Andrew Wallace supported the All-Party Parliamentary Group for Uyghurs",
    },
  ];

  // Timeline events for Greens party
  const greensEvents = [
    {
      date: "2017",
      title: "Rohingya Advocacy",
      description:
        "Greens leader Richard Di Natale called for Australia to sanction the Burmese military for Rohingya persecution",
    },
    {
      date: "Sep 2016",
      title: "Hanson Speech Walkout",
      description:
        "Greens senators walked out of the Senate in protest during Hanson's maiden speech that vilified Muslims",
    },
    {
      date: "Oct 2023",
      title: "Gaza Ceasefire Call",
      description:
        "Called for immediate ceasefire in Gaza within 48 hours of October 7 attacks",
    },
    {
      date: "Nov 2023",
      title: "Gaza Protest Walkout",
      description:
        "Greens Senator Faruqi shouted 'Free, free Palestine!' before walking out of Senate during a Gaza ceasefire motion",
    },
    {
      date: "Dec 2023",
      title: "Senate Motion",
      description:
        "Introduced Senate motion for Gaza ceasefire that was defeated",
    },
    {
      date: "Oct 2024",
      title: "Sanctions Protest",
      description:
        "All four Greens Senators held up 'Sanctions Now' placards in the chamber, demanding sanctions on Israel",
    },
  ];

  // Timeline events for Australia Voice party
  const australiaVoiceEvents = [
    {
      date: "Jun 2024",
      title: "Palestine Vote",
      description:
        "Fatima Payman crossed the floor to vote for a Greens motion urging the government to recognize Palestinian statehood",
    },
    {
      date: "Jul 2024",
      title: "Labor Departure",
      description:
        "Payman left the Labor Party, explicitly citing disagreement with the government's stance on the Israel-Gaza war",
    },
    {
      date: "Oct 2024",
      title: "Party Launch",
      description:
        "Launched Australia's Voice party, making clear the party's genesis was in her stance on Gaza",
    },
    {
      date: "Early 2025",
      title: "Uyghur Advocacy",
      description:
        "Played a key role in establishing the cross-party Parliamentary Group for Uyghurs",
    },
  ];

  // Timeline events for One Nation party
  const oneNationEvents = [
    {
      date: "Sep 2016",
      title: "Hanson's Maiden Speech",
      description:
        "Hanson claimed Australia was 'in danger of being swamped by Muslims'",
    },
    {
      date: "Aug 2017",
      title: "Burqa Stunt",
      description:
        "Pauline Hanson wore a burqa in Parliament as a publicity stunt before calling for it to be banned",
    },
    {
      date: "Feb 2023",
      title: "Palestine Denial",
      description:
        "Hanson dismissed Palestine as a 'non-existent state' and characterized pro-Palestinian activists as 'extremists'",
    },
    {
      date: "Oct 2023",
      title: "Pro-Israel Statement",
      description:
        "Issued a statement fully supporting Israel's military actions without acknowledging Palestinian civilian casualties",
    },
    {
      date: "Nov 2023",
      title: "Inflammatory Speech",
      description:
        "Declared in Senate that 'a vote for the Greens is a vote for terrorism'",
    },
    {
      date: "Oct 2023",
      title: "Visa Revocation Call",
      description:
        "Urged the government to revoke visas of Gazans who protested, citing public safety concerns",
    },
  ];

  // Timeline events for Teal Independents
  const tealEvents = [
    {
      date: "Oct 2023",
      title: "Bipartisan Motion",
      description:
        "All Teals supported Parliament's bipartisan motion condemning Hamas's terror attack while also mourning civilian deaths",
    },
    {
      date: "Nov 2023",
      title: "UNRWA Funding",
      description:
        "Kylea Tink coordinated a joint statement by eight crossbench MPs urging restoration of UNRWA funding for Gaza relief",
    },
    {
      date: "Early 2025",
      title: "Uyghur Support",
      description:
        "Teals co-sponsored the formation of the Parliamentary Friendship Group for Uyghurs",
    },
  ];

  // Timeline events for UAP
  const uapEvents = [
    {
      date: "2019",
      title: "Anti-Islam Candidate",
      description:
        "Palmer distanced himself when a UAP candidate was found to have posted anti-Islam content online",
    },
    {
      date: "2022-2023",
      title: "Pro-Israel Voting",
      description:
        "Senator Ralph Babet consistently voted in line with conservative positions supporting Israel",
    },
    {
      date: "Oct 2023",
      title: "Gaza Conflict Stance",
      description:
        "Babet framed the Israel-Hamas war as a battle of Western civilization against terrorism",
    },
  ];

  // Timeline events for KAP
  const kapEvents = [
    {
      date: "2011",
      title: "Katter's Comments",
      description:
        "Bob Katter said he would 'walk backwards to Bourke' if there were any Muslims in his electorate",
    },
  ];

  // Timeline events for JLN
  const jlnEvents = [
    {
      date: "2014",
      title: "Anti-Islam Comments",
      description:
        "Jacqui Lambie called for sharia law supporters to be deported and suggested banning the burqa",
    },
    {
      date: "2018",
      title: "Position Shift",
      description:
        "Acknowledged that painting all Muslims with the same brush was wrong after meeting with Muslim community representatives",
    },
    {
      date: "Oct 2023",
      title: "Gaza Response",
      description:
        "Condemned Hamas attacks but also expressed concern for innocent Palestinians in Gaza",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1 p-0"
            >
              <ArrowLeft size={16} />
              Back
            </Button>
            {/* Removed top button - now only at bottom */}
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

              {/* Political leaning graph - Simplified UI */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-base font-medium">Political Leaning</h2>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto"
                        >
                          <Info size={14} className="text-gray-400" />
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
                <div className="relative h-4 bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 rounded-full overflow-hidden mb-1">
                  <div
                    className="absolute top-1/2 h-3 w-3 bg-white shadow-sm border border-gray-200 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                    style={{ left: `${party.politicalLeaning}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 px-1">
                  <span>Far Left</span>
                  <span>Center-Left</span>
                  <span>Center</span>
                  <span>Center-Right</span>
                  <span>Far Right</span>
                </div>
              </div>

              {/* Stats - Simplified UI */}
              <div className="mb-8">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Muslim Inclusivity
                      </span>
                      <span className="text-sm font-bold">
                        {inclusivityNumber}
                      </span>
                    </div>
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full ${inclusivityNumber >= 80 ? "bg-emerald-500" : inclusivityNumber >= 70 ? "bg-green-500" : inclusivityNumber >= 60 ? "bg-blue-500" : inclusivityNumber >= 50 ? "bg-orange-500" : "bg-red-500"}`}
                        style={{ width: `${inclusivityNumber}%` }}
                      ></div>
                    </div>
                    <div className="mt-1 text-right">
                      <Badge
                        variant={getRatingVariant(party.inclusivityRating)}
                        className="text-xs px-2 py-0.5"
                      >
                        {party.inclusivityRating}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Gaza Stance
                      </span>
                      <span className="text-sm font-bold">{gazaNumber}</span>
                    </div>
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full ${gazaNumber >= 80 ? "bg-emerald-500" : gazaNumber >= 70 ? "bg-green-500" : gazaNumber >= 60 ? "bg-blue-500" : gazaNumber >= 50 ? "bg-orange-500" : "bg-red-500"}`}
                        style={{ width: `${gazaNumber}%` }}
                      ></div>
                    </div>
                    <div className="mt-1 text-right">
                      <Badge
                        variant={getRatingVariant(party.gazaStanceRating)}
                        className="text-xs px-2 py-0.5"
                      >
                        {party.gazaStanceRating}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Global Muslim Response
                      </span>
                      <span className="text-sm font-bold">
                        {globalMuslimNumber}
                      </span>
                    </div>
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full ${globalMuslimNumber >= 80 ? "bg-emerald-500" : globalMuslimNumber >= 70 ? "bg-green-500" : globalMuslimNumber >= 60 ? "bg-blue-500" : globalMuslimNumber >= 50 ? "bg-orange-500" : "bg-red-500"}`}
                        style={{ width: `${globalMuslimNumber}%` }}
                      ></div>
                    </div>
                    <div className="mt-1 text-right">
                      <Badge
                        variant={getRatingVariant(
                          party.globalMuslimOppressionRating || "Moderate",
                        )}
                        className="text-xs px-2 py-0.5"
                      >
                        {party.globalMuslimOppressionRating || "Moderate"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Removed national popularity and win rate stats as requested */}

              {/* Detailed Analysis Sections */}
              <div className="space-y-8 mt-12">
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-medium">Muslim Inclusivity</h2>
                    <Badge
                      variant={getRatingVariant(party.inclusivityRating)}
                      className="text-sm px-3 py-1"
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
                  </div>
                </section>

                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-medium">Gaza Stance</h2>
                    <Badge
                      variant={getRatingVariant(party.gazaStanceRating)}
                      className="text-sm px-3 py-1"
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
                  </div>
                </section>

                <section>
                  <div className="mb-4">
                    <h2 className="text-2xl font-medium">Domestic Policy</h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Presented without rating for unbiased assessment
                    </p>
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
                  </div>
                </section>

                {/* Global Muslim Oppression Response Section */}
                {party.globalMuslimOppressionSummary && (
                  <section>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-medium">
                        Global Muslim Oppression Response
                      </h2>
                      <Badge
                        variant={getRatingVariant(
                          party.globalMuslimOppressionRating || "Moderate",
                        )}
                        className="text-sm px-3 py-1"
                      >
                        {party.globalMuslimOppressionRating || "Moderate"}
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-4 text-lg">
                      {party.globalMuslimOppressionSummary}
                    </p>
                    {party.fullGlobalMuslimOppressionDetails && (
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">
                          Detailed Analysis
                        </h3>
                        <div className="text-gray-600 whitespace-pre-line leading-relaxed">
                          {addCitationReferences(
                            party.fullGlobalMuslimOppressionDetails,
                          )}
                        </div>

                        {/* Timeline of Key Events */}
                        {party.id === "labor" && (
                          <Timeline events={laborEvents} />
                        )}
                        {party.id === "coalition" && (
                          <Timeline events={coalitionEvents} />
                        )}
                        {party.id === "greens" && (
                          <Timeline events={greensEvents} />
                        )}
                        {party.id === "australia-voice" && (
                          <Timeline events={australiaVoiceEvents} />
                        )}
                        {party.id === "one-nation" && (
                          <Timeline events={oneNationEvents} />
                        )}
                        {party.id === "teal-independents" && (
                          <Timeline events={tealEvents} />
                        )}
                        {party.id === "uap" && <Timeline events={uapEvents} />}
                        {party.id === "kap" && <Timeline events={kapEvents} />}
                        {party.id === "jln" && <Timeline events={jlnEvents} />}
                      </div>
                    )}
                  </section>
                )}

                {/* Citations are now only shown in the full report */}

                {/* Official Website */}
                {party.websiteUrl && (
                  <section className="pt-8 border-t border-gray-200">
                    <div className="flex flex-col space-y-4">
                      <a
                        href={party.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink size={16} />
                        Visit Official Website
                      </a>
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PartyDetailView;
