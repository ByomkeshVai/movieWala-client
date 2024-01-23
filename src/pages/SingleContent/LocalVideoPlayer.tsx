import { VideoPlayer, VideoPlayerProps } from "@graphland/react-video-player";
type PlayerProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  videoLink: any;
};

const LocalVideoPlayer = ({ videoLink }: PlayerProps) => {
  const videoSources = [
    {
      src: `${videoLink}`,
      type: "video/mp4",
    },
  ];

  const videoProps: VideoPlayerProps = {
    theme: "forest",
    height: 720,
    width: 1280,
    autoPlay: false,
    loop: false,
    sources: videoSources,
    controlBar: {
      skipButtons: {
        forward: 5,
        backward: 5,
      },
    },
    playbackRates: [0.5, 1, 1.5, 2],
    disablePictureInPicture: false,
    onReady: () => {
      console.log("Video player is ready!");
    },
  };
  return (
    <div className="max-w-screen-xl mx-auto mb-10">
      <VideoPlayer {...videoProps} />
    </div>
  );
};

export default LocalVideoPlayer;
