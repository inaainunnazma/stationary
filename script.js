/* ============================================================
   STATIONARY — script.js
   Flashcards + Crossword + Word Search
   ============================================================ */

/* ------------------------------------------------------------
   1. VOCABULARY DATA (with detailed SVG drawings)
   ------------------------------------------------------------ */
const VOCAB = [
  {
    word: "PEN", display: "Pen", hint: "Pulpen ✒️",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="penBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#1a237e"/><stop offset=".45" stop-color="#5c6bc0"/>
          <stop offset=".55" stop-color="#5c6bc0"/><stop offset="1" stop-color="#1a237e"/>
        </linearGradient>
        <linearGradient id="penClip" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#90a4ae"/><stop offset=".5" stop-color="#eceff1"/>
          <stop offset="1" stop-color="#607d8b"/>
        </linearGradient>
      </defs>
      <g transform="rotate(-22 50 50)">
        <rect x="44" y="6" width="12" height="6" rx="2" fill="#1a237e"/>
        <rect x="46" y="3" width="8" height="4" rx="1" fill="#ef5350"/>
        <rect x="42" y="12" width="16" height="8" rx="2" fill="#283593"/>
        <rect x="42" y="20" width="16" height="46" rx="2" fill="url(#penBody)"/>
        <rect x="56" y="20" width="4" height="20" rx="2" fill="url(#penClip)"/>
        <rect x="40" y="32" width="20" height="5" rx="2" fill="#ef5350"/>
        <rect x="42" y="60" width="16" height="12" fill="#37474f"/>
        <rect x="43" y="62" width="2" height="8" fill="#546e7a"/>
        <rect x="47" y="62" width="2" height="8" fill="#546e7a"/>
        <rect x="51" y="62" width="2" height="8" fill="#546e7a"/>
        <rect x="55" y="62" width="2" height="8" fill="#546e7a"/>
        <polygon points="42,72 58,72 52,86 48,86" fill="#cfd8dc"/>
        <polygon points="48,86 52,86 50,93" fill="#1a237e"/>
      </g>
    </svg>`
  },
  {
    word: "BAG", display: "Bag", hint: "Tas 🎒",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bagBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ff8f00"/><stop offset="1" stop-color="#e65100"/>
        </linearGradient>
        <linearGradient id="bagFlap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffb74d"/><stop offset="1" stop-color="#ef6c00"/>
        </linearGradient>
      </defs>
      <path d="M30 34 Q30 14 45 14" stroke="#4e342e" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M70 34 Q70 14 55 14" stroke="#4e342e" stroke-width="5" fill="none" stroke-linecap="round"/>
      <rect x="22" y="32" width="56" height="58" rx="13" fill="url(#bagBody)"/>
      <path d="M22 46 Q50 34 78 46 L78 58 Q50 48 22 58 Z" fill="url(#bagFlap)"/>
      <rect x="44" y="52" width="12" height="9" rx="2" fill="#3e2723"/>
      <rect x="47" y="54" width="6" height="5" rx="1" fill="#ffd54f"/>
      <rect x="30" y="66" width="40" height="20" rx="6" fill="#ff8f00"/>
      <rect x="30" y="66" width="40" height="4" rx="2" fill="#ffd54f"/>
      <circle cx="50" cy="76" r="2.5" fill="#3e2723"/>
      <rect x="26" y="36" width="48" height="3" rx="1.5" fill="#fff" opacity=".2"/>
    </svg>`
  },
  {
    word: "PENCIL", display: "Pencil", hint: "Pensil ✏️",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pencilBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#f57f17"/><stop offset=".5" stop-color="#fdd835"/>
          <stop offset="1" stop-color="#f57f17"/>
        </linearGradient>
        <linearGradient id="ferrule" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#90a4ae"/><stop offset=".5" stop-color="#eceff1"/>
          <stop offset="1" stop-color="#78909c"/>
        </linearGradient>
      </defs>
      <g transform="rotate(15 50 50)">
        <rect x="42" y="6" width="16" height="11" rx="2" fill="#ef9a9a"/>
        <rect x="42" y="17" width="16" height="7" fill="url(#ferrule)"/>
        <line x1="42" y1="19" x2="58" y2="19" stroke="#546e7a" stroke-width=".6"/>
        <line x1="42" y1="22" x2="58" y2="22" stroke="#546e7a" stroke-width=".6"/>
        <rect x="42" y="24" width="16" height="52" fill="url(#pencilBody)"/>
        <polygon points="42,76 58,76 50,91" fill="#ffe0b2"/>
        <polygon points="46,83 54,83 50,91" fill="#424242"/>
        <line x1="45" y1="30" x2="45" y2="74" stroke="#fff" opacity=".35" stroke-width="1.5"/>
      </g>
    </svg>`
  },
  {
    word: "BOOK", display: "Book", hint: "Buku 📚",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bookCover" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#1e88e5"/><stop offset="1" stop-color="#0d47a1"/>
        </linearGradient>
      </defs>
      <rect x="26" y="18" width="54" height="64" rx="2" fill="#f5f5f5" stroke="#bdbdbd" stroke-width=".5"/>
      <rect x="26" y="18" width="4" height="64" fill="#e0e0e0"/>
      <rect x="20" y="16" width="54" height="68" rx="4" fill="url(#bookCover)"/>
      <rect x="20" y="16" width="6" height="68" rx="3" fill="#0d47a1"/>
      <rect x="32" y="32" width="34" height="4" rx="2" fill="#fff" opacity=".92"/>
      <rect x="32" y="42" width="34" height="4" rx="2" fill="#fff" opacity=".92"/>
      <rect x="32" y="52" width="22" height="3" rx="1.5" fill="#fff" opacity=".65"/>
      <rect x="32" y="60" width="28" height="3" rx="1.5" fill="#fff" opacity=".65"/>
      <polygon points="66,16 66,34 71,30 76,34 76,16" fill="#ff5252"/>
      <rect x="32" y="70" width="20" height="2" rx="1" fill="#fff" opacity=".4"/>
    </svg>`
  },
  {
    word: "SHARPENER", display: "Sharpener", hint: "Peraut pensil 🔪",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sharpBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#9575cd"/><stop offset="1" stop-color="#4527a0"/>
        </linearGradient>
        <linearGradient id="blade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#eceff1"/><stop offset="1" stop-color="#90a4ae"/>
        </linearGradient>
      </defs>
      <rect x="20" y="42" width="60" height="40" rx="9" fill="url(#sharpBody)"/>
      <rect x="24" y="46" width="52" height="3" rx="1.5" fill="#fff" opacity=".25"/>
      <circle cx="38" cy="62" r="11" fill="#1a237e"/>
      <circle cx="38" cy="62" r="7" fill="#000"/>
      <g transform="rotate(-25 32 40)">
        <rect x="26" y="22" width="11" height="28" rx="1" fill="#fdd835"/>
        <rect x="26" y="22" width="11" height="3" fill="#f9a825"/>
        <polygon points="26,50 37,50 31.5,62" fill="#ffe0b2"/>
        <polygon points="29,57 34,57 31.5,62" fill="#424242"/>
      </g>
      <rect x="58" y="52" width="22" height="5" rx="2" fill="url(#blade)"/>
      <rect x="58" y="63" width="22" height="5" rx="2" fill="url(#blade)"/>
      <circle cx="80" cy="54.5" r="3" fill="#546e7a"/>
      <circle cx="80" cy="65.5" r="3" fill="#546e7a"/>
    </svg>`
  },
  {
    word: "RULER", display: "Ruler", hint: "Penggaris 📏",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rulerBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fff176"/><stop offset="1" stop-color="#fbc02d"/>
        </linearGradient>
      </defs>
      <rect x="4" y="38" width="92" height="24" rx="3" fill="url(#rulerBody)" stroke="#f57f17" stroke-width="1"/>
      <rect x="4" y="39" width="92" height="3" fill="#fff" opacity=".45"/>
      <g stroke="#1a237e" stroke-width="1.6" stroke-linecap="round">
        <line x1="12" y1="38" x2="12" y2="49"/>
        <line x1="20" y1="38" x2="20" y2="44"/>
        <line x1="28" y1="38" x2="28" y2="49"/>
        <line x1="36" y1="38" x2="36" y2="44"/>
        <line x1="44" y1="38" x2="44" y2="49"/>
        <line x1="52" y1="38" x2="52" y2="44"/>
        <line x1="60" y1="38" x2="60" y2="49"/>
        <line x1="68" y1="38" x2="68" y2="44"/>
        <line x1="76" y1="38" x2="76" y2="49"/>
        <line x1="84" y1="38" x2="84" y2="44"/>
        <line x1="92" y1="38" x2="92" y2="49"/>
      </g>
      <g font-family="Arial, sans-serif" font-size="6.5" fill="#1a237e" font-weight="bold">
        <text x="10" y="61">1</text><text x="26" y="61">2</text>
        <text x="42" y="61">3</text><text x="58" y="61">4</text>
        <text x="74" y="61">5</text><text x="89" y="61">6</text>
      </g>
    </svg>`
  },
  {
    word: "ERASER", display: "Eraser", hint: "Penghapus 🧽",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="eraserTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#f8bbd0"/><stop offset="1" stop-color="#e91e63"/>
        </linearGradient>
        <linearGradient id="eraserBot" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#f5f5f5"/><stop offset="1" stop-color="#9e9e9e"/>
        </linearGradient>
      </defs>
      <rect x="16" y="52" width="68" height="26" rx="4" fill="url(#eraserBot)"/>
      <rect x="16" y="30" width="68" height="26" rx="4" fill="url(#eraserTop)"/>
      <rect x="16" y="50" width="68" height="6" fill="#ad1457"/>
      <rect x="28" y="38" width="44" height="10" rx="2" fill="#fff" opacity=".92"/>
      <text x="50" y="46" font-family="Arial, sans-serif" font-size="7" font-weight="900"
            fill="#ad1457" text-anchor="middle">ERASER</text>
      <rect x="20" y="56" width="60" height="2" rx="1" fill="#fff" opacity=".55"/>
    </svg>`
  },
  {
    word: "CHAIR", display: "Chair", hint: "Kursi 🪑",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chairBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#a1887f"/><stop offset="1" stop-color="#6d4c41"/>
        </linearGradient>
      </defs>
      <rect x="28" y="12" width="44" height="38" rx="7" fill="url(#chairBack)"/>
      <rect x="33" y="17" width="34" height="28" rx="4" fill="#8d6e63"/>
      <rect x="31" y="46" width="6" height="10" fill="#4e342e"/>
      <rect x="63" y="46" width="6" height="10" fill="#4e342e"/>
      <rect x="20" y="52" width="60" height="11" rx="3" fill="#5d4037"/>
      <rect x="20" y="52" width="60" height="3" rx="1.5" fill="#8d6e63"/>
      <rect x="26" y="63" width="7" height="30" rx="2" fill="#4e342e"/>
      <rect x="67" y="63" width="7" height="30" rx="2" fill="#4e342e"/>
      <rect x="26" y="78" width="48" height="5" rx="2" fill="#4e342e"/>
    </svg>`
  },
  {
    word: "TABLE", display: "Table", hint: "Meja 🪑",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tableTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#a1887f"/><stop offset="1" stop-color="#6d4c41"/>
        </linearGradient>
      </defs>
      <rect x="8" y="32" width="84" height="13" rx="3" fill="url(#tableTop)"/>
      <rect x="8" y="32" width="84" height="4" rx="2" fill="#bcaaa4"/>
      <rect x="8" y="42" width="84" height="2" fill="#4e342e" opacity=".5"/>
      <rect x="16" y="45" width="9" height="43" rx="2" fill="#5d4037"/>
      <rect x="75" y="45" width="9" height="43" rx="2" fill="#5d4037"/>
      <rect x="25" y="70" width="50" height="5" rx="2" fill="#4e342e"/>
      <rect x="18" y="47" width="3" height="40" fill="#8d6e63" opacity=".4"/>
      <rect x="77" y="47" width="3" height="40" fill="#8d6e63" opacity=".4"/>
    </svg>`
  },
  {
    word: "PENCILCASE", display: "Pencil Case", hint: "Tempat pensil 🧰",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="caseBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#4dd0e1"/><stop offset="1" stop-color="#00838f"/>
        </linearGradient>
      </defs>
      <g>
        <rect x="30" y="14" width="5" height="32" rx="1" fill="#fdd835"/>
        <rect x="30" y="14" width="5" height="4" fill="#f9a825"/>
        <polygon points="30,14 35,14 32.5,6" fill="#ffe0b2"/>
        <polygon points="31,11 34,11 32.5,6" fill="#424242"/>
        <rect x="44" y="10" width="5" height="36" rx="1" fill="#e53935"/>
        <polygon points="44,10 49,10 46.5,2" fill="#ffe0b2"/>
        <polygon points="45,7 48,7 46.5,2" fill="#424242"/>
        <rect x="58" y="16" width="5" height="30" rx="1" fill="#43a047"/>
        <polygon points="58,16 63,16 60.5,8" fill="#ffe0b2"/>
        <polygon points="59,13 62,13 60.5,8" fill="#424242"/>
      </g>
      <rect x="14" y="42" width="72" height="42" rx="13" fill="url(#caseBody)"/>
      <path d="M14 56 Q50 46 86 56" stroke="#263238" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M14 56 Q50 46 86 56" stroke="#ffd54f" stroke-width="1.4" fill="none"
            stroke-dasharray="3 2" stroke-linecap="round"/>
      <circle cx="84" cy="58" r="3" fill="#ffd54f" stroke="#f57f17" stroke-width=".8"/>
      <rect x="81" y="58" width="6" height="6" rx="1.5" fill="#ffd54f" stroke="#f57f17" stroke-width=".8"/>
      <rect x="20" y="46" width="60" height="3" rx="1.5" fill="#fff" opacity=".35"/>
    </svg>`
  },
  {
    word: "CLOCK", display: "Clock", hint: "Jam ⏰",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="clockRing" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#455a64"/><stop offset="1" stop-color="#263238"/>
        </linearGradient>
        <radialGradient id="clockFace" cx=".4" cy=".35" r=".8">
          <stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#eceff1"/>
        </radialGradient>
      </defs>
      <rect x="44" y="10" width="12" height="7" rx="2" fill="#455a64"/>
      <rect x="46" y="6" width="8" height="5" rx="1.5" fill="#78909c"/>
      <circle cx="50" cy="52" r="37" fill="url(#clockRing)"/>
      <circle cx="50" cy="52" r="33" fill="url(#clockFace)"/>
      <g stroke="#37474f" stroke-width="2.4" stroke-linecap="round">
        <line x1="50" y1="22" x2="50" y2="29"/>
        <line x1="50" y1="75" x2="50" y2="82"/>
        <line x1="20" y1="52" x2="27" y2="52"/>
        <line x1="73" y1="52" x2="80" y2="52"/>
      </g>
      <g font-family="Arial, sans-serif" font-size="9" font-weight="900"
         fill="#263238" text-anchor="middle">
        <text x="50" y="39">12</text>
        <text x="66" y="55">3</text>
        <text x="50" y="71">6</text>
        <text x="34" y="55">9</text>
      </g>
      <g stroke="#212121" stroke-linecap="round">
        <line x1="50" y1="52" x2="50" y2="32" stroke-width="3.6"/>
        <line x1="50" y1="52" x2="66" y2="58" stroke-width="2.8"/>
      </g>
      <circle cx="50" cy="52" r="3.4" fill="#e53935"/>
      <circle cx="50" cy="52" r="1.4" fill="#fff"/>
    </svg>`
  },
  {
    word: "BOARD", display: "Board", hint: "Papan tulis 🖍️",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="boardBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#388e3c"/><stop offset="1" stop-color="#1b5e20"/>
        </linearGradient>
      </defs>
      <rect x="20" y="76" width="4" height="12" rx="1" fill="#4e342e"/>
      <rect x="76" y="76" width="4" height="12" rx="1" fill="#4e342e"/>
      <rect x="6" y="14" width="88" height="60" rx="4" fill="#4e342e"/>
      <rect x="10" y="18" width="80" height="52" rx="2" fill="url(#boardBg)"/>
      <g stroke="#fff" stroke-width="1.6" stroke-linecap="round" fill="none" opacity=".92">
        <path d="M18 28 Q22 25 26 28 T34 28"/>
        <path d="M40 28 L48 28"/>
        <path d="M54 26 L54 31"/>
        <path d="M60 28 Q64 24 68 28 T76 28"/>
        <path d="M18 40 L28 40 M18 46 L28 46"/>
        <path d="M36 40 L46 40 M36 46 L44 46"/>
        <path d="M54 40 Q58 36 62 40 Q66 44 72 40"/>
        <path d="M18 56 L28 56"/>
        <path d="M36 56 L44 56"/>
      </g>
      <rect x="6" y="70" width="88" height="6" rx="2" fill="#3e2723"/>
      <rect x="22" y="69" width="14" height="4" rx="1" fill="#fff"/>
      <rect x="40" y="69" width="9" height="4" rx="1" fill="#ffeb3b"/>
      <rect x="54" y="69" width="11" height="4" rx="1" fill="#f48fb1"/>
      <rect x="69" y="69" width="8" height="4" rx="1" fill="#81d4fa"/>
    </svg>`
  }
];

