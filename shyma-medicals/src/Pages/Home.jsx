import React, { useState } from 'react';
import { Search, Menu, ArrowRight, Download, Phone, Mail, MapPin, Activity } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const navigate = useNavigate();
const categories = [
  {
    subtitle: "Locking Plate System",
    image: "/lps1.jpg",
    alt: "Helix locking plate system",
    path: "/locking-plate-system"
  },
  {
    subtitle: "Locking Hand System",
    image: "/lhs.webp",
    alt: "Microlock hand system",
    path: "/locking-hand-system"
  },
  {
    subtitle: "Locking System",
    image: "/ls.jpg",
    alt: "Variolock locking system",
    path: "/locking-system"
  },
  {
    subtitle: "Radial Head Prosthesis",
    image: "/rhl.webp",
    alt: "Radial head prosthesis",
    path: "/radial-head-prosthesis"
  },
  {
    subtitle: "Bipolar Prosthesis",
    image: "/bp.jpg",
    alt: "Accuhip bipolar prosthesis",
    path: "/bipolar-prosthesis"
  },
  {
    subtitle: "PFNA Nailing System",
    image: "/pfna.webp",
    alt: "PFNA nailing system",
    path: "/pfna-nailing-system"
  },
  {
    subtitle: "Cannulated Compression System",
    image: "/ccs1.jpg",
    alt: "Cannulated compression system",
    path: "/cannulated-compression-system"
  },
  {
    subtitle: "Locking Hand System",
    image: "/lhs2.webp",
    alt: "Adroit locking hand system",
    path: "/mini-locking-hand-system"
  }
];



return (
  <div className="min-h-screen bg-[#0f1323] text-white font-sans overflow-x-hidden">
    {/* Header */}
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#232f48] bg-[#0f1323] px-4 py-3 md:px-6 lg:px-8">

      <div className="mx-auto flex max-w-[1500px] items-center justify-between">
        
        {/* Logo & Search Group */}
        <div className="flex items-center gap-8 w-full md:w-auto">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="flex items-center justify-center w-20 h-12 rounded bg-blue-500/10 overflow-hidden">
  <img
    src="/logo.jpg"
    alt="Shyma Medical Logo"
    className="w-full h-full object-contain"
  />
</div>


            <h2 className="text-white text-xl font-bold leading-tight tracking-tight hidden sm:block">
              Shyma Medical
            </h2>
          </div>

       </div>

        {/* Desktop Nav Links & Actions */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <a className="text-white text-sm font-medium hover:text-blue-500 transition-colors" href="#">
              Products
            </a>
            <a className="text-white text-sm font-medium hover:text-blue-500 transition-colors" href="#">
              About Us
            </a>
            <a className="text-white text-sm font-medium hover:text-blue-500 transition-colors" href="#">
              Quality
            </a>
            <a className="text-white text-sm font-medium hover:text-blue-500 transition-colors" href="#">
              Contact
            </a>
          </nav>

         
          
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center justify-center text-white">
          <Menu className="w-7 h-7" />
        </button>
      </div>
    </header>






      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative flex flex-col justify-end min-h-[560px] w-full bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(16, 22, 34, 0.4) 0%, rgba(16, 22, 34, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLXyxwB3Od6ryUHb6R09n5ExfrMwEhtIjfgaf6j48YCWRfswgJZw2jJ0CRLjMYn4uzuQSaCuuS5wjYi3AOvR7paQCmzCZm25tNRSejYMH2CwlEoK_9JW4KqkRo2jdsDlCkO1Yqs_UEbisNsNyoWztL7TO6w3W1OEZaRAUsCEQ8gZFeevaVroGQ329-NS0tWPQMxFdiBremUpl3E2gKRAvhUa3tYdLEKAfBZD24Vhkk8r6ystH33RLbuJxQ9nsxRE80eOCl9lfzDEO6")`
          }}
        >
          <div className="mx-auto w-full max-w-[1500px] px-4 py-16 md:px-6 lg:px-8 flex flex-col items-start gap-6">
            <div className="flex flex-col gap-4 max-w-[720px]">
              <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Precision in Every Implant
              </h1>
              <h2 className="text-gray-200 text-lg font-normal leading-relaxed md:text-xl max-w-[600px]">
                Leading Supplier of Orthopedic Implants & Surgical Instruments. Bridging the gap between innovation and affordability for healthcare providers worldwide.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-blue-500 text-white text-base font-bold leading-normal hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30">
                View Products
              </button>
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-gray-800/50 backdrop-blur-sm border border-white/20 text-white text-base font-bold leading-normal hover:bg-white/10 transition-all">
                Request Catalogue
              </button>
              <button className="flex min-w-[100px] cursor-pointer items-center justify-center h-12 px-6 text-white text-base font-medium leading-normal hover:text-blue-500 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>

    {/* Featured Categories */}
<section className="py-20 px-4 md:px-6 lg:px-8 bg-[#0f1323]">
  <div className="mx-auto max-w-[1400px] flex flex-col gap-12">

    {/* Heading */}
    <div>
      <h2 className="text-white text-4xl font-bold tracking-tight">
        Featured Categories
      </h2>
      <p className="text-gray-400 mt-2 text-lg">
        Explore our comprehensive range of medical solutions
      </p>
    </div>

    {/* GRID (DESKTOP) / SCROLL (MOBILE) */}
    <div className="
      grid grid-cols-2 md:grid-cols-4 gap-10
      max-md:flex max-md:overflow-x-auto max-md:gap-6 max-md:pb-4
      max-md:snap-x max-md:snap-mandatory
    ">

      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => navigate(category.path)}
          className="
            group cursor-pointer flex flex-col items-center gap-4
            max-md:min-w-[70%] max-md:snap-center
          "
        >

          {/* CIRCLE */}
          <div className="relative w-56 h-56 flex items-center justify-center">

            {/* GLOW */}
            <div className="absolute inset-0 rounded-full bg-blue-500/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* ROTATING ARC */}
            <div
              className="absolute inset-0 rounded-full border-2 border-transparent"
              style={{
                borderTopColor: "rgba(59,130,246,0.8)",
                animation: "rotateArc 6s linear infinite"
              }}
            ></div>

            {/* OUTER RING */}
            <div className="relative w-full h-full rounded-full border border-blue-500/30 flex items-center justify-center">

              {/* INNER CIRCLE */}
              <div className="w-[85%] h-[85%] rounded-full bg-[#1A2230] flex items-center justify-center overflow-hidden">

                {/* IMAGE */}
                <img
  src={category.image}
  alt={category.alt}
  className="
    w-full h-full object-cover
    rounded-full
    transition-transform duration-500
    group-hover:scale-110
  "
