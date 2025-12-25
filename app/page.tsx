"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-blue-50">
      {/* Header Section */}
      <header className="relative w-full h-[26vh] sm:h-[32vh] md:h-[36vh] lg:h-[40vh] xl:h-[45vh] overflow-hidden">
        <Image
          src="/header.jpg"
          alt="AOICON 2026 Kolkata"
          fill
          className="object-fill"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </header>

      {/* Conference Details Section */}
      <section className="pt-8 pb-4 sm:pt-10 sm:pb-6 md:pt-12 md:pb-6 lg:pt-14 lg:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-2 text-gray-900">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium leading-snug">
            77<sup className="text-sm sm:text-base">th</sup> Annual Conference
            of The Association of Otolaryngologists of India{" "}
            <span className="font-normal">(AOICON 2026)</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-700">
            8<sup>th</sup> to 11<sup>th</sup> January 2026{" "}
            <span className="text-sm text-gray-600">(Thursday to Sunday)</span>
          </p>

          <p className="text-base sm:text-lg text-gray-700">
            Biswa Bangla Convention Centre, Kolkata
          </p>
        </div>
      </section>

      {/* App Store Links Section */}
      <section className="pt-4 pb-10 sm:pt-6 sm:pb-14 md:pt-8 md:pb-16 lg:pt-10 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-5 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Download the Official App
            </h2>
          </div>

          <div className="flex flex-col items-center space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-xl w-full">
              {/* App Store */}
              <a
                href="https://apps.apple.com/in/app/aoicon/id6756650921"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black text-white px-5 py-3 sm:px-6 sm:py-4 rounded-xl shadow hover:scale-105 transition-all"
              >
                <Image
                  src="/apple.webp"
                  alt="App Store"
                  width={40}
                  height={40}
                />
                <span className="leading-tight">
                  <span className="text-xs">Download on the</span>
                  <br />
                  <span className="text-base sm:text-lg font-semibold">
                    App Store
                  </span>
                </span>
              </a>

              {/* Play Store */}
              <a
                href="https://play.google.com/store/apps/details?id=com.ashishsingh.AOICON"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black text-white px-5 py-3 sm:px-6 sm:py-4 rounded-xl shadow hover:scale-105 transition-all"
              >
                <Image
                  src="/google.webp"
                  alt="Play Store"
                  width={40}
                  height={40}
                />
                <span className="leading-tight">
                  <span className="text-xs">GET IT ON</span>
                  <br />
                  <span className="text-base sm:text-lg font-semibold">
                    Google Play
                  </span>
                </span>
              </a>
            </div>

            <p className="text-sm text-gray-600 text-center">
              Available for both iOS and Android devices
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">Powered by SaaScraft Studio India Pvt. Ltd.</p>
        </div>
      </footer>
    </main>
  );
}
