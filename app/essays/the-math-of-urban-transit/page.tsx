import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Math of Urban Transit - Paul Yacoubian',
  description: 'An analysis of Memphis MATA bus system costs reveals $32 per ride with $80M in costs versus $2M in revenue, highlighting the case for transitioning to robotaxi networks.',
  keywords: ['urban transit', 'public transportation', 'Memphis', 'MATA', 'transportation economics', 'robotaxi', 'cost analysis'],
  openGraph: {
    title: 'The Math of Urban Transit',
    description: 'How Memphis MATA costs $32 per ride and why robotaxi networks are the future of public transit.',
    type: 'article',
    publishedTime: '2025-01-22T00:00:00.000Z',
  },
}

export default function TheMathOfUrbanTransit() {
  return (
    <main className="bg-white min-h-screen" role="main">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-16">
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
          <h1 className="page-title">
            The Math of Urban Transit
          </h1>
          <div className="mb-6">
            <time
              dateTime="2025-01-22T00:00:00.000Z"
              className="text-sm text-gray-600"
            >
              January 22, 2025
            </time>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="space-y-8">

            <section>
              <p className="text-gray-700 leading-relaxed mb-4">
                I was curious about the math behind the City of Memphis bus transit system called MATA. I'd seen a lot of busses driving for years with no one in them. I found their financials to see how much revenue and costs were in recent years and the numbers were insane.
              </p>

              <div className="info-card">
                <h5 className="font-semibold text-black mb-2">The Numbers:</h5>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Total costs:</strong> $80M</li>
                  <li>• <strong>Revenue:</strong> $2M</li>
                  <li>• <strong>Ridership decline:</strong> From 10M+ rides/year to 2.5M</li>
                  <li>• <strong>Cost per ride:</strong> $32</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="section-title">The Real Cost of a Commute</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                That equates to $32 cost per one way ride. Assuming a round trip to work and back home, you get $64. Not only would it be cheaper for all riders to take an Uber, but in many cases, the cost of the bus is more than the wages of working 8hrs of minimum wage work.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The system is in operational collapse because the buses are too big and cost over $1M each. So they break down all the time and that creates operational outages. Late buses are not reliable, so people stop taking it.
              </p>
            </section>

            <section>
              <h2 className="section-title">Doubling Down on Failure</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                MATA itself has over $500M in committed investment into more buses and a huge bus terminal. The whole thing is irrelevant at this point.
              </p>

              <div className="vision-card">
                <p className="text-gray-700 italic">
                  <strong>The Paradox:</strong> As ridership collapses and costs soar, the response is to invest even more money in the same failing infrastructure model.
                </p>
              </div>
            </section>

            <section>
              <h2 className="section-title">The Future Model</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                The next stage will be moving the entire fleet model onto a robotaxi model when Waymo and Tesla Robotaxi networks begin to scale. The costs will drop far below $80M per year to taxpayers, and the service quality will be much better.
              </p>

              <div className="info-card">
                <h5 className="font-semibold text-black mb-2">Why Robotaxis Make Sense:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li>• No driver labor costs</li>
                  <li>• Dynamic routing based on actual demand</li>
                  <li>• Smaller, more efficient vehicles</li>
                  <li>• 24/7 availability</li>
                  <li>• Door-to-door service</li>
                  <li>• Lower maintenance costs per passenger mile</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="section-title">Source</h2>

              <p className="text-gray-700 leading-relaxed">
                Financial data sourced from:{' '}
                <a
                  href="https://www.matatransit.com/about/audited-financials/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  MATA Transit Audited Financials
                </a>
              </p>
            </section>

          </div>
        </article>
      </div>
    </main>
  )
}