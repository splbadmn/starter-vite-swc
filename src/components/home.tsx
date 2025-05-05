import React from "react";
import { motion } from "framer-motion";
import HeroSlider from "./HeroSlider";
import ServicesGrid from "./ServicesGrid";
import TestimonialSection from "./TestimonialSection";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import MainLayout from "./layout/MainLayout";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";

const HomePage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Mock data for stats
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "50+", label: "Professional Team" },
  ];

  // Mock data for features
  const features = [
    { icon: <CheckCircle className="h-6 w-6" />, title: "Quality Assurance" },
    { icon: <Clock className="h-6 w-6" />, title: "On-Time Delivery" },
    { icon: <Award className="h-6 w-6" />, title: "Award Winning" },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSlider />

      {/* Welcome Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Welcome to Monorays Engineering
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-gray-600">
              Monorays Engineering is a leading civil engineering firm providing
              comprehensive solutions for infrastructure development,
              construction management, and structural design. With over 25 years
              of experience, we deliver excellence in every project.
            </p>
            <p className="text-gray-600">
              Our team of highly qualified engineers and professionals are
              committed to delivering innovative and sustainable solutions that
              meet the highest standards of quality and safety.
            </p>
            <Button className="mt-4 bg-primary hover:bg-primary-800">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Civil Engineering Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-2xl font-bold">25+</p>
              <p>Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of civil engineering services
            tailored to meet the unique needs of each project.
          </p>
        </div>

        <ServicesGrid />
      </section>

      {/* Features Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="bg-white text-primary p-4 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="opacity-80">
                  Our commitment to excellence ensures that every project meets
                  the highest standards of quality and performance.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about our services.
          </p>
        </div>

        <TestimonialSection />
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us today for a free consultation and let our expert team
              help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-800">
                Get a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600">
                123 Engineering Way
                <br />
                New York, NY 10001
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600">
                Phone: (123) 456-7890
                <br />
                Email: info@monorays.org
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9AM - 5PM
                <br />
                Saturday - Sunday: Closed
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
