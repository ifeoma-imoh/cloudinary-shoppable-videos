import "cloudinary-video-player/dist/cld-video-player.min.css";
import Script from "next/script";
import styles from "../styles/Home.module.css";

import source from "../data";

export default function Home() {
  return (
    <>
      <Script
        src="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.js"
        onLoad={() => {
          const videoPlayer = window.cloudinary.videoPlayer("video-player", {
            muted: true,
            controls: true,
            cloud_name: "ifeomaimoh",
          });
          videoPlayer.source("video12", source);
        }}
      />
      <div className={styles.main}>
        <h2>Cloudinary Shoppable Video demo</h2>
        <div>
          <video id="video-player" />
        </div>
      </div>
    </>
  );
}
