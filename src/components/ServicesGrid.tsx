import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface ServicesGridProps {
  services?: ServiceProps[];
  title?: string;
  subtitle?: string;
}

const ServicesGrid = ({
  services = [
    {
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=building",
      title: "Structural Engineering",
      description:
        "Expert structural analysis and design for buildings and infrastructure projects.",
      link: "/services/structural-engineering",
    },
    {
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=road",
      title: "Transportation Engineering",
      description:
        "Planning and design of roads, highways, and transportation systems.",
      link: "/services/transportation-engineering",
    },
    {
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=water",
      title: "Water Resources",
      description:
        "Management and design of water supply, drainage, and flood control systems.",
      link: "/services/water-resources",
    },
    {
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=environment",
      title: "Environmental Engineering",
      description:
        "Solutions for environmental protection and sustainable development.",
      link: "/services/environmental-engineering",
    },
    {
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=geotechnical",
      title: "Geotechnical Engineering",
      description: "Analysis and design of foundations and earth structures.",
      link: "/services/geotechnical-engineering",
    },
    {
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=construction",
      title: "Construction Management",
      description:
        "Comprehensive oversight of construction projects from planning to completion.",
      link: "/services/construction-management",
    },
  ],
  title = "Our Services",
  subtitle = "Comprehensive Civil Engineering Solutions",
}: ServicesGridProps) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-10 h-10"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow text-center">
                  {service.description}
                </p>
                <div className="mt-auto text-center">
                  <Button
                    variant="outline"
                    className="group text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                    asChild
                  >
                    <a href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
