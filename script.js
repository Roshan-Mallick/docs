// ═══════════════════════════════════════════════════════════
//  ROSHAN DOCS — Main Script
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
//  DOM REFERENCES
// ═══════════════════════════════════════════════════════════

const sidebar = document.getElementById("sidebar");
const sidebarNav = document.getElementById("sidebarNav");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainEl = document.getElementById("main");
const heroSection = document.getElementById("heroSection");
const cardsGrid = document.getElementById("cardsGrid");
const articleView = document.getElementById("articleView");
const articleHeader = document.getElementById("articleHeader");
const articleBody = document.getElementById("articleBody");
const searchTrigger = document.getElementById("searchTrigger");
const searchOverlay = document.getElementById("searchOverlay");
const searchModalInput = document.getElementById("searchModalInput");
const searchModalResults = document.getElementById("searchModalResults");
const progressBar = document.getElementById("progressBar");
const backToTop = document.getElementById("backToTop");
const rightSidebar = document.getElementById("rightSidebar");
const toc = document.getElementById("toc");
const logoLink = document.getElementById("logoLink");
const themeSlider = document.getElementById("themeSlider");

let currentTopicId = null;
let currentArticleId = null;
let searchFocusIdx = -1;

// ═══════════════════════════════════════════════════════════
//  THEME SLIDER
// ═══════════════════════════════════════════════════════════

function hexToHSL(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToCSS(h, s, l) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function lerpHSL(a, b, t) {
  const h1 = a[0], s1 = a[1], l1 = a[2];
  const h2 = b[0], s2 = b[1], l2 = b[2];
  let dh = h2 - h1;
  if (dh > 180) dh -= 360;
  if (dh < -180) dh += 360;
  const h = (h1 + dh * t + 360) % 360;
  const s = s1 + (s2 - s1) * t;
  const l = l1 + (l2 - l1) * t;
  return hslToCSS(Math.round(h), Math.round(s), Math.round(l));
}

// 5-stop gradient: white → light grey → medium grey → dark grey → near black
const themeStops = {
  bg:          ["#FFFFFF", "#E8E9EC", "#B0B3B8", "#4A4D52", "#0F0F0F"],
  bgSurface:   ["#F6F7F9", "#DCDEE2", "#9DA1A6", "#3A3D42", "#1A1A1A"],
  bgCard:      ["#F6F7F9", "#DCDEE2", "#9DA1A6", "#3A3D42", "#1A1A1A"],
  bgHover:     ["#EDEDF0", "#CDD0D4", "#878B90", "#33363B", "#262626"],
  bgElevated:  ["#FFFFFF", "#E0E2E5", "#A0A4A9", "#42454A", "#1E1E1E"],
  border:      ["#E5E7EB", "#C5C8CC", "#7A7E84", "#3A3D42", "#2E2E2E"],
  borderStrong:["#D1D5DB", "#B0B4B9", "#6A6E74", "#505358", "#404040"],
  text:        ["#1A1A1A", "#3A3D42", "#707478", "#B0B4B9", "#E4E4E7"],
  textSecondary:["#6B7280", "#6B7078", "#8A8E94", "#909499", "#A1A1AA"],
  textMuted:   ["#6B7280", "#6A6E74", "#6E7278", "#707478", "#71717A"],
  colorHeading:["#0F172A", "#2A3040", "#606878", "#B0B8C8", "#F4F4F5"],
  codeBg:      ["#F4F4F5", "#D8DADE", "#989CA2", "#383B40", "#1E1E1E"],
  codeText:    ["#1E293B", "#2E3848", "#5A6270", "#A0A8B4", "#E4E4E7"],
  inlineCodeBg: ["#EEF0F4", "#D0D3D8", "#888C92", "#343740", "#262626"],
  inlineCodeText:["#374151", "#3E4448", "#707478", "#B0B4B8", "#D4D4D8"],
  progressBg:  ["#E5E7EB", "#C8CBD0", "#7C8086", "#373A3F", "#27272A"],
  scrollbar:   ["#D1D5DB", "#B2B6BB", "#727680", "#4C5058", "#3F3F46"],
  scrollbarHover:["#9CA3AF", "#8A8E94", "#6A6E74", "#5A5E64", "#52525B"],
};

const themeStopsHSL = {};
for (const key in themeStops) {
  themeStopsHSL[key] = themeStops[key].map(hexToHSL);
}

const shadowPairs = {
  sm: [0.06, 0.3],
  md: [0.08, 0.4],
  lg: [0.1, 0.5],
};

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpStops(stops, t) {
  const n = stops.length - 1;
  const idx = Math.min(Math.floor(t * n), n - 1);
  const local = (t * n) - idx;
  return lerpHSL(stops[idx], stops[idx + 1], local);
}

function applyTheme(value) {
  const t = value / 100;
  const root = document.documentElement;
  root.setAttribute("data-theme", t > 0.5 ? "dark" : "light");
  for (const key in themeStopsHSL) {
    const cssVar = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    root.style.setProperty(`--${cssVar}`, lerpStops(themeStopsHSL[key], t));
  }
  const sm = lerp(shadowPairs.sm[0], shadowPairs.sm[1], t);
  const md = lerp(shadowPairs.md[0], shadowPairs.md[1], t);
  const lg = lerp(shadowPairs.lg[0], shadowPairs.lg[1], t);
  root.style.setProperty("--shadow-sm", `0 1px 3px rgba(0,0,0,${sm})`);
  root.style.setProperty("--shadow-md", `0 4px 16px rgba(0,0,0,${md})`);
  root.style.setProperty("--shadow-lg", `0 8px 32px rgba(0,0,0,${lg})`);
  root.style.setProperty("--hero-gradient", `linear-gradient(135deg, rgba(250,110,9,${0.06 + t * 0.06}) 0%, rgba(250,110,9,${0.02 + t * 0.02}) 100%)`);
}

themeSlider.addEventListener("input", () => {
  applyTheme(parseInt(themeSlider.value));
  localStorage.setItem("roshan-theme", themeSlider.value);
});

// ═══════════════════════════════════════════════════════════
//  SIDEBAR
// ═══════════════════════════════════════════════════════════

function buildSidebar() {
  const docSection = document.createElement("div");
  docSection.className = "sidebar-section";
  docSection.innerHTML = '<div class="sidebar-section-title">Documentation</div>';

  docs.forEach((topic) => {
    const wrapper = document.createElement("div");

    const item = document.createElement("div");
    item.className = "sidebar-item";
    item.dataset.id = topic.id;

    const labelWrap = document.createElement("span");
    labelWrap.className = "sidebar-category-toggle";
    labelWrap.innerHTML = `<span>${topic.label}</span><span class="sidebar-arrow">&#9656;</span>`;

    item.appendChild(labelWrap);
    wrapper.appendChild(item);

    const children = document.createElement("div");
    children.className = "sidebar-children";

    topic.articles.forEach((article) => {
      const child = document.createElement("div");
      child.className = "sidebar-child";
      child.dataset.id = article.id;
      child.textContent = article.title;
      child.addEventListener("click", () => {
        openArticle(topic, article);
        closeSidebarMobile();
      });
      children.appendChild(child);
    });

    item.addEventListener("click", () => {
      const arrow = labelWrap.querySelector(".sidebar-arrow");
      const isOpen = children.classList.contains("open");
      document.querySelectorAll(".sidebar-children.open").forEach((c) => c.classList.remove("open"));
      document.querySelectorAll(".sidebar-arrow.open").forEach((a) => a.classList.remove("open"));
      if (!isOpen) {
        children.classList.add("open");
        arrow.classList.add("open");
        if (topic.articles.length > 0) {
          openArticle(topic, topic.articles[0]);
        }
      }
      closeSidebarMobile();
    });

    wrapper.appendChild(children);
    docSection.appendChild(wrapper);
  });

  sidebarNav.appendChild(docSection);
}

// ═══════════════════════════════════════════════════════════
//  HOME VIEW
// ═══════════════════════════════════════════════════════════

function showHome() {
  currentTopicId = null;
  currentArticleId = null;
  heroSection.style.display = "";
  document.getElementById("docCards").style.display = "";
  articleView.style.display = "none";
  rightSidebar.classList.remove("visible");
  document.querySelectorAll(".sidebar-item.active, .sidebar-child.active").forEach((el) => el.classList.remove("active"));
  window.scrollTo(0, 0);
}

// ═══════════════════════════════════════════════════════════
//  CARDS & ARTICLES
// ═══════════════════════════════════════════════════════════

function buildCards() {
  docs.forEach((topic) => {
    const card = document.createElement("div");
    card.className = "doc-card";
    card.innerHTML = `
      <div class="doc-card-header">
        <div class="doc-card-icon">${topic.icon}</div>
        <svg class="doc-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
      <div class="doc-card-title">${topic.label}</div>
      <div class="doc-card-desc">${topic.desc}</div>
      <div class="doc-card-tags">
        ${topic.tags.map((t) => `<span class="doc-card-tag">${t}</span>`).join("")}
      </div>
    `;
    card.addEventListener("click", () => {
      if (topic.articles.length > 0) openArticle(topic, topic.articles[0]);
    });
    cardsGrid.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════════
//  ARTICLE VIEW
// ═══════════════════════════════════════════════════════════

function openArticle(topic, article) {
  currentTopicId = topic.id;
  currentArticleId = article.id;

  heroSection.style.display = "none";
  document.getElementById("docCards").style.display = "none";
  articleView.style.display = "";

  const fullContent = article.content;
  articleHeader.innerHTML = `
    <button class="article-back" id="articleBack">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      Back to ${topic.label}
    </button>
  `;
  articleBody.innerHTML = fullContent;

  articleBody.querySelectorAll("pre").forEach((pre) => {
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    btn.addEventListener("click", () => {
      const code = pre.querySelector("code")?.textContent || pre.textContent;
      navigator.clipboard.writeText(code).then(() => {
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = "Copy"), 1500);
      });
    });
    pre.style.position = "relative";
    pre.appendChild(btn);
  });

  document.getElementById("articleBack")?.addEventListener("click", showHome);

  normalizeSortTree(articleBody);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => normalizeSortTree(articleBody));
  }
  initBucketViz(articleBody);
  initBucketSortViz(articleBody);
  initShellSortViz(articleBody);
  initSimpleSortViz(articleBody);
  initHeapSortViz(articleBody);
  initHeapTreeArt(articleBody);

  document.querySelectorAll(".sidebar-item.active, .sidebar-child.active").forEach((el) => el.classList.remove("active"));
  const sidebarTopic = document.querySelector(`.sidebar-item[data-id="${topic.id}"]`);
  if (sidebarTopic) {
    sidebarTopic.classList.add("active");
    const arrow = sidebarTopic.querySelector(".sidebar-arrow");
    const children = sidebarTopic.parentElement?.querySelector(".sidebar-children");
    if (children && !children.classList.contains("open")) {
      children.classList.add("open");
      arrow?.classList.add("open");
    }
  }
  const sidebarChild = document.querySelector(`.sidebar-child[data-id="${article.id}"]`);
  if (sidebarChild) sidebarChild.classList.add("active");

  buildTOC();
  window.scrollTo(0, 0);
}

function normalizeSortTree(root) {
  if (!root) return;
  const rows = Array.from(root.querySelectorAll(".st-row")).reverse();
  rows.forEach((row) => {
    const halves = Array.from(row.children);
    if (halves.length < 2) return;
    halves.forEach((h) => {
      h.style.width = "";
      h.style.flex = "";
    });
    const natural = halves.map((h) => h.getBoundingClientRect().width);
    const w = Math.max(...natural);
    halves.forEach((h) => {
      h.style.width = w + "px";
      h.style.flex = "0 0 " + w + "px";
    });
  });
}

// ═══════════════════════════════════════════════════════════
//  BUCKET SORT VISUALIZER (interactive)
// ═══════════════════════════════════════════════════════════

let bucketPlayTimer = null;

