const hangHeartsSVG = `<svg viewBox="0 0 70 110" fill="none">
  <line x1="14" y1="0" x2="14" y2="34" stroke="#E48A92" stroke-width="1.5"/>
  <path d="M14 40c-4-5-12-3-12 3 0 5 6 9 12 14 6-5 12-9 12-14 0-6-8-8-12-3z" fill="#E48A92"/>
  <line x1="38" y1="0" x2="38" y2="14" stroke="#E48A92" stroke-width="1.5"/>
  <path d="M38 18c-3-3.5-8-2-8 2 0 3.5 4 6 8 9.5 4-3.5 8-6 8-9.5 0-4-5-5.5-8-2z" fill="#E48A92"/>
  <line x1="56" y1="0" x2="56" y2="46" stroke="#E48A92" stroke-width="1.5"/>
  <path d="M56 52c-4.5-5-13-3-13 3.5 0 5.5 6.5 9.5 13 15 6.5-5.5 13-9.5 13-15 0-6.5-8.5-8.5-13-3.5z" fill="#E48A92"/>
</svg>`;

const cornerHeartsSVG = `<svg viewBox="0 0 110 120" fill="#E48A92">
  <path d="M70 60c-9-11-27-6-27 7 0 12 14 20 27 32 13-12 27-20 27-32 0-13-18-18-27-7z" opacity="0.95"/>
  <path d="M25 30c-3-3.5-8-2-8 2 0 3.5 4 6.5 8 10 4-3.5 8-6.5 8-10 0-4-5-5.5-8-2z"/>
  <path d="M20 88c-3-3.5-8-2-8 2 0 3.5 4 6.5 8 10 4-3.5 8-6.5 8-10 0-4-5-5.5-8-2z"/>
  <path d="M55 92c-3-3.5-8-2-8 2 0 3.5 4 6.5 8 10 4-3.5 8-6.5 8-10 0-4-5-5.5-8-2z"/>
</svg>`;

document.querySelectorAll('.hang-hearts').forEach(el => el.innerHTML = hangHeartsSVG);
document.querySelectorAll('.corner-hearts').forEach(el => el.innerHTML = cornerHeartsSVG);

const ambience = document.getElementById('ambience');
const floatSymbols = ['♥', '✦', '♡'];
for (let i = 0; i < 18; i++) {
  const el = document.createElement('span');
  el.className = 'heart-float';
  el.textContent = floatSymbols[Math.floor(Math.random() * floatSymbols.length)];
  el.style.left = Math.random() * 100 + '%';
  el.style.animationDuration = (10 + Math.random() * 12) + 's';
  el.style.animationDelay = (Math.random() * 12) + 's';
  el.style.fontSize = (0.9 + Math.random() * 1.2) + 'rem';
  ambience.appendChild(el);
}

function spawnSparkle() {
  const s = document.createElement('span');
  const isStar = Math.random() > 0.5;
  s.className = 'sparkle drift' + (isStar ? ' star' : '');
  if (isStar) {
    s.textContent = '✦';
  } else {
    const size = 3 + Math.random() * 5;
    s.style.width = size + 'px';
    s.style.height = size + 'px';
  }
  s.style.left = Math.random() * 100 + '%';
  s.style.top = Math.random() * 100 + '%';
  const dur = 1.6 + Math.random() * 2.2;
  s.style.animationDuration = dur + 's';
  ambience.appendChild(s);
  setTimeout(() => s.remove(), dur * 1000);
}

for (let i = 0; i < 20; i++) {
  setTimeout(spawnSparkle, Math.random() * 3000);
}
setInterval(spawnSparkle, 220);

const slides = document.querySelectorAll('.slide');
const progressEl = document.getElementById('progress');
slides.forEach((_, i) => {
  const d = document.createElement('div');
  d.className = 'dot' + (i === 0 ? ' on' : '');
  progressEl.appendChild(d);
});
let current = 0;

function show(i) {
  slides.forEach(s => s.classList.remove('active'));
  slides[i].classList.add('active');
  document.querySelectorAll('.progress .dot').forEach((d, idx) => d.classList.toggle('on', idx === i));
  current = i;
  window.scrollTo(0, 0);
}
function next() {
  if (current < slides.length - 1) show(current + 1);
}
function restart() {
  show(0);
}

const noBtn = document.getElementById('noBtn');
let dodgeCount = 0;
noBtn.addEventListener('click', () => {
  if (dodgeCount < 2) {
    dodgeCount++;
    const x = (Math.random() - 0.5) * 140;
    const y = (Math.random() - 0.5) * 40;
    noBtn.style.transform = `translate(${x}px,${y}px)`;
    noBtn.classList.add('dodge');
  } else {
    next();
  }
});

const music = document.getElementById("music");

const gift = document.getElementById("gift");

gift.addEventListener("click", () => {

    music.play().catch(() => {});

});


const heartMosaic = document.getElementById('heartMosaic');
const mosaicPhotos = [
  'images/heart1.jpeg','images/heart2.jpeg','images/heart3.jpeg','images/heart4.jpeg',
  'images/heart5.jpeg','images/heart6.jpeg','images/heart7.jpeg','images/heart8.jpeg',
  'images/heart9.jpeg','images/heart10.jpeg','images/heart11.jpeg','images/heart12.jpeg',
  'images/heart13.jpeg','images/heart14.jpeg','images/heart15.jpeg','images/heart16.jpeg',
  'images/heart17.jpeg','images/heart18.jpeg','images/heart19.jpeg','images/heart20.jpeg',
  'images/heart21.jpeg','images/heart22.jpeg','images/heart23.jpeg','images/heart24.jpeg'
];
mosaicPhotos.forEach(path => {
  const tile = document.createElement('div');
  tile.className = 'tile';
  tile.style.backgroundImage = `url('${path}')`;
  heartMosaic.appendChild(tile);
});