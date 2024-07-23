const radaSounds = [
  './assets/sounds/rada-sound1.m4a',
  './assets/sounds/rada-sound2.m4a',
  './assets/sounds/rada-sound3.m4a',
  './assets/sounds/rada-sound4.m4a',
  './assets/sounds/rada-sound5.m4a',
];

const gaiSounds = [
  './assets/sounds/gai-sound1.m4a',
  './assets/sounds/gai-sound2.m4a',
  './assets/sounds/gai-sound3.m4a',
  './assets/sounds/gai-sound4.m4a',
  './assets/sounds/gai-sound5.m4a',
];

let currentlyPlayingAudios = [];

function getRandomSound(sounds) {
  const randomIndex = Math.floor(Math.random() * sounds.length);
  console.log(`choosing sound at index ${randomIndex}`);
  return sounds[randomIndex];
}

function addShakeEffect(element, duration) {
  element.classList.add('shake-effect');
  setTimeout(() => {
    element.classList.remove('shake-effect');
  }, duration);
}

function playSound(element, sounds) {
  const randomSound = getRandomSound(sounds);
  const audio = new Audio(randomSound);
  currentlyPlayingAudios.push({ audio, element });
  audio.play();
  audio.addEventListener('playing', () => {
    addShakeEffect(element, audio.duration * 1000);
  });
  audio.addEventListener('ended', () => {
    currentlyPlayingAudios = currentlyPlayingAudios.filter(
      a => a.audio !== audio
    );
  });
}

function stopAllSounds() {
  currentlyPlayingAudios.forEach(({ audio, element }) => {
    audio.pause();
    audio.currentTime = 0;
    element.classList.remove('shake-effect');
  });
  currentlyPlayingAudios = [];
}

document.getElementById('rada').addEventListener('mouseover', function () {
  this.classList.add('shadow-effect');
});

document.getElementById('rada').addEventListener('mouseleave', function () {
  this.classList.remove('shadow-effect');
});

document.getElementById('rada').addEventListener('click', function () {
  playSound(this, radaSounds);
});

document.getElementById('gai').addEventListener('mouseover', function () {
  this.classList.add('shadow-effect');
});

document.getElementById('gai').addEventListener('mouseleave', function () {
  this.classList.remove('shadow-effect');
});

document.getElementById('gai').addEventListener('click', function () {
  playSound(this, gaiSounds);
});

document.getElementById('me').addEventListener('click', function () {
  stopAllSounds();
});