function initBucketViz(root) {
  if (bucketPlayTimer) {
    clearInterval(bucketPlayTimer);
    bucketPlayTimer = null;
  }
  if (!root) return;
  const wrap = root.querySelector("#bs-wrap");
  if (!wrap) return;
  let data;
  try {
    data = JSON.parse(wrap.dataset.array);
  } catch (e) {
    return;
  }
  if (!Array.isArray(data)) return;

  const PASSES = 3;
  const DIGITS = ["H", "T", "O"];
  const DIGIT_WORDS = ["hundreds", "tens", "ones"];
  const digitOf = (v, base) => Math.floor(v / base) % 10;
  const fmt = (a) => "[" + a.join(", ") + "]";
  const blankBuckets = () => Array.from({ length: 10 }, () => []);
  const copyBuckets = (b) => b.map((q) => q.slice());
  const tile = (v) => {
    const t = document.createElement("div");
    t.className = "bs-tile";
    t.textContent = v;
    return t;
  };

  // One snapshot per logical move. Each snapshot is a full REST state
  // (input cur, the ten queues, output out); navigation replays it. The
  // `move` field carries the animation info (what just left where).
  function buildBeats() {
    const beats = [];
    let cur = data.slice();
    let buckets = blankBuckets();
    let out = [];
    const push = (o) => beats.push(o);
    push({ cur: cur.slice(), buckets: copyBuckets(buckets), out: out.slice(),
           pass: 0, phase: "ready", move: null,
           text: "Ready — press Play or Step to distribute by the ones digit (O)" });
    for (let pass = 1; pass <= PASSES; pass++) {
      const base = Math.pow(10, pass - 1);
      const demand = cur.slice();
      for (const v of demand) {
        const b = digitOf(v, base);
        cur = cur.filter((x) => x !== v);
        buckets[b].push(v);
        push({ cur: cur.slice(), buckets: copyBuckets(buckets), out: out.slice(),
               pass, phase: "distribute", move: { type: "enter", value: v, bucket: b },
               text: `${v} \u2192 bucket ${b}  (${DIGIT_WORDS[PASSES - pass]} digit)` });
      }
      out = [];
      for (let b = 0; b < 10; b++) {
        while (buckets[b].length) {
          const v = buckets[b].shift();
          out.push(v);
          push({ cur: cur.slice(), buckets: copyBuckets(buckets), out: out.slice(),
                 pass, phase: "collect", move: { type: "leave", value: v, bucket: b },
                 text: `bucket ${b} \u2192 ${v}  (earliest in leaves first)` });
        }
      }
      cur = out.slice();
      push({ cur: cur.slice(), buckets: copyBuckets(buckets), out: [],
             pass, phase: "passEnd", move: null,
             text: `Pass ${pass} of 3 complete \u2014 ${fmt(cur)}` });
    }
    push({ cur: [], buckets: copyBuckets(buckets), out: cur.slice(),
           pass: PASSES, phase: "done", move: null,
           text: `Sorted \u2014 ${fmt(cur)}` });
    return beats;
  }

  const beats = buildBeats();
  let idx = 0;
  let lastDelta = 0;

  wrap.innerHTML = `
    <div class="bs-head">
      <div class="bs-status">
        <span class="bs-pass">Pass 0/3</span>
        <span class="bs-phase"></span>
      </div>
      <div class="bs-controls">
        <button class="bs-btn" data-bs="prev" title="Previous step">\u25c0 Step</button>
        <button class="bs-btn" data-bs="play" title="Play / Pause">\u25b6 Play</button>
        <button class="bs-btn" data-bs="next" title="Next step">Step \u25b6</button>
        <button class="bs-btn" data-bs="reset" title="Reset to start">\u27f2 Reset</button>
      </div>
    </div>
    <div class="bs-digits">
      ${DIGITS.map((d) => `<span class="bs-digit" data-d="${d}">${d} <em>${d === "H" ? "hundreds" : d === "T" ? "tens" : "ones"}</em></span>`).join("")}
    </div>
    <div class="bs-scene">
      <div class="bs-lane">
        <div class="bs-lane-label">Input array</div>
        <div class="bs-track" data-lane="input"></div>
      </div>
      <div class="bs-band">
        <div class="bs-band-label">Ten buckets 0–9 — each a FIFO queue
          <span class="bs-fifo">\u21e1 push on top · collect from bottom \u21e2</span>
        </div>
        <div class="bs-buckets"></div>
      </div>
      <div class="bs-lane">
        <div class="bs-lane-label">Output array</div>
        <div class="bs-track" data-lane="output"></div>
      </div>
    </div>
    <div class="bs-pipeline">
      <span class="bs-pp bs-pp--in">Input</span><span class="bs-pp-arrow">\u2192</span>
      <span class="bs-pp bs-pp--dist">Bucket Distribution</span><span class="bs-pp-arrow">\u2192</span>
      <span class="bs-pp bs-pp--coll">FIFO Collection</span><span class="bs-pp-arrow">\u2192</span>
      <span class="bs-pp bs-pp--out">Output</span>
    </div>`;

  const inputTrack = wrap.querySelector('[data-lane="input"]');
  const outTrack = wrap.querySelector('[data-lane="output"]');
  const bucketsEl = wrap.querySelector(".bs-buckets");
  const passEl = wrap.querySelector(".bs-pass");
  const phaseEl = wrap.querySelector(".bs-phase");

  function render() {
    const beat = beats[idx];
    const prev = beats[Math.max(0, idx - 1)];
    const fly = lastDelta === 1;
    const move = beat.move;
    bucketsEl.innerHTML = "";
    inputTrack.innerHTML = "";
    outTrack.innerHTML = "";

    const showInput = fly && move && move.type === "enter" ? prev.cur : beat.cur;
    showInput.forEach((v) => {
      const t = tile(v);
      if (fly && move && move.type === "enter" && v === move.value) {
        t.classList.add("bs-tile--depart");
      }
      inputTrack.appendChild(t);
    });

    beat.buckets.forEach((q, b) => {
      const active = move && move.bucket === b && (beat.phase === "distribute" || beat.phase === "collect");
      const col = document.createElement("div");
      col.className = "bs-bucket" + (active ? " bs-bucket--active" : "");
      col.dataset.b = b;
      const stack = document.createElement("div");
      stack.className = "bs-bucket-stack";
      q.forEach((v) => {
        const t = tile(v);
        t.classList.add("bs-tile--bucket");
        if (fly && move && move.type === "enter" && move.bucket === b && v === move.value) {
          t.classList.add("bs-tile--arrive");
        }
        stack.appendChild(t);
      });
      if (fly && move && move.type === "leave" && move.bucket === b) {
        const d = tile(move.value);
        d.classList.add("bs-tile--depart", "bs-tile--bucket");
        stack.insertBefore(d, stack.firstChild);
      }
      if (stack.childElementCount === 0) {
        const ph = document.createElement("div");
        ph.className = "bs-bucket-empty";
        ph.textContent = "\u2013";
        stack.appendChild(ph);
      }
      col.appendChild(stack);
      const num = document.createElement("div");
      num.className = "bs-bucket-num";
      num.textContent = b;
      col.appendChild(num);
      bucketsEl.appendChild(col);
    });

    beat.out.forEach((v, i) => {
      const t = tile(v);
      if (fly && move && move.type === "leave" && i === beat.out.length - 1) {
        t.classList.add("bs-tile--arrive");
      }
      outTrack.appendChild(t);
    });

    // drop distances, measured once per render (input band → bucket band,
    // bucket band → output track)
    const gapIn = Math.max(24, inputTrack.getBoundingClientRect().bottom - bucketsEl.getBoundingClientRect().top);
    const gapOut = Math.max(24, bucketsEl.getBoundingClientRect().bottom - outTrack.getBoundingClientRect().top);
    bucketsEl.querySelectorAll(".bs-tile--arrive").forEach((t) => t.style.setProperty("--drop", "-" + gapIn + "px"));
    outTrack.querySelectorAll(".bs-tile--arrive").forEach((t) => t.style.setProperty("--drop", "-" + gapOut + "px"));

    // status text, digit highlight, pipeline phase
    const dn = beat.pass > 0 && (beat.phase === "distribute" || beat.phase === "collect") ? DIGITS[PASSES - beat.pass] : null;
    wrap.querySelectorAll(".bs-digit").forEach((el) => {
      el.classList.toggle("bs-digit--active", el.dataset.d === dn);
    });
    passEl.textContent = "Pass " + beat.pass + "/" + PASSES + " · step " + idx + "/" + (beats.length - 1);
    phaseEl.textContent = beat.text;
    wrap.querySelectorAll(".bs-pp").forEach((el) => el.classList.remove("bs-pp--active"));
    if (beat.phase === "distribute") { wrap.querySelector(".bs-pp--in").classList.add("bs-pp--active"); wrap.querySelector(".bs-pp--dist").classList.add("bs-pp--active"); }
    else if (beat.phase === "collect") { wrap.querySelector(".bs-pp--coll").classList.add("bs-pp--active"); }
    if (beat.out.length) wrap.querySelector(".bs-pp--out").classList.add("bs-pp--active");

    const prevBtn = wrap.querySelector('[data-bs="prev"]');
    const nextBtn = wrap.querySelector('[data-bs="next"]');
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === beats.length - 1;
  }

  function step(d) {
    const n = Math.min(beats.length - 1, Math.max(0, idx + d));
    lastDelta = d > 0 ? 1 : d < 0 ? -1 : 0;
    idx = n;
    render();
  }

  function togglePlay() {
    const btn = wrap.querySelector('[data-bs="play"]');
    if (bucketPlayTimer) {
      clearInterval(bucketPlayTimer);
      bucketPlayTimer = null;
      btn.textContent = "\u25b6 Play";
      return;
    }
    if (idx === beats.length - 1) { idx = 0; lastDelta = 0; render(); }
    btn.textContent = "\u23f8 Pause";
    bucketPlayTimer = setInterval(() => {
      if (!wrap.isConnected) {
        clearInterval(bucketPlayTimer);
        bucketPlayTimer = null;
        return;
      }
      if (idx >= beats.length - 1) {
        clearInterval(bucketPlayTimer);
        bucketPlayTimer = null;
        btn.textContent = "\u25b6 Play";
        return;
      }
      lastDelta = 1;
      idx++;
      render();
    }, 1350);
  }

  wrap.querySelector('[data-bs="prev"]').addEventListener("click", () => step(-1));
  wrap.querySelector('[data-bs="next"]').addEventListener("click", () => step(1));
  wrap.querySelector('[data-bs="play"]').addEventListener("click", togglePlay);
  wrap.querySelector('[data-bs="reset"]').addEventListener("click", () => {
    clearInterval(bucketPlayTimer);
    bucketPlayTimer = null;
    wrap.querySelector('[data-bs="play"]').textContent = "\u25b6 Play";
    idx = 0;
    lastDelta = 0;
    render();
  });

  render();
}

// ═══════════════════════════════════════════════════════════
//  BUCKET SORT VISUALIZER (interactive)
//  value → bucket range → bucket → insertion sort inside each →
//  concatenation left→right → sorted array
//  Two methods, both derived from the real algorithm:
//    Fixed-width: idx = ⌊(v − min) ÷ width⌋   width = ⌈(max−min) ÷ k⌉
//    Fixed-count: idx = ⌊(v − min) × k ÷ (max − min + 1)⌋
//  Every beat snapshot is produced by an actual run of the bucket-sort
//  simulation, so the animation can never disagree with the math.
// ═══════════════════════════════════════════════════════════

let bkPlayTimer = null;

