import { ExternalLink, Github, TrendingUp, BarChart3, Brain, ShoppingBag, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Customer Satisfaction Prediction",
      description: "Advanced ML model achieving +15% accuracy improvement in predicting customer satisfaction using ensemble methods",
      tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
      icon: TrendingUp,
      metrics: "+15% Accuracy",
      category: "Machine Learning"
    },
    {
      title: "E-Commerce Furniture Analysis",
      description: "Comprehensive Power BI dashboards providing actionable insights for furniture retail business optimization",
      tech: ["Power BI", "SQL", "Data Visualization", "Business Intelligence"],
      icon: BarChart3,
      metrics: "Interactive Dashboards",
      category: "Data Analytics"
    },
    {
      title: "Instagram Influencer Insights",
      description: "AI-powered platform leveraging NLP to analyze influencer performance and audience engagement patterns",
      tech: ["Python", "NLP", "AI", "Data Mining"],
      icon: Brain,
      metrics: "AI + NLP",
      category: "AI/NLP"
    },
    {
      title: "Laptop Price Prediction",
      description: "Regression model achieving 92% accuracy in predicting laptop prices based on specifications and market trends",
      tech: ["Python", "Regression", "Feature Engineering", "Data Analysis"],
      icon: TrendingUp,
      metrics: "92% Accuracy",
      category: "Machine Learning"
    },
    {
      title: "ShanksMerch",
      description: "Fully responsive e-commerce website with modern design, secure payment integration, and optimal user experience",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      icon: ShoppingBag,
      metrics: "Responsive Design",
      category: "Web Development"
    },
    {
      title: "ShankWay",
      description: "AI-powered platform currently in development, focusing on innovative solutions for modern business challenges",
      tech: ["React", "AI Integration", "Modern Stack", "API Development"],
      icon: Zap,
      metrics: "In Progress",
      category: "Full-Stack"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="hero-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions spanning AI, data analytics, and web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            
            // Map project titles to external links to open when the card is clicked
            const links: Record<string, string> = {
              'Customer Satisfaction Prediction': 'https://github.com/shanks5017/Finished-Customer-Satisfaction-Prediction-ML-_-FA-_-DA-projects-.ipynb.git',
              'E-Commerce Furniture Analysis': 'https://github.com/shanks5017/finished-E-commerce-Furniture-Dataset-2024-ML-_-FA-_-DA-projects-.git',
              'Instagram Influencer Insights': 'https://github.com/shanks5017/finished-Top-Instagram-Influencers-Data-Cleaned-_-ML-_-DA-_-FA-project.pdf.git',
              'Laptop Price Prediction': 'https://github.com/shanks5017/finished-Laptop-Price-Analysis-_-ML-_-FA-_-DA-Project.git',
              'ShanksMerch': 'https://shanks5017.github.io/shanksmerch/',
              'ShankWay': 'https://github.com/shashank5017/cellkind-wellness-hub.git',
            };

            const link = links[project.title as keyof typeof links];

            const card = (
              <div
                className="project-card bg-card rounded-2xl p-8 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 2).map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 2 && (
                        <span className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded">
                          +{project.tech.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <span className="text-xs font-bold text-primary">
                      {project.metrics}
                    </span>
                  </div>
                </div>
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

        <div className="text-center mt-12">
          <Button asChild className="btn-gradient text-white px-8 py-3 cursor-pointer">
            <a href="https://github.com/shashank5017" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;