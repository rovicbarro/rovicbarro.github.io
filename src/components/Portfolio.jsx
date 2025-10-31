import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Menu, X, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ block: "start"});
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white">

      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Hello World
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-cyan-400 transition-colors ${activeSection === section ? 'text-cyan-400' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-slate-800 rounded"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-sm mx-auto mb-8">
            <img src="profile.jpg" alt="Profile" className='rounded-full w-full h-full object-cover border-4 border-blue-500 shadow-lg' />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Hi, I'm Rovic Barro
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            A Full Stack Developer passionate about building efficient and user-friendly web applications.
          </p>
          <button className="bg-linear-to-r from-blue-500 to-cyan-500 px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105">
            Download Resume
          </button>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-cyan-400" />
          </div>
        </div>
      </section>

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
              I’m eager to apply my skills to meaningful projects while continuously learning and growing as a developer.
            </p>
          </div>
        </div>
      </section>

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

      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container max-w-2xl text-center mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact Me</h2>
          <form action="https://formspree.io/f/mblpzzap" method='post' className='flex flex-col gap-6 '>
            <input
              type='text'
              name='name'
              placeholder='Name'
              className='bg-slate-800/50 p-4 rounded-lg border border-slate-700 outline-0'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='bg-slate-800/50 p-4 rounded-lg border border-slate-700 outline-0'
              required
            />
            <textarea
              name='message'
              placeholder='Enter Message...'
              className='bg-slate-800/50 p-4 rounded-lg border border-slate-700 outline-0 h-32'
              required
            />
            <button type='submit' className='w-32 bg-linear-to-r from-blue-500 to-cyan-500 px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-colors duration-300 cursor-pointer'>
              Send
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Rovic Barro.</p>
        </div>
      </footer>
    </div>
  );
}