/* ------------------------------------------------------------
   2. SOUND ENGINE
   ------------------------------------------------------------ */
let audioCtx = null;
function getCtx() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) audioCtx = new AC();
  }
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}
function playChime() {
  const ctx = getCtx();
  if (!ctx) return;
  [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.value = freq;
    const t = ctx.currentTime + i * 0.07;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.16, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t); osc.stop(t + 0.3);
  });
}
function playSuccess() {
  const ctx = getCtx();
  if (!ctx) return;
  [659.25, 783.99, 987.77, 1318.5].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    const t = ctx.currentTime + i * 0.09;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.22, t + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t); osc.stop(t + 0.4);
  });
}
function speakWord(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US"; u.rate = 0.82; u.pitch = 1.1; u.volume = 1;
  const voices = window.speechSynthesis.getVoices();
  const en = voices.find(v => /en[-_]US/i.test(v.lang)) ||
             voices.find(v => /^en/i.test(v.lang));
  if (en) u.voice = en;
  window.speechSynthesis.speak(u);
}
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  window.speechSynthesis.getVoices();
}

/* ------------------------------------------------------------
   3. FLASHCARDS
   ------------------------------------------------------------ */
const cardFront = document.getElementById("cardFront");
const slideImg  = document.getElementById("slideImg");
const slideWord = document.getElementById("slideWord");
const slideHint = document.getElementById("slideHint");
const flashcard = document.getElementById("flashcard");
const dotsWrap  = document.getElementById("dots");

