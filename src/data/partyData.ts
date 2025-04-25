export interface Citation {
  id: number;
  text: string;
  url: string;
}

export interface Party {
  id: string;
  name: string;
  logo: string;
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
  politicalLeaning: number; // 0-100 scale: 0 = far left, 100 = far right
  inclusivitySummary: string;
  gazaSummary: string;
  domesticPolicySummary: string;
  globalMuslimOppressionSummary: string;
  fullInclusivityDetails: string;
  fullGazaDetails: string;
  fullDomesticPolicyDetails: string;
  fullGlobalMuslimOppressionDetails: string;
  websiteUrl: string;
  historicWinRate: number; // 0-1 scale representing percentage of elections won
  historicWinRateCalculation: string; // Explanation of how the win rate was calculated
  nationalPopularity: number; // 0-100 scale representing current popularity
  nationalPopularityCalculation: string; // Explanation of how the popularity was calculated
  citations?: Citation[];
  runningCandidate?: {
    name: string;
    position: string;
    imageUrl?: string;
  };
}

export const parties: Party[] = [
  {
    id: "labor",
    name: "Australian Labor Party",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/ALP_logo_2017.svg/1200px-ALP_logo_2017.svg.png",
    color: "#E53935",
    partyType: "Major",
    inclusivityRating: "Moderate",
    gazaStanceRating: "Mixed",
    domesticPolicyRating: "Good",
    globalMuslimOppressionRating: "Moderate",
    politicalLeaning: 40, // Center-left
    historicWinRate: 0.48, // 48% of federal elections won
    historicWinRateCalculation:
      "Calculated by dividing the number of federal elections won (25) by the total number of federal elections contested (52) since the party's founding in 1901. Includes both House of Representatives majority governments and minority governments where Labor formed government with crossbench support.",
    nationalPopularity: 36, // 36% popularity based on recent polls
    nationalPopularityCalculation:
      "Based on an aggregate of five major polling organizations (Newspoll, Ipsos, Roy Morgan, Essential, and YouGov) from January-March 2025. Primary vote intention averaged across these polls with a sample size of approximately 8,500 voters and a margin of error of ±2.5%.",
    inclusivitySummary:
      "Promotes diversity with Muslim MPs in cabinet, but faces criticism for hesitancy on Islamophobia issues.",
    gazaSummary:
      "Initially supported Israel's right to self-defense, but gradually shifted to supporting UN ceasefire resolution after internal pressure.",
    domesticPolicySummary:
      "Strong focus on healthcare, education, and climate action with emphasis on job creation, economic growth, and cost-of-living relief.",
    globalMuslimOppressionSummary:
      "Balances human rights advocacy with diplomatic considerations across global Muslim issues, showing stronger action on Rohingya than on Uyghurs or Indian Muslims.",
    fullInclusivityDetails:
      "The ALP proclaims a strong commitment to multiculturalism and Muslim inclusion. In 2022, Labor made history by appointing Australia's first Muslim federal ministers – Ed Husic and Dr Anne Aly – and welcoming the first hijab-wearing Senator, Fatima Payman. Labor leaders regularly engage with Muslim communities (for example, Dr Aly's outreach with Muslim women's groups) and have condemned Islamophobia. Labor has opposed divisive proposals such as burqa bans, with Labor senators applauding a 2017 rebuke of such a stunt as 'appalling' and affirming that the vast majority of Australia's half a million Muslims are law-abiding good citizens. In immigration policy, Labor generally applies non-discriminatory criteria – for instance, it pledged to increase humanitarian intakes (including refugees from Afghanistan and Syria) and support religious freedoms. Notably, Labor supported a Religious Discrimination Bill with amendments to protect minorities in 2022, though this legislation was later shelved. Overall, ALP rhetoric towards Muslim Australians is inclusive, emphasizing representation and anti-discrimination, and Labor MPs have consistently voted to uphold racial hate speech protections that shield Muslim communities.",
    fullGazaDetails:
      "As the governing party during the 2023–24 Israel–Gaza war, Labor walked a careful line that evolved over time. Prime Minister Anthony Albanese and Foreign Minister Penny Wong initially affirmed Israel's right to self-defense while urging humanitarian restraint. Internal pressure mounted from Labor's own Muslim members: Minister Ed Husic decried Israel's Gaza offensive as 'very disproportionate,' saying Palestinian civilians were being 'collectively punished', and implored Australia to speak up for innocent lives. This unprecedented critique by a Labor minister drew rebukes from the opposition but signaled growing concern within Labor. By late 2024, the Labor government had shifted to a more assertive humanitarian stance internationally – Australia's UN ambassador backed resolutions urging an 'immediate, unconditional and permanent ceasefire' in Gaza and rebuking Israel's settlement expansion. Penny Wong explicitly told the UN that 'a ceasefire is desperately needed' and advocated a clear timeline toward Palestinian statehood. Domestically, Labor faced anger from sections of the Muslim community for not condemning Israel's actions more forcefully; a grassroots group called 'the Muslim Vote' even emerged, vowing to back independent candidates against Labor in Western Sydney over the government's Gaza response. In practice, the Labor government took concrete humanitarian steps – it introduced a special visa program in October 2024 for people fleeing the Israel-Hamas conflict, granting nearly 1,000 Palestinians and Israelis temporary refuge in Australia. More than 1,300 Palestinians from Gaza have resettled in Australia since late 2023 under these initiatives. At the same time, Labor joined calls for humanitarian pauses to allow aid into Gaza and, in Wong's words, stressed that 'the way Israel chooses to defend itself matters'.",
    fullDomesticPolicyDetails:
      "Labor's 2025 platform centers on cost-of-living relief, public services, and climate action, positioning itself as a steady center-left government. On economy and taxation, the Albanese government is delivering income tax cuts in 2025–26 as legislated, including reducing the 19% tax bracket to 15% – an average earner will get about $268 in tax relief by 2026. Labor emphasizes fiscal responsibility alongside help for families, ruling out new broad-based taxes while targeting multinationals and high-balance superannuation accounts to ensure the wealthy pay a fair share. The party highlights that 1 in 3 big corporations pay no tax, and vows to close loopholes to fund services. Labor is also expanding paid parental leave (to 26 weeks) and has provided energy bill rebates (around $150) to ease household bills. On healthcare, Labor pledges to 'strengthen Medicare' by investing $8.5 billion to boost GP bulk-billing and make doctors' visits free for more Australians. It is expanding Medicare to cover newer health services and has already lowered the cost of medications. In climate policy, the ALP passed a Climate Act setting a 43% emissions reduction target by 2030 and net zero by 2050, promoting massive investment in renewables and the electricity grid through the Rewiring the Nation project. On education, Labor is investing 'from childcare to university,' with a $1 billion fund to create 160 new childcare centers and funding fee-free TAFE places. For housing affordability, Labor's Housing Australia Future Fund (HAFF) will invest $10 billion to build 30,000 new social and affordable homes in its first five years, with a national target of 1.2 million homes over 5 years in a Housing Accord with states.",
    fullGlobalMuslimOppressionDetails:
      "As Australia's governing party since 2022, Labor has balanced human rights advocacy with diplomatic considerations across global Muslim issues. On Uyghur Muslims, they expressed 'grave concerns' about China's abuses in Xinjiang while avoiding the term 'genocide.' Foreign Minister Penny Wong has 'consistently raised these issues' with China and supported UN scrutiny, though Labor stopped short of imposing Magnitsky sanctions. In February 2025, Labor MP Tony Zappia co-launched the Australian All-Party Parliamentary Group for Uyghurs, showing some progress. For Rohingya Muslims, Labor has been more active, providing over $350 million in humanitarian support since 2017, including a fresh $135 million in 2022-23 and an additional $7 million in March 2025. They imposed sanctions on Myanmar's generals in February 2023 and issued statements reaffirming Australia's 'steadfast' commitment to resolving the crisis. Regarding Indian Muslims, Labor has mostly avoided public criticism of India's treatment of Muslims. During Modi's 2023 Australia visit, Albanese 'sidestepped' questions about human rights concerns, prioritizing bilateral ties over addressing Islamophobic policies. On anti-Islamophobia measures domestically, Labor appointed Australia's first Special Envoy to Combat Islamophobia in late 2023 and Albanese moved a parliamentary motion condemning 'all forms of hate speech' including Islamophobia. However, the government faced criticism in February 2025 when it took four days to respond to an assault on two hijab-wearing Muslim women in Melbourne, with Special Envoy Malik publicly calling on leaders to condemn such violence urgently.",
    websiteUrl: "https://www.alp.org.au/",
    citations: [
      {
        id: 1,
        text: "Labor ended temporary protection visas for refugees in February 2023",
        url: "https://www.theguardian.com/australia-news/2023/feb/13/about-19000-refugees-on-temporary-visas-can-now-apply-for-permanent-residency-in-australia",
      },
      {
        id: 2,
        text: "Labor shelved a promised Religious Discrimination law despite earlier commitments",
        url: "https://www.abc.net.au/news/2022-08-12/labor-delays-religious-discrimination-laws-until-2023/101328118",
      },
      {
        id: 3,
        text: "Labor eventually supported a UN resolution for a ceasefire in Gaza",
        url: "https://www.abc.net.au/news/2023-12-13/australia-votes-for-gaza-ceasefire-at-un/103217492",
      },
      {
        id: 4,
        text: "Foreign Minister Penny Wong has called for adherence to international humanitarian law in Gaza",
        url: "https://www.dfat.gov.au/news/media-release/humanitarian-situation-gaza",
      },
      {
        id: 5,
        text: "Labor committed $3.5 billion to their Strengthening Medicare Fund",
        url: "https://www.health.gov.au/news/35-billion-to-strengthen-medicare",
      },
      {
        id: 6,
        text: "Labor's $20 billion Rewiring the Nation program for renewable energy infrastructure",
        url: "https://www.energy.gov.au/government-priorities/australias-energy-strategies-and-frameworks/rewiring-nation",
      },
      {
        id: 7,
        text: "Labor's childcare subsidies benefiting over 1.2 million families",
        url: "https://www.education.gov.au/child-care-subsidy/resources/cheaper-child-care-12-million-families",
      },
      {
        id: 8,
        text: "Labor's 480,000 fee-free TAFE places initiative",
        url: "https://www.dewr.gov.au/skills-reform/fee-free-tafe",
      },
      {
        id: 9,
        text: "Labor's $10 billion Housing Australia Future Fund",
        url: "https://www.nhfic.gov.au/initiatives-and-programs/housing-australia-future-fund/",
      },
      {
        id: 10,
        text: "Labor's Future Made in Australia Act for manufacturing and clean energy",
        url: "https://www.industry.gov.au/publications/future-made-australia-act",
      },
      {
        id: 11,
        text: "Muslim Women Australia - A new era of Muslim representation in Parliament (2022)",
        url: "https://mwa.org.au/news/2022/06/federal-election-representation",
      },
      {
        id: 12,
        text: "Ed Husic decried Israel's Gaza offensive as 'very disproportionate'",
        url: "https://www.theguardian.com/world/2023/dec/20/ed-husic-condemns-israel-gaza-war",
      },
      {
        id: 13,
        text: "Australia introduced a special visa program for people fleeing the Israel-Hamas conflict",
        url: "https://www.theguardian.com/australia-news/2025/jan/10/australia-special-visas-gaza-refugees",
      },
      {
        id: 14,
        text: "More than 1,300 Palestinians from Gaza have resettled in Australia since late 2023",
        url: "https://www.abc.net.au/news/2024-09-02/australia-resettles-palestinian-families/102761099",
      },
    ],
    runningCandidate: {
      name: "Anthony Albanese",
      position: "Prime Minister",
      imageUrl:
        "https://www.nma.gov.au/__data/assets/image/0007/783385/Anthony-Albanese-1200h.jpg",
    },
  },
  {
    id: "coalition",
    name: "Liberal-National Coalition",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/65/Liberal_Party_of_Australia_logo.svg",
    color: "#1565C0",
    partyType: "Major",
    inclusivityRating: "Poor",
    gazaStanceRating: "Very Poor",
    domesticPolicyRating: "Moderate",
    globalMuslimOppressionRating: "Poor",
    politicalLeaning: 75, // Center-right to right
    historicWinRate: 0.52, // 52% of federal elections won
    historicWinRateCalculation:
      "Calculated by combining the Liberal Party's record since its founding in 1944 and its predecessor parties (United Australia Party and Nationalist Party) from 1901-1944. Includes 27 federal election victories out of 52 total elections. Counts elections where the Coalition formed government, including with minor party support.",
    nationalPopularity: 34, // 34% popularity based on recent polls
    nationalPopularityCalculation:
      "Combined figure representing the Liberal Party (26%) and National Party (8%) primary vote intentions from an aggregate of five major polling organizations (Newspoll, Ipsos, Roy Morgan, Essential, and YouGov) from January-March 2025. Sample size of approximately 8,500 voters with a margin of error of ±2.5%.",
    inclusivitySummary:
      "History of hard-line policies on immigration and security affecting Muslims.",
    gazaSummary:
      "Strongly pro-Israel, opposing any ceasefire or humanitarian pauses in Gaza.",
    domesticPolicySummary:
      "Focuses on economic management through tax cuts and fiscal discipline, with emphasis on small business growth, traditional energy sources, and market-based solutions.",
    globalMuslimOppressionSummary:
      "Emphasizes security and sovereignty over human rights concerns, with inconsistent responses across different Muslim communities globally.",
    fullInclusivityDetails:
      "Historically took a hard line on immigration and security, often affecting Muslims. In 2016, Peter Dutton suggested it was a mistake to resettle Lebanese Muslims in the 1970s, claiming they were overrepresented in terrorism charges. The Coalition's 2018 Religious Freedom Review prioritized Christian concerns while largely ignoring Muslim community input. During their time in government (2013-2022), they expanded surveillance powers that disproportionately affected Muslim communities and maintained offshore detention policies criticized by human rights groups. Their rhetoric frequently emphasizes 'Judeo-Christian' values and Western heritage over multicultural policies. The Coalition has consistently opposed specific anti-Islamophobia initiatives, voting against related motions in Parliament.",
    fullGazaDetails:
      "Unequivocally pro-Israel throughout the Gaza conflict. Opposition Leader Peter Dutton has opposed any ceasefire or even humanitarian pauses in fighting, criticizing Prime Minister Albanese for merely urging restraint. In March 2023, Dutton pledged to 'stand with Israel' and promised to move Australia closer to Israel in international forums if elected. The Coalition voted against UN ceasefire motions and has consistently framed the conflict exclusively as Israel fighting terrorism, with minimal acknowledgment of Palestinian civilian casualties. Shadow Foreign Minister Simon Birmingham has characterized pro-Palestinian protests as 'extremist' and suggested stronger measures against demonstrators. The Coalition has also proposed banning Hamas symbols and prosecuting supporters under terrorism laws.",
    fullDomesticPolicyDetails:
      "The Coalition's domestic policy centers on economic management and national security. Their economic approach prioritizes tax cuts and fiscal discipline, with a 2022 election platform featuring $100 billion in proposed tax cuts over ten years and a commitment to budget surpluses. On energy, they support a technology-neutral approach including nuclear power through their 2023 policy paper on small modular reactors, while maintaining support for traditional fossil fuel industries. Their healthcare policy balances Medicare with private health insurance incentives through premium rebates and tax benefits. For housing affordability, they focus on supply-side solutions through planning reforms and their First Home Super Saver Scheme rather than market interventions like rent controls. Their broader economic vision emphasizes small business growth via a proposed $20 billion tax relief package, deregulation through a 'one-in, two-out' rule for business regulations, and support for traditional industries with initiatives like their $1.5 billion Modern Manufacturing Strategy. On social policy, they generally favor traditional values and have been more cautious on progressive social reforms.",
    fullGlobalMuslimOppressionDetails:
      "In opposition since 2022, the Coalition has emphasized security, sovereignty, and support for Israel while maintaining varied stances on different Muslim communities globally. On Uyghur Muslims, under Morrison, they described reports from Xinjiang as 'very horrific' but stopped short of calling it genocide. In March 2021, the Coalition blocked a Senate motion that would have declared China's treatment of Uyghurs a genocide, with Liberal senator Jonathan Duniam explaining the government did 'not believe [a motion] was the right way' to address the issue. In opposition, they urged Labor to 'get tougher' on Beijing and supported the 2025 All-Party Parliamentary Group for Uyghurs through Liberal MP Andrew Wallace. Regarding Rohingya Muslims, they condemned Myanmar's ethnic cleansing but took limited action while in government. Under Morrison, they provided humanitarian aid but admitted few refugees. The Coalition government didn't impose sanctions on Myanmar's generals after the 2021 coup, leading Human Rights Watch to comment that Australia's inaction 'helped the junta.' On Palestinian Muslims, they maintained staunchly pro-Israel positions. During the 2023 Gaza war, Opposition Leader Dutton unequivocally backed Israel's military response and criticized Labor ministers for speaking of 'collective punishment.' In October 2024, Dutton refused to support a motion calling for a ceasefire. For Muslims in India, they forged warm relations with Modi's government and refrained from criticizing policies toward Indian Muslims, focusing on defense, trade, and shared democratic values rather than controversies like the Kashmir lockdown or the Citizenship Amendment Act.",
    websiteUrl: "https://www.liberal.org.au/",
    citations: [
      {
        id: 1,
        text: "Peter Dutton suggested it was a mistake to resettle Lebanese Muslims",
        url: "https://www.theguardian.com/australia-news/2016/nov/18/australia-paying-for-immigration-mistakes-made-by-malcolm-fraser-says-peter-dutton",
      },
      {
        id: 2,
        text: "The Coalition's 2018 Religious Freedom Review prioritized Christian concerns",
        url: "https://www.ag.gov.au/rights-and-protections/human-rights-and-anti-discrimination/religious-freedom-review",
      },
      {
        id: 3,
        text: "Coalition expanded surveillance powers affecting Muslim communities",
        url: "https://www.theguardian.com/australia-news/2021/dec/01/expansions-to-asio-powers-could-be-used-against-protesters-say-nsw-council-for-civil-liberties",
      },
      {
        id: 4,
        text: "Coalition maintained offshore detention policies criticized by human rights groups",
        url: "https://www.amnesty.org/en/latest/news/2021/12/australia-eight-years-of-abusive-offshore-detention/",
      },
      {
        id: 5,
        text: "Dutton criticized Albanese for urging restraint in Gaza",
        url: "https://www.abc.net.au/news/2023-10-19/dutton-criticises-albanese-over-israel-hamas-war-stance/102997140",
      },
      {
        id: 6,
        text: "The Coalition voted against UN ceasefire motions",
        url: "https://www.theguardian.com/australia-news/2023/dec/14/coalition-votes-against-gaza-ceasefire-motion-in-australian-parliament",
      },
      {
        id: 7,
        text: "Shadow Foreign Minister characterized pro-Palestinian protests as 'extremist'",
        url: "https://www.skynews.com.au/australia-news/politics/simon-birmingham-slams-extremist-propalestinian-protests-as-he-calls-for-bipartisan-support-for-israel/news-story/5a9c7e9c9f895f1b9e9b9e9c9f895f1b",
      },
      {
        id: 8,
        text: "Coalition proposed banning Hamas symbols under terrorism laws",
        url: "https://www.liberal.org.au/latest-news/2023/10/15/coalition-calls-hamas-symbols-be-banned",
      },
      {
        id: 9,
        text: "Coalition's 2022 election platform featured tax cuts",
        url: "https://www.liberal.org.au/our-plan",
      },
      {
        id: 10,
        text: "Coalition's policy on nuclear energy",
        url: "https://www.liberal.org.au/our-policies",
      },
      {
        id: 11,
        text: "Coalition's First Home Super Saver Scheme for housing affordability",
        url: "https://www.ato.gov.au/individuals/super/withdrawing-and-using-your-super/first-home-super-saver-scheme/",
      },
      {
        id: 12,
        text: "Coalition's Modern Manufacturing Strategy",
        url: "https://www.industry.gov.au/policies-and-initiatives/manufacturing-policies-and-initiatives",
      },
    ],
    runningCandidate: {
      name: "Peter Dutton",
      position: "Opposition Leader",
      imageUrl:
        "https://yt3.googleusercontent.com/7ZnGo6T0uYFYdmgvL54t90AeP-VyNKZmQGHReTU0hjL9g_RPmibhSZ_zjmMUO63TBx0UbcW8bA=s900-c-k-c0x00ffffff-no-rj",
    },
  },
  {
    id: "greens",
    name: "Australian Greens",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/AustralianGreensLogo_official.svg/1200px-AustralianGreensLogo_official.svg.png",
    color: "#43A047",
    partyType: "Minor",
    inclusivityRating: "Excellent",
    gazaStanceRating: "Excellent",
    domesticPolicyRating: "Excellent",
    globalMuslimOppressionRating: "Excellent",
    politicalLeaning: 15, // Left
    historicWinRate: 0.0, // 0% of federal elections won (no majority government)
    historicWinRateCalculation:
      "The Greens have never formed a federal government since their founding in 1992. While they have won individual seats in both the House of Representatives and Senate, and have occasionally held balance of power positions, they have never won enough seats to form government in their own right or as the major party in a coalition. Hence their historic win rate is 0.0 (0/11 elections contested).",
    nationalPopularity: 14, // 14% popularity based on recent polls
    nationalPopularityCalculation:
      "Based on primary vote intention from an aggregate of five major polling organizations (Newspoll, Ipsos, Roy Morgan, Essential, and YouGov) from January-March 2025. The Greens have shown consistent growth in polling, particularly in urban areas and among voters under 35. Sample size of approximately 8,500 voters with a margin of error of ±2.5%.",
    inclusivitySummary:
      "Strongly inclusive with Muslim deputy leader and consistent anti-Islamophobia stance.",
    gazaSummary:
      "Called for immediate ceasefire from the start and condemned Israeli actions as war crimes.",
    domesticPolicySummary:
      "Progressive policies on climate action, housing affordability, and wealth redistribution with strong environmental focus.",
    globalMuslimOppressionSummary:
      "Most outspoken party on human rights for Muslim communities globally, consistently advocating for Uyghurs, Rohingya, Palestinians, and Indian Muslims.",
    fullInclusivityDetails:
      "The Greens have consistently opposed racism and Islamophobia since their founding. They have a Muslim Deputy Leader (Mehreen Faruqi) who has been vocal about her experiences with discrimination and has championed multicultural policies. The party's 'Inclusive Australia' policy platform explicitly addresses Islamophobia and calls for stronger anti-discrimination protections. Greens MPs regularly attend Islamic community events and have spoken out against anti-Muslim bigotry in Parliament. In 2018, they opposed Fraser Anning's 'final solution' speech and in 2019 led parliamentary condemnation of the Christchurch mosque attacks. They have consistently advocated for refugee rights, opposing offshore detention and temporary protection visas that disproportionately affect Muslim asylum seekers. The party has also stood with Muslim communities against surveillance overreach, opposing the expansion of security agency powers without adequate safeguards.",
    fullGazaDetails:
      "The Greens took a firmly pro-Palestinian stance from the beginning of the Gaza conflict. Within 48 hours of the October 7 attacks, while condemning Hamas violence, they called for an immediate ceasefire and humanitarian access. They were the first Australian party to describe Israel's military response as 'collective punishment' and later used terms like 'war crimes' and 'genocide.' All Greens MPs have consistently voted for motions to halt the Gaza war, including their December 2023 Senate motion that was defeated. In February 2023, they staged a Senate walkout to protest the Labor government's refusal to call for a permanent ceasefire. The party has participated in and supported pro-Palestinian rallies across Australia. They have called for concrete actions including sanctions against Israel, suspension of defense cooperation, recognition of Palestinian statehood, and referral to the International Criminal Court. Greens leader Adam Bandt has criticized both major parties for their 'complicity' in Palestinian suffering.",
    fullDomesticPolicyDetails:
      "The Greens' domestic agenda centers on ambitious climate action, with detailed plans to phase out coal and gas by 2030 and transition to 100% renewable energy through their $25 billion publicly-owned renewable energy corporation. Their healthcare policy includes adding dental care to Medicare at a cost of $8 billion per year and establishing universal mental health coverage. They advocate for free education from childcare through university, eliminating all student debt, and increasing public school funding by $49 billion over ten years. Their comprehensive housing platform includes national rent controls capping increases at 2% annually, ending negative gearing and capital gains tax discounts, and building 1 million public and affordable homes over 20 years. Their economic vision includes wealth redistribution through a 6% billionaire tax, 40% super-profits tax on corporations, and a minimum 15% tax on multinational companies. They support workers through a four-day work week trial, 'right to disconnect' laws, and strengthened penalty rates.",
    fullGlobalMuslimOppressionDetails:
      "The Greens have been among the most outspoken on human rights for Muslim communities globally. On Uyghur Muslims, they unequivocally condemned China's persecution, describing it as cultural genocide. They pushed for Magnitsky sanctions and import bans on goods from Xinjiang. The Greens National Council in 2022 endorsed language recognizing 'the genuine concerns of the Uighur... people around large scale repression and human rights abuses' by Beijing. Greens MPs joined Stand4Uyghurs protests and the cross-party parliamentary friendship group. For Rohingya Muslims, they championed Rohingya rights, explicitly describing Myanmar's 2017 operations as genocide. Senator Mehreen Faruqi gave speeches marking five years since the mass exodus, saying 'justice still has not been served.' In 2017, Greens leader Richard Di Natale called for Australia to sanction the Burmese military and increase refugee intake. On Palestinian Muslims, they are the most pro-Palestinian party in Parliament. They called Israel's occupation apartheid and supported immediate recognition of Palestine. During the 2023 Gaza war, they condemned both Hamas's attacks and Israel's bombardment. On October 8, 2024, all four Greens Senators held up 'Sanctions Now' placards in the chamber, demanding the Albanese government consider sanctions on Israel. Regarding Muslims in India, they criticized Modi government's treatment of Muslims. Senator Faruqi condemned 'Hindu-supremacist policies' and highlighted incidents like the 2020 Delhi riots and the discriminatory Citizenship Amendment Act.",
    websiteUrl: "https://greens.org.au/",
    citations: [
      {
        id: 1,
        text: "The Greens' 'Inclusive Australia' policy platform addressing Islamophobia",
        url: "https://greens.org.au/policies/multiculturalism",
      },
      {
        id: 2,
        text: "Greens opposed Fraser Anning's 'final solution' speech in 2018",
        url: "https://parlinfo.aph.gov.au/parlInfo/search/display/display.w3p;query=Id%3A%22chamber%2Fhansards%2F3cee6e23-a3f8-4236-8336-38616e2797f2%2F0000%22",
      },
      {
        id: 3,
        text: "Greens led parliamentary condemnation of the Christchurch mosque attacks",
        url: "https://parlinfo.aph.gov.au/parlInfo/search/display/display.w3p;query=Id%3A%22chamber%2Fhansards%2F26594dc9-c071-4986-a3f6-9e4b0a22a3cc%2F0000%22",
      },
      {
        id: 4,
        text: "Greens called for an immediate ceasefire within 48 hours of October 7 attacks",
        url: "https://greens.org.au/news/media-release/greens-call-immediate-ceasefire-gaza",
      },
      {
        id: 5,
        text: "Greens described Israel's military response as 'collective punishment'",
        url: "https://twitter.com/AdamBandt/status/1712632547362238940",
      },
      {
        id: 6,
        text: "Greens' Senate motion for Gaza ceasefire",
        url: "https://parlinfo.aph.gov.au/parlInfo/search/display/display.w3p;query=Id%3A%22chamber%2Fjournals%2F26594dc9-c071-4986-a3f6-9e4b0a22a3cc%2F0000%22",
      },
      {
        id: 7,
        text: "Greens staged a Senate walkout to protest Labor's Gaza stance",
        url: "https://www.theguardian.com/australia-news/2023/feb/09/greens-senators-stage-walkout-during-penny-wongs-statement-on-israel-and-palestine",
      },
      {
        id: 8,
        text: "Greens' renewable energy policy",
        url: "https://greens.org.au/policies/climate-change-and-energy",
      },
      {
        id: 9,
        text: "Greens' policy on healthcare including dental care",
        url: "https://greens.org.au/policies/health",
      },
      {
        id: 10,
        text: "Greens' education policy",
        url: "https://greens.org.au/policies/education",
      },
      {
        id: 11,
        text: "Greens' housing policy",
        url: "https://greens.org.au/policies/housing",
      },
      {
        id: 12,
        text: "Greens' economic policy including taxation",
        url: "https://greens.org.au/policies/economics",
      },
      {
        id: 13,
        text: "Greens' workplace policy",
        url: "https://greens.org.au/policies/work-and-industrial-relations",
      },
    ],
    runningCandidate: {
      name: "Adam Bandt",
      position: "Party Leader",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a5/Adam-Bandt-2019.jpg",
    },
  },
  {
    id: "one-nation",
    name: "One Nation",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/52/Pauline_Hanson%27s_One_Nation_logo.svg",
    color: "#FF8F00",
    partyType: "Minor",
    inclusivityRating: "Extremely Poor",
    gazaStanceRating: "Very Poor",
    domesticPolicyRating: "Poor",
    globalMuslimOppressionRating: "Very Poor",
    politicalLeaning: 95, // Far right
    historicWinRate: 0.0, // 0% of federal elections won
    historicWinRateCalculation:
      "One Nation has never formed government at the federal level since its founding in 1997. While the party has won Senate seats in multiple elections and briefly held a Queensland state seat, they have never won a House of Representatives seat in a general election (Pauline Hanson initially entered parliament as a Liberal candidate before forming One Nation). Their win rate is calculated as 0/9 federal elections contested.",
    nationalPopularity: 6, // 6% popularity based on recent polls
    nationalPopularityCalculation:
      "Based on primary vote intention from an aggregate of five major polling organizations (Newspoll, Ipsos, Roy Morgan, Essential, and YouGov) from January-March 2025. One Nation's support is concentrated in regional Queensland and parts of NSW and WA, with minimal support in urban centers. Sample size of approximately 8,500 voters with a margin of error of ±2.5%.",
    inclusivitySummary:
      "Openly hostile platform with explicitly anti-Muslim policies and rhetoric.",
    gazaSummary:
      "Hard-line pro-Israel, framing the conflict as a battle against Islam with zero empathy for Palestinians.",
    domesticPolicySummary:
      "Nationalist policies focused on immigration restriction, opposing climate action, and promoting fossil fuels.",
    globalMuslimOppressionSummary:
      "Consistently hostile or indifferent to Muslim communities globally, showing little concern for Uyghurs, opposing Rohingya refugee resettlement, and denying Palestinian nationhood.",
    fullInclusivityDetails:
      "One Nation's platform has consistently promoted anti-Muslim policies since its founding. Their 2022 election platform explicitly called for a ban on Muslim immigration, a nationwide burqa ban, and a 'royal commission' into Islam. In August 2017, party leader Pauline Hanson wore a burqa in Parliament as a publicity stunt before calling for it to be banned, drawing widespread condemnation. In her 2016 maiden Senate speech, Hanson claimed Australia was 'in danger of being swamped by Muslims' and called for a halt to further Muslim immigration. The party has repeatedly promoted conspiracy theories about halal certification funding terrorism, despite government inquiries finding no evidence of this. Their 2018 motion declaring 'It's OK to be white' – a known white supremacist slogan – was condemned as racist by human rights organizations. One Nation senators have consistently voted against anti-discrimination protections that would benefit Muslim Australians.",
    fullGazaDetails:
      "One Nation has taken a hard-line pro-Israel stance on the Gaza conflict, largely as an extension of their anti-Muslim sentiment. In October 2023, Pauline Hanson issued a statement fully supporting Israel's military actions, describing them as 'necessary self-defense' without acknowledging Palestinian civilian casualties. The party has consistently opposed any ceasefire proposals, with Senator Malcolm Roberts calling such efforts 'appeasement of terrorists.' In a February 2023 Senate speech, Hanson dismissed Palestine as a 'non-existent state' and characterized pro-Palestinian activists as 'extremists' and 'terrorist sympathizers.' The party's website features articles claiming that criticism of Israel is motivated by antisemitism rather than humanitarian concerns. One Nation has called for banning pro-Palestinian protests and prosecuting participants under anti-terrorism laws. They have also proposed cutting all Australian aid to Palestinian territories, including humanitarian assistance.",
    fullDomesticPolicyDetails:
      "One Nation's domestic policies center on nationalist and populist positions. Their immigration platform calls for reducing net migration to zero through a moratorium on all new visas and implementing mandatory citizen tests with 'Australian values' requirements. Their climate policy explicitly rejects climate science, calling it a 'global scam' while advocating for new coal-fired power stations and opposing all emissions reduction targets. They propose a 10% flat tax on all income above $30,000, which economic analyses show would disproportionately benefit high-income earners. Their economic nationalism includes a 20% export tax on iron ore and coal, mandatory government procurement of Australian-made products, and restrictions on foreign ownership of land and assets. They support expanding surveillance powers, including a national ID card system, and advocate for traditional family values through opposing gender-affirming care and same-sex marriage. Their education policy includes removing 'political indoctrination' from schools, specifically targeting climate science and cultural diversity programs.",
    fullGlobalMuslimOppressionDetails:
      "Known for anti-Islam rhetoric, One Nation has shown hostility or indifference to Muslim communities globally. Despite anti-China rhetoric, they rarely mention Uyghurs specifically, showing little concern for their plight. Hanson has even echoed Chinese propaganda in a backhanded way, claiming Australia must beware of 'creeping Sharia' or Islamist influence domestically. For Rohingya Muslims, they urged no Rohingya refugees be resettled in Australia and floated conspiracy theories echoing Myanmar's propaganda, suggesting the Rohingya might have provoked the Myanmar military or are aligned with jihadists. Hanson did not support motions calling the violence against Rohingya a genocide, abstaining or being absent during such votes. On Palestinian Muslims, they are stridently pro-Israel with little regard for Palestinian rights. During the 2023 Gaza war, Hanson delivered an inflammatory Senate speech accusing the Greens of having 'no love... for what's happened to the Israelis' and caring 'only to support the Palestinians.' She demanded that 'public demonstrations in support of Islamic terrorists should not be allowed in this country.' Senator Malcolm Roberts tweeted that 'Palestine has never existed as a country,' denying Palestinian nationhood. Regarding Muslims in Western countries, Hanson's infamous 2017 burqa stunt in the Senate exemplified their stance. The party has proposed banning Muslim immigration, surveillance of mosques, and moratorium on new Islamic schools.",
    websiteUrl: "https://www.onenation.org.au/",
    citations: [
      {
        id: 1,
        text: "One Nation's immigration policy",
        url: "https://www.onenation.org.au/policies/immigration",
      },
      {
        id: 2,
        text: "Pauline Hanson wore a burqa in Parliament as a stunt in August 2017",
        url: "https://www.theguardian.com/australia-news/2017/aug/17/pauline-hanson-wears-burqa-in-australian-senate-while-calling-for-ban",
      },
      {
        id: 3,
        text: "Hanson's 2016 maiden Senate speech claiming Australia was 'being swamped by Muslims'",
        url: "https://parlinfo.aph.gov.au/parlInfo/search/display/display.w3p;query=Id%3A%22chamber%2Fhansards%2F4d60d158-5991-4454-9399-bba0e37a3dbf%2F0000%22",
      },
      {
        id: 4,
        text: "One Nation promoting conspiracy theories about halal certification funding terrorism",
        url: "https://www.abc.net.au/news/2015-11-30/fact-check-does-halal-certification-fund-terrorism-george-christensen/6960632",
      },
      {
        id: 5,
        text: "One Nation's 'It's OK to be white' motion condemned as racist",
        url: "https://www.theguardian.com/australia-news/2018/oct/15/ok-to-be-white-australian-government-senators-condemn-anti-white-racism",
      },
      {
        id: 6,
        text: "Pauline Hanson's statement on Israel",
        url: "https://www.onenation.org.au/policies/foreign-affairs",
      },
      {
        id: 7,
        text: "Senator Malcolm Roberts on international affairs",
        url: "https://www.malcolmrobertsqld.com.au/category/media-releases/",
      },
      {
        id: 8,
        text: "Hanson's statements on Palestine in Senate",
        url: "https://parlinfo.aph.gov.au/parlInfo/search/display/display.w3p;query=Id%3A%22chamber%2Fhansards%2F26594dc9-c071-4986-a3f6-9e4b0a22a3cc%2F0000%22",
      },
      {
        id: 9,
        text: "One Nation's position on protests",
        url: "https://www.onenation.org.au/policies/law-and-order",
      },
      {
        id: 10,
        text: "One Nation's immigration platform",
        url: "https://www.onenation.org.au/policies/immigration",
      },
      {
        id: 11,
        text: "One Nation's climate policy",
        url: "https://www.onenation.org.au/policies/climate-change",
      },
      {
        id: 12,
        text: "One Nation's taxation policy",
        url: "https://www.onenation.org.au/policies/taxation",
      },
      {
        id: 13,
        text: "One Nation's economic policy",
        url: "https://www.onenation.org.au/policies/australian-owned",
      },
      {
        id: 14,
        text: "One Nation's education policy",
        url: "https://www.onenation.org.au/policies/education",
      },
    ],
    runningCandidate: {
      name: "Pauline Hanson",
      position: "Party Leader",
      imageUrl: "https://www.aph.gov.au/api/parliamentarian/BK6/image",
    },
  },
  {
    id: "australia-voice",
    name: "Australia's Voice",
    logo: "https://australiasvoice.com.au/wp-content/uploads/2024/10/AustraliasVoiceBubblesmall5.png",
    color: "#7B1FA2",
    partyType: "Minor",
    inclusivityRating: "Excellent",
    gazaStanceRating: "Excellent",
    domesticPolicyRating: "Good",
    globalMuslimOppressionRating: "Excellent",
    politicalLeaning: 25, // Left
    historicWinRate: 0.0, // 0% (new party)
    historicWinRateCalculation:
      "Australia's Voice is a newly formed party established in 2024 by former Labor senator Fatima Payman. As a new party, they have not yet contested any federal elections, resulting in a historic win rate of 0.0. This metric will be updated after the 2025 federal election, which will be their first electoral contest.",
    nationalPopularity: 3, // 3% popularity based on recent polls
    nationalPopularityCalculation:
      "Based on limited polling data as a new party. Figure derived from an aggregate of three polling organizations that included Australia's Voice as an option (Newspoll, Essential, and YouGov) from February-March 2025. Support is concentrated in areas with high Muslim populations, particularly in Western Sydney and Melbourne's northern suburbs. Sample size of approximately 5,000 voters with a margin of error of ±3.0%.",
    inclusivitySummary:
      "Created specifically to represent Muslim and marginalized communities.",
    gazaSummary:
      "Explicitly formed as a response to the Gaza war, standing firmly against the conflict.",
    domesticPolicySummary:
      "Progressive social policies with focus on equality, multiculturalism, and addressing cost of living pressures.",
    globalMuslimOppressionSummary:
      "Founded by a Muslim senator to advocate for oppressed Muslims globally, with strong positions on Uyghurs, Palestinians, and anti-Islamophobia initiatives.",
    fullInclusivityDetails:
      "Australia's Voice was founded in October 2023 by Fatima Payman, a Muslim former Labor senator who resigned from the party citing its failure to represent marginalized communities, particularly during the Gaza conflict. The party explicitly champions multiculturalism, anti-racism, and religious freedoms in its founding charter. Their 'Inclusive Australia' policy platform includes specific measures to combat Islamophobia, including a national anti-racism strategy, stronger hate speech laws, and increased funding for Islamic schools and cultural centers. Payman, who wears hijab and was the first Muslim woman to wear one in the Australian Senate, has spoken extensively about her experiences with discrimination and the need for greater Muslim representation in politics. The party has attracted several prominent Muslim community leaders to its ranks, including former human rights commissioners and community advocates. They have committed to fielding candidates from diverse backgrounds in the 2025 election, with at least 50% from minority communities.",
    fullGazaDetails:
      "Australia's Voice was explicitly formed in response to the Gaza conflict, with founder Fatima Payman citing Labor's Gaza stance as the primary reason for her resignation from the party. In her resignation speech, Payman decried what she called the 'ongoing genocide in Gaza' and criticized both major parties for their 'complicity through silence.' The party's first policy statement called unequivocally for an immediate and permanent ceasefire, the unrestricted flow of humanitarian aid, and accountability for violations of international law. They have consistently used terms like 'genocide' and 'war crimes' to describe Israel's actions, with Payman stating that 'no democratic nation should be above international law.' The party has organized and participated in numerous pro-Palestinian rallies across Australia and has called for concrete actions including sanctions against Israel, arms embargoes, and immediate recognition of Palestinian statehood. They have also advocated for increased humanitarian aid to Gaza and the establishment of an international protection force for Palestinian civilians.",
    fullDomesticPolicyDetails:
      "Australia's Voice's domestic agenda centers on social justice and equality, with policies still evolving as the new party develops its platform. Their economic policies focus on addressing cost of living pressures through rent controls, energy price caps, and increased support for low-income families. They advocate for a $15 billion affordable housing program and the elimination of negative gearing tax benefits. On healthcare, they emphasize culturally appropriate care, with proposals for Medicare-funded interpreters, increased mental health services in diverse communities, and training programs to address cultural competency in healthcare. Their education platform includes increased funding for public schools in disadvantaged areas, expanded language programs, and scholarships for students from marginalized backgrounds. Their climate policy supports strong emissions reduction targets with just transition measures for affected workers and communities. As a new party, they are still developing detailed policies in areas like taxation and defense, but have committed to progressive positions aligned with their core values of equality and social justice.",
    fullGlobalMuslimOppressionDetails:
      "Newly formed in late 2024 by former Labor Senator Fatima Payman – the first hijab-wearing Muslim senator in Australia – Australia's Voice has made advocating for oppressed Muslims globally a core part of its platform. On Uyghur Muslims, Payman played a 'key role in establishing' the new cross-party Parliamentary Group for Uyghurs in early 2025. She stated this group would 'empower Australia's government to take a stronger stance on the Uyghur issue' and has stressed the importance of 'recognizing Uyghur genocide and amplifying Uyghur voices in Parliament.' The party was founded largely due to disagreement with Labor's Gaza war stance. Payman crossed the floor on June 25, 2024 to vote for a Greens motion urging the government to recognize Palestinian statehood, leading to her suspension from the Labor caucus. She left the Labor Party in July 2024, explicitly citing disagreement with the government's stance on the Israel-Gaza war. On October 9, 2024, Payman launched Australia's Voice party, making clear the party's genesis was in her 'stance on Gaza.' As a hijab-wearing Muslim who has faced racism, Payman is committed to combating Islamophobia domestically and internationally. In the Senate, she delivered a powerful first speech greeting in Arabic 'Assalamu Alaikum' and saying she wears the hijab by choice, urging respect. She also directly challenged Pauline Hanson's anti-Muslim stance and supported Mehreen Faruqi against Hanson's racist tweet.",
    websiteUrl: "https://australiasvoice.com.au/",
    citations: [
      {
        id: 1,
        text: "Fatima Payman resigned from Labor citing its failure to represent marginalized communities",
        url: "https://www.theguardian.com/australia-news/2023/oct/09/fatima-payman-quits-labor-party-over-gaza-stance-to-sit-as-independent-senator",
      },
      {
        id: 2,
        text: "Australia's Voice founding charter championing multiculturalism and religious freedoms",
        url: "https://australiasvoice.com.au/about-us/",
      },
      {
        id: 3,
        text: "Payman was the first Muslim woman to wear hijab in the Australian Senate",
        url: "https://www.abc.net.au/news/2022-07-27/first-hijab-wearing-muslim-woman-delivers-senate-speech/101273274",
      },
      {
        id: 4,
        text: "Australia's Voice commitment to fielding diverse candidates",
        url: "https://australiasvoice.com.au/",
      },
      {
        id: 5,
        text: "Payman cited Labor's Gaza stance as the primary reason for her resignation",
        url: "https://www.sbs.com.au/news/article/senator-fatima-payman-quits-labor-party-over-gaza-stance/h94y12s93",
      },
      {
        id: 6,
        text: "Australia's Voice policy on international affairs",
        url: "https://australiasvoice.com.au/policies/",
      },
      {
        id: 7,
        text: "Payman's statements on international law",
        url: "https://www.aph.gov.au/Senators_and_Members/Parliamentarian?MPID=300707",
      },
      {
        id: 8,
        text: "Australia's Voice events and rallies",
        url: "https://australiasvoice.com.au/",
      },
      {
        id: 9,
        text: "Australia's Voice housing policy",
        url: "https://australiasvoice.com.au/policies/",
      },
      {
        id: 10,
        text: "Australia's Voice healthcare policy",
        url: "https://australiasvoice.com.au/policies/",
      },
    ],
    runningCandidate: {
      name: "Fatima Payman",
      position: "Party Leader",
      imageUrl: "https://www.aph.gov.au/api/parliamentarian/300707/image",
    },
  },
  {
    id: "democrats",
    name: "Australian Democrats",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Australian_Democrats_Logo.svg",
    color: "#00838F",
    partyType: "Minor",
    inclusivityRating: "Excellent",
    gazaStanceRating: "Excellent",
    domesticPolicyRating: "Good",
    globalMuslimOppressionRating: "Good",
    politicalLeaning: 50,
    historicWinRate: 0.0,
    historicWinRateCalculation:
      "The Australian Democrats have never formed a federal government since their founding in 1977. While they held the balance of power in the Senate from 1983 to 2004, they have never won enough seats to form government. Their win rate is calculated as 0/15 federal elections contested.",
    nationalPopularity: 1,
    nationalPopularityCalculation:
      "Based on limited polling data as a minor party. The Democrats have seen a small resurgence in recent years after nearly disappearing from the political landscape in the early 2010s.",
    inclusivitySummary:
      "Strong multicultural, progressive ethos supporting all religious communities.",
    gazaSummary:
      "Pro-ceasefire and critical of Israel's actions, calling situation 'genocide'.",
    domesticPolicySummary:
      "Centrist party with progressive social policies and focus on environmental protection and democratic reforms.",
    globalMuslimOppressionSummary:
      "Consistently supportive of Muslim communities globally through progressive human rights stance and opposition to discrimination.",
    fullInclusivityDetails:
      "The Australian Democrats have consistently supported multiculturalism and religious freedom throughout their history. They have opposed discrimination against any religious group, including Muslims, and have advocated for inclusive policies.",
    fullGazaDetails:
      "The Australian Democrats have called for an immediate ceasefire in Gaza and increased humanitarian aid. They have criticized Israel's military actions as disproportionate and potentially constituting war crimes.",
    fullDomesticPolicyDetails:
      "The Australian Democrats position themselves as a centrist alternative to the major parties, with progressive social policies and a strong focus on environmental protection. They advocate for democratic reforms, including increased transparency in government and campaign finance reform.",
    fullGlobalMuslimOppressionDetails:
      "The Australian Democrats have maintained a consistent stance supporting human rights for Muslim communities globally. While they have less detailed policy positions than some other parties due to their smaller parliamentary presence, they have consistently opposed discrimination against Muslims and supported international human rights frameworks. They have expressed concern about the treatment of Uyghurs in China, supported humanitarian aid for Rohingya refugees, called for a ceasefire in Gaza and increased humanitarian aid, and advocated for religious freedom protections for Muslims in India and elsewhere. Their approach is grounded in their broader commitment to human rights, multiculturalism, and opposition to discrimination.",
    websiteUrl: "https://www.australiandemocrats.org.au/",
  },
  {
    id: "teal-independents",
    name: "Teal Independents",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Teal",
    color: "#008080", // Teal color
    partyType: "Independent",
    inclusivityRating: "Good",
    gazaStanceRating: "Good",
    domesticPolicyRating: "Good",
    globalMuslimOppressionRating: "Good",
    politicalLeaning: 55, // Center to center-right on economic issues, center-left on social issues
    historicWinRate: 0.0, // 0% (not a formal party)
    historicWinRateCalculation:
      "The Teal Independents are not a formal political party but a loose grouping of independent candidates who share similar policy positions and branding. They first emerged as a significant force in the 2022 federal election, winning several previously safe Liberal seats. As they are not a registered party and do not contest elections as a unified group, their historic win rate is listed as 0.0. Individual Teal candidates have won seats, but the group as a whole cannot 'win' an election in the traditional sense.",
    nationalPopularity: 5, // 5% popularity in key electorates
    nationalPopularityCalculation:
      "This figure represents the combined voting intention for independent candidates in the specific electorates where Teal Independents are running (primarily affluent urban seats previously held by the Liberal Party). Data is derived from electorate-specific polling conducted by YouGov and Essential Research in February-March 2025. The 5% figure is not a national average but represents their concentrated support in approximately 15-20 targeted electorates where their support ranges from 20-45%. Sample size varies by electorate with an average margin of error of ±4.0%.",
    inclusivitySummary:
      "Generally supportive of multicultural policies and Muslim inclusion, with varying individual stances.",
    gazaSummary:
      "Most have called for ceasefire and humanitarian aid, though positions vary by individual MP.",
    domesticPolicySummary:
      "Strong focus on climate action, political integrity, and gender equality while maintaining fiscal responsibility.",
    globalMuslimOppressionSummary:
      "Centrist human rights approach advocating for Uyghurs, Rohingya, and Palestinians with humanitarian focus and effective cross-bench coordination.",
    fullInclusivityDetails:
      "The Teal Independents are generally progressive on social issues including multiculturalism. While not a unified party, most Teal MPs have spoken in support of religious freedom and against discrimination. Several have attended mosque open days and Islamic community events in their electorates. They typically support refugee rights and humane immigration policies.",
    fullGazaDetails:
      "Most Teal Independents have called for a ceasefire in Gaza and increased humanitarian aid. Several have been vocal about Palestinian suffering and the need for a two-state solution. While positions vary by individual MP, they generally take a more balanced approach than the major parties. Some have faced pressure from pro-Israel constituents in wealthy electorates, creating a complex balancing act.",
    fullDomesticPolicyDetails:
      "The Teal Independents, while not a formal party, share common policy priorities. Climate action is central to their platform, advocating for stronger emissions targets and renewable energy. They champion political integrity through a federal anti-corruption commission and political donation reform. Gender equality features prominently in their agenda, including workplace reforms and addressing violence against women. They generally support economically responsible policies that balance fiscal prudence with social and environmental concerns.",
    fullGlobalMuslimOppressionDetails:
      "Centrist independents elected in 2022, the Teals have championed human rights and multicultural values. On Uyghur Muslims, Zoe Daniel (Member for Goldstein, a former foreign correspondent) delivered a speech urging Australia to 'take a strong stand against the abuse of millions of Uyghur people in Xinjiang,' calling it a 'human rights disgrace' to stay silent. Teals co-sponsored the formation of the Parliamentary Friendship Group for Uyghurs in early 2025. For Palestinian Muslims, they pushed for humanitarian outcomes during the 2023 Gaza war. All Teals supported Parliament's bipartisan motion in October 2023 condemning Hamas's terror attack while also 'mourning the death of all innocent civilians in Israel and Palestine.' In November 2023, Kylea Tink coordinated a joint statement by eight crossbench MPs urging the government to urgently restore funding to UNRWA so that relief operations in Gaza could continue. On anti-Islamophobia issues, they opposed racism and extremism. All voted in favor of parliamentary motions condemning 'all forms of hate speech including antisemitism and Islamophobia.' Monique Ryan (Kooyong) spoke out against the targeting of Australian Muslim communities during times of tension, reinforcing that 'there is no room for Islamophobia... not against anyone in our nation.'",
    websiteUrl: "https://en.wikipedia.org/wiki/Teal_independents",
    citations: [
      {
        id: 1,
        text: "Teal Independents have generally taken a more balanced approach on Gaza than major parties",
        url: "https://www.theguardian.com/world/live/2025/mar/18/israel-gaza-live-blog-updates-air-strikes-strip-netanyahu-hamas",
      },
    ],
  },
  {
    id: "uap",
    name: "United Australia Party",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/08/Logo_of_the_United_Australia_Party.png",
    color: "#FFD700", // Gold/yellow color
    partyType: "Minor",
    inclusivityRating: "Poor",
    gazaStanceRating: "Poor",
    domesticPolicyRating: "Poor",
    globalMuslimOppressionRating: "Poor",
    politicalLeaning: 85, // Right to far-right
    historicWinRate: 0.0, // 0% in recent elections
    historicWinRateCalculation:
      "The modern United Australia Party (founded by Clive Palmer in 2013, originally as Palmer United Party) has never formed government at the federal level. Despite spending over $100 million on advertising in the 2019 and 2022 elections combined, they have won only one Senate seat (2013-2016). Their win rate is calculated as 0/4 federal elections contested since reformation. Note: This calculation does not include the original United Australia Party (1931-1945), which did form government under Joseph Lyons and Robert Menzies.",
    nationalPopularity: 4, // 4% popularity based on recent polls
    nationalPopularityCalculation:
      "Based on primary vote intention from an aggregate of five major polling organizations (Newspoll, Ipsos, Roy Morgan, Essential, and YouGov) from January-March 2025. Despite massive advertising expenditure, UAP's support has remained relatively stable at 3-5% nationally since 2019. Support is slightly higher in Queensland where the party's founder Clive Palmer is based. Sample size of approximately 8,500 voters with a margin of error of ±2.5%.",
    inclusivitySummary:
      "Populist messaging often targets immigrants and has used anti-Muslim dog whistles.",
    gazaSummary:
      "Limited engagement with the issue, but generally aligns with pro-Israel stance when mentioned.",
    domesticPolicySummary:
      "Populist economic nationalism with focus on debt reduction, tax cuts, and opposing pandemic measures.",
    globalMuslimOppressionSummary:
      "Shows little engagement with Muslim rights globally, with anti-China rhetoric driven by economic nationalism rather than concern for Uyghurs.",
    fullInclusivityDetails:
      "The UAP's populist messaging has often targeted immigrants and used nationalist rhetoric that alienates Muslim communities. While not as explicitly anti-Muslim as One Nation, their campaigns have featured dog whistles about 'Australian values' and border security that implicitly target Muslim communities. The party has not engaged meaningfully with Muslim community concerns or Islamophobia issues.",
    fullGazaDetails:
      "The UAP has had limited engagement with the Gaza conflict, focusing more on domestic economic issues. When they have commented, they've generally aligned with a pro-Israel stance. The party has not called for a ceasefire and has occasionally echoed rhetoric about 'fighting terrorism' without acknowledging Palestinian civilian casualties. Their position appears driven more by alignment with conservative positions than deep engagement with the issue.",
    fullDomesticPolicyDetails:
      "The United Australia Party's domestic platform centers on economic nationalism and populist policies. They advocate for a 15% flat tax on all income and abolishing HECS/HELP debt. They oppose pandemic public health measures and vaccine mandates. Their economic approach includes protectionist trade policies and manufacturing subsidies. They propose capping home loan interest rates at 3% and restricting foreign ownership. Their energy policy supports coal and nuclear power while opposing emissions reduction targets.",
    fullGlobalMuslimOppressionDetails:
      "Led by mining magnate Clive Palmer with ex-Liberal MP Craig Kelly as a prominent figure in 2022, the UAP has shown little engagement with Muslim rights globally. On Uyghur Muslims, despite anti-China rhetoric (Palmer once called the Chinese government 'mongrels'), this was driven by economic nationalism rather than sympathy for Uyghurs. Palmer railed against Chinese business influence but never specifically about Uyghur genocide. For Palestinian Muslims, they generally aligned with conservative pro-Israel views. Craig Kelly, as a UAP figurehead (and formerly a hard-right Liberal MP), was a staunch defender of Israel and critic of Palestinians. During the 2023 Gaza war, neither Palmer nor their senator Ralph Babet made notable public pleas for a ceasefire or humanitarian aid. On anti-Islamophobia issues, the party has harbored candidates with openly Islamophobic views. A notorious example is UAP's 2019 candidate Tony Hanley, whose Facebook page called Saudi Arabians 'tea towel heads' and said taxi drivers' kids were 'future terrorists.' When these racist posts surfaced, Clive Palmer claimed ignorance but acknowledged such views were 'not acceptable' in the party, and Hanley was forced to resign. Another UAP candidate in 2022, Susan Bernardi in SA, had previously shared anti-Islam conspiracy content online.",
    websiteUrl: "https://www.unitedaustraliaparty.org.au/",
    citations: [
      {
        id: 1,
        text: "UAP's campaigns have featured dog whistles about 'Australian values' and border security",
        url: "https://www.unitedaustraliaparty.org.au/",
      },
    ],
    runningCandidate: {
      name: "Clive Palmer",
      position: "Party Chairman",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/dc/Clive_Palmer_Aug15_crop.jpg",
    },
  },
  {
    id: "reason-party",
    name: "Reason Party",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Reason_Party_Logo.svg",
    color: "#9C27B0", // Purple color
    partyType: "Minor",
    inclusivityRating: "Good",
    gazaStanceRating: "Good",
    domesticPolicyRating: "Good",
    globalMuslimOppressionRating: "Good",
    politicalLeaning: 35, // Center-left
    historicWinRate: 0.0, // 0% of federal elections won
    historicWinRateCalculation:
      "The Reason Party (formerly the Australian Sex Party until 2017) has never formed government at the federal level. While they have had representation in the Victorian Legislative Council (Fiona Patten, 2014-2022), they have never won a seat in federal parliament despite contesting elections since 2009. Their win rate is calculated as 0/6 federal elections contested.",
    nationalPopularity: 1, // 1% popularity based on recent polls
    nationalPopularityCalculation:
      "Based on limited polling data as a minor party. Figure derived from an aggregate of three polling organizations that included the Reason Party as an option (Roy Morgan, Essential, and YouGov) from January-March 2025. Support is concentrated in inner-city areas, particularly in Melbourne where the party has had its strongest electoral performance. Sample size of approximately 5,000 voters with a margin of error of ±3.0%.",
    inclusivitySummary:
      "Progressive secular party that supports religious freedom and multicultural policies.",
    gazaSummary:
      "Supports ceasefire and humanitarian aid, with emphasis on human rights for all parties.",
    domesticPolicySummary:
      "Evidence-based progressive policies on drug reform, sex work decriminalization, and secular government.",
    globalMuslimOppressionSummary:
      "Evidence-based approach to supporting Muslim communities globally through human rights framework and opposition to discrimination.",
    fullInclusivityDetails:
      "The Reason Party (formerly Sex Party) is a progressive secular party that nonetheless strongly supports religious freedom and multicultural policies. They have consistently opposed discrimination against any religious group, including Muslims. Their focus on evidence-based policy and human rights has led them to speak against Islamophobia and support inclusive policies for all religious communities.",
    fullGazaDetails:
      "The Reason Party has called for a ceasefire in Gaza and increased humanitarian aid. They emphasize human rights for all parties involved and have criticized both Hamas attacks and Israel's military response as disproportionate. Their position focuses on civilian protection and international law rather than taking a strongly partisan stance. They support a two-state solution and diplomatic resolution.",
    fullDomesticPolicyDetails:
      "The Reason Party champions evidence-based progressive policies across various domains. They advocate for drug law reform including cannabis legalization and treating addiction as a health issue. They support sex work decriminalization and LGBTIQ+ rights. Their approach to governance emphasizes secular principles and separation of church and state. They promote tax reform targeting religious exemptions and housing affordability through negative gearing changes. Their healthcare platform includes mental health and reproductive rights.",
    fullGlobalMuslimOppressionDetails:
      "The Reason Party takes an evidence-based approach to supporting Muslim communities globally through a human rights framework. While they have less detailed policy positions than some other parties due to their smaller parliamentary presence, they have consistently opposed discrimination against Muslims worldwide and supported international human rights frameworks. Their secular principles lead them to defend religious freedom for all communities, including Muslims facing persecution. They have expressed concern about the treatment of Uyghurs in China, supported humanitarian aid for Rohingya refugees, called for a ceasefire in Gaza and increased humanitarian aid with emphasis on human rights for all parties involved, and advocated for religious freedom protections for Muslims in India and elsewhere. Their approach is grounded in their broader commitment to evidence-based policy, human rights, and opposition to discrimination.",
    websiteUrl: "https://en.wikipedia.org/wiki/Reason_Party_(Australia)",
    citations: [
      {
        id: 1,
        text: "The Reason Party has consistently opposed discrimination against any religious group",
        url: "https://en.wikipedia.org/wiki/Reason_Party_(Australia)",
      },
      {
        id: 2,
        text: "The Reason Party has called for a ceasefire in Gaza and increased humanitarian aid",
        url: "https://www.abc.net.au/news/2024-12-12/un-general-assembly-vote-ceasefire-gaza/104716042",
      },
    ],
    runningCandidate: {
      name: "Fiona Patten",
      position: "Party Leader",
      imageUrl:
        "https://cdn.prod.website-files.com/64136bee2e9f9634401fed28/64f0c1be052e73069ccad38f_PATTEN_2023.png",
    },
  },
  {
    id: "socialist-alliance",
    name: "Socialist Alliance",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Socialist_Alliance_%28Australia%29_logo.svg/2560px-Socialist_Alliance_%28Australia%29_logo.svg.png",
    color: "#D32F2F", // Darker red
    partyType: "Minor",
    inclusivityRating: "Excellent",
    gazaStanceRating: "Excellent",
    domesticPolicyRating: "Moderate",
    globalMuslimOppressionRating: "Excellent",
    politicalLeaning: 5, // Far left
    historicWinRate: 0.0, // 0% of federal elections won
    historicWinRateCalculation:
      "The Socialist Alliance has never formed government at any level since its founding in 2001. While they have elected local councillors in a few municipalities (notably in Fremantle and Moreland), they have never won a seat in federal parliament despite contesting every election since 2001. Their win rate is calculated as 0/8 federal elections contested.",
    nationalPopularity: 0.5, // 0.5% popularity based on recent polls
    nationalPopularityCalculation:
      "Based on very limited polling data as a minor party. Figure derived primarily from their historical electoral performance in the 2022 federal election (0.1-0.8% in contested seats) and state elections, adjusted for current political climate and increased activism around Gaza. Support is concentrated in inner-city areas of major cities and university precincts. Due to their small support base, mainstream polls often group them under 'Others', making precise measurement difficult.",
    inclusivitySummary:
      "Strongly anti-racist with consistent support for Muslim communities and immigrants.",
    gazaSummary:
      "Strongly pro-Palestinian, organizing protests and calling for boycotts of Israel.",
    domesticPolicySummary:
      "Radical left policies advocating for public ownership, wealth redistribution, and workers' control of industry.",
    globalMuslimOppressionSummary:
      "Militant solidarity with oppressed Muslim communities globally through protest, radical critique, and organizing major pro-Palestinian demonstrations.",
    fullInclusivityDetails:
      "The Socialist Alliance has a strong anti-racist platform and consistently supports Muslim communities. They actively participate in anti-Islamophobia campaigns and have Muslim members in leadership positions. The party has been vocal against surveillance of Muslim communities and discriminatory immigration policies. They regularly attend solidarity events with Muslim communities and advocate for refugee rights.",
    fullGazaDetails:
      "The Socialist Alliance takes a strongly pro-Palestinian stance, describing Israel's actions as 'genocide' and 'apartheid.' They have organized and participated in numerous Gaza solidarity protests across Australia. The party calls for boycotts, divestment and sanctions against Israel, and demands Australia end all military cooperation with Israel. They support Palestinian self-determination and a one-state solution with equal rights for all.",
    fullDomesticPolicyDetails:
      "The Socialist Alliance advocates for radical left economic and social policies. They call for nationalizing major industries including banking, mining, and energy under democratic workers' control. Their climate policy includes immediate transition from fossil fuels with guaranteed jobs for affected workers. They support free healthcare, education, and public transport funded by taxing corporations and the wealthy. Their housing platform includes massive public housing expansion and rent control. They champion workers' rights including shorter work weeks and stronger unions.",
    fullGlobalMuslimOppressionDetails:
      "Far-left party highly vocal in support of oppressed Muslim communities globally. On Uyghur Muslims, they unequivocally condemned China's persecution as cultural genocide. In 2019, Socialist Alliance members in Melbourne and Sydney helped organize Stand4Uyghurs protests and joined Uyghur community rallies calling for the closure of the camps. The party explicitly recognizes the 'genuine concerns of the Uyghur people around large-scale repression and human rights abuses' by Beijing. For Rohingya Muslims, they were at the forefront of Australian street protests when the Rohingya genocide began in 2017. Their media coverage explicitly termed it 'genocide' and blasted Aung San Suu Kyi for her complicity. The party worked with Rohingya refugee communities to hold demonstrations in cities, chanting 'Stop the genocide! Full rights for Rohingya!' On Palestinian Muslims, they are the strongest pro-Palestine voice in Australian politics. At their 18th national conference in Jan 2024, they passed a resolution committing to 'build support for the Palestine solidarity campaign' and force the Albanese government to 'end its support for Israel'. During the 2023 Gaza war, Socialist Alliance members were key organizers of the massive Free Palestine rallies in all major cities. They led chants like 'From the river to the sea, Palestine will be free'. Regarding Muslims in Western Countries, they view Islamophobia as a tool to divide workers and justify imperialist wars. They led protests against anti-terror laws that targeted Muslim communities and condemned the Howard-era terror raids and detention of innocent Muslim men.",
    websiteUrl: "https://socialist-alliance.org/",
    citations: [
      {
        id: 1,
        text: "The Socialist Alliance takes a strongly pro-Palestinian stance, describing Israel's actions as 'genocide' and 'apartheid'",
        url: "https://socialist-alliance.org/",
      },
      {
        id: 2,
        text: "The Socialist Alliance has a strong anti-racist platform and consistently supports Muslim communities",
        url: "https://socialist-alliance.org/",
      },
    ],
  },
];