/>


              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="text-center">
            <p className="text-white font-bold text-sm tracking-wide group-hover:text-blue-400 transition-colors">
              {category.name}
            </p>
            <p className="text-gray-300 text-sm font-semibold mt-1 tracking-wide group-hover:text-blue-400 transition-colors">
  {category.subtitle}
</p>

          </div>

        </div>
      ))}
    </div>
  </div>
</section>


        {/* Quality / About Section */}
        <section className="py-12 px-4 md:px-6 lg:px-8 bg-[#151c2b]">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 bg-[#1A2230] p-6 md:p-12 rounded-2xl border border-gray-800">
              <div className="flex flex-1 flex-col gap-6 items-start">
                <div className="flex items-center gap-2 text-blue-500 font-bold tracking-wide uppercase text-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Global Standards
                </div>
                <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                  Our Commitment to Quality & Safety
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  At Shyma, we prioritize precision and safety above all else. Our products are crafted from medical-grade Titanium and Stainless Steel, rigorously tested to meet global ISO safety standards. We bridge the gap between innovation and affordability.
                </p>
                <div className="flex gap-8 mt-2 w-full">
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-bold text-white">ISO 13485</span>
                    <span className="text-sm text-gray-500">Certified</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-bold text-white">100%</span>
                    <span className="text-sm text-gray-500">Quality Checked</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-bold text-white">50+</span>
                    <span className="text-sm text-gray-500">Countries Served</span>
                  </div>
                </div>
                <button className="mt-4 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-white text-[#111418] text-sm font-bold leading-normal hover:opacity-90 transition-opacity">
                  Learn More about Quality
                </button>
              </div>
              <div
                className="w-full md:w-1/2 aspect-video md:aspect-square bg-center bg-no-repeat bg-cover rounded-xl shadow-2xl"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFRvmPSyw33T8EgHinOVdXGddlgSVDGBWUhty0pCiY53Ft6olL5XDTWD223e-YEhfiNsZ-CZajBUPvkD1doOIOoqSx-7Em3wtaBI1MxO4n2FVEqfLMdNTPsuSK90qIflfIx27Za2ZaQ-vj6Bqa9uRamSw9gt-VMUePzFoBWyjKpKrrJCTQ3y7OK9vtDl610CmJ-5hyG__bzQowknF84fmD9XsrlWd8Jxr5TjOKlT5MZsYeA8B5VPwytQvZ2v_GnD58QtC4NgKEWZ_E")`
                }}
              ></div>
            </div>
          </div>
        </section>
{/* Why Choose Shyma */}
<section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
  </div>

  <div className="mx-auto max-w-[1400px] relative z-10">
    {/* Header */}
    <div className="mb-16">
      <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 tracking-tight">
        Why Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Shyma</span>
      </h2>
      <p className="text-slate-400 text-lg max-w-2xl">
        Leading the industry with excellence, innovation, and commitment to quality
      </p>
    </div>

    {/* Feature Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 className="text-white text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
            Quality Assurance
          </h4>
          <p className="text-slate-400 leading-relaxed">
            All products are manufactured under strict ISO 13485 standards.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
            </svg>
          </div>
          <h4 className="text-white text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
            Private Labelling
          </h4>
          <p className="text-slate-400 leading-relaxed">
            OEM & private branding solutions for global partners.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-green-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
          <h4 className="text-white text-xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">
            Competitive Pricing
          </h4>
          <p className="text-slate-400 leading-relaxed">
            Premium orthopedic solutions at affordable pricing.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-orange-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h4 className="text-white text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors duration-300">
            Focused R&D
          </h4>
          <p className="text-slate-400 leading-relaxed">
            Continuous innovation driven by surgeon feedback.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
    </div>
  </div>
</section>








        {/* Pre-Footer CTA */}
        <section className="px-4 py-20 md:px-6 lg:px-8 bg-[#0f1323] border-t border-gray-800">
          <div className="mx-auto max-w-[800px] flex flex-col items-center text-center gap-6">
            <h2 className="text-white text-3xl font-bold">Ready to equip your facility?</h2>
            <p className="text-gray-400 text-lg max-w-[600px]">
              Download our comprehensive product catalogue or get in touch with our sales team for custom requirements.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-blue-500 text-white text-base font-bold shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors">
                <Download className="mr-2 w-5 h-5" />
                Download Catalogue
              </button>
              <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-transparent border border-gray-600 text-white text-base font-bold hover:bg-[#1A2230] transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
            {/* Stats Section */}
<section className="py-14 px-4 md:px-6 lg:px-8 bg-[#0b0f17] border-y border-gray-800">
  <div className="mx-auto max-w-[1400px]">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
      
      {/* Customers */}
      <div className="flex flex-col gap-2">
        <span className="text-4xl md:text-5xl font-black text-blue-500">
          5,000+
        </span>
        <span className="text-gray-400 text-sm md:text-base font-medium">
          Happy Customers
        </span>
      </div>

      {/* Orders */}
      <div className="flex flex-col gap-2">
        <span className="text-4xl md:text-5xl font-black text-blue-500">
          25,000+
        </span>
        <span className="text-gray-400 text-sm md:text-base font-medium">
          Orders Delivered
        </span>
      </div>

      {/* Countries */}
     

      {/* Years */}
      <div className="flex flex-col gap-2">
        <span className="text-4xl md:text-5xl font-black text-blue-500">
          10+
        </span>
        <span className="text-gray-400 text-sm md:text-base font-medium">
          Years of Excellence
        </span>
      </div>

    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-[#0b0f17] border-t border-gray-800 pt-16 pb-8 px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-white font-bold text-xl">
                <div className="w-6 h-6 rounded bg-blue-500"></div>
                Shyma Medical
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner in orthopedic solutions. Delivering precision, quality, and care to healthcare providers worldwide.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold">Products</h4>
              <div className="flex flex-col gap-2">
                <a className="text-gray-400 text-sm hover:text-blue-500" href="#">Trauma Implants</a>
                <a className="text-gray-400 text-sm hover:text-blue-500" href="#">Spine Systems</a>
                <a className="text-gray-400 text-sm hover:text-blue-500" href="#">Surgical Instruments</a>
                <a className="text-gray-400 text-sm hover:text-blue-500" href="#">External Fixators</a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold">Company</h4>
              <div className="flex flex-col gap-2">
                <a className="text-gray-400 text-sm hover:text-blue-500" href="#">About Us</a>
                <a className="text-gray-400 text-sm hover:text-blue-500" href="#">Quality Assurance</a>
                <a className="text-gray-400 text-sm hover:text-blue-500" href="#">Certifications</a>
                <a className="text-gray-400 text-sm hover:text-blue-500" href="#">Careers</a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold">Contact</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span>Kozhikode medical collage<br /></span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone className="w-5 h-5" />
                  <span>9447360390</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Mail className="w-5 h-5" />
                  <span>support@shymamedical.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2024 Shyma Medical. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="text-gray-500 text-sm hover:text-blue-500" href="#">Privacy Policy</a>
              <a className="text-gray-500 text-sm hover:text-blue-500" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}