import React from "react";
import HistoryCard from "../components/dashboard/HistoryCard";
import { HistoryIcon } from "lucide-react";

function History() {
  const historyData = [
    {
      id: 1,
      location: "Cairo, Egypt",
      dateRange: "July 10 - July 20",
      searchedAt: "Sep 28, 2025",
    },
    {
      id: 2,
      location: "New York, USA",
      dateRange: "Winter Season",
      searchedAt: "Sep 29, 2025",
    },
    {
      id: 3,
      location: "Tokyo, Japan",
      dateRange: "Aug 15",
      searchedAt: "Sep 30, 2025",
    },
    {
      id: 1,
      location: "Cairo, Egypt",
      dateRange: "July 10 - July 20",
      searchedAt: "Sep 28, 2025",
    },
    {
      id: 2,
      location: "New York, USA",
      dateRange: "Winter Season",
      searchedAt: "Sep 29, 2025",
    },
    {
      id: 3,
      location: "Tokyo, Japan",
      dateRange: "Aug 15",
      searchedAt: "Sep 30, 2025",
    },
    {
      id: 1,
      location: "Cairo, Egypt",
      dateRange: "July 10 - July 20",
      searchedAt: "Sep 28, 2025",
    },
    {
      id: 2,
      location: "New York, USA",
      dateRange: "Winter Season",
      searchedAt: "Sep 29, 2025",
    },
    {
      id: 3,
      location: "Tokyo, Japan",
      dateRange: "Aug 15",
      searchedAt: "Sep 30, 2025",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117] text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Search History</h1>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {historyData.map((item) => (
          <HistoryCard
            key={item.id}
            location={item.location}
            dateRange={item.dateRange}
            searchedAt={item.searchedAt}
          />
        ))}
      </section>
    </main>
  );
}

export default History;