function initBucketSortViz(root) {
  if (bkPlayTimer) {
    clearInterval(bkPlayTimer);
    bkPlayTimer = null;
  }
  if (!root) return;
  const wrap = root.querySelector("#bucket-wrap");
  if (!wrap) return;
  let data;
  try {
    data = JSON.parse(wrap.dataset.array);
  } catch (e) {
    return;
  }
  if (!Array.isArray(data) || data.length === 0) return;

  const PRESETS = [
    [7, 45, 250, 4790],
    [29, 15, 43, 7, 88, 61, 34],
    [48, 12, 73, 5, 89, 31, 77, 16, 58, 95, 24, 42],
    [4, 2, 9, 1, 3]
  ];
  const METHOD_KEY = "bkMethod";
  const clampNum = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const fmt = (a) => "[" + a.join(", ") + "]";
  const arrayEquals = (a, b) =>
    Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((x, i) => x === b[i]);
  const tile = (v) => {
    const t = document.createElement("div");
    t.className = "bs-tile";
    t.textContent = v;
    return t;
  };
  const rangeText = (r) => r.lo + "\u2013" + r.hi;
  const methodLabel = (m) => (m === "count" ? "Fixed-Count" : "Fixed-Width");

  // ── bucket plan: dynamic bucket count + ranges from the data ─────
  function makePlan(array, m) {
    const min = Math.min(...array);
    const max = Math.max(...array);
    const span = max - min;
    const kTarget = clampNum(Math.round(Math.sqrt(2 * array.length)), 4, 10);
    let nb, width, idxOf, ranges;
    if (span === 0) {
      nb = 1;
      width = 1;
      ranges = [{ lo: min, hi: max }];
      idxOf = () => 0;
    } else if (m === "width") {
      width = Math.max(1, Math.ceil(span / kTarget));
      const last = Math.floor(span / width);
      nb = last + 1;
      ranges = [];
      for (let b = 0; b < nb; b++) {
        ranges.push({
          lo: min + b * width,
          hi: b === nb - 1 ? max : min + (b + 1) * width - 1
        });
      }
      idxOf = (v) => Math.floor((v - min) / width);
    } else {
      nb = kTarget;
      const den = span + 1;
      ranges = [];
      for (let b = 0; b < nb; b++) {
        ranges.push({
          lo: min + Math.ceil((b * den) / nb),
          hi: b === nb - 1 ? max : min + Math.ceil(((b + 1) * den) / nb) - 1
        });
      }
      idxOf = (v) => Math.floor(((v - min) * nb) / den);
    }
    return { m, min, max, span, width, nb, ranges, idxOf };
  }

  const formula = (pl, v, b) =>
    pl.m === "width"
      ? "\u230a(" + v + " \u2212 " + pl.min + ") \u00f7 " + pl.width + "\u230b = " + b
      : "\u230a(" + v + " \u2212 " + pl.min + ") \u00d7 " + pl.nb + " \u00f7 " + (pl.span + 1) + "\u230b = " + b;

  // ── one REST snapshot per logical move, straight from the run ────
  function buildBeats(pl) {
    const beats = [];
    const cur = data.slice();
    const buckets = Array.from({ length: pl.nb }, () => []);
    const out = [];
    const snap = (phase, meta, text) =>
      beats.push({ cur: cur.slice(), buckets: buckets.map((x) => x.slice()), out: out.slice(), phase, meta, text });

    snap("ready", { type: "ready" }, "Starting Bucket Sort \u2014 " + methodLabel(pl.m) + " buckets. Press Play, or Step to begin.");
    snap("plan", { type: "minmax" }, "Step 1/2 of the bucket plan \u2014 Minimum = " + pl.min + " \u00b7 Maximum = " + pl.max);
    snap("plan", { type: "plan" },
      pl.m === "width"
        ? "Bucket ranges \u2014 " + pl.nb + " buckets, width " + pl.width + " each: min/min\u2192bucket 0, max\u2192bucket " + (pl.nb - 1)
        : "Bucket ranges \u2014 " + pl.nb + " equally sized buckets over " + (pl.span + 1) + " distinct values");

    // distribution: every value one at a time (calculation beat, then entry)
    for (const v of data) {
      const b = pl.idxOf(v);
      snap("distribute", { type: "calc", value: v, bucket: b, op: formula(pl, v, b) },
        v + " \u2192 Bucket " + b + "   " + formula(pl, v, b));
      const pos = cur.indexOf(v);
      cur.splice(pos, 1);
      buckets[b].push(v);
      snap("distribute", { type: "enter", value: v, bucket: b, op: "insert into " + rangeText(pl.ranges[b]) },
        "Insert " + v + " into Bucket " + b + "  (range " + rangeText(pl.ranges[b]) + ")");
    }
    snap("distributed", { type: "distributed", op: "all buckets populated" },
      "Distribution complete \u2014 every value sits inside its bucket; empty buckets stay visible.");

    // internal sort: insertion sort per non-empty bucket, one move per beat
    for (let b = 0; b < pl.nb; b++) {
      const arr = buckets[b];
      if (arr.length === 0) continue;
      snap("sort", { type: "sortStart", bucket: b, op: "insertion sort" },
        "Sorting Bucket " + b + " \u2014 before " + fmt(arr) + " (insertion sort)");
      for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i;
        snap("sort", { type: "sortHold", bucket: b, key, gap: j, op: "hold " + key + ", sorted part " + fmt(arr.slice(0, j)) },
          "Bucket " + b + " \u2014 hold " + key + ", compare with the sorted part " + fmt(arr.slice(0, j)));
        while (j > 0 && arr[j - 1] > key) {
          const left = arr[j - 1];
          arr[j] = left;
          j--;
          snap("sort", { type: "sortShift", bucket: b, key, gap: j, movedTo: j + 1,
                          op: key + " < " + left + " \u2192 shift " + left + " right" },
            "Bucket " + b + ": " + key + " < " + left + " \u2192 shift " + left + " right");
        }
        arr[j] = key;
        snap("sort", { type: "sortPlace", bucket: b, key, gap: j, op: "insert " + key + " at position " + j },
          "Insert " + key + " at position " + j + " \u2192 Bucket " + b + " = " + fmt(arr));
      }
      snap("sort", { type: "sortDone", bucket: b, op: "done" },
        "Bucket " + b + " sorted \u2014 " + fmt(arr));
    }

    // concatenation: buckets left → right into the output array
    snap("concat", { type: "concat", op: "left \u2192 right" },
      "Concatenate the buckets from left to right into the output array.");
    for (let b = 0; b < pl.nb; b++) {
      while (buckets[b].length) {
        const v = buckets[b].shift();
        snap("concat", { type: "leave", value: v, bucket: b, op: "leftmost value leaves first" },
          "Bucket " + b + " \u2192 " + v + "  (leftmost value leaves first)");
        out.push(v);
        snap("concat", { type: "enter", value: v, bucket: b, op: "appended to output" },
          v + " appended to output \u2014 " + fmt(out));
      }
    }
    snap("done", { type: "done", op: "complete" }, "Bucket Sort Complete \u2014 " + fmt(out));
    return beats;
  }

  // ── state ────────────────────────────────────────────────────────
  let method = "width";
  try {
    method = localStorage.getItem(METHOD_KEY) === "count" ? "count" : "width";
  } catch (e) { /* ignore */ }
  let plan = makePlan(data, method);
  let beats = buildBeats(plan);
  let idx = 0;
  let lastDelta = 0;

  const STAGE_MAP = { ready: 0, plan: 1, distribute: 2, distributed: 2, sort: 3, concat: 4, done: 5 };
  const STAGES = ["Input", "Bucket Plan", "Distribution", "Sort Inside", "Concatenation", "Output"];

  wrap.innerHTML =
    '<div class="bs-head">' +
      '<div class="bs-status">' +
        '<span class="bk-step"></span>' +
        '<span class="bs-phase"></span>' +
      "</div>" +
      '<div class="bs-controls">' +
        '<button class="bs-btn" data-bs="prev" title="Previous step">\u25c0 Step</button>' +
        '<button class="bs-btn" data-bs="play" title="Play / Pause">\u25b6 Play</button>' +
        '<button class="bs-btn" data-bs="next" title="Next step">Step \u25b6</button>' +
        '<button class="bs-btn" data-bs="reset" title="Reset to start">\u27f2 Reset</button>' +
      "</div>" +
    "</div>" +
    '<div class="bk-bar">' +
      '<div class="bk-methods">' +
        '<span class="bk-bar-label">Method</span>' +
        '<button class="bk-method" data-method="width">Fixed-Width</button>' +
        '<button class="bk-method" data-method="count">Fixed-Count</button>' +
      "</div>" +
      '<div class="bk-arrays">' +
        '<span class="bk-bar-label">Array</span>' +
        '<select class="bk-array" aria-label="Input array">' +
        PRESETS.map((p, i) =>
          '<option value="' + i + '"' + (arrayEquals(p, data) ? " selected" : "") + ">" + fmt(p) + "</option>"
        ).join("") +
        "</select>" +
      "</div>" +
    "</div>" +
    '<div class="bk-params">' +
      '<span class="bk-params-min"></span><span class="bk-params-max"></span>' +
      '<span class="bk-params-count"></span><span class="bk-params-method"></span>' +
    "</div>" +
    '<div class="bs-scene bk-scene">' +
      '<div class="bs-lane">' +
        '<div class="bs-lane-label">Input array</div>' +
        '<div class="bs-track" data-lane="input"></div>' +
      "</div>" +
      '<div class="bk-focus"></div>' +
      '<div class="bk-band">' +
        '<div class="bk-band-label">Buckets \u2014 each an ordered range; values drop inside, then sort in place' +
          '<span class="bs-fifo">distribute \u00b7 sort inside \u00b7 concatenate</span>' +
        "</div>" +
        '<div class="bk-buckets"></div>' +
      "</div>" +
      '<div class="bs-lane">' +
        '<div class="bs-lane-label">Output array</div>' +
        '<div class="bs-track" data-lane="output"></div>' +
      "</div>" +
    "</div>" +
    '<div class="bs-pipeline">' +
    STAGES.map((st, i) => '<span class="bs-pp" data-stage="' + i + '">' + st + "</span>").join('<span class="bs-pp-arrow">\u2192</span>') +
    "</div>";

  const inputTrack = wrap.querySelector('[data-lane="input"]');
  const outTrack = wrap.querySelector('[data-lane="output"]');
  const bucketsEl = wrap.querySelector(".bk-buckets");
  const stepEl = wrap.querySelector(".bk-step");
  const phaseEl = wrap.querySelector(".bs-phase");
  const focusEl = wrap.querySelector(".bk-focus");

  // ── render one beat ──────────────────────────────────────────────
  function render() {
    const beat = beats[idx];
    const prev = beats[Math.max(0, idx - 1)];
    const fly = lastDelta === 1;
    const meta = beat.meta || {};
    bucketsEl.innerHTML = "";
    inputTrack.innerHTML = "";
    outTrack.innerHTML = "";
    focusEl.innerHTML = "";

    // input lane
    const showIn = fly && meta.type === "enter" ? prev.cur : beat.cur;
    showIn.forEach((v) => {
      const t = tile(v);
      if (meta.type === "calc" && v === meta.value) t.classList.add("bk-current");
      if (fly && meta.type === "enter" && v === meta.value) t.classList.add("bs-tile--depart");
      inputTrack.appendChild(t);
    });

    // buckets
    beat.buckets.forEach((arr, b) => {
      const isSorting = beat.phase === "sort" && meta.bucket === b;
      const col = document.createElement("div");
      col.className = "bk-bucket" + (isSorting ? " bk-bucket--active" : "");
      col.dataset.b = b;

      const head = document.createElement("div");
      head.className = "bk-bucket-head";
      const num = document.createElement("span");
      num.className = "bk-bucket-num";
      num.textContent = "Bucket " + b;
      const rge = document.createElement("span");
      rge.className = "bk-bucket-range";
      rge.textContent = rangeText(plan.ranges[b]);
      head.appendChild(num);
      head.appendChild(rge);
      col.appendChild(head);

      const box = document.createElement("div");
      box.className = "bk-bucket-box" + (arr.length === 0 ? " bk-bucket-box--empty" : "");
      arr.forEach((v, i) => {
        const t = tile(v);
        t.classList.add("bk-slot");
        if (fly && meta.type === "enter" && meta.bucket === b && v === meta.value) {
          t.classList.add("bs-tile--arrive");
        }
        if (isSorting && (meta.type === "sortHold" || meta.type === "sortShift" || meta.type === "sortPlace") && meta.gap === i) {
          t.classList.add("bk-slot--key");
          if (meta.type !== "sortHold") t.textContent = meta.key;
        }
        if (isSorting && meta.type === "sortShift" && meta.movedTo === i) {
          t.classList.add("bk-slot--moved");
        }
        box.appendChild(t);
      });
      if (fly && meta.type === "leave" && meta.bucket === b) {
        const d = tile(meta.value);
        d.classList.add("bs-tile--depart");
        box.insertBefore(d, box.firstChild);
      }
      if (box.childElementCount === 0) {
        const ph = document.createElement("div");
        ph.className = "bs-bucket-empty";
        ph.textContent = "\u2013";
        box.appendChild(ph);
      }
      box.classList.toggle("bk-bucket-box--glow", isSorting);
      col.appendChild(box);
      bucketsEl.appendChild(col);
    });

    // output lane
    beat.out.forEach((v, i) => {
      const t = tile(v);
      if (fly && meta.type === "enter" && i === beat.out.length - 1) t.classList.add("bs-tile--arrive");
      outTrack.appendChild(t);
    });

    // drop distances (input → bucket, bucket → output), same as radix
    const gapIn = Math.max(24, inputTrack.getBoundingClientRect().bottom - bucketsEl.getBoundingClientRect().top);
    const gapOut = Math.max(24, bucketsEl.getBoundingClientRect().bottom - outTrack.getBoundingClientRect().top);
    bucketsEl.querySelectorAll(".bs-tile--arrive").forEach((t) => t.style.setProperty("--drop", "-" + gapIn + "px"));
    outTrack.querySelectorAll(".bs-tile--arrive").forEach((t) => t.style.setProperty("--drop", "-" + gapOut + "px"));

    // focus strip — the "what is happening now" line
    const mk = (cls, txt) => { const s = document.createElement("span"); s.className = cls; s.textContent = txt; return s; };
    if (beat.phase === "distribute") {
      focusEl.appendChild(mk("bk-focus-arrow", "\u25bc"));
      focusEl.appendChild(mk("bk-focus-val", String(meta.value)));
      focusEl.appendChild(mk("bk-focus-arrow", "\u25bc"));
      focusEl.appendChild(mk("bk-focus-calc", formula(plan, meta.value, meta.bucket)));
      focusEl.appendChild(mk("bk-focus-arrow", "\u25bc"));
      focusEl.appendChild(mk("bk-focus-dest", "Bucket " + meta.bucket + " \u00b7 " + rangeText(plan.ranges[meta.bucket])));
    } else if (beat.phase === "sort") {
      focusEl.appendChild(mk("bk-focus-tag", "BUCKET " + meta.bucket));
      focusEl.appendChild(mk("bk-focus-op", String(meta.op || "")));
    } else if (beat.phase === "concat" && (meta.type === "leave" || meta.type === "enter")) {
      focusEl.appendChild(mk("bk-focus-tag", "CONCAT"));
      focusEl.appendChild(mk("bk-focus-calc", "Bucket " + meta.bucket + " \u2192 " + meta.value));
      focusEl.appendChild(mk("bk-focus-op", "\u2192 Output"));
    } else if (beat.phase === "plan") {
      focusEl.appendChild(mk("bk-focus-tag", methodLabel(plan.m).toUpperCase()));
      focusEl.appendChild(mk("bk-focus-op", "Buckets: " + plan.nb + (plan.m === "width" ? " \u00b7 width " + plan.width : " \u00b7 " + (plan.span + 1) + " values across " + plan.nb + " ranges")));
    } else if (beat.phase === "done") {
      focusEl.appendChild(mk("bk-focus-tag", "\u2713 DONE"));
      focusEl.appendChild(mk("bk-focus-op", "Bucket Sort Complete"));
    } else if (beat.phase === "ready") {
      focusEl.appendChild(mk("bk-focus-op", "Press \u25b6 Play or Step to begin"));
    } else {
      focusEl.appendChild(mk("bk-focus-op", String(meta.op || beat.text)));
    }

    // status line, pipeline stage, params
    wrap.querySelectorAll(".bs-pp").forEach((el) => {
      el.classList.toggle("bs-pp--active", Number(el.dataset.stage) === STAGE_MAP[beat.phase]);
    });
    stepEl.textContent = "Step " + idx + " / " + (beats.length - 1) + " \u00b7 " + methodLabel(plan.m) + " Buckets";
    phaseEl.textContent = beat.text;

    wrap.querySelector(".bk-params-min").innerHTML = "Min <b>" + plan.min + "</b>";
    wrap.querySelector(".bk-params-max").innerHTML = "Max <b>" + plan.max + "</b>";
    wrap.querySelector(".bk-params-count").innerHTML = "Buckets <b>" + plan.nb + "</b>";
    wrap.querySelector(".bk-params-method").innerHTML =
      plan.m === "width" ? "Width <b>" + plan.width + "</b>" : "Range <b>" + (plan.span + 1) + "</b>";

    wrap.querySelector('[data-bs="prev"]').disabled = idx === 0;
    wrap.querySelector('[data-bs="next"]').disabled = idx === beats.length - 1;
  }

  function step(d) {
    const n = Math.min(beats.length - 1, Math.max(0, idx + d));
    lastDelta = d > 0 ? 1 : d < 0 ? -1 : 0;
    idx = n;
    render();
  }

  function togglePlay() {
    const btn = wrap.querySelector('[data-bs="play"]');
    if (bkPlayTimer) {
      clearInterval(bkPlayTimer);
      bkPlayTimer = null;
      btn.textContent = "\u25b6 Play";
      return;
    }
    if (idx === beats.length - 1) { idx = 0; lastDelta = 0; render(); }
    btn.textContent = "\u23f8 Pause";
    bkPlayTimer = setInterval(() => {
      if (!wrap.isConnected) {
        clearInterval(bkPlayTimer);
        bkPlayTimer = null;
        return;
      }
      if (idx >= beats.length - 1) {
        clearInterval(bkPlayTimer);
        bkPlayTimer = null;
        btn.textContent = "\u25b6 Play";
        return;
      }
      lastDelta = 1;
      idx++;
      render();
    }, 1350);
  }

  function rebuild(m) {
    clearInterval(bkPlayTimer);
    bkPlayTimer = null;
    wrap.querySelector('[data-bs="play"]').textContent = "\u25b6 Play";
    method = m;
    try { localStorage.setItem(METHOD_KEY, m); } catch (e) { /* ignore */ }
    plan = makePlan(data, method);
    beats = buildBeats(plan);
    idx = 0;
    lastDelta = 0;
    wrap.querySelectorAll(".bk-method").forEach((b) =>
      b.classList.toggle("bk-method--on", b.dataset.method === m));
    render();
  }

  wrap.querySelector('[data-bs="prev"]').addEventListener("click", () => step(-1));
  wrap.querySelector('[data-bs="next"]').addEventListener("click", () => step(1));
  wrap.querySelector('[data-bs="play"]').addEventListener("click", togglePlay);
  wrap.querySelector('[data-bs="reset"]').addEventListener("click", () => {
    clearInterval(bkPlayTimer);
    bkPlayTimer = null;
    wrap.querySelector('[data-bs="play"]').textContent = "\u25b6 Play";
    idx = 0;
    lastDelta = 0;
    render();
  });
  wrap.querySelectorAll(".bk-method").forEach((b) =>
    b.addEventListener("click", () => rebuild(b.dataset.method)));
  wrap.querySelector(".bk-array").addEventListener("change", (e) => {
    const p = PRESETS[Number(e.target.value)];
    if (!p) return;
    data = p.slice();
    wrap.dataset.array = JSON.stringify(data);
    plan = makePlan(data, method);
    beats = buildBeats(plan);
    idx = 0;
    lastDelta = 0;
    render();
  });

  render();
}
// ═══════════════════════════════════════════════════════════
//  SHELL SORT VISUALIZER (interactive)
//  ARRAY → GAP → GROUPS → INSERTION SORT INSIDE EACH GROUP →
//  RECONSTRUCT ARRAY (original indices) → REDUCE GAP → next
//  pass … → FINAL SORTED ARRAY (gap = 1 pass, then done)
//  Gap sequence: floor(n/2), floor(gap/2), … , 1
//  Every beat snapshot is produced by a real Shell Sort run,
//  so the animation can never disagree with the algorithm.
// ═══════════════════════════════════════════════════════════

let shPlayTimer = null;

