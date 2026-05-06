import { CheckCircle } from "lucide-react";
import { pastSubmissions } from "../data";

export default function PastSubmissions() {
  return (
    <section>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Past Submissions
      </h1>
      <div className="flex flex-col gap-4">
        {pastSubmissions.map((submission) => {
          const scoreNum = parseInt(submission.score);
          const isHighGrade = scoreNum >= 90;

          return (
            <div
              key={submission.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-lg font-semibold text-gray-900">
                  {submission.title}
                </h2>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium shrink-0 ${
                    isHighGrade
                      ? "bg-green-50 text-green-700"
                      : "bg-blue-50 text-blue-700"
                  }`}
                >
                  <CheckCircle size={14} />
                  {submission.grade} ({submission.score})
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Submitted: {submission.submittedAt}
              </p>
              <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                  Feedback
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {submission.feedback}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
