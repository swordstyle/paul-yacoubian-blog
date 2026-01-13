'use client'

import { useState } from 'react'

interface Podcast {
  id: number
  podcastName: string
  episodeTitle: string
  date: string
  duration: string
  topics: string[]
  description?: string
  sortDate: number // For sorting purposes
  youtubeUrl?: string // YouTube video URL
}

const podcasts: Podcast[] = [
  {
    id: 1,
    podcastName: "This Week in Startups",
    episodeTitle: "E1719: Keeping up with GPT's rapid evolution & AI's potential impact (with Jason Calacanis)",
    date: "Apr 2023",
    topics: ["GPT Evolution", "AI Impact", "Demo"],
    sortDate: 202304,
    youtubeUrl: "https://www.youtube.com/watch?v=le1Ne4uXEU0"
  },
  {
    id: 2,
    podcastName: "Riding Unicorns",
    episodeTitle: "S8E4: From Accounting to AI Entrepreneurship (with James Pringle)",
    date: "Oct 2024",
    duration: "1h 4m",
    topics: ["Entrepreneurship", "LLMs", "Scaling"],
    sortDate: 202410,
    youtubeUrl: "https://www.youtube.com/watch?v=pBzIyF9avL0"
  },
  {
    id: 4,
    podcastName: "The Danny Miranda Podcast",
    episodeTitle: "#075: Building The Future Through Goggins Glasses",
    date: "Mar 2021",
    duration: "~1h",
    topics: ["Building in Public", "Mindset", "Future of AI"],
    sortDate: 202103,
    youtubeUrl: "https://www.youtube.com/watch?v=2VVPQHw2wOw"
  },
  {
    id: 5,
    podcastName: "Building Fires",
    episodeTitle: "#19: Co-Founder Copy.ai - Making the World's Greatest Copy-Generator with GPT-3",
    date: "Nov 30, 2020",
    duration: "55m 14s",
    topics: ["GPT-3", "Copy Generation", "Angel Investing"],
    sortDate: 202011,
    youtubeUrl: "https://open.spotify.com/episode/5U4zvmxcN1rySnX9d56JN7"
  },
  {
    id: 6,
    podcastName: "Data Radicals (Alation)",
    episodeTitle: "GTM is a Data Management Problem — How AI Can Fix It (with David Chao)",
    date: "Apr 2025",
    duration: "~45m",
    topics: ["GTM Strategy", "Data", "AI Automation"],
    sortDate: 202504,
    youtubeUrl: "https://www.youtube.com/watch?v=FWzm1_pbHms"
  },
  {
    id: 7,
    podcastName: "McKinsey on Building Products",
    episodeTitle: "Product-Led Growth in AI-Native Companies",
    date: "Dec 2024",
    duration: "~40m",
    topics: ["PLG", "Analytics", "Scaling"],
    sortDate: 202412,
    youtubeUrl: "https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/paul-yacoubian-on-product-led-growth-in-ai-native-companies"
  },
  {
    id: 8,
    podcastName: "Churn.fm",
    episodeTitle: "Ep 279: The Evolution of Copy.ai from AI Copywriting to Enterprise Workflow Automation",
    date: "Feb 2024",
    duration: "~50m",
    topics: ["Enterprise", "Retention", "Workflow"],
    sortDate: 202402,
    youtubeUrl: "https://www.churn.fm/episode/the-evolution-of-copy-ai-from-ai-copywriting-to-enterprise-workflow-automation"
  },
  {
    id: 9,
    podcastName: "The Orbit Shift Podcast",
    episodeTitle: "Building in Public and Organic Marketing",
    date: "Feb 2021",
    duration: "~45m",
    topics: ["Building in Public", "0 to $50K MRR", "Organic Growth"],
    sortDate: 202102,
    youtubeUrl: "https://www.youtube.com/watch?v=YOUTUBE_ID_ORBIT_SHIFT"
  },
  {
    id: 12,
    podcastName: "Liam Ottley",
    episodeTitle: "Copy.ai Founder Reveals His SECRETS to AI Startup Success",
    date: "Feb 2023",
    duration: "~1h",
    topics: ["AI Startup", "MVPs", "Hiring"],
    sortDate: 202302,
    youtubeUrl: "https://www.youtube.com/watch?v=sPdNd3bExTo"
  },
  {
    id: 13,
    podcastName: "Jam.dev Podcast",
    episodeTitle: "170 Startup Ideas, AI's Enterprise Problem & Building to 10M Users",
    date: "Sep 2023",
    topics: ["Startup Ideas", "Enterprise AI", "Product Scale"],
    sortDate: 202309,
    youtubeUrl: "https://www.youtube.com/watch?v=VJIhnVjcx-M"
  },
  {
    id: 14,
    podcastName: "Out of the Woods (SwagUp)",
    episodeTitle: "AI and the next gen of businesses w/ Paul Yacoubian & Chris Lu @ Copy.ai (with Michael Martocci)",
    date: "Oct 2022",
    topics: ["AI Business", "Next Generation", "Copy.ai"],
    sortDate: 202210,
    youtubeUrl: "https://www.youtube.com/watch?v=_ATXZZgdrqw"
  },
  {
    id: 15,
    podcastName: "Kopywriting Kourse",
    episodeTitle: "The Future of AI Writing & Where's It's going (with Neville Medhora)",
    date: "Jan 2024",
    topics: ["AI Writing", "Future of AI", "Copywriting"],
    sortDate: 202401,
    youtubeUrl: "https://www.youtube.com/watch?v=qEKRuej2DnU"
  },
  {
    id: 16,
    podcastName: "Kopywriting Kourse",
    episodeTitle: "Open AI, GPT-3 & Copy.ai Interview with Paul Yacoubian (with Neville Medhora)",
    date: "Feb 2021",
    topics: ["GPT-3", "Copy.ai", "AI Writing"],
    sortDate: 202102,
    youtubeUrl: "https://www.youtube.com/watch?v=tmaH0nzQrbk"
  },
  {
    id: 17,
    podcastName: "Marketing & Media Alliance",
    episodeTitle: "Cutting Down Go-to-Market Bloat with AI Workflows (with Greg and Rex)",
    date: "Aug 2025",
    topics: ["GTM Strategy", "AI Workflows", "Enterprise Marketing"],
    sortDate: 202508,
    youtubeUrl: "https://www.youtube.com/watch?v=82NsqcfdkoE"
  },
  {
    id: 18,
    podcastName: "Building with AI (AI Ready Show)",
    episodeTitle: "5 AI Product MVPs in 90 Days & Intelligence as a Business KPI (with Haroon Choudery)",
    date: "Nov 2023",
    topics: ["AI MVPs", "Product Development", "Intelligence KPI"],
    sortDate: 202311,
    youtubeUrl: "https://www.youtube.com/watch?v=QFzvJpfJh7w"
  },
  {
    id: 19,
    podcastName: "Startups Unedited",
    episodeTitle: "EP 75: How Copy.ai Hit $60K MRR in 5 Months with GPT-3 & Twitter PLG (with Jorge Soto)",
    date: "Aug 2021",
    topics: ["$60K MRR", "GPT-3", "Twitter PLG"],
    sortDate: 202108,
    youtubeUrl: "https://www.youtube.com/watch?v=0cMUR03yiec"
  },
  {
    id: 20,
    podcastName: "Build in Public with KP",
    episodeTitle: "Building in Public & Copy.ai's Origin Story with Paul Yacoubian & Blake Emal",
    date: "Apr 2021",
    topics: ["Building in Public", "Origin Story", "Twitter Community"],
    sortDate: 202104,
    youtubeUrl: "https://www.youtube.com/watch?v=z_bVMNXL3mo"
  }
]

