import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "Rust", level: 80 },
      { name: "Golang", level: 75 },
      { name: "C++", level: 85 },
    ],
  },
  {
    title: "Data & AI",
    skills: [
      { name: "Apache Kafka", level: 90 },
      { name: "Apache Airflow", level: 85 },
      { name: "LLM/AI Integration", level: 90 },
      { name: "PyTorch", level: 85 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS Cloud", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Docker", level: 90 },
      { name: "Terraform", level: 75 },
    ],
  },
];

const databases = ["PostgreSQL", "TimescaleDB", "MySQL", "MongoDB", "Redis", "MinIO"];
const frameworks = ["FastAPI", "TensorFlow", "PyTorch", "LangChain", "Selenium", "Transformers"];
const tools = ["Git", "Docker", "Kubernetes", "Grafana", "VS Code", "Postman"];

export const Skills = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cv-brown text-center mb-12">
          Skills & Expertise
        </h2>
        
        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-cv-white shadow-lg border-cv-silver">
              <CardHeader>
                <CardTitle className="text-cv-brown">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-cv-grey-dark font-medium">{skill.name}</span>
                      <span className="text-cv-grey text-sm">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-cv-silver"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Technology Tags */}
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-cv-brown mb-4">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {databases.map((db) => (
                <Badge key={db} variant="outline" className="border-cv-brown text-cv-brown hover:bg-cv-brown hover:text-cv-white">
                  {db}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-cv-brown mb-4">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((framework) => (
                <Badge key={framework} variant="outline" className="border-cv-brown text-cv-brown hover:bg-cv-brown hover:text-cv-white">
                  {framework}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-cv-brown mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Badge key={tool} variant="outline" className="border-cv-brown text-cv-brown hover:bg-cv-brown hover:text-cv-white">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        {/* Soft Skills */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-cv-brown mb-4 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {["Teamwork", "Communication", "Listening", "Leadership"].map((skill) => (
              <Badge key={skill} className="bg-cv-yellow text-cv-brown">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};