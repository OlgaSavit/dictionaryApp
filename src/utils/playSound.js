import Sound from "react-native-sound";

export const createSound = (name) => {
  Sound.setCategory("Playback");
  const sound = new Sound(name, null, (error) => {
    if (error) {
      console.log("failed to load the sound", error);
      return;
    }

    // if loaded successfully
    // console.log(
    //   name +
    //     'duration in seconds: ' +
    //     sound.getDuration() +
    //     'number of channels: ' +
    //     sound.getNumberOfChannels()
    // )
  });
  return sound;
};
