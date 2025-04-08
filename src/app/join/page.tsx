import Image from 'next/image';
import Link from 'next/link';

export default function JoinPage() {
  return (
    <>
      {/* Hero Header Section */}
        <section className="relative w-full h-[70vh] md:h-[80vh]">
        <Image
          src="/group.jpeg"
          alt="TEDxUIUC Join Us Image"
          fill
          className="object-cover object-center z-0"
          priority
        />
      </section>

    <main className="bg-black text-white px-6 py-16">
      {/* Page Intro */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join TEDxUIUC</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Recruitment for the TEDxUIUC team will begin in <span className="text-red-500 font-medium">Fall 2025 (FA25)</span>.
          More details will be shared soon!
        </p>
        <p className="text-gray-400 mt-2">Check back later to see how you can get involved.</p>
      </section>

      {/* Departments */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Departments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            'Marketing & Social Media',
            'Finance',
            'Event Planning & Logistics',
            'Curation',
            'Membership',
            'President Roles',
          ].map((dept, i) => (
            <div key={i} className="bg-neutral-900 p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-red-400">{dept}</h3>
              <p className="text-gray-300 text-sm">
                {dept === 'Marketing & Social Media'
                  ? 'Help shape the voice and presence of TEDxUIUC through content, outreach, and engagement.'
                  : dept === 'Finance'
                  ? 'Handle budgeting, sponsorships, and funding to ensure a successful event.'
                  : dept === 'Event Planning & Logistics'
                  ? 'Coordinate vendors, venues, and all on-the-ground logistics.'
                  : dept === 'Curation'
                  ? 'Work closely with speakers to help develop talks that inspire and connect.'
                  : dept === 'Membership'
                  ? 'Foster team culture and keep everyone connected and motivated.'
                  : 'Lead the team and drive the vision behind TEDxUIUC.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <p className="text-gray-400 mb-4">Get updates on recruitment, events, and speaker announcements.</p>
        <div className="flex justify-center gap-6 text-2xl">
          <Link href="https://instagram.com/tedxuiuc" target="_blank" aria-label="Instagram">
            <Image src="/icons/instagram.png" alt="Instagram" width={32} height={32} />
          </Link>
          <Link href="https://twitter.com/tedxuiuc" target="_blank" aria-label="Twitter">
            <Image src="/icons/x.png" alt="Twitter" width={32} height={32} />
          </Link>
          <Link href="https://linkedin.com/tedxuiuc" target="_blank" aria-label="LinkedIn">
            <Image src="/icons/linkedin.png" alt="LinkedIn" width={32} height={32} />
          </Link>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <p className="text-gray-400">Stay tuned for announcements about recruitment events and info sessions!</p>
      </section>
    </main>
    </>
  );
}
