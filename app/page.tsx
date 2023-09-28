"use client";

import { useEffect, useState } from "react";
import MuxPlayer from '@mux/mux-player-react';

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/api/videos')
    .then(res => res.json())
    .then(json => {
      setVideos(json);
    })
  }, []);

  return (
    <>
      <nav>
        <a href="upload/">Upload</a>
      </nav>
      <div>
        {videos.map(video =><MuxPlayer
            playbackId={video.playback_id}
            metadata={{
              video_id: 'video-id-123456',
              video_title: 'Bick Buck Bunny',
              viewer_user_id: 'user-id-bc-789',
            }}
            streamType="on-demand"
        ></MuxPlayer> )}
      </div>
    </>
  )
}
