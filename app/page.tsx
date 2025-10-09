export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Picture Section */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                AT
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                Hi, I&apos;m Adrian Tam
              </h1>
              <p className="text-xl text-gray-600">
                Developer | Designer | Problem Solver
              </p>
            </div>

            <p className="text-lg text-gray-700">
              Welcome to my personal website! I&apos;m passionate about creating 
              innovative solutions and bringing ideas to life through code.
            </p>

            {/* Quick Facts */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Facts</h2>
              <div className="grid gap-3">
                <QuickFact 
                  icon="📍" 
                  label="Location" 
                  value="Your Location" 
                />
                <QuickFact 
                  icon="💼" 
                  label="Role" 
                  value="Software Developer" 
                />
                <QuickFact 
                  icon="🎓" 
                  label="Education" 
                  value="Your University" 
                />
                <QuickFact 
                  icon="💻" 
                  label="Interests" 
                  value="Web Development, AI, Design" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Git'].map((skill) => (
              <div
                key={skill}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function QuickFact({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start space-x-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <p className="text-base text-gray-900">{value}</p>
      </div>
    </div>
  );
}

