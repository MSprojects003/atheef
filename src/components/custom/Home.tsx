import React from 'react';
import { Card, CardContent } from "@/components/ui/card"; // Assuming shadcn/ui is installed
import profileImage from '../../assets/pictures/dp.png';

const Home1: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 xl:px-20 py-20 lg:py-4 bg-white">
      {/* Mobile Top Navbar with Social Links */}
      <div className="block lg:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-lg px-4 py-3 flex justify-end space-x-4 border-b border-gray-200">
        <a
          href="mailto:your@email.com"
          aria-label="Email"
          className="group p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-all duration-300"
        >
          <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </a>
        <a
          href="tel:+94787987255" // Replace with your phone number (e.g., tel:+94123456789)
          aria-label="Call"
          className="group p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-all duration-300"
        >
          <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="group p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-all duration-300"
        >
          <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.38.63.12 1.02-.27 1.02-.59 0-.29-.01-1.02-.01-2-4.21.93-5.11-2.03-5.11-2.03-.69-1.75-1.69-2.22-1.69-2.22-1.38-.94.11-.92.11-.92 1.52.11 2.32 1.56 2.32 1.56 1.35 2.31 3.54 1.64 4.41.63.14-.49.53-1.64 1.02-2.02-3.58-.41-7.34-1.79-7.34-7.96 0-1.75.62-3.18 1.64-4.3-.17-.4-.73-2.04.16-4.25 0 0 1.34-.43 4.38 1.64 1.27-.35 2.63-.53 3.98-.53 1.35 0 2.71.18 3.98.53 3.04-2.07 4.38-1.64 4.38-1.64.89 2.21.33 3.85.16 4.25 1.02 1.12 1.64 2.55 1.64 4.3 0 6.21-3.77 7.54-7.37 7.92.58.5 1.1 1.48 1.1 2.98 0 2.15-.02 3.88-.02 4.41 0 .32.21.7 1.02.58C20.56 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="group p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-all duration-300"
        >
          <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>

      {/* Adjust for mobile top navbar padding */}
      <div className="block lg:hidden pt-20"></div>
      
      <div className="max-w-7xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 auto-rows-min lg:auto-rows-auto items-start lg:items-center">
        {/* Badge */}
        <div className="col-start-1 row-start-1 justify-self-center lg:justify-self-start mb-4 lg:mb-0">
          <div className="inline-flex items-center justify-center lg:justify-start">
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium tracking-wide">
              👋 Welcome to my portfolio
            </span>
          </div>
        </div>
        
        {/* Right Side: Image with Better Proportions */}
        <div className="col-start-1 row-start-2 lg:col-start-2 lg:row-start-1 lg:row-span-3 flex justify-center lg:justify-end items-center">
          <div className="relative w-full max-w-[280px] lg:max-w-sm">
            {/* Decorative Border Elements - Hidden on Mobile */}
            <div className="hidden lg:block absolute -top-3 -left-3 w-full h-full border-4 border-blue-200 rounded-2xl -z-10"></div>
            <div className="hidden lg:block absolute -bottom-3 -right-3 w-full h-full border-4 border-purple-200 rounded-2xl -z-10"></div>
            
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50">
              <img
                src={profileImage}
                alt="Badurdeen Mohamed Atheef - Professional Photo"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="col-start-1 row-start-3 lg:col-start-1 lg:row-start-2 lg:row-span-2 flex flex-col justify-center text-left space-y-4 lg:pr-8">
          {/* Name Section */}
          <div className="space-y-1 leading-tight">
            <p className="text-base lg:text-xl text-gray-900 font-bold">
              Hi, I'm
            </p>
            <br className="hidden lg:block" />
            {/* Mobile Name - Normal Text */}
            <h1 className="block lg:hidden text-3xl font-bold text-gray-900">
              Badurdeen Mohamed Atheef
            </h1>
            {/* Desktop Name - Stroked Text */}
            <h1 className="hidden lg:block text-4xl xl:text-5xl font-bold">
              <span className="text-transparent" style={{ WebkitTextStroke: '1px black' }}>
                Badurdeen Mohamed Atheef
              </span>
            </h1>
            {/* Title/Role - Smaller on Mobile */}
            <h2 className="text-sm lg:text-xl text-gray-800 font-semibold mt-1 lg:mt-0">
              Associate Software Engineer
            </h2>
          </div>
          
          {/* Bio - More Spaced Out */}
          <div className="space-y-4 text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            <p>
              Passionate about crafting innovative data-driven solutions and building impactful software experiences.
            </p>
            
            <p>
              Currently pursuing a <span className="font-semibold text-gray-700">Bachelor's in Data Science</span> at Cardiff Metropolitan University, with completed Diplomas in ICT and Higher Diploma in Computing & Software Engineering.
            </p>
            
            <p>
              Gained hands-on experience through an internship as an <span className="font-semibold text-gray-700">Intern Software Engineer at Kindly.lk</span>, alongside professional projects in web development and software engineering.
            </p>
            
            <p>
              At 22, I'm eager to collaborate and drive impactful tech initiatives.
            </p>
          </div>

          {/* Desktop Social Icons - Next to Bio */}
          <div className="hidden lg:flex justify-start space-x-4 pt-6">
            <a
              href="mailto:your@email.com"
              aria-label="Email"
              className="group p-3 bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-200 hover:border-blue-500 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            
            <a
              href="tel:+1234567890" // Replace with your phone number (e.g., tel:+94123456789)
              aria-label="Call"
              className="group p-3 bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-200 hover:border-green-500 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
            
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group p-3 bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-200 hover:border-gray-800 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.38.63.12 1.02-.27 1.02-.59 0-.29-.01-1.02-.01-2-4.21.93-5.11-2.03-5.11-2.03-.69-1.75-1.69-2.22-1.69-2.22-1.38-.94.11-.92.11-.92 1.52.11 2.32 1.56 2.32 1.56 1.35 2.31 3.54 1.64 4.41.63.14-.49.53-1.64 1.02-2.02-3.58-.41-7.34-1.79-7.34-7.96 0-1.75.62-3.18 1.64-4.3-.17-.4-.73-2.04.16-4.25 0 0 1.34-.43 4.38 1.64 1.27-.35 2.63-.53 3.98-.53 1.35 0 2.71.18 3.98.53 3.04-2.07 4.38-1.64 4.38-1.64.89 2.21.33 3.85.16 4.25 1.02 1.12 1.64 2.55 1.64 4.3 0 6.21-3.77 7.54-7.37 7.92.58.5 1.1 1.48 1.1 2.98 0 2.15-.02 3.88-.02 4.41 0 .32.21.7 1.02.58C20.56 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group p-3 bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-200 hover:border-blue-700 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats Cards - Full Width on Desktop using shadcn Card */}
        <div className="col-start-1 row-start-4 lg:col-span-2 lg:row-start-4 grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 lg:pt-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-4 text-center pt-6">
              <h3 className="text-2xl font-bold text-gray-900">2+</h3>
              <p className="text-sm text-gray-600 font-medium mt-1">Years of Experience</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-4 text-center pt-6">
              <h3 className="text-2xl font-bold text-gray-900">50+</h3>
              <p className="text-sm text-gray-600 font-medium mt-1">Projects Done</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-4 text-center pt-6">
              <h3 className="text-2xl font-bold text-gray-900">10+</h3>
              <p className="text-sm text-gray-600 font-medium mt-1">Clients Served</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-4 text-center pt-6">
              <h3 className="text-2xl font-bold text-gray-900">100%</h3>
              <p className="text-sm text-gray-600 font-medium mt-1">Satisfaction Rate</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <hr />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Home1;