function initShellSortViz(root) {
  if (shPlayTimer) {
    clearInterval(shPlayTimer);
    shPlayTimer = null;
  }
  if (!root) return;
  const wrap = root.querySelector("#shell-wrap");
  if (!wrap) return;
  let data;
  try {
    data = JSON.parse(wrap.dataset.array);
  } catch (e) {
    return;
  }
  if (!Array.isArray(data) || data.length === 0) return;

  const PRESETS = [
    [7, 3, 4, 8, 13, 11, 9, 1],
    [19, 10, 8, 17, 9, 12, 3, 15, 2, 6],
    [66, 43, 89, 23, 11, 72, 5, 90, 38, 60, 27, 77],
    [34, 8, 64, 51, 32, 21],
    [5, 4, 3, 2, 1]
  ];
  const clampNum = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const fmt = (a) => "[" + a.join(", ") + "]";
  const fmtIdx = (a) => a.join("\u2192");
  const arrEquals = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
  const clone2 = (m) => m.map((r) => r.slice());
  const tile = (v) => {
    const t = document.createElement("div");
    t.className = "bs-tile";
    t.textContent = v;
    return t;
  };
  const arrayCell = (v, i) =>
    '<div class="sh-cell" data-i="' + i + '"><div class="sh-cell-val">' + v +
    '</div><div class="sh-cell-idx">' + i + "</div></div>";

  // ── the real algorithm, one REST snapshot per logical move ──────
  function buildBeats(d0) {
    const n = d0.length;
    const gaps = [];
    for (let g = Math.floor(n / 2); g >= 1; g = Math.floor(g / 2)) gaps.push(g);
    const P = gaps.length;
    const beats = [];
    let arr = d0.slice();

    beats.push({
      arr: arr.slice(), groups: [], idxs: [], pass: 0, gap: gaps[0], groupsCount: 0,
      groupIdx: -1, phase: "ready", meta: { type: "ready" },
      text: "Shell Sort visualizer \u2014 array ready. Press Play, or Step to begin."
    });

    gaps.forEach((gap, pi) => {
      const pass = pi + 1;
      const gCount = Math.min(gap, n);
      const idxs = [], groups = [];
      for (let s = 0; s < gCount; s++) {
        const gi = [];
        for (let i = s; i < n; i += gap) gi.push(i);
        idxs.push(gi);
        groups.push(gi.map((i) => arr[i]));
      }
      const push = (phase, meta, groupIdx, text) =>
        beats.push({
          arr: arr.slice(), groups: clone2(groups), idxs: clone2(idxs),
          pass, gap, groupsCount: gCount, groupIdx, phase, meta, text
        });

      push("gap", { type: "passStart" }, -1,
        "Pass " + pass + " of " + P + " \u2014 Gap = " + gap + " creates " + gCount + " groups");

      for (let k = 0; k < gCount; k++) {
        push("groups", { type: "group" }, k,
          "Group " + (k + 1) + " \u2014 indices " + fmtIdx(idxs[k]) + "  \u00b7  values " + fmt(groups[k]));
      }

      for (let k = 0; k < gCount; k++) {
        const gv = groups[k];
        if (gv.length <= 1) {
          push("sort", { type: "gDone1" }, k, "Group " + (k + 1) + " \u2014 single value, nothing to sort");
          continue;
        }
        push("sort", { type: "gSortStart" }, k,
          "Insertion sort Group " + (k + 1) + " \u2014 " + fmt(gv) + " (gap " + gap + ")");
        for (let i = 1; i < gv.length; i++) {
          const key = gv[i];
          let j = i;
          push("sort", { type: "key", key, pos: j }, k,
            "Group " + (k + 1) + ": hold " + key + " \u2014 sorted part " + fmt(gv.slice(0, j)));
          while (j > 0 && gv[j - 1] > key) {
            const big = gv[j - 1];
            push("sort", { type: "cmp", key, pos: j - 1, act: "shift" }, k,
              "Group " + (k + 1) + ": compare " + key + " with " + big + " \u2014 " + big + " > " + key + " \u2192 shift " + big + " right");
            gv[j] = gv[j - 1];
            j--;
            push("sort", { type: "shift", key, big, from: j, to: j + 1 }, k,
              "Group " + (k + 1) + ": shift " + big + " right \u2192 " + fmt(gv));
          }
          if (j > 0) {
            push("sort", { type: "cmp", key, pos: j - 1, act: "stop" }, k,
              "Group " + (k + 1) + ": compare " + key + " with " + gv[j - 1] + " \u2014 " + key + " \u2265 " + gv[j - 1] + " \u2192 stop");
          }
          gv[j] = key;
          push("sort", { type: "place", key, pos: j }, k,
            "Group " + (k + 1) + ": insert " + key + " at position " + j + " \u2192 " + fmt(gv));
        }
        push("sort", { type: "gDone" }, k,
          "Group " + (k + 1) + " sorted \u2014 " + fmt(gv));
      }

      for (let k = 0; k < gCount; k++) {
        const gi = idxs[k], gv = groups[k];
        gi.forEach((idxIn, m) => { arr[idxIn] = gv[m]; });
        push("reconstruct", { type: "reconstruct", idxs: gi.slice(), vals: gv.slice() }, k,
          "Reconstructing array \u2014 write Group " + (k + 1) + " " + fmt(gv) + " back to indices " + fmtIdx(gi));
      }

      const nextGap = pi === P - 1 ? null : Math.floor(gap / 2);
      push("reduce", { type: "passDone", nextGap }, -1,
        nextGap === null
          ? "Pass " + pass + " complete \u2014 array " + fmt(arr) + " (final gap = 1)"
          : "Pass " + pass + " complete \u2014 array " + fmt(arr) + "  \u00b7  next gap = " + nextGap);
    });

    beats.push({
      arr: arr.slice(), groups: [], idxs: [], pass: P, gap: 1, groupsCount: 0,
      groupIdx: -1, phase: "done", meta: { type: "done" },
      text: "Shell Sort Complete \u2014 " + fmt(arr)
    });
    return beats;
  }

  // ── state ────────────────────────────────────────────────────────
  let beats = buildBeats(data);
  let idx = 0;
  let lastDelta = 0;

  const STAGE_MAP = { ready: 0, gap: 1, groups: 2, sort: 3, reconstruct: 4, reduce: 5, done: 6 };
  const STAGES = ["Array", "Gap", "Groups", "Sort Groups", "Reconstruct", "Reduce Gap", "Sorted"];

  wrap.innerHTML =
    '<div class="bs-head">' +
      '<div class="bs-status">' +
        '<span class="bk-step"></span>' +
        '<span class="bs-phase"></span>' +
      "</div>" +
      '<div class="bs-controls">' +
        '<button class="bs-btn" data-bs="prev" title="Previous step">\u25c0 Step</button>' +
        '<button class="bs-btn" data-bs="play" title="Play / Pause">\u25b6 Play</button>' +
        '<button class="bs-btn" data-bs="next" title="Next step">Step \u25b6</button>' +
        '<button class="bs-btn" data-bs="reset" title="Reset to start">\u27f2 Reset</button>' +
      "</div>" +
    "</div>" +
    '<div class="bk-bar">' +
      '<div class="bk-arrays">' +
        '<span class="bk-bar-label">Array</span>' +
        '<select class="bk-array" aria-label="Input array">' +
        PRESETS.map((p, i) =>
          '<option value="' + i + '"' + (arrEquals(p, data) ? " selected" : "") + ">" + fmt(p) + "</option>"
        ).join("") +
        "</select>" +
      "</div>" +
    "</div>" +
    '<div class="bk-params">' +
      '<span class="bk-params-min"></span><span class="bk-params-max"></span>' +
      '<span class="bk-params-pass"></span><span class="bk-params-gap"></span>' +
      '<span class="bk-params-group"></span>' +
    "</div>" +
    '<div class="bs-scene">' +
      '<div class="sh-lane">' +
        '<div class="sh-lane-label">Array' +
          '<b class="sh-gap-tag" data-role="gaptag"></b>' +
        "</div>" +
        '<div class="sh-track" data-role="track"></div>' +
        '<div class="sh-gap-wrap" data-role="gapwrap"><div class="sh-bracket" data-role="bracket"></div></div>' +
      "</div>" +
      '<div class="bk-focus"></div>' +
      '<div class="sh-groups" data-role="groups"></div>' +
    "</div>" +
    '<div class="bs-pipeline">' +
    STAGES.map((st, i) => '<span class="bs-pp" data-stage="' + i + '">' + st + "</span>").join('<span class="bs-pp-arrow">\u2192</span>') +
    "</div>";

  const trackEl = wrap.querySelector('[data-role="track"]');
  const gapWrap = wrap.querySelector('[data-role="gapwrap"]');
  const bracketEl = wrap.querySelector('[data-role="bracket"]');
  const groupsEl = wrap.querySelector('[data-role="groups"]');
  const focusEl = wrap.querySelector(".bk-focus");
  const stepEl = wrap.querySelector(".bk-step");
  const phaseEl = wrap.querySelector(".bs-phase");
  const gapTag = wrap.querySelector('[data-role="gaptag"]');

  // ── render one beat ──────────────────────────────────────────────
  function render() {
    const beat = beats[idx];
    const meta = beat.meta || {};
    const fly = lastDelta === 1;
    trackEl.innerHTML = "";
    groupsEl.innerHTML = "";
    focusEl.innerHTML = "";

    // array lane (gap tag + cells)
    gapTag.textContent = beat.phase === "ready" ? "" : "Gap = " + beat.gap + "  \u00b7  Pass " + beat.pass;
    const inGroupCells = new Set(
      beat.phase === "groups" && meta.type === "group" && beat.groupIdx >= 0
        ? beat.idxs[beat.groupIdx]
        : []
    );
    const reconCells = new Set(meta.type === "reconstruct" ? meta.idxs : []);
    beat.arr.forEach((v, i) => {
      const div = document.createElement("div");
      div.className = "sh-cell";
      div.innerHTML = '<div class="sh-cell-val">' + v + '</div><div class="sh-cell-idx">' + i + "</div>";
      if (inGroupCells.has(i)) div.classList.add("sh-cell--in-group");
      if (reconCells.has(i)) {
        div.classList.add("sh-cell--recon");
        if (fly) div.querySelector(".sh-cell-val").classList.add("bs-tile--arrive");
      }
      trackEl.appendChild(div);
    });

    // gap bracket: active group of this formation, or group 0 at pass start
    let bracketGroup = -1;
    if (beat.phase === "groups" && meta.type === "group" && beat.groupIdx >= 0) bracketGroup = beat.groupIdx;
    else if (beat.phase === "gap" && meta.type === "passStart" && beat.groupsCount > 0) bracketGroup = 0;
    if (bracketGroup >= 0 && beat.idxs.length > 0) {
      const gi = beat.idxs[bracketGroup];
      const cells = Array.from(trackEl.querySelectorAll(".sh-cell"));
      const a = cells[gi[0]], b = cells[gi[gi.length - 1]];
      if (a && b) {
        const ar = a.getBoundingClientRect(), br = b.getBoundingClientRect(), wr = gapWrap.getBoundingClientRect();
        bracketEl.style.left = ar.left - wr.left + "px";
        bracketEl.style.width = br.right - ar.left + "px";
        bracketEl.textContent = "gap = " + beat.gap;
      }
    } else {
      bracketEl.style.left = "-9999px";
    }

    // reconstruct fly distances (group band → array, upward)
    const gapTop = groupsEl.getBoundingClientRect().top - trackEl.getBoundingClientRect().bottom;
    trackEl.querySelectorAll(".bs-tile--arrive").forEach((t) => t.style.setProperty("--drop", Math.max(24, gapTop) + "px"));

    // group cards
    const gc = Math.min(beat.groupsCount, beat.groups.length);
    for (let k = 0; k < gc; k++) {
      const card = document.createElement("div");
      card.className = "sh-group-card";
      if (beat.groupIdx === k) card.classList.add("sh-group-card--active");
      else if (beat.groupIdx >= 0 && beat.phase !== "groups") card.classList.add("sh-group-card--muted");
      if (beat.groupIdx > k) card.classList.add("sh-group-card--sorted");

      const head = document.createElement("div");
      head.className = "sh-group-head";
      const name = document.createElement("span");
      name.className = "sh-group-name";
      name.textContent = "Group " + (k + 1);
      const idx = document.createElement("span");
      idx.className = "sh-group-idx";
      idx.textContent = "indices " + (beat.idxs[k] ? fmtIdx(beat.idxs[k]) : "");
      head.appendChild(name);
      head.appendChild(idx);
      card.appendChild(head);

      const vals = document.createElement("div");
      vals.className = "sh-group-vals";
      beat.groups[k].forEach((gv, m) => {
        if (m > 0) {
          const ar = document.createElement("span");
          ar.className = "sh-arrow";
          ar.textContent = "\u2192";
          vals.appendChild(ar);
        }
        const t = tile(gv);
        if (beat.phase === "sort" && beat.groupIdx === k) {
          const tp = meta.type;
          if (tp === "key" && meta.pos === m) t.classList.add("sh-mkey");
          if ((tp === "cmp" || tp === "shift") && meta.pos === m) t.classList.add("sh-mcmp");
          if (tp === "shift" && (meta.to === m || meta.from === m)) t.classList.add("sh-mshift");
          if (tp === "place" && meta.pos === m) t.classList.add("sh-mkey");
        }
        if (beat.phase === "reconstruct" && beat.groupIdx === k && meta.type === "reconstruct" && fly) {
          t.classList.add("bs-tile--depart");
        }
        vals.appendChild(t);
      });
      card.appendChild(vals);
      groupsEl.appendChild(card);
    }

    // focus strip — the "what is happening now" line
    const mk = (cls, txt) => { const s = document.createElement("span"); s.className = cls; s.textContent = txt; return s; };
    if (beat.phase === "gap" && meta.type === "passStart") {
      focusEl.appendChild(mk("bk-focus-tag", "PASS " + beat.pass + " / " + beats.filter((x) => x.phase === "gap").length));
      focusEl.appendChild(mk("bk-focus-calc", "gap = " + beat.gap + "  \u00b7  groups = " + beat.groupsCount));
      focusEl.appendChild(mk("bk-focus-op", "every " + beat.gap + "th index keeps company"));
    } else if (beat.phase === "groups") {
      const gi = beat.idxs[beat.groupIdx];
      focusEl.appendChild(mk("bk-focus-tag", "GROUP " + (beat.groupIdx + 1)));
      focusEl.appendChild(mk("bk-focus-calc", "indices " + fmtIdx(gi)));
      focusEl.appendChild(mk("bk-focus-op", "values " + fmt(beat.groups[beat.groupIdx])));
    } else if (beat.phase === "sort") {
      focusEl.appendChild(mk("bk-focus-tag", "GROUP " + (beat.groupIdx + 1)));
      focusEl.appendChild(mk("bk-focus-op", String(beat.text)));
    } else if (beat.phase === "reconstruct") {
      focusEl.appendChild(mk("bk-focus-tag", "RECONSTRUCT"));
      focusEl.appendChild(mk("bk-focus-calc", "indices " + fmtIdx(meta.idxs)));
      focusEl.appendChild(mk("bk-focus-op", "\u2190 write values back to original positions"));
    } else if (beat.phase === "reduce") {
      focusEl.appendChild(mk("bk-focus-tag", "PASS " + beat.pass + " DONE"));
      focusEl.appendChild(mk("bk-focus-op", meta.nextGap ? "\u2193 reduce gap \u2192 " + meta.nextGap : "\u2193 gap = 1 was the final pass"));
    } else if (beat.phase === "done") {
      focusEl.appendChild(mk("bk-focus-tag", "\u2713 DONE"));
      focusEl.appendChild(mk("bk-focus-op", "Shell Sort Complete"));
    } else {
      focusEl.appendChild(mk("bk-focus-op", beat.text));
    }

    // status + params + pipeline stage
    wrap.querySelectorAll(".bs-pp").forEach((el) => {
      el.classList.toggle("bs-pp--active", Number(el.dataset.stage) === STAGE_MAP[beat.phase]);
    });
    stepEl.textContent = "Step " + idx + " / " + (beats.length - 1) + " \u00b7 Pass " + beat.pass + " / " + beats.filter((x) => x.phase === "gap").length;
    phaseEl.textContent = beat.text;

    wrap.querySelector(".bk-params-min").innerHTML = "n <b>" + beat.arr.length + "</b>";
    wrap.querySelector(".bk-params-max").innerHTML = "Gap <b>" + beat.gap + "</b>";
    wrap.querySelector(".bk-params-pass").innerHTML = "Pass <b>" + beat.pass + "</b>";
    wrap.querySelector(".bk-params-group").innerHTML =
      beat.groupIdx >= 0 ? "Group <b>" + (beat.groupIdx + 1) + " / " + beat.groupsCount + "</b>" : "Groups <b>" + beat.groupsCount + "</b>";

    wrap.querySelector('[data-bs="prev"]').disabled = idx === 0;
    wrap.querySelector('[data-bs="next"]').disabled = idx === beats.length - 1;
  }

  function step(d) {
    const n2 = Math.min(beats.length - 1, Math.max(0, idx + d));
    lastDelta = d > 0 ? 1 : d < 0 ? -1 : 0;
    idx = n2;
    render();
  }

  function togglePlay() {
    const btn = wrap.querySelector('[data-bs="play"]');
    if (shPlayTimer) {
      clearInterval(shPlayTimer);
      shPlayTimer = null;
      btn.textContent = "\u25b6 Play";
      return;
    }
    if (idx === beats.length - 1) { idx = 0; lastDelta = 0; render(); }
    btn.textContent = "\u23f8 Pause";
    shPlayTimer = setInterval(() => {
      if (!wrap.isConnected) {
        clearInterval(shPlayTimer);
        shPlayTimer = null;
        return;
      }
      if (idx >= beats.length - 1) {
        clearInterval(shPlayTimer);
        shPlayTimer = null;
        btn.textContent = "\u25b6 Play";
        return;
      }
      lastDelta = 1;
      idx++;
      render();
    }, 1350);
  }

  function reset() {
    clearInterval(shPlayTimer);
    shPlayTimer = null;
    wrap.querySelector('[data-bs="play"]').textContent = "\u25b6 Play";
    idx = 0;
    lastDelta = 0;
    render();
  }

  wrap.querySelector('[data-bs="prev"]').addEventListener("click", () => step(-1));
  wrap.querySelector('[data-bs="next"]').addEventListener("click", () => step(1));
  wrap.querySelector('[data-bs="play"]').addEventListener("click", togglePlay);
  wrap.querySelector('[data-bs="reset"]').addEventListener("click", reset);
  wrap.querySelector(".bk-array").addEventListener("change", (e) => {
    const p = PRESETS[Number(e.target.value)];
    if (!p) return;
    data = p.slice();
    wrap.dataset.array = JSON.stringify(data);
    beats = buildBeats(data);
    reset();
  });

  render();
}
// ═══════════════════════════════════════════════════════════
//  SIMPLE SORTS VISUALIZER PACK (interactive)
//  One engine drives Bubble, Selection, Insertion, Quick and
//  Merge. Each algorithm is a pure planner that emits one REST
//  snapshot per logical move, so the animation can never
//  disagree with the algorithm. Compare/swap/key/pivot/merge
//  states are emphasized on the array cells and mirrored in the
//  status cards below the track.
// ═══════════════════════════════════════════════════════════

