export default function Experiences() {
  const experiences = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Company Name',
      period: '2023 - Present',
      description: 'Developed and maintained web applications using React, TypeScript, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    },
    {
      id: 2,
      title: 'Frontend Developer Intern',
      company: 'Startup Inc.',
      period: '2022 - 2023',
      description: 'Built responsive user interfaces and improved website performance. Worked closely with designers to implement pixel-perfect designs.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      id: 3,
      title: 'Web Development Volunteer',
      company: 'Non-Profit Organization',
      period: '2021 - 2022',
      description: 'Created and maintained the organization\'s website. Implemented new features based on user feedback and analytics.',
      technologies: ['WordPress', 'PHP', 'JavaScript'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
          My Experiences
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          A timeline of my professional journey and contributions
        </p>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-lg shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{exp.title}</h2>
                  <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-600 mt-2 sm:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
