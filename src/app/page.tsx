"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

/**
 * Landing page for Creator Content Studio
 * Professional, long, and visually engaging
 */

export default function Home() {
  const router = useRouter();

  function handleGetFreeClips(e: React.FormEvent) {
    e.preventDefault();
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center min-h-[80vh] text-center">
        <div className="mt-24 mb-10">
          <span className="text-green-400 font-semibold text-sm tracking-widest">#1 AI VIDEO CLIPPING TOOL</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
          1 long video, 10 viral clips.<br />Create 10x faster.
        </h1>
        <p className="text-lg sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Creator Content Studio turns long videos into shorts, and publishes them to all social platforms in one click.
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl mx-auto mb-8" onSubmit={handleGetFreeClips}>
          <input
            type="text"
            placeholder="Drop a video link"
            className="input-dark flex-1"
          />
          <button type="submit" className="btn-primary w-full sm:w-auto">Get free clips</button>
          <span className="text-gray-400 mx-2 hidden sm:inline">or</span>
          <button type="button" className="btn-secondary w-full sm:w-auto">Upload files</button>
        </form>
      </section>

      {/* Trusted By Logos */}
      <section className="container py-8">
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          {['visa', 'github', 'nvidia', 'zoom', 'audacy', 'memphis'].map((logo) => (
            <div key={logo} className="h-10 w-24 bg-gray-800 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm font-semibold">{logo}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 1: Create social-ready clips instantly */}
      <section className="container py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <img src="https://placehold.co/500x300/222/fff?text=Clip+Timeline" alt="Clip Timeline" className="rounded-xl shadow-lg w-full" />
        </div>
        <div className="md:w-1/2 w-full text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Create social-ready clips <span className="text-green-400">instantly</span></h2>
          <p className="text-lg text-gray-300 mb-6">Our AI finds the best moments and turns your long videos into viral-ready shorts, ready to share on any platform.</p>
          <ul className="text-gray-400 space-y-2 mb-6">
            <li>• Automatic highlight detection</li>
            <li>• Smart cropping and reframing</li>
            <li>• Instant captions and branding</li>
          </ul>
          <button className="btn-primary">Try it now</button>
        </div>
      </section>

      {/* Section 2: Customize with AI B-Roll, overlays, fonts & more */}
      <section className="container py-20 flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <img src="https://placehold.co/500x300/222/fff?text=AI+B-Roll" alt="AI B-Roll" className="rounded-xl shadow-lg w-full" />
        </div>
        <div className="md:w-1/2 w-full text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Customize with <span className="text-green-400">AI B-Roll</span>, overlays, fonts & more</h2>
          <p className="text-lg text-gray-300 mb-6">Add contextually relevant B-Roll, overlays, and custom fonts to make your clips stand out. Choose from royalty-free or AI-generated visuals.</p>
          <ul className="text-gray-400 space-y-2 mb-6">
            <li>• AI B-Roll suggestions</li>
            <li>• Brand templates</li>
            <li>• Timeline-based editing</li>
          </ul>
          <button className="btn-secondary">See customization</button>
        </div>
      </section>

      {/* Section 3: Grow faster with 1-click posting and analytics */}
      <section className="container py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <img src="https://placehold.co/500x300/222/fff?text=Analytics" alt="Analytics" className="rounded-xl shadow-lg w-full" />
        </div>
        <div className="md:w-1/2 w-full text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Grow faster with <span className="text-green-400">1-click posting</span> and analytics</h2>
          <p className="text-lg text-gray-300 mb-6">Schedule, post, and track your clips across all platforms. Get actionable insights and a virality score for every clip.</p>
          <ul className="text-gray-400 space-y-2 mb-6">
            <li>• Social post scheduler</li>
            <li>• Aspect ratio presets</li>
            <li>• Virality score</li>
          </ul>
          <button className="btn-primary">See analytics</button>
        </div>
      </section>

      {/* Section 4: Seamless collaboration */}
      <section className="container py-20 flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <img src="https://placehold.co/500x300/222/fff?text=Collaboration" alt="Collaboration" className="rounded-xl shadow-lg w-full" />
        </div>
        <div className="md:w-1/2 w-full text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Seamless <span className="text-green-400">collaboration</span></h2>
          <p className="text-lg text-gray-300 mb-6">Invite your team, manage projects, and streamline your workflow. Work together to create, review, and publish clips.</p>
          <ul className="text-gray-400 space-y-2 mb-6">
            <li>• Team workspaces</li>
            <li>• Content management</li>
            <li>• Export to XML</li>
          </ul>
          <button className="btn-secondary">Learn more</button>
        </div>
      </section>

      {/* Section 5: Community stats */}
      <section className="container py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Join a global community to <span className="text-green-400">unleash your creativity</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-gray-900 rounded-xl py-8 px-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-red-400 mb-2">10M+</span>
            <span className="text-gray-300">Creators & businesses</span>
          </div>
          <div className="bg-gray-900 rounded-xl py-8 px-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-purple-400 mb-2">20+</span>
            <span className="text-gray-300">Languages supported</span>
          </div>
          <div className="bg-gray-900 rounded-xl py-8 px-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-green-400 mb-2">60B+</span>
            <span className="text-gray-300">Total views from clips</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-12 border-t border-gray-800 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Creator Content Studio. All rights reserved.</div>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    name: 'AI-Powered Editing',
    description: 'Let our AI analyze your videos and suggest the best moments to create engaging clips.',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    name: 'One-Click Export',
    description: 'Export your clips directly to your favorite social media platforms with just one click.',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    name: 'Smart Templates',
    description: 'Choose from a variety of professionally designed templates to make your clips stand out.',
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
  },
];