let ivPlayTimer = null;

function initSimpleSortViz(root) {
  if (ivPlayTimer) {
    clearInterval(ivPlayTimer);
    ivPlayTimer = null;
  }
  if (!root) return;
  const IDS = ["bubble-wrap", "selection-wrap", "insertion-wrap", "quick-wrap", "merge-wrap"];
  let id = null;
  for (let k = 0; k < IDS.length; k++) {
    if (root.querySelector("#" + IDS[k])) { id = IDS[k]; break; }
  }
  if (!id) return;
  const wrap = root.querySelector("#" + id);
  if (!wrap) return;
  let data;
  try {
    data = JSON.parse(wrap.dataset.array);
  } catch (e) {
    return;
  }
  if (!Array.isArray(data) || data.length === 0) return;

  const NAME = {
    "bubble-wrap": "Bubble Sort",
    "selection-wrap": "Selection Sort",
    "insertion-wrap": "Insertion Sort",
    "quick-wrap": "Quick Sort",
    "merge-wrap": "Merge Sort"
  };
  const A_STAGES = {
    "bubble-wrap": ["Array", "Compare", "Swap", "Pass", "Sorted"],
    "selection-wrap": ["Array", "Scan", "Min", "Swap", "Sorted"],
    "insertion-wrap": ["Array", "Key", "Compare", "Shift", "Sorted"],
    "quick-wrap": ["Array", "Pivot", "Compare", "Swap", "Sorted"],
    "merge-wrap": ["Array", "Split", "Merge", "Write", "Sorted"]
  };
  const A_PHASE = {
    "bubble-wrap": { ready: 0, cmp: 1, swap: 2, pass: 3, done: 4 },
    "selection-wrap": { ready: 0, scan: 1, min: 1, swap: 3, place: 4, done: 4 },
    "insertion-wrap": { ready: 0, key: 1, cmp: 2, shift: 3, place: 4, done: 4 },
    "quick-wrap": { ready: 0, pivot: 1, range: 1, cmp: 2, swap: 3, place: 4, done: 4 },
    "merge-wrap": { ready: 0, split: 1, sort: 1, merge: 2, take: 2, write: 3, done: 4 }
  };
  const A_TAG = {
    "bubble-wrap": { ready: "READY", cmp: "COMPARE", swap: "SWAP", pass: "PASS", done: "DONE" },
    "selection-wrap": { ready: "READY", scan: "SCAN", min: "MIN", swap: "SWAP", place: "PLACED", done: "DONE" },
    "insertion-wrap": { ready: "READY", key: "KEY", cmp: "COMPARE", shift: "SHIFT", place: "INSERTED", done: "DONE" },
    "quick-wrap": { ready: "READY", range: "RANGE", pivot: "PIVOT", cmp: "COMPARE", swap: "SWAP", place: "PLACED", done: "DONE" },
    "merge-wrap": { ready: "READY", split: "SPLIT", merge: "MERGE", take: "TAKE", write: "WRITE", done: "DONE" }
  };

  const PRESETS = [
    [7, 3, 4, 8, 13, 11, 9, 1],
    [19, 10, 8, 17, 9, 12, 3, 15, 2, 6],
    [66, 43, 89, 23, 11, 72, 5, 90, 38, 60, 27, 77],
    [34, 8, 64, 51, 32, 21],
    [5, 4, 3, 2, 1]
  ];

  const fmtArr = (a) => "[" + a.join(", ") + "]";
  const arrEquals = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
  const mkCard = (name, idx, vals, cls) => ({ name: name, idx: idx, vals: vals.slice(), cls: cls || "" });
  const emptyMarks = () =>
    ({ key: [], cmp: [], swap: [], pivot: [], place: [], sorted: [], region: [], left: [], right: [] });
  const setMarks = (m) => {
    const o = emptyMarks();
    (m.key || []).forEach((i) => o.key.push(i));
    (m.cmp || []).forEach((i) => o.cmp.push(i));
    (m.swap || []).forEach((i) => o.swap.push(i));
    (m.pivot || []).forEach((i) => o.pivot.push(i));
    (m.place || []).forEach((i) => o.place.push(i));
    (m.sorted || []).forEach((i) => o.sorted.push(i));
    (m.region || []).forEach((i) => o.region.push(i));
    (m.left || []).forEach((i) => o.left.push(i));
    (m.right || []).forEach((i) => o.right.push(i));
    return o;
  };
  const rng = (lo, hi) => {
    const r = [];
    for (let i = lo; i <= hi; i++) r.push(i);
    return r;
  };

  // ── Bubble Sort ──────────────────────────────────────────────
  function planBubble(d0) {
    const n = d0.length;
    const a = d0.slice();
    const beats = [];
    let moves = 0;
    const push = (phase, pass, marks, cards, text) => {
      beats.push({ arr: a.slice(), phase, pass, marks: setMarks(marks), cards, text, moves });
    };
    push("ready", 0, {},
      [mkCard("Pass 1", "window [0.." + (n - 2) + "]", a.slice(0, n - 1), "")],
      "Bubble Sort visualizer \u2014 array ready. Press Play or Step to begin.");
    for (let pass = 0; pass < n - 1; pass++) {
      const bound = n - 1 - pass;
      const window = mkCard("Pass " + (pass + 1), "window [0.." + bound + "]", a.slice(0, bound + 1), "");
      const sorted = mkCard("Sorted", "[" + (bound + 1) + ".." + (n - 1) + "]", a.slice(bound + 1), "card--done");
      push("pass", pass + 1, { region: rng(0, bound), sorted: rng(bound + 1, n - 1) }, [window, sorted],
        "Pass " + (pass + 1) + " \u2014 bubble through [0.." + bound + "], the largest value settles at index " + bound);
      let any = false;
      for (let j = 0; j < bound; j++) {
        const l = a[j], r = a[j + 1];
        push("cmp", pass + 1, { cmp: [j, j + 1], sorted: rng(bound + 1, n - 1) }, [window, sorted],
          "compare " + l + " and " + r + " at indices " + j + "/" + (j + 1) + " \u2014 " +
          (l > r ? l + " > " + r + " \u2192 swap" : l + " \u2264 " + r + " \u2192 keep"));
        if (l > r) {
          a[j] = r; a[j + 1] = l; moves++; any = true;
          push("swap", pass + 1, { swap: [j, j + 1], region: rng(j, bound), sorted: rng(bound + 1, n - 1) }, [window, sorted],
            "swap " + l + " and " + r + " \u2192 " + fmtArr(a));
        }
      }
      push("pass", pass + 1, { region: rng(0, bound), sorted: rng(bound, n - 1) }, [window, sorted],
        any ? "Pass " + (pass + 1) + " done \u2014 " + fmtArr(a) : "Pass " + (pass + 1) + " \u2014 no swaps, array already sorted");
      if (!any) break;
    }
    push("done", n - 1, { sorted: rng(0, n - 1) },
      [mkCard("Sorted", "[0.." + (n - 1) + "]", a, "card--done")],
      "Bubble Sort complete \u2014 " + fmtArr(a));
    return beats;
  }

  // ── Selection Sort ───────────────────────────────────────────
  function planSelection(d0) {
    const n = d0.length;
    const a = d0.slice();
    const beats = [];
    let moves = 0;
    const push = (phase, pass, marks, cards, text) => {
      beats.push({ arr: a.slice(), phase, pass, marks: setMarks(marks), cards, text, moves });
    };
    push("ready", 0, {},
      [mkCard("Scan", "unsorted part", a.slice(0), "")],
      "Selection Sort visualizer \u2014 array ready. Press Play or Step to begin.");
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      const unsorted = mkCard("Unsorted", "[" + i + ".." + (n - 1) + "]", a.slice(i), "");
      const sorted = mkCard("Sorted", "[0.." + (i - 1) + "]", a.slice(0, i), "card--done");
      push("scan", i + 1, { region: rng(i, n - 1), sorted: rng(0, i - 1), key: [i] }, [unsorted, sorted],
        "Pass " + (i + 1) + " \u2014 find the minimum inside [" + i + ".." + (n - 1) + "], candidate starts at index " + i);
      for (let j = i + 1; j < n; j++) {
        push("scan", i + 1, { region: rng(i, n - 1), sorted: rng(0, i - 1), key: [minIdx], cmp: [j] }, [unsorted, sorted],
          "compare " + a[j] + " (index " + j + ") with current min " + a[minIdx] + " (index " + minIdx + ")");
        if (a[j] < a[minIdx]) {
          const oldMin = a[minIdx];
          minIdx = j;
          push("min", i + 1, { region: rng(i, n - 1), sorted: rng(0, i - 1), key: [minIdx] }, [unsorted, sorted],
            a[j] + " < " + oldMin + " \u2014 new minimum " + a[j] + " at index " + minIdx);
        }
      }
      if (minIdx !== i) {
        const v = a[i], w = a[minIdx];
        a[i] = w; a[minIdx] = v; moves++;
        push("swap", i + 1, { swap: [i, minIdx], sorted: rng(0, i - 1) }, [unsorted, sorted],
          "swap min " + w + " into position " + i + " (swap with " + v + ") \u2192 " + fmtArr(a));
      } else {
        push("place", i + 1, { place: [i], sorted: rng(0, i) }, [unsorted, sorted],
          "the minimum is already at position " + i + " \u2014 no swap this pass");
      }
      push("place", i + 1, { place: [i], sorted: rng(0, i) }, [unsorted, sorted],
        "position " + i + " now holds the smallest remaining value \u2014 locked in place");
    }
    push("done", n - 1, { sorted: rng(0, n - 1) },
      [mkCard("Sorted", "[0.." + (n - 1) + "]", a, "card--done")],
      "Selection Sort complete \u2014 " + fmtArr(a));
    return beats;
  }

  // ── Insertion Sort ───────────────────────────────────────────
  function planInsertion(d0) {
    const n = d0.length;
    const a = d0.slice();
    const beats = [];
    let moves = 0;
    const push = (phase, pass, marks, cards, text) => {
      beats.push({ arr: a.slice(), phase, pass, marks: setMarks(marks), cards, text, moves });
    };
    push("ready", 0, {},
      [mkCard("Sorted prefix", "[0]", a.slice(0, 1), "card--done"), mkCard("Ahead", "[1.." + (n - 1) + "]", a.slice(1), "")],
      "Insertion Sort visualizer \u2014 array ready. Press Play or Step to begin.");
    for (let i = 1; i < n; i++) {
      const key = a[i];
      const prefix = mkCard("Sorted prefix", "[0.." + (i - 1) + "]", a.slice(0, i), "card--done");
      const ahead = mkCard("Ahead", "[" + (i + 1) + ".." + (n - 1) + "]", a.slice(i + 1), "");
      push("key", i + 1, { key: [i], sorted: rng(0, i - 1) }, [prefix, ahead],
        "Insert item " + (i + 1) + " of " + n + " \u2014 hold key " + key + " (index " + i + ")");
      let j = i;
      while (j > 0 && a[j - 1] > key) {
        const big = a[j - 1];
        push("cmp", i + 1, { key: [j], cmp: [j - 1], sorted: rng(0, j - 1) }, [prefix, ahead],
          "compare " + key + " with " + big + " \u2014 " + big + " > " + key + " \u2192 shift " + big + " right");
        a[j] = big; moves++;
        j--;
        push("shift", i + 1, { key: [j], swap: [j, j + 1], sorted: rng(0, j) }, [prefix, ahead],
          "shift " + a[j + 1] + " right by one \u2192 " + fmtArr(a));
      }
      if (j > 0) {
        push("cmp", i + 1, { key: [j], cmp: [j - 1], sorted: rng(0, j - 1) }, [prefix, ahead],
          "compare " + key + " with " + a[j - 1] + " \u2014 " + a[j - 1] + " \u2264 " + key + " \u2192 stop, key belongs here");
      }
      a[j] = key;
      push("place", i + 1, { key: [j], sorted: rng(0, j) }, [prefix, ahead],
        "insert " + key + " at index " + j + " \u2192 " + fmtArr(a));
      push("place", i + 1, { sorted: rng(0, i) }, [
        mkCard("Sorted prefix", "[0.." + i + "]", a.slice(0, i + 1), "card--done"),
        mkCard("Ahead", "[" + (i + 1) + ".." + (n - 1) + "]", a.slice(i + 1), "")
      ], "prefix [0.." + i + "] is now sorted");
    }
    push("done", n, { sorted: rng(0, n - 1) },
      [mkCard("Sorted", "[0.." + (n - 1) + "]", a, "card--done")],
      "Insertion Sort complete \u2014 " + fmtArr(a));
    return beats;
  }

  // ── Quick Sort (Lomuto, pivot = last element) ────────────────
  function planQuick(d0) {
    const n = d0.length;
    const a = d0.slice();
    const beats = [];
    let moves = 0;
    const push = (phase, pass, marks, cards, text) => {
      beats.push({ arr: a.slice(), phase, pass, marks: setMarks(marks), cards, text, moves });
    };
    push("ready", 0, {},
      [mkCard("Range", "[0.." + (n - 1) + "]", a, "")],
      "Quick Sort visualizer \u2014 array ready. Press Play or Step to begin.");
    function qsort(lo, hi) {
      if (lo >= hi) return;
      const rangeCard = mkCard("Range", "[" + lo + ".." + hi + "]", a.slice(lo, hi + 1), "");
      const pivotCard = mkCard("Pivot", "index " + hi, a.slice(hi, hi + 1), "card--pivot");
      push("range", 0, { region: rng(lo, hi) }, [rangeCard],
        "partition range [" + lo + ".." + hi + "] \u2014 recursion splits the work into these boxes");
      const piv = a[hi];
      push("pivot", 0, { region: rng(lo, hi), pivot: [hi] }, [rangeCard, pivotCard],
        "pick pivot " + piv + " at index " + hi + " (last element of the range)");
      let i = lo - 1;
      for (let j = lo; j < hi; j++) {
        push("cmp", 0, { region: rng(lo, hi), pivot: [hi], cmp: [j] }, [rangeCard, pivotCard],
          "compare " + a[j] + " (index " + j + ") with pivot " + piv + (a[j] < piv ? " \u2014 smaller, moves left" : " \u2014 bigger, stays right"));
        if (a[j] < piv) {
          const v = a[j];
          i++;
          const w = a[i];
          a[j] = w; a[i] = v; moves++;
          push("swap", 0, { region: rng(lo, hi), pivot: [hi], swap: [i, j] }, [rangeCard, pivotCard],
            i === j ? v + " is already left of the pivot" : "swap " + w + " and " + v + " \u2014 partition pointer moves to index " + i);
        }
      }
      const w = a[i + 1];
      a[hi] = w; a[i + 1] = piv; moves++;
      push("place", 0, { region: rng(lo, hi), place: [i + 1] },
        [rangeCard, mkCard("Placed", "index " + (i + 1), a.slice(i + 1, i + 2), "card--done")],
        "pivot " + piv + " in final position " + (i + 1) + " \u2014 smaller values left, bigger values right");
      qsort(lo, i);
      qsort(i + 2, hi);
    }
    qsort(0, n - 1);
    push("done", 0, { sorted: rng(0, n - 1) },
      [mkCard("Sorted", "[0.." + (n - 1) + "]", a, "card--done")],
      "Quick Sort complete \u2014 " + fmtArr(a));
    return beats;
  }

  // ── Merge Sort ───────────────────────────────────────────────
  function planMerge(d0) {
    const n = d0.length;
    const a = d0.slice();
    const beats = [];
    let moves = 0;
    const push = (phase, pass, marks, cards, text) => {
      beats.push({ arr: a.slice(), phase, pass, marks: setMarks(marks), cards, text, moves });
    };
    push("ready", 0, {},
      [mkCard("Range", "[0.." + (n - 1) + "]", a, "")],
      "Merge Sort visualizer \u2014 array ready. Press Play or Step to begin.");
    function go(lo, hi) {
      if (hi <= lo) return;
      const mid = (lo + hi) >> 1;
      const left = mkCard("Left", "[" + lo + ".." + mid + "]", a.slice(lo, mid + 1), "");
      const right = mkCard("Right", "[" + (mid + 1) + ".." + hi + "]", a.slice(mid + 1, hi + 1), "");
      const range = mkCard("Range", "[" + lo + ".." + hi + "]", a.slice(lo, hi + 1), "");
      push("split", 0, { region: rng(lo, hi), left: rng(lo, mid), right: rng(mid + 1, hi) }, [range, left, right],
        "split range [" + lo + ".." + hi + "] at mid " + mid + " \u2192 left [" + lo + ".." + mid + "], right [" + (mid + 1) + ".." + hi + "]");
      go(lo, mid);
      go(mid + 1, hi);
      const L = a.slice(lo, mid + 1);
      const R = a.slice(mid + 1, hi + 1);
      const aux = [];
      let p = 0, q = 0;
      const cards = () => [
        mkCard("Left", "[" + lo + ".." + mid + "]", L.slice(p), "card--wait"),
        mkCard("Right", "[" + (mid + 1) + ".." + hi + "]", R.slice(q), "card--wait"),
        mkCard("Aux", "merged", aux, aux.length === (hi - lo + 1) ? "card--done" : "")
      ];
      const halfMarks = () => ({ left: rng(lo, mid), right: rng(mid + 1, hi) });
      push("merge", 0, halfMarks(), cards(),
        "merge the two sorted halves back into range [" + lo + ".." + hi + "]");
      while (p < L.length || q < R.length) {
        if (q >= R.length || (p < L.length && L[p] <= R[q])) {
          aux.push(L[p]);
          push("take", 0, Object.assign(halfMarks(), { cmp: [lo + p] }), cards(),
            "take " + L[p] + " (index " + (lo + p) + ", left) \u2192 Aux " + fmtArr(aux));
          p++;
        } else {
          aux.push(R[q]);
          push("take", 0, Object.assign(halfMarks(), { cmp: [mid + 1 + q] }), cards(),
            "take " + R[q] + " (index " + (mid + 1 + q) + ", right) \u2192 Aux " + fmtArr(aux));
          q++;
        }
      }
      for (let k = lo; k <= hi; k++) a[k] = aux[k - lo];
      moves++;
      push("write", 0, { sorted: rng(lo, hi) }, [
        mkCard("Range", "[" + lo + ".." + hi + "]", aux, "card--done")
      ], "write merged " + fmtArr(aux) + " back to indices [" + lo + ".." + hi + "] \u2192 " + fmtArr(a));
    }
    go(0, n - 1);
    push("done", 0, { sorted: rng(0, n - 1) },
      [mkCard("Sorted", "[0.." + (n - 1) + "]", a, "card--done")],
      "Merge Sort complete \u2014 " + fmtArr(a));
    return beats;
  }

  const PLANNERS = {
    "bubble-wrap": planBubble,
    "selection-wrap": planSelection,
    "insertion-wrap": planInsertion,
    "quick-wrap": planQuick,
    "merge-wrap": planMerge
  };

  const STAGES = A_STAGES[id];
  const PHASE = A_PHASE[id];
  const TAG = A_TAG[id];

  let beats = PLANNERS[id](data);
  let idx = 0;
  let lastDelta = 0;

  const tile = (v) => {
    const t = document.createElement("div");
    t.className = "bs-tile";
    t.textContent = v;
    return t;
  };

  wrap.innerHTML =
    '<div class="bs-head">' +
      '<div class="bs-status">' +
        '<span class="bk-step"></span>' +
        '<span class="bs-phase"></span>' +
      "</div>" +
      '<div class="bs-controls">' +
        '<button class="bs-btn" data-bs="prev" title="Previous step">\u25c0 Step</button>' +
        '<button class="bs-btn" data-bs="play" title="Play / Pause">\u25b6 Play</button>' +
        '<button class="bs-btn" data-bs="next" title="Next step">Step \u25b6</button>' +
        '<button class="bs-btn" data-bs="reset" title="Reset to start">\u27f2 Reset</button>' +
      "</div>" +
    "</div>" +
    '<div class="bk-bar">' +
      '<div class="bk-arrays">' +
        '<span class="bk-bar-label">Array</span>' +
        '<select class="bk-array" aria-label="Input array">' +
        PRESETS.map((p, i) =>
          '<option value="' + i + '"' + (arrEquals(p, data) ? " selected" : "") + ">" + fmtArr(p) + "</option>"
        ).join("") +
        "</select>" +
      "</div>" +
    "</div>" +
    '<div class="bk-params">' +
      '<span class="bk-params-min"></span><span class="bk-params-max"></span>' +
    "</div>" +
    '<div class="bs-scene">' +
      '<div class="sh-lane">' +
        '<div class="sh-lane-label">Array</div>' +
        '<div class="sh-track" data-role="track"></div>' +
        '<div class="sh-gap-wrap"><div class="sh-bracket" data-role="rangebracket"></div></div>' +
      "</div>" +
      '<div class="bk-focus"></div>' +
      '<div class="sh-groups" data-role="cards"></div>' +
    "</div>" +
    '<div class="bs-pipeline">' +
    STAGES.map((st, i) => '<span class="bs-pp" data-stage="' + i + '">' + st + "</span>").join('<span class="bs-pp-arrow">\u2192</span>') +
    "</div>";

  const trackEl = wrap.querySelector('[data-role="track"]');
  const bracketEl = wrap.querySelector('[data-role="rangebracket"]');
  const cardsEl = wrap.querySelector('[data-role="cards"]');
  const focusEl = wrap.querySelector(".bk-focus");
  const stepEl = wrap.querySelector(".bk-step");
  const phaseEl = wrap.querySelector(".bs-phase");

  const cellClass = (i, m) => {
    if (m.swap.indexOf(i) !== -1) return "sz-swap";
    if (m.pivot.indexOf(i) !== -1) return "sz-pivot";
    if (m.key.indexOf(i) !== -1) return "sz-key";
    if (m.cmp.indexOf(i) !== -1) return "sz-cmp";
    if (m.place.indexOf(i) !== -1) return "sz-key";
    if (m.sorted.indexOf(i) !== -1) return "sz-sorted";
    if (m.right.indexOf(i) !== -1) return "sz-right";
    if (m.left.indexOf(i) !== -1) return "sz-left";
    if (m.region.indexOf(i) !== -1) return "sz-region";
    return "";
  };

  function render() {
    const beat = beats[idx];
    trackEl.innerHTML = "";
    cardsEl.innerHTML = "";
    focusEl.innerHTML = "";
    beat.arr.forEach((v, i) => {
      const div = document.createElement("div");
      div.className = "sh-cell";
      div.innerHTML = '<div class="sh-cell-val">' + v + '</div><div class="sh-cell-idx">' + i + "</div>";
      const c = cellClass(i, beat.marks);
      if (c) div.classList.add(c);
      trackEl.appendChild(div);
    });

    // range bracket (active window / partition / merge range)
    const bMarks = beat.marks;
    let bracketLo = -1, bracketHi = -1;
    if (bMarks.region.length > 0) {
      bracketLo = Math.min.apply(null, bMarks.region);
      bracketHi = Math.max.apply(null, bMarks.region);
    }
    if (bracketLo >= 0 && bracketLo <= bracketHi && beat.phase !== "done") {
      const cells = Array.from(trackEl.querySelectorAll(".sh-cell"));
      const a = cells[bracketLo], b = cells[bracketHi];
      const gapWrap = trackEl.parentElement.querySelector(".sh-gap-wrap");
      if (a && b && gapWrap) {
        const ar = a.getBoundingClientRect(), br = b.getBoundingClientRect(), wr = gapWrap.getBoundingClientRect();
        bracketEl.style.left = ar.left - wr.left + "px";
        bracketEl.style.width = br.right - ar.left + "px";
        let bt = "";
        if (beat.phase === "pass" || beat.phase === "scan" || beat.phase === "min") bt = "range [" + bracketLo + ".." + bracketHi + "]";
        else if (beat.phase === "range" || beat.phase === "pivot") bt = "range [" + bracketLo + ".." + bracketHi + "]";
        else if (beat.phase === "split" || beat.phase === "merge" || beat.phase === "take") bt = "split [" + bracketLo + ".." + bracketHi + "]";
        else if (beat.phase === "write") bt = "write [" + bracketLo + ".." + bracketHi + "]";
        bracketEl.textContent = bt;
      }
    } else {
      bracketEl.style.left = "-9999px";
    }

    // status cards
    beat.cards.forEach((c) => {
      const card = document.createElement("div");
      card.className = "sh-group-card" + (c.cls ? " sz-card--" + c.cls : "");
      const head = document.createElement("div");
      head.className = "sh-group-head";
      const name = document.createElement("span");
      name.className = "sh-group-name";
      name.textContent = c.name;
      const idx = document.createElement("span");
      idx.className = "sh-group-idx";
      idx.textContent = c.idx;
      head.appendChild(name);
      head.appendChild(idx);
      card.appendChild(head);
      const vals = document.createElement("div");
      vals.className = "sh-group-vals";
      c.vals.forEach((gv, m) => {
        if (m > 0) {
          const ar = document.createElement("span");
          ar.className = "sh-arrow";
          ar.textContent = "\u2192";
          vals.appendChild(ar);
        }
        vals.appendChild(tile(gv));
      });
      card.appendChild(vals);
      cardsEl.appendChild(card);
    });

    // focus strip
    const mk = (cls, txt) => { const s = document.createElement("span"); s.className = cls; s.textContent = txt; return s; };
    focusEl.appendChild(mk("bk-focus-tag", (TAG[beat.phase] || "STEP") + (beat.pass ? " #" + beat.pass : "")));
    const involved = [];
    beat.marks.cmp.forEach((i) => involved.push("index " + i));
    beat.marks.swap.forEach((i) => involved.push("index " + i));
    beat.marks.pivot.forEach((i) => involved.push("pivot " + beat.arr[i]));
    beat.marks.key.forEach((i) => involved.push("key " + beat.arr[i]));
    beat.marks.place.forEach((i) => involved.push("placed " + beat.arr[i]));
    if (involved.length) focusEl.appendChild(mk("bk-focus-calc", involved.join(" \u00b7 ")));
    focusEl.appendChild(mk("bk-focus-op", beat.text));

    // status + pipeline + params
    wrap.querySelectorAll(".bs-pp").forEach((el) => {
      el.classList.toggle("bs-pp--active", Number(el.dataset.stage) === PHASE[beat.phase]);
    });
    stepEl.textContent = "Step " + idx + " / " + (beats.length - 1) + " \u00b7 " + NAME[id];
    phaseEl.textContent = beat.text;
    wrap.querySelector(".bk-params-min").innerHTML = "n <b>" + beat.arr.length + "</b>";
    wrap.querySelector(".bk-params-max").innerHTML = "<b>" + NAME[id] + "</b> \u00b7 Moves <b>" + beat.moves + "</b>";

    wrap.querySelector('[data-bs="prev"]').disabled = idx === 0;
    wrap.querySelector('[data-bs="next"]').disabled = idx === beats.length - 1;
  }

  function step(d) {
    const n2 = Math.min(beats.length - 1, Math.max(0, idx + d));
    lastDelta = d > 0 ? 1 : d < 0 ? -1 : 0;
    idx = n2;
    render();
  }

  function togglePlay() {
    const btn = wrap.querySelector('[data-bs="play"]');
    if (ivPlayTimer) {
      clearInterval(ivPlayTimer);
      ivPlayTimer = null;
      btn.textContent = "\u25b6 Play";
      return;
    }
    if (idx === beats.length - 1) { idx = 0; lastDelta = 0; render(); }
    btn.textContent = "\u23f8 Pause";
    ivPlayTimer = setInterval(() => {
      if (!wrap.isConnected) {
        clearInterval(ivPlayTimer);
        ivPlayTimer = null;
        return;
      }
      if (idx >= beats.length - 1) {
        clearInterval(ivPlayTimer);
        ivPlayTimer = null;
        btn.textContent = "\u25b6 Play";
        return;
      }
      lastDelta = 1;
      idx++;
      render();
    }, 1350);
  }

  function reset() {
    clearInterval(ivPlayTimer);
    ivPlayTimer = null;
    wrap.querySelector('[data-bs="play"]').textContent = "\u25b6 Play";
    idx = 0;
    lastDelta = 0;
    render();
  }

  wrap.querySelector('[data-bs="prev"]').addEventListener("click", () => step(-1));
  wrap.querySelector('[data-bs="next"]').addEventListener("click", () => step(1));
  wrap.querySelector('[data-bs="play"]').addEventListener("click", togglePlay);
  wrap.querySelector('[data-bs="reset"]').addEventListener("click", reset);
  wrap.querySelector(".bk-array").addEventListener("change", (e) => {
    const p = PRESETS[Number(e.target.value)];
    if (!p || !PLANNERS[id]) return;
    data = p.slice();
    wrap.dataset.array = JSON.stringify(data);
    beats = PLANNERS[id](data);
    reset();
  });

  render();
}
// ═══════════════════════════════════════════════════════════
//  HEAP SORT VISUALIZER (interactive)
//  ARRAY → BUILD MAX HEAP (bottom-up heapify) → MAX HEAP
//  → REMOVE ROOT → MOVE LAST ELEMENT TO ROOT → HEAPIFY →
//  REMOVE NEXT MAX → … → FINAL SORTED ARRAY.
//  The tree and the array are derived from the same state
//  (array + heapSize), so they can never disagree. Every beat
//  is generated by a real bottom-up build + extraction run.
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
//  HEAP SORT VISUALIZER (interactive, MAX / MIN heap selectable)
//  ARRAY → BUILD {MAX|MIN} HEAP (bottom-up heapify) → HEAP
//  → REMOVE ROOT → MOVE LAST ELEMENT TO ROOT → HEAPIFY →
//  REMOVE NEXT {MAX|MIN} → … → FINAL SORTED ARRAY.
//  The tree and the array are derived from the same state
//  (array + heapSize), so they can never disagree. Every beat
//  is generated by a real bottom-up build + extraction run.
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
//  HEAP SORT VISUALIZER (interactive, MAX / MIN heap selectable)
//  ARRAY → BUILD {MAX|MIN} HEAP (bottom-up heapify) → HEAP
//  → REMOVE ROOT → MOVE LAST ELEMENT TO ROOT → HEAPIFY →
//  REMOVE NEXT {MAX|MIN} → … → FINAL SORTED ARRAY.
//  The tree and the array are derived from the same state
//  (array + heapSize), so they can never disagree. Every beat
//  is generated by a real bottom-up build + extraction run.
// ═══════════════════════════════════════════════════════════

