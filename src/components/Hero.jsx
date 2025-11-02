import { ChevronDown } from "lucide-react"


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
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
  )
}

export default Hero
