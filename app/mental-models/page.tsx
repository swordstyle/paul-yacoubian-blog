import Link from 'next/link'

interface MentalModel {
  rank: number
  name: string
  description: string
  primaryDiscipline: string
  altDisciplines?: string[]
  derivatives?: string[]
}

const mentalModels: MentalModel[] = [
  { rank: 1, name: "Imitation", description: "Humans learn primarily through copying others", primaryDiscipline: "Psychology", altDisciplines: ["Biology", "Anthropology", "Systems"], derivatives: ["Social Proof", "Mimetic Theory"] },
  { rank: 2, name: "Incentives", description: "People respond to incentives in predictable ways", primaryDiscipline: "Economics", altDisciplines: ["Psychology", "Systems"], derivatives: ["Moral Hazard", "Principal-Agent Problem", "Perverse Incentives"] },
  { rank: 3, name: "Flywheel Effects", description: "Systems that accelerate their own growth through momentum", primaryDiscipline: "Systems", altDisciplines: ["Business", "Physics"], derivatives: ["Reflexivity", "Positive Feedback Loops", "Virtuous Cycles"] },
  { rank: 4, name: "Minimization", description: "Systems naturally minimize energy, effort, and resistance", primaryDiscipline: "Systems", altDisciplines: ["Physics", "Biology", "Economics"] },
  { rank: 5, name: "Maximization", description: "Systems seek to maximize efficiency, output, or advantage", primaryDiscipline: "Systems", altDisciplines: ["Economics", "Biology"], derivatives: ["Economies of Scale", "Optimization", "Competitive Advantage"] },
  { rank: 6, name: "Exponential Effects", description: "Small changes can have disproportionately large impacts", primaryDiscipline: "Systems", altDisciplines: ["Mathematics", "Physics"], derivatives: ["Viral Growth", "Compound Interest", "Network Effects"] },
  { rank: 7, name: "Multi-order Effects", description: "Actions have consequences, which have consequences", primaryDiscipline: "Systems", altDisciplines: ["Logic", "Philosophy"], derivatives: ["Unintended Consequences", "Cascade Effects"] },
  { rank: 8, name: "Redundancy", description: "Multiple backup systems prevent total failure", primaryDiscipline: "Engineering", altDisciplines: ["Systems", "Biology"] },
  { rank: 9, name: "Opportunity Cost", description: "The cost of any choice is what you give up", primaryDiscipline: "Economics", altDisciplines: ["Logic", "Psychology"] },
  { rank: 10, name: "Economies of Scale", description: "Cost per unit decreases as volume increases", primaryDiscipline: "Economics", altDisciplines: ["Systems", "Engineering"], derivatives: ["Network Effects", "Learning Curves"] },

  { rank: 11, name: "First Principles", description: "Break down complex problems into fundamental truths", primaryDiscipline: "Logic", altDisciplines: ["Philosophy", "Mathematics"] },
  { rank: 12, name: "Inversion", description: "Think backwards from the desired outcome", primaryDiscipline: "Logic", altDisciplines: ["Mathematics", "Strategy"] },
  { rank: 13, name: "Confirmation Bias", description: "We seek information that confirms our existing beliefs", primaryDiscipline: "Psychology", altDisciplines: ["Logic", "Statistics"] },
  { rank: 14, name: "Loss Aversion", description: "Losses feel twice as powerful as equivalent gains", primaryDiscipline: "Psychology", altDisciplines: ["Economics", "Biology"] },

  { rank: 15, name: "Supply and Demand", description: "Price is determined by the intersection of supply and demand", primaryDiscipline: "Economics" },
  { rank: 16, name: "Pareto Principle (80/20)", description: "80% of effects come from 20% of causes", primaryDiscipline: "Mathematics", altDisciplines: ["Economics", "Systems"] },
  { rank: 17, name: "Leverage", description: "Small inputs can create large outputs with the right mechanism", primaryDiscipline: "Physics", altDisciplines: ["Engineering", "Finance"] },
  { rank: 18, name: "Critical Mass", description: "The minimum size needed to sustain a reaction", primaryDiscipline: "Physics", altDisciplines: ["Systems", "Sociology"] },
  { rank: 19, name: "Natural Selection", description: "Favorable traits become more common over time", primaryDiscipline: "Biology", altDisciplines: ["Systems", "Economics"] },

  { rank: 20, name: "Circle of Competence", description: "Know what you know and what you don't know", primaryDiscipline: "Psychology", altDisciplines: ["Logic", "Strategy"] },
  { rank: 21, name: "Margin of Safety", description: "Build in buffers for uncertainty", primaryDiscipline: "Engineering", altDisciplines: ["Finance", "Psychology"] },
  { rank: 22, name: "Entropy", description: "Systems tend toward disorder without energy input", primaryDiscipline: "Physics", altDisciplines: ["Systems", "Biology"] },
  { rank: 23, name: "Anchoring", description: "First piece of information influences all subsequent judgments", primaryDiscipline: "Psychology", altDisciplines: ["Economics", "Statistics"] },
  { rank: 24, name: "Regression to the Mean", description: "Extreme measurements tend to be closer to average on repetition", primaryDiscipline: "Statistics", altDisciplines: ["Mathematics", "Psychology"] },

  { rank: 25, name: "Optionality", description: "Having choices is valuable", primaryDiscipline: "Finance", altDisciplines: ["Logic", "Strategy"] },
  { rank: 26, name: "Asymmetric Risk/Reward", description: "Limited downside with unlimited upside", primaryDiscipline: "Finance", altDisciplines: ["Logic", "Strategy"] },
  { rank: 27, name: "Survivorship Bias", description: "We overweight successes because failures are hidden", primaryDiscipline: "Statistics", altDisciplines: ["Psychology", "Logic"] },
  { rank: 28, name: "Sunk Cost Fallacy", description: "Past costs should not influence future decisions", primaryDiscipline: "Psychology", altDisciplines: ["Economics", "Logic"] },
  { rank: 29, name: "Normal Distribution", description: "Most things cluster around the average", primaryDiscipline: "Statistics", altDisciplines: ["Mathematics", "Psychology"] },

  { rank: 30, name: "Conservation of Energy", description: "Energy cannot be created or destroyed, only transformed", primaryDiscipline: "Physics", altDisciplines: ["Systems", "Philosophy"] },
  { rank: 31, name: "Equilibrium", description: "Systems seek stable states", primaryDiscipline: "Physics", altDisciplines: ["Systems", "Economics"] },
  { rank: 32, name: "Specialization", description: "Focused expertise creates advantages", primaryDiscipline: "Biology", altDisciplines: ["Economics", "Systems"] },
  { rank: 33, name: "Adaptation", description: "Organisms adjust to their environment", primaryDiscipline: "Biology", altDisciplines: ["Psychology", "Systems"] },

  { rank: 34, name: "Symmetry", description: "Patterns of balance and proportion reveal underlying structure", primaryDiscipline: "Geometry", altDisciplines: ["Mathematics", "Physics", "Biology"] },
  { rank: 35, name: "Scale", description: "Size fundamentally changes behavior and properties", primaryDiscipline: "Geometry", altDisciplines: ["Physics", "Biology", "Systems"] },
  { rank: 36, name: "Proximity", description: "Things closer together have stronger influence on each other", primaryDiscipline: "Geometry", altDisciplines: ["Psychology", "Systems", "Physics"] },
  { rank: 37, name: "Modularity", description: "Complex systems built from simpler, reusable components", primaryDiscipline: "Systems", altDisciplines: ["Engineering", "Biology", "Mathematics"], derivatives: ["Assembly Theory", "Fractals", "Network Architecture"] },
  { rank: 38, name: "Golden Ratio", description: "The most aesthetically pleasing proportion in nature", primaryDiscipline: "Geometry", altDisciplines: ["Mathematics", "Biology", "Art"] },

  // Adding 10 more to complete Top 50
  { rank: 39, name: "Threshold Effects", description: "Small changes create dramatic shifts once a threshold is crossed", primaryDiscipline: "Systems", altDisciplines: ["Physics", "Psychology", "Economics"] },
  { rank: 40, name: "Base Rate Neglect", description: "We ignore prior probability when making judgments", primaryDiscipline: "Statistics", altDisciplines: ["Psychology", "Logic"] },
  { rank: 41, name: "Availability Heuristic", description: "We judge probability by how easily examples come to mind", primaryDiscipline: "Psychology", altDisciplines: ["Statistics", "Economics"] },
  { rank: 42, name: "Hindsight Bias", description: "Past events seem more predictable than they were", primaryDiscipline: "Psychology", altDisciplines: ["Logic", "Statistics"] },
  { rank: 43, name: "Selection Bias", description: "Non-random data selection leads to false conclusions", primaryDiscipline: "Statistics", altDisciplines: ["Psychology", "Logic"] },
  { rank: 44, name: "Symbiosis", description: "Mutually beneficial relationships between different entities", primaryDiscipline: "Biology", altDisciplines: ["Economics", "Systems", "Sociology"] },
  { rank: 45, name: "Competition", description: "Limited resources create competitive dynamics", primaryDiscipline: "Biology", altDisciplines: ["Economics", "Game Theory", "Psychology"] },
  { rank: 46, name: "Cooperation", description: "Working together produces outcomes impossible individually", primaryDiscipline: "Game Theory", altDisciplines: ["Biology", "Economics", "Psychology"] },
  { rank: 47, name: "Network Effects", description: "Value increases exponentially with each additional user", primaryDiscipline: "Economics", altDisciplines: ["Systems", "Technology", "Sociology"] },
  { rank: 48, name: "Path Dependence", description: "Historical sequences matter; past decisions constrain future options", primaryDiscipline: "Systems", altDisciplines: ["Economics", "History", "Psychology"] },
  { rank: 49, name: "Feedback Loops", description: "Outputs of a system become inputs, creating cycles of cause and effect", primaryDiscipline: "Systems", altDisciplines: ["Engineering", "Biology", "Economics"] },
  { rank: 50, name: "Emergence", description: "Complex behaviors arise from simple rules and interactions", primaryDiscipline: "Systems", altDisciplines: ["Biology", "Physics", "Complexity Science"] }
]

