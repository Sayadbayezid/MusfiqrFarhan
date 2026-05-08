import { Link } from 'wouter';
import { useBlog } from '@/contexts/BlogContext';
import BlogCard from '@/components/BlogCard';
import { ArrowRight, Radio, Film, Zap } from 'lucide-react';
import { SeoSchema, SOCIAL_LINKS } from '@/components/SeoSchema';

export default function Home() {
  const { getPublishedPosts } = useBlog();
  const publishedPosts = getPublishedPosts();
  const featuredPosts = publishedPosts.filter(p => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      <SeoSchema />
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                  Musfiq R. Farhan
                </h1>
                <p className="text-2xl text-secondary font-semibold">
                  Multi-Talented Entertainer
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                RJ | Actor | Content Creator | Digital Media Pioneer
              </p>

              <p className="text-base text-foreground leading-relaxed">
                Bridging the worlds of radio, television, and digital media with storytelling that connects with millions across Bangladesh.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/blog">
                  <a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 no-underline">
                    Read My Blog
                    <ArrowRight size={18} />
                  </a>
                </Link>
                <a
                  href="#highlights"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary/10 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                alt="Musfiq R. Farhan"
                className="relative rounded-2xl shadow-2xl object-cover w-full aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section id="highlights" className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Career Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Radio,
                title: 'Radio Jockey',
                description: 'Years of experience connecting with listeners through engaging radio programming, interviews, and live shows.',
              },
              {
                icon: Film,
                title: 'Television Actor',
                description: 'Diverse roles in television dramas and productions, bringing depth and authenticity to every character.',
              },
              {
                icon: Zap,
                title: 'Content Creator',
                description: 'Digital content creation across multiple platforms, building communities and engaging modern audiences.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="card-base p-8 text-center hover:border-secondary transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <Icon size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">From My Instagram</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/manus-storage/musfiq_image_1_892e2248.jpg"
                alt="Musfiq R. Farhan - Entertainment personality and content creator from Bangladesh"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/manus-storage/musfiq_image_2_7cf91d7c.jpg"
                alt="Musfiq R. Farhan - Radio jockey, actor, and digital media personality"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary/80 transition-colors mb-16"
          >
            Follow on Instagram
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Latest Insights</h2>
            <Link href="/blog">
              <a className="text-secondary font-semibold hover:gap-2 flex items-center gap-1 transition-all no-underline">
                View All <ArrowRight size={18} />
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.length > 0 ? (
              featuredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Follow my journey across different media platforms and stay updated with my latest projects and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Facebook
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Instagram
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              YouTube
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
