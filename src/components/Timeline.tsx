import React from "react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
}

const Timeline: React.FC<TimelineProps> = ({
  events,
  title = "Timeline of Key Events (2017-2025)",
  subtitle = "Key events and actions taken by this party regarding Muslim communities globally.",
}) => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <h4 className="text-xl font-medium text-gray-800 mb-6">{title}</h4>
      <p className="text-sm text-gray-600 mb-4">{subtitle}</p>

      <div className="relative">
        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7.5rem] top-0 bottom-0 w-[2px] bg-blue-100"></div>

          {/* Timeline events */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="flex items-start">
                {/* Date column - fixed width */}
                <div className="w-[7.5rem] text-right pr-6 pt-[2px]">
                  <span className="text-sm font-medium text-gray-600">
                    {event.date}
                  </span>
                </div>

                {/* Dot and content */}
                <div className="relative flex-1">
                  {/* Blue dot */}
                  <div className="absolute left-0 top-[6px] w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm z-10 transform -translate-x-1/2"></div>

                  {/* Content */}
                  <div className="pl-6">
                    <h3 className="text-base font-medium">{event.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
