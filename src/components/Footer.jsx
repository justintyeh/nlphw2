import { footerContacts } from "../data";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          {/* TAs */}
          <div className="px-6 first:pl-0">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Teaching Assistants
            </h3>
            <ul className="space-y-1.5">
              {footerContacts.tas.map((ta) => (
                <li key={ta.email} className="text-sm text-gray-600">
                  {ta.name}{" "}
                  <a
                    href={`mailto:${ta.email}`}
                    className="text-indigo-600 hover:underline"
                  >
                    {ta.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Professor */}
          <div className="px-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Professor
            </h3>
            <p className="text-sm text-gray-600">
              {footerContacts.professor.name}
            </p>
            <a
              href={`mailto:${footerContacts.professor.email}`}
              className="text-sm text-indigo-600 hover:underline"
            >
              {footerContacts.professor.email}
            </a>
            <p className="text-sm text-gray-600 mt-1">
              {footerContacts.professor.office}
            </p>
            <p className="text-sm text-gray-500">
              {footerContacts.professor.hours}
            </p>
          </div>

          {/* Community */}
          <div className="px-6 last:pr-0">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Community
            </h3>
            <ul className="space-y-1.5">
              {footerContacts.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
