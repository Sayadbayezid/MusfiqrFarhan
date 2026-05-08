import { useRoute, Link } from 'wouter';
import { useBlog } from '@/contexts/BlogContext';
import { Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react';

export default function BlogDetail() {
  const [match, params] = useRoute('/blog/:id');
  const { posts } = useBlog();

  if (!match) return null;

  const post = posts.find(p => p.id === params?.id);

  if (!post) {
    return (
      <div className="min-h-screen py-12">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all no-underline">
              <ArrowLeft size={18} />
              Back to Blog
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-3xl">
        {/* Back Button */}
        <Link href="/blog">
          <a className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all mb-8 no-underline">
            <ArrowLeft size={18} />
            Back to Blog
          </a>
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 bg-secondary/10 text-secondary rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar size={14} />
              <span>{formattedDate}</span>
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground">{post.description}</p>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        {/* Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">
            {post.content}
          </div>
        </article>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mb-12 pb-12 border-b border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share Section */}
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h3 className="text-lg font-bold mb-4">Share this post</h3>
          <div className="flex gap-4 justify-center">
            <a
              href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Share2 size={18} />
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Share2 size={18} />
              Twitter
            </a>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold mb-8">More from {post.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts
              .filter(p => p.category === post.category && p.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <a className="group card-base overflow-hidden no-underline">
                    <div className="relative overflow-hidden h-40 bg-muted">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {relatedPost.description}
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
