import React from "react";
import MainLayout from "../layout/MainLayout";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <MainLayout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-red-700 text-white py-20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80')",
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl">
              Get in touch with our team of experts for all your civil
              engineering needs.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you as
                  soon as possible.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        placeholder="(123) 456-7890"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Project Inquiry"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your project or inquiry..."
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="bg-red-700 hover:bg-red-800 w-full md:w-auto"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                <p className="text-gray-600 mb-8">
                  Feel free to reach out to us using any of the contact methods
                  below.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="flex items-start p-6">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          Our Location
                        </h3>
                        <p className="text-gray-600">
                          123 Engineering Way
                          <br />
                          New York, NY 10001
                          <br />
                          United States
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start p-6">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Phone</h3>
                        <p className="text-gray-600">
                          Main: (123) 456-7890
                          <br />
                          Toll-free: 1-800-123-4567
                          <br />
                          Fax: (123) 456-7891
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start p-6">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-gray-600">
                          General Inquiries: info@monorays.org
                          <br />
                          Support: support@monorays.org
                          <br />
                          Careers: careers@monorays.org
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start p-6">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          Working Hours
                        </h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9AM - 5PM
                          <br />
                          Saturday - Sunday: Closed
                          <br />
                          Holidays: Closed
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-xl font-semibold mb-2">Map Placeholder</h3>
                <p className="text-gray-600">
                  Interactive map would be embedded here
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
