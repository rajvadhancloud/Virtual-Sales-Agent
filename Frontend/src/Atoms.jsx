import { atom } from 'recoil';

export const speakState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const transcriptState = atom({
  key: "costTranscriptState",
  default: "",
});

export const socketState = atom({
  key: "socketState",
  default: null,
});

export const keyState = atom({
  key: "keyState",
  default: ""+Math.round(Math.random() * 100000000000000),
});
