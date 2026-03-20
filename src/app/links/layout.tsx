import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Links | Ask Geoffrey AI',
  description:
    'AI automation for growing businesses. Book a free audit, explore services, and connect with Geoffrey.',
  openGraph: {
    title: 'Ask Geoffrey AI',
    description:
      'AI automation for growing businesses. Book a free audit, explore services, and connect.',
    images: [{ url: '/geoffrey-avatar.jpg', width: 400, height: 400 }],
  },
  twitter: {
    card: 'summary',
    site: '@geoffreyai24934',
    title: 'Ask Geoffrey AI',
    description:
      'AI automation for growing businesses. Book a free audit, explore services, and connect.',
    images: ['/geoffrey-avatar.jpg'],
  },
}

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return children
}
