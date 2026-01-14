import { siteContent } from '@/lib/content'
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
  const sections = [
    { id: 'builds', title: 'Builds' },
    { id: 'myessays', title: 'My Essays - Upcoming' },
    { id: 'founders', title: 'Hall of Fame Founders' },
    { id: 'essays', title: 'Favorite Essays' },
    { id: 'books', title: 'Favorite Books' },
    { id: 'music', title: 'Favorite Music' },
    { id: 'investments', title: 'Angel Investments' }
  ]

  const externalPages = [
    { href: '/mental-models', title: 'Mental Models' },
    { href: '/podcasts', title: 'Podcasts' }
  ]

  return (
    <main className="bg-white min-h-screen">
      <div className="lg:flex">
        {/* Mobile Navigation - Top */}
        <nav className="lg:hidden bg-gray-50 border-b border-gray-200 p-4">
          <h3 className="font-medium text-gray-900 mb-3 text-sm">Navigation</h3>
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="inline-block text-xs bg-white text-gray-600 hover:text-blue-600 transition-colors py-1.5 px-3 rounded-md border border-gray-200"
              >
                {section.title}
              </a>
            ))}
            {externalPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="inline-block text-xs bg-blue-50 text-blue-700 hover:text-blue-900 transition-colors py-1.5 px-3 rounded-md border border-blue-200"
              >
                {page.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Desktop Navigation Sidebar */}
        <nav className="hidden lg:block fixed left-0 top-0 h-full w-64 bg-gray-50 border-r border-gray-200 p-6 overflow-y-auto">
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

            <div className="mt-8 pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3 text-sm">Resources</h4>
              <ul className="space-y-2">
                {externalPages.map((page) => (
                  <li key={page.href}>
                    <a
                      href={page.href}
                      className="block text-sm text-blue-700 hover:text-blue-900 transition-colors py-1"
                    >
                      {page.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="lg:ml-64 flex-1">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 lg:py-16">
            {/* Header */}
            <header className="mb-12 lg:mb-16">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6">
                <img
                  src="/images/profile.jpg"
                  alt="Paul Yacoubian"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover flex-shrink-0"
                />
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl sm:text-4xl font-normal text-black">
                    {siteContent.name}
                  </h1>
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-center sm:text-left">
                {siteContent.bio}
              </p>

              {/* Vision Statement */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 mb-6">
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  I believe AI and APIs will allow us to build every idea we have. Kids will be rich by the time they graduate high school. College will be obsolete. Kids will have large families. And America will be the most populous country on Earth. 🇺🇸
                </p>
              </div>

              {/* Social Links */}
              <SocialLinks social={siteContent.social} />
            </header>

            {/* Content Sections */}
            <div className="space-y-12 sm:space-y-16">
              {/* Builds */}
              <section id="builds">
                <h2 className="text-2xl font-normal text-black mb-6">Builds</h2>
                <ul className="space-y-4">
                  {siteContent.sections.builds.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.url}
                        className="content-list-item"
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-gray-600 text-sm mt-1">{item.description}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* My Essays */}
              <section id="myessays">
                <h2 className="text-2xl font-normal text-black mb-6">My Essays - Upcoming</h2>
                <ul className="space-y-4">
                  {siteContent.sections.myEssays.upcoming.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.url}
                        className="content-list-item"
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
                        className="content-list-item"
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

                {/* Published Essays */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Published</h3>
                  <ul className="space-y-4">
                    {siteContent.sections.essays.published.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.url}
                          className="content-list-item"
                        >
                          <div className="font-medium">{item.title}</div>
                          <div className="text-gray-600 text-sm mt-1">{item.description}</div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Upcoming Essays */}
                {siteContent.sections.essays.upcoming.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming</h3>
                    <ul className="space-y-4">
                      {siteContent.sections.essays.upcoming.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item.url}
                            className="content-list-item"
                          >
                            <div className="font-medium">{item.title}</div>
                            <div className="text-gray-600 text-sm mt-1">{item.description}</div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>

              {/* Books */}
              <section id="books">
                <h2 className="text-2xl font-normal text-black mb-6">Favorite Books</h2>
                <ul className="space-y-4">
                  {siteContent.sections.books.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.url}
                        className="content-list-item"
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
                        className="content-list-item"
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
                        className="content-list-item"
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-gray-600 text-sm mt-1">{item.description}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </main>
          </div>
        </div>
      </div>
    </main>
  )
}