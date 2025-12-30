import { Home, User, Code, Folder, FileText, Linkedin, Github, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import Home1 from './Home';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import cv from "../../assets/cv/Copy of Education (1).pdf.pdf";

const navItems = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#experience', label: 'Experience', icon: User },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#projects', label: 'Projects', icon: Folder },
  { href: cv, label: 'CV', icon: FileText, isDownload: true }, // Updated for download
];

export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: any, isDownload?: boolean) => {
    if (isDownload) {
      // Trigger download for CV
      const link = document.createElement('a');
      link.href = href;
      link.download = 'my-cv.pdf'; // Customize filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    setActiveSection(href);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop Navbar: Sticky top, full width */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg'
            : 'bg-white/60 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Social Icons (Left Side) */}
            <div className="flex items-center space-x-4 justify-start">
              <a
                href="https://www.linkedin.com/in/badurdeen-mohamed-atheef-018ba924a/" // Fixed URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-950 transition-colors p-2 rounded-lg "
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/MSprojects003" // Fixed double "https://"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-950 transition-colors p-2 rounded-lg "
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:mbaasatheef@email.com" // Fixed email
                className="text-gray-950 transition-colors p-2 rounded-lg "
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href && !item.isDownload;
                return (
                  <button
                    key={item.href}
                    onClick={() => handleClick(item.href, item.isDownload)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-transparent text-black '
                        : 'text-gray-900 hover:text-black '
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {/* Centered Bottom Line: 90% width */}
        <div className="w-[90vw] mx-auto h-px bg-gray-200"></div>
      </nav>

      {/* Mobile Navbar: Fixed bottom, icons only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href && !item.isDownload;
            return (
              <button
                key={item.href}
                onClick={() => handleClick(item.href, item.isDownload)}
                className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''}`} />
              </button>
            );
          })}
        </div>
      </nav>

      {/* Demo Sections - Remove these in your actual implementation */}
      <div className="lg:pt-16 md:pt-20 sm:pt-2"> {/* Extra padding for desktop fixed nav */}
        
        <Home1 />
        <Education />

        <Experience/>


       <Skills />

       <Projects  />

        
      </div>
    </>
  );
}