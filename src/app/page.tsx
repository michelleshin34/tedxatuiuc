import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden text-white">
        <Image
          src="/tedx-bg.4a85bf2f.png"
          alt="TEDxUIUC event"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/50 z-[1]" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">TEDxUIUC: Roots and Routes</h1>
          <p className="mt-4 bg-gray-500/70 inline-block px-4 py-2 rounded-md">April 13, 2025 • Spurlock Museum</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/tickets">
              <button className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700">Get Tickets</button>
            </Link>
            <Link href="/details">
              <button className="bg-white text-black px-5 py-2 rounded-md hover:bg-gray-200">Details</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 md:py-16 bg-white text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Welcome to TEDxUIUC</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          TEDx is a global grassroots initiative, inspired by TED’s mission to share ‘ideas worth spreading.’
          Locally organized events feature live speakers and TED Talks, fostering community conversations and innovation.
          Over 3,000 events occur annually, independently organized under TED’s guidelines.
        </p>
        <Link href="/about" className="text-red-600 font-medium mt-4 inline-block hover:underline">
          Learn more about TEDxUIUC →
        </Link>
      </section>

      {/* Featured Speakers */}
      <section className="py-12 md:py-16 bg-gray-50 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Featured Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold">Speaker Name</h3>
              <p className="text-gray-700">Talk Title Goes Here</p>
              <p className="text-gray-500 text-sm mt-2">
                Brief description of the speaker and their talk topic.
              </p>
              <Link href={`/speakers/${i}`} className="text-red-600 mt-4 inline-block hover:underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
        <button className="mt-10 px-6 py-2 border border-gray-400 rounded-md hover:bg-gray-100">
          View All Speakers
        </button>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Be Part of TEDxUIUC</h2>
        <p className="max-w-xl mx-auto">
          Join us as an attendee, volunteer, or sponsor to be part of this inspiring event.
          Help us spread ideas worth sharing at the University of Illinois.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/tickets">
            <button className="bg-white text-red-600 px-6 py-2 rounded-md hover:bg-gray-100">Get Tickets</button>
          </Link>
          <Link href="/join">
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900">Join Our Team</button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/speakers">Speakers</Link></li>
              <li><Link href="/join">Join</Link></li>
              <li><Link href="/details">Details</Link></li>
              <li><Link href="/tickets">Tickets</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">TEDxUIUC</h3>
            <p className="text-sm max-w-sm">
              A student-organized event bringing together the brightest minds to the University of Illinois Urbana-Champaign.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <p className="text-sm">help@tedxuiuc.com</p>
            <div className="flex gap-3 mt-2">
              <a href="https://twitter.com" aria-label="Twitter">🐦</a>
              <a href="https://instagram.com" aria-label="Instagram">📸</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-400">
          © 2025 TEDxUIUC. All rights reserved.<br />
          This independent TEDx event is operated under license from TED.
        </div>
      </footer>
    </main>
  );
}
