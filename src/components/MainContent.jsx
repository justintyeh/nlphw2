import { useState } from "react";
import AssignmentCard from "./AssignmentCard";
import PastSubmissions from "./PastSubmissions";
import GradesView from "./GradesView";
import { assignments } from "../data";

export default function MainContent({ activeTab }) {
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [expandedMode, setExpandedMode] = useState(null);

  function handleToggleCard(id, mode) {
    if (expandedCardId === id) {
      setExpandedCardId(null);
      setExpandedMode(null);
    } else {
      setExpandedCardId(id);
      setExpandedMode(mode);
    }
  }

  if (activeTab === "submissions") {
    return <PastSubmissions />;
  }

  if (activeTab === "grades") {
    return <GradesView />;
  }

  return (
    <section>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Active Assignments
      </h1>
      <div className="flex flex-col gap-4">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            isExpanded={expandedCardId === assignment.id}
            mode={expandedCardId === assignment.id ? expandedMode : null}
            onToggle={handleToggleCard}
          />
        ))}
      </div>
    </section>
  );
}
