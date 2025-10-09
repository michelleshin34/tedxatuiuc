import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'TEDxUIUC',
  description: 'TEDxUIUC official website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black text-white scroll">
        {/* AppBar */}
        <nav className="sticky top-0 z-30 bg-black shadow-sm backdrop-blur-sm border-b border-red-600">
          <div className="w-full px-6 md:px-20 py-5 flex justify-between items-center">
            {/* Logo */}
            <div className="flex-1">
              <Link href="/" className="flex items-center">
                <img
                  src="/logo-white.png"
                  alt="TEDxUIUC logo"
                  className="h-8 md:h-10 w-auto"
                />
              </Link>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex gap-6 text-sm font-medium items-center text-white">
              <Link href="/" className="text-white">HOME</Link>
              <Link href="/speakers" className="text-white">SPEAKERS</Link>
              <Link href="/join" className="text-white">JOIN</Link>
              <div className="relative group">
                <span className="text-white inline-block px-1 cursor-pointer">
                  ABOUT
                </span>
                <div className="absolute top-full right-0 mt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 flex-col bg-neutral-900 shadow-md rounded-md w-40 py-2 z-50 transition-all duration-300 ease-in-out delay-100">
                  <Link href="/who" className="block px-4 py-2 text-white">WHO WE ARE</Link>
                  <Link href="/team" className="block px-4 py-2 text-white">MEET OUR TEAM</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}