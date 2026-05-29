import { useState } from 'react'

const pages = {
  home: {
    title: 'Home',
  },
  services: {
    title: 'Services',
  },
  about: {
    title: 'About',
  },
  portfolio: {
    title: 'Portfolio',
  },
  pricing: {
    title: 'Pricing',
  },
  contact: {
    title: 'Contact',
  },
}

export default function ZentroAIWebsite() {
  const [activePage, setActivePage] = useState('home')

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-6 border-b border-zinc-800 sticky top-0 bg-black z-50">
        <h1 className="text-2xl font-bold">Zentro AI</h1>

        <div className="flex gap-4 flex-wrap justify-center">
          {Object.entries(pages).map(([key, page]) => (
            <button
              key={key}
              onClick={() => setActivePage(key)}
              className={`px-4 py-2 rounded-xl transition ${
                activePage === key
                  ? 'bg-white text-black'
                  : 'text-zinc-300 hover:bg-zinc-900'
              }`}
            >
              {page.title}
            </button>
          ))}
        </div>
      </nav>

      {/* HOME PAGE */}
      {activePage === 'home' && (
        <>
          <section className="px-6 py-24 md:px-16 text-center bg-gradient-to-b from-zinc-900 to-black">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Automate. Scale. Dominate.
            </h1>

            <p className="mt-6 text-xl text-zinc-300 max-w-3xl mx-auto">
              Zentro AI helps businesses grow using AI automation, chatbots,
              lead generation systems, and smart marketing solutions.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-2xl text-lg font-semibold hover:scale-105 transition">
                Start Your Project
              </button>

              <button className="border border-white px-6 py-3 rounded-2xl text-lg hover:bg-white hover:text-black transition">
                Book Free Consultation
              </button>
            </div>
          </section>
        </>
      )}

      {/* SERVICES PAGE */}
      {activePage === 'services' && (
        <section className="px-6 md:px-16 py-20">
          <h2 className="text-5xl font-bold text-center mb-14">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Chatbots',
                desc: 'Smart AI assistants for websites and WhatsApp.',
              },
              {
                title: 'Automation Systems',
                desc: 'Automate workflows, appointments, and follow-ups.',
              },
              {
                title: 'AI Marketing',
                desc: 'AI-generated content and ad strategies.',
              },
              {
                title: 'Website Development',
                desc: 'Modern business websites and funnels.',
              },
              {
                title: 'Lead Generation',
                desc: 'Systems designed to bring high-quality leads.',
              },
              {
                title: 'Voice AI',
                desc: 'AI calling systems and smart voice agents.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-white transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-zinc-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ABOUT PAGE */}
      {activePage === 'about' && (
        <section className="px-6 md:px-16 py-24 text-center">
          <h2 className="text-5xl font-bold mb-10">About Zentro AI</h2>

          <p className="max-w-4xl mx-auto text-zinc-300 text-lg leading-relaxed">
            Zentro AI is a next-generation AI agency focused on helping businesses
            automate operations, increase sales, and scale faster using modern AI
            technology.
          </p>
        </section>
      )}

      {/* PORTFOLIO PAGE */}
      {activePage === 'portfolio' && (
        <section className="px-6 md:px-16 py-20">
          <h2 className="text-5xl font-bold text-center mb-14">
            Portfolio
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  AI Project {item}
                </h3>

                <p className="text-zinc-400">
                  Example AI automation and business growth project showcase.
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PRICING PAGE */}
      {activePage === 'pricing' && (
        <section className="px-6 md:px-16 py-20">
          <h2 className="text-5xl font-bold text-center mb-14">Pricing</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                plan: 'Starter',
                price: '$299',
              },
              {
                plan: 'Growth',
                price: '$999',
              },
              {
                plan: 'Enterprise',
                price: 'Custom',
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 text-center"
              >
                <h3 className="text-3xl font-bold">{pkg.plan}</h3>
                <p className="text-5xl font-bold mt-6">{pkg.price}</p>

                <button className="mt-8 bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT PAGE */}
      {activePage === 'contact' && (
        <section className="px-6 md:px-16 py-20 max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-14">
            Contact Us
          </h2>

          <div className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800"
            />

            <textarea
              placeholder="Tell us about your project"
              rows="6"
              className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800"
            ></textarea>

            <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition w-full">
              Send Message
            </button>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 md:px-16 py-8 text-center text-zinc-500">
        © 2026 Zentro AI — Premium AI Automation Agency.
      </footer>
    </div>
  )
}
