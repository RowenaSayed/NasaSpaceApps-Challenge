import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import WeatherChart from '../components/dashboard/analytics/WeatherChart';
 import StatsGrid from '../components/dashboard/analytics/StatsGrid'
 import SearchFilters from '../components/dashboard/analytics/SearchFilters'
 import LoadingState from '../components/dashboard/analytics/LoadingState'
 import EmptyState from '../components/dashboard/analytics/EmptyState'

export default function Analytics() {
  const location = useLocation();
  const {
    city: initialCity,
    startDate: initialStartDate,
    endDate: initialEndDate,
  } = location.state || {};

  const [city, setCity] = useState(initialCity || "");
  const [startDate, setStartDate] = useState(initialStartDate || "");
  const [endDate, setEndDate] = useState(initialEndDate || "");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    tempMax: true,
    tempMin: true,
    humidity: true,
    sunshine: true,
    precipitation: true,
    wind: true,
  });

  useEffect(() => {
    if (!city || !startDate || !endDate) return;
    if (new Date(startDate) > new Date(endDate)) {
      alert("Start date cannot be after end date!");
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://WeatherAPI.somee.com/api/Weather/GetWeatherData?city=${encodeURIComponent(
            city
          )}&start=${startDate}&end=${endDate}`
        );
        if (!res.ok) throw new Error("Failed to fetch weather data");
        const data = await res.json();
        setWeatherData(data);
      } catch (err) {
        console.error(err);
        alert("Error fetching weather data");
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, startDate, endDate]);

  // Calculate statistics
  const calculateStats = (data) => {
    if (!data?.daysList?.length) return null;

    const days = data.daysList;

    return {
      temperature: {
        max: Math.max(...days.map((d) => d.tempMax)),
        min: Math.min(...days.map((d) => d.tempMin)),
        avgMax: days.reduce((sum, d) => sum + d.tempMax, 0) / days.length,
        avgMin: days.reduce((sum, d) => sum + d.tempMin, 0) / days.length,
      },
      humidity: {
        avg: days.reduce((sum, d) => sum + d.humidity, 0) / days.length,
        max: Math.max(...days.map((d) => d.humidity)),
        min: Math.min(...days.map((d) => d.humidity)),
      },
      wind: {
        avg: days.reduce((sum, d) => sum + d.wind, 0) / days.length,
        max: Math.max(...days.map((d) => d.wind)),
      },
      precipitation: {
        total: days.reduce((sum, d) => sum + d.precipitation, 0),
        avg: days.reduce((sum, d) => sum + d.precipitation, 0) / days.length,
        max: Math.max(...days.map((d) => d.precipitation)),
        rainyDays: days.filter((d) => d.precipitation > 0).length,
      },
      sunshine: {
        avg: days.reduce((sum, d) => sum + d.sunshine, 0) / days.length,
        max: Math.max(...days.map((d) => d.sunshine)),
      },
      summary: {
        totalDays: days.length,
      },
    };
  };

  const stats = weatherData ? calculateStats(weatherData) : null;

  const handleFilterChange = (filterName) => {
    setFilters((prev) => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  const downloadCSV = () => {
    if (!city || !startDate || !endDate) return;

    const params = new URLSearchParams({
      city,
      start: startDate,
      end: endDate,
      ...filters,
    });

    const url = `http://WeatherAPI.somee.com/api/Weather/download-csv?${params.toString()}`;
    const a = document.createElement("a");
    a.href = url;
    a.download = `${city}_weather.csv`;
    a.click();
  };

  const downloadJSON = () => {
    if (!city || !startDate || !endDate) return;

    const params = new URLSearchParams({
      city,
      start: startDate,
      end: endDate,
      ...filters,
    });

    const url = `http://WeatherAPI.somee.com/api/Weather/download-json?${params.toString()}`;
    const a = document.createElement("a");
    a.href = url;
    a.download = `${city}_weather.json`;
    a.click();
  };

  return (
    <main className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Sidebar for desktop, topbar for mobile */}
      <SearchFilters
        city={city}
        setCity={setCity}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        filters={filters}
        onFilterChange={handleFilterChange}
        onDownloadCSV={downloadCSV}
        onDownloadJSON={downloadJSON}
      />

      {/* Main Content */}
      <div className="flex-1 lg:overflow-y-auto">
        <div className="p-4 lg:p-8">
          {/* Header */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Weather Analytics
            </h1>
            <p className="text-gray-400 text-sm lg:text-base">
              {city
                ? `Showing data for ${city}`
                : "Select a location to view analytics"}
              {startDate && endDate && ` from ${startDate} to ${endDate}`}
            </p>
          </div>

          {loading ? (
            <LoadingState />
          ) : stats ? (
            <div className="space-y-6 lg:space-y-8">
              {/* Statistics Grid */}
              <StatsGrid stats={stats} />

              {/* Weather Chart */}
              <div className="bg-gray-900 rounded-xl p-4 lg:p-6 border border-gray-700">
                <h2 className="text-xl font-semibold text-white mb-4 lg:mb-6">
                  Weather Trends
                </h2>
                <WeatherChart weatherData={weatherData} filters={filters} />
              </div>
            </div>
          ) : (
            <EmptyState hasCity={!!city} hasDates={!!startDate && !!endDate} />
          )}
        </div>
      </div>
    </main>
  );
}
