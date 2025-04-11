'use client';
import { useState } from 'react';
import Image from 'next/image';

type Speaker = {
  id: number;
  name: string;
  title: string;
  affiliation: string;
  image: string;
  bio: string;
};

const speakers = [
  {
    id: 1,
    name: 'Manu Edakara',
    title: '“Rolling the Dice on Humanity”',
    affiliation: 'Entrepreneur · Gies · Computer Science · Anthropology',
    image: '/speakers/Manu.png',
    bio: `Manu Edakara is the Director of the award-winning iVenture Accelerator, the educational entrepreneurship program for top student startups at the University of Illinois System. Overseeing a portfolio of 150+ startups, nonprofits, and socio-cultural initiatives, Manu has spearheaded ventures that raised $160M+, generated $1 billion in enterprise value, and created over 1,000 full-time jobs. His entrepreneurship center has multiple programs, courses, organizations, and events that serve 1000s of stakeholders annually. Under Manu's leadership, iVenture provides unparalleled experiential learning, taking students beyond traditional academics into real-world applications. Notably, 42% of iVenture’s founders are women, 23% come from underrepresented backgrounds, and nearly one-third are international and emphasize social impact. His passion for innovation stems from a deep desire to prepare young innovators working on the big problems of the future. For his pioneering work, Manu has been named to the Forbes 30 under 30 list and is the youngest Distinguished Alumnus of the University of Illinois College of Applied Health Sciences.`,
  },
  {
    id: 2,
    name: 'Christopher LeMark',
    title: '“A Beautiful Mess”',
    affiliation: 'Mental Health Advocate · Psychology · Business · Humanities',
    image: '/speakers/Christopher-LeMark.jpg',
    bio: `Christopher LeMark is a speaker, artist, and mental health advocate who transforms personal pain into purposeful work. Raised on the South Side of Chicago and shaped by childhood trauma, Christopher turned his healing journey into a mission to help others find language for their struggles and courage to seek support.
    He is the founder of Coffee, Hip-Hop & Mental Health, a grassroots movement that uses culture and conversation to normalize therapy and expand emotional education in overlooked communities. Without funding or a blueprint, he built CHHAMH from the ground up — creating a
    safe space where music, coffee, and vulnerability come together to inspire healing.
    With over two decades in hip-hop and spoken word, Christopher blends creativity and advocacy through programs like Music is Medicine and CHHAMH University, teaching emotional resilience through culture and storytelling. His work is grounded in truth, shaped by experience, and driven by a belief in the power of people to heal when given the tools and space to do so.`,
  },
  {
    id: 3,
    name: 'Elisabeth Pollock',
    title: '“Inside the System, Against the Odds: The Case for Public Defenders”',
    affiliation: 'Federal Public Defender · Political Science · Law · Humanities',
    image: '/speakers/Elizabeth-Pollock.jpg',
    bio: `Elisabeth Pollock currently serves as the Chief Public Defender for Champaign County, Illinois, a job she accepted in December of 2022 after eleven years working as an Assistant Federal Public Defender in the Central District of Illinois. She works with clients charged with a variety of offenses, from possession of controlled substances to first degree murder. Prior to joining the FPD, Lis worked for six years as a general practice attorney at Beckett & Webber, P.C., in Urbana, Illinois, handling a variety of cases in the areas of civil litigation and state and federal criminal defense. 
    Elisabeth’s mission is, and has always been, to provide the highest quality of representation to every single client who enters her orbit. It is her belief that public defenders are the cornerstone of the criminal justice system, and no one’s rights are protected unless everyone’s rights are protected. Every single client is a whole person, a human being who is deserving of respect, empathy, and dedication. These principles are the foundation for the representation provided every day by the Champaign County Public Defender’s Office. 
    In her spare time, Elisabeth serves on the Scholarship Foundation Board of the CU One to One Mentoring Program, the East Central Illinois Women’s Association Program Committee, the Champaign County Bar Association Board of Governors, and she coaches her son’s 8th grade track team.`,
  },
  {
    id: 4,
    name: 'Terry Henderson',
    title: '“Who Gets to Make Music? Reimagining Inclusion from Start to Studio”',
    affiliation: 'Musician & Educator · Music Department · Culture Centers',
    image: '/speakers/Terry-Henderson.png',
    bio: `Singer, composer, conductor, and entrepreneur Terry M. Henderson II began his musical journey at six, singing in the current Uniting Voices Of Chicago. His twelve-year tenure there allowed Terry to visit and perform all over the country, in over eight countries and sing in more than twenty different languages. With this, Henderson also became proficient in the violin and piano through private instruction. Terry can be credited with The Lyric Opera of Chicago, The Chicago Symphony Orchestra, The Ravinia Festival, Bobby McFerrin, and the Joffrey Ballet. Henderson holds a Bachelor of Arts in Music Degree from the DePaul University School of Music, focusing on voice (opera) and composition. Terry also holds a Master of Science in Entertainment Business from Full Sail University. Terry served as Music Director at St. Mary Immaculate Parish in Plainfield, the 5th largest Catholic Parish in the country for eight years. He teaches private voice and contemporary music through the conservatory program at Merit School of Music. While making his mark on the music and artist community, he is also running his startup artist management and media production company, TwelveThirty Entertainment, after his late brother, who died in a car accident on December 30th, 2006. In the summer of 2017, Terry made his opera conducting debut with the Floating Opera Company. In the words of Terry, “There is no better way to connect and express oneself than being creative.” `,
  },
  {
    id: 5,
    name: 'Russell Wigginton',
    title: '“My Journey to the National Civil Rights Museum”',
    affiliation: 'Historian · National Civil Rights Museum · Political Science · Anthropology',
    image: '/speakers/Dr-Wigginton.png',
    bio: `Dr. Russell Wigginton serves as the President of the National Civil Rights Museum. He assumed this role in August 2021 and brings vast experience in education, fundraising, operations, and community engagement. Prior to assuming this role, Dr. Wigginton served as the Chief Postsecondary Impact Officer for Tennessee State Collaborative on Reforming Education (SCORE) from 2019-2021, where he led the organization’s work for post-secondary
    access, retention, and completion. Previously he served as vice president for student life and dean of students at Rhodes College from 2017-2019, where he oversaw the college’s co-curricular experience for students. 
    Dr. Wigginton taught eight years in the History department at Rhodes, specializing in African American and community history. He has published a book entitled, “The Strange Career of the Black Athlete: African Americans and Sports,” as well as articles and essays on African American social and labor history. He has also served numerous civic boards, including the National Civil Rights Museum, Memphis Zoo, Big Brothers Big Sisters, Bridges USA, Facing History and Ourselves, ArtsMemphis, Community Foundation of Greater Memphis, and several independent and charter schools in the Memphis area.`,
  },
];

