"use client";

import { useState, useEffect } from "react";

export default function Homepage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-all duration-500 px-6 py-12">
      <div
        className={`max-w-7xl w-full bg-white dark:bg-gray-900 shadow-2xl rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col lg:flex-row transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Left: Hero & Info - More spacious layout */}
        <div className="flex-1 flex flex-col justify-center items-center p-16 lg:p-20 space-y-12">
          {/* Logo Section */}
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-5 mb-8">
              <div className="relative">
                <img
                  src="/window.svg"
                  alt="Grievance System Logo"
                  className="w-24 h-24 drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
              </div>
              <span className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">
                Mero Grievance
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Your Voice{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Matters</span>
                  <span className="absolute bottom-3 left-0 w-full h-4 bg-indigo-200 dark:bg-indigo-800 opacity-40 -rotate-1 transform scale-110"></span>
                </span>
              </h1>
            </div>
          </div>

          {/* Description */}
          <div className="text-center space-y-8 max-w-3xl">
            <p className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
              Report issues, share feedback, and help us improve our community.
              Submitting a grievance is quick, secure, and completely
              confidential.
            </p>
          </div>

          {/* CTA Buttons with more vertical spacing */}
          <div className="flex flex-col sm:flex-row gap-6 mt-16 mb-16">
            {" "}
            {/* Increased top and bottom margin */}
            <a
              href="/gunaso"
              className="group relative bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold px-12 py-6 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 min-w-[220px] text-lg flex items-center justify-center"
            >
              <span className="relative z-10 text-white text-center w-full">
                Submit a Grievance
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
            </a>
            <button className="group border-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-semibold px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 min-w-[220px] text-lg flex items-center justify-center">
              <span className="text-center w-full">Learn More</span>
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-12 mt-8 text-center">
            {" "}
            {/* Reduced top margin since buttons now have bottom margin */}
            <div className="space-y-4">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                100%
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                Confidential
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                24/7
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                Available
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                Fast
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                Response
              </div>
            </div>
          </div>
        </div>

        {/* Right: Illustration Section - More spacious */}
        <div className="flex-1 relative min-h-[500px] lg:min-h-[800px] bg-gradient-to-br from-indigo-100 via-blue-50 to-white dark:from-gray-800 dark:via-blue-900 dark:to-gray-900 flex items-center justify-center p-12 lg:p-20">
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent dark:from-gray-900/30 z-10"></div>

          {/* Main Illustration */}
          <div className="relative z-20 transform transition-transform duration-1000 hover:scale-105">
            <img
              src="/globe.svg"
              alt="Community Illustration"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain"
            />
          </div>

          {/* Floating decorative elements with more space */}
          <div className="absolute top-32 left-20 w-12 h-12 bg-indigo-300 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-40 right-24 w-8 h-8 bg-blue-400 rounded-full opacity-30 animate-float animation-delay-2000"></div>
          <div className="absolute top-48 right-32 w-6 h-6 bg-indigo-400 rounded-full opacity-40 animate-float animation-delay-4000"></div>
          <div className="absolute bottom-32 left-32 w-10 h-10 bg-blue-300 rounded-full opacity-25 animate-float animation-delay-3000"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
