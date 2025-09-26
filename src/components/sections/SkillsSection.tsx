const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["C", "C++", "Python", "JavaScript", "HTML", "CSS", "Full-Stack Development", "Responsive Web Design"],
      color: "bg-blue-500"
    },
    {
      title: "Data & AI",
      skills: ["Data Analytics", "Business Analytics", "Generative AI", "Prompt Engineering", "Machine Learning", "AI Consulting"],
      color: "bg-purple-500"
    },
    {
      title: "Tools",
      skills: ["Git/GitHub", "SQL", "Power BI", "Tableau", "MS Excel", "Canva", "Figma"],
      color: "bg-green-500"
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Teamwork", "Business Development", "Leadership (NCC)"],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="hero-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning across multiple domains of technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="p-8 rounded-2xl bg-card border hover-lift cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-3 h-3 rounded-full ${category.color.replace('bg-', 'bg-primary/')}`} />
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium 
                             hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;