let current = 0;
VOCAB.forEach((_, i) => {
  const d = document.createElement("button");
  d.className = "dot";
  d.setAttribute("aria-label", "Go to card " + (i + 1));
  d.addEventListener("click", () => showCard(i, true));
  dotsWrap.appendChild(d);
});

const hues = ["#fff0f3","#eafaff","#fffbe6","#eafff2","#f6ecff","#fff5e6",
              "#e6fff6","#fff0f8","#f3ecff","#fff3e6","#e6f6ff","#eaffea"];

function renderCard(i) {
  const item = VOCAB[i];
  slideImg.innerHTML = item.svg;
  slideWord.textContent = item.word;
  slideHint.textContent = item.hint;
  [...dotsWrap.children].forEach((d, idx) => d.classList.toggle("active", idx === i));
  cardFront.style.background =
    `linear-gradient(160deg, #ffffff 40%, ${hues[i % hues.length]})`;
}
function showCard(i, withSound) {
  current = (i + VOCAB.length) % VOCAB.length;
  renderCard(current);
  if (withSound) playWord(current);
}
function playWord(i) {
  playChime();
  speakWord(VOCAB[i].word);
  flashcard.classList.remove("pop");
  void flashcard.offsetWidth;
  flashcard.classList.add("pop");
}
flashcard.addEventListener("click", () => playWord(current));
flashcard.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); playWord(current); }
});
document.getElementById("prevBtn").addEventListener("click", () => showCard(current - 1, true));
document.getElementById("nextBtn").addEventListener("click", () => showCard(current + 1, true));
document.addEventListener("keydown", (e) => {
  if (!document.getElementById("slides").classList.contains("active")) return;
  if (e.key === "ArrowLeft")  showCard(current - 1, true);
  if (e.key === "ArrowRight") showCard(current + 1, true);
});
renderCard(0);

