
import { useState } from "react";
import { Mail, Phone, Linkedin, ExternalLink, ChevronDown, Code, Cpu, Zap, CircuitBoard, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LogicGateIcon from "@/components/LogicGateIcon";
import SiliconDieIcon from "@/components/SiliconDieIcon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  const skills = {
    "VLSI/HDL": ["SystemVerilog", "Verilog", "VHDL", "RTL Design"],
    "Simulation Tools": ["ModelSim", "Cadence Virtuoso", "LTSpice"],
    "Programming": ["Python", "C/C++", "MATLAB", "R"],
    "IoT & Embedded": ["Arduino", "ESP32", "ThingSpeak"],
    "Other Tools": ["TinkerCAD", "CISCO Packet Tracer", "Simulink"]
  };

  const projects = [
    {
      title: "RISC-V Processor Design",
      period: "Summer 2023",
      description: "Verilog-based 5-stage pipelined RISC-V CPU with 30% instruction throughput increase. Verified design with comprehensive testbenches achieving 99% accuracy.",
      technologies: ["Verilog", "RTL Design", "Pipeline Architecture", "Testbenches"],
      impact: "30% throughput increase, 99% verification accuracy",
      type: "processor"
    },
    {
      title: "AHB to APB Bridge",
      period: "Aug–Oct 2023",
      description: "Synthesizable interconnect module with multi-master/multi-slave support for efficient SoC integration and bus protocol conversion.",
      technologies: ["SystemVerilog", "SoC Design", "Bus Protocols", "Synthesis"],
      impact: "Multi-master/slave support, efficient SoC integration",
      type: "soc"
    },
    {
      title: "Smart Grid Lighting with RODEM Algorithm",
      period: "Jan–Mar 2024",
      description: "IoT streetlight automation using RODEM algorithm and ESP32 for real-time traffic and ambient light monitoring, achieving 30% energy savings.",
      technologies: ["ESP32", "IoT", "Algorithm Design", "Energy Optimization"],
      impact: "30% energy savings, real-time monitoring",
      type: "iot"
    },
    {
      title: "EMG Signal Analysis for Prosthetic Control",
      period: "Dec 2021–May 2022",
      description: "MATLAB project for prosthetic control systems achieving 95% signal acquisition accuracy and exploring grasp detection mechanisms.",
      technologies: ["MATLAB", "Signal Processing", "Biomedical Engineering", "Control Systems"],
      impact: "95% signal acquisition accuracy",
      type: "signal"
    },
    {
      title: "IoT-Based Smart Energy Meter",
      period: "Dec 2022–Feb 2023",
      description: "Real-time monitoring system with LoRa + GSM modules. Automated load control reduced energy waste by 15% through intelligent switching.",
      technologies: ["LoRa", "GSM", "Real-time Systems", "Load Control"],
      impact: "15% energy waste reduction",
      type: "iot"
    },
    {
      title: "Thrust-Vectored Control for USV",
      period: "Jan–May 2023",
      description: "Autonomous underwater vehicle control system with thrust-vectoring for enhanced maneuverability, improving response by 25% and obstacle avoidance by 30%.",
      technologies: ["Control Systems", "Embedded Systems", "Robotics", "Autonomous Navigation"],
      impact: "25% response improvement, 30% better obstacle avoidance",
      type: "control"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen silicon-bg relative overflow-hidden font-mono">
      {/* Silicon die background pattern */}
      <div className="fixed inset-0 opacity-[0.02]">
        <div className="logic-gate-pattern w-full h-full"></div>
      </div>

      {/* Animated circuit traces */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-20">
          <div className="w-2 h-2 bg-neon-green rounded-full animate-circuit-flow"></div>
        </div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-circuit-flow" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-20">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-circuit-flow rotate-90" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Floating silicon dies */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 text-neon-green opacity-10">
          <SiliconDieIcon className="w-24 h-24" animated />
        </div>
        <div className="absolute bottom-20 left-20 text-cyan-400 opacity-10">
          <SiliconDieIcon className="w-20 h-20" />
        </div>
        <div className="absolute top-1/2 right-10 text-blue-400 opacity-10">
          <LogicGateIcon type="and" className="w-16 h-16" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 text-neon-green opacity-10">
          <LogicGateIcon type="xor" className="w-14 h-14" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-silicon-900/95 backdrop-blur-sm border-b border-neon-green/20 shadow-lg shadow-neon-green/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <SiliconDieIcon className="w-8 h-8 text-neon-green" animated />
              <span className="text-xl font-bold text-white font-code tracking-wider">
                Sahil Hakim<span className="text-neon-green animate-blink-cursor"></span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {["about", "education", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium font-code transition-all duration-300 hover:text-neon-green ${
                    activeSection === section ? "text-neon-green neon-glow" : "text-silicon-300"
                  }`}
                >
                  [{section.toUpperCase()}]
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
            <div className="inline-flex items-center space-x-6 mb-8">
              <LogicGateIcon type="and" className="w-12 h-12 text-neon-green" />
              <div className="w-px h-12 bg-gradient-to-b from-neon-green via-cyan-400 to-transparent"></div>
              <SiliconDieIcon className="w-12 h-12 text-cyan-400" animated />
              <div className="w-px h-12 bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent"></div>
              <LogicGateIcon type="xor" className="w-10 h-10 text-blue-400" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 font-code tracking-wider">
              <span className="bg-gradient-to-r from-neon-green via-cyan-400 to-blue-400 bg-clip-text text-transparent neon-glow">
                SAHIL HAKIM
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-neon-green mb-6 font-code cursor-blink">
              Designing the Future in Silicon
            </div>
            
            <p className="text-lg md:text-xl text-silicon-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              I'm a passionate Electronics and Communication Engineer focused on{' '}
              <span className="text-neon-green font-semibold">VLSI design</span>,{' '}
              <span className="text-cyan-400 font-semibold">RTL implementation</span>, and{' '}
              <span className="text-blue-400 font-semibold">embedded system development</span>.
              With hands-on experience in digital hardware architecture and system-level integration, 
              I aim to build smarter, faster chips that power the next generation of technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-neon-green to-cyan-400 hover:from-neon-green/80 hover:to-cyan-400/80 text-black font-bold px-8 py-3 rounded-lg shadow-lg shadow-neon-green/25 hover:shadow-neon-green/40 transition-all duration-300 font-code"
              >
                <CircuitBoard className="mr-2 w-5 h-5" />
                [VIEW_PROJECTS]
              </Button>
              <a href="/SAHIL_RESUME_2025.pdf" >
              <Button 
                variant="outline"
                className="border-2 border-neon-green text-neon-green hover:bg-blue hover:text-black font-bold px-8 py-3 rounded-lg transition-all duration-300 font-code"
              >
                <Download className="mr-2 w-5 h-5" />
                [DOWNLOAD_RESUME]
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16 flex items-center justify-center font-code">
            <LogicGateIcon type="not" className="w-8 h-8 text-neon-green mr-4" />
            [EDUCATION.LOG]
            <LogicGateIcon type="not" className="w-8 h-8 text-neon-green ml-4" />
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-silicon-800/60 border-neon-green/20 backdrop-blur-sm hover:bg-silicon-800/80 transition-all duration-300 hover:border-neon-green/40 hover:shadow-lg hover:shadow-neon-green/10">
              <CardHeader>
                <CardTitle className="text-neon-green text-xl font-code">PURDUE UNIVERSITY</CardTitle>
                <CardDescription className="text-silicon-300 font-code text-sm">MS_ELECTRICAL_COMPUTER_ENG (2024–2026)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-2 font-code">Status: IN_PROGRESS</p>
                <p className="text-cyan-400 font-semibold font-code">GPA: 3.67/4.0</p>
              </CardContent>
            </Card>
            
            <Card className="bg-silicon-800/60 border-cyan-400/20 backdrop-blur-sm hover:bg-silicon-800/80 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/10">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl font-code">VELLORE INSTITUTE OF TECHNOLOGY</CardTitle>
                <CardDescription className="text-silicon-300 font-code text-sm">B.TECH_ECE (2020–2024)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-2 font-code">Status: COMPLETED</p>
                <p className="text-cyan-400 font-semibold font-code">GPA: 3.24/4.0</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Dashboard */}
      <section id="skills" className="py-20 px-6 bg-silicon-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16 flex items-center justify-center font-code">
            <LogicGateIcon type="or" className="w-8 h-8 text-cyan-400 mr-4" />
            [SKILLS_DASHBOARD.SYS]
            <LogicGateIcon type="or" className="w-8 h-8 text-cyan-400 ml-4" />
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="bg-silicon-800/60 border-blue-400/20 backdrop-blur-sm hover:bg-silicon-800/80 transition-all duration-300 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-400/10">
                <CardHeader>
                  <CardTitle className="text-blue-400 text-lg flex items-center font-code">
                    <LogicGateIcon type={index % 2 === 0 ? "and" : "nand"} className="w-5 h-5 mr-2" />
                    {category.toUpperCase().replace(/\//g, '_')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-silicon-700/60 text-silicon-200 hover:bg-silicon-600/60 border border-silicon-600/30 font-code text-xs">
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

      {/* Projects Showcase */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-6 flex items-center justify-center font-code">
            <LogicGateIcon type="xor" className="w-8 h-8 text-neon-green mr-4" />
            [PROJECT_PORTFOLIO.HDL]
            <LogicGateIcon type="xor" className="w-8 h-8 text-neon-green ml-4" />
          </h2>
          <p className="text-silicon-300 text-center mb-16 max-w-2xl mx-auto font-code">
            // Exploring hands-on experience in VLSI design,<br/>
            // embedded systems, and IoT solutions
          </p>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-silicon-800/60 border-neon-green/20 backdrop-blur-sm hover:bg-silicon-800/80 transition-all duration-300 hover:border-neon-green/40 hover:shadow-lg hover:shadow-neon-green/10">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle className="text-neon-green text-xl mb-2 sm:mb-0 font-code">
                      {project.title.toUpperCase().replace(/ /g, '_')}
                    </CardTitle>
                    <Badge variant="outline" className="border-cyan-400/50 text-cyan-400 w-fit font-code">
                      {project.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-silicon-300 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-blue-400 font-semibold mb-2 font-code">[TECH_STACK]:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-silicon-700/60 text-silicon-200 border border-silicon-600/30 font-code text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center text-neon-green font-semibold font-code">
                    <Zap className="w-4 h-4 mr-2" />
                    IMPACT: {project.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-silicon-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center font-code">
            <LogicGateIcon type="nor" className="w-8 h-8 text-blue-400 mr-4" />
            [CONNECT.INIT]
            <LogicGateIcon type="nor" className="w-8 h-8 text-blue-400 ml-4" />
          </h2>
          <p className="text-silicon-300 mb-12 text-lg font-code">
            // Ready to collaborate on cutting-edge VLSI projects<br/>
            // or discuss opportunities in hardware engineering
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-silicon-800/60 border-neon-green/20 backdrop-blur-sm hover:bg-silicon-800/80 transition-all duration-300 hover:border-neon-green/40">
              <CardContent className="pt-6 text-center">
                <Phone className="w-8 h-8 text-neon-green mx-auto mb-4" />
                <p className="text-white font-semibold mb-2 font-code">[PHONE]</p>
                <p className="text-silicon-300 font-code text-sm">+1 (219) 368-0230</p>
              </CardContent>
            </Card>
            
            <Card className="bg-silicon-800/60 border-cyan-400/20 backdrop-blur-sm hover:bg-silicon-800/80 transition-all duration-300 hover:border-cyan-400/40">
              <CardContent className="pt-6 text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <p className="text-white font-semibold mb-2 font-code">[EMAIL]</p>
                <a href="mailto:sahilhakim41@gmail.com" className="text-silicon-300 hover:text-cyan-400 transition-colors font-code text-sm">
                  sahilhakim41@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-silicon-800/60 border-blue-400/20 backdrop-blur-sm hover:bg-silicon-800/80 transition-all duration-300 hover:border-blue-400/40">
              <CardContent className="pt-6 text-center">
                <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <p className="text-white font-semibold mb-2 font-code">[LINKEDIN]</p>
                <a 
                  href="https://linkedin.com/in/sahil-hakim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-silicon-300 hover:text-blue-400 transition-colors inline-flex items-center font-code text-sm"
                >
                  Connect<ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </CardContent>
            </Card>
          </div>
          
          <Button 
            asChild
            className="bg-gradient-to-r from-neon-green to-cyan-400 hover:from-neon-green/80 hover:to-cyan-400/80 text-black font-bold px-8 py-3 shadow-lg shadow-neon-green/25 hover:shadow-neon-green/40 transition-all duration-300 font-code"
          >
            <a href="mailto:sahilhakim41@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              [INIT_CONTACT]
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-silicon-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-silicon-400 font-code">
            © 2024 SAHIL_HAKIM.SYS // Built with passion for VLSI design and innovation
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
