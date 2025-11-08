import React from "react";

function Footer() {
  return (
    <footer className="site-bg text-muted text-center py-6 mt-8">
      <p>
        © {new Date().getFullYear()} Ethio 360 ·{" "}
        <a
          href="https://www.youtube.com/@ethiosegenet"
          target="_blank"
          rel="noopener noreferrer"
          className="link-gold"
          style={{ color: '#FFD700' }}
        >
          YouTube Channel
        </a>
      </p>
      <p className="text-sm mt-2 text-gray-400">ethio.segenet.media</p>
    </footer>
  );
}

export default Footer;
