import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
 
import { Calendar, MapPin, GraduationCap } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Education: React.FC = () => {
  const educationEntries = [
    {
      degree: "Bachelor of Data Science (Ongoing)",
      university: "Cardiff Metropolitan University",
      duration: "November 2024 - Present",
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      degree: "Higher Diploma in Computing and Software Engineering",
      university: "Cardiff Metropolitan University",
      duration: "November 2022 - November 2024",
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      degree: "Diploma in ICT",
      university: "ICBT Campus",
      duration: "March 2022 - September 2022",
      icon: <GraduationCap className="w-4 h-4" />,
    },
  ];

  return (
    <section id="education" className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="hidden lg:flex flex-row gap-6 max-w-6xl mx-auto">
          {educationEntries.map((entry, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden flex-1"
            >
              <CardHeader className="pb-4 bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50">
                <div className="flex items-start gap-3">
                  {entry.icon}
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {entry.degree}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {entry.university}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pl-12">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {entry.duration}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full max-w-md mx-auto"
          >
            <CarouselContent className="-ml-1">
              {educationEntries.map((entry, index) => (
                <CarouselItem key={index} className="pl-1 basis-1/1">
                  <div className="p-1">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden w-full">
                      <CardHeader className="pb-4 bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50">
                        <div className="flex items-start gap-3">
                          {entry.icon}
                          <div className="flex-1">
                            <CardTitle className="text-lg font-semibold text-gray-900">
                              {entry.degree}
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                              <MapPin className="w-3 h-3" />
                              {entry.university}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 pl-12">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {entry.duration}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Education;