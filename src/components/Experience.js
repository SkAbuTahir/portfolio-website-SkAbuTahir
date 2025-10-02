import { experiences } from '../lib/data';

export default function Experience() {
    return (
        <>
  

                <section id="experience" className="py-20  dark:bg-gray-900 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 ">
                        <h2 className="text-3xl font-bold text-center text-amber-50 mb-12">Experience</h2>
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                                            <a href={exp.link} className="text-blue-600">{exp.company}</a>
                                        </div>
                                        <span className="text-sm text-gray-500">{exp.period}</span>
                                    </div>
                                    <p className="text-gray-600">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

        </>
    );
}