import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface HeroSliderProps {
  slides?: Slide[];
  autoPlayInterval?: number;
}

const HeroSlider = ({
  slides = [
    {
      id: 1,
      image: "/hero/Img53.jpg",
      title: "Infrastructure Excellence",
      description:
        "Powering Australia's connectivity with high-quality NBN infrastructure",
      buttonText: "Our Services",
      buttonLink: "/services",
    },
    {
      id: 2,
      image: "/hero/Img57.jpg",
      title: "Building Networks",
      description: "Delivering high-speed broadband to communities across Australia",
      buttonText: "View Projects",
      buttonLink: "/services",
    },
    {
      id: 3,
      image: "/hero/Img60.jpg",
      title: "Expert Installation",
      description: "Precision engineering and skilled technicians for seamless connectivity",
      buttonText: "Our Expertise",
      buttonLink: "/about-us",
    },
    {
      id: 4,
      image: "/hero/Img63.jpg",
      title: "Innovative Solutions",
      description: "Cutting-edge technology for modern communication infrastructure",
      buttonText: "Learn More",
      buttonLink: "/about-us",
    },
    {
      id: 5,
      image: "/hero/Img18.jpg",
      title: "Network Planning",
      description: "Strategic development of telecommunications infrastructure",
      buttonText: "Contact Us",
      buttonLink: "/contact-us",
    },
    {
      id: 6,
      image: "/hero/Img20.jpg",
      title: "Quality Assurance",
      description: "Meeting the highest standards in broadband network deployment",
      buttonText: "Our Values",
      buttonLink: "/about-us",
    },
  ],
  autoPlayInterval = 5000,
}: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Pause autoplay when user interacts with slider
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Mount effect
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentSlide, isAutoPlaying, autoPlayInterval, isMounted]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-background dark:bg-gray-900">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute top-0 left-0 w-full h-full transition-opacity duration-1000",
              currentSlide === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none",
            )}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {slide.description}
              </p>
              <Button size="lg" className="font-medium bg-red-700 hover:bg-red-800 text-white" asChild>
                <a href={slide.buttonLink}>{slide.buttonText}</a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 dark:bg-black/40 dark:hover:bg-black/60 text-white rounded-full z-20"
        onClick={() => {
          pauseAutoPlay();
          prevSlide();
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 dark:bg-black/40 dark:hover:bg-black/60 text-white rounded-full z-20"
        onClick={() => {
          pauseAutoPlay();
          nextSlide();
        }}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              currentSlide === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70",
            )}
            onClick={() => {
              pauseAutoPlay();
              goToSlide(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
