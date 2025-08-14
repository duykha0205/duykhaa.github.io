import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-cv-brown text-center mb-12">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-cv-brown mb-4">
                Let's Work Together
              </h3>
              <p className="text-cv-grey-dark leading-relaxed mb-6">
                I'm passionate about bridging the gap between data engineering and AI operations. 
                Whether you have a data platform project, AI integration challenge, or want to 
                discuss opportunities in Data/AI Platform Engineering, I'd love to hear from you!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cv-yellow-soft rounded-lg">
                  <Mail className="w-5 h-5 text-cv-brown" />
                </div>
                <div>
                  <p className="text-cv-grey text-sm">Email</p>
                  <p className="text-cv-grey-dark font-medium">duykha0205@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cv-yellow-soft rounded-lg">
                  <Phone className="w-5 h-5 text-cv-brown" />
                </div>
                <div>
                  <p className="text-cv-grey text-sm">Phone</p>
                  <p className="text-cv-grey-dark font-medium">0922254027</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cv-yellow-soft rounded-lg">
                  <MapPin className="w-5 h-5 text-cv-brown" />
                </div>
                <div>
                  <p className="text-cv-grey text-sm">Location</p>
                  <p className="text-cv-grey-dark font-medium">Ho Chi Minh City, Vietnam</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-cv-brown mb-3">
                Available For
              </h4>
              <div className="space-y-2">
                <p className="text-cv-grey-dark text-sm">✓ Data Platform Engineering roles</p>
                <p className="text-cv-grey-dark text-sm">✓ AI Integration projects</p>
                <p className="text-cv-grey-dark text-sm">✓ Consulting & freelance work</p>
                <p className="text-cv-grey-dark text-sm">✓ Technical discussions</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-cv-white shadow-lg border-cv-silver">
            <CardHeader>
              <CardTitle className="text-cv-brown">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-cv-grey-dark">First Name</Label>
                    <Input 
                      id="firstName"
                      className="border-cv-silver focus:border-cv-brown"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-cv-grey-dark">Last Name</Label>
                    <Input 
                      id="lastName"
                      className="border-cv-silver focus:border-cv-brown"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-cv-grey-dark">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    className="border-cv-silver focus:border-cv-brown"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-cv-grey-dark">Subject</Label>
                  <Input 
                    id="subject"
                    className="border-cv-silver focus:border-cv-brown"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-cv-grey-dark">Message</Label>
                  <Textarea 
                    id="message"
                    rows={4}
                    className="border-cv-silver focus:border-cv-brown resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-cv-brown hover:bg-cv-brown/90 text-cv-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};