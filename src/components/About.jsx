

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700">
          <p className="text-lg text-gray-300 mb-6">
            I'm a passionate Full Stack Developer specializing in building efficient and user-friendly web applications using the MERN stack.
            I also have a foundational understanding of networking concepts, including TCP/IP configuration, troubleshooting, and basic routing.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            I developed a notes app using the MERN stack to demonstrate my ability to design interactive user experiences and manage database-driven applications.
            This project enhanced my understanding of RESTful APIs, state management, and responsive UI development.
          </p>
          <p className="text-lg text-gray-300">
            I'm eager to apply my skills to meaningful projects while continuously learning and growing as a developer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
