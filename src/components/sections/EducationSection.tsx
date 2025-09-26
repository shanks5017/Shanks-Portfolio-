import { GraduationCap, Award, Trophy } from 'lucide-react';

const EducationSection = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "B.E. Computer Science & Engineering",
      institution: "KIT Coimbatore",
      period: "2023 – 2027",
      score: "GPA: 8.44",
      description: "Pursuing comprehensive education in computer science with focus on AI and software development"
    },
    {
      icon: Award,
      title: "Class XII",
      institution: "SBG Independent PU College",
      period: "2022 – 2023",
      score: "74%",
      description: "Completed higher secondary education with strong foundation in science and mathematics"
    }
  ];

  const certifications = [
    {
      title: "Business Intelligence & Analytics",
      provider: "NPTEL",
      type: "Professional Certification"
    },
    {
      title: "Generative AI Mastering",
      provider: "Outskill",
      type: "AI Specialization"
    }
  ];

  const leadership = [
    {
      title: "NCC Cadet",
      details: "B-Certificate achieved, preparing for C-Certificate",
      description: "Attended leadership camps and developed strong disciplinary skills"
    },
    {
      title: "State-level Karate Player",
      details: "1 Gold & 1 Silver at district level",
      description: "Demonstrates dedication, discipline, and competitive spirit"
    },
    {
      title: "College Basketball Player",
      details: "Active college-level participant",
      description: "Team player with excellent coordination and leadership skills"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education & <span className="hero-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic excellence combined with leadership experience and diverse achievements
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Academic Background</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card border rounded-2xl p-8 hover-lift cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                        <div className="text-primary font-semibold mb-1">{item.institution}</div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span>{item.period}</span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                            {item.score}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => {
                // Map certification titles to their proof links
                const links: Record<string, string> = {
                  'Business Intelligence & Analytics': 'https://drive.google.com/file/d/1OYwabpjyJ3msM5Rke_S2YCNLqcj-2YxK/view?usp=sharing',
                  'Generative AI Mastering': 'https://drive.google.com/file/d/1uat9fAvKwQDtOd8_QrLEBmXRTCQrrHwH/view?usp=sharing',
                };

                const link = links[cert.title as keyof typeof links];

                const card = (
                  <div 
                    className="bg-card border rounded-xl p-6 hover-lift cursor-pointer text-center"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{cert.title}</h4>
                    <div className="text-primary font-medium mb-1">{cert.provider}</div>
                    <div className="text-sm text-muted-foreground">{cert.type}</div>
                  </div>
                );

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

          {/* Leadership & Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Leadership & Sports</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leadership.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card border rounded-xl p-6 hover-lift cursor-pointer text-center"
                >
                  <div className="p-2 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <div className="text-primary font-medium text-sm mb-3">{item.details}</div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Kannada", "Hindi", "English", "Tamil", "Marathi"].map((language) => (
                <span 
                  key={language}
                  className="px-6 py-3 bg-card border rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;