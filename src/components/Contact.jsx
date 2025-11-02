

const Contact = () => {
  return (
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
  )
}

export default Contact
