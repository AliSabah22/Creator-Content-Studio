"use client";
import { useSession, signOut } from "next-auth/react";
import { useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

const sidebarLinks = [
  { label: "Home", icon: "🏠", path: "/studio" },
  { label: "Asset library", icon: "🗂️", path: "/studio/asset-library" },
  { label: "Analytics", icon: "📊", badge: "New", path: "/studio/analytics" },
  { label: "Subscription", icon: "💳", path: "/studio/subscription" },
  { label: "Learning center", icon: "🎓", path: "/studio/learning-center" },
  { label: "Help center", icon: "❓", path: "/studio/help-center" },
];

export default function StudioPage() {
  const { data: session } = useSession();
  const user = session?.user;
  const [expanded, setExpanded] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const [videoUrls, setVideoUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter((file) => file.type.startsWith("video/"));
    const invalidFiles = files.filter((file) => !file.type.startsWith("video/"));
    if (invalidFiles.length > 0) {
      toast.error("Only video files are allowed.");
    }
    if (validFiles.length === 0) return;
    setUploading(true);
    setProgress(0);
    setSelectedFiles(validFiles);
    setVideoUrls([]);
    // Simulate upload progress
    let prog = 0;
    const interval = setInterval(() => {
      prog += 10;
      setProgress(prog);
      if (prog >= 100) {
        clearInterval(interval);
        setUploading(false);
        setProgress(100);
        setVideoUrls(validFiles.map((file) => URL.createObjectURL(file)));
        toast.success("Files uploaded successfully!");
      }
    }, 120);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files || []);
    handleFiles(files);
  };

  return (
    <div className="min-h-screen flex bg-[#0f0f0f] text-white">
      <Toaster position="top-center" />
      {/* Sidebar */}
      <aside className={`bg-[#181818] flex flex-col py-6 px-2 border-r border-gray-800 min-h-screen transition-all duration-200 ${expanded ? "w-64" : "w-20"}`}>
        <div className="mb-8 flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-black font-bold">CC</div>
            {expanded && <span className="font-bold text-lg tracking-wide">Creator Studio</span>}
          </div>
          <button
            className="text-gray-400 hover:text-white p-1 rounded transition"
            onClick={() => setExpanded((e) => !e)}
            aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {expanded ? <span>&#x25C0;</span> : <span>&#x25B6;</span>}
          </button>
        </div>
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-green-600 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
              {user?.name?.[0] || "U"}
            </div>
            {expanded && (
              <div>
                <div className="font-semibold">{user?.name || "User"}</div>
                <div className="text-xs text-gray-400">{user?.email || "user@email.com"}</div>
              </div>
            )}
          </div>
          {expanded && (
            <button className="mt-2 text-xs text-gray-400 underline hover:text-white" onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
          )}
        </div>
        <nav className="flex-1 flex flex-col gap-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <button
                key={link.label}
                onClick={() => router.push(link.path)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition group w-full text-left ${isActive ? "bg-[#232323] text-green-400" : "hover:bg-[#232323]"}`}
              >
                <span className="text-xl">{link.icon}</span>
                {expanded && <span className="font-medium flex-1">{link.label}</span>}
                {link.badge && expanded && (
                  <span className="ml-2 text-xs bg-green-700 text-white rounded-full px-2 py-0.5">{link.badge}</span>
                )}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-[#181818]">
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold">ClipBasic</span>
            <span className="text-yellow-400 text-sm font-semibold">✨ ClipAnything</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-gray-400">⚡ 83</span>
            <button className="bg-gray-700 px-4 py-1 rounded text-sm font-semibold hover:bg-gray-600">Add more credits</button>
            <span className="relative">
              <span className="absolute top-0 right-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
              <span className="text-xl">🔔</span>
            </span>
          </div>
        </header>

        {/* Main Area */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Upload Card */}
          <div
            className={`max-w-3xl mx-auto bg-gradient-to-br from-[#232323] to-[#1a1a1a] rounded-2xl shadow-2xl p-8 flex flex-col items-center mb-12 border-2 transition-all ${
              dragActive ? "border-green-400 shadow-green-400/20" : "border-transparent"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept="video/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
              multiple
            />
            <div className="flex gap-2 mb-6">
              <button
                className="bg-[#181818] px-5 py-2.5 rounded-l-full text-gray-300 border border-gray-700 hover:bg-white/5 transition-colors"
                onClick={handleUploadClick}
                disabled={uploading}
              >
                Drop a video link
              </button>
              <button
                className="bg-[#181818] px-5 py-2.5 text-gray-300 border-t border-b border-gray-700 hover:bg-white/5 transition-colors"
                onClick={handleUploadClick}
                disabled={uploading}
              >
                Upload
              </button>
              <button
                className="bg-[#181818] px-5 py-2.5 rounded-r-full text-gray-300 border border-gray-700 hover:bg-white/5 transition-colors"
                onClick={handleUploadClick}
                disabled={uploading}
              >
                Google Drive
              </button>
            </div>
            <div className="w-full flex flex-col items-center">
              {dragActive && (
                <div className="mb-4 text-green-400 text-lg font-medium animate-pulse">Drop your video here...</div>
              )}
              {selectedFiles.length > 0 && (
                <div className="mb-4 text-sm text-gray-300">
                  Selected: {selectedFiles.map((file) => <span key={file.name} className="font-semibold mr-2">{file.name}</span>)}
                  {uploading && <span className="ml-2 animate-pulse text-green-400">Uploading...</span>}
                </div>
              )}
              {uploading && (
                <div className="w-full max-w-md bg-gray-700/50 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full transition-all shadow-lg shadow-green-500/20"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
              <button 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-lg shadow-green-500/20 w-full max-w-md mb-4" 
                disabled={uploading} 
                onClick={handleUploadClick}
              >
                {uploading ? `Uploading... (${progress}%)` : "Get clips in 1 click"}
              </button>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Click here to try a sample project</a>
              {videoUrls.length > 0 && (
                <div className="mt-8 w-full flex justify-center">
                  <div className="grid grid-cols-1 gap-8 w-full max-w-4xl">
                    {videoUrls.map((url, idx) => (
                      <video
                        key={url}
                        src={url}
                        controls
                        className="rounded-xl w-full h-auto max-h-[600px] object-contain border border-gray-700/50 shadow-2xl"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">All projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Placeholder project cards */}
              <div className="bg-gradient-to-br from-[#232323] to-[#1a1a1a] rounded-xl p-6 flex flex-col shadow-xl hover:shadow-2xl transition-all">
                <div className="bg-gray-700/50 rounded-lg h-40 mb-4"></div>
                <span className="font-semibold text-lg mb-2">Demo Project</span>
                <span className="text-sm text-gray-400 mb-3">29 days before expiring</span>
                <span className="text-sm text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full w-fit">Free Plan • Demo</span>
              </div>
              <div className="bg-gradient-to-br from-[#232323] to-[#1a1a1a] rounded-xl p-6 flex flex-col shadow-xl hover:shadow-2xl transition-all">
                <div className="bg-gray-700/50 rounded-lg h-40 mb-4"></div>
                <span className="font-semibold text-lg mb-2">Sample Project</span>
                <span className="text-sm text-gray-400 mb-3">29 days before expiring</span>
                <span className="text-sm text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full w-fit">Free Plan • Demo</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 