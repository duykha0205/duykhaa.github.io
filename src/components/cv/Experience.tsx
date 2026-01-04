import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Data Engineer",
    company: "TechX Company",
    period: "Dec 2024 - Present",
    location: "HCM City, Vietnam",
    description: "Building scalable data and AI cloud infrastructure for banking operations. Leading multiple projects spanning data platform architecture, DevOps automation, and AI system integration.",
    technologies: ["Helm", "AWS EKS", "EMR", "Terraform", "ArgoCD", "DBT", "Spark", "LangChain", "Kafka"],
    projects: [
      {
        name: "Synaptix AIOps Platform",
        description: "Incident Detection for Banking Operations - Designed data ingestion pipelines and CI/CD workflows with Helm charts and ArgoCD for automated EKS deployments"
      },
      {
        name: "OLAP Reporting System",
        description: "State Bank of Vietnam - Built automated reporting platform for Vikki Bank with DBT → Spark → S3 pipeline on EMR EC2 clusters"
      },
      {
        name: "Xbot - Multi-Agent System",
        description: "Designed multi-agent architecture with LangChain, intelligent routing, Qdrant vector database integration, and end-to-end CI/CD pipelines"
      },
      {
        name: "XGenAI - Internal Agent Chatbot",
        description: "Optimized CI/CD workflow (80% build time reduction), built SQL agent with LLM, deployed Redis saving $500/month, reduced 60% monthly infrastructure costs"
      },
      {
        name: "EOD - Enterprise Operation Data",
        description: "Built streaming platform for CDC between multi-SQL/NoSQL databases (10k msg/min), auto-generated configs reducing setup from 1 hour to 1 minute"
      }
    ]
  },
  {
    title: "Data Engineer - Data Operation",
    company: "Yes4All Company",
    period: "Aug 2023 - Nov 2024",
    location: "Phu Nhuan, HCM City",
    description: "Designed and implemented scalable ETL pipelines, optimized data processing by 5x through multithreading. Enhanced API data retrieval by 20x using async I/O. Led Kafka implementation for real-time streaming.",
    technologies: ["Python", "PostgreSQL", "TimescaleDB", "Apache Airflow", "Apache Iceberg", "Kafka", "Google Cloud", "MinIO"],
    projects: [
      {
        name: "Scalable ETL Pipelines",
        description: "Architected centralized data warehouse with high data integrity and availability"
      },
      {
        name: "Real-time Streaming",
        description: "Proposed and led Kafka implementation for real-time data streaming, improving resource utilization"
      },
      {
        name: "Automation Tools",
        description: "Built bot detection bypass for web scraping and dropshipping booking automation for Sales team"
      }
    ]
  },
  {
    title: "Python Engineer",
    company: "Namiq Company",
    period: "May 2022 - Apr 2023",
    location: "Tan Binh, HCM City",
    description: "Developed GraphQL-based database tools and CRUD APIs. Implemented CNN models for speech classification using mel-spectrogram features. Built NLP models with BERT for intent classification.",
    technologies: ["Python", "GraphQL", "PyTorch", "BERT", "TorchServe", "PostgreSQL", "TypeScript", "Hasura"],
    projects: [
      {
        name: "GraphQL Database Tool",
        description: "Efficient CRUD APIs for Housee mobile application using Hasura"
      },
      {
        name: "Speech AI Models",
        description: "CNN models with mel-spectrogram features for accurate speech classification"
      },
      {
        name: "NLP Intent Classification",
        description: "BERT-based models deployed with TorchServe for Vilik livestream application"
      }
    ]
  },
];

const freelanceExperience = {
  title: "Platform Engineer",
  company: "Mernva Technologies",
  period: "Jul 2023 - Nov 2024",
  location: "Remote - India",
  description: "Integrated AI-driven data processing models and pipelines into backend systems, collaborating remotely with international teams to enhance data engineering processes.",
  technologies: ["AWS Cloud", "EC2", "K8s", "Python", "FastAPI", "Docker", "Kubernetes", "LangChain", "Hugging Face"],
  projects: [
    {
      name: "AI Model Integration",
      description: "Seamlessly incorporated AI-driven models into backend systems for intelligent data transformations"
    },
    {
      name: "Chat Bot Document Summary",
      description: "R&D on chatbot using RAG and APIs for efficient data retrieval and summary generation"
    }
  ]
};

export const Experience = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-cv-brown text-center mb-12">
          Work Experience
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-cv-white shadow-lg border-cv-silver hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-cv-brown">{exp.title}</CardTitle>
                    <p className="text-lg text-cv-grey-dark font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-1 text-cv-grey">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-cv-grey">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-cv-grey-dark leading-relaxed">
                  {exp.description}
                </p>
                
                {exp.projects && (
                  <div>
                    <h4 className="font-semibold text-cv-brown mb-2">Key Projects:</h4>
                    <div className="space-y-2">
                      {exp.projects.map((project, idx) => (
                        <div key={idx} className="pl-4 border-l-2 border-cv-yellow">
                          <p className="font-medium text-cv-brown text-sm">{project.name}</p>
                          <p className="text-cv-grey-dark text-sm">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-cv-yellow-soft text-cv-brown">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Freelancer Section */}
        <h2 className="text-4xl font-bold text-cv-brown text-center mb-12 mt-16">
          <span className="flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8" />
            Freelance Experience
          </span>
        </h2>
        
        <Card className="bg-cv-white shadow-lg border-cv-silver hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle className="text-xl text-cv-brown">{freelanceExperience.title}</CardTitle>
                <p className="text-lg text-cv-grey-dark font-medium">{freelanceExperience.company}</p>
              </div>
              <div className="flex flex-col md:items-end gap-1">
                <div className="flex items-center gap-1 text-cv-grey">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{freelanceExperience.period}</span>
                </div>
                <div className="flex items-center gap-1 text-cv-grey">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{freelanceExperience.location}</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-cv-grey-dark leading-relaxed">
              {freelanceExperience.description}
            </p>
            
            <div>
              <h4 className="font-semibold text-cv-brown mb-2">Key Projects:</h4>
              <div className="space-y-2">
                {freelanceExperience.projects.map((project, idx) => (
                  <div key={idx} className="pl-4 border-l-2 border-cv-yellow">
                    <p className="font-medium text-cv-brown text-sm">{project.name}</p>
                    <p className="text-cv-grey-dark text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {freelanceExperience.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-cv-yellow-soft text-cv-brown">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
