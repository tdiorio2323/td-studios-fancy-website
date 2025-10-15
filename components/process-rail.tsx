const processSteps = [
  {
    number: "01",
    title: "Strategy",
    description: "Strategic alignment and requirements gathering through stakeholder interviews and competitive analysis.",
    proofPoint: "Average 40% increase in conversion rates",
  },
  {
    number: "02",
    title: "Design",
    description: "Visual systems, component libraries, and high-fidelity prototypes optimized for conversion.",
    proofPoint: "Premium aesthetic that reflects brand excellence",
  },
  {
    number: "03",
    title: "Build",
    description: "Production-ready code with performance optimization, accessibility compliance, and CMS integration.",
    proofPoint: "Lightning-fast load times under 2 seconds",
  },
  {
    number: "04",
    title: "Launch",
    description: "Deployment, monitoring, and post-launch optimization with comprehensive documentation and training.",
    proofPoint: "Zero-downtime deployments with 99.9% uptime",
  },
  {
    number: "05",
    title: "Optimize",
    description: "Continuous improvement based on data insights, user feedback, and performance metrics.",
    proofPoint: "Ongoing growth with measurable ROI",
  },
]

export function ProcessRail() {
  return (
    <section className="py-32 px-6 bg-gray-950/30">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="chrome-text text-h2 font-bold mb-6 tracking-tight">Process</h2>
          <p className="text-body-lg text-white/60 font-light max-w-2xl mx-auto">
            Our methodology ensures precision delivery and exceptional outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="text-center group">
              <div className="chrome-text text-4xl font-bold mb-4 tracking-tight">{step.number}</div>
              <h3 className="text-xl font-semibold mb-4 text-white/90 tracking-tight">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light mb-3">{step.description}</p>
              <p className="text-white/40 text-xs font-medium italic">{step.proofPoint}</p>
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
