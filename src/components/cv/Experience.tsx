import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Data Engineer",
    company: "TechX Company",
    period: "Dec 2024 - Present",
    location: "HCM City, Vietnam",
    description: "Building automated reporting platform for State Bank of Vietnam using DBT, Spark, and S3. Developed XGenAI internal agent chatbot platform with 80% CI/CD optimization. Built enterprise streaming platform handling 10k messages/min with Kafka and multi-database CDC.",
    technologies: ["DBT", "Spark", "S3", "FastAPI", "LangGraph", "Kafka", "Kubernetes", "AWS"],
    projects: [
      "OLAP reporting system for State Bank of Vietnam",
      "XGenAI - Internal agent chatbot platform with LLM integration",
      "EOD - Enterprise streaming platform for banking"
    ]
  },
  {
    title: "Data Engineer - Data Operation",
    company: "Yes4All Company",
    period: "Aug 2023 - Nov 2024",
    location: "Phu Nhuan, HCM City",
    description: "Designed and implemented scalable ETL pipelines, optimized data processing by 5x through multithreading. Enhanced API data retrieval by 20x using async I/O. Led Kafka implementation for real-time streaming and developed automation tools.",
    technologies: ["Python", "PostgreSQL", "TimescaleDB", "Apache Airflow", "Kafka", "Google Cloud"],
    projects: [
      "Scalable ETL pipelines for centralized data warehouse",
      "Real-time data streaming with Kafka implementation", 
      "Bot detection bypass system for web scraping automation"
    ]
  },
  {
    title: "Python Engineer",
    company: "Namiq Company",
    period: "May 2022 - Apr 2023",
    location: "Tan Binh, HCM City",
    description: "Developed GraphQL-based database tools and CRUD APIs. Implemented CNN models for speech classification using mel-spectrogram features. Built NLP models with BERT for intent classification and deployed using TorchServe.",
    technologies: ["Python", "GraphQL", "PyTorch", "BERT", "TorchServe", "PostgreSQL"],
    projects: [
      "GraphQL database tool for Housee mobile application",
      "CNN speech classification models with mel-spectrogram",
      "BERT-based NLP models for intent classification"
    ]
  },
];

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
                    <ul className="list-disc list-inside space-y-1 text-cv-grey-dark text-sm">
                      {exp.projects.map((project, idx) => (
                        <li key={idx}>{project}</li>
                      ))}
                    </ul>
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
      </div>
    </div>
  );
};