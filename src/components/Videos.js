import React from 'react';

function Videos() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Latest Videos</h2>
      <p className="text-gray-600 mb-6">
        Watch the newest discussions and political analyses from Ethio 360.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <iframe
          className="w-full aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/videoseries?list=UU6bFdw6q1KYoytmEQjlXqPg"
          title="Ethio 360 Playlist"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Videos;
