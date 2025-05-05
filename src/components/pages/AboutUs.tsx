import React from "react";
import MainLayout from "../layout/MainLayout";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <MainLayout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-red-700 text-white py-20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80')",
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl">
              Monorays Engineering is a leading civil engineering firm with over
              25 years of experience delivering innovative solutions for complex
              infrastructure challenges.
            </p>
          </div>
        </div>

        {/* Company Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Company
                </h2>
                <div className="w-20 h-1 bg-red-700 mb-6"></div>
                <p className="text-gray-600 mb-4">
                  Founded in 1998, Monorays Engineering has grown to become one
                  of the most respected civil engineering firms in the region.
                  Our team of highly qualified engineers and professionals are
                  committed to delivering innovative and sustainable solutions
                  that meet the highest standards of quality and safety.
                </p>
                <p className="text-gray-600 mb-4">
                  We specialize in structural engineering, transportation
                  infrastructure, water resources management, and environmental
                  engineering. Our comprehensive approach to project management
                  ensures that every aspect of your project is handled with
                  precision and care.
                </p>
                <p className="text-gray-600 mb-6">
                  At Monorays, we believe in building lasting relationships with
                  our clients through transparent communication, integrity in
                  our work, and a commitment to excellence in everything we do.
                </p>
                <Button className="bg-red-700 hover:bg-red-800">
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Engineering team"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-red-700 text-white p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="text-2xl font-bold">25+</p>
                  <p>Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Mission & Vision
              </h2>
              <div className="w-20 h-1 bg-red-700 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To deliver exceptional civil engineering solutions that
                  enhance infrastructure, improve communities, and contribute to
                  sustainable development. We are committed to excellence,
                  innovation, and the highest standards of professional practice
                  in every project we undertake.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be the most trusted and respected civil engineering firm,
                  recognized for our technical expertise, innovative solutions,
                  and commitment to sustainability. We aim to shape the future
                  of infrastructure development through forward-thinking
                  approaches and responsible engineering practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                These principles guide our work and define our approach to every
                project and client relationship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our work, from
                  initial design to final implementation.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We embrace innovative approaches and technologies to solve
                  complex engineering challenges.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  We are committed to environmentally responsible engineering
                  practices and sustainable development.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Teamwork
                </h3>
                <p className="text-gray-600">
                  We believe in collaborative problem-solving and the power of
                  diverse perspectives.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  We conduct our business with honesty, transparency, and the
                  highest ethical standards.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Client Focus
                </h3>
                <p className="text-gray-600">
                  We prioritize our clients' needs and are dedicated to
                  delivering exceptional service and results.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
