import React from "react";
import MainLayout from "../layout/MainLayout";
import ServicesGrid from "../ServicesGrid";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { CheckCircle } from "lucide-react";

const OurServices = () => {
  // Sample service benefits
  const benefits = [
    "Expert team with specialized knowledge",
    "Comprehensive project management",
    "Innovative and sustainable solutions",
    "Adherence to industry standards and regulations",
    "Cost-effective approaches",
    "Timely delivery of projects",
  ];

  return (
    <MainLayout>
      <div className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="relative bg-red-700 text-white py-20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80')",
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl max-w-3xl">
              Comprehensive civil engineering solutions tailored to meet the
              unique needs of each project.
            </p>
          </div>
        </div>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Comprehensive Engineering Solutions
              </h2>
              <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                At Monorays Engineering, we offer a wide range of civil
                engineering services designed to meet the diverse needs of our
                clients. From initial concept to final implementation, our team
                of experts is committed to delivering exceptional results.
              </p>
            </div>

            {/* Services Grid */}
            <ServicesGrid title="" subtitle="" />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                  Why Choose Our Services
                </h2>
                <div className="w-20 h-1 bg-red-700 dark:bg-red-600 mb-6"></div>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  With over 25 years of experience in the industry, Monorays
                  Engineering has established a reputation for excellence,
                  innovation, and reliability. Our team of highly qualified
                  professionals is dedicated to delivering solutions that exceed
                  our clients' expectations.
                </p>

                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-red-700 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button className="mt-8 bg-red-700 hover:bg-red-800">
                  Contact Us For Consultation
                </Button>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                  alt="Engineering project"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-red-700 text-white p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="text-2xl font-bold">500+</p>
                  <p>Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Our Service Process
              </h2>
              <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We follow a structured approach to ensure the successful
                delivery of every project, from initial consultation to final
                implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="border-t-4 border-red-700 dark:border-red-600 dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-500 h-12 w-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    Consultation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We begin with a thorough consultation to understand your
                    project requirements, objectives, and constraints.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-red-700 dark:border-red-600 dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-500 h-12 w-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    Planning & Design
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our team develops detailed plans and designs tailored to
                    your specific needs and project requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-red-700 dark:border-red-600 dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-500 h-12 w-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    Implementation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We execute the project according to the approved plans,
                    ensuring adherence to quality standards and timelines.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-red-700 dark:border-red-600 dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-500 h-12 w-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We conduct thorough quality checks and provide ongoing
                    support to ensure the long-term success of your project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-red-700 text-white">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and let our expert team
              help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-red-700 hover:bg-gray-100"
              >
                Get a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default OurServices;