let hpPlayTimer = null;

function initHeapSortViz(root) {
  if (hpPlayTimer) {
    clearInterval(hpPlayTimer);
    hpPlayTimer = null;
  }
  if (!root) return;
  const wrap = root.querySelector("#heap-wrap");
  if (!wrap) return;
  let data;
  try {
    data = JSON.parse(wrap.dataset.array);
  } catch (e) {
    return;
  }
  if (!Array.isArray(data) || data.length === 0) return;
  let heapType = (wrap.dataset.heaptype || "max") === "min" ? "min" : "max";

  const PRESETS = [
    [4, 10, 3, 5, 1, 6, 9, 7, 2],
    [10, 7, 9, 5, 1, 6, 3, 4, 2],
    [7, 3, 4, 8, 13, 11, 9, 1],
    [19, 10, 8, 17, 9, 12, 3, 15, 2, 6],
    [5, 4, 3, 2, 1]
  ];
  const STAGE_OF = {
    start: 0,
    build: 1, built: 1,
    mark: 2,
    extractSwap: 3,
    heapify: 4, restored: 4,
    done: 5
  };
  const stageLabel = (i) => {
    if (i === 1) return heapType === "max" ? "Build Max Heap" : "Build Min Heap";
    return ["Array", "Build Max Heap", "Remove Root", "Swap & Reduce", "Heapify", "Sorted"][i];
  };
  const maxFn = () => heapType === "max";

  const fmtArr = (a) => "[" + a.join(", ") + "]";
  const arrEquals = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
  const tile = (v) => {
    const t = document.createElement("div");
    t.className = "bs-tile";
    t.textContent = v;
    return t;
  };

  // ── beats: one snapshot per logical move ─────────────────────
  function buildBeats(d0) {
    const m = maxFn();
    const n = d0.length;
    const arr = d0.slice();
    const beats = [];
    const extracted = [];
    let heap = n;
    let phase = "build";
    const push = (op, node, comp, swp, removed, text, explain) => {
      beats.push({
        array: arr.slice(), heap: heap, phase: phase, op: op,
        node: node, comp: comp ? comp.slice() : [], swp: swp ? swp.slice() : [],
        removed: removed, extracted: extracted.slice(), text: text, explain: explain
      });
    };

    // one heapify-down from `c` inside the current heap
    function heapifyNode(c) {
      const v = arr[c];
      push("heapify", c, [], [], null,
        "Current node: " + v + " (index " + c + ")",
        "Heapify starts at this node. After this pass it must be the " + (m ? "largest" : "smallest") + " value in its own subtree, so it is pushed down as far as needed.");
      const l = 2 * c + 1, r = 2 * c + 2;
      const kids = [];
      if (l < heap) kids.push(l);
      if (r < heap) kids.push(r);
      if (kids.length === 0) {
        push("heapify", c, [], [], null,
          "Current node " + v + " is a leaf \u2014 no children to compare, heap property holds. Stop.",
          "A leaf has no children, so nothing is " + (m ? "smaller than it" : "bigger than it") + " inside its own subtree. Heapify stops here.");
        return;
      }
      const cTxt = kids.map((k) => arr[k] + " (index " + k + ")").join(" and ");
      push("heapify", c, kids, [], null,
        "Compare parent " + v + " with its children: " + cTxt,
        "The children of index " + c + " are the array indices " + kids.join(" and ") + ", via 2i+1 and 2i+2.");
      let big = kids[0];
      if (kids.length === 2 && (m ? arr[kids[1]] > arr[kids[0]] : arr[kids[1]] < arr[kids[0]])) big = kids[1];
      push("heapify", c, [big], [], null,
        "The " + (m ? "larger" : "smaller") + " child is " + arr[big] + " (index " + big + ")",
        "Between the children, " + arr[big] + " is the " + (m ? "largest" : "smallest") + ", so it is the only one that could possibly " + (m ? "beat" : "undercut") + " the parent.");
      if (m ? arr[big] <= arr[c] : arr[big] >= arr[c]) {
        push("heapify", c, [big], [], null,
          arr[big] + " is not " + (m ? "larger" : "smaller") + " than " + arr[c] + " \u2014 " + (m ? "max" : "min") + "-heap property already holds here. Stop.",
          "Parent " + arr[c] + " is already " + (m ? "greater than or equal to" : "less than or equal to") + " its " + (m ? "largest" : "smallest") + " child " + arr[big] + ", so no swap is needed at this node.");
        return;
      }
      const pv = arr[c], cv = arr[big];
      arr[c] = cv; arr[big] = pv;
      push("heapify", c, [], [c, big], null,
        "SWAP(" + pv + ", " + cv + ") \u2014 child " + cv + " " + (m ? ">" : "<") + " parent " + pv,
        cv + " is " + (m ? "larger" : "smaller") + " than " + pv + ", so they are swapped to restore the heap property. The cascade may continue at the child position next.");
      heapifyNode(big);
    }

    // PART 1 — BUILD {MAX|MIN} HEAP (bottom-up)
    push("start", -1, [], [], null,
      "Initial array: " + fmtArr(arr),
      "The array is read as a complete binary tree: index 0 is the root, index 2i+1 is the left child of i, index 2i+2 is the right child of i. A " + (m ? "max" : "min") + " heap will be built.");
    const first = Math.floor(n / 2) - 1;
    push("build", first, [], [], null,
      "Build the " + (m ? "max" : "min") + " heap bottom-up \u2014 start at the last non-leaf node: index " + first + " (value " + arr[first] + ")",
      "Every node from the last non-leaf up to the root is heapified in order, so when a parent is processed its subtree is already heapified.");
    for (let c = first; c >= 0; c--) heapifyNode(c);
    push("built", -1, [], [], null,
      (m ? "MAX" : "MIN") + " HEAP BUILT \u2014 " + fmtArr(arr),
      "Every parent is now " + (m ? "greater than or equal to" : "less than or equal to") + " its children. The " + (m ? "largest" : "smallest") + " value of the whole array (root = " + arr[0] + ") sits at the top.");

    // PART 2 — HEAP SORT / EXTRACTION
    phase = "extract";
    while (heap > 1) {
      const mx = arr[0];
      push("mark", 0, [], [], mx,
        "ROOT \u2192 REMOVED: " + mx,
        mx + " is the root because it is the " + (m ? "largest" : "smallest") + " value in the " + (m ? "max" : "min") + " heap. The extraction phase peels off this " + (m ? "maximum" : "minimum") + " first.");
      arr[0] = arr[heap - 1];
      arr[heap - 1] = mx;
      heap--;
      extracted.push(mx);
      push("extractSwap", 0, [], [0, heap], mx,
        "Swap " + mx + " \u2194 " + arr[0] + " \u2014 move the " + (m ? "max" : "min") + " to the tail, heap size \u2192 " + heap,
        mx + " is removed and replaced by the last active element (" + arr[0] + "). Everything right of the | is now inactive / in the " + (m ? "sorted" : "sorted (ascending)") + " tail.");
      if (heap > 1) {
        heapifyNode(0);
        push("restored", -1, [], [], null,
          "Heap restored \u2014 active " + fmtArr(arr.slice(0, heap)) + "  \u00b7  extracted: " + fmtArr(extracted),
          "The " + (m ? "max" : "min") + "-heap property holds again at the root, so the next " + (m ? "largest" : "smallest") + " value is ready to be extracted next.");
      }
    }
    const last = arr[0];
    heap = 0;
    extracted.push(last);
    phase = "done";
    push("done", -1, [], [], last,
      "Heap Sort Complete \u2014 extraction order: " + fmtArr(extracted),
      m
        ? "Using a max heap, elements are extracted from largest to smallest: " + fmtArr(extracted) + ". Reversed, that is the ascending array " + fmtArr(extracted.slice().reverse()) + "."
        : "Using a min heap, the root is always the smallest value, so elements are extracted from smallest to largest: " + fmtArr(extracted) + ". In place, each extracted minimum is swapped into the tail, which leaves the array in descending order: " + fmtArr(arr) + ".");
    return beats;
  }

  let beats = buildBeats(data);
  let initialData = data.slice();
  let idx = 0;
  let lastDelta = 0;

  wrap.innerHTML =
    '<div class="bs-head">' +
      '<div class="bs-status">' +
        '<span class="bk-step"></span>' +
        '<span class="hp-phase"></span>' +
      "</div>" +
      '<div class="bs-controls">' +
        '<button class="bs-btn" data-bs="prev" title="Previous step">\u25c0 Step</button>' +
        '<button class="bs-btn" data-bs="play" title="Play / Pause">\u25b6 Play</button>' +
        '<button class="bs-btn" data-bs="next" title="Next step">Step \u25b6</button>' +
        '<button class="bs-btn" data-bs="reset" title="Reset to start">\u27f2 Reset</button>' +
      "</div>" +
    "</div>" +
    '<div class="bk-bar">' +
      '<div class="bk-arrays">' +
        '<span class="bk-bar-label">Array</span>' +
        '<select class="bk-array" aria-label="Input array">' +
        PRESETS.map((p, i) =>
          '<option value="' + i + '"' + (arrEquals(p, data) ? " selected" : "") + ">" + fmtArr(p) + "</option>"
        ).join("") +
        "</select>" +
      "</div>" +
      '<div class="hp-heaptype">' +
        '<span class="bk-bar-label">Heap type</span>' +
        '<select class="hp-htsel" aria-label="Heap type">' +
        '<option value="max"' + (heapType === "max" ? " selected" : "") + ">MAX HEAP</option>" +
        '<option value="min"' + (heapType === "min" ? " selected" : "") + ">MIN HEAP</option>" +
        "</select>" +
      "</div>" +
    "</div>" +
    '<div class="hp-meta">' +
      '<div class="hp-meta-label">Initial Array</div>' +
      '<div class="hp-initial" data-role="initial"></div>' +
    "</div>" +
    '<div class="hp-stage">' +
      '<div class="hp-col">' +
        '<div class="hp-caption">Heap Tree</div>' +
        '<svg class="hp-svg" data-role="tree" xmlns="http://www.w3.org/2000/svg"></svg>' +
      "</div>" +
      '<div class="hp-col">' +
        '<div class="hp-caption">Array Representation</div>' +
        '<div class="hp-arrayrow" data-role="array"></div>' +
        '<div class="hp-arraynote">cells left of the | are the active heap \u2014 cells right are the sorted / extracted tail</div>' +
      "</div>" +
    "</div>" +
    '<div class="bk-params">' +
      '<span class="hp-param-heap"></span>' +
      '<span class="hp-param-node"></span>' +
      '<span class="hp-param-phase"></span>' +
    "</div>" +
    '<div class="hp-panel">' +
      '<div class="hp-op">Current Operation: <span data-role="curOp"></span></div>' +
      '<div class="hp-op">Next Operation: <span data-role="nxtOp"></span></div>' +
      '<div class="hp-explain" data-role="explain"></div>' +
    "</div>" +
    '<div class="hp-outrow">' +
      '<span class="hp-outlabel" data-role="outlabel">Extracted (max \u2192 min)</span>' +
      '<div class="hp-out" data-role="extracted"></div>' +
    "</div>" +
    '<div class="bs-pipeline">' +
    [0, 1, 2, 3, 4, 5].map((i) => '<span class="bs-pp" data-stage="' + i + '">' + stageLabel(i) + "</span>").join('<span class="bs-pp-arrow">\u2192</span>') +
    "</div>";

  const treeEl = wrap.querySelector('[data-role="tree"]');
  const arrEl = wrap.querySelector('[data-role="array"]');
  const initEl = wrap.querySelector('[data-role="initial"]');
  const outEl = wrap.querySelector('[data-role="extracted"]');
  const outLabelEl = wrap.querySelector('[data-role="outlabel"]');
  const phaseEl = wrap.querySelector(".hp-phase");
  const stepEl = wrap.querySelector(".bk-step");
  const curOp = wrap.querySelector('[data-role="curOp"]');
  const nxtOp = wrap.querySelector('[data-role="nxtOp"]');
  const explEl = wrap.querySelector('[data-role="explain"]');

  const SVGNS = "http://www.w3.org/2000/svg";
  const NODE_R = 22;

  function nodeClass(i, beat) {
    if (beat.phase === "extract" && beat.op === "extractSwap" && i === beat.heap) return "hp-node--removed";
    if (i >= beat.heap) return "hp-node--inactive";
    if (beat.removed !== null && beat.removed !== undefined && beat.op === "mark" && i === 0) return "hp-node--removed";
    if (beat.swp.indexOf(i) !== -1) return "hp-node--swap";
    if (beat.node === i && beat.op !== "built" && beat.op !== "restored" && beat.op !== "mark") return "hp-node--active";
    if (beat.comp.indexOf(i) !== -1 && i === beat.comp[beat.comp.length - 1] && beat.comp.length >= 1) return "hp-node--largest";
    if (beat.comp.indexOf(i) !== -1) return "hp-node--child";
    return "";
  }

  function treeGeometry(n) {
    const depth = Math.floor(Math.log2(n)) + 1;
    const STEPX = 60;
    const LEVEL_H = 76;
    const PADX = 40, PADY = 46;
    const W = 2 * PADX + Math.pow(2, Math.max(0, depth - 1)) * STEPX;
    const H = 2 * PADY + (depth - 1) * LEVEL_H + NODE_R * 2;
    const pos = [];
    for (let i = 0; i < n; i++) {
      const L = Math.floor(Math.log2(i + 1));
      const inLevel = i - (Math.pow(2, L) - 1);
      const slots = Math.pow(2, L);
      const x = PADX + ((2 * inLevel + 1) / (2 * slots)) * (W - 2 * PADX);
      const y = PADY + L * LEVEL_H;
      pos.push({ x: x, y: y });
    }
    return { pos: pos, W: W, H: H };
  }

  function render() {
    const beat = beats[idx];
    const n = beat.array.length;
    const m = maxFn();
    const geo = treeGeometry(n);
    arrEl.innerHTML = "";
    initEl.innerHTML = "";
    outEl.innerHTML = "";
    treeEl.setAttribute("viewBox", "0 0 " + geo.W + " " + geo.H);
    treeEl.innerHTML = "";

    initialData.forEach((v) => {
      const t = tile(v);
      t.classList.add("hp-init-tile");
      initEl.appendChild(t);
    });
    if (beat.extracted.length === 0) {
      const s = document.createElement("span");
      s.className = "hp-out-empty";
      s.textContent = "\u2014 none yet \u2014";
      outEl.appendChild(s);
    } else {
      beat.extracted.forEach((v) => {
        const t = tile(v);
        t.classList.add("hp-out-tile");
        outEl.appendChild(t);
      });
    }

    for (let i = 1; i < n; i++) {
      if (i >= beat.heap) continue;
      const p = (i - 1) >> 1;
      const a = geo.pos[p], b = geo.pos[i];
      const line = document.createElementNS(SVGNS, "line");
      line.setAttribute("x1", a.x);
      line.setAttribute("y1", a.y + NODE_R);
      line.setAttribute("x2", b.x);
      line.setAttribute("y2", b.y - NODE_R);
      line.setAttribute("class", "hp-link");
      treeEl.appendChild(line);
    }

    for (let i = 0; i < n; i++) {
      const p = geo.pos[i];
      const g = document.createElementNS(SVGNS, "g");
      g.setAttribute("transform", "translate(" + p.x + "," + p.y + ")");
      g.setAttribute("class", "hp-node");
      const st = nodeClass(i, beat);
      if (st) g.setAttribute("class", "hp-node " + st);
      const circle = document.createElementNS(SVGNS, "circle");
      circle.setAttribute("r", NODE_R);
      g.appendChild(circle);
      if (beat.removed !== null && i === 0 && beat.op === "mark") {
        const tag = document.createElementNS(SVGNS, "text");
        tag.setAttribute("class", "hp-node-max");
        tag.setAttribute("y", -NODE_R - 8);
        tag.textContent = (m ? "MAX" : "MIN") + " \u2192 REMOVED";
        g.appendChild(tag);
      }
      if (beat.phase === "extract" && beat.op === "extractSwap" && i === beat.heap) {
        const tag = document.createElementNS(SVGNS, "text");
        tag.setAttribute("class", "hp-node-max");
        tag.setAttribute("y", -NODE_R - 8);
        tag.textContent = "\u2192 EXTRACTED";
        g.appendChild(tag);
      }
      const val = document.createElementNS(SVGNS, "text");
      val.setAttribute("class", "hp-node-val");
      val.setAttribute("y", 5);
      val.textContent = beat.array[i];
      g.appendChild(val);
      const ix = document.createElementNS(SVGNS, "text");
      ix.setAttribute("class", "hp-node-idx");
      ix.setAttribute("y", NODE_R + 12);
      ix.textContent = "i = " + i;
      g.appendChild(ix);
      treeEl.appendChild(g);
    }

    beat.array.forEach((v, i) => {
      if (i === beat.heap && i < n) {
        const sep = document.createElement("div");
        sep.className = "hp-sep";
        sep.textContent = "|";
        arrEl.appendChild(sep);
      }
      const cell = document.createElement("div");
      cell.className = "hp-cell";
      const st = nodeClass(i, beat);
      if (st) cell.classList.add(st.replace("hp-node--", "hp-cell--"));
      if (i < beat.heap) cell.classList.add("hp-cell--active");
      cell.innerHTML = '<div class="hp-cell-val">' + v + '</div><div class="hp-cell-idx">' + i + "</div>";
      arrEl.appendChild(cell);
    });

    phaseEl.textContent = beat.phase === "build"
      ? "\u25b2 BUILD " + (m ? "MAX" : "MIN") + " HEAP"
      : (beat.phase === "done" ? "\u2713 COMPLETE" : "\u25bc EXTRACT " + (m ? "MAX" : "MIN"));
    stepEl.textContent = "Step " + idx + " / " + (beats.length - 1) + " \u00b7 " + (beat.phase === "build" ? "phase 1 of 2" : (beat.phase === "done" ? "done" : "phase 2 of 2"));
    curOp.textContent = beat.text;
    nxtOp.textContent = beats[idx + 1] ? beats[idx + 1].text : "\u2014";
    explEl.textContent = beat.explain;
    outLabelEl.textContent = m ? "Extracted (max \u2192 min)" : "Extracted (min \u2192 max)";
    wrap.querySelector(".hp-param-heap").innerHTML = "Heap size <b>" + beat.heap + "</b>";
    wrap.querySelector(".hp-param-node").innerHTML =
      beat.node >= 0 ? "Current node <b>" + beat.array[beat.node] + "</b> (index " + beat.node + ")" : "Current node <b>\u2014</b>";
    wrap.querySelector(".hp-param-phase").innerHTML = "Phase <b>" + (beat.phase === "build"
      ? "BUILD " + (m ? "MAX" : "MIN") + " HEAP"
      : (beat.phase === "done" ? "COMPLETE" : "EXTRACT " + (m ? "MAX" : "MIN"))) + "</b>";

    wrap.querySelectorAll(".bs-pp").forEach((el) => {
      el.textContent = stageLabel(Number(el.dataset.stage));
      el.classList.toggle("bs-pp--active", Number(el.dataset.stage) === STAGE_OF[beat.op]);
    });
    wrap.querySelector('[data-bs="prev"]').disabled = idx === 0;
    wrap.querySelector('[data-bs="next"]').disabled = idx === beats.length - 1;
  }

  function step(d) {
    const n2 = Math.min(beats.length - 1, Math.max(0, idx + d));
    lastDelta = d > 0 ? 1 : d < 0 ? -1 : 0;
    idx = n2;
    render();
  }

  function togglePlay() {
    const btn = wrap.querySelector('[data-bs="play"]');
    if (hpPlayTimer) {
      clearInterval(hpPlayTimer);
      hpPlayTimer = null;
      btn.textContent = "\u25b6 Play";
      return;
    }
    if (idx === beats.length - 1) { idx = 0; lastDelta = 0; render(); }
    btn.textContent = "\u23f8 Pause";
    hpPlayTimer = setInterval(() => {
      if (!wrap.isConnected) {
        clearInterval(hpPlayTimer);
        hpPlayTimer = null;
        return;
      }
      if (idx >= beats.length - 1) {
        clearInterval(hpPlayTimer);
        hpPlayTimer = null;
        btn.textContent = "\u25b6 Play";
        return;
      }
      lastDelta = 1;
      idx++;
      render();
    }, 1350);
  }

  function reset() {
    clearInterval(hpPlayTimer);
    hpPlayTimer = null;
    wrap.querySelector('[data-bs="play"]').textContent = "\u25b6 Play";
    idx = 0;
    lastDelta = 0;
    render();
  }

  wrap.querySelector('[data-bs="prev"]').addEventListener("click", () => step(-1));
  wrap.querySelector('[data-bs="next"]').addEventListener("click", () => step(1));
  wrap.querySelector('[data-bs="play"]').addEventListener("click", togglePlay);
  wrap.querySelector('[data-bs="reset"]').addEventListener("click", reset);
  wrap.querySelector(".bk-array").addEventListener("change", (e) => {
    const p = PRESETS[Number(e.target.value)];
    if (!p) return;
    data = p.slice();
    initialData = p.slice();
    wrap.dataset.array = JSON.stringify(data);
    beats = buildBeats(data);
    reset();
  });
  wrap.querySelector(".hp-htsel").addEventListener("change", (e) => {
    heapType = e.target.value === "min" ? "min" : "max";
    wrap.dataset.heaptype = heapType;
    beats = buildBeats(data);
    reset();
  });

  render();
}