/* ------------------------------------------------------------
   4. TABS
   ------------------------------------------------------------ */
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
    if (tab.dataset.tab === "game")   buildCrossword();
    if (tab.dataset.tab === "search") startWordSearch();
  });
});

/* ============================================================
   5. CROSSWORD GENERATOR
   ============================================================ */
const gridEl   = document.getElementById("crosswordGrid");
const acrossEl = document.getElementById("acrossList");
const downEl   = document.getElementById("downList");
const msgEl    = document.getElementById("gameMsg");

const SIZE = 20;
let solutionGrid = [];
let currentLayout = null;

function emptyGrid() { return Array.from({ length: SIZE }, () => Array(SIZE).fill("")); }
function shuffle(a) {
  const arr = a.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function tryPlace(grid, word, r, c, dir) {
  const dr = dir === 1 ? 1 : 0;
  const dc = dir === 0 ? 1 : 0;
  const endR = r + dr * (word.length - 1);
  const endC = c + dc * (word.length - 1);
  if (r < 0 || c < 0 || endR >= SIZE || endC >= SIZE) return -1;
  const br = r - dr, bc = c - dc;
  if (br >= 0 && bc >= 0 && grid[br][bc] !== "") return -1;
  const ar = endR + dr, ac = endC + dc;
  if (ar < SIZE && ac < SIZE && grid[ar][ac] !== "") return -1;
  let crossings = 0;
  for (let i = 0; i < word.length; i++) {
    const rr = r + dr * i, cc = c + dc * i;
    const cell = grid[rr][cc];
    if (cell !== "") {
      if (cell !== word[i]) return -1;
      crossings++;
    } else {
      if (dir === 0) {
        if (rr > 0 && grid[rr - 1][cc] !== "") return -1;
        if (rr < SIZE - 1 && grid[rr + 1][cc] !== "") return -1;
      } else {
        if (cc > 0 && grid[rr][cc - 1] !== "") return -1;
        if (cc < SIZE - 1 && grid[rr][cc + 1] !== "") return -1;
      }
    }
  }
  return crossings;
}
function applyWord(grid, word, r, c, dir) {
  const dr = dir === 1 ? 1 : 0;
  const dc = dir === 0 ? 1 : 0;
  for (let i = 0; i < word.length; i++) grid[r + dr * i][c + dc * i] = word[i];
}
function attemptLayout() {
  const cleaned = VOCAB.map(v => ({
    word: v.word.replace(/\s+/g, "").toUpperCase(),
    display: v.display || v.word,
    hint: v.hint
  }));
  const sorted = shuffle(cleaned).sort((a, b) => b.word.length - a.word.length);
  const grid = emptyGrid();
  const placed = [];
  const first = sorted[0];
  const r0 = Math.floor(SIZE / 2);
  const c0 = Math.floor((SIZE - first.word.length) / 2);
  applyWord(grid, first.word, r0, c0, 0);
  placed.push({ ...first, row: r0, col: c0, dir: 0 });

  for (let k = 1; k < sorted.length; k++) {
    const w = sorted[k];
    let best = null;
    for (const p of placed) {
      for (let i = 0; i < p.word.length; i++) {
        for (let j = 0; j < w.word.length; j++) {
          if (p.word[i] !== w.word[j]) continue;
          if (p.dir === 0) {
            const r = p.row - j, c = p.col + i;
            const score = tryPlace(grid, w.word, r, c, 1);
            if (score > 0 && (!best || score > best.score))
              best = { row: r, col: c, dir: 1, score };
          } else {
            const r = p.row + i, c = p.col - j;
            const score = tryPlace(grid, w.word, r, c, 0);
            if (score > 0 && (!best || score > best.score))
              best = { row: r, col: c, dir: 0, score };
          }
        }
      }
    }
    if (best) {
      applyWord(grid, w.word, best.row, best.col, best.dir);
      placed.push({ ...w, row: best.row, col: best.col, dir: best.dir });
    }
  }
  return { grid, placed };
}
function cropAndNumber(grid, placed) {
  let minR = SIZE, maxR = -1, minC = SIZE, maxC = -1;
  for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++)
    if (grid[r][c] !== "") {
      minR = Math.min(minR, r); maxR = Math.max(maxR, r);
      minC = Math.min(minC, c); maxC = Math.max(maxC, c);
    }
  const rows = maxR - minR + 1, cols = maxC - minC + 1;
  const cropped = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => grid[minR + r][minC + c]));
  const newPlaced = placed.map(p => ({ ...p, row: p.row - minR, col: p.col - minC }));
  const numbers = Array.from({ length: rows }, () => Array(cols).fill(0));
  let counter = 0;
  const starts = new Map();
  newPlaced.forEach(p => starts.set(`${p.row},${p.col}`, p));
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const key = `${r},${c}`;
    if (starts.has(key) && cropped[r][c] !== "") {
      counter++;
      numbers[r][c] = counter;
      starts.get(key).num = counter;
    }
  }
  return { cropped, newPlaced, numbers, rows, cols };
}
function buildCrossword() {
  let best = null;
  for (let attempt = 0; attempt < 200; attempt++) {
    const result = attemptLayout();
    if (!best || result.placed.length > best.placed.length) {
      best = result;
      if (best.placed.length === VOCAB.length) break;
    }
  }
  const { cropped, newPlaced, numbers, rows, cols } = cropAndNumber(best.grid, best.placed);
  solutionGrid = cropped;
  currentLayout = { rows, cols, placed: newPlaced, numbers };
  renderGrid(rows, cols, numbers, newPlaced);
  renderClues(newPlaced);
  msgEl.textContent = "";
  msgEl.className = "msg";
}
function renderGrid(rows, cols, numbers, placed) {
  gridEl.innerHTML = "";
  gridEl.style.gridTemplateColumns = `repeat(${cols}, 38px)`;
  gridEl.style.gridTemplateRows = `repeat(${rows}, 38px)`;
  const inputSet = new Set();
  placed.forEach(p => {
    const dr = p.dir === 1 ? 1 : 0;
    const dc = p.dir === 0 ? 1 : 0;
    for (let i = 0; i < p.word.length; i++)
      inputSet.add(`${p.row + dr * i},${p.col + dc * i}`);
  });
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    const key = `${r},${c}`;
    if (inputSet.has(key)) {
      cell.classList.add("input");
      if (numbers[r][c] > 0) {
        const n = document.createElement("span");
        n.className = "cell-num";
        n.textContent = numbers[r][c];
        cell.appendChild(n);
      }
      const inp = document.createElement("input");
      inp.maxLength = 1;
      inp.dataset.row = r;
      inp.dataset.col = c;
      inp.autocomplete = "off";
      inp.spellcheck = false;
      inp.addEventListener("input", () => {
        inp.value = inp.value.replace(/[^a-zA-Z]/g, "").toUpperCase().slice(0, 1);
        cell.classList.remove("correct", "wrong");
        autoAdvance(inp);
      });
      inp.addEventListener("focus", () => {
        document.querySelectorAll(".cell.input.focused").forEach(el => el.classList.remove("focused"));
        cell.classList.add("focused");
        highlightClueForCell(r, c);
      });
      inp.addEventListener("blur", () => cell.classList.remove("focused"));
      inp.addEventListener("keydown", handleGridKeys);
      cell.appendChild(inp);
    } else {
      cell.classList.add("block");
    }
    gridEl.appendChild(cell);
  }
}
function autoAdvance(inp) {
  if (inp.value.length === 1) {
    const r = +inp.dataset.row, c = +inp.dataset.col;
    const next = gridEl.querySelector(`input[data-row="${r}"][data-col="${c + 1}"]`)
              || gridEl.querySelector(`input[data-row="${r + 1}"][data-col="${c}"]`);
    if (next) next.focus();
  }
}
function handleGridKeys(e) {
  const r = +e.target.dataset.row, c = +e.target.dataset.col;
  const move = (dr, dc) => {
    e.preventDefault();
    const next = gridEl.querySelector(`input[data-row="${r + dr}"][data-col="${c + dc}"]`);
    if (next) next.focus();
  };
  if (e.key === "ArrowRight") move(0, 1);
  if (e.key === "ArrowLeft")  move(0, -1);
  if (e.key === "ArrowDown")  move(1, 0);
  if (e.key === "ArrowUp")    move(-1, 0);
  if (e.key === "Backspace" && !e.target.value) {
    e.preventDefault();
    const prev = gridEl.querySelector(`input[data-row="${r}"][data-col="${c - 1}"]`)
              || gridEl.querySelector(`input[data-row="${r - 1}"][data-col="${c}"]`);
    if (prev) { prev.focus(); prev.value = ""; }
  }
}
function renderClues(placed) {
  acrossEl.innerHTML = ""; downEl.innerHTML = "";
  const sorted = placed.slice().sort((a, b) => a.num - b.num);
  sorted.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `<b>${p.num}.</b> ${p.display} <span class="len">(${p.word.length})</span>`;
    li.dataset.num = p.num;
    li.dataset.dir = p.dir;
    li.addEventListener("click", () => {
      const inp = gridEl.querySelector(`input[data-row="${p.row}"][data-col="${p.col}"]`);
      if (inp) inp.focus();
      highlightClue(p);
    });
    (p.dir === 0 ? acrossEl : downEl).appendChild(li);
  });
}
function highlightClue(p) {
  document.querySelectorAll(".clue-cols li").forEach(li => li.classList.remove("active"));
  const li = [...document.querySelectorAll(".clue-cols li")]
    .find(el => +el.dataset.num === p.num && +el.dataset.dir === p.dir);
  if (li) li.classList.add("active");
}
function highlightClueForCell(r, c) {
  if (!currentLayout) return;
  const p = currentLayout.placed.find(pl => {
    const dr = pl.dir === 1 ? 1 : 0;
    const dc = pl.dir === 0 ? 1 : 0;
    for (let i = 0; i < pl.word.length; i++)
      if (pl.row + dr * i === r && pl.col + dc * i === c) return true;
    return false;
  });
  if (p) highlightClue(p);
}
document.getElementById("checkBtn").addEventListener("click", () => {
  let total = 0, right = 0;
  const allInputs = gridEl.querySelectorAll("input");
  allInputs.forEach(inp => {
    const r = +inp.dataset.row, c = +inp.dataset.col;
    const cell = inp.parentElement;
    cell.classList.remove("correct", "wrong");
    if (!inp.value) return;
    total++;
    if (inp.value === solutionGrid[r][c]) { cell.classList.add("correct"); right++; }
    else cell.classList.add("wrong");
  });
  if (total === 0) {
    msgEl.textContent = "Type some letters first! ✏️";
    msgEl.className = "msg err"; return;
  }
  const filled = [...allInputs].filter(i => i.value).length;
  if (filled === allInputs.length && right === allInputs.length) {
    msgEl.textContent = "🎉 PERFECT! You solved the crossword! 🏆";
    msgEl.className = "msg win";
    playSuccess();
  } else {
    msgEl.textContent = `${right} / ${total} letters correct — keep going! 💪`;
    msgEl.className = "msg";
  }
});
document.getElementById("clearBtn").addEventListener("click", () => {
  gridEl.querySelectorAll("input").forEach(inp => {
    inp.value = "";
    inp.parentElement.classList.remove("correct", "wrong");
  });
  msgEl.textContent = "Cleared! Start again 🔄";
  msgEl.className = "msg";
});
document.getElementById("newBtn").addEventListener("click", () => {
  buildCrossword();
  msgEl.textContent = "New puzzle ready! 🧩";
  msgEl.className = "msg";
  playChime();
});

