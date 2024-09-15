import React from "react";

function VideoCard({ info }) {
  if (!info) {
    return <div>Loading...</div>; 
  }

  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title } = snippet;

  return (
    <div className="w-72 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Thumbnail */}
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        alt="thumbnails"
        src={thumbnails?.medium?.url}
      />

      {/* Video Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600">{channelTitle}</p>
        <p className="text-sm text-gray-500">{statistics.viewCount} views</p>
      </div>
    </div>
  );
}

export default VideoCard;
