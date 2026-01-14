interface Essay {
  title: string
  url: string
  description: string
}

export const siteContent = {
  name: "Paul Yacoubian",
  bio: "Built Copy.ai. Now building new projects. Connoisseur of business models. Learning to code, creative explosions, tweeting.",
  social: [
    { platform: "X (Twitter)", url: "https://x.com/PaulYacoubian", handle: "@PaulYacoubian" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/paulyacoubian/", handle: "paulyacoubian" }
  ],
  sections: {
    myEssays: {
      published: [],
      upcoming: [
        { title: "Building in Public Playbook", url: "#", description: "Step-by-step guide on how Copy.ai grew its audience and community" },
        { title: "Recommended Twitter Follows", url: "#", description: "Curated list of people worth following in AI and startups" },
        { title: "Why the best stories are written on typewriters", url: "#", description: "The power of intentional writing and thinking before typing" },
        { title: "Fort Knox OpSec", url: "#", description: "Notes on security of American gold" },
        { title: "Bitcoin is Not Technology", url: "#", description: "Non-Girardian Technologies Create Value" },
        { title: "Transit Revolution", url: "#", description: "Transforming urban transportation" },
        { title: "Back of the Envelope", url: "#", description: "Quick calculations for big decisions" },
        { title: "Think Bigger", url: "#", description: "Expanding mental models and ambition" },
        { title: "High School Future", url: "#", description: "Reimagining education for the next generation" },
        { title: "Tech Hubs", url: "#", description: "Geographic centers of innovation" },
        { title: "Classical Liberalism Defense", url: "#", description: "Case for individual liberty and free markets" }
      ]
    },
    builds: [
      { title: "Copy.ai", url: "https://copy.ai", description: "AI-powered copywriting platform (2020-2025). Raised $28m from Craft Ventures, Wing Ventures, Sequoia Capital, Elad Gil. Acquired by FullCast. Scaled to 17m users and customers like Microsoft, JP Morgan, ServiceNow, Workday, Siemens (enterprise). CoFounder CEO. Cofounded with my bestie Chris Lu." },
      { title: "Slow Keys", url: "https://slowkeys.com", description: "A typewriter that slows you down so you can think again. Digital minimalism meets intentional writing." }
    ],
    founders: [
      { name: "Elon Musk", company: "Tesla, SpaceX, X, OpenAI", url: "#" },
      { name: "Peter Thiel", company: "PayPal, Palantir, Founders Fund", url: "#" },
      { name: "David Sacks", company: "PayPal, Craft Ventures, Yammer", url: "#" },
      { name: "Fred Smith", company: "FedEx", url: "#" },
      { name: "Paul Graham", company: "Y Combinator, Viaweb", url: "#" },
      { name: "Paul Tudor Jones", company: "Tudor Investment Corporation, Robin Hood Foundation", url: "#" },
      { name: "Charlie Munger", company: "Berkshire Hathaway", url: "#" },
      { name: "Palmer Luckey", company: "Oculus, Anduril", url: "#" },
      { name: "Joe Lonsdale", company: "Palantir, 8VC, University of Austin", url: "#" }
    ],
    essays: {
      published: [
        { title: "Warren Buffett's Letters", url: "https://www.berkshirehathaway.com/letters/letters.html", description: "Berkshire Hathaway shareholder letters" },
        { title: "Paul Graham's Essays", url: "http://www.paulgraham.com/articles.html", description: "Essays on startups, technology, and life" },
        { title: "Charles Bukowski Archive", url: "https://bukowskiforum.com/database/", description: "Complete collection of Bukowski's works" },
        { title: "Elad Gil's Blog", url: "http://blog.eladgil.com/", description: "Insights on startups and scaling companies" }
      ],
      upcoming: [] as Essay[]
    },
    books: [
      {
        title: "Zero to One",
        author: "Peter Thiel & Blake Masters",
        url: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
        learning: "Building monopolies and creating new value"
      },
      {
        title: "Poor Charlie's Almanack",
        author: "Charlie Munger",
        url: "https://www.amazon.com/Poor-Charlies-Almanack-Charles-Expanded/dp/1578645018",
        learning: "Power of mental models and application of principles"
      },
      {
        title: "The Pleasure of Finding Things Out",
        author: "Richard Feynman",
        url: "https://www.amazon.com/Pleasure-Finding-Things-Out-Feynman/dp/0465023959",
        learning: "How to truly have fun learning playfully"
      },
      {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        url: "https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194",
        learning: "Capitalist mindset"
      },
      {
        title: "Amp It Up",
        author: "Frank Slootman",
        url: "https://www.amazon.com/Amp-It-Up-Unlocking-Organizations/dp/1119836115",
        learning: "Lessons of urgency and fighting entropy in organizations"
      },
      {
        title: "Tuxedo Park",
        author: "Jennet Conant",
        url: "https://www.amazon.com/Tuxedo-Park-Jennet-Conant/dp/0684872889",
        learning: "How science and innovation happen in communities"
      },
      {
        title: "With No Fear of Failure",
        author: "Tom Fatjo",
        url: "https://www.amazon.com/No-Fear-Failure-Recapturing-Enterprise/dp/0975276808",
        learning: "A CPA quits his job to become a garbage man"
      },
      {
        title: "The Diversity Myth",
        author: "David O. Sacks & Peter Thiel",
        url: "https://www.amazon.com/Diversity-Myth-Multiculturalism-Political-Conformity/dp/0945999763",
        learning: "Critical examination of diversity policies in higher education"
      },
      {
        title: "Founders at Work",
        author: "Jessica Livingston",
        url: "https://www.amazon.com/Founders-Work-Stories-Startups-Early/dp/1430210788",
        learning: "Stories from startup founders in their own words"
      },
      {
        title: "Entrepreneurial Megabucks",
        author: "A. David Silver",
        url: "https://www.amazon.com/Entrepreneurial-Megabucks-Greatest-Entrepreneurs-management/dp/0471821845",
        learning: "How the greatest entrepreneurs built their fortunes"
      },
      {
        title: "Companies Histories",
        author: "Library Reference Set",
        url: "#",
        learning: "Detailed volumes on how major companies were founded"
      }
    ],
    music: [
      { title: "Red Hot Chili Peppers", url: "#", description: "Fun power and energy" },
      { title: "The Prodigy", url: "#", description: "Pure power and intensity" },
      { title: "Chemical Brothers", url: "#", description: "Sensory force fields" },
      { title: "Three 6 Mafia", url: "#", description: "Unstoppable force as a group" },
      { title: "Wu-Tang Clan", url: "#", description: "Unstoppable force as a group" },
      { title: "Glorilla", url: "#", description: "Attitude" },
      { title: "Beastie Boys", url: "#", description: "Attitude" },
      { title: "Pitbull", url: "#", description: "Fun dance vibes" },
      { title: "TOBACCO", url: "#", description: "Melding of subconcious" },
      { title: "Redman", url: "#", description: "Keeping it real" }
    ],
    investments: [
      { title: "Circle.co", url: "#", description: "Community platform" },
      { title: "Nabis", url: "#", description: "Cannabis distribution platform" },
      { title: "Anduril", url: "#", description: "Defense technology" },
      { title: "Replit", url: "#", description: "Collaborative coding platform" },
      { title: "Fortmatic", url: "#", description: "Web3 wallet infrastructure" },
      { title: "Project Wren", url: "#", description: "Carbon offset platform" },
      { title: "Microacquire", url: "#", description: "Startup acquisition marketplace" },
      { title: "Levels", url: "#", description: "Metabolic health tracking" },
      { title: "Tako", url: "#", description: "Data visualization" },
      { title: "Probably", url: "#", description: "AI native data analysis" },
      { title: "Beacons", url: "#", description: "Creator monetization platform" },
      { title: "Offsight", url: "#", description: "Prefab construction workflow management" },
      { title: "Zerion", url: "#", description: "DeFi portfolio tracker" },
      { title: "Dex", url: "#", description: "CRM platform" },
      { title: "Rutter", url: "#", description: "Commerce API platform" },
      { title: "Photon Commerce", url: "#", description: "E-commerce infrastructure" },
      { title: "Lexica", url: "#", description: "AI art search engine" },
      { title: "Flow Club", url: "#", description: "Virtual coworking platform" },
      { title: "Softr", url: "#", description: "No-code app builder" },
      { title: "Replicate.com (acquired)", url: "#", description: "AI model hosting platform" },
      { title: "Lightfield", url: "#", description: "AI Native CRM" },
      { title: "Tunelark", url: "#", description: "Music Lessons Platform" },
      { title: "Mainstreet (acquired)", url: "#", description: "Tax credit automation" },
      { title: "RMFG.com", url: "#", description: "Custom Metal On-Demand" },
      { title: "Dukaan", url: "#", description: "E-commerce platform for India" },
      { title: "Living Carbon", url: "#", description: "Enhanced reforestation" },
      { title: "Mercury Bank", url: "#", description: "Banking for startups" },
      { title: "Rippling", url: "#", description: "HR and IT management platform" },
      { title: "Scale.ai (acquired)", url: "#", description: "Data platform for AI" },
      { title: "Lucky Robots", url: "#", description: "AI Simulations for Robots" },
      { title: "Airplane (acquired)", url: "#", description: "Developer workflow platform" },
      { title: "Lume Health (acquired)", url: "#", description: "Nurse staffing platform" },
      { title: "Jam.dev", url: "#", description: "AI bug resolution platform" },
      { title: "Dub", url: "#", description: "Link management platform" },
      { title: "Wiselayer (acquired)", url: "#", description: "Security platform" },
      { title: "Colorfull", url: "#", description: "Healthy Food Delivered at Work" },
      { title: "Kled", url: "#", description: "Large datasets for AI models" },
      { title: "Zania", url: "#", description: "Autonomous Compliance Automation" },
      { title: "NIXR", url: "#", description: "Solving Addiction" }
    ]
  }
}