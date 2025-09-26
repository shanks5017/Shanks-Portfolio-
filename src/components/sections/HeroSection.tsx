import { Github, Linkedin, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-accent/30 to-primary/5 pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
          {/* Left Side - Content */}
          <div className="space-y-8 text-center lg:text-left lg:-translate-x-4">
            {/* Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="hero-text">Shashank M</span>
              <br />
              <span className="text-foreground">Tareehal</span>
            </h1>

            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                AI Generalist
              </h2>
              
              {/* Location */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Belagavi, Karnataka</span>
              </div>
            </div>

            {/* Animated Intro Line */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg md:text-xl font-medium text-muted-foreground">
                Building real-world solutions with AI, Data, and Web Development.
              </p>
            </div>

            {/* Contact & Social Links */}
            <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 pt-4">
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
                <a href="tel:+919686774811" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer whitespace-nowrap">
                  <Phone className="w-4 h-4" />
                  <span>+91 9686774811</span>
                </a>
                <a href="mailto:shashank5017sh@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                  <Mail className="w-4 h-4" />
                  <span>shashank5017sh@gmail.com</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <Button asChild variant="outline" size="sm" className="cursor-pointer">
                  <a href="https://github.com/shanks5017" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="cursor-pointer">
                  <a href="https://www.linkedin.com/in/shashank-tareehal-32293b27a" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="cursor-pointer">
                  <a href="https://codolio.com/profile/shashank_5017" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Codolio
                  </a>
                </Button>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Button asChild className="btn-gradient text-white px-8 py-6 text-lg font-semibold cursor-pointer">
                <a
                  href="https://drive.google.com/file/d/1CQY1fcVGrG4hAHIRx0PRi2jlJb9or8pG/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="flex justify-center lg:justify-end lg:-translate-x-[25px]">
            <div className="relative mt-[10px]">
              <div className="w-96 h-96 md:w-[26rem] md:h-[26rem] rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover-lift">
                <img 
                  src={profilePhoto} 
                  alt="Shashank M Tareehal - AI Generalist" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-2xl -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;