export default function MentalModels() {
  return (
    <main className="bg-white min-h-screen" role="main">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 lg:py-16">
        {/* Header */}
        <header className="mb-12" role="banner">
          <div className="mb-6">
            <Link
              href="/"
              className="btn-back"
              aria-label="Navigate back to home page"
            >
              ← Back to Home
            </Link>
          </div>
          <h1 className="page-title" id="mental-models-heading">
            Mental Models: Top 50
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The most important mental models ranked by importance.
            These are the thinking tools that compound over time.
          </p>
          <p className="text-sm text-gray-600">
            Each model shows its primary discipline and alternative applications across fields.
          </p>
        </header>

        {/* Mental Models Table */}
        <div className="table-container" role="region" aria-labelledby="mental-models-heading">
          <table className="w-full" role="table" aria-label="Top 50 mental models ranked by importance">
            <thead>
              <tr className="border-b border-gray-200" role="row">
                <th className="table-header w-16" role="columnheader" scope="col">Rank</th>
                <th className="table-header w-48" role="columnheader" scope="col">Mental Model</th>
                <th className="table-header" role="columnheader" scope="col">Description</th>
                <th className="table-header w-32" role="columnheader" scope="col">Primary</th>
                <th className="table-header w-48" role="columnheader" scope="col">Secondary</th>
                <th className="table-header w-48" role="columnheader" scope="col">Derivatives</th>
              </tr>
            </thead>
            <tbody>
              {mentalModels.map((model) => (
                <tr key={model.rank} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {model.rank}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-medium text-gray-900">{model.name}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-gray-700 text-sm leading-relaxed">{model.description}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {model.primaryDiscipline}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {model.altDisciplines && (
                      <div className="flex flex-wrap gap-1">
                        {model.altDisciplines.map((discipline) => (
                          <span
                            key={discipline}
                            className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                          >
                            {discipline}
                          </span>
                        ))}
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    {model.derivatives && (
                      <div className="text-xs text-gray-600">
                        {model.derivatives.join(", ")}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="mt-16 p-6 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 italic">
            This is a living document. Mental models are ranked by their general applicability,
            frequency of use, and power to improve decision-making. Rankings reflect personal experience
            and may evolve as understanding deepens.
          </p>
        </div>
      </div>
    </main>
  )
}