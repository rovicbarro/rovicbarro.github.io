import { ExternalLink } from "lucide-react"


const Projects = () => {
  const projects = [
    {
      title: "MERN Stack Notes",
      description: "A web-based notes application with filtering and mark as done features",
      tech: ["React", "Node.js", "MongoDB", "Tailwindcss"],
      link: "https://mern-litelist.onrender.com/"
    },
    {
      title: "Profile Dashboard",
      description: "A dashboard with authentication where users can see and update their profile details. (work in progress)",
      tech: ["React", "Node.js", "MongoDB", "Tailwindcss"],
      link: "#"
    }
  ]
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all hover:transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-900/50 px-3 py-1 rounded-full text-xs text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                View Project <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