/* ============================================================
   6. WORD SEARCH
   ============================================================ */
const WS_SIZE = 14;
const WS_DIRECTIONS = [[0,1],[1,0],[1,1],[1,-1],[0,-1],[-1,0],[-1,-1],[-1,1]];
const wsGridEl     = document.getElementById("searchGrid");
const wsWordListEl = document.getElementById("wsWordList");
const wsFoundEl    = document.getElementById("wsFoundCount");
const wsTotalEl    = document.getElementById("wsTotalCount");
const wsTimerEl    = document.getElementById("wsTimer");
const wsMsgEl      = document.getElementById("wsMsg");

let wsGrid = [];
let wsPlacements = {};   /* word -> [ "r,c", ... ] */
let wsFoundWords = new Set();
let wsHintedWord = null;

let wsSelecting = false;
let wsStart = null;
let wsEnd = null;

let wsTimerInterval = null;
let wsSeconds = 0;
let wsGameActive = false;

/* ---- generation ---- */
function wsShuffle(a) {
  const arr = a.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function wsTryGenerate() {
  const grid = Array.from({ length: WS_SIZE }, () => Array(WS_SIZE).fill(""));
  const placements = {};
  const words = wsShuffle(VOCAB.map(v => ({
    word: v.word.replace(/\s+/g, "").toUpperCase(),
    display: v.display
  }))).sort((a, b) => b.word.length - a.word.length);

  for (const w of words) {
    const word = w.word;
    let placed = false;
    const dirs = wsShuffle(WS_DIRECTIONS);
    for (const [dr, dc] of dirs) {
      if (placed) break;
      /* collect valid starting positions for this direction */
      let rMin = 0, rMax = WS_SIZE - 1, cMin = 0, cMax = WS_SIZE - 1;
      if (dr > 0) rMax = WS_SIZE - word.length;
      if (dr < 0) rMin = word.length - 1;
      if (dc > 0) cMax = WS_SIZE - word.length;
      if (dc < 0) cMin = word.length - 1;
      if (rMax < rMin || cMax < cMin) continue;

      const positions = [];
      for (let r = rMin; r <= rMax; r++)
        for (let c = cMin; c <= cMax; c++) positions.push([r, c]);
      wsShuffle(positions);

      for (const [r, c] of positions) {
        let ok = true;
        for (let i = 0; i < word.length; i++) {
          const cell = grid[r + dr * i][c + dc * i];
          if (cell !== "" && cell !== word[i]) { ok = false; break; }
        }
        if (!ok) continue;
        /* place */
        const cells = [];
        for (let i = 0; i < word.length; i++) {
          grid[r + dr * i][c + dc * i] = word[i];
          cells.push(`${r + dr * i},${c + dc * i}`);
        }
        placements[word] = { cells, display: w.display };
        placed = true;
        break;
      }
    }
    if (!placed) return null;
  }

  /* fill the rest with random letters */
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let r = 0; r < WS_SIZE; r++)
    for (let c = 0; c < WS_SIZE; c++)
      if (grid[r][c] === "") grid[r][c] = alpha[Math.floor(Math.random() * 26)];

  return { grid, placements };
}

