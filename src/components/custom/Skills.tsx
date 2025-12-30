import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Code2, ChevronLeft, ChevronRight } from "lucide-react";

const Skills: React.FC = () => {
  const skills = [
    { 
      category: "Frontend", 
      icon: <Code2 className="w-4 h-4" />,
      items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Shadcn UI"] 
    },
    { 
      category: "Backend", 
      icon: <Code2 className="w-4 h-4" />,
      items: ["Node.js", "Express.js", "Python", "Flask", "C#", "Java", ".NET Framework", "ASP.NET", "Supabase", "RESTful APIs"] 
    },
    { 
      category: "Mobile Application Development", 
      icon: <Smartphone className="w-4 h-4" />,
      items: ["Java", "Android Studio", "SQLite"] 
    },
    { 
      category: "Database", 
      icon: <Code2 className="w-4 h-4" />,
      items: ["SQL", "MySQL", "MongoDB", "PostgreSQL"] 
    },
    { 
      category: "Data Science", 
      icon: <Code2 className="w-4 h-4" />,
      items: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter Notebook"] 
    },
    { 
      category: "Tools & Others", 
      icon: <Code2 className="w-4 h-4" />,
      items: ["Git", "GitHub", "Vite", "CI/CD", "Figma", "VS Code"] 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(window.innerWidth >= 1024 ? 3 : 1);
  const totalSlides = skills.length;

  useEffect(() => {
    const handleResize = () => {
      const newSlidesToShow = window.innerWidth >= 1024 ? 3 : 1;
      setSlidesToShow(newSlidesToShow);
      setCurrentIndex(0); // Reset to start on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + slidesToShow;
        return next >= totalSlides ? 0 : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [slidesToShow, totalSlides]);

  const goToPrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? totalSlides - slidesToShow : prev - slidesToShow
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + slidesToShow;
      return next >= totalSlides ? 0 : next;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index * slidesToShow);
  };

  const numDots = Math.ceil(totalSlides / slidesToShow);

  return (
    <section id="skills" className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
          Technical Artisans
        </h2>
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform ease-in-out duration-500"
              style={{
                transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
              }}
            >
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full lg:w-1/3 px-2"
                >
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white h-full overflow-hidden">
                    <CardHeader className="pb-4 bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50">
                      <div className="flex items-center gap-2">
                        {skillGroup.icon}
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {skillGroup.category}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="px-3 py-1.5 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 transition-all duration-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-4 right-4 flex justify-between transform -translate-y-1/2 z-10 lg:left-auto lg:right-0">
            <button
              onClick={goToPrev}
              className="p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 opacity-0 lg:opacity-100 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 opacity-0 lg:opacity-100 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: numDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentIndex === i * slidesToShow
                    ? 'bg-indigo-600 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;