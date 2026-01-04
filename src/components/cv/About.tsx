import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, FolderKanban, Target, Languages } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: <Briefcase className="w-6 h-6" />, value: "~4 Years", label: "Experience" },
    { icon: <FolderKanban className="w-6 h-6" />, value: "15+", label: "Projects" },
    { icon: <Target className="w-6 h-6" />, value: "Data/AI", label: "Specialization" },
    { icon: <Languages className="w-6 h-6" />, value: "TOEIC 765", label: "English" },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-cv-brown text-center mb-8">
          About Me
        </h2>
        
        {/* Main Description */}
        <p className="text-lg text-cv-grey-dark leading-relaxed text-center max-w-3xl mx-auto mb-10">
          Platform Engineer with nearly 4 years of experience building scalable data and AI cloud 
          infrastructure. Aspiring Solution Architect focused on data platform architecture, 
          DevOps automation, and AI system integration.
        </p>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-cv-white shadow-md border-cv-silver hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-cv-yellow mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-cv-brown mb-1">{stat.value}</p>
                <p className="text-cv-grey text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
