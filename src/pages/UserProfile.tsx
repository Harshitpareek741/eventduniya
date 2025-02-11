import React from 'react';
import { User, Ticket, Bell, Settings, LogOut } from 'lucide-react';

function UserProfile() {
  const userProfile = {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    joinDate: "January 2025",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300",
    upcomingEvents: [
      {
        title: "Symphony Under the Stars",
        date: "July 15, 2025",
        ticketId: "TK-2025071501"
      },
      {
        title: "Jazz Night Fusion",
        date: "July 20, 2025",
        ticketId: "TK-2025072001"
      }
    ],
    savedArtists: ["Elena Rodriguez", "Marcus Chen"]
  };

  return (
    <div className="bg-black min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <img 
                  src={userProfile.avatar} 
                  alt={userProfile.name}
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                />
                <h2 className="text-xl font-bold">{userProfile.name}</h2>
                <p className="text-gray-400">Member since {userProfile.joinDate}</p>
              </div>
              <nav className="space-y-2">
                <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg bg-purple-500 text-white">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800">
                  <Ticket className="h-5 w-5" />
                  <span>My Tickets</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800">
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
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
            {/* Upcoming Events */}
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {userProfile.upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div>
                      <h4 className="font-semibold">{event.title}</h4>
                      <p className="text-gray-400">{event.date}</p>
                      <p className="text-sm text-purple-500">Ticket ID: {event.ticketId}</p>
                    </div>
                    <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
                      View Ticket
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Artists */}
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Saved Artists</h3>
              <div className="grid grid-cols-2 gap-4">
                {userProfile.savedArtists.map((artist, index) => (
                  <div key={index} className="p-4 bg-gray-800 rounded-lg">
                    <h4 className="font-semibold">{artist}</h4>
                    <button className="mt-2 text-purple-500 hover:text-purple-400">
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Email Notifications</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span>SMS Updates</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;