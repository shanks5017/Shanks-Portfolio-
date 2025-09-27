import { Calendar, MapPin } from 'lucide-react';

const InternshipsSection = () => {
  const internships = [
    {
      title: "Data Analyst Intern",
      company: "Unified Mentor",
      duration: "3 Month",
      status: "Completed",
      description: "Analyzing complex datasets and creating insights for business decision-making",
      skills: ["Data Analysis", "Python", "SQL", "Visualization"]
    },
    {
      title: "Full-Stack Developer Intern",
      company: "Learnlogicify Technologies",
      duration: "1 Month",
      status: "Completed",
      description: "Developed responsive web applications using modern frameworks",
      skills: ["React", "Node.js", "Database Design", "API Development"]
    },
    {
      title: "Business Development Associate",
      company: "Conquer E-Learning",
      duration: "2 Months",
      status: "Completed",
      description: "Drove business growth strategies and client relationship management",
      skills: ["Business Strategy", "Client Relations", "Market Analysis", "Sales"]
    },
    {
      title: "Graphic Design Intern",
      company: "AJA Education & Foundation",
      duration: "2 Months",
      status: "Completed",
      description: "Created visual content and brand materials for educational initiatives",
      skills: ["Canva", "Figma", "Brand Design", "Visual Communication"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional <span className="hero-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience across diverse domains, building practical skills and industry insights
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />
            
            <div className="space-y-8">
              {internships.map((internship, index) => {
                const card = (
                  <div 
                    className="relative pl-20 timeline-item hover-lift cursor-pointer"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="bg-card border rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {internship.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                            <MapPin className="w-4 h-4" />
                            {internship.company}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{internship.duration}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            internship.status === 'Current' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {internship.status}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {internship.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );

                // Map internship titles to their external proof/certificate links
                const links: Record<string, string> = {
                  'Data Analyst Intern': 'https://drive.google.com/file/d/1_YoO0y2SAr1X07lm-3uVS870TVbp6_5i/view?usp=drivesdk'
                  'Graphic Design Intern': 'https://drive.google.com/file/d/1WrXE9DpE2tvKNBw1k43jszffEapg_E-H/view?usp=drivesdk',
                  'Full-Stack Developer Intern': 'https://drive.google.com/file/d/17YE9127HRKBorcP-_7OnAp_Fe4-RA-D8/view?usp=sharing',
                  'Business Development Associate': 'https://drive.google.com/file/d/1M9TpoUW3o06bPQmfQ_D_z3dPe6bViFPp/view?usp=sharing',
                };

                const link = links[internship.title as keyof typeof links];

                return link ? (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {card}
                  </a>
                ) : (
                  <div key={index}>
                    {card}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
