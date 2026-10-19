import { education } from "../lib/data";

export default function Education() {
  return (
    <section id="education" className="py-20 dark:bg-gray-900 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.school}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <p className="text-blue-600">{item.school}</p>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
