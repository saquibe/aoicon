"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-blue-50">
      {/* Header Section - Reduced height by half */}
      <header className="relative w-full h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[42.5vh] xl:h-[45vh] overflow-hidden">
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

      {/* Conference Details Section - Simple */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              77<sup className="text-xl sm:text-2xl">th</sup> Annual Conference
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900">
              The Association of Otolaryngologists of India
            </h2>
            <p className="text-lg sm:text-xl font-medium text-gray-800">
              AOICON 2026
            </p>
          </div>

          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto rounded-full" />

          <div className="space-y-4 text-gray-700">
            <p className="text-lg sm:text-xl">
              8<sup>th</sup> to 11<sup>th</sup> January 2026
            </p>
            <p className="text-sm text-gray-600">(Thursday to Sunday)</p>
            <p className="text-lg sm:text-xl">
              Biswa Bangla Convention Centre, Kolkata
            </p>
          </div>
        </div>
      </section>

      {/* App Store Links Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Download the Official App
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-xl w-full">
              {/* App Store Button */}
              <a
                href="https://apps.apple.com/in/app/aoicon/id6756650921"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black text-white px-5 py-3 sm:px-6 sm:py-4 rounded-xl shadow hover:scale-105 transition-all duration-200 w-full"
              >
                <Image
                  src="/apple.webp"
                  alt="appstore"
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <span className="text-left leading-tight">
                  <span className="text-xs">Download on the</span>
                  <br />
                  <span className="text-base sm:text-lg font-semibold">
                    App Store
                  </span>
                </span>
              </a>

              {/* Play Store Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.ashishsingh.AOICON&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black text-white px-5 py-3 sm:px-6 sm:py-4 rounded-xl shadow hover:scale-105 transition-all duration-200 w-full"
              >
                <Image
                  src="/google.webp"
                  alt="playstore"
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <span className="text-left leading-tight">
                  <span className="text-xs">GET IT ON</span>
                  <br />
                  <span className="text-base sm:text-lg font-semibold">
                    Google Play
                  </span>
                </span>
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
