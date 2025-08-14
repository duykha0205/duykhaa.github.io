import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor degree in Computer Science",
    school: "VNUHCM – University of Science",
    period: "2019 - 2023",
    gpa: "8.4/10",
    description: "Focused on computer science fundamentals, algorithms, and software engineering. Completed bachelor thesis on Photorealistic image to image translation.",
    courses: ["Data Structures", "Algorithms", "Machine Learning", "Software Engineering"],
  },
  {
    degree: "High School",
    school: "Luong The Vinh High School for the Gifted",
    period: "2016 - 2019",
    gpa: "Graduated",
    description: "Specialized in mathematics and computer science at gifted high school level.",
    courses: ["Mathematics", "Computer Science", "Physics"],
  },
];

const certifications = [
  {
    name: "Top 2 in MedTech domain, HackYouth 2023",
    issuer: "Vin Uni",
    year: "2023",
    icon: <Award className="w-5 h-5" />,
  },
  {
    name: "Machine Learning in Production",
    issuer: "Coursera",
    year: "2022",
    icon: <Award className="w-5 h-5" />,
  },
  {
    name: "SAT Math Level 2 (800/800)",
    issuer: "SAT Exam",
    year: "2021",
    icon: <Award className="w-5 h-5" />,
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera",
    year: "2021",
    icon: <Award className="w-5 h-5" />,
  },
];

const activities = [
  {
    role: "Volunteer",
    organization: "HOPE Charity",
    period: "2024 - Present",
    description: "Active volunteer in charity work focusing on community support."
  },
  {
    role: "Coordinator",
    organization: "MLOpsVN Community",
    period: "2023 - Present", 
    description: "Community coordinator for Machine Learning Engineers, organizing events and knowledge sharing."
  },
  {
    role: "Head of Department",
    organization: "SAB in HCMUS Student Organization",
    period: "2020 - 2022",
    description: "Led department activities and managed student organization initiatives."
  },
];

export const Education = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-cv-brown text-center mb-12">
          Education & Certifications
        </h2>
        
        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-cv-brown mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            Education
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-cv-white shadow-lg border-cv-silver">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-cv-brown">{edu.degree}</CardTitle>
                      <p className="text-lg text-cv-grey-dark font-medium">{edu.school}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-1 text-cv-grey">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <Badge variant="secondary" className="bg-cv-yellow text-cv-brown w-fit">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-cv-grey-dark mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <Badge key={course} variant="outline" className="border-cv-silver text-cv-grey-dark">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-cv-brown mb-6 flex items-center gap-2">
            <Award className="w-6 h-6" />
            Certifications & Awards
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-cv-white shadow-lg border-cv-silver hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="text-cv-yellow">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-cv-brown">{cert.name}</h4>
                      <p className="text-cv-grey text-sm">{cert.issuer}</p>
                      <p className="text-cv-grey text-sm">{cert.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Extra-curricular Activities */}
        <div>
          <h3 className="text-2xl font-semibold text-cv-brown mb-6">Extra-curricular Activities</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <Card key={index} className="bg-cv-white shadow-lg border-cv-silver">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <div>
                      <h4 className="font-semibold text-cv-brown">{activity.role}</h4>
                      <p className="text-cv-grey-dark">{activity.organization}</p>
                    </div>
                    <Badge variant="outline" className="border-cv-silver text-cv-grey w-fit">
                      {activity.period}
                    </Badge>
                  </div>
                  <p className="text-cv-grey-dark text-sm">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};