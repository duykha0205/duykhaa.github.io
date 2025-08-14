import { Header } from "@/components/cv/Header";
import { About } from "@/components/cv/About";
import { Experience } from "@/components/cv/Experience";
import { Skills } from "@/components/cv/Skills";
import { Education } from "@/components/cv/Education";
import { Portfolio } from "@/components/cv/Portfolio";
import { Contact } from "@/components/cv/Contact";
import { Navigation } from "@/components/cv/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <Header />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="experience" className="py-20 bg-muted">
          <Experience />
        </section>
        
        <section id="skills" className="py-20">
          <Skills />
        </section>
        
        <section id="education" className="py-20 bg-muted">
          <Education />
        </section>
        
        <section id="portfolio" className="py-20">
          <Portfolio />
        </section>
        
        <section id="contact" className="py-20 bg-muted">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;