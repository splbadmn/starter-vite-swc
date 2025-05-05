import React from "react";
import MainLayout from "../layout/MainLayout";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-gray-900">
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
              Monorays is a leading developer of A-grade commercial, industrial and residential
              projects in Australia, committed to building and operating Australia's new
              fast, local access broadband network.
            </p>
          </div>
        </div>

        {/* Company Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                  Our Company
                </h2>
                <div className="w-20 h-1 bg-red-700 mb-6"></div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Monorays was established in 2016 to build and operate Australia's new fast, local access broadband network. 
                  Underpinned by a purpose to connect Australia and bridge the digital divide, Monorays key objective is to 
                  complete all works in given time frame.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Monorays business is contracted to its Delivery Partners to design and construct Australia's High Speed 
                  National Broadband Network (NBN) using various technologies including HFC, Satellite NBN, FTTP, FTTC & FTTN. 
                  Our current contracts will see us execute varied works including UNIFY Operations, Network Builds, 
                  Single Dwelling Units (SDU) drops, Multi Dwelling Units (MDU) builds.                  
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The employees themselves constitute a very important value for our company. Monorays has a qualified and 
                  experienced team of young people. Our employees have been sourced from a wide range of industry sectors. 
                  Most of our team have telecommunications experience, or have come from the background environment of 
                  telecommunications industry along with civil work-force environment.
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
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  One of our priorities is providing services in a timely fashion. We agree on a date of service provision 
                  commencement with our Delivery Partners and always stick to that date. We minimize failure rates by working 
                  only with proven equipment produced by well-known manufacturers. We gain trust of our Construction Partners 
                  also because of very short reaction times. We build positive and long relationships with our Construction 
                  Partners, based on mutual cooperation and trust.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Vision of Monorays is completing quality jobs and keeping the minimum of at least 20 to 30 jobs per day 
                  in completion records. As a team we are ready to expand more and grow as a team, succeeding you our 
                  Delivery Partners and also have a Win-Win situation at all times. We see our Construction Partners as 
                  vital to our success, building the team that will deliver Australia's national broadband access network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Our Core Values
              </h2>
              <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our values underpin the way in which we act and behave at Monorays. They describe what is important to us 
                and guide our thinking and interactions with our customers, each other and the community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="bg-red-100 text-red-600 p-4 rounded-full inline-flex items-center justify-center mb-4 dark:bg-red-900 dark:text-red-400">
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
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  We are one team
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Actively engages and values input from others. Focuses on and prioritizes the goal. 
                  Actively supports team decisions.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-red-100 text-red-600 p-4 rounded-full inline-flex items-center justify-center mb-4 dark:bg-red-900 dark:text-red-400">
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
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  We are fearless
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Transparent and speaks up to improve the outcome. Seeks new and better ways and takes informed risks.
                  Decisive and acts with a sense of urgency.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-red-100 text-red-600 p-4 rounded-full inline-flex items-center justify-center mb-4 dark:bg-red-900 dark:text-red-400">
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
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  We deliver
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sets clear goals, plans and measures progress. Takes accountability, owns actions 
                  and is financially responsible. Focuses on and prioritizes the right things.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-red-100 text-red-600 p-4 rounded-full inline-flex items-center justify-center mb-4 dark:bg-red-900 dark:text-red-400">
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
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  We care
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Fosters the wellbeing and growth of our people. Listens and delights customers.
                  Makes the nation a better place.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-red-100 text-red-600 p-4 rounded-full inline-flex items-center justify-center mb-4 dark:bg-red-900 dark:text-red-400">
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
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  Professional Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Staff can continually develop skills and experience through our extensive training programs 
                  available to all employees. Our core values are evident through the quality of our team.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-red-100 text-red-600 p-4 rounded-full inline-flex items-center justify-center mb-4 dark:bg-red-900 dark:text-red-400">
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
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  Quality Focus
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team members strive to personally and professionally demonstrate integrity, authenticity, 
                  collaboration, flexibility and discipline at all times.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Company Licensing */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Company Licensing Details
              </h2>
              <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                To be pride of we attain the below licenses and recognitions under the banner of our company 
                and our employees hold variety of licenses which are required to carry out the jobs onsite.
              </p>
            </div>
              
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">
                  Technical Licensing
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Master Cabling License</li>
                  <li>Pit and Pipe License</li>
                  <li>Cable Hauling</li>
                  <li>HFC Lines worker</li>
                  <li>Excavator License</li>
                  <li>ACM (Non- Friable) Removal Company License</li>
                  <li>ACM Removal Supervisor's License – 03 Supervisors</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">
                  Safety & Compliance
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Working in the Heights License</li>
                  <li>EWP License</li>
                  <li>Locating Under Ground Assets License</li>
                  <li>All employees accompanied with Provide First- Aid & CPR License</li>
                  <li>Traffic Management Plan & Yellow Card holders</li>
                  <li>All employees with White Card</li>
                  <li>Other required licenses to work under the FTTN / FTTP / FTTC / HFC networks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