function wsGenerate() {
  for (let attempt = 0; attempt < 60; attempt++) {
    const r = wsTryGenerate();
    if (r) return r;
  }
  return null;
}

/* ---- render ---- */
function wsRender() {
  wsGridEl.innerHTML = "";
  wsGridEl.style.gridTemplateColumns = `repeat(${WS_SIZE}, auto)`;
  for (let r = 0; r < WS_SIZE; r++) for (let c = 0; c < WS_SIZE; c++) {
    const cell = document.createElement("div");
    cell.className = "ws-cell";
    cell.dataset.r = r;
    cell.dataset.c = c;
    cell.textContent = wsGrid[r][c];
    wsGridEl.appendChild(cell);
  }
}

function wsRenderWordList() {
  wsWordListEl.innerHTML = "";
  Object.keys(wsPlacements).forEach(word => {
    const li = document.createElement("li");
    li.dataset.word = word;
    li.textContent = wsPlacements[word].display || word;
    if (wsFoundWords.has(word)) li.classList.add("found");
    wsWordListEl.appendChild(li);
  });
}

/* ---- selection with pointer events ---- */
function wsCellFromEvent(e) {
  const el = document.elementFromPoint(e.clientX, e.clientY);
  return el && el.closest(".ws-cell");
}

function wsLineCells(start, end) {
  const [r1, c1] = start, [r2, c2] = end;
  const dr = Math.sign(r2 - r1), dc = Math.sign(c2 - c1);
  const len = Math.max(Math.abs(r2 - r1), Math.abs(c2 - c1));
  /* only horizontal, vertical, or 45° diagonal */
  if (!(dr === 0 || dc === 0 || Math.abs(r2 - r1) === Math.abs(c2 - c1))) return null;
  const cells = [];
  for (let i = 0; i <= len; i++) cells.push([r1 + dr * i, c1 + dc * i]);
  return cells;
}

