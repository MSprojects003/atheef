import React from 'react';
import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card";
 
import { Calendar, MapPin, Clock } from "lucide-react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 gap-8">
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden w-full lg:max-w-2xl mx-auto lg:ml-0">
            <CardHeader className="pb-6 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2">
                  
                  Intern-Software Engineer
                </CardTitle>
                 
              </div>
              <div className="flex flex-col gap-2 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-gray-600">Kindly Startup (Kindly.lk), Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span className="text-gray-600">June 2024 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span className="text-gray-600">6 months</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-0">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Developed full-stack features for a web platform using Next.js, React.js, TypeScript, Shadcn UI, Supabase, and PostgreSQL, resulting in a 30% improvement in load times and enhanced user experience for 5,000+ monthly users.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Built responsive landing pages and e-commerce components, integrating RESTful APIs and real-time database operations, which increased user engagement by 25% during the beta phase.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Collaborated with cross-functional teams to implement secure authentication and data validation systems, ensuring compliance with industry standards and reducing error rates by 40%.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Optimized frontend performance through code refactoring and state management with React hooks, contributing to seamless deployment of updates via CI/CD pipelines.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;