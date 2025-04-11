import Image from 'next/image';
import Link from 'next/link';

export default function WhoPage() {
  return (
    <>
      {/* Hero Header Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh]">
        <Image
          src="/maxresdefault.jpg"
          alt="TEDxUIUC Header Image"
          fill
          className="object-cover object-center z-0"
          priority
        />
      </section>

      <main className="bg-black text-white px-6 py-16">
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">WHO WE ARE AT TEDxUIUC</h1>
          <p className="text-gray-300 text-lg">
            Discover the story behind TEDxUIUC and our mission to bring ideas worth spreading to the University of Illinois community.
          </p>
        </section>

        {/* TED vs TEDx Section */}
        <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-neutral-900 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">What is TED?</h2>
            <p className="text-gray-300 mb-4">
              TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 26 years ago, TED has
              grown to support those world-changing ideas with multiple initiatives. At TED, the world&apos;s leading thinkers and doers are asked to give
              the talk of their lives in 18 minutes. Talks are then made available, free, at TED.com.
            </p>
            <p className="text-gray-300">
              TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Benoit Mandelbrot, Philippe Starck, Ngozi
              Okonjo-Iweala, Isabel Allende and former UK Prime Minister Gordon Brown. Two major TED events are held each year: The TED Conference in
              Long Beach, California and TEDGlobal in Edinburgh, Scotland.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              For more information, visit <a href="http://www.ted.com/registration" className="text-500 underline">TED.com</a>, follow TED on <a href="http://twitter.com/TEDTalks" className="text-500 underline">X</a> or <a href="http://www.facebook.com/TED" className="text-500 underline">Facebook</a>.
            </p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">What is TEDx?</h2>
            <p className="text-gray-300 mb-4">
              In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like
              experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection in a small group.
            </p>
            <p className="text-gray-300">
              These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general
              guidance for the TEDx program, but individual TEDx events are self-organized (subject to certain rules and regulations).
            </p>
          </div>
        </section>

        {/* What is TEDxUIUC */}
        <section className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">About TEDxUIUC</h2>
          <p className="text-gray-300">
            TEDxUIUC aims to enhance the University of Illinois at Urbana-Champaign and surrounding communities through a TED-like experience.
            It provides top thinkers and the most remarkable doers a platform to share innovative ideas, inspiring experiences, and limitless
            passions through presentations, performances, discussions and more at a day-long conference.
          </p>
        </section>

        {/* Our History */}
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Our History</h2>
          <p className="text-gray-300 mb-4">
            TEDxUIUC was founded in 2012 by a group of passionate students who wanted to bring the TEDx experience to the University of Illinois campus.
            Since then, we&apos;ve hosted various successful events featuring speakers from various disciplines and backgrounds.
          </p>
          <p className="text-gray-300">
            Our events have covered topics ranging from cutting-edge technology and scientific breakthroughs to social innovation and artistic expression,
            all united by our commitment to sharing ideas worth spreading.
          </p>
        </section>
      </main>

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

    </>
  );
}
