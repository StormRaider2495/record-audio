const recordAudio = () =>
  new Promise(async resolve => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    const start = () => mediaRecorder.start();

    const stop = () =>
      new Promise(resolve => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          const play = () => audio.play();
          resolve({ audioBlob, audioUrl, play });
        });

        mediaRecorder.stop();
      });

    resolve({ start, stop });
  });

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

// const startButton = document.getElementById('start');
// const stopButton = document.getElementById('stop');
// const playButton = document.getElementById('play');
let recorder;
let audio;

const handleAction = async (action) => {
  if (action === 'start-record') {
    recorder = await recordAudio();
    const startButton = document.getElementById('start');
    startButton.disabled = true;
    const stopButton = document.getElementById('stop');
    stopButton.disabled = false;
    const playButton = document.getElementById('play');
    playButton.disabled = true;
    recorder.start();
  }
  if (action === 'stop-record') {
    audio = await recorder.stop();
    const stopButton = document.getElementById('stop');
    stopButton.disabled = true;
    const playButton = document.getElementById('play');
    playButton.disabled = false;
  }
  if (action === 'play-record') {
    audio.play();
    const startButton = document.getElementById('start');
    startButton.disabled = false;
    // const playButton = document.getElementById('play');
    // playButton.disabled = true;
  }  
  
  // const recorder = await recordAudio();
  // const actionButton = document.getElementById('action');
  // actionButton.disabled = true;
  // recorder.start();
  // await sleep(3000);
  // const audio = await recorder.stop();
  // audio.play();
  // await sleep(3000);
  // actionButton.disabled = false;
}