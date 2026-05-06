import { Eye, Upload, CloudUpload, FileText } from "lucide-react";

export default function AssignmentCard({
  assignment,
  isExpanded,
  mode,
  onToggle,
}) {
  const isSubmitted = assignment.status === "Submitted";

  function handleButtonClick() {
    onToggle(assignment.id, isSubmitted ? "view" : "upload");
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Card body */}
      <div className="p-6 flex items-start justify-between gap-6">
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
            onClick={handleButtonClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
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

      {/* Expanded panel */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[40rem] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {mode === "view" && <ViewSubmissionPanel assignment={assignment} onHide={() => onToggle(assignment.id, "view")} />}
        {mode === "upload" && (
          <UploadFilesPanel
            assignment={assignment}
            onCancel={() => onToggle(assignment.id, "upload")}
          />
        )}
      </div>
    </div>
  );
}

function ViewSubmissionPanel({ assignment, onHide }) {
  return (
    <div className="border-t border-gray-100 px-6 py-4 bg-gray-50/50">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            {assignment.title}
          </h3>
          <p className="text-xs text-gray-500">
            Due: {assignment.dueDate}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Submitted
          </span>
          <button
            onClick={onHide}
            className="px-3 py-1.5 rounded-lg text-xs font-medium border border-purple-300 text-purple-700 hover:bg-purple-50 transition-colors"
          >
            Hide Submission
          </button>
        </div>
      </div>

      {/* File list */}
      <div className="space-y-2">
        {assignment.files.map((file, i) => (
          <div
            key={file.filename}
            className="flex items-center gap-3 px-3 py-2 bg-white rounded-lg border border-gray-100"
          >
            <FileText size={16} className="text-gray-400 shrink-0" />
            <span className="text-sm text-gray-700">{file.filename}</span>
            <span className="text-xs text-gray-400 ml-auto">{file.size}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function UploadFilesPanel({ assignment, onCancel }) {
  return (
    <div className="border-t border-gray-100 px-6 py-4 bg-gray-50/50">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            {assignment.title}
          </h3>
          <p className="text-xs text-gray-500">
            Due: {assignment.dueDate}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Pending
          </span>
          <button
            onClick={onCancel}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Drop zone */}
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center gap-3 mb-4">
        <CloudUpload size={32} className="text-gray-400" />
        <p className="text-sm text-gray-500">
          Drag & drop files here, or{" "}
          <span className="text-purple-600 font-medium cursor-pointer">
            browse
          </span>
        </p>
      </div>

      {/* Submit button */}
      <button className="w-full py-2.5 rounded-lg text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 transition-colors">
        Submit
      </button>
    </div>
  );
}
