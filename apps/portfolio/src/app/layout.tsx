import type { Metadata } from 'next';
import './globals.css';
import { SanityLive } from '@/sanity/live';
import { Nav } from '@/components/Nav';

export const metadata: Metadata = {
  title: {
    default: 'saisaynoomleng_dev',
    template: '%s | saisaynoomleng_dev',
  },
  description: `I'm Sai Say Noom Leng, a software engineer and Computer Science student passionate about building modern, scalable web applications.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
