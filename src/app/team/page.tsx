export default function TeamPage() {
  const teamMembers = [
    {
      name: "Kelly Shin",
      role: "President",
      image: "/exec/pres.jpeg",
      blurb:
        "Kelly Shin is a current junior studying MCB with a minor in health technology. She joined TEDx to meet people from different majors and talk to leaders from around the country.",
    },
    {
      name: "Cuiying Lin",
      role: "Director of Finance",
      image: "/exec/finance.jpeg",
      blurb:
        "Cuiying Lin is a junior studying accountancy + data science. She is looking forward to successfully hosting conferences and meeting the speakers.",
    },
    {
      name: "Ella Ko",
      role: "Director of Social Media",
      image: "/exec/social.jpeg",
      blurb:
        "Ella Ko is a freshman studying political science. She is excited for the TEDx conference and can't wait to hear all the speakers.",
    },
    {
      name: "Darby Elo",
      role: "Director of Curation",
      image: "/exec/curation.jpeg",
      blurb:
        "Darby Elo is a sophomore double majoring in political science and Spanish. She joined TEDx because of her passion for TED's mission and is passionate about spreading new ideas.",
    },
    {
      name: "Wasif Umair",
      role: "Director of Marketing",
      image: "/exec/market.jpeg",
      blurb:
        "Wasif Umair is a sophomore studying computer engineering. He joined TEDx because he wanted to meet new people.",
    },
    {
      name: "Claire Gao",
      role: "Director of Event Planning",
      image: "/exec/event.jpeg",
      blurb:
        "Claire Gao is a junior studying psychology with a minor in public relations. She joined TEDx to help bring people and ideas together.",
    },
    {
      name: "Arushi Srivastava",
      role: "Director of Membership",
      image: "/exec/member.jpeg",
      blurb:
        "Arushi Srivastava is a sophomore double majoring in philosophy and psychology with a minor in legal studies. She joined TEDx because of the freedom to implement your own ideas.",
    },
  ];

  return (
    <main className="bg-black text-white px-6 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the TEDxUIUC Team</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We&apos;re a team of passionate students dedicated to bringing TED&apos;s mission of &quot;Ideas Worth Spreading&quot; to the University of Illinois Urbana-Champaign.
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
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-neutral-900 rounded-xl overflow-hidden shadow-md text-center">
            <div className="w-full h-64 bg-gray-800">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-red-500 text-sm mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.blurb}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