export default function Podcasts() {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc') // Default to newest first

  const sortedPodcasts = [...podcasts].sort((a, b) => {
    if (sortOrder === 'desc') {
      return b.sortDate - a.sortDate // Newest first
    } else {
      return a.sortDate - b.sortDate // Oldest first
    }
  })

  const toggleSort = () => {
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
  }
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 lg:py-16">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
            >
              ← Back to Home
            </a>
          </div>
          <h1 className="text-4xl font-normal text-black mb-4">
            Podcast Appearances
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Conversations on AI, startups, and building in public from Copy.ai's journey.
          </p>
          <p className="text-sm text-gray-600">
            17 appearances covering everything from GPT-3 early days to scaling AI-native companies.
            Click podcast names with 🎬 icons to watch directly on YouTube.
          </p>
        </header>

        {/* Podcasts Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Podcast & Episode</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 w-24">
                  <button
                    onClick={toggleSort}
                    className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                  >
                    Date
                    <span className="text-xs">
                      {sortOrder === 'desc' ? '↓' : '↑'}
                    </span>
                  </button>
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 w-48">Key Topics</th>
              </tr>
            </thead>
            <tbody>
              {sortedPodcasts.map((podcast, index) => (
                <tr key={podcast.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    {podcast.youtubeUrl ? (
                      <a
                        href={podcast.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-blue-600 transition-colors"
                      >
                        <div className="font-medium text-gray-900 hover:text-blue-600">{podcast.podcastName}</div>
                        <div className="text-gray-600 text-sm mt-1 leading-relaxed">{podcast.episodeTitle}</div>
                        <div className="text-xs text-blue-600 mt-1">
                          {podcast.youtubeUrl?.includes('youtube.com') ? '🎬 Watch on YouTube' : '🎧 Listen to Podcast'}
                        </div>
                      </a>
                    ) : (
                      <div>
                        <div className="font-medium text-gray-900">{podcast.podcastName}</div>
                        <div className="text-gray-600 text-sm mt-1 leading-relaxed">{podcast.episodeTitle}</div>
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-gray-700 text-sm">{podcast.date}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1">
                      {podcast.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {/* Footer Note */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 italic">
            These appearances span Copy.ai's journey from $0 to Series B, covering early GPT-3 experiments,
            building in public, scaling challenges, and the evolution of AI-native company building.
            Topics range from technical demos to business strategy and fundraising insights.
          </p>
        </div>
      </div>
    </main>
  )
}