import Link from 'next/link';

export default function TeamPage() {
  return (
    <main className="bg-black text-white px-6 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the TEDxUIUC Team</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Were a team of passionate students dedicated to bringing TED&apos;s mission of "Ideas Worth Spreading" to the University of Illinois Urbana-Champaign.
        </p>
      </section>

      {/* Executive Mission */}
      <section className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Executive Board Mission</h2>
        <p className="text-gray-400">
          Our executive team leads TEDxUIUC with vision, integrity, and creativity — ensuring every event is thoughtfully planned,
          authentically impactful, and true to the spirit of TED. We strive to highlight diverse voices and spark curiosity through powerful storytelling.
        </p>
      </section>

      {/* Team Members */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-neutral-900 rounded-xl overflow-hidden shadow-md text-center">
            <div className="w-full h-64 bg-gray-800">
              <img
                src={`/team/member${i}.jpg`}
                alt={`Team Member ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Team Member {i}</h3>
              <p className="text-red-500 text-sm mb-2">Role Title</p>
              <p className="text-gray-400 text-sm">
                A short blurb about who this person is, what they contribute to the team, and what drives them.
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
