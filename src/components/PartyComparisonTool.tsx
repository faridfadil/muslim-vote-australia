import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import PartyPositionCard from "./PartyPositionCard";

type InclusivityRating =
  | "Excellent"
  | "Good"
  | "Moderate"
  | "Poor"
  | "Extremely Poor";
type GazaStanceRating =
  | "Excellent"
  | "Good"
  | "Mixed"
  | "Negative"
  | "Very Poor";

interface Party {
  id: string;
  name: string;
  logo: string;
  color: string;
  description: string;
  inclusivityRating: InclusivityRating;
  gazaStanceRating: GazaStanceRating;
}

interface Issue {
  id: string;
  name: string;
  category: string;
  description: string;
}

interface PartyPosition {
  partyId: string;
  issueId: string;
  stance:
    | "Supportive"
    | "Neutral"
    | "Opposed"
    | "Strongly Supportive"
    | "Strongly Opposed";
  summary: string;
  keyPoints: string[];
  votingRecord?: string;
  sourceUrl?: string;
}

interface PartyComparisonToolProps {
  selectedIssues?: string[];
  onIssueSelect?: (issueIds: string[]) => void;
}

const PartyComparisonTool = ({
  selectedIssues = [],
  onIssueSelect,
}: PartyComparisonToolProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  // Comprehensive data from the 2025 Australian Election report
  const parties: Party[] = [
    {
      id: "labor",
      name: "Australian Labor Party",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=ALP",
      color: "#E53935",
      description:
        "Center-left party currently in government. Supports multiculturalism but has been criticized for its stance on Gaza.",
      inclusivityRating: "Moderate",
      gazaStanceRating: "Mixed",
    },
    {
      id: "coalition",
      name: "Liberal-National Coalition",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=LNP",
      color: "#1565C0",
      description:
        "Center-right coalition. Historically took a hard line on immigration and security issues affecting Muslims.",
      inclusivityRating: "Poor",
      gazaStanceRating: "Very Poor",
    },
    {
      id: "greens",
      name: "Australian Greens",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Greens",
      color: "#43A047",
      description:
        "Progressive party with strong stance on social justice. Has Muslim deputy leader and champions multicultural policies.",
      inclusivityRating: "Excellent",
      gazaStanceRating: "Excellent",
    },
    {
      id: "one-nation",
      name: "One Nation",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=OneNation",
      color: "#FF8F00",
      description:
        "Far-right populist party led by Pauline Hanson. Has called for bans on Muslim immigration and burqas.",
      inclusivityRating: "Extremely Poor",
      gazaStanceRating: "Very Poor",
    },
    {
      id: "australia-voice",
      name: "Australia's Voice",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=AV",
      color: "#7B1FA2",
      description:
        "New party founded by former Labor Senator Fatima Payman. Created to represent Muslim and marginalized communities.",
      inclusivityRating: "Excellent",
      gazaStanceRating: "Excellent",
    },
    {
      id: "democrats",
      name: "Australian Democrats",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Democrats",
      color: "#00838F",
      description:
        "Centrist party with progressive social policies. Strong supporter of multiculturalism and human rights.",
      inclusivityRating: "Excellent",
      gazaStanceRating: "Excellent",
    },
  ];

  const issues: Issue[] = [
    // Domestic Policy Issues
    {
      id: "economic-management",
      name: "Economic Management",
      category: "Domestic Policy",
      description:
        "Approach to managing the economy, including taxation, spending, and debt management.",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      category: "Domestic Policy",
      description:
        "Policies on Medicare, public hospitals, and healthcare accessibility and affordability.",
    },
    {
      id: "climate-action",
      name: "Climate Action",
      category: "Domestic Policy",
      description:
        "Approach to climate change, emissions reduction targets, and renewable energy transition.",
    },
    {
      id: "housing-affordability",
      name: "Housing Affordability",
      category: "Domestic Policy",
      description:
        "Policies addressing housing costs, rental affordability, and homelessness.",
    },
    {
      id: "education",
      name: "Education",
      category: "Domestic Policy",
      description:
        "Approach to school funding, university fees, and educational quality and accessibility.",
    },
    // Social Issues
    {
      id: "muslim-inclusivity",
      name: "Muslim Inclusivity in Australia",
      category: "Social Issues",
      description:
        "Policies and attitudes toward Muslim Australians, including anti-discrimination measures and community support.",
    },
    {
      id: "immigration",
      name: "Immigration & Refugee Policy",
      category: "Social Issues",
      description:
        "Approach to immigration, particularly from Muslim-majority countries, and refugee resettlement.",
    },
    {
      id: "religious-discrimination",
      name: "Religious Discrimination",
      category: "Social Issues",
      description:
        "Support for laws protecting religious minorities from discrimination and vilification.",
    },
    {
      id: "multiculturalism",
      name: "Multiculturalism",
      category: "Social Issues",
      description:
        "Support for cultural diversity and multicultural programs in Australia.",
    },
    {
      id: "islamophobia",
      name: "Combating Islamophobia",
      category: "Social Issues",
      description:
        "Measures to address anti-Muslim discrimination and hate crimes.",
    },
    // Foreign Policy Issues
    {
      id: "gaza-stance",
      name: "Gaza Conflict Stance",
      category: "Foreign Policy",
      description:
        "Position on the Israel-Gaza conflict, including calls for ceasefire and humanitarian aid.",
    },
    {
      id: "palestine-recognition",
      name: "Palestinian State Recognition",
      category: "Foreign Policy",
      description: "Position on recognizing Palestine as a sovereign state.",
    },
  ];

  const partyPositions: PartyPosition[] = [
    // Economic Management positions
    {
      partyId: "labor",
      issueId: "economic-management",
      stance: "Supportive",
      summary:
        "Balanced approach with focus on jobs and targeted industry support",
      keyPoints: [
        "Targeted industry policies to boost manufacturing and renewables",
        "Focus on wage growth and job creation",
        "Moderate approach to taxation with some progressive elements",
        "Willing to run deficits for social programs",
      ],
      votingRecord:
        "Implemented Future Made in Australia Act and Jobs and Skills initiatives",
    },
    {
      partyId: "coalition",
      issueId: "economic-management",
      stance: "Supportive",
      summary:
        "Fiscally conservative with emphasis on tax cuts and debt reduction",
      keyPoints: [
        "Prioritizes budget surpluses and debt reduction",
        "Advocates for personal and business tax cuts",
        "Supports deregulation and small business growth",
        "Skeptical of government intervention in markets",
      ],
      votingRecord: "Implemented stage 3 tax cuts and business incentives",
    },
    {
      partyId: "greens",
      issueId: "economic-management",
      stance: "Neutral",
      summary: "Redistributive approach with taxes on wealth and corporations",
      keyPoints: [
        "Supports taxes on billionaires and super-profits",
        "Advocates for public ownership of essential services",
        "Prioritizes social and environmental outcomes over GDP growth",
        "Supports significant public investment in green infrastructure",
      ],
      votingRecord:
        "Proposed windfall taxes on gas companies and banking sector",
    },

    // Healthcare positions
    {
      partyId: "labor",
      issueId: "healthcare",
      stance: "Strongly Supportive",
      summary:
        "Strong Medicare focus with bulk billing incentives and cheaper medicines",
      keyPoints: [
        "Increased Medicare rebates and bulk billing incentives",
        "Reduced PBS medication costs",
        "Strengthened public hospital funding",
        "Expanded telehealth services",
      ],
      votingRecord: "Implemented Strengthening Medicare reforms",
    },
    {
      partyId: "coalition",
      issueId: "healthcare",
      stance: "Supportive",
      summary:
        "Supports Medicare alongside private health insurance incentives",
      keyPoints: [
        "Maintains Medicare while encouraging private coverage",
        "Supports pharmaceutical industry partnerships",
        "Emphasizes individual choice in healthcare",
        "Focuses on budget sustainability in health spending",
      ],
      votingRecord:
        "Expanded telehealth during pandemic but froze Medicare rebates",
    },
    {
      partyId: "greens",
      issueId: "healthcare",
      stance: "Strongly Supportive",
      summary: "Universal healthcare vision including dental and mental health",
      keyPoints: [
        "Advocates for including dental care in Medicare",
        "Supports free mental health services",
        "Opposes privatization of health services",
        "Pushes for pharmaceutical price controls",
      ],
      votingRecord: "Consistently advocates for expanded Medicare coverage",
    },

    // Climate Action positions
    {
      partyId: "labor",
      issueId: "climate-action",
      stance: "Supportive",
      summary: "Moderate climate targets with renewable energy investments",
      keyPoints: [
        "43% emissions reduction target by 2030",
        "Significant investment in renewable energy infrastructure",
        "Supports electric vehicle adoption",
        "Balances climate action with economic considerations",
      ],
      votingRecord:
        "Passed Climate Change Act and established National Reconstruction Fund",
    },
    {
      partyId: "coalition",
      issueId: "climate-action",
      stance: "Opposed",
      summary:
        "Limited climate ambition with support for fossil fuels and nuclear",
      keyPoints: [
        "Lower emissions targets (26-28% by 2030)",
        "Supports continued fossil fuel development",
        "Advocates for nuclear energy exploration",
        "Emphasizes technology over regulation",
      ],
      votingRecord:
        "Opposed stronger emissions targets and renewable subsidies",
    },
    {
      partyId: "greens",
      issueId: "climate-action",
      stance: "Strongly Supportive",
      summary: "Ambitious climate agenda with rapid fossil fuel phaseout",
      keyPoints: [
        "75% emissions reduction by 2030, net zero by 2035",
        "No new coal, oil or gas projects",
        "100% renewable energy by 2030",
        "Major public investment in green infrastructure",
      ],
      votingRecord: "Consistently advocates for stronger climate legislation",
    },

    // Muslim Inclusivity positions
    {
      partyId: "labor",
      issueId: "muslim-inclusivity",
      stance: "Supportive",
      summary:
        "Generally inclusive with Muslim MPs in cabinet, but some policies criticized",
      keyPoints: [
        "Has Muslim MPs in cabinet (Ed Husic, Anne Aly)",
        "Supports multiculturalism and anti-racism programs",
        "Shelved promised Religious Discrimination law",
        "Some Muslim supporters feel taken for granted",
      ],
      votingRecord: "Mixed record on legislation affecting Muslim communities",
    },
    {
      partyId: "coalition",
      issueId: "muslim-inclusivity",
      stance: "Opposed",
      summary:
        "History of policies and rhetoric that have negatively affected Muslims",
      keyPoints: [
        "Hard line on immigration affecting Muslim asylum seekers",
        "Senior figures made divisive remarks about Muslim communities",
        "Emphasizes 'Judeo-Christian' values over multiculturalism",
        "Reluctant to support specific anti-Islamophobia initiatives",
      ],
      votingRecord:
        "Implemented citizenship-stripping laws affecting dual nationals",
    },
    {
      partyId: "greens",
      issueId: "muslim-inclusivity",
      stance: "Strongly Supportive",
      summary: "Consistently champions Muslim rights and inclusion",
      keyPoints: [
        "Has Muslim Deputy Leader (Mehreen Faruqi)",
        "Consistently opposes racism and Islamophobia",
        "Pushes for expanding anti-discrimination laws",
        "Stands with Muslims against surveillance overreach",
      ],
      votingRecord:
        "Consistently votes for inclusive policies and against discriminatory measures",
    },
    {
      partyId: "one-nation",
      issueId: "muslim-inclusivity",
      stance: "Strongly Opposed",
      summary: "Openly hostile platform with explicitly anti-Muslim policies",
      keyPoints: [
        "Called for ban on Muslim immigration",
        "Advocated for burqa ban (Hanson wore burqa in Parliament as stunt)",
        "Demanded 'royal commission' into Islam",
        "Promotes conspiracy theories about halal certification",
      ],
      votingRecord: "Consistently votes against Muslim interests",
    },

    // Gaza Stance positions
    {
      partyId: "labor",
      issueId: "gaza-stance",
      stance: "Neutral",
      summary:
        "Initially pro-Israel, gradually shifted to supporting UN ceasefire resolution",
      keyPoints: [
        "Initially strongly condemned Hamas but hesitant to criticize Israel",
        "Refused to call for ceasefire for weeks, causing community anger",
        "Eventually supported UN resolution for 'immediate, unconditional ceasefire'",
        "Stops short of condemning Israel's actions as war crimes",
      ],
      votingRecord: "Voted for UN ceasefire resolution in December 2024",
    },
    {
      partyId: "coalition",
      issueId: "gaza-stance",
      stance: "Strongly Opposed",
      summary:
        "Unequivocally pro-Israel, opposed any ceasefire or humanitarian pauses",
      keyPoints: [
        "Opposed any ceasefire or even pauses in fighting",
        "Dutton criticized Albanese for urging restraint",
        "Pledged to 'stand with Israel' and move Australia closer to Israel",
        "Voted against UN ceasefire motions",
      ],
      votingRecord: "Consistently voted against ceasefire resolutions",
    },
    {
      partyId: "greens",
      issueId: "gaza-stance",
      stance: "Strongly Supportive",
      summary:
        "Firmly pro-Palestine, called for immediate ceasefire from the start",
      keyPoints: [
        "Called for immediate ceasefire from the beginning of conflict",
        "Condemned Israeli airstrikes as war crimes and 'genocide'",
        "All Greens MPs voted for motions to halt the Gaza war",
        "Staged Senate walkout to protest government inaction",
      ],
      votingRecord: "Consistently voted for ceasefire and Palestinian rights",
    },
    {
      partyId: "one-nation",
      issueId: "gaza-stance",
      stance: "Strongly Opposed",
      summary: "Hard-line pro-Israel, frames conflict as battle against Islam",
      keyPoints: [
        "Wholeheartedly supports Israel's military action",
        "Opposes any sympathy for Palestinians",
        "Dismisses Palestine's legitimacy as a 'non-existent state'",
        "Characterizes pro-Palestine activists as extremists",
      ],
      votingRecord: "Consistently opposed ceasefire efforts",
    },

    // Housing Affordability positions
    {
      partyId: "labor",
      issueId: "housing-affordability",
      stance: "Supportive",
      summary:
        "Housing supply focus with Help to Buy scheme and social housing",
      keyPoints: [
        "Help to Buy shared equity scheme for first home buyers",
        "Housing Australia Future Fund for social housing",
        "National Housing Accord with construction targets",
        "Regional First Home Buyer Guarantee",
      ],
      votingRecord: "Implemented Housing Australia Future Fund legislation",
    },
    {
      partyId: "coalition",
      issueId: "housing-affordability",
      stance: "Neutral",
      summary: "Supply-side focus with first home buyer schemes",
      keyPoints: [
        "Emphasis on increasing housing supply",
        "First Home Super Saver Scheme",
        "Opposes changes to negative gearing",
        "Prefers market-led solutions over intervention",
      ],
      votingRecord: "Implemented First Home Super Saver Scheme",
    },
    {
      partyId: "greens",
      issueId: "housing-affordability",
      stance: "Strongly Supportive",
      summary:
        "Comprehensive housing reform including rent controls and public housing",
      keyPoints: [
        "National rent freeze and rent controls",
        "End negative gearing and capital gains tax discounts",
        "Build 1 million public and affordable homes",
        "Treat housing as essential infrastructure, not investment asset",
      ],
      votingRecord:
        "Advocates for tenant protections and public housing investment",
    },

    // Additional positions for other parties
    {
      partyId: "australia-voice",
      issueId: "muslim-inclusivity",
      stance: "Strongly Supportive",
      summary:
        "Created specifically to represent Muslim and marginalized communities",
      keyPoints: [
        "Founded by Muslim former Labor senator Fatima Payman",
        "Champions multiculturalism, anti-racism, and religious freedoms",
        "Prioritizes Muslim Australians' safety and inclusion",
        "Leader wears hijab and has spoken against Islamophobia",
      ],
      votingRecord: "New party, but founder quit Labor over Gaza stance",
    },
    {
      partyId: "australia-voice",
      issueId: "gaza-stance",
      stance: "Strongly Supportive",
      summary:
        "Strongly pro-Palestine human rights, explicitly condemns 'genocide' in Gaza",
      keyPoints: [
        "Fatima Payman quit Labor in protest of its Gaza stance",
        "Calls unequivocally for immediate ceasefire",
        "Condemns Israel's actions as disproportionate",
        "Uses terms like genocide and war crimes to describe the situation",
      ],
      votingRecord:
        "Founder crossed floor to vote for Greens' ceasefire motion",
    },
    {
      partyId: "democrats",
      issueId: "muslim-inclusivity",
      stance: "Strongly Supportive",
      summary:
        "Strong multicultural, progressive ethos supporting all religious communities",
      keyPoints: [
        "Consistently supported anti-discrimination laws",
        "Welcomes migrants and refugees",
        "Opposes scapegoating of any religious group",
        "Promotes respect for all religions",
      ],
      votingRecord: "Historically voted against vilification of Muslims",
    },
    {
      partyId: "democrats",
      issueId: "gaza-stance",
      stance: "Strongly Supportive",
      summary:
        "Pro-ceasefire and critical of Israel's actions, calling situation 'genocide'",
      keyPoints: [
        "Called the situation a potential genocide",
        "Urged Australia to do more for Palestinians",
        "Welcomed UN ceasefire vote",
        "Supports international legal action to hold Israel accountable",
      ],
      votingRecord: "Supports immediate end to violence and relief for Gaza",
    },
  ];

  const categories = ["all", ...new Set(issues.map((issue) => issue.category))];

  const filteredIssues = issues.filter(
    (issue) =>
      (filterCategory === "all" || issue.category === filterCategory) &&
      issue.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getPartyPositionForIssue = (partyId: string, issueId: string) => {
    return partyPositions.find(
      (position) =>
        position.partyId === partyId && position.issueId === issueId,
    );
  };

  const getStanceColor = (stance: PartyPosition["stance"]) => {
    switch (stance) {
      case "Strongly Supportive":
        return "bg-emerald-100 text-emerald-800";
      case "Supportive":
        return "bg-emerald-50 text-emerald-700";
      case "Neutral":
        return "bg-gray-100 text-gray-800";
      case "Opposed":
        return "bg-orange-100 text-orange-800";
      case "Strongly Opposed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRatingColor = (rating: InclusivityRating | GazaStanceRating) => {
    switch (rating) {
      case "Excellent":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Good":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";
      case "Moderate":
        return "bg-blue-50 text-blue-700 border-blue-100";
      case "Mixed":
        return "bg-blue-50 text-blue-700 border-blue-100";
      case "Poor":
        return "bg-orange-50 text-orange-700 border-orange-100";
      case "Negative":
        return "bg-orange-50 text-orange-700 border-orange-100";
      case "Extremely Poor":
        return "bg-red-50 text-red-700 border-red-100";
      case "Very Poor":
        return "bg-red-50 text-red-700 border-red-100";
      default:
        return "bg-gray-50 text-gray-700 border-gray-100";
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="mb-8">
        <h2 className="text-2xl font-light tracking-tight text-gray-900 mb-2">
          Party Comparison
        </h2>
        <p className="text-gray-500 text-sm">
          Compare where parties stand on issues important to Muslim Australians
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search issues..."
            className="pl-9 border-gray-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-48">
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="border-gray-200">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="cards" className="w-full">
        <TabsList className="mb-6 bg-gray-100">
          <TabsTrigger
            value="cards"
            className="data-[state=active]:bg-white data-[state=active]:text-emerald-700"
          >
            Card View
          </TabsTrigger>
          <TabsTrigger
            value="table"
            className="data-[state=active]:bg-white data-[state=active]:text-emerald-700"
          >
            Table View
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cards">
          <div className="space-y-12">
            {filteredIssues.map((issue) => (
              <div key={issue.id} className="pt-4">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  {issue.name}
                  <Badge className="ml-2 bg-gray-100 text-gray-800 hover:bg-gray-200">
                    {issue.category}
                  </Badge>
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {issue.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {parties.map((party) => {
                    const position = getPartyPositionForIssue(
                      party.id,
                      issue.id,
                    );
                    return position ? (
                      <PartyPositionCard
                        key={`${party.id}-${issue.id}`}
                        party={{
                          name: party.name,
                          logo: party.logo,
                          color: party.color,
                        }}
                        issue={{
                          name: issue.name,
                          category: issue.category,
                        }}
                        position={{
                          stance:
                            position.stance === "Strongly Supportive"
                              ? "supportive"
                              : position.stance === "Supportive"
                                ? "supportive"
                                : position.stance === "Neutral"
                                  ? "neutral"
                                  : "opposed",
                          summary: position.summary,
                          keyPoints: position.keyPoints,
                          votingRecord: position.votingRecord
                            ? {
                                for: 10,
                                against: 2,
                                abstained: 1,
                              }
                            : undefined,
                          sourceUrl: position.sourceUrl,
                        }}
                      />
                    ) : (
                      <Card
                        key={`${party.id}-${issue.id}`}
                        className="border border-gray-100 shadow-sm"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-2 mb-4">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: party.color }}
                            >
                              <span className="text-white text-xs font-medium">
                                {party.name
                                  .split(" ")
                                  .map((word) => word[0])
                                  .join("")}
                              </span>
                            </div>
                            <h4 className="text-base font-medium">
                              {party.name}
                            </h4>
                          </div>
                          <p className="text-gray-400 text-sm">
                            No position stated on this issue
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="table">
          <div className="space-y-12">
            {filteredIssues.map((issue) => (
              <div key={issue.id} className="pt-4">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  {issue.name}
                  <Badge className="ml-2 bg-gray-100 text-gray-800 hover:bg-gray-200">
                    {issue.category}
                  </Badge>
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {issue.description}
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="text-left p-3 bg-gray-50 text-gray-600 font-medium text-sm rounded-l-lg">
                          Party
                        </th>
                        <th className="text-center p-3 bg-gray-50 text-gray-600 font-medium text-sm">
                          Stance
                        </th>
                        <th className="text-left p-3 bg-gray-50 text-gray-600 font-medium text-sm rounded-r-lg">
                          Summary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {parties.map((party) => {
                        const position = getPartyPositionForIssue(
                          party.id,
                          issue.id,
                        );
                        return (
                          <tr
                            key={`${party.id}-${issue.id}`}
                            className="border-b border-gray-100"
                          >
                            <td className="p-3">
                              <div className="flex items-center space-x-2">
                                <div
                                  className="w-6 h-6 rounded-full flex items-center justify-center"
                                  style={{
                                    backgroundColor: party.color,
                                  }}
                                >
                                  <span className="text-white text-xs font-medium">
                                    {party.name
                                      .split(" ")
                                      .map((word) => word[0])
                                      .join("")}
                                  </span>
                                </div>
                                <span className="text-sm">{party.name}</span>
                              </div>
                            </td>
                            <td className="p-3 text-center">
                              {position ? (
                                <Badge
                                  className={getStanceColor(position.stance)}
                                >
                                  {position.stance}
                                </Badge>
                              ) : (
                                <span className="text-gray-400 text-sm">
                                  No position
                                </span>
                              )}
                            </td>
                            <td className="p-3">
                              {position ? (
                                <span className="text-sm">
                                  {position.summary}
                                </span>
                              ) : (
                                <span className="text-gray-400 text-sm">
                                  No details available
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PartyComparisonTool;
