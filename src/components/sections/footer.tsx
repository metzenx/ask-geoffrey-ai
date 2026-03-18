import { Bot } from 'lucide-react'

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-indigo-400" />
            <span className="text-sm font-semibold text-white">Ask Geoffrey AI</span>
          </div>
          <a
            href="https://x.com/geoffreyai24934"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 transition-colors duration-200 hover:text-white"
            aria-label="Follow on X"
          >
            <XIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="flex gap-6">
          <a href="#how-it-works" className="cursor-pointer text-sm text-neutral-500 transition-colors duration-200 hover:text-white">
            How It Works
          </a>
          <a href="#why-us" className="cursor-pointer text-sm text-neutral-500 transition-colors duration-200 hover:text-white">
            Why Us
          </a>
          <a href="#solutions" className="cursor-pointer text-sm text-neutral-500 transition-colors duration-200 hover:text-white">
            Solutions
          </a>
          <a href="#faq" className="cursor-pointer text-sm text-neutral-500 transition-colors duration-200 hover:text-white">
            FAQ
          </a>
        </div>

        <p className="text-xs text-neutral-600">
          &copy; {new Date().getFullYear()} Ask Geoffrey AI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
