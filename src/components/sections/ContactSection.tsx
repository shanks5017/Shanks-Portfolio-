import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabaseClient';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    if (!supabase) {
      toast({
        title: 'Supabase not configured',
        description: 'Environment variables are missing. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local and restart the dev server.',
        variant: 'destructive'
      });
      return;
    }

    // Insert into Supabase
    const { error } = await supabase.from('messages').insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        source_page: window.location.pathname + window.location.hash,
        user_agent: navigator.userAgent,
        tags: ['portfolio']
      }
    ]);

    if (error) {
      console.error('[Supabase] insert error', error);
      toast({
        title: 'Failed to send message',
        description: error.message,
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="hero-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, 
                or potential collaborations. Whether you have a project in mind or just 
                want to connect, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href="mailto:shashank5017sh@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border hover:bg-accent transition-colors cursor-pointer group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">shashank5017sh@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+919686774811"
                className="flex items-center gap-4 p-4 rounded-xl border hover:bg-accent transition-colors cursor-pointer group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div className="text-muted-foreground">+91 9686774811</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">Belagavi, Karnataka</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="lg" className="cursor-pointer hover-lift">
                  <a href="https://github.com/shanks5017" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="cursor-pointer hover-lift">
                  <a href="https://www.linkedin.com/in/shashank-tareehal-32293b27a" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border rounded-2xl p-8 hover:shadow-medium transition-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" autoComplete="on">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  autoComplete="name"
                  className="cursor-text"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  className="cursor-text"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  autoComplete="off"
                  className="cursor-text resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-gradient text-white py-6 text-lg font-semibold cursor-pointer"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;