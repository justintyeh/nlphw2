import AssignmentCard from "./AssignmentCard";
import { assignments } from "../data";

export default function MainContent() {
  return (
    <section>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Active Assignments
      </h1>
      <div className="flex flex-col gap-4">
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </section>
  );
}
