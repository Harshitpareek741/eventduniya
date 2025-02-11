import React from 'react';
import { ArrowRight, Music2, Users, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Where Art Comes <span className="text-purple-500">Alive</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Experience the magic of live performances, art exhibitions, and cultural events in the heart of the city.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/events"
                className="bg-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-600 transition flex items-center"
              >
                Explore Events <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/artist"
                className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                Meet Artists
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Music2 className="h-10 w-10 text-purple-500" />,
                title: "Live Performances",
                description: "Experience soul-stirring live music from world-renowned artists."
              },
              {
                icon: <Users className="h-10 w-10 text-purple-500" />,
                title: "Artist Showcases",
                description: "Discover emerging talents and established artists in our curated showcases."
              },
              {
                icon: <Calendar className="h-10 w-10 text-purple-500" />,
                title: "Regular Events",
                description: "Join our weekly events celebrating various art forms and cultures."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl hover:transform hover:-translate-y-1 transition duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900">
        <div className="container mx-auto px-6">
          <div className="bg-black/50 backdrop-blur-lg rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <h2 className="text-3xl font-bold mb-4">Upcoming Featured Event</h2>
                <div className="flex items-center mb-6">
                  <Star className="text-yellow-500 h-5 w-5 mr-2" />
                  <span className="text-yellow-500">Featured Performance</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Symphony Under the Stars</h3>
                <p className="text-gray-300 mb-6">
                  Join us for an enchanting evening of classical masterpieces performed under the open sky.
                  Experience the magic as world-class musicians bring timeless compositions to life.
                </p>
                <div className="space-y-2 text-gray-300 mb-8">
                  <p>📅 Saturday, July 15, 2025</p>
                  <p>⏰ 8:00 PM</p>
                  <p>📍 Central Park Amphitheater</p>
                </div>
                <Link 
                  to="/events"
                  className="bg-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-600 transition inline-flex items-center"
                >
                  Book Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div 
                className="h-full min-h-[400px]"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=1000)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter for the latest events, artist announcements, and exclusive offers.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-gray-900 border border-gray-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none"
              />
              <button
                type="submit"
                className="bg-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-600 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;