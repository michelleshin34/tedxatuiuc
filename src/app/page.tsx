import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <Image
          src="/jeremy-bishop-EwKXn5CapA4-unsplash-grayscale.jpg"
          alt="TEDxUIUC event"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 text-white">
          <h1
            className="text-4xl md:text-9xl font-bold"
            style={{ fontFamily: 'Seawave-Alt' }}
          >
            TEDxUIUC: ROOTS AND ROUTES
          </h1>
          <p className="mt-4 bg-gray-700/70 inline-block px-4 py-2 rounded-md">
            April 13, 2025 • Spurlock Museum
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/tickets">
              <button className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 cursor-pointer">Get Tickets</button>
            </Link>
            <Link href="/details">
              <button className="bg-white text-black px-5 py-2 rounded-md hover:bg-gray-200 cursor-pointer">Event Details</button>
            </Link>
          </div>
        </div>
      </section>

      

      {/* Welcome Section */}
      <section className="py-12 md:py-16 bg-black text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Welcome to TEDxUIUC</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          TEDx is a global grassroots initiative, inspired by TED’s mission to share ‘ideas worth spreading.’
          Locally organized events feature live speakers and TED Talks, fostering community conversations and innovation.
          Over 3,000 events occur annually, independently organized under TED’s guidelines.
        </p>
        <Link href="/who" className="text-red-400 font-medium mt-4 inline-block hover:underline">
          Learn more about TEDxUIUC →
        </Link>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-black text-center px-6 md:px-12 border-t border-b border-neutral-800">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Thank You to Our Sponsors</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          We are grateful to the incredible organizations and partners who support our mission of spreading ideas worth sharing.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 max-w-5xl mx-auto">
          <Image
            src="/sponsors/here.png"
            alt="HERE apartments"
            width={250}
            height={60}
          />
          <Image
            src="/sponsors/molex.png"
            alt="Molex"
            width={250}
            height={60}
          />
          <Image
            src="/sponsors/sandf.jpg"
            alt="Stowell and Friedman"
            width={250}
            height={60}
          />
          <Image
            src="/sponsors/BrewLab.png"
            alt="BrewLab"
            width={250}
            height={60}
          />
        </div>
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
            <button className="bg-white text-red-600 px-6 py-2 rounded-md hover:bg-gray-100 cursor-pointer">Get Tickets</button>
          </Link>
          <Link href="/join">
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 cursor-pointer">Join Our Team</button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white pt-12 pb-8 border-t border-red-600">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          
          {/* About TEDxUIUC */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4 tracking-wide">About TEDxUIUC</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              TEDxUIUC is a student-led initiative that brings the spirit of TED to the University of Illinois Urbana-Champaign.
              We unite changemakers, storytellers, and visionaries through powerful talks and creative collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4 tracking-wide">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/who" className="hover:text-white transition">About</Link></li>
                <li><Link href="/speakers" className="hover:text-white transition">Speakers</Link></li>
              </ul>
              <ul className="space-y-2">
                <li><Link href="/join" className="hover:text-white transition">Join</Link></li>
                <li><Link href="/details" className="hover:text-white transition">Event Details</Link></li>
                <li><Link href="/tickets" className="hover:text-white transition">Tickets</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact / Social */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4 tracking-wide">Connect With Us</h3>
            <p className="text-sm text-gray-400 mb-2">tedxuiuc@gmail.com</p>
            <div className="flex items-center gap-4">
              <Link href="https://instagram.com/tedxuiuc" target="_blank" aria-label="Instagram">
                <Image src="/icons/instagram.png" alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="https://twitter.com/tedxuiuc" target="_blank" aria-label="Twitter">
                <Image src="/icons/x.png" alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="https://linkedin.com/company/tedxuiuc" target="_blank" aria-label="LinkedIn">
                <Image src="/icons/linkedin.png" alt="LinkedIn" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-xs text-gray-500 border-t border-gray-800 pt-6 px-4">
          © 2025 TEDxUIUC. All rights reserved. <br />
          This independent TEDx event is operated under license from TED.
        </div>
      </footer>

    </main>
  );
}