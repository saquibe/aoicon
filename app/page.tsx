"use client";

import Image from "next/image";
import {
  Calendar,
  MapPin,
  Smartphone,
  Users,
  Award,
  Music,
  BookOpen,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-blue-50">
      <header className="relative w-full h-[85vh] md:h-[95vh] overflow-hidden">
        <Image
          src="/header.jpg"
          alt="AOICON 2026 Kolkata"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </header>

      <section className="relative -mt-20 md:-mt-320 z-10 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-t-4 border-orange-500">
            <CardContent className="p-6 md:p-10">
              <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  77<sup className="text-2xl md:text-3xl">th</sup> Annual
                  Conference
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-900">
                  The Association of Otolaryngologists of India
                </p>
                <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto rounded-full" />
                <p className="text-lg md:text-xl text-gray-700 italic font-medium max-w-3xl mx-auto pt-2">
                  Theme: Embark on a Journey of Innovation, Collaboration, and
                  Excellence
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-shadow duration-300">
                  <Calendar className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      Conference Dates
                    </h3>
                    <p className="text-gray-700 text-base">
                      8<sup>th</sup> to 11<sup>th</sup> January 2026
                    </p>
                    <p className="text-sm text-gray-600">
                      (Thursday to Sunday)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
                  <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      Venue
                    </h3>
                    <p className="text-gray-700 text-base">
                      Biswa Bangla Convention Centre
                    </p>
                    <p className="text-sm text-gray-600">
                      Kolkata, West Bengal
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About the Conference
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Join us for the premier gathering of otolaryngology professionals
              in India. AOICON 2026 brings together leading experts, innovative
              research, and cutting-edge practices in the field of ENT medicine.
              Experience four days of knowledge sharing, networking, and
              professional growth in the culturally rich city of Kolkata.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-t-4 border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Expert Faculty
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Learn from renowned national and international speakers
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Scientific Program
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive sessions covering latest advances in ENT
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Award Papers
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Present and compete for prestigious recognition
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-pink-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Music className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Entertainment
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Enjoy cultural events and networking opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-orange-100 via-white to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Official AOICON 2026 Mobile App
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Stay connected and organized throughout the conference with our
              comprehensive mobile application
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                App Features
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Live Searchable Scientific Program
                    </h4>
                    <p className="text-sm text-gray-600">
                      Access the complete schedule with real-time updates
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Personalized Agenda
                    </h4>
                    <p className="text-sm text-gray-600">
                      Create your custom conference schedule
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Faculty Information
                    </h4>
                    <p className="text-sm text-gray-600">
                      Browse profiles of all speakers and organizers
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Know Your Venue
                    </h4>
                    <p className="text-sm text-gray-600">
                      Interactive maps and venue information
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Abstracts & Papers
                    </h4>
                    <p className="text-sm text-gray-600">
                      Access all conference abstracts and research papers
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Music className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Entertainment Schedule
                    </h4>
                    <p className="text-sm text-gray-600">
                      View all social events and activities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Download the App Now
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://apps.apple.com/in/app/aoicon/id6756650921"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="relative w-full max-w-[280px] mx-auto h-[84px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                      <Image
                        src="/applestoreicon.webp"
                        alt="Download on App Store"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.ashishsingh.AOICON&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="relative w-full max-w-[280px] mx-auto h-[84px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                      <Image
                        src="/playstoreicon.jpeg"
                        alt="Get it on Google Play"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-6 max-w-md mx-auto">
                  Available for both iOS and Android devices. Download now and
                  get ready for an enhanced conference experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Website
                </h3>
                <a
                  href="https://www.aoicon2026kolkata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline break-all"
                >
                  www.aoicon2026kolkata.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Email</h3>
                <a
                  href="mailto:info@aoicon2026kolkata.com"
                  className="text-blue-600 hover:text-blue-800 hover:underline break-all"
                >
                  info@aoicon2026kolkata.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Phone</h3>
                <a
                  href="tel:9123977754"
                  className="text-blue-600 hover:text-blue-800 hover:underline text-lg font-semibold"
                >
                  +91 9123977754
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="relative w-full h-[1000px] md:h-[800px] overflow-hidden">
        <Image
          src="/footer.jpeg"
          alt="AOICON 2026 Footer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-center pb-8">
          <div className="text-center text-white px-4">
            <p className="text-sm md:text-base">
              © 2026 AOICON Kolkata. All rights reserved.
            </p>
            <p className="text-xs md:text-sm mt-2 opacity-90">
              The Association of Otolaryngologists of India
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
