import React from "react";
import { Search, MapPin, Calendar, Zap } from "lucide-react";
import landingPageBG from "../assets/LandingPage-bg.jpg";
import Features from "../components/landingpage/features";

export default function Home({ onStartAnalysis }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117] text-white">
      {/* Hero Section */}
      <section className="relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={landingPageBG}
            alt="Space night sky"
            className="w-full h-full object-cover opacity-50"
          />
          {/* <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDg2OHFvYTY4bnY2MWR1a3k5eHcxZjc5bHcxbXBudzgwNXhvcXMyZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RHIKETUlUINYvV7CAO/giphy.webp"
            alt="Space night sky"
            className="w-full h-full object-cover opacity-70"
          /> */}

          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117]/80 to-[#161B22]/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <header>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Weather Probability
              <span className="block text-[#00B8D9]">Explorer</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the historical likelihood of extreme weather conditions
              using NASA satellite data and climate reanalysis
            </p>
          </header>

          {/* Search Box */}
          <section className="mt-12 bg-[#161B22]/90 border border-[#00B8D9]/20 rounded-xl shadow-lg p-8 backdrop-blur-sm">
            <form className="space-y-6">
              {/* Location */}
              <div>
                <label className="block text-left text-[#00B8D9] mb-2">
                  Location
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter city or click on map..."
                    className="w-full h-12 pl-10 rounded-lg bg-[#0D1117] border border-[#00B8D9]/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#00B8D9]"
                  />
                </div>
                <div className="flex gap-3 mt-3">
                  <button
                    type="button"
                    className="flex items-center px-4 py-2 rounded-md border border-[#00B8D9]/30 text-[#00B8D9] hover:bg-[#00B8D9]/10"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Drop Pin on Map
                  </button>
                  {/* leafletmap */}
                </div>
              </div>

              {/* Date Range */}
              <div>
                <label className="block text-left text-[#00B8D9] mb-2">
                  Date Range
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="month"
                    placeholder="Select date or range (e.g., July 15, Summer months)"
                    className="w-full h-12 pl-10 rounded-lg bg-[#0D1117] border border-[#00B8D9]/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#00B8D9]"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={onStartAnalysis}
                className="transition-transform duration-150 hover:translate-y-[-3px] w-full h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#00B8D9] to-[#00B8D9]/80 hover:from-[#00B8D9]/90 hover:to-[#00B8D9]/70 hover:cursor-pointer md:text-lg sm:text-sm font-medium"
              >
                <Zap className="h-5 w-5 mr-2" />
                Analyze Weather Probability
              </button>
            </form>
          </section>

          {/* Features */}
          <section className="grid md:grid-cols-3 gap-6 mt-12">
            <Features
              title=" Historical Analysis"
              description="Analyze 30+ years of NASA satellite and reanalysis data"
              icon={Zap}
            />
            <Features
              title="Global Coverage"
              description="Explore weather probabilities for any location worldwide"
              icon={MapPin}
            />
            <Features
              title="Trend Detection"
              description="Identify climate change trends and seasonal patterns"
              icon={Calendar}
            />
          </section>
        </div>
      </section>
    </main>
  );
}
