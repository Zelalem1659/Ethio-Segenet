import React from "react";
import logo from "../assets/logo.jpg";

function Home() {
  return (
    <section className="tricolor-watermark py-16">
      <div className="container mx-auto text-center px-6">
        <img
          src={logo}
          alt="Ethio Segenet Logo"
          className="w-40 h-40 mx-auto rounded-full border-4 border-[#FFD700] shadow-2xl transition-transform duration-500 hover:scale-105"
        />

        <h2 className="text-4xl font-extrabold mt-6 text-[#4B0D0D] drop-shadow-lg">
          ኢትዮ ሰገነት | Ethio Segenet
        </h2>

        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-900 leading-relaxed">
          Insightful Ethiopian political commentary and civic discussions that
          promote understanding, unity, and awareness.
        </p>

        <div className="mt-8">
          <a
            href="https://www.youtube.com/@ethiosegenet"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD700] text-[#4B0D0D] font-bold px-8 py-3 rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg transition-all duration-300"
          >
            🎤 Watch Latest Episode
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
