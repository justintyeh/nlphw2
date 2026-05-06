import { Award } from "lucide-react";
import { gradesData } from "../data";

export default function GradesView() {
  return (
    <section>
      {/* Overall grade card */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 mb-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <Award size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-white/80">
              Current Grade
            </p>
            <p className="text-2xl font-bold">
              {gradesData.overallGrade} ({gradesData.overallScore})
            </p>
          </div>
        </div>
      </div>

      {/* Grades grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gradesData.courses.map((course, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5"
          >
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              {course.title}
            </h3>
            <p
              className={`text-lg font-bold ${
                course.pending ? "text-gray-400" : "text-gray-900"
              }`}
            >
              {course.grade}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
