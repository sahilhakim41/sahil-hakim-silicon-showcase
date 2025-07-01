
import { useState } from "react";
import { Mail, Phone, Linkedin, Github, ExternalLink, ChevronDown, Code, Cpu, Zap, CircuitBoard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  const skills = {
    "VLSI/HDL": ["SystemVerilog", "Verilog", "VHDL", "RTL Design"],
    "Simulation Tools": ["ModelSim", "Cadence/Virtuoso", "LTSpice"],
    "Programming": ["Python", "C", "C++", "MATLAB", "R"],
    "IoT/Automation": ["Arduino", "TinkerCAD", "CISCO Packet Tracer"],
    "Other Tools": ["Simulink", "ThingSpeak", "ESP32"]
  };

  const projects = [
    {
      title: "RISC-V Processor Design",
      period: "Summer 2023",
      description: "Built a pipelined RISC-V processor using Verilog, increasing instruction throughput by 30%. Verified design with testbenches achieving 99% accuracy.",
      technologies: ["Verilog", "RTL Design", "Pipeline Architecture"],
      impact: "30% throughput increase, 99% accuracy"
    },
    {
      title: "AHB to APB Bridge",
      period: "Aug–Oct 2023",
      description: "Designed a synthesizable bridge supporting multi-master/multi-slave configurations for efficient SoC integration.",
      technologies: ["SystemVerilog", "SoC Design", "Protocol Design"],
      impact: "Multi-master/slave support"
    },
    {
      title: "Smart Grid Lighting with RODEM Algorithm",
      period: "Jan–Mar 2024",
      description: "Created an energy-efficient lighting system with real-time traffic and ambient light monitoring, saving 30% energy.",
      technologies: ["IoT", "Algorithm Design", "Energy Optimization"],
      impact: "30% energy savings"
    },
    {
      title: "EMG Signal Analysis for Prosthetic Control",
      period: "Dec 2021–May 2022",
      description: "Achieved 95% signal acquisition accuracy and explored grasp detection in prosthetic applications using MATLAB.",
      technologies: ["MATLAB", "Signal Processing", "Biomedical Engineering"],
      impact: "95% signal accuracy"
    },
    {
      title: "IoT-Based Smart Energy Meter",
      period: "Dec 2022–Feb 2023",
      description: "Enabled real-time monitoring with LoRa/GSM connectivity; automated load control reduced energy waste by 15%.",
      technologies: ["IoT", "LoRa", "GSM", "Real-time Systems"],
      impact: "15% energy waste reduction"
    },
    {
      title: "Thrust-Vectored Control for USV",
      period: "Jan–May 2023",
      description: "Enhanced unmanned surface vehicle maneuverability, improving response by 25% and obstacle avoidance by 30%.",
      technologies: ["Control Systems", "Embedded Systems", "Robotics"],
      impact: "25% response improvement, 30% better obstacle avoidance"
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* VLSI Circuit Board Background Pattern */}
      <div className="fixed inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="vlsi-circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              {/* Main circuit traces */}
              <path d="M0 20h40M20 0v40" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              <path d="M10 10h20v20H10z" stroke="currentColor" strokeWidth="0.3" fill="none"/>
              
              {/* IC chip representations */}
              <rect x="15" y="15" width="10" height="10" stroke="currentColor" strokeWidth="0.3" fill="none"/>
              <rect x="16" y="16" width="8" height="8" stroke="currentColor" strokeWidth="0.2" fill="none"/>
              
              {/* Connection pads */}
              <circle cx="5" cy="5" r="1" fill="currentColor"/>
              <circle cx="35" cy="5" r="1" fill="currentColor"/>
              <circle cx="5" cy="35" r="1" fill="currentColor"/>
              <circle cx="35" cy="35" r="1" fill="currentColor"/>
              
              {/* Via holes */}
              <circle cx="10" cy="20" r="0.5" fill="currentColor"/>
              <circle cx="30" cy="20" r="0.5" fill="currentColor"/>
              <circle cx="20" cy="10" r="0.5" fill="currentColor"/>
              <circle cx="20" cy="30" r="0.5" fill="currentColor"/>
              
              {/* Micro traces */}
              <path d="M5 15h5M30 15h5M15 5v5M15 30v5" stroke="currentColor" strokeWidth="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vlsi-circuit)"/>
        </svg>
      </div>

      {/* Animated Circuit Particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400/30 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-400/25 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Integrated Chip Pattern Overlay */}
      <div className="fixed inset-0 opacity-[0.02]">
        <div className="absolute top-10 left-10 w-32 h-32 border border-current rounded transform rotate-45"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-current rounded-lg"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 border border-current rounded transform -rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-current rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <CircuitBoard className="w-8 h-8 text-cyan-400" />
                <div className="absolute inset-0 w-8 h-8 border border-cyan-400/30 rounded animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-white">Sahil Hakim</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {["about", "education", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === section ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="relative">
                <Cpu className="w-12 h-12 text-cyan-400" />
                <div className="absolute inset-0 w-12 h-12 border-2 border-cyan-400/20 rounded-lg animate-pulse"></div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent"></div>
              <div className="relative">
                <Zap className="w-10 h-10 text-blue-400" />
                <div className="absolute inset-0 w-10 h-10 border border-blue-400/30 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sahil Hakim
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto">
              VLSI Design & Hardware Engineer
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I'm a results-driven Electronics and Communication Engineer with a deep passion for VLSI and digital systems. 
                My journey involves RTL design, processor architecture, and embedded system development. I thrive on building 
                efficient semiconductor solutions and collaborating across domains to push boundaries in chip design.
              </p>
            </div>
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              View My Work <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16 flex items-center justify-center">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400 mr-4"></div>
            Education
            <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-transparent ml-4"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/60 border-cyan-500/20 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 hover:border-cyan-500/40">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl">Master of Science</CardTitle>
                <CardDescription className="text-gray-300">Electrical and Computer Engineering</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-2">Aug 2024 – May 2026</p>
                <p className="text-green-400 font-semibold">GPA: 3.67/4.0</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/60 border-cyan-500/20 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 hover:border-cyan-500/40">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl">Bachelor of Technology</CardTitle>
                <CardDescription className="text-gray-300">Electronics and Communication Engineering</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-2">Aug 2020 – July 2024</p>
                <p className="text-green-400 font-semibold">GPA: 3.24/4.0</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16 flex items-center justify-center">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-400 mr-4"></div>
            Technical Skills
            <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-transparent ml-4"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-slate-800/60 border-blue-500/20 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
                <CardHeader>
                  <CardTitle className="text-blue-400 text-lg flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-700/60 text-gray-300 hover:bg-slate-600/60 border border-slate-600/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-6 flex items-center justify-center">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400 mr-4"></div>
            Projects & Internships
            <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-transparent ml-4"></div>
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Explore my hands-on experience in VLSI design, embedded systems, and IoT solutions
          </p>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/60 border-cyan-500/20 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle className="text-cyan-400 text-xl mb-2 sm:mb-0">{project.title}</CardTitle>
                    <Badge variant="outline" className="border-green-400/50 text-green-400 w-fit">
                      {project.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-slate-700/60 text-gray-300 border border-slate-600/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center text-green-400 font-semibold">
                    <Zap className="w-4 h-4 mr-2" />
                    Impact: {project.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-400 mr-4"></div>
            Let's Connect
            <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-transparent ml-4"></div>
          </h2>
          <p className="text-gray-300 mb-12 text-lg">
            Ready to collaborate on cutting-edge VLSI projects or discuss opportunities in hardware engineering
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800/60 border-cyan-500/20 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 hover:border-cyan-500/40">
              <CardContent className="pt-6 text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <p className="text-white font-semibold mb-2">Phone</p>
                <p className="text-gray-300">+1 (219) 368-0230</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/60 border-blue-500/20 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 hover:border-blue-500/40">
              <CardContent className="pt-6 text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <p className="text-white font-semibold mb-2">Email</p>
                <a href="mailto:sahilhakim41@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  sahilhakim41@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/60 border-cyan-500/20 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 hover:border-cyan-500/40">
              <CardContent className="pt-6 text-center">
                <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <p className="text-white font-semibold mb-2">LinkedIn</p>
                <a 
                  href="https://linkedin.com/in/sahil-hakim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors inline-flex items-center"
                >
                  Connect with me <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center space-x-6">
            <Button 
              asChild
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <a href="mailto:sahilhakim41@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Sahil Hakim. Built with passion for VLSI design and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
