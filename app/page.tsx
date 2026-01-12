import { siteContent } from '@/lib/content'

export default function Home() {
  const sections = [
    { id: 'builds', title: 'Builds' },
    { id: 'founders', title: 'Hall of Fame Founders' },
    { id: 'essays', title: 'Favorite Essays' },
    { id: 'books', title: 'Favorite Books' },
    { id: 'music', title: 'Favorite Music' },
    { id: 'investments', title: 'Angel Investments' }
  ]

  return (
    <main className="bg-white min-h-screen">
      <div className="flex">
        {/* Navigation Sidebar */}
        <nav className="fixed left-0 top-0 h-full w-64 bg-gray-50 border-r border-gray-200 p-6 overflow-y-auto">
          <div className="mb-8">
            <h3 className="font-medium text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="ml-64 flex-1">
          <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-6 mb-6">
            <img
              src="/images/profile.jpg"
              alt="Paul Yacoubian"
              className="w-24 h-24 rounded-full object-cover"
            />
            <h1 className="text-4xl font-normal text-black">
              {siteContent.name}
            </h1>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {siteContent.bio}
          </p>

          {/* Vision Statement */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-base text-gray-800 leading-relaxed">
              I believe AI and APIs will allow us to build every idea we have. Kids will be rich by the time they graduate high school. College will be obsolete. Kids will have large families. And America will be the most populous country on Earth. 🇺🇸
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {siteContent.social.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {social.platform === "X (Twitter)" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )}
                {social.platform === "LinkedIn" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                <span className="font-medium">{social.platform}</span>
              </a>
            ))}
          </div>
        </header>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Builds */}
          <section id="builds">
            <h2 className="text-2xl font-normal text-black mb-6">Builds</h2>
            <ul className="space-y-4">
              {siteContent.sections.builds.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="block text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-medium">{item.title}</div>
                    <div className="text-gray-600 text-sm mt-1">{item.description}</div>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Hall of Fame Founders */}
          <section id="founders">
            <h2 className="text-2xl font-normal text-black mb-6">Hall of Fame Founders</h2>
            <ul className="space-y-4">
              {siteContent.sections.founders.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="block text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-medium">{item.name}</div>
                    <div className="text-gray-600 text-sm mt-1">{item.company}</div>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Essays */}
          <section id="essays">
            <h2 className="text-2xl font-normal text-black mb-6">Favorite Essays</h2>
            <ul className="space-y-4">
              {siteContent.sections.essays.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="block text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-medium">{item.title}</div>
                    <div className="text-gray-600 text-sm mt-1">{item.description}</div>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Books */}
          <section id="books">
            <h2 className="text-2xl font-normal text-black mb-6">Favorite Books</h2>
            <ul className="space-y-4">
              {siteContent.sections.books.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="block text-gray-900 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="font-medium">{item.title}</div>
                    <div className="text-gray-600 text-sm mt-1">by {item.author}</div>
                    <div className="text-gray-500 text-xs mt-1 italic">{item.learning}</div>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Music */}
          <section id="music">
            <h2 className="text-2xl font-normal text-black mb-6">Favorite Music</h2>
            <ul className="space-y-4">
              {siteContent.sections.music.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="block text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-medium">{item.title}</div>
                    <div className="text-gray-600 text-sm mt-1">{item.description}</div>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Angel Investments */}
          <section id="investments">
            <h2 className="text-2xl font-normal text-black mb-6">Angel Investments</h2>
            <ul className="space-y-4">
              {siteContent.sections.investments.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="block text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-medium">{item.title}</div>
                    <div className="text-gray-600 text-sm mt-1">{item.description}</div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
          </div>
        </div>
      </div>
    </main>
  )
}