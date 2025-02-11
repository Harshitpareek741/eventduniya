import React from 'react';
import { Instagram, Twitter, Globe } from 'lucide-react';

function Artist() {
  const artists = [
    {
      name: "Elena Rodriguez",
      type: "Classical Pianist",
      image: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?auto=format&fit=crop&w=500",
      bio: "International award-winning pianist known for her dynamic interpretations of classical masterpieces.",
      social: {
        instagram: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Marcus Chen",
      type: "Jazz Saxophonist",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=500",
      bio: "Pioneering jazz artist blending traditional and contemporary styles into unique compositions.",
      social: {
        instagram: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Sarah Williams",
      type: "Contemporary Dancer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500",
      bio: "Renowned choreographer and performer pushing the boundaries of modern dance.",
      social: {
        instagram: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "David Thompson",
      type: "Visual Artist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500",
      bio: "Mixed-media artist whose work explores the intersection of nature and technology.",
      social: {
        instagram: "#",
        twitter: "#",
        website: "#"
      }
    }
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Featured <span className="text-purple-500">Artists</span>
            </h1>
            <p className="text-xl text-gray-300">
              Meet the extraordinary talents who bring their unique vision and creativity to our stage.
            </p>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {artists.map((artist, index) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:-translate-y-1 transition duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                  <p className="text-purple-500 mb-4">{artist.type}</p>
                  <p className="text-gray-300 mb-6">{artist.bio}</p>
                  <div className="flex space-x-4">
                    <a href={artist.social.instagram} className="text-gray-400 hover:text-purple-500">
                      <Instagram />
                    </a>
                    <a href={artist.social.twitter} className="text-gray-400 hover:text-purple-500">
                      <Twitter />
                    </a>
                    <a href={artist.social.website} className="text-gray-400 hover:text-purple-500">
                      <Globe />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-900 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Are You an Artist?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              We're always looking for talented artists to join our community. Share your art with our audience.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
              Apply to Perform
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Artist;