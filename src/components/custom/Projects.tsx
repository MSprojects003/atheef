import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import imobile1 from  "../../assets/pictures/projects/imobile/image1.png"
import imobile12 from  "../../assets/pictures/projects/imobile/image2.png"
import imobile3 from  "../../assets/pictures/projects/imobile/image3.png"
import imobile4 from  "../../assets/pictures/projects/imobile/image4.png"
import imobile5 from  "../../assets/pictures/projects/imobile/image5.png"

import savoy1 from "../../assets/pictures/projects/savoy/image1.png"
import savoy2 from "../../assets/pictures/projects/savoy/image2.png"    
import savoy3 from "../../assets/pictures/projects/savoy/image3.png"
import savoy4 from "../../assets/pictures/projects/savoy/image4.png"

import imobile_a1 from "../../assets/pictures/projects/imobile/imobile_a/image1.png"
import imobile_a2 from "../../assets/pictures/projects/imobile/imobile_a/image2.png"
import imobile_a3 from "../../assets/pictures/projects/imobile/imobile_a/image3.png"
import imobile_a4 from "../../assets/pictures/projects/imobile/imobile_a/image4.png"
import imobile_a5 from "../../assets/pictures/projects/imobile/imobile_a/image5.png"            
import imobile_a6 from "../../assets/pictures/projects/imobile/imobile_a/image6.png"
import imobile_a7 from "../../assets/pictures/projects/imobile/imobile_a/image7.png"
import imobile_a8 from "../../assets/pictures/projects/imobile/imobile_a/image8.png"

import shaereena1 from "../../assets/pictures/projects/shareena/image1.png"
import shaereena2 from "../../assets/pictures/projects/shareena/image2.png"
import shaereena3 from "../../assets/pictures/projects/shareena/image3.png"

import ecostay1 from "../../assets/pictures/projects/ecostay/image1.jpeg"
import ecostay2 from "../../assets/pictures/projects/ecostay/image2.jpeg"
import ecostay3 from "../../assets/pictures/projects/ecostay/image3.jpeg"   
import ecostay4 from "../../assets/pictures/projects/ecostay/image4.jpeg"
import ecostay5 from "../../assets/pictures/projects/ecostay/image5.jpeg"
import ecostay6 from "../../assets/pictures/projects/ecostay/image6.jpeg"   
import ecostay7 from "../../assets/pictures/projects/ecostay/image7.jpeg"
import ecostay8 from "../../assets/pictures/projects/ecostay/image8.jpeg"
import ecostay9 from "../../assets/pictures/projects/ecostay/image9.jpeg"
  

