import Image from 'next/image';
import Link from 'next/link';

export default function DetailsPage() {
  return (
    <>
    {/* Hero Header Section */}
    <section className="relative w-full h-[70vh] md:h-[80vh]">
      <Image
        src="/jeremy-bishop-EwKXn5CapA4-unsplash-grayscale.jpg"
        alt="TEDxUIUC Speaker Image"
        fill
        className="object-cover object-center z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6">
          <h1
            className="text-4xl md:text-9xl font-bold"
            style={{ fontFamily: 'Seawave-Alt' }}
          >
            TEDxUIUC: ROOTS AND ROUTES
          </h1>
        <p className="text-gray-300 max-w-2xl text-base md:text-lg">
          Here&apos;s everything you need to know to attend TEDxUIUC 2025.
        </p>
      </div>
    </section>

    {/* Roots and Routes Theme Description */}
        <section className="bg-black py-16 px-6 text-center border-b border-neutral-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Our Theme</h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          <span className="font-medium text-white">TEDxUIUC Roots and Routes</span> examines the tension between where we start and where we&apos;re headed! <br />
          Join us on <span className="text-red-400 font-semibold">Sunday, April 13 · 6:30PM–9:00PM</span> to hear inspiring talks and fresh perspectives on <br />
          identity, movement, and change.
        </p>
      </div>
    </section>

    <main className="bg-black text-white px-6 py-16">
    {/* Location */}
    <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
      {/* Text + Map */}
      <div className="md:col-span-2">
        <h2 className="text-2xl font-semibold mb-2">Location</h2>
        <p className="text-gray-300 mb-2">Spurlock Museum</p>
        <p className="text-gray-400 mb-4">
          600 S Gregory St, Urbana, IL 61801<br />
          The beautiful Spurlock Museum will host our 2025 TEDx event — a perfect setting for an afternoon of
          thought-provoking talks and community connection.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.450996779548!2d-88.22017602435005!3d40.10669077148076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd73cb07a9d15%3A0xa2054066cb1c22e0!2sSpurlock%20Museum!5e0!3m2!1sen!2sus!4v1712464047536!5m2!1sen!2sus"
          width="100%"
          height="250"
          className="rounded-md border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      {/* Spurlock Image */}
      <div className="md:col-span-3">
        <Image
          src="/spurlock.png"
          alt="Spurlock Museum"
          width={900}
          height={600}
          className="rounded-lg shadow-lg object-cover w-full h-auto"
        />
      </div>
    </section>


      {/* iVenture Partnership */}
      <section className="text-center py-20 bg-black px-6 md:px-12 border-t border-neutral-800">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">In Partnership with iVenture Accelerator</h2>
          <p className="text-gray-300 text-sm md:text-base">
            TEDxUIUC is proud to partner with <span className="text-red-400 font-semibold">iVenture Accelerator</span>, a University of Illinois initiative that supports student-led startups and social ventures. Together, we&apos;re empowering changemakers to spread impactful ideas and create real-world solutions.
          </p>
        </div>

        {/* iVenture Logo */}
        <div className="flex justify-center">
          <Image
            src="/iventurefull.png"
            alt="iVenture Accelerator Logo"
            width={400}
            height={200}
          />
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="text-center mb-24 px-4">
      <h2 className="text-2xl font-semibold mb-10">Featured Speakers</h2>

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Top row - 3 speakers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full">
          {/* Manu */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/speakers/Manu.png"
              alt="Manu Edakara"
              width={160}
              height={160}
              className="rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-bold">Manu Edakara</h3>
            <p className="text-sm text-gray-400 mb-2 text-center">
              Rolling the Dice on Humanity
            </p>
          </div>

          {/* Christopher */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/speakers/Christopher-LeMark.jpg"
              alt="Christopher LeMark"
              width={160}
              height={160}
              className="rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-bold">Christopher LeMark</h3>
            <p className="text-sm text-gray-400 mb-2 text-center">
              How to Turn Your Struggles Into Passion
            </p>
          </div>

          {/* Elisabeth */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/speakers/Elizabeth-Pollock.jpg"
              alt="Elisabeth Pollock"
              width={160}
              height={160}
              className="rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-bold">Elisabeth Pollock</h3>
            <p className="text-sm text-gray-400 mb-2 text-center">
              Inside the System, Against the Odds
            </p>
          </div>
        </div>

        {/* Bottom row - 2 speakers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-4xl">
          {/* Terry */}
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 mb-4 rounded-full overflow-hidden">
              <Image
                src="/speakers/Terry-Henderson.png"
                alt="Terry Henderson"
                width={160}
                height={160}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="text-lg font-bold">Terry Henderson</h3>
            <p className="text-sm text-gray-400 mb-2 text-center">
              Who Gets to Make Music?
            </p>
          </div>

           {/* Russell */}
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 mb-4 rounded-full overflow-hidden">
              <Image
                src="/speakers/Dr-Wigginton.png"
                alt="Russell Wigginton"
                width={160}
                height={160}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="text-lg font-bold">Russell Wigginton</h3>
            <p className="text-sm text-gray-400 mb-2 text-center">
              My Journey to the National Civil Rights Museum
            </p>
          </div>
        </div>
      </div>

      {/* View All Link */}
      <div className="mt-10">
        <Link
          href="/speakers"
          className="text-red-400 text-sm font-medium hover:underline"
        >
          Learn More →
        </Link>
      </div>
    </section>



      {/* Sponsors */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-6">Thank You to Our Sponsors</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Our event wouldn&apos;t be possible without the support of our incredible sponsors. Thank you for believing in our mission and helping us bring TEDxUIUC to life.
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
    </main>
    </>
  );
}
