# Record Audio

A simple audio recording function.

### How to use

The following code will record audio for 3 seconds, then play back the audio that it recorded.

```javascript
(async () => {
  const recorder = await recordAudio();
  recorder.start();
  await sleep(3000);
  const audio = await recorder.stop();
  audio.play();
})();
```
Now after the modification of the above code i have the option to simuate a recording in browser.

### Instructions for running example

Make sure your browser is up to date.

Clone the repo, then open index.html, then press action button and start talking. You will be recorded for 3 seconds, then your recording will be played back.

### Cross-browser support

(Cross broswer example)[https://ai.github.io/audio-recorder-polyfill/]

It makes use of the (Media Rocorder Web API)[https://ai.github.io/audio-recorder-polyfill/api/MediaRecorder.html] and as a Polyfill for it uses (Audio Recorder Polyfill)[https://github.com/ai/audio-recorder-polyfill]

To Install package:
npm install --save audio-recorder-polyfill
