const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Strategic alignment and requirements gathering through stakeholder interviews and competitive analysis.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Information architecture, user journeys, and technical specifications tailored to your objectives.",
  },
  {
    number: "03",
    title: "Design",
    description: "Visual systems, component libraries, and high-fidelity prototypes optimized for conversion.",
  },
  {
    number: "04",
    title: "Development",
    description: "Production-ready code with performance optimization, accessibility compliance, and CMS integration.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deployment, monitoring, and post-launch optimization with comprehensive documentation and training.",
  },
]

export function ProcessRail() {
  return (
    <section className="py-32 px-6 bg-gray-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="chrome-text text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6 tracking-tight">Process</h2>
          <p className="text-white/60 text-[clamp(1rem,2vw,1.25rem)] font-light max-w-2xl mx-auto">
            Our methodology ensures precision delivery and exceptional outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="text-center group">
              <div className="chrome-text text-4xl font-bold mb-4 tracking-tight">{step.number}</div>
              <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light">{step.description}</p>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
