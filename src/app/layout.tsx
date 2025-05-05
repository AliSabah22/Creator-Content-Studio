import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "./SessionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Creator Content Studio",
  description: "AI-powered video clip generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <NextAuthSessionProvider>
          <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                  <h1 className="text-xl font-bold text-gray-900">Creator Content Studio</h1>
                </div>
                <nav className="flex items-center space-x-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                  <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                </nav>
              </div>
            </div>
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <p className="text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Creator Content Studio. All rights reserved.
              </p>
            </div>
          </footer>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
