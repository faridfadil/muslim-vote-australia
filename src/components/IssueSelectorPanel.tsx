import React from "react";
import { motion } from "framer-motion";

interface IssueSelectorPanelProps {
  onIssueSelect?: (issueId: string) => void;
}

const IssueSelectorPanel: React.FC<IssueSelectorPanelProps> = ({
  onIssueSelect = () => {},
}) => {
  // Simplified issues with clear, simple language
  const issues = [
    // Domestic Policy Issues
    {
      id: "economic-management",
      name: "Economic Management",
      emoji: "💰",
      color: "bg-blue-50 hover:bg-blue-100 border-blue-100",
      description: "Approach to taxes, spending, and economic growth",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      emoji: "🏥",
      color: "bg-blue-50 hover:bg-blue-100 border-blue-100",
      description: "Medicare, hospitals, and healthcare affordability",
    },
    {
      id: "climate-action",
      name: "Climate Action",
      emoji: "🌿",
      color: "bg-blue-50 hover:bg-blue-100 border-blue-100",
      description: "Emissions targets and renewable energy transition",
    },
    {
      id: "housing-affordability",
      name: "Housing Affordability",
      emoji: "🏠",
      color: "bg-blue-50 hover:bg-blue-100 border-blue-100",
      description: "Policies to address housing costs and homelessness",
    },
    {
      id: "education",
      name: "Education",
      emoji: "📚",
      color: "bg-blue-50 hover:bg-blue-100 border-blue-100",
      description: "School funding, university fees, and accessibility",
    },
    // Social Issues
    {
      id: "muslim-inclusivity",
      name: "Muslim Safety & Inclusion",
      emoji: "🤝",
      color: "bg-purple-50 hover:bg-purple-100 border-purple-100",
      description: "How parties treat Muslim Australians and their communities",
    },
    {
      id: "immigration",
      name: "Immigration Policy",
      emoji: "🌍",
      color: "bg-purple-50 hover:bg-purple-100 border-purple-100",
      description: "Policies on refugees and migrants",
    },
    {
      id: "religious-freedom",
      name: "Religious Freedom",
      emoji: "🕌",
      color: "bg-purple-50 hover:bg-purple-100 border-purple-100",
      description: "Protection of religious practices and anti-discrimination",
    },
    {
      id: "islamophobia",
      name: "Fighting Islamophobia",
      emoji: "🛡️",
      color: "bg-purple-50 hover:bg-purple-100 border-purple-100",
      description: "Efforts to combat anti-Muslim discrimination and hate",
    },
    // Foreign Policy Issues
    {
      id: "gaza-stance",
      name: "Gaza Conflict Position",
      emoji: "🕊️",
      color: "bg-green-50 hover:bg-green-100 border-green-100",
      description: "Where parties stand on the Israel-Gaza conflict",
    },
    {
      id: "palestine-recognition",
      name: "Palestinian Recognition",
      emoji: "🇵🇸",
      color: "bg-green-50 hover:bg-green-100 border-green-100",
      description: "Position on recognizing Palestine as a sovereign state",
    },
  ];

  const handleSelect = (issueId: string) => {
    onIssueSelect(issueId);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-medium text-gray-800 mb-4">
        Select an Issue
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Choose an issue to see how different parties compare
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {issues.map((issue, index) => (
          <motion.button
            key={issue.id}
            className={`flex items-center p-4 rounded-lg border ${issue.color} transition-all duration-200`}
            onClick={() => handleSelect(issue.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
          >
            <span className="text-2xl mr-3" role="img" aria-label={issue.name}>
              {issue.emoji}
            </span>
            <div className="text-left">
              <div className="text-base font-medium text-gray-800">
                {issue.name}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {issue.description}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default IssueSelectorPanel;
