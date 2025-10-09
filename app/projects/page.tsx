export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A responsive personal website built with Next.js, TypeScript, and Tailwind CSS. Features include a clean design, smooth navigation, and optimized performance.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A full-stack task management application with user authentication, real-time updates, and intuitive UI. Helps users organize and track their daily tasks efficiently.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that displays current weather and forecasts for multiple locations. Features include location search, favorite cities, and weather alerts.',
      technologies: ['React', 'API Integration', 'Chart.js', 'CSS'],
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with product catalog, shopping cart, and checkout functionality. Integrated with payment gateway for secure transactions.',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
      link: '#',
      github: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          A collection of projects I&apos;ve built to solve problems and learn new technologies
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h2>
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  View Project
                </a>
                <a
                  href={project.github}
                  className="flex-1 text-center px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-md hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
