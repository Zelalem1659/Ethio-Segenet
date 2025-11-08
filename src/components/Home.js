import React from 'react';
import logo from '../assets/logo.jpg';

function Home() {
  return (
    <main className="hero-horizontal">
      <div className="container mx-auto text-center py-16">
        <div className="hero-logo-wrap mx-auto mb-6">
          <img
            src={logo}
            alt="Ethio 360 Logo"
            className="w-40 h-40 rounded-full"
          />
        </div>

        <h1 className="text-4xl font-extrabold text-[#4B0D0D] mb-4">ኢትዮ 360 | Ethio 360</h1>

        <p className="text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed mb-6">
          Insightful Ethiopian political commentary and civic discussions that promote understanding, unity, and awareness.
        </p>

        <a href="https://www.youtube.com/@ethiosegenet" target="_blank" rel="noreferrer" className="btn-primary">
          🎤 Watch Latest Episode
        </a>
      </div>
    </main>
  );
}

export default Home;
