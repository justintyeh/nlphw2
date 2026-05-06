import { Eye, Upload } from "lucide-react";

export default function AssignmentCard({ assignment }) {
  const isSubmitted = assignment.status === "Submitted";

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex items-start justify-between gap-6">
      {/* Left side */}
      <div className="flex-1 min-w-0">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          {assignment.title}
        </h2>
        <p className="text-sm text-gray-500 mb-2">
          Due: {assignment.dueDate}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          {assignment.description}
        </p>
      </div>

      {/* Right side */}
      <div className="flex flex-col items-end gap-3 shrink-0">
        {/* Status badge */}
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
            isSubmitted
              ? "bg-green-50 text-green-700"
              : "bg-amber-50 text-amber-700"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isSubmitted ? "bg-green-500" : "bg-amber-500"
            }`}
          />
          {assignment.status}
        </span>

        {/* Action button */}
        <button
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors ${
            isSubmitted
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {isSubmitted ? (
            <>
              <Eye size={16} />
              View Submission
            </>
          ) : (
            <>
              <Upload size={16} />
              Upload Files
            </>
          )}
        </button>
      </div>
    </div>
  );
}
