import { Link } from 'wouter';
import { BlogPost } from '@/contexts/BlogContext';
import { Calendar, Tag } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.id}`}>
      <a className="group card-base overflow-hidden hover:scale-105 transform transition-all duration-300 no-underline">
        {/* Image */}
        <div className="relative overflow-hidden h-48 bg-muted">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          <div className="inline-block mb-3">
            <span className="text-xs font-semibold px-3 py-1 bg-secondary/10 text-secondary rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-secondary transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {post.description}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{formattedDate}</span>
            </div>
            {post.tags.length > 0 && (
              <div className="flex items-center gap-1">
                <Tag size={14} />
                <span>{post.tags[0]}</span>
              </div>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
}