function wsUpdateSelection() {
  document.querySelectorAll(".ws-cell.selecting").forEach(el =>
    el.classList.remove("selecting"));
  if (!wsStart || !wsEnd) return;
  const cells = wsLineCells(wsStart, wsEnd);
  if (!cells) return;
  cells.forEach(([r, c]) => {
    const el = wsGridEl.querySelector(`.ws-cell[data-r="${r}"][data-c="${c}"]`);
    if (el) el.classList.add("selecting");
  });
}

function wsFinalizeSelection() {
  const selecting = document.querySelectorAll(".ws-cell.selecting");
  if (!wsStart || !wsEnd || selecting.length === 0) {
    document.querySelectorAll(".ws-cell.selecting").forEach(el =>
      el.classList.remove("selecting"));
    wsStart = wsEnd = null;
    return;
  }
  const cells = wsLineCells(wsStart, wsEnd);
  document.querySelectorAll(".ws-cell.selecting").forEach(el =>
    el.classList.remove("selecting"));

  if (cells && cells.length > 1) {
    /* build the selected string and its reverse */
    const str = cells.map(([r, c]) => wsGrid[r][c]).join("");
    const rev = str.split("").reverse().join("");
    let matched = null;
    for (const word of Object.keys(wsPlacements)) {
      if (wsFoundWords.has(word)) continue;
      if (word === str || word === rev) { matched = word; break; }
    }
    if (matched) {
      wsFoundWords.add(matched);
      cells.forEach(([r, c]) => {
        const el = wsGridEl.querySelector(`.ws-cell[data-r="${r}"][data-c="${c}"]`);
        if (el) el.classList.add("found");
      });
      const li = wsWordListEl.querySelector(`li[data-word="${matched}"]`);
      if (li) li.classList.add("found");
      wsFoundEl.textContent = wsFoundWords.size;
      playChime();
      wsMsgEl.textContent = `✅ Found "${wsPlacements[matched].display}"!`;
      wsMsgEl.className = "msg";
      if (wsHintedWord === matched) wsHintedWord = null;

      if (wsFoundWords.size === Object.keys(wsPlacements).length) {
        wsGameActive = false;
        clearInterval(wsTimerInterval);
        wsMsgEl.textContent = `🏆 All words found in ${wsTimerEl.textContent}! Amazing!`;
        wsMsgEl.className = "msg win";
        playSuccess();
      }
    } else {
      wsMsgEl.textContent = "❌ Not a word — try again!";
      wsMsgEl.className = "msg err";
      setTimeout(() => {
        if (wsMsgEl.textContent.startsWith("❌")) {
          wsMsgEl.textContent = "";
          wsMsgEl.className = "msg";
        }
      }, 1200);
    }
  }
  wsStart = wsEnd = null;
}