export default function SpeakersPage() {
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);

  return (
    <main className="bg-black text-white px-6 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">MEET OUR SPEAKERS</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover the brilliant minds taking the TEDxUIUC stage. Each speaker brings unique insight, passion, and innovation.
        </p>
      </section>

      {/* Speaker Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 md:px-4">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            onClick={() => setActiveSpeaker(speaker)}
            className="bg-neutral-900 rounded-xl overflow-hidden cursor-pointer border border-transparent hover:border-white transition-all"
          >
            <div className="w-full h-96 bg-gray-800 relative">
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-1 uppercase">{speaker.name}</h2>
              <p className="text-red-400 text-sm italic mb-2">{speaker.title}</p>
              <p className="text-gray-400 text-xs">{speaker.affiliation}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Modal-style Subcard */}
      {activeSpeaker && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveSpeaker(null)}
        >
          <div
            className="bg-neutral-900 rounded-lg overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full w-full md:h-[36rem] md:max-h-[36rem] relative">
              <Image
                src={activeSpeaker.image}
                alt={activeSpeaker.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-1">{activeSpeaker.name}</h3>
              <p className="text-red-400 text-sm font-medium mb-4">{activeSpeaker.title}</p>
              <p className="text-sm text-gray-300 mb-4">{activeSpeaker.bio}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}