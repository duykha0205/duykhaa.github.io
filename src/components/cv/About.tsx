import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-cv-brown text-center mb-12">
          About Me
        </h2>
        
        <Card className="bg-cv-white shadow-lg border-cv-silver">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-cv-grey-dark leading-relaxed">
                  Data Engineer transitioning to Data/AI Platform Engineering with 3+ years of experience 
                  building and operating scalable data infrastructure and AI-integrated platforms. Proven 
                  expertise in developing end-to-end data platforms, implementing Agent workflows, and 
                  integrating LLM models into production systems.
                </p>
                
                <p className="text-lg text-cv-grey-dark leading-relaxed">
                  Successfully optimized CI/CD pipelines (80% build time reduction), architected real-time 
                  streaming platforms with Kafka, and built AI-powered solutions including chatbot platforms 
                  and document summarization systems. Strong DevOps foundation with Kubernetes, Docker, AWS, 
                  and infrastructure automation.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-cv-brown mb-2">Experience</h4>
                    <p className="text-cv-grey">3+ Years</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cv-brown mb-2">Projects</h4>
                    <p className="text-cv-grey">15+ Completed</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cv-brown mb-2">Specialization</h4>
                    <p className="text-cv-grey">Data/AI Platforms</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cv-brown mb-2">Certifications</h4>
                    <p className="text-cv-grey">4 Earned</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cv-brown">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-cv-grey">Name:</span>
                    <span className="text-cv-grey-dark font-medium">Le Duy Kha</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cv-grey">Email:</span>
                    <span className="text-cv-grey-dark font-medium">duykha0205@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cv-grey">Phone:</span>
                    <span className="text-cv-grey-dark font-medium">0922254027</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cv-grey">Location:</span>
                    <span className="text-cv-grey-dark font-medium">Ho Chi Minh City, Vietnam</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cv-grey">Language:</span>
                    <span className="text-cv-yellow font-medium">English (TOEIC 765)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};