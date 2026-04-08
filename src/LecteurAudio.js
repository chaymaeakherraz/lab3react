import son from './audio.mp3';

function LecteurAudio() {
  return (
    <div>
      <audio controls src={son}></audio>
    </div>
  );
}

export default LecteurAudio;