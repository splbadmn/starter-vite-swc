import React from "react";
import MainLayout from "../layout/MainLayout";

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
  image?: string;
}

const CompanyHistory = () => {
  const milestones: MilestoneProps[] = [
    {
      year: "1998",
      title: "Company Founded",
      description:
        "Monorays Engineering was established with a small team of dedicated civil engineers focused on providing quality consulting services.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    },
    {
      year: "2003",
      title: "First Major Project",
      description:
        "Completed our first major infrastructure project, a highway expansion that gained recognition for innovative design and efficient execution.",
      image:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
    },
    {
      year: "2008",
      title: "Office Expansion",
      description:
        "Expanded operations with new headquarters and additional regional offices to better serve our growing client base across multiple states.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      year: "2012",
      title: "International Projects",
      description:
        "Began taking on international projects, bringing our expertise to infrastructure development in emerging markets across Asia and Africa.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    },
    {
      year: "2015",
      title: "Sustainability Initiative",
      description:
        "Launched our comprehensive sustainability initiative, committing to environmentally responsible engineering practices in all our projects.",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Implemented advanced digital technologies including BIM, AI-assisted design, and remote collaboration tools to enhance our service delivery.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    },
    {
      year: "2023",
      title: "25th Anniversary",
      description:
        "Celebrated 25 years of excellence in civil engineering with over 500 successful projects completed and a team of 100+ professionals.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    },
  ];

  return (
    <MainLayout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-red-700 text-white py-20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80')",
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Company History
            </h1>
            <p className="text-xl max-w-3xl">
              The story of Monorays Engineering - 25 years of innovation,
              growth, and excellence in civil engineering.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Journey
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Since our founding in 1998, Monorays Engineering has grown from
                a small consulting firm to a leading civil engineering company
                with a global presence. Our journey has been marked by
                continuous innovation, unwavering commitment to quality, and a
                passion for solving complex engineering challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200 hidden md:block"></div>

              {/* Milestones */}
              {milestones.map((milestone, index) => (
                <div key={index} className="mb-16 relative">
                  {/* Year Marker (Desktop) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-700 text-white rounded-full h-12 w-12 flex items-center justify-center z-10 hidden md:flex">
                    {milestone.year}
                  </div>

                  <div
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
                  >
                    {/* Image */}
                    <div className="w-full md:w-5/12 mb-6 md:mb-0">
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:w-2/12"></div>

                    {/* Content */}
                    <div className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-md">
                      {/* Year Marker (Mobile) */}
                      <div className="bg-red-700 text-white rounded-full h-10 w-10 flex items-center justify-center mb-4 md:hidden">
                        {milestone.year}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision for the Future */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Looking to the Future
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  As we look to the future, Monorays Engineering remains
                  committed to pushing the boundaries of what's possible in
                  civil engineering. We are investing in advanced technologies,
                  sustainable practices, and the development of our talented
                  team to meet the evolving needs of our clients and
                  communities.
                </p>
                <p className="text-gray-600 mb-4">
                  Our vision is to be at the forefront of infrastructure
                  innovation, contributing to the development of smarter, more
                  sustainable cities and communities around the world. We will
                  continue to build on our rich history while embracing new
                  challenges and opportunities in the ever-changing landscape of
                  civil engineering.
                </p>
                <p className="text-gray-600">
                  With a solid foundation built over 25 years, we are excited
                  about the next chapter in our company's history and the
                  positive impact we will continue to make through our work.
                </p>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                  alt="Future vision"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default CompanyHistory;
