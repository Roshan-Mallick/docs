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