import techcare1 from "../../assets/pictures/projects/techcare/image2.jpeg"
import techcare2 from "../../assets/pictures/projects/techcare/image1.jpeg"
import techcare3 from "../../assets/pictures/projects/techcare/image3.jpeg"
import techcare4 from "../../assets/pictures/projects/techcare/image4.jpeg"
import techcare5 from "../../assets/pictures/projects/techcare/image5.jpeg"
import techcare6 from "../../assets/pictures/projects/techcare/image6.jpeg" 
import techcare7 from "../../assets/pictures/projects/techcare/image7.jpeg"
import techcare8 from "../../assets/pictures/projects/techcare/image8.jpeg"
import techcare9 from "../../assets/pictures/projects/techcare/image9.jpeg"
import techcare10 from "../../assets/pictures/projects/techcare/image10.jpeg"
import techcare11 from "../../assets/pictures/projects/techcare/image11.jpeg"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink, Github, Eye } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  subtitle: string;
  href?: string;
  liveDemo: boolean;
  github?: string;
  images: string[];
  tags: string[]; // Tech stack used in the project
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      name: "E-Commerce Website",
      description: "A full-stack e-commerce application built with Next.js and Supabase for the imobile accessories shop.",
      subtitle: "Live Demo",
      href: "https://imobile.lk",
      liveDemo: true,
      github: "https://github.com/MSprojects003/imobile",
      images: [
        imobile1,
       imobile12,
       imobile3,
       imobile4,
       imobile5
      ],
      tags: ["Next.js", "Supabase", "Tailwind","Shadcn-UI","PostgreSQL","Typescript","Vercek"], // Tech stack
    },
    {
      id: "2",
      name: "Movie SeatReservation( Currently Developing)",
      description: "This project is a movie discovery web application built using Vite + React and the TMDB API. It uses shadcn/ui for a clean and responsive interface. In the future, the project will be expanded into a full MERN stack application with backend features and user authentication.",
      subtitle: "Live Demo",
      href: "https://savoy-lk.vercel.app/",
      liveDemo: true,
      github: "https://github.com/MSprojects003/Savoy-Cinema-Ticket-Booking-Website",
      images: [
        savoy1,
        savoy2,
        savoy3, 
        savoy4
      ],
      tags: ["React", "Node.js", "Shadcn-UI","TailwindCSS","TMDP API","Vercel"], // Tech stack
    },
    {
      id: "3",
      name: "E-Commerce Management System",
      description: "Interactive dashboard for visualizing sales data with charts and graphs and Manage the Products and Orders.",
      subtitle: "View on GitHub",
      href: "https://imobile-admin.vercel.app/",
      liveDemo: true,
      github: "https://github.com/MSprojects003/imobile-admin",
      images: [
       imobile_a1,
       imobile_a2,
       imobile_a3,  
         imobile_a4,
         imobile_a5,
            imobile_a6,
            imobile_a7,
            imobile_a8
      ],
      tags: ["Next JS", "Supabase", "Typescript","Shadcn-UI","TailwindCSS","PostgreSQL","TanstackQuery","Vercel"], // Tech stack
    },
    {
      id: "4",
      name: "Portfolio Website",
      description: "Personal portfolio showcasing web development projects with modern UI.",
      subtitle: "View on GitHub",
      href: "https://portfolio-six-gray-50.vercel.app/",
      liveDemo: true,
      github: "https://github.com/MSprojects003/portfolio",
      images: [
        shaereena1,
        shaereena2,
        shaereena3
      ],
      tags: ["Next.js", "Tailwind", "shadcn/ui"], // Tech stack
    },
     {
      id: "5",
      name: "Resort Room and Activity Booking Mobile App",
      description: "A Modern Mobile Application for the resort room and activity booking.",
      subtitle: "View on GitHub",
      href: undefined,
      liveDemo: false,
      github: "https://github.com/user/portfolio",
      images: [
       ecostay1,
       ecostay2,
       ecostay3,
         ecostay4,
            ecostay5,
            ecostay6,
            ecostay7,
            ecostay8,
            ecostay9
      ],
      tags: ["Java","Android Studio","XML","Firebase"], // Tech stack
    },

     {
      id: "6",
      name: "Repair Service Requesting Mobile App",
      description: "A Modern Mobile Application for the Request Repair service via Online.",
      subtitle: "View on GitHub",
      href: undefined,
      liveDemo: false,
      github: "https://github.com/user/portfolio",
      images: [
         techcare1,
            techcare2,
            techcare3,
            techcare4,
            techcare5,
            techcare6,
            techcare7,
            techcare8,
            techcare9,
            techcare10,
            techcare11

      ],
      tags: ["Java","Android Studio","XML","Firebase","ImageBB"], // Tech stack
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Featured Projects
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full relative"
        >
          <CarouselContent className="-ml-1">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card
                    className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-full"
                    onClick={() => setSelectedProject(project)}
                  >
                    <CardHeader className="p-0 bg-gradient-to-br from-indigo-50 to-purple-50">
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={project.images[0]}
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Eye className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mb-4">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4 ">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-gray-600">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className={`flex items-center ${project.liveDemo ? 'justify-between' : 'justify-start'}`}>
                        {project.liveDemo && (
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-indigo-600 hover:text-indigo-700"
                          >
                            <a href={project.href} target="_blank" rel="noopener noreferrer">
                              {project.subtitle}
                              <ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                          </Button>
                        )}
                        {project.github && (
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-gray-600 hover:text-gray-900"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute text-black -left-4 top-1/2 -translate-y-1/2 h-10 w-10 border-0 bg-white/80 hover:bg-white rounded-full shadow-md" />
          <CarouselNext className="absolute text-black -right-4 top-1/2 -translate-y-1/2 h-10 w-10 border-0 bg-white/80 hover:bg-white rounded-full shadow-md" />
        </Carousel>

        {/* Dialog for Project Images */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl bg-white max-h-[90vh] p-0">
            <DialogHeader className="p-6 pb-4">
              <DialogTitle className="text-2xl text-black font-bold">
                {selectedProject?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="px-6 pb-6">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={selectedProject ? [Autoplay({ delay: 4000 })] : []}
              >
                <CarouselContent>
                  {selectedProject?.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <img
                          src={image}
                          alt={`${selectedProject?.name} - Image ${index + 1}`}
                          className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 border-0 bg-white/80 hover:bg-white rounded-full text-black shadow-md" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 border-0 bg-white/80 hover:bg-white rounded-full text-black shadow-md" />
              </Carousel>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;