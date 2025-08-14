import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Header = () => {
  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cv-white via-cv-brown-light to-cv-yellow-soft pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Profile Photo Placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 bg-cv-silver rounded-full flex items-center justify-center text-cv-brown text-6xl font-bold shadow-lg">
            LDK
          </div>
          
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-cv-brown mb-4">
            Le Duy Kha
          </h1>
          <h2 className="text-2xl md:text-3xl text-cv-grey-dark mb-6">
            Data Engineer | AI Platform Engineer
          </h2>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-cv-grey mb-8">
            <MapPin className="w-5 h-5" />
            <span>Ho Chi Minh City, Vietnam</span>
          </div>
          
          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Python", "Kafka", "AWS", "Kubernetes", "LLM", "FastAPI"].map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-cv-yellow text-cv-brown">
                {skill}
              </Badge>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-cv-brown hover:bg-cv-brown/90 text-cv-white"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cv-brown text-cv-brown hover:bg-cv-brown hover:text-cv-white"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/leduykhoa" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-cv-grey hover:text-cv-brown transition-colors p-2 rounded-full hover:bg-cv-yellow-soft"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/duy-khaa" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-cv-grey hover:text-cv-brown transition-colors p-2 rounded-full hover:bg-cv-yellow-soft"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:duykha0205@gmail.com" 
              className="text-cv-grey hover:text-cv-brown transition-colors p-2 rounded-full hover:bg-cv-yellow-soft"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};