import Image from 'next/image';

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
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are at TEDxUIUC</h1>
        <p className="text-gray-300 text-lg">
          Discover the story behind TEDxUIUC and our mission to bring ideas worth spreading to the University of Illinois community.
        </p>
      </section>

      {/* TED vs TEDx Section */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-neutral-900 p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">What is TED?</h2>
          <p className="text-gray-300">
            TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago,
            TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world&apos;s leading thinkers
            and doers to speak for 18 minutes or less.
          </p>
        </div>
        <div className="bg-neutral-900 p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">What is TEDx?</h2>
          <p className="text-gray-300">
            TEDx is a global grassroots initiative, inspired by TED&apos;s mission to share &apos;ideas worth spreading.&apos; Locally organized events feature
            live speakers and TED Talks, fostering community conversations and innovation. Over 3,000 events occur annually, independently organized
            under TED&apos;s guidelines.
          </p>
        </div>
      </section>

      {/* What is TEDxUIUC */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">What is TEDxUIUC?</h2>
        <p className="text-gray-300">
          TEDxUIUC is an independently organized TEDx event at the University of Illinois Urbana-Champaign. Our mission is to bring together
          the brightest minds from our campus and community to share ideas that inspire action and change.
        </p>
      </section>

      {/* Our History */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Our History</h2>
        <p className="text-gray-300 mb-4">
          TEDxUIUC was founded by a group of passionate students who wanted to bring the TEDx experience to the University of Illinois campus.
          Since then, we&apos;ve hosted various successful events featuring speakers from various disciplines and backgrounds.
        </p>
        <p className="text-gray-300">
          Our events have covered topics ranging from cutting-edge technology and scientific breakthroughs to social innovation and artistic expression,
          all united by our commitment to sharing ideas worth spreading.
        </p>
      </section>
    </main>
    </>
  );
}