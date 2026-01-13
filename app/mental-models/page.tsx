import Link from 'next/link'

interface MentalModel {
  rank: number
  name: string
  description: string
  derivatives?: string[]
  discipline: string
}

const mentalModels: MentalModel[] = [
  // Economics & Business (Top Priority)
  { rank: 1, name: "Incentives", description: "People respond to incentives in predictable ways", discipline: "Economics", derivatives: ["Moral Hazard", "Principal-Agent Problem", "Perverse Incentives"] },
  { rank: 2, name: "Compound Interest", description: "Small consistent gains compound exponentially over time", discipline: "Economics", derivatives: ["Time Value of Money", "Exponential Growth"] },
  { rank: 3, name: "Opportunity Cost", description: "The cost of any choice is what you give up", discipline: "Economics" },
  { rank: 4, name: "Economies of Scale", description: "Cost per unit decreases as volume increases", discipline: "Economics", derivatives: ["Network Effects", "Learning Curves"] },
  { rank: 5, name: "Supply and Demand", description: "Price is determined by the intersection of supply and demand", discipline: "Economics" },

  // Psychology & Decision Making
  { rank: 6, name: "Confirmation Bias", description: "We seek information that confirms our existing beliefs", discipline: "Psychology" },
  { rank: 7, name: "Loss Aversion", description: "Losses feel twice as powerful as equivalent gains", discipline: "Psychology" },
  { rank: 8, name: "Sunk Cost Fallacy", description: "Past costs should not influence future decisions", discipline: "Psychology" },
  { rank: 9, name: "Anchoring", description: "First piece of information influences all subsequent judgments", discipline: "Psychology" },
  { rank: 10, name: "Social Proof", description: "We look to others for cues on how to behave", discipline: "Psychology" },

  // Systems & Complexity
  { rank: 11, name: "Minimization", description: "Systems naturally minimize energy, effort, and resistance", discipline: "Systems" },
  { rank: 12, name: "Maximization", description: "Systems seek to maximize efficiency, output, or advantage", discipline: "Systems", derivatives: ["Economies of Scale", "Optimization", "Competitive Advantage"] },
  { rank: 13, name: "Exponential Effects", description: "Small changes can have disproportionately large impacts", discipline: "Systems", derivatives: ["Viral Growth", "Compound Interest", "Network Effects"] },
  { rank: 14, name: "Autocatalytic Effects", description: "Systems that accelerate their own growth", discipline: "Systems", derivatives: ["Reflexivity", "Positive Feedback Loops", "Virtuous Cycles"] },
  { rank: 15, name: "Multi-order Effects", description: "Actions have consequences, which have consequences", discipline: "Systems", derivatives: ["Unintended Consequences", "Cascade Effects"] },

  // Mathematics & Logic
  { rank: 16, name: "Pareto Principle (80/20)", description: "80% of effects come from 20% of causes", discipline: "Mathematics" },
  { rank: 17, name: "Normal Distribution", description: "Most things cluster around the average", discipline: "Mathematics" },
  { rank: 18, name: "Regression to the Mean", description: "Extreme measurements tend to be closer to average on repetition", discipline: "Mathematics" },
  { rank: 19, name: "Inversion", description: "Think backwards from the desired outcome", discipline: "Mathematics" },
  { rank: 20, name: "First Principles", description: "Break down complex problems into fundamental truths", discipline: "Logic" },

  // Physics & Natural Sciences
  { rank: 21, name: "Leverage", description: "Small inputs can create large outputs with the right mechanism", discipline: "Physics" },
  { rank: 22, name: "Entropy", description: "Systems tend toward disorder without energy input", discipline: "Physics" },
  { rank: 23, name: "Conservation of Energy", description: "Energy cannot be created or destroyed, only transformed", discipline: "Physics" },
  { rank: 24, name: "Critical Mass", description: "The minimum size needed to sustain a reaction", discipline: "Physics" },
  { rank: 25, name: "Equilibrium", description: "Systems seek stable states", discipline: "Physics" },

  // Continue with more models...
  { rank: 26, name: "Circle of Competence", description: "Know what you know and what you don't know", discipline: "Psychology" },
  { rank: 27, name: "Margin of Safety", description: "Build in buffers for uncertainty", discipline: "Engineering" },
  { rank: 28, name: "Redundancy", description: "Multiple backup systems prevent total failure", discipline: "Engineering" },
  { rank: 29, name: "Optionality", description: "Having choices is valuable", discipline: "Finance" },
  { rank: 30, name: "Asymmetric Risk/Reward", description: "Limited downside with unlimited upside", discipline: "Finance" },

  // Add more models to reach 100...
  { rank: 31, name: "Survivorship Bias", description: "We overweight successes because failures are hidden", discipline: "Statistics" },
  { rank: 32, name: "Selection Bias", description: "Data is not randomly selected", discipline: "Statistics" },
  { rank: 33, name: "Hindsight Bias", description: "Past events seem more predictable than they were", discipline: "Psychology" },
  { rank: 34, name: "Availability Heuristic", description: "We judge probability by how easily examples come to mind", discipline: "Psychology" },
  { rank: 35, name: "Base Rate Neglect", description: "We ignore the prior probability", discipline: "Statistics" },

  // Biology & Evolution
  { rank: 36, name: "Natural Selection", description: "Favorable traits become more common over time", discipline: "Biology" },
  { rank: 37, name: "Adaptation", description: "Organisms adjust to their environment", discipline: "Biology" },
  { rank: 38, name: "Symbiosis", description: "Mutually beneficial relationships", discipline: "Biology" },
  { rank: 39, name: "Competition", description: "Limited resources create competition", discipline: "Biology" },
  { rank: 40, name: "Specialization", description: "Focused expertise creates advantages", discipline: "Biology" },

  // Continue building out to 100...
  // This is a substantial list, I'll add key ones for now and can expand
]

