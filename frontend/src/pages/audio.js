import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import demoAudio from "../assets/recording.wav";

// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Audio = () => {
  // const audio = new Audio(demoAudio);
  // audio.play();

  return (
    <AudioPlayer
      autoPlay
      src={demoAudio}
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
  );
};

export default Audio;
