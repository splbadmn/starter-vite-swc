import React, { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { X } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

interface ProjectGalleryProps {
  title?: string;
  subtitle?: string;
}

const ProjectGallery = ({
  title = "Our Project Gallery",
  subtitle = "Showcasing our expertise in telecommunications infrastructure deployment",
}: ProjectGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Define gallery items with the project images
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: "/project/Img1.jpg",
      title: "Field Equipment Installation",
      category: "infrastructure",
      description: "Installation of specialized equipment for telecommunications field operations."
    },
    {
      id: 2,
      image: "/project/Img2.jpg",
      title: "Cable Management System",
      category: "fiber-optic",
      description: "Organized cable management systems for efficient network operations."
    },
    {
      id: 3,
      image: "/project/Img3.jpg",
      title: "Junction Box Configuration",
      category: "infrastructure",
      description: "Configuration of junction boxes for secure connection distribution."
    },
    {
      id: 4,
      image: "/project/Img4.jpg",
      title: "Signal Testing Equipment",
      category: "maintenance",
      description: "Advanced testing equipment for verifying network signal integrity."
    },
    {
      id: 5,
      image: "/project/Img5.jpg",
      title: "Cable Labeling Systems",
      category: "maintenance",
      description: "Professional cable labeling for streamlined maintenance and troubleshooting."
    },
    {
      id: 6,
      image: "/project/Img6.jpg",
      title: "Network Junction Enclosure",
      category: "infrastructure",
      description: "Weather-resistant network junction enclosures for outdoor installations."
    },
    {
      id: 7,
      image: "/project/Img7.jpg",
      title: "Fiber Connection Points",
      category: "fiber-optic",
      description: "High-density fiber connection points for multi-user environments."
    },
    {
      id: 8,
      image: "/project/Img8.jpg",
      title: "Cable Routing Solutions",
      category: "installation",
      description: "Professional cable routing solutions for complex network environments."
    },
    {
      id: 9,
      image: "/project/Img9.jpg",
      title: "Network Wiring Layout",
      category: "installation",
      description: "Structured wiring layouts for efficient data transmission."
    },
    {
      id: 10,
      image: "/project/Img10.jpg",
      title: "Fiber Optic Termination",
      category: "fiber-optic",
      description: "Precision fiber optic terminations for reliable network connectivity."
    },
    {
      id: 11,
      image: "/project/Img11.jpg",
      title: "Equipment Rack Installation",
      category: "infrastructure",
      description: "Professional installation of equipment racks for telecommunications hardware."
    },
    {
      id: 12,
      image: "/project/Img12.jpg",
      title: "Network Patch Panel",
      category: "infrastructure",
      description: "Organized patch panel systems for flexible network configurations."
    },
    {
      id: 13,
      image: "/project/Img13.jpg",
      title: "Telecommunications Closet",
      category: "infrastructure",
      description: "Well-organized telecommunications closets for commercial buildings."
    },
    {
      id: 14,
      image: "/project/Img14.jpg",
      title: "Cable Bundling System",
      category: "installation",
      description: "Professional cable bundling for neat and accessible installations."
    },
    {
      id: 15,
      image: "/project/Img15.jpg",
      title: "Network Cabinet Organization",
      category: "infrastructure",
      description: "Strategic organization of network cabinets for optimal performance."
    },
    {
      id: 16,
      image: "/project/Img16.jpg",
      title: "Fiber Distribution Hub",
      category: "fiber-optic",
      description: "Installation of fiber distribution hubs for neighborhood connectivity."
    },
    {
      id: 17,
      image: "/project/Img17.jpg",
      title: "Indoor Cable Installation",
      category: "installation",
      description: "Professional indoor cable installation for commercial environments."
    },
    {
      id: 18,
      image: "/project/Img18.jpg",
      title: "Field Termination Work",
      category: "fiber-optic",
      description: "On-site fiber termination for rapid network deployment."
    },
    {
      id: 19,
      image: "/project/Img19.jpg",
      title: "Server Room Installation",
      category: "commercial",
      description: "Professional server room setup for business telecommunications."
    },
    {
      id: 20,
      image: "/project/Img20.jpg",
      title: "Outdoor Terminal Box",
      category: "infrastructure",
      description: "Weather-proof terminal boxes for outdoor network connections."
    },
    {
      id: 21,
      image: "/project/Img21.jpg",
      title: "High-Density Patch Panels",
      category: "infrastructure",
      description: "High-density patch panel installation for large-scale networks."
    },
    {
      id: 22,
      image: "/project/Img22.jpg",
      title: "Commercial Network Setup",
      category: "commercial",
      description: "Complete network infrastructure setup for commercial buildings."
    },
    {
      id: 23,
      image: "/project/Img23.jpg",
      title: "Fiber Distribution Point",
      category: "fiber-optic",
      description: "Strategic fiber distribution points for efficient network coverage."
    },
    {
      id: 24,
      image: "/project/Img24.jpg",
      title: "Residential Network Installation",
      category: "residential",
      description: "Comprehensive network installations for residential properties."
    },
    {
      id: 25,
      image: "/project/Img25.jpg",
      title: "Rack Cabling System",
      category: "infrastructure",
      description: "Professional rack cabling systems for telecommunications equipment."
    },
    {
      id: 26,
      image: "/project/Img26.jpg",
      title: "Multi-Service Junction",
      category: "infrastructure",
      description: "Junction points for multiple service integration in telecommunications networks."
    },
    {
      id: 27,
      image: "/project/Img27.jpg",
      title: "Cable Routing Infrastructure",
      category: "installation",
      description: "Infrastructure for efficient cable routing and management."
    },
    {
      id: 28,
      image: "/project/Img28.jpg",
      title: "Network Distribution Frame",
      category: "infrastructure",
      description: "Distribution frame installation for telecommunications networks."
    },
    {
      id: 29,
      image: "/project/Img29.jpg",
      title: "Fiber Splicing Box",
      category: "fiber-optic",
      description: "Specialized boxes for secure fiber optic splicing operations."
    },
    {
      id: 30,
      image: "/project/Img30.jpg",
      title: "Commercial Telecommunications Room",
      category: "commercial",
      description: "Full telecommunications room setup for business environments."
    },
    {
      id: 31,
      image: "/project/Img31.jpg",
      title: "Cross-Connect Cabinet",
      category: "infrastructure",
      description: "Cross-connect cabinets for flexible network configurations."
    },
    {
      id: 32,
      image: "/project/Img32.jpg",
      title: "Field Technician Equipment",
      category: "maintenance",
      description: "Specialized equipment used by field technicians for network installation."
    },
    {
      id: 33,
      image: "/project/Img33.jpg",
      title: "Fiber Optic Installation",
      category: "fiber-optic",
      description: "Installation of high-capacity fiber optic cables for NBN deployment."
    },
    {
      id: 34,
      image: "/project/Img34.jpg",
      title: "Network Cabinet Setup",
      category: "infrastructure",
      description: "Configuration of network distribution cabinet for residential area connectivity."
    },
    {
      id: 35,
      image: "/project/Img35.jpg",
      title: "Underground Cable Installation",
      category: "fiber-optic",
      description: "Laying underground fiber optic cables for reliable high-speed internet access."
    },
    {
      id: 36,
      image: "/project/Img36.jpg",
      title: "Network Distribution Point",
      category: "infrastructure",
      description: "Distribution points for efficient network service delivery."
    },
    {
      id: 37,
      image: "/project/Img37.jpg",
      title: "Telecommunications Tower",
      category: "infrastructure",
      description: "Maintenance of telecommunications tower for wireless network services."
    },
    {
      id: 38,
      image: "/project/Img38.jpg",
      title: "Fiber Network Junction",
      category: "fiber-optic",
      description: "Critical junction points in fiber optic network deployments."
    },
    {
      id: 39,
      image: "/project/Img39.jpg",
      title: "Commercial Building Network",
      category: "commercial",
      description: "Installation of high-performance network infrastructure for commercial buildings."
    },
    {
      id: 40,
      image: "/project/Img40.jpg",
      title: "Cable Splicing",
      category: "fiber-optic",
      description: "Precision fiber optic cable splicing for optimal network performance."
    },
    {
      id: 41,
      image: "/project/Img41.jpg",
      title: "Network Terminal Equipment",
      category: "infrastructure",
      description: "Terminal equipment for telecommunications network endpoints."
    },
    {
      id: 42,
      image: "/project/Img42.jpg",
      title: "Network Testing",
      category: "maintenance",
      description: "Comprehensive testing of network installations to ensure quality performance."
    },
    {
      id: 43,
      image: "/project/Img43.jpg",
      title: "Multi-Dwelling Unit Installation",
      category: "residential",
      description: "NBN installation for apartment buildings and multi-dwelling units."
    },
    {
      id: 44,
      image: "/project/Img44.jpg",
      title: "Cable Connector Installation",
      category: "installation",
      description: "Precision installation of cable connectors for reliable connections."
    },
    {
      id: 45,
      image: "/project/Img45.jpg",
      title: "Connector Terminal Block",
      category: "infrastructure",
      description: "Terminal blocks for secure and efficient cable connections."
    },
    {
      id: 46,
      image: "/project/Img46.jpg",
      title: "Network Communication Hub",
      category: "infrastructure",
      description: "Central communication hubs for coordinating network traffic."
    },
    {
      id: 47,
      image: "/project/Img48.jpg",
      title: "Aerial Cable Installation",
      category: "infrastructure",
      description: "Installation of aerial cables for efficient broadband deployment."
    },
    {
      id: 48,
      image: "/project/Img50.jpg",
      title: "Street Cabinet Installation",
      category: "infrastructure",
      description: "Deployment of street cabinets for neighborhood broadband connectivity."
    },
    {
      id: 49,
      image: "/project/Img53.jpg",
      title: "Underground Conduit Work",
      category: "infrastructure",
      description: "Preparing underground conduits for telecommunications cable deployment."
    },
    {
      id: 50,
      image: "/project/Img55.jpg",
      title: "Field Junction Installation",
      category: "installation",
      description: "Installation of field junctions for telecommunications networks."
    },
    {
      id: 51,
      image: "/project/Img57.jpg",
      title: "Residential Connection",
      category: "residential",
      description: "Connecting residential properties to the high-speed NBN network."
    },
    {
      id: 52,
      image: "/project/Img60.jpg",
      title: "Network Amplifier Installation",
      category: "infrastructure",
      description: "Installation of network amplifiers to boost signal strength in large deployments."
    },
    {
      id: 53,
      image: "/project/Img62.jpg",
      title: "Telecommunications Pit Work",
      category: "infrastructure",
      description: "Field work in telecommunications pits for underground network maintenance."
    },
    {
      id: 54,
      image: "/project/Img63.jpg",
      title: "Fiber Optic Network Expansion",
      category: "fiber-optic",
      description: "Expansion of fiber optic networks to serve growing communities."
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "infrastructure", name: "Infrastructure" },
    { id: "fiber-optic", name: "Fiber Optic" },
    { id: "installation", name: "Installation" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "maintenance", name: "Maintenance" },
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={
                activeCategory === category.id
                  ? "bg-red-700 hover:bg-red-800 text-white"
                  : "border-red-700 text-red-700 dark:border-red-500 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
              }
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedImage(item)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <Dialog
        open={selectedImage !== null}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="sm:max-w-3xl bg-white dark:bg-gray-800 p-0 overflow-hidden">
          <div className="relative">
            {selectedImage && (
              <>
                <div className="max-h-[80vh] overflow-hidden">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedImage.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectGallery;
