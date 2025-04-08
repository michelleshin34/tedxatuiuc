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
            Recruitment for the TEDxUIUC team will begin in <span className="text-red-500 font-medium">Fall 2025 (FA25)</span>. More details will be shared soon!
          </p>
          <p className="text-gray-400 mt-2">Check back later to see how you can get involved.</p>
        </section>

        {/* Departments */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Departments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Marketing */}
            <div className="bg-neutral-900 p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-red-400">Marketing</h3>
              <p className="text-gray-300 text-sm">
                Craft the story of TEDxUIUC. As a marketing team member, you&apos;ll create campaigns, design graphics, and shape the public image of our conference across campus and beyond.
              </p>
            </div>
            {/* Social Media */}
            <div className="bg-neutral-900 p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-red-400">Social Media</h3>
              <p className="text-gray-300 text-sm">
                From Instagram posts to TikToks and everything in between, you&apos;ll manage our online presence and connect with our audience through creative, consistent content.
              </p>
            </div>
            {/* Finance */}
            <div className="bg-neutral-900 p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-red-400">Finance</h3>
              <p className="text-gray-300 text-sm">
                Keep TEDxUIUC running behind the scenes. You&apos;ll manage budgets, track expenses, and work with sponsors to make sure every dollar helps build something impactful.
              </p>
            </div>
            {/* Event Planning & Logistics */}
            <div className="bg-neutral-900 p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-red-400">Event Planning and Logistics</h3>
              <p className="text-gray-300 text-sm">
                Make the magic happen. You&apos;ll handle everything from venue coordination to day-of execution—turning big ideas into seamless, memorable experiences.
              </p>
            </div>
            {/* Curation */}
            <div className="bg-neutral-900 p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-red-400">Curation</h3>
              <p className="text-gray-300 text-sm">
                Shape the soul of TEDxUIUC. You&apos;ll help discover, develop, and coach speakers, ensuring their ideas are powerful, authentic, and stage-ready.
              </p>
            </div>
            {/* Membership */}
            <div className="bg-neutral-900 p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-red-400">Membership</h3>
              <p className="text-gray-300 text-sm">
                Build the TEDxUIUC community. You&apos;ll recruit, onboard, and support team members while planning bonding events that keep our team connected and inspired.
              </p>
            </div>
            {/* President */}
            <div className="bg-neutral-900 p-6 rounded-md shadow-md sm:col-span-2">
              <h3 className="text-lg font-semibold mb-2 text-red-400">President</h3>
              <p className="text-gray-300 text-sm">
                Lead the vision. As president, you&apos;ll guide the team, oversee operations, and make sure every branch of TEDxUIUC is working in harmony toward an unforgettable event.
              </p>
            </div>
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
