import React, { useState } from "react";
import PartyCard from "./PartyCard";
import PartyDetailView from "./PartyDetailView";
import { parties } from "@/data/partyData";
import { Search, Info, X, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedParty, setSelectedParty] = useState<string | null>(null);
  const [showRatingInfo, setShowRatingInfo] = useState(false);

  const filteredParties = parties.filter((party) => {
    const matchesSearch = party.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const selectedPartyData = parties.find((party) => party.id === selectedParty);

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
            <p className="text-sm text-gray-500 mt-2 italic">
              For best viewing experience, please view this tool on desktop
            </p>
          </div>
        </div>
      </header>

      {/* Mission Statement Card */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-center mb-2">
            Our Mission
          </h3>
          <p className="text-gray-600 text-center">
            Empowering Muslim Australians with the information they need to make
            informed electoral decisions that align with their values and
            community interests. This tool is not intended to sway political
            opinion in any direction, but rather to present what different
            political parties have already stated publicly, allowing Muslim
            voters to make their own informed decisions before the 2025
            elections.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {selectedParty ? (
          <PartyDetailView
            party={selectedPartyData!}
            onBack={() => setSelectedParty(null)}
          />
        ) : (
          <>
            <div className="max-w-2xl mx-auto mb-8 text-center">
              <h2 className="text-xl font-medium mb-2">
                Compare Political Parties
              </h2>
              <p className="text-gray-600 mb-4">
                See how Australian political parties compare on issues important
                to Muslim voters
              </p>
              {/* Removed reports button */}
            </div>

            <div className="max-w-4xl mx-auto mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search parties..."
                    className="pl-9 border-gray-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={() => setShowRatingInfo(true)}
                  className="text-sm flex items-center gap-1"
                >
                  <Info size={16} />
                  How are ratings calculated?
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredParties.map((party) => (
                <PartyCard
                  key={party.id}
                  party={party}
                  onClick={() => setSelectedParty(party.id)}
                />
              ))}
            </div>

            {filteredParties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No parties match your search criteria
                </p>
              </div>
            )}
          </>
        )}
      </main>

      {/* Rating Information Dialog */}
      <Dialog open={showRatingInfo} onOpenChange={setShowRatingInfo}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold mb-2">
              How Ratings Are Calculated
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Our rating methodology is based on comprehensive analysis of party
              policies, statements, and voting records.
            </DialogDescription>
          </DialogHeader>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="space-y-6 mt-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Muslim Inclusivity Rating
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                This rating evaluates how inclusive and supportive a party is
                toward Muslim Australians and their communities.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-24 font-medium">Excellent</div>
                  <div className="text-sm">
                    Consistently champions Muslim rights, has Muslim
                    representatives, actively fights Islamophobia
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 font-medium">Good</div>
                  <div className="text-sm">
                    Generally supportive of Muslim communities with some
                    positive policies
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 font-medium">Moderate</div>
                  <div className="text-sm">
                    Mixed record with both supportive and problematic positions
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 font-medium">Poor</div>
                  <div className="text-sm">
                    History of policies or rhetoric that negatively affect
                    Muslims
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 font-medium">Extremely Poor</div>
                  <div className="text-sm">
                    Openly hostile platform with explicitly anti-Muslim policies
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Gaza Stance Rating</h3>
              <p className="text-sm text-gray-600 mb-3">
                This rating assesses a party's position on the Israel-Gaza
                conflict, particularly regarding ceasefire calls and
                humanitarian concerns.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-24 font-medium">Excellent</div>
                  <div className="text-sm">
                    Called for immediate ceasefire from the start, condemned
                    civilian casualties
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 font-medium">Good</div>
                  <div className="text-sm">
                    Supports ceasefire and humanitarian aid with balanced
                    approach
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 font-medium">Mixed</div>
                  <div className="text-sm">
                    Initially hesitant but eventually supported ceasefire
                    efforts
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 font-medium">Negative</div>
                  <div className="text-sm">
                    Reluctant to criticize Israel's actions or call for
                    ceasefire
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 font-medium">Very Poor</div>
                  <div className="text-sm">
                    Strongly pro-Israel, opposed ceasefire and humanitarian
                    pauses
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Domestic Policy Information
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                We provide information about each party's domestic policy
                positions without rating them, allowing you to make your own
                assessment based on your priorities.
              </p>
              <p className="text-sm text-gray-600">
                This includes information on economic management, healthcare,
                education, housing affordability, and other key domestic issues
                that may be important to voters.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Our rating methodology is based on comprehensive analysis of
                party platforms, public statements, voting records, and policy
                documents specifically related to Muslim inclusivity and Gaza
                stance. Ratings are updated regularly as new information becomes
                available. Domestic policy information is presented without
                ratings to allow voters to make their own assessments.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            Taken from 2025 publicly available data (news, interviews, articles,
            official websites, etc)
          </p>
          <p className="text-sm text-gray-500 mt-2">
            For all enquiries please email farid@muslimvote.au
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