// ═══════════════════════════════════════════════════════════
//  BINARY HEAP TREE (reusable SVG component)
//  Draws any array as a complete binary tree using the index
//  formulas parent=(i-1)/2, left=2*i+1, right=2*i+2. Position
//  of every node is computed from the array length, so the
//  layout adapts automatically when the array changes. Each
//  node carries data-idx equal to its array index so a later
//  heapify pass can move nodes by index.
// ═══════════════════════════════════════════════════════════

function drawBinaryHeapTree(svg, array) {
  if (!svg || !Array.isArray(array) || array.length === 0) return;
  const SVGNS = "http://www.w3.org/2000/svg";
  const NODE_W = 54, NODE_H = 54;
  const PAD_X = 34, PAD_Y = 46;
  const LEVEL_H = 92;
  const n = array.length;
  const depth = Math.floor(Math.log2(n)) + 1;
  const slots = Math.pow(2, depth - 1);
  const TARGET_W = 680;
  const STEP_X = Math.max(64, (TARGET_W - 2 * PAD_X) / slots);
  const W = 2 * PAD_X + slots * STEP_X;
  const H = 2 * PAD_Y + (depth - 1) * LEVEL_H + NODE_H;

  const pos = [];
  for (let i = 0; i < n; i++) {
    const L = Math.floor(Math.log2(i + 1));
    const inLevel = i - (Math.pow(2, L) - 1);
    const sl = Math.pow(2, L);
    const x = PAD_X + ((2 * inLevel + 1) / (2 * sl)) * (W - 2 * PAD_X);
    const y = PAD_Y + L * LEVEL_H;
    pos.push({ x: x, y: y });
  }

  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.innerHTML = "";

  // connectors: bottom-center of parent -> top-center of child
  for (let i = 1; i < n; i++) {
    const p = (i - 1) >> 1;
    const a = pos[p], b = pos[i];
    const line = document.createElementNS(SVGNS, "line");
    line.setAttribute("class", "heap-tree-link");
    line.setAttribute("x1", a.x);
    line.setAttribute("y1", a.y + NODE_H / 2);
    line.setAttribute("x2", b.x);
    line.setAttribute("y2", b.y - NODE_H / 2);
    svg.appendChild(line);
  }

  // nodes
  for (let i = 0; i < n; i++) {
    const p = pos[i];
    const g = document.createElementNS(SVGNS, "g");
    g.setAttribute("class", "heap-tree-node");
    g.setAttribute("data-idx", String(i));
    const rect = document.createElementNS(SVGNS, "rect");
    rect.setAttribute("x", p.x - NODE_W / 2);
    rect.setAttribute("y", p.y - NODE_H / 2);
    rect.setAttribute("width", NODE_W);
    rect.setAttribute("height", NODE_H);
    rect.setAttribute("rx", 12);
    g.appendChild(rect);
    const val = document.createElementNS(SVGNS, "text");
    val.setAttribute("class", "heap-tree-val");
    val.setAttribute("x", p.x);
    val.setAttribute("y", p.y);
    val.setAttribute("dy", "0.35em");
    val.textContent = array[i];
    g.appendChild(val);
    svg.appendChild(g);
  }
}

