export default function TechStack() {
  return (
    <section className="py-12" aria-label="技術スタック">
      <h2 className="text-2xl font-bold mb-6">Our Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="tech-card p-4 bg-white/10 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-3">Frontend</h3>
          <ul className="space-y-2">
            <li className="text-gray-200">Next.js</li>
            <li className="text-gray-200">React</li>
            <li className="text-gray-200">TypeScript</li>
            <li className="text-gray-200">Tailwind CSS</li>
            <li className="text-gray-200">Three.js</li>
            <li className="text-gray-200">etc.</li>
          </ul>
        </div>
        <div className="tech-card p-4 bg-white/10 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-3">Backend</h3>
          <ul className="space-y-2">
            <li className="text-gray-200">Node.js</li>
            <li className="text-gray-200">Python</li>
            <li className="text-gray-200">FastAPI</li>
            <li className="text-gray-200">Django</li>
            <li className="text-gray-200">Go</li>
            <li className="text-gray-200">etc.</li>
          </ul>
        </div>
        <div className="tech-card p-4 bg-white/10 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-3">AI/ML</h3>
          <ul className="space-y-2">
            <li className="text-gray-200">LangChain</li>
            <li className="text-gray-200">Claude</li>
            <li className="text-gray-200">ChatGPT</li>
            <li className="text-gray-200">Gemini</li>
            <li className="text-gray-200">Stable Diffusion</li>
            <li className="text-gray-200">etc.</li>
          </ul>
        </div>
        <div className="tech-card p-4 bg-white/10 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-3">Infrastructure</h3>
          <ul className="space-y-2">
            <li className="text-gray-200">AWS</li>
            <li className="text-gray-200">GCP</li>
            <li className="text-gray-200">Vercel</li>
            <li className="text-gray-200">Docker</li>
            <li className="text-gray-200">GitHub</li>
            <li className="text-gray-200">etc.</li>
          </ul>
        </div>
      </div>
    </section>
  )
} 