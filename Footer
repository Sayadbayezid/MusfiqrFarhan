import { Facebook, Instagram, Twitter, Youtube, Mail, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from './SeoSchema';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Musfiq R. Farhan</h3>
            <p className="text-sm opacity-90">
              Multi-talented entertainer, RJ, actor, and content creator bridging the worlds of radio, television, and digital media.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#blog" className="opacity-90 hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#portfolio" className="opacity-90 hover:opacity-100 transition-opacity">Works</a></li>
              <li><a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow</h3>
            <div className="flex gap-4 flex-wrap">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity" title="Facebook">
                <Facebook size={20} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity" title="Instagram">
                <Instagram size={20} />
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity" title="YouTube">
                <Youtube size={20} />
              </a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity" title="WhatsApp Channel">
                <MessageCircle size={20} />
              </a>
              <a href={SOCIAL_LINKS.imdb} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity" title="IMDb">
                <span className="text-lg font-bold">IMDb</span>
              </a>
              <a href="mailto:contact@musfiqrfarhan.blog" className="opacity-90 hover:opacity-100 transition-opacity" title="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2026 Musfiq R. Farhan. All rights reserved.</p>
          <p className="mt-2">Crafted with passion for quality entertainment</p>
          <p className="mt-4 text-xs opacity-75">
            <a href={SOCIAL_LINKS.imdb} target="_blank" rel="noopener noreferrer" className="hover:opacity-100">IMDb Profile</a> • 
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 ml-2">WhatsApp Channel</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
