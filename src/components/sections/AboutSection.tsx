const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            About <span className="hero-text">Me</span>
          </h2>
          
          <div className="text-lg md:text-xl leading-relaxed text-muted-foreground space-y-6">
            <p>
              I am a Computer Science student with practical experience in AI, Data Analytics, 
              and Web Development. Passionate about innovation, I aim to create impactful, 
              real-world solutions that combine creativity with efficiency.
            </p>
            
            <p>
              My journey in technology spans across multiple domains - from building intelligent 
              systems that predict customer behavior to developing responsive web applications 
              that deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="p-6 rounded-2xl bg-card border hover-lift cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-card border hover-lift cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Internships</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-card border hover-lift cursor-pointer">
              <div className="text-3xl font-bold text-primary mb-2">8.44</div>
              <div className="text-muted-foreground">GPA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;