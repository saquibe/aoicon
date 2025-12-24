"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-blue-50">
      {/* Header Section */}
      <header className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] overflow-hidden">
        <Image
          src="/header.jpg"
          alt="AOICON 2026 Kolkata"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </header>

      {/* App Store Links Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Download the Official App
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Get the complete conference experience on your mobile device
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-xl w-full">
              <a
                href="https://apps.apple.com/in/app/aoicon/id6756650921"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-full h-[75px] sm:h-[80px] md:h-[85px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/applestoreicon.webp"
                    alt="Download on App Store"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 280px"
                  />
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.ashishsingh.AOICON&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-full h-[75px] sm:h-[80px] md:h-[85px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/playstoreicon.jpeg"
                    alt="Get it on Google Play"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 280px"
                  />
                </div>
              </a>
            </div>

            <p className="text-sm sm:text-base text-gray-600 text-center max-w-md mx-auto px-4">
              Available for both iOS and Android devices
            </p>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm sm:text-base">
            Powered by SaaScraft Studio India Pvt. Ltd.
          </p>
        </div>
      </footer>
    </main>
  );
}
