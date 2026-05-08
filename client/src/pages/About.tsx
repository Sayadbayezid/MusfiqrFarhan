import { Award, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Discover the story behind Musfiq R. Farhan and his journey in entertainment.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Left: Image */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                alt="Musfiq R. Farhan"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="md:col-span-2 space-y-6">
            <section>
              <h2 className="text-3xl font-bold mb-4">My Journey</h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                I am Musfiq R. Farhan, a versatile entertainer who has successfully carved a unique path across multiple media platforms. My journey began in radio, where I honed my voice and storytelling skills, connecting with audiences through the intimate medium of sound.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Transitioning to television and acting, I've expanded my creative expression, bringing characters to life and engaging viewers on screen. Today, as a content creator, I leverage digital platforms to reach a broader audience and share stories that resonate with the modern generation.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">My Philosophy</h2>
              <p className="text-lg text-foreground leading-relaxed">
                My work reflects a commitment to quality entertainment, authentic storytelling, and continuous innovation. I believe in the power of media to inspire, educate, and entertain, and I'm dedicated to creating content that makes a meaningful impact on the lives of my audience.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">What Drives Me</h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <span className="text-lg text-foreground">Authentic storytelling that connects with audiences</span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <span className="text-lg text-foreground">Continuous innovation in entertainment</span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <span className="text-lg text-foreground">Building meaningful connections across platforms</span>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <span className="text-lg text-foreground">Creating content that inspires and educates</span>
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-border">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
              <Award size={32} className="text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">10+</h3>
            <p className="text-muted-foreground">Years in Entertainment</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
              <Users size={32} className="text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">1M+</h3>
            <p className="text-muted-foreground">Audience Reach</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
              <Zap size={32} className="text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">3</h3>
            <p className="text-muted-foreground">Major Platforms</p>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Radio Broadcasting', description: 'Professional voice acting, live show hosting, and audience engagement' },
              { title: 'Television Acting', description: 'Character development, on-camera performance, and dramatic storytelling' },
              { title: 'Digital Content Creation', description: 'Platform optimization, audience building, and viral content strategy' },
              { title: 'Storytelling', description: 'Narrative crafting, emotional connection, and authentic communication' },
            ].map((skill, idx) => (
              <div key={idx} className="card-base p-6">
                <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="mb-6">Follow my journey and stay updated with my latest projects and insights.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