/* pointer handlers on the grid */
wsGridEl.addEventListener("pointerdown", (e) => {
  if (!wsGameActive) return;
  const cell = e.target.closest(".ws-cell");
  if (!cell) return;
  wsSelecting = true;
  wsStart = [+cell.dataset.r, +cell.dataset.c];
  wsEnd = wsStart;
  wsUpdateSelection();
  e.preventDefault();
});
wsGridEl.addEventListener("pointermove", (e) => {
  if (!wsSelecting) return;
  const cell = wsCellFromEvent(e);
  if (!cell) return;
  const rc = [+cell.dataset.r, +cell.dataset.c];
  if (!wsEnd || rc[0] !== wsEnd[0] || rc[1] !== wsEnd[1]) {
    wsEnd = rc;
    wsUpdateSelection();
  }
});
window.addEventListener("pointerup", () => {
  if (!wsSelecting) return;
  wsSelecting = false;
  wsFinalizeSelection();
});
window.addEventListener("pointercancel", () => {
  if (!wsSelecting) return;
  wsSelecting = false;
  document.querySelectorAll(".ws-cell.selecting").forEach(el =>
    el.classList.remove("selecting"));
  wsStart = wsEnd = null;
});

/* ---- timer ---- */
function wsFormatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}
function wsStartTimer() {
  clearInterval(wsTimerInterval);
  wsSeconds = 0;
  wsTimerEl.textContent = "00:00";
  wsTimerInterval = setInterval(() => {
    wsSeconds++;
    wsTimerEl.textContent = wsFormatTime(wsSeconds);
  }, 1000);
}

/* ---- init & buttons ---- */
function startWordSearch() {
  const result = wsGenerate();
  if (!result) {
    wsMsgEl.textContent = "Could not generate puzzle — please try again.";
    wsMsgEl.className = "msg err";
    return;
  }
  wsGrid = result.grid;
  wsPlacements = result.placements;
  wsFoundWords = new Set();
  wsHintedWord = null;
  wsStart = wsEnd = null;

  wsRender();
  wsRenderWordList();

  wsFoundEl.textContent = "0";
  wsTotalEl.textContent = Object.keys(wsPlacements).length;
  wsMsgEl.textContent = "";
  wsMsgEl.className = "msg";
  wsGameActive = true;
  wsStartTimer();
}

document.getElementById("wsNewBtn").addEventListener("click", () => {
  startWordSearch();
  playChime();
});

document.getElementById("wsHintBtn").addEventListener("click", () => {
  if (!wsGameActive) return;
  /* find an unfound word */
  const unfound = Object.keys(wsPlacements).filter(w => !wsFoundWords.has(w));
  if (unfound.length === 0) return;
  /* choose randomly */
  const word = unfound[Math.floor(Math.random() * unfound.length)];
  const cells = wsPlacements[word].cells;

  /* clear previous hint highlight */
  document.querySelectorAll(".ws-cell.hint").forEach(el => el.classList.remove("hint"));

  /* flash the first cell repeatedly */
  const [r, c] = cells[0].split(",").map(Number);
  const el = wsGridEl.querySelector(`.ws-cell[data-r="${r}"][data-c="${c}"]`);
  if (el) {
    el.classList.add("hint");
    wsHintedWord = word;
    wsMsgEl.textContent = `💡 Hint: "${wsPlacements[word].display}" starts at the flashing cell!`;
    wsMsgEl.className = "msg";
    setTimeout(() => el.classList.remove("hint"), 4000);
  }
});

/* initial builds (only when the tab is used, but build anyway so it's ready) */
buildCrossword();
startWordSearch();
wsGameActive = false;   /* start paused until the tab opens */
clearInterval(wsTimerInterval);