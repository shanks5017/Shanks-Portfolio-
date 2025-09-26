import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Back to Top */}
          <Button 
            onClick={scrollToTop}
            variant="outline" 
            size="lg"
            className="cursor-pointer hover-lift rounded-full p-4"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>

          {/* Name & Title */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Shashank M Tareehal
            </h3>
            <p className="text-primary font-medium">AI Generalist</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              About
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Projects
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Experience
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border w-full text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              © 2024 Shashank M Tareehal. Made with Sleep 
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              and Stack Overflow 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;