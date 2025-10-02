import { useState } from "react";
import { Search, MapPin, Calendar, Zap } from "lucide-react";
import MapBox from "./MapBox";

export default function SearchBox() {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null); 

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(text);
    setSelected(null); 
  };

  return (
    <section className="mt-12 bg-[#161B22]/90 border border-[#00B8D9]/20 rounded-xl shadow-lg p-8 backdrop-blur-sm">
      <form className="space-y-6" onSubmit={handleSearch}>
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
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="flex gap-3 mt-3">
            <button
              type="submit"
              className="flex items-center px-4 py-2 rounded-md border border-[#00B8D9]/30 text-[#00B8D9] hover:bg-[#00B8D9]/10"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Search Location
            </button>
          </div>

          {results.length > 1 && (
            <select
              className="mt-3 w-full p-2 rounded bg-[#0D1117] border border-[#00B8D9]/30 text-white"
              onChange={(e) => setSelected(results[e.target.value])}
            >
              <option>Choose a result...</option>
              {results.map((res, i) => (
                <option key={i} value={i}>
                  {res.display_name}
                </option>
              ))}
            </select>
          )}

          <div className="mt-4">
            <MapBox
              searchQuery={query}
              onResults={setResults}
              selected={selected}
            />
          </div>
        </div>

        <div>
          <label className="block text-left text-[#00B8D9] mb-2">
            Date Range
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="month"
              className="w-full h-12 pl-10 rounded-lg bg-[#0D1117] border border-[#00B8D9]/30 text-white focus:ring-2 focus:ring-[#00B8D9]"
            />
          </div>
        </div>

        <button
          type="button"
          className="transition-transform duration-150 hover:translate-y-[-3px] w-full h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#00B8D9] to-[#00B8D9]/80 hover:from-[#00B8D9]/90 hover:to-[#00B8D9]/70 hover:cursor-pointer md:text-lg sm:text-sm font-medium"
        >
          <Zap className="h-5 w-5 mr-2" />
          Analyze Weather Probability
        </button>
      </form>
    </section>
  );
}
