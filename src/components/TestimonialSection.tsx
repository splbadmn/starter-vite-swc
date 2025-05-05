import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
}

interface TestimonialSectionProps {
  testimonials?: Testimonial[];
  autoRotate?: boolean;
  rotationInterval?: number;
}

const TestimonialSection = ({
  testimonials = [
    {
      id: 1,
      quote:
        "Monorays Engineering delivered our bridge project on time and within budget. Their attention to detail and commitment to quality was exceptional.",
      author: "John Smith",
      position: "Project Manager",
      company: "City Infrastructure Department",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    },
    {
      id: 2,
      quote:
        "Working with the Monorays team was a pleasure. Their innovative solutions to our complex structural challenges saved us both time and resources.",
      author: "Sarah Johnson",
      position: "Director",
      company: "Urban Development Corp",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      id: 3,
      quote:
        "The expertise and professionalism demonstrated by Monorays Engineering throughout our highway expansion project was truly impressive. Highly recommended.",
      author: "Michael Chen",
      position: "Chief Engineer",
      company: "National Transport Authority",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
  ],
  autoRotate = true,
  rotationInterval = 5000,
}: TestimonialSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let interval: number | undefined;

    if (autoRotate && testimonials.length > 1) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, rotationInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRotate, rotationInterval, testimonials.length, isMounted]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-16 px-4 bg-slate-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 dark:text-gray-100">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-red-700 dark:bg-red-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white dark:bg-gray-700 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-6">
                          <Avatar className="h-20 w-20 border-4 border-red-700/20 dark:border-red-600/20">
                            {testimonial.avatar ? (
                              <AvatarImage
                                src={testimonial.avatar}
                                alt={testimonial.author}
                              />
                            ) : (
                              <AvatarFallback className="bg-red-700/10 text-red-700 dark:bg-red-600/20 dark:text-red-500 text-xl">
                                {testimonial.author
                                  .split(" ")
                                  .map((name) => name[0])
                                  .join("")}
                              </AvatarFallback>
                            )}
                          </Avatar>
                        </div>
                        <div className="mb-6">
                          <svg
                            className="h-8 w-8 text-red-700/40 dark:text-red-500/40 mx-auto mb-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                          <p className="text-lg text-gray-700 dark:text-gray-200 italic">
                            {testimonial.quote}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg dark:text-gray-100">
                            {testimonial.author}
                          </h4>
                          <p className="text-gray-500 dark:text-gray-400">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={handlePrevious}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2.5 rounded-full transition-all ${index === currentIndex ? "w-8 bg-red-700 dark:bg-red-600" : "w-2.5 bg-gray-300 dark:bg-gray-600"}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
