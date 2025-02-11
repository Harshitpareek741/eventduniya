import React from 'react';
import { User, Calendar, Music2, Settings, LogOut, Instagram, Twitter, Globe, Edit } from 'lucide-react';

function ArtistProfile() {
  const artistProfile = {
    name: "Elena Rodriguez",
    type: "Classical Pianist",
    bio: "International award-winning pianist known for her dynamic interpretations of classical masterpieces.",
    avatar: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?auto=format&fit=crop&w=300",
    coverImage: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=2000",
    social: {
      instagram: "#",
      twitter: "#",
      website: "#"
    },
    upcomingPerformances: [
      {
        title: "Symphony Under the Stars",
        date: "July 15, 2025",
        venue: "Central Park Amphitheater",
        status: "Confirmed"
      },
      {
        title: "Classical Evening",
        date: "July 25, 2025",
        venue: "Metropolitan Hall",
        status: "Pending"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=500",
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=500",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500"
    ]
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Cover Image */}
      <div 
        className="h-80 w-full relative"
        style={{
          backgroundImage: `url(${artistProfile.coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black"></div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <img 
                  src={artistProfile.avatar} 
                  alt={artistProfile.name}
                  className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-purple-500"
                />
                <h2 className="text-xl font-bold">{artistProfile.name}</h2>
                <p className="text-purple-500">{artistProfile.type}</p>
              </div>
              <div className="flex justify-center space-x-4 mb-6">
                <a href={artistProfile.social.instagram} className="text-gray-400 hover:text-purple-500">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href={artistProfile.social.twitter} className="text-gray-400 hover:text-purple-500">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href={artistProfile.social.website} className="text-gray-400 hover:text-purple-500">
                  <Globe className="h-6 w-6" />
                </a>
              </div>
              <nav className="space-y-2">
                <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg bg-purple-500 text-white">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800">
                  <Calendar className="h-5 w-5" />
                  <span>Schedule</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800">
                  <Music2 className="h-5 w-5" />
                  <span>Performances</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-red-500 hover:bg-gray-800">
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-8">
            {/* Bio Section */}
            <div className="bg-gray-900 rounded-xl p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">About</h3>
                <button className="text-purple-500 hover:text-purple-400">
                  <Edit className="h-5 w-5" />
                </button>
              </div>
              <p className="text-gray-300">{artistProfile.bio}</p>
            </div>

            {/* Upcoming Performances */}
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Upcoming Performances</h3>
              <div className="space-y-4">
                {artistProfile.upcomingPerformances.map((performance, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div>
                      <h4 className="font-semibold">{performance.title}</h4>
                      <p className="text-gray-400">{performance.date}</p>
                      <p className="text-sm text-gray-500">{performance.venue}</p>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        performance.status === 'Confirmed' 
                          ? 'bg-green-500/20 text-green-500' 
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {performance.status}
                      </span>
                      <button className="ml-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-gray-900 rounded-xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Gallery</h3>
                <button className="text-purple-500 hover:text-purple-400">View All</button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {artistProfile.gallery.map((image, index) => (
                  <div key={index} className="aspect-w-16 aspect-h-9">
                    <img 
                      src={image} 
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg hover:opacity-75 transition cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistProfile;