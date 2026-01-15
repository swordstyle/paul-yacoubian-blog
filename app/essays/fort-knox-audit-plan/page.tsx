import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fort Knox Audit Plan - Paul Yacoubian',
  description: 'A detailed security assessment of Fort Knox, analyzing staffing, physical location vulnerabilities, and potential tunnel risks for the world\'s largest gold depository.',
  keywords: ['Fort Knox', 'gold', 'security audit', 'vault', 'gold depository'],
  openGraph: {
    title: 'Fort Knox Audit Plan',
    description: 'A detailed security assessment of Fort Knox, analyzing staffing, physical location vulnerabilities, and potential tunnel risks.',
    type: 'article',
    publishedTime: '2025-09-24T19:31:01.005Z',
  },
}

export default function FortKnoxAuditPlan() {
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
            Fort Knox Audit Plan
          </h1>
          <div className="mb-6">
            <time
              dateTime="2025-09-24T19:31:01.005Z"
              className="text-sm text-gray-600"
            >
              September 24, 2025
            </time>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="space-y-8">

            <section>
              <p className="text-lg text-gray-700 leading-relaxed">
                I love Fort Knox. It has the largest stockpile of gold on Earth. I want to help secure it, so I'm preparing an audit plan. This was inspired by discussions from Donald Trump and Elon Musk about the importance of protecting America's gold reserves.
              </p>
            </section>

            <section>
              <h2 className="section-title">Audit Plan Overview</h2>

              <h3 className="text-xl font-medium text-black mt-8 mb-4">Phase I: Site Security Audit</h3>

              <h4 className="text-lg font-medium text-black mt-6 mb-3">Part I: Staffing Review</h4>

              <p className="text-gray-700 leading-relaxed mb-4">
                Let's start with the basics. The Fort Knox Depository holds approximately 147 million ounces of gold. At the current price of $3,792 per ounce, that's a total value of <strong>$557 billion</strong>. Holy shit.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                This translates to approximately 367,500 gold bars, with each standard bar weighing about 25 pounds and worth roughly $1.5 million.
              </p>

              <div className="info-card">
                <h5 className="font-semibold text-black mb-2">Gold Inventory Summary:</h5>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>147 million ounces</strong> of gold</li>
                  <li>• <strong>$557 billion</strong> total value</li>
                  <li>• <strong>367,500 gold bars</strong> (approximately)</li>
                  <li>• <strong>$1.5 million</strong> per bar</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mt-6 mb-4">
                Now, looking at the satellite imagery of the facility, I count approximately 32 parking spots in the main parking lot. This suggests current staffing of around 20 personnel, assuming some spots are reserved for visitors or administrative use.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                When I asked Claude (an AI assistant) about appropriate staffing levels for securing $557 billion in assets, the recommendation was 200-500 personnel. This represents a significant staffing gap that should be addressed.
              </p>

              <div className="my-8">
                <Image
                  src="/images/essays/fort-knox-audit-plan/satellite-parking-analysis.png"
                  alt="Satellite view of Fort Knox parking lot showing approximately 32 parking spaces for staffing analysis"
                  width={800}
                  height={476}
                  className="rounded-lg shadow-md"
                  priority
                />
                <p className="text-sm text-gray-600 italic text-center mt-2">
                  Satellite view of Fort Knox parking lot showing approximately 32 parking spaces
                </p>
              </div>

              <h4 className="text-lg font-medium text-black mt-8 mb-3">Part 2: Tunnel Vulnerability Assessment</h4>

              <p className="text-gray-700 leading-relaxed mb-4">
                One of the most significant potential vulnerabilities is unauthorized tunnel access. To understand this threat, I examined tunnel construction techniques used in other contexts, including Gaza tunnel construction methods.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Based on my research, a tunnel suitable for moving significant amounts of gold would need to be approximately 8-10 feet wide to accommodate equipment and personnel. For a tunnel extending from a concealed starting point to the depository, we're looking at:
              </p>

              <div className="info-card">
                <h5 className="font-semibold text-black mb-2">Tunnel Construction Analysis:</h5>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Dimensions:</strong> 8-10 feet wide tunnel</li>
                  <li>• <strong>Volume:</strong> 675,840 cubic feet</li>
                  <li>• <strong>Dirt displacement:</strong> ~25,000 cubic yards</li>
                  <li>• <strong>Concealment challenge:</strong> Where to hide excavated material</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mt-6 mb-4">
                The most challenging aspect of such an operation would be concealing the massive amount of excavated dirt. However, I noticed there's a golf course in the vicinity that could potentially provide cover for earthwork operations under the guise of course maintenance or improvement.
              </p>

              <div className="my-8">
                <Image
                  src="/images/essays/fort-knox-audit-plan/aerial-tunnel-routes.png"
                  alt="Aerial view of Fort Knox depository showing surrounding areas and potential tunnel routes for security assessment"
                  width={800}
                  height={734}
                  className="rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-600 italic text-center mt-2">
                  Aerial view showing Fort Knox depository location relative to surrounding areas and potential tunnel routes
                </p>
              </div>

              <h3 className="text-xl font-medium text-black mt-8 mb-4">Site Location Security Concerns</h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                The depository's location presents several security considerations:
              </p>

              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• <strong>Highway proximity:</strong> The facility is located near a main highway, providing easy access but also potential escape routes</li>
                <li>• <strong>Residential areas:</strong> The surrounding residential neighborhoods could provide cover for surveillance operations</li>
                <li>• <strong>Terrain:</strong> The topography offers both defensive advantages and potential concealment for unauthorized activities</li>
              </ul>

              <div className="my-8">
                <Image
                  src="/images/essays/fort-knox-audit-plan/location-security-map.png"
                  alt="Map showing Fort Knox depository in relation to nearby residential areas and transportation infrastructure"
                  width={800}
                  height={756}
                  className="rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-600 italic text-center mt-2">
                  Map showing Fort Knox depository in relation to nearby residential areas and transportation infrastructure
                </p>
              </div>
            </section>

            <section>
              <h2 className="section-title">Preliminary Recommendations</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Based on this initial assessment, several areas warrant immediate attention:
              </p>

              <ol className="space-y-3 text-gray-700 ml-6">
                <li><strong>1. Staffing Enhancement:</strong> Consider expanding security personnel to levels more appropriate for the value of assets protected</li>
                <li><strong>2. Underground Monitoring:</strong> Implement enhanced seismic and ground-penetrating monitoring systems to detect potential tunneling activities</li>
                <li><strong>3. Perimeter Security:</strong> Review and potentially expand the secure perimeter to address proximity vulnerabilities</li>
                <li><strong>4. Surveillance Network:</strong> Enhance monitoring of surrounding areas, particularly potential staging areas for unauthorized activities</li>
              </ol>
            </section>

            <section>
              <h2 className="section-title">Next Steps</h2>

              <p className="text-gray-700 leading-relaxed">
                This preliminary analysis represents Phase I of a comprehensive security audit. Future phases should include detailed physical security assessments, personnel security reviews, and technological security system evaluations. The goal is to ensure that America's gold reserves remain secure against all potential threats.
              </p>
            </section>

          </div>
        </article>
      </div>
    </main>
  )
}