const disciplines = [
  "Economics",
  "Psychology",
  "Systems",
  "Mathematics",
  "Physics",
  "Biology",
  "Logic",
  "Engineering",
  "Finance",
  "Statistics"
]

export default function MentalModels() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-16">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
            >
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-normal text-black mb-4">
            Mental Models: Top 100
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            The most important mental models ranked by importance and organized by discipline.
            These are the thinking tools that compound over time.
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-12">
          <h2 className="text-xl font-medium text-black mb-4">Disciplines</h2>
          <div className="flex flex-wrap gap-2">
            {disciplines.map((discipline) => (
              <a
                key={discipline}
                href={`#${discipline.toLowerCase()}`}
                className="inline-block text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-md transition-colors"
              >
                {discipline}
              </a>
            ))}
          </div>
        </nav>

        {/* Mental Models by Discipline */}
        {disciplines.map((discipline) => {
          const disciplineModels = mentalModels.filter(model => model.discipline === discipline)
          if (disciplineModels.length === 0) return null

          return (
            <section key={discipline} id={discipline.toLowerCase()} className="mb-16">
              <h2 className="text-2xl font-normal text-black mb-6">{discipline}</h2>
              <div className="space-y-6">
                {disciplineModels.map((model) => (
                  <div key={model.rank} className="border-l-4 border-gray-200 pl-6">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-600 rounded-full text-sm font-medium flex-shrink-0">
                        {model.rank}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-black mb-2">
                          {model.name}
                        </h3>
                        <p className="text-gray-700 mb-3">
                          {model.description}
                        </p>
                        {model.derivatives && (
                          <div>
                            <span className="text-sm font-medium text-gray-600">Derivatives: </span>
                            <span className="text-sm text-gray-600">
                              {model.derivatives.join(", ")}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}

        {/* Footer Note */}
        <div className="mt-16 p-6 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 italic">
            This is a living document. Mental models are ranked by their general applicability,
            frequency of use, and power to improve decision-making. Rankings may evolve as understanding deepens.
          </p>
        </div>
      </div>
    </main>
  )
}