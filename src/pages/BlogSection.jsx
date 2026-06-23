import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import loreImg from '../assets/lore.png';
import techImg from '../assets/tech.png';
import artImg from '../assets/art.png';
import undergroundImg from '../assets/underground.png';
import chromeImg from '../assets/chrome.png';
import aiWarImg from '../assets/ai_war.png';


const POSTS = [
  {
    id: 1,
    date: "Jun 14, 2026",
    titlePlain: "The Ghost Districts: ",
    titleAccent: "Who Really Runs the Lower Sprawl",
    excerpt: "Three corporations claim the territory on paper. The people who actually keep the lights on tell a very different story.",
    tag: "Lore",
    image: loreImg,
  },
  {
    id: 2,
    date: "Jun 11, 2026",
    titlePlain: "Neural Lace v9: ",
    titleAccent: "First Look at the Black Market Build",
    excerpt: "Leaked schematics suggest a latency drop nobody asked permission for.",
    tag: "Tech",
    image: techImg,
  },
  {
    id: 3,
    date: "Jun 9, 2026",
    titlePlain: "Neon Cartography: ",
    titleAccent: "Mapping the City That Never Sleeps",
    excerpt: "An illustrator's six-month project tracing light pollution as a living organism.",
    tag: "Art",
    image: artImg,
  },
  {
    id: 4,
    date: "Jun 6, 2026",
    titlePlain: "Inside the Wire Markets: ",
    titleAccent: "A Night With the Data Brokers",
    excerpt: "They don't sell drugs anymore. They sell the thirty seconds before the drone arrives.",
    tag: "Underground",
    image: undergroundImg,
  },
  {
    id: 5,
    date: "Jun 2, 2026",
    titlePlain: "Why Chrome Limbs ",
    titleAccent: "Are Getting Cheaper (and Worse)",
    excerpt: "The race to the bottom in street-grade cybernetics, explained by the techs who fix it.",
    tag: "Tech",
    image: chromeImg,
  },
  {
    id: 6,
    date: "May 28, 2026",
    titlePlain: "The First A.I. War: ",
    titleAccent: "What the History Books Left Out",
    excerpt: "A deep dive into the redacted files of 2054 and the machines that chose not to fight.",
    tag: "Lore",
    image: aiWarImg,
  },
  {
    id: 7,
    date: "May 15, 2026",
    titlePlain: "Constructs of the Mind: ",
    titleAccent: "Tracing the Origin of Digital Souls",
    excerpt: "How the earliest consciousness-transfer experiments paved the way for modern immortality.",
    tag: "Lore",
    image: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 8,
    date: "May 20, 2026",
    titlePlain: "Quantum Processing: ",
    titleAccent: "Breaking the 128-Qubit Barrier",
    excerpt: "New cooling techniques have finally stabilized the next generation of consumer mainframes.",
    tag: "Tech",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 9,
    date: "Jun 4, 2026",
    titlePlain: "Holographic Graffitis: ",
    titleAccent: "Vandalism or Evolution?",
    excerpt: "Street artists are using stolen light-bending tech to turn corporate ads into subversive masterpieces.",
    tag: "Art",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 10,
    date: "May 22, 2026",
    titlePlain: "Synthwave Renaissance: ",
    titleAccent: "The Resurgence of the 2080s Sound",
    excerpt: "Why underground clubs are ditching neuro-beats for analog synthesizers and retro rhythm.",
    tag: "Art",
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 11,
    date: "May 30, 2026",
    titlePlain: "The Smuggler's Route: ",
    titleAccent: "How Banned Cybernetics Enter the City",
    excerpt: "Following the supply chain from the wasteland scrap yards directly to the back-alley clinics.",
    tag: "Underground",
    image: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 12,
    date: "May 12, 2026",
    titlePlain: "Rogue Hackers: ",
    titleAccent: "Inside the Most Notorious Data Heist",
    excerpt: "An exclusive interview with the shadow runners who cracked the impenetrable MegaCorp vault.",
    tag: "Underground",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
  },
];

const RECENT_POSTS = POSTS.slice(0, 5).map(p => ({ id: p.id, title: p.titlePlain + p.titleAccent }));

const TOPICS = ["General", "Lore", "Tech", "Art", "Underground"];



function Sidebar({ activeTopic, onTopicChange }) {
  return (
    <aside className="w-full shrink-0 lg:w-64">
      <a
        href="#"
        className="block text-sm font-medium text-zinc-300 hover:text-white"
      >
        All posts
      </a>

      <div className="mt-8">
        <p className="text-sm font-semibold text-white">Recent</p>
        <ul className="mt-4 space-y-5">
          {RECENT_POSTS.map((post) => (
            <li key={post.id}>
              <a
                href="#"
                className="text-sm leading-snug text-zinc-400 transition-colors hover:text-white"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <p className="text-sm font-semibold text-white">Topics</p>
        <ul className="mt-4 space-y-1">
          {TOPICS.map((topic) => (
            <li key={topic}>
              <button
                onClick={() => onTopicChange(topic)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${activeTopic === topic
                    ? "bg-white/10 font-medium text-white"
                    : "text-zinc-400 hover:text-white"
                  }`}
              >
                {topic}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}


function PostRow({ post }) {
  return (
    <a
      href="#"
      className="group block border-t border-white/10 py-10 first:border-t-0 sm:py-14"
    >
      {post.image && (
        <div className="mb-6 overflow-hidden rounded-2xl">
          <img
            src={post.image}
            alt=""
            className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:aspect-[2.4/1]"
          />
        </div>
      )}

      <p className="text-sm text-zinc-500">{post.date}</p>

      <h3 className="mt-3 text-xl font-semibold leading-snug sm:text-2xl lg:text-[28px]">
        <span className="text-white transition-colors group-hover:text-zinc-200">
          {post.titlePlain}
        </span>
        <span className="bg-gradient-to-r from-orange-600 to-yellow-400 bg-clip-text text-transparent">
          {post.titleAccent}
        </span>
      </h3>

      <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-400">
        {post.excerpt}
      </p>

      <p className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
        {post.tag}
      </p>

    </a>
  );
}


export default function CyberBlog({ onBack }) {
  const [activeTopic, setActiveTopic] = useState("Lore");

  const filteredPosts = POSTS.filter(
    (p) => activeTopic === "General" || p.tag === activeTopic
  ).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div id="blog-section" className="w-full min-h-screen bg-black relative">
      {onBack && (
        <div className="absolute top-4 left-4 sm:top-6 sm:left-8 z-50">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-2 bg-red-600/10 border border-red-600 text-red-500 font-exo font-bold uppercase tracking-widest text-sm hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </button>
        </div>
      )}

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 pt-24 sm:pt-32">
        <Sidebar activeTopic={activeTopic} onTopicChange={setActiveTopic} />

        <main className="flex-1">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Underworld{" "}
              <span className="bg-gradient-to-r from-orange-600 to-yellow-400 bg-clip-text text-transparent">
                Developer Blog
              </span>
            </h1>
            <p className="mt-3 text-base text-zinc-400 sm:text-lg">
              Lore, tech, and signal from the cybernetic frontier.
            </p>
          </div>

          <div className="mt-14 sm:mt-16">
            {filteredPosts.map((post) => (
              <PostRow key={post.id} post={post} />
            ))}

            {filteredPosts.length === 0 && (
              <p className="py-10 text-center text-zinc-500">
                No transmissions found in this channel yet.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
