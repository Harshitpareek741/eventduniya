import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

function Events() {
  const events = [
    {
      title: "Symphony Under the Stars",
      date: "July 15, 2025",
      time: "8:00 PM",
      location: "Central Park Amphitheater",
      image: "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=800",
      category: "Classical",
      description: "An enchanting evening of classical masterpieces performed under the open sky."
    },
    {
      title: "Jazz Night Fusion",
      date: "July 20, 2025",
      time: "7:30 PM",
      location: "Blue Note Jazz Club",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800",
      category: "Jazz",
      description: "Experience the fusion of traditional jazz with contemporary rhythms."
    },
    {
      title: "Modern Dance Showcase",
      date: "July 25, 2025",
      time: "6:00 PM",
      location: "Contemporary Arts Center",
      image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=800",
      category: "Dance",
      description: "A showcase of innovative choreography and expressive movement."
    },
    {
      title: "Art Gallery Opening",
      date: "August 1, 2025",
      time: "5:00 PM",
      location: "Metropolitan Gallery",
      image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&w=800",
      category: "Visual Arts",
      description: "Opening night featuring works from emerging contemporary artists."
    }
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Upcoming <span className="text-purple-500">Events</span>
            </h1>
            <p className="text-xl text-gray-300">
              Discover our carefully curated selection of performances, exhibitions, and cultural events.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {events.map((event, index) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden group hover:transform hover:-translate-y-1 transition duration-300">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-4 py-1 rounded-full">
                    {event.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                  <p className="text-gray-300 mb-6">{event.description}</p>
                  <div className="space-y-3 text-gray-400 mb-8">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-3" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3" />
                      {event.location}
                    </div>
                  </div>
                  <button className="w-full bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition flex items-center justify-center">
                    Book Tickets <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-900 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">View Full Calendar</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Explore our complete schedule of events and plan your visits ahead.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
              Open Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;