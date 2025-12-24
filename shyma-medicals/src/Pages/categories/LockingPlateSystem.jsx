import React from "react";

export default function LockingPlateSystem() {
  const products = [
    {
      id: 1,
      name: "Small Fragment Locking Plates & Screws",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Small Fragment Locking Instrument Set",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Locking Small Fragment Implant & Instrument Set",
      image: "https://images.unsplash.com/photo-1583912267550-a87c3d9e6e49?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Locking Large Fragment Implant & Instrument Set",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Large Fragment Locking Plates & Screws",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Large Fragment Locking Instrument Set",
      image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Damage Screw Removal Set & Instruments",
      image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Broken Screw Removal Instrument Set",
      image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 border-b border-slate-700/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded"></div>
            </div>
            <span className="text-2xl font-bold text-white">Shyma Medical</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-cyan-400 transition-colors">Products</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">About Us</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Quality</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Helix Locking Plate System
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leading Supplier of Orthopedic Implants & Surgical Instruments.
            Bridging the gap between innovation and affordability for healthcare providers worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              View Products
            </button>
            <button className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors">
              Request Catalogue
            </button>
            <button className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Featured Categories</h2>
          <p className="text-gray-400">Explore our comprehensive range of medical solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                
                {/* Main circle */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-full p-1 shadow-2xl">
                  {/* Inner cyan ring */}
                  <div className="bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full p-1">
                    {/* White content circle */}
                    <div className="bg-white rounded-full aspect-square flex items-center justify-center p-8">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-center text-white font-semibold mt-6 px-4 leading-tight group-hover:text-cyan-400 transition-colors">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">ABOUT US</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leading manufacturer of orthopedic implants and instruments, committed to quality and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">USEFUL LINKS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Quality</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">TOP SELLING PRODUCTS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Locking Plates</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Screws & Implants</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Surgical Instruments</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">CONTACT US</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Email: info@shymamedical.com<br />
                Phone: +1 234 567 8900<br />
                Address: Medical District, City
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2025 Shyma Medical. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}