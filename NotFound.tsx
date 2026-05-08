import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="container text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl font-semibold mb-4">Page Not Found</p>
        <p className="text-lg text-muted-foreground mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link href="/">
          <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all no-underline">
            <ArrowLeft size={18} />
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
