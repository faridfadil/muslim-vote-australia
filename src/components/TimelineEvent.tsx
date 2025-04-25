import React from "react";

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  date,
  title,
  description,
}) => {
  return (
    <>
      <div className="text-right pr-4">
        <span className="text-sm font-medium text-gray-600 inline-block bg-white px-2 relative z-10">
          {date}
        </span>
      </div>
      <div className="relative">
        {/* Timeline dot */}
        <div className="absolute left-0 top-[10px] w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        {/* Horizontal connector */}
        <div className="absolute left-0 top-[10px] w-4 h-[1px] bg-blue-400 transform -translate-x-full -translate-y-1/2"></div>
        <div className="pl-6">
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </>
  );
};

export default TimelineEvent;
