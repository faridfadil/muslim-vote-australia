import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CitationButtonProps {
  index: number;
  url: string;
}

const CitationButton: React.FC<CitationButtonProps> = ({ index, url }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="inline-flex h-5 px-1.5 py-0 text-xs font-medium rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 border-gray-200 ml-1 align-text-top"
            onClick={handleOpenLink}
          >
            [{index}]
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top" className="flex flex-col gap-2 max-w-xs p-3">
          <p className="text-xs break-all">{url}</p>
          <Button
            variant="secondary"
            size="sm"
            className="text-xs"
            onClick={handleCopyLink}
          >
            {copied ? "Copied!" : "Copy Link"}
          </Button>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CitationButton;
