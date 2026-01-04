import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "XGenAI - Internal Agent Chatbot Platform",
    description: "Built and optimized CI/CD workflow with 80% build time reduction. Developed backend with SQL API using FastAPI and integrated SQL agent using LLM for querying employee KPI and project allocation data.",
    image: "/placeholder.svg",
    technologies: ["FastAPI", "LangGraph", "LLM", "Bedrock Agent", "Terraform", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    type: "Professional"
  },
  {
    title: "Xbot - Multi-Agent System for Operations",
    description: "Designed multi-agent architecture with LangChain, implementing intelligent routing mechanisms and sub-agent orchestration. Integrated Qdrant vector database for knowledge retrieval with optimized collection architecture.",
    image: "/Xbot/xbot_ui.png",
    technologies: ["LangChain", "Qdrant", "AWS ECS", "Terraform", "Flowise", "Langfuse"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    type: "Professional"
  },
  {
    title: "EOD - Enterprise Streaming Platform",
    description: "Built streaming platform for change data capture between multi-SQL and NoSQL databases. Performance: 10k messages/min. Auto-generated configs reducing setup time from 1 hour to 1 minute.",
    image: "/placeholder.svg",
    technologies: ["Kafka", "Debezium", "MongoDB", "PostgreSQL", "ArgoCD"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    type: "Professional"
  },
  {
    title: "LLM Monitoring Platform",
    description: "Developed comprehensive monitoring platform with logging, tracing, and application/system monitoring for LLM applications using modern observability stack.",
    image: "/placeholder.svg",
    technologies: ["Grafana", "Prometheus", "Tempo", "Loki", "OpenTelemetry"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    type: "Course Project"
  },
  {
    title: "Chat Bot Document Summary",
    description: "Research and development of chatbot model using Retrieval-Augmented Generation (RAG) and APIs for efficient data retrieval and document summarization.",
    image: "/placeholder.svg",
    technologies: ["LangChain", "RAG", "Hugging Face", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    type: "Research"
  },
  {
    title: "Photorealistic Image Translation",
    description: "Bachelor thesis project: Developed model using normalization, activation, and attention techniques that trained 100x faster while matching default model performance.",
    image: "/placeholder.svg",
    technologies: ["PyTorch", "Computer Vision", "Deep Learning"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    type: "Academic"
  },
];

export const Portfolio = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cv-brown text-center mb-12">
          Featured Projects
        </h2>
        
        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects
            .filter(project => project.featured)
            .map((project, index) => (
              <Card key={index} className="bg-cv-white shadow-lg border-cv-silver hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-cv-brown/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" className="bg-cv-white text-cv-brown">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-cv-white text-cv-brown">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-cv-yellow text-cv-brown">{project.type}</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-cv-brown">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-cv-grey-dark mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-cv-yellow-soft text-cv-brown">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
        
        {/* Project Categories */}
        <div className="space-y-8">
          {["Professional", "Personal", "Academic", "Research"].map((category) => {
            const categoryProjects = projects.filter(p => p.type === category && !p.featured);
            if (categoryProjects.length === 0) return null;
            
            return (
              <div key={category}>
                <h3 className="text-2xl font-semibold text-cv-brown mb-4">{category} Projects</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryProjects.map((project, index) => (
                    <Card key={index} className="bg-cv-white shadow-lg border-cv-silver hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg text-cv-brown">{project.title}</CardTitle>
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                              <Github className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-cv-grey-dark mb-4 text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="border-cv-silver text-cv-grey text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="border-cv-silver text-cv-grey text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-cv-brown text-cv-brown hover:bg-cv-brown hover:text-cv-white"
            onClick={() => window.open('https://github.com/duykha0205', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};