function renderHeapTreeArray(el) {
  if (!el) return;
  let arr;
  try {
    arr = JSON.parse(el.dataset.heapArray);
  } catch (e) {
    return;
  }
  if (!Array.isArray(arr)) return;
  el.innerHTML = "";
  arr.forEach((v) => {
    const t = document.createElement("div");
    t.className = "heap-tree-arr-tile";
    t.textContent = v;
    el.appendChild(t);
  });
}

function initHeapTreeArt(root) {
  if (!root) return;
  root.querySelectorAll("svg.heap-tree-svg[data-array]").forEach((svg) => {
    let arr;
    try {
      arr = JSON.parse(svg.dataset.array);
    } catch (e) {
      return;
    }
    if (Array.isArray(arr)) drawBinaryHeapTree(svg, arr);
  });
  root.querySelectorAll("[data-heap-array]").forEach(renderHeapTreeArray);
}

function buildTOC() {
  toc.innerHTML = "";
  const headings = articleBody.querySelectorAll("h2, h3");
  if (headings.length === 0) {
    rightSidebar.classList.remove("visible");
    mainEl.classList.remove("has-toc");
    return;
  }

  rightSidebar.classList.add("visible");
  mainEl.classList.add("has-toc");

  headings.forEach((h, i) => {
    const id = "toc-" + i;
    h.id = id;
    const item = document.createElement("a");
    item.className = "toc-item";
    item.textContent = h.textContent;
    item.href = "#" + id;
    if (h.tagName === "H3") item.style.paddingLeft = "24px";
    item.addEventListener("click", (e) => {
      e.preventDefault();
      h.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    toc.appendChild(item);
  });
}

// ═══════════════════════════════════════════════════════════
//  SEARCH
// ═══════════════════════════════════════════════════════════

function flattenAll() {
  const flat = [];
  docs.forEach((topic) => {
    topic.articles.forEach((article) => {
      flat.push({ topic, article });
    });
  });
  return flat;
}

const flatAll = flattenAll();

function openSearch() {
  searchOverlay.classList.add("open");
  searchModalInput.value = "";
  searchModalResults.innerHTML = '<div class="search-modal-empty">Start typing to search across all documentation</div>';
  searchFocusIdx = -1;
  setTimeout(() => searchModalInput.focus(), 50);
}

function closeSearch() {
  searchOverlay.classList.remove("open");
}

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter((t) => t.length >= 2);
}

function stem(word) {
  if (word.length > 3 && word.endsWith("s")) return word.slice(0, -1);
  if (word.length > 4 && word.endsWith("es")) return word.slice(0, -2);
  return word;
}

function stemTokens(tokens) {
  return tokens.map(stem);
}

function runSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) {
    searchModalResults.innerHTML = '<div class="search-modal-empty">Start typing to search across all documentation</div>';
    searchFocusIdx = -1;
    return;
  }

  const queryTokens = tokenize(q);
  if (!queryTokens.length) {
    searchModalResults.innerHTML = '<div class="search-modal-empty">Start typing to search across all documentation</div>';
    searchFocusIdx = -1;
    return;
  }

  const stemmedQuery = stemTokens(queryTokens);

  const scored = flatAll.map((item) => {
    const titleText = item.article.title.toLowerCase();
    const descText = item.article.desc.toLowerCase();
    const labelText = item.topic.label.toLowerCase();
    const tagsText = (item.topic.tags || []).join(" ").toLowerCase();

    const titleTokens = stemTokens(tokenize(titleText));
    const descTokens = stemTokens(tokenize(descText));
    const labelTokens = stemTokens(tokenize(labelText));
    const tagsTokens = stemTokens(tokenize(tagsText));

    let matchCount = 0;
    let titleHits = 0;
    let descHits = 0;

    for (let i = 0; i < stemmedQuery.length; i++) {
      const st = stemmedQuery[i];
      const raw = queryTokens[i];

      const inTitle = titleTokens.some((t) => t === st || t.includes(raw));
      const inLabel = labelTokens.some((t) => t === st || t.includes(raw));
      const inTags = tagsTokens.some((t) => t === st || t.includes(raw));
      const inDesc = descTokens.some((t) => t === st || t.includes(raw));

      if (inTitle || inLabel || inTags || inDesc) matchCount++;
      if (inTitle) titleHits++;
      if (inDesc) descHits++;
    }

    const score =
      (matchCount / stemmedQuery.length) +
      (titleHits / stemmedQuery.length) * 1.5 +
      (descHits / stemmedQuery.length) * 0.5;

    return { item, score, matchCount };
  });

  const results = scored
    .filter((r) => r.matchCount > 0)
    .sort((a, b) => b.score - a.score);

  if (!results.length) {
    searchModalResults.innerHTML = '<div class="search-modal-empty">No results found</div>';
    searchFocusIdx = -1;
    return;
  }

  searchModalResults.innerHTML = "";
  searchFocusIdx = -1;

  results.forEach(({ item }) => {
    const div = document.createElement("div");
    div.className = "search-result-item";
    div.innerHTML = `
      <span class="search-result-parent">${item.topic.label}</span>
      <span class="search-result-label">${item.article.title} — ${item.article.desc}</span>
    `;
    div.addEventListener("click", () => {
      openArticle(item.topic, item.article);
      closeSearch();
      closeSidebarMobile();
    });
    searchModalResults.appendChild(div);
  });
}

searchTrigger.addEventListener("click", openSearch);
searchTrigger.addEventListener("focus", (e) => {
  e.target.blur();
  openSearch();
});

const mobileSearchBtn = document.getElementById("mobileSearchBtn");
if (mobileSearchBtn) {
  mobileSearchBtn.addEventListener("click", openSearch);
}

searchOverlay.addEventListener("click", (e) => {
  if (e.target === searchOverlay) closeSearch();
});

searchModalInput.addEventListener("input", (e) => runSearch(e.target.value));

searchModalInput.addEventListener("keydown", (e) => {
  const items = searchModalResults.querySelectorAll(".search-result-item");
  if (!items.length) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    searchFocusIdx = Math.min(searchFocusIdx + 1, items.length - 1);
    items.forEach((el, i) => el.classList.toggle("focused", i === searchFocusIdx));
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    searchFocusIdx = Math.max(searchFocusIdx - 1, 0);
    items.forEach((el, i) => el.classList.toggle("focused", i === searchFocusIdx));
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (searchFocusIdx >= 0 && searchFocusIdx < items.length) items[searchFocusIdx].click();
  } else if (e.key === "Escape") {
    closeSearch();
  }
});

// Ctrl+K
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    if (searchOverlay.classList.contains("open")) closeSearch();
    else openSearch();
  }
  if (e.key === "Escape") closeSearch();
});

// Hero tags
document.querySelectorAll(".hero-tag").forEach((tag) => {
  tag.addEventListener("click", () => {
    const topic = docs.find((t) => t.id === tag.dataset.topic);
    if (topic && topic.articles.length > 0) openArticle(topic, topic.articles[0]);
  });
});

// ═══════════════════════════════════════════════════════════
//  MOBILE
// ═══════════════════════════════════════════════════════════

function openSidebarMobile() {
  sidebar.classList.add("open");
  sidebarOverlay.classList.add("open");
}

function closeSidebarMobile() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("open");
}

mobileMenuBtn.addEventListener("click", openSidebarMobile);
sidebarOverlay.addEventListener("click", closeSidebarMobile);

// ═══════════════════════════════════════════════════════════
//  PROGRESS BAR & BACK TO TOP
// ═══════════════════════════════════════════════════════════

window.addEventListener("resize", () => {
  normalizeSortTree(articleBody);
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = progress + "%";

  if (scrollTop > 400) backToTop.classList.add("visible");
  else backToTop.classList.remove("visible");
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ═══════════════════════════════════════════════════════════
//  LOGO -> HOME
// ═══════════════════════════════════════════════════════════

logoLink.addEventListener("click", (e) => {
  e.preventDefault();
  showHome();
});

// ═══════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════

const savedTheme = localStorage.getItem("roshan-theme");
if (savedTheme !== null) {
  themeSlider.value = savedTheme;
  applyTheme(parseInt(savedTheme));
}

buildSidebar();
buildCards();
