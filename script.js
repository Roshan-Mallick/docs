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
let currentArticleObject = null;   // the lesson being shown
let currentArticleParents = [];    // ancestor groups, outermost first
let searchFocusIdx = -1;
let tocScrollSpyCleanupFn = null;
let tocSpyTicking = false;

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

    // Flatten a topic into a leaf list, keeping each leaf's parent chain so
    // deeply nested groups (e.g. oop-05 "Inheritance" with 6 sub-lessons)
    // still produce a correct prev/next order and breadcrumb.
    // C++ OOP runs basic -> advanced, so its lesson list is broken into phases.
    let phaseNo = 0;
    let lastPhase = null;
    topic.articles.forEach((article) => {
      if (article.phase && article.phase !== lastPhase) {
        phaseNo += 1;
        const phaseHead = document.createElement("div");
        phaseHead.className = "sidebar-phase";
        const n = document.createElement("span");
        n.className = "sidebar-phase-num";
        n.textContent = `Phase ${phaseNo}`;
        const t = document.createElement("span");
        t.textContent = article.phase;
        phaseHead.append(n, t);
        children.appendChild(phaseHead);
        lastPhase = article.phase;
      }

      const child = document.createElement("div");
      child.className = "sidebar-child";
      child.dataset.id = article.id;
      child.addEventListener("click", () => {
        openArticle(topic, article);
        closeSidebarMobile();
      });

      const subItems = article.children && article.children.length
        ? article.children.map((a) => ({ id: a.id, title: a.title, article: a }))
        : article.outline && article.outline.length
          ? article.outline.map((sec) => ({ id: sec.id, title: sec.title, article, anchor: sec.id }))
          : null;

      if (subItems) {
        // A lesson that groups sub-lessons, or (via `outline`) in-page sections
        // of one long lesson. The header opens the lesson, the arrow toggles
        // the sub-list, and each sub-item navigates inside that lesson.
        child.classList.add("sidebar-group");
        const label = document.createElement("span");
        label.className = "sidebar-group-label";
        label.innerHTML = `<span>${article.title}</span><span class="sidebar-arrow">&#9656;</span>`;
        child.appendChild(label);

        const sub = document.createElement("div");
        sub.className = "sidebar-children sidebar-children-sub";
        subItems.forEach((it) => {
          const subChild = document.createElement("div");
          subChild.className = it.anchor ? "sidebar-child sidebar-anchor" : "sidebar-child";
          subChild.dataset.id = it.id;
          if (it.anchor) subChild.dataset.anchor = it.anchor;
          subChild.textContent = it.title;
          subChild.addEventListener("click", (e) => {
            e.stopPropagation();
            openArticle(topic, it.article, it.anchor);
            closeSidebarMobile();
          });
          sub.appendChild(subChild);
        });

        const arrow = label.querySelector(".sidebar-arrow");
        arrow.addEventListener("click", (e) => {
          e.stopPropagation();
          const isOpen = sub.classList.contains("open");
          sub.classList.toggle("open", !isOpen);
          arrow.classList.toggle("open", !isOpen);
        });

        children.appendChild(child);
        children.appendChild(sub);
      } else {
        child.textContent = article.title;
        children.appendChild(child);
      }
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

/**
 * Flatten a topic's article tree into leaves.
 * Each entry carries `parents` (outermost -> immediate) for breadcrumbs.
 */
function flattenTopic(topic) {
  const out = [];
  const walk = (articles, parents) => {
    articles.forEach((a) => {
      // Every article is an entry, including a group lesson that also has
      // sub-lessons - it has its own content and must appear in reading
      // order, prev/next and progress.
      out.push({ article: a, parents });
      if (a.children && a.children.length) walk(a.children, parents.concat([a]));
    });
  };
  walk(topic.articles, []);
  return out;
}

function findArticleById(topic, id) {
  return flattenTopic(topic).find((n) => n.article.id === id) || null;
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
  document.body.classList.remove("course-mode");
  document.querySelectorAll(".sidebar-item.active, .sidebar-child.active").forEach((el) => el.classList.remove("active"));
  window.scrollTo(0, 0);
}

// ═══════════════════════════════════════════════════════════
//  COURSE MODULE
//  Only activates for topics flagged ui: "course" (currently C++ OOP).
//  Everything below is additive: other topics keep their existing look.
// ═══════════════════════════════════════════════════════════


function isCourse(topic) {
  return !!topic && topic.ui === "course";
}


// ── Page header + breadcrumb ───────────────────────────────
function phaseInfo(topic, article) {
  if (!article.phase) return null;
  const phases = [];
  topic.articles.forEach((a) => {
    if (a.phase && phases[phases.length - 1] !== a.phase) phases.push(a.phase);
  });
  const i = phases.indexOf(article.phase);
  return i < 0 ? null : { index: i + 1, total: phases.length, label: article.phase };
}

function renderPageHeader(topic, article, parents) {
  if (!isCourse(topic)) return;
  const { title, subtitle } = article;
  const crumbs = [topic.label, ...parents.map((p) => p.title), article.title];
  const phase = phaseInfo(topic, article);
  const node = document.getElementById("articleHeader");
  if (!node) return;

  const prevBtn = `<button class="article-back" data-role="back">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      Back to ${topic.label}
    </button>`;

  const crumbHTML = crumbs
    .map((c, i) =>
      i === crumbs.length - 1
        ? `<span class="crumb-current">${c}</span>`
        : `<span class="crumb">${c}</span><span class="crumb-sep">/</span>`
    )
    .join("");

  node.innerHTML = `
    ${prevBtn}
    <nav class="cpp-breadcrumb" aria-label="Breadcrumb">${crumbHTML}</nav>
    <div class="cpp-page-head">
      <div class="cpp-page-title">${article.title}</div>
      <div class="cpp-page-subtitle">${subtitle || article.desc}</div>
      <div class="cpp-page-badges">
        ${phase ? `<span class="cpp-badge cpp-badge--phase">Phase ${phase.index} of ${phase.total} &middot; ${phase.label}</span>` : ""}
        <span class="cpp-badge cpp-badge--${article.difficulty}">${article.difficulty}</span>
        <span class="cpp-badge">${article.time} read</span>
      </div>
    </div>
  `;
  node.querySelector('[data-role="back"]')?.addEventListener("click", showHome);
}

// ── Footer: prev/next ──────────────────────────────────────
function renderCourseFooter(topic, article, parents) {
  if (!isCourse(topic)) return null;
  const wrap = document.createElement("div");
  wrap.className = "cpp-article-footer";

  const order = flattenTopic(topic);
  const idx = order.findIndex((n) => n.article.id === article.id);
  const prev = idx > 0 ? order[idx - 1] : null;
  const next = idx >= 0 && idx < order.length - 1 ? order[idx + 1] : null;

  if (prev || next) {
    const nav = document.createElement("nav");
    nav.className = "cpp-prevnext";
    nav.setAttribute("aria-label", "Lesson navigation");
    if (prev) {
      nav.insertAdjacentHTML(
        "beforeend",
        `<button class="cpp-pn cpp-pn--prev" data-id="${prev.article.id}">
           <span class="cpp-pn-dir">Previous</span>
           <span class="cpp-pn-title">${prev.article.title}</span>
         </button>`
      );
    }
    if (next) {
      nav.insertAdjacentHTML(
        "beforeend",
        `<button class="cpp-pn cpp-pn--next" data-id="${next.article.id}">
           <span class="cpp-pn-dir">Next</span>
           <span class="cpp-pn-title">${next.article.title}</span>
         </button>`
      );
    }
    wrap.appendChild(nav);
  }
  return wrap;
}

function bindCourseFooter(topic, wrap) {
  if (!wrap) return;
  wrap.querySelectorAll(".cpp-pn").forEach((b) =>
    b.addEventListener("click", () => {
      const node = findArticleById(topic, b.dataset.id);
      if (node) openArticle(topic, node.article);
    })
  );
}


// ── Tables: wrap for horizontal scroll ─────────────────────
function renderTables(root) {
  root.querySelectorAll("table").forEach((t) => {
    if (t.parentElement?.classList.contains("cpp-table-wrap")) return;
    const wrap = document.createElement("div");
    wrap.className = "cpp-table-wrap";
    wrap.setAttribute("role", "region");
    wrap.setAttribute("tabindex", "0");
    t.parentNode.insertBefore(wrap, t);
    wrap.appendChild(t);
  });
}

// ── Sub-lesson list inside a group lesson ──────────────────
function renderSubtopics(root, topic) {
  root.querySelectorAll(".cpp-subtopics").forEach((el) => {
    const group = topic.articles.find((a) => a.children && a.children.length);
    if (!group) return;
    el.innerHTML = `
      <div class="cpp-subtopics-title">Lessons in this group</div>
      <div class="cpp-subtopics-list">
        ${group.children
          .map(
            (c) => `<button class="cpp-subtopic" data-id="${c.id}">
                      <span class="cpp-subtopic-title">${c.title}</span>
                      <span class="cpp-subtopic-desc">${c.desc}</span>
                      <span class="cpp-subtopic-meta">${c.difficulty} · ${c.time}</span>
                    </button>`
          )
          .join("")}
      </div>`;
    el.querySelectorAll(".cpp-subtopic").forEach((b) =>
      b.addEventListener("click", () => {
        const node = findArticleById(topic, b.dataset.id);
        if (node) openArticle(topic, node.article);
      })
    );
  });
}

// ── Code blocks: language label + line numbers ─────────────
function enhanceCodeBlocks(root) {
  root.querySelectorAll("pre").forEach((pre) => {
    if (pre.dataset.enhanced === "1") return;
    pre.dataset.enhanced = "1";

    const lang = pre.dataset.lang;
    if (lang) {
      const tag = document.createElement("span");
      tag.className = "cpp-code-lang";
      tag.textContent = lang;
      pre.appendChild(tag);
    }

    // Wrong/correct marker on comparison code blocks.
    if (pre.dataset.verdict) {
      const ok = pre.dataset.verdict === "right";
      pre.classList.add(ok ? "is-right" : "is-wrong");
      const v = document.createElement("span");
      v.className = "cpp-code-verdict";
      v.textContent = ok ? "Correct" : "Wrong";
      pre.appendChild(v);
    }

    if (pre.dataset.lines === "true") {
      const code = pre.querySelector("code");
      if (!code) return;
      const lines = code.textContent.replace(/\n$/, "").split("\n");
      const gutter = document.createElement("span");
      gutter.className = "cpp-code-gutter";
      gutter.setAttribute("aria-hidden", "true");
      gutter.innerHTML = lines.map((_, i) => `<span>${i + 1}</span>`).join("");
      pre.insertBefore(gutter, code);
      code.classList.add("cpp-code-body");
    }
  });
}

// ── Course init (called after every openArticle) ───────────
// ---------------------------------------------------------------------------
// Lesson content components
// Data-driven so lessons stay declarative: each is authored in data.js as an
// empty element with pipe-separated data, then filled in here.
// ---------------------------------------------------------------------------

// A "D:" prefix in the data marks a step as a destruction event.
const kindOf = (t) => (/^D:/.test(t) ? "destroy" : "construct");

// Vertical chain of stages with arrow connectors (execution flow, lifecycle).
function renderFlows(root) {
  root.querySelectorAll(".cpp-flow[data-flow]").forEach((el) => {
    const steps = el.dataset.flow.split("|").map((t) => t.trim()).filter(Boolean);
    el.classList.add("cpp-flow-list");
    el.innerHTML = steps
      .map(
        (t, i) =>
          `<div class="cpp-flow-step"><div class="cpp-flow-box">${t}</div>${
            i < steps.length - 1 ? '<div class="cpp-flow-arrow" aria-hidden="true"></div>' : ""
          }</div>`
      )
      .join("");
  });
}

// Numbered sequence along a connecting rail (call-order timelines).
function renderTimelines(root) {
  root.querySelectorAll(".cpp-timeline[data-timeline]").forEach((el) => {
    const steps = el.dataset.timeline.split("|").map((t) => t.trim()).filter(Boolean);
    el.innerHTML = steps
      .map((t, i) => {
        const kind = kindOf(t);
        const label = t.replace(/^D:/, "");
        return `<div class="cpp-tl-item"${kind === "destroy" ? ' data-kind="destroy"' : ""}><span class="cpp-tl-n">${i + 1}</span><span class="cpp-tl-t">${label}</span></div>`;
      })
      .join("");
  });
}

// Numbered explanation steps.
function renderSteps(root) {
  root.querySelectorAll(".cpp-steps[data-steps]").forEach((el) => {
    const steps = el.dataset.steps.split("|").map((t) => t.trim()).filter(Boolean);
    el.innerHTML = `<ol class="cpp-steps-list">${steps
      .map((t) => `<li>${t}</li>`)
      .join("")}</ol>`;
  });
}

function initCourseUI(topic) {
  if (!isCourse(topic)) return;
  enhanceCodeBlocks(articleBody);
  renderTables(articleBody);
  renderSubtopics(articleBody, topic);
  renderFlows(articleBody);
  renderTimelines(articleBody);
  renderSteps(articleBody);


  articleBody.appendChild(renderCourseFooter(topic, currentArticleObject, currentArticleParents) || document.createElement("div"));
  bindCourseFooter(topic, articleBody.querySelector(".cpp-article-footer"));
}

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

function openArticle(topic, article, anchorId) {
  currentTopicId = topic.id;
  currentArticleId = article.id;

  // Resolve where this lesson sits in the topic tree (for breadcrumb + prev/next)
  const node = findArticleById(topic, article.id);
  currentArticleObject = article;
  currentArticleParents = node ? node.parents : [];

  heroSection.style.display = "none";
  document.getElementById("docCards").style.display = "none";
  articleView.style.display = "";

  // Course topics get their own scoped design system
  document.body.classList.toggle("course-mode", isCourse(topic));

  const fullContent = article.content;
  if (isCourse(topic)) {
    renderPageHeader(topic, article, currentArticleParents);
  } else {
    articleHeader.innerHTML = `
      <button class="article-back" id="articleBack">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
        Back to ${topic.label}
      </button>
    `;
  }
  articleBody.innerHTML = fullContent;

  articleBody.querySelectorAll("pre").forEach((pre) => {
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    btn.addEventListener("click", () => {
      const code = pre.querySelector(".cpp-code-body")?.textContent || pre.querySelector("code")?.textContent || pre.textContent;
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
  initSortFigures(articleBody);
  initCourseUI(topic);

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
  if (sidebarChild) {
    sidebarChild.classList.add("active");
    // Open every ancestor group so the active lesson is always visible
    let p = sidebarChild.parentElement;
    while (p && !p.classList.contains("sidebar-section")) {
      if (p.classList.contains("sidebar-children") && !p.classList.contains("open")) {
        p.classList.add("open");
        p.previousElementSibling?.querySelector(".sidebar-arrow")?.classList.add("open");
      }
      p = p.parentElement;
    }
  }

  buildTOC();
  window.scrollTo(0, 0);

  // In-page section link: jump after the TOC pass so heading ids exist.
  if (anchorId) {
    const target = articleBody.querySelector(`[id="${anchorId}"]`);
    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        syncOutlineActive(anchorId);
      });
    }
  } else {
    syncOutlineActive(null);
  }
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
    if (span === 0 && min === 0) {
      nb = 1;
      width = 1;
      ranges = [{ lo: 0, hi: 0 }];
      idxOf = () => 0;
    } else if (m === "width") {
      width = Math.max(1, Math.ceil((max + 1) / kTarget));
      nb = Math.floor(max / width) + 1;
      ranges = [];
      for (let b = 0; b < nb; b++) {
        ranges.push({
          lo: b * width,
          hi: b === nb - 1 ? max : (b + 1) * width - 1
        });
      }
      idxOf = (v) => Math.floor(v / width);
    } else {
      nb = Math.min(kTarget, max + 1);
      const den = max + 1;
      ranges = [];
      for (let b = 0; b < nb; b++) {
        ranges.push({
          lo: Math.ceil((b * den) / nb),
          hi: b === nb - 1 ? max : Math.ceil(((b + 1) * den) / nb) - 1
        });
      }
      idxOf = (v) => Math.floor((nb * v) / den);
    }
    return { m, min, max, span, width, nb, ranges, idxOf };
  }

  const formula = (pl, v, b) =>
    pl.m === "width"
      ? "\u230a" + v + " \u00f7 " + pl.width + "\u230b = " + b
      : "\u230a" + pl.nb + " \u00d7 " + v + " \u00f7 (" + pl.max + " + 1)\u230b = " + b;

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
        ? "Bucket ranges \u2014 width " + pl.width + " gives " + pl.nb + " buckets: " + pl.min + "\u2192bucket " + pl.idxOf(pl.min) + ", " + pl.max + "\u2192bucket " + pl.idxOf(pl.max)
        : "Bucket ranges \u2014 k = " + pl.nb + " buckets over the values 0 \u2013 " + pl.max + " (" + (pl.max + 1) + " values in the range)");

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
      focusEl.appendChild(mk("bk-focus-op", "Buckets: " + plan.nb + (plan.m === "width" ? " \u00b7 width " + plan.width : " \u00b7 k = " + plan.nb + " over 0 \u2013 " + plan.max)));
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
      plan.m === "width" ? "Width <b>" + plan.width + "</b>" : "k <b>" + plan.nb + "</b>";

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

// ═══════════════════════════════════════════════════════════
//  SORTING VISUALIZATION KIT
//  Shared primitives for every sorting diagram. All geometry is
//  computed here: node boxes are measured, parents are centred
//  over the span of their children, and every connector is
//  derived from the final centre coordinates. No diagram in the
//  Sorting section hardcodes a line or a position.
// ═══════════════════════════════════════════════════════════

const VIZ = (() => {
  const SVGNS = "http://www.w3.org/2000/svg";

  // ── Shared node scale ───────────────────────────────────────
  // One scale for every tree figure. Box heights, corner radius, font
  // sizes and the row/column spacing all come from here, so the Quick
  // Sort and Merge Sort trees cannot drift apart, and the
  // .viz-node-* font sizes in the stylesheet have exactly one
  // counterpart to stay in step with.
  const SCALE = {
    // Font sizes, mirrored by .viz-node-val / -cap / -tag in the stylesheet.
    valRem: 0.9, capRem: 0.72, tagRem: 0.64,
    // Box heights, in px of a 16px root. A one line node is a chip; a two
    // or three line node is a little taller but shares the same padding.
    leafH: 36, splitH2: 46, splitH3: 50,
    // Width clamps, px of a 16px root. A box is sized from its own text
    // and then clamped, so a short range stays a small chip and one long
    // value can never turn the node into an oversized card.
    leafW: [48, 56], emptyW: [44, 52], splitW: [104, 260],
    // Shape and spacing.
    rx: 8, step: 13, padX: 8,
    // Layout grid handed to drawTree.
    cfg: { levelH: 78, nodeH: 50, padY: 26, padX: 22, gap: 18 },
    // Narrowest a tree is allowed to get before the card scrolls instead.
    minTreeW: 320,
  };

  // Box metrics for one figure, resolved against the live root font size so
  // the measurements track the .viz-node-* font sizes (and browser text
  // zoom) instead of drifting apart from them.
  function metrics() {
    const px = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const u = (px > 0 ? px : 16) / 16;
    const valPx = SCALE.valRem * 16 * u;
    const capPx = SCALE.capRem * 16 * u;
    const tagPx = SCALE.tagRem * 16 * u;
    // Rough advance width of one line: a mono run is ~0.6em per character, a
    // sans caption ~0.56em, plus whatever letter-spacing the class adds.
    const lineW = (text, p, mono, ls) =>
      text.length * p * (mono ? 0.6 : 0.56) + (ls || 0) * text.length * p;
    const boxW = (lines) =>
      Math.ceil(lines.reduce((m, l) => Math.max(m, lineW(l.text, l.px, l.mono, l.ls)), 0)) +
      2 * SCALE.padX * u;
    const fit = (w, lo, hi) => Math.max(lo * u, Math.min(hi * u, w));
    return {
      u: u,
      valPx: valPx, capPx: capPx, tagPx: tagPx,
      leafH: SCALE.leafH * u,
      splitH2: SCALE.splitH2 * u,
      splitH3: SCALE.splitH3 * u,
      // Line constructors, so no figure spells out the px or the class.
      val: (text) => ({ text: text, px: valPx, mono: true }),
      cap: (text) => ({ text: text, px: capPx, mono: false, cls: "viz-node-cap" }),
      tag: (text) => ({ text: text, px: tagPx, mono: false, ls: 0.04, cls: "viz-node-tag" }),
      emptyW: (lines) => fit(boxW(lines), SCALE.emptyW[0], SCALE.emptyW[1]),
      leafW: (lines) => fit(boxW(lines), SCALE.leafW[0], SCALE.leafW[1]),
      splitW: (lines) => fit(boxW(lines), SCALE.splitW[0], SCALE.splitW[1]),
      // The shared layout grid, with the shared shape values folded in.
      cfg: Object.assign({}, SCALE.cfg, { step: SCALE.step, rx: SCALE.rx }),
    };
  }

  // ── Tree layout ────────────────────────────────────────────
  // Standard leaf-packing layout: every subtree reserves the
  // width it needs, a parent is placed at the midpoint of the
  // first and last child, so children are always evenly spread
  // and a parent is always centred above them.
  function treeLayout(root, cfg) {
    const gap = cfg.gap != null ? cfg.gap : 22;
    const nodes = [];

    // Pass 1 - reserve horizontal space for every subtree.
    //
    // A subtree's span is the width of the widest row it contains: its own
    // box, or its children packed together with `gap` between them. Using a
    // real subtree extent (instead of only the leaf cursor) is what keeps a
    // wide parent label from overlapping its neighbouring subtree.
    (function measure(n) {
      n.w = Math.max(n.width || 0, 46);
      n.h = n.height || cfg.nodeH;
      if (!n.children || !n.children.length) {
        n.span = n.w;
        return n.span;
      }
      let sum = 0;
      n.children.forEach((c, i) => {
        sum += measure(c);
        if (i) sum += gap;
      });
      n.span = Math.max(n.w, sum);
      return n.span;
    })(root);

    // Pass 2 - place each subtree inside the space reserved for it.
    //
    // `left` is the x coordinate the subtree may start at; the subtree is
    // laid out inside that box and its own centre is returned so the parent
    // can centre itself over the children.
    let maxRight = 0;

    function place(n, left, depth) {
      n.depth = depth;
      n.y = cfg.padY + depth * cfg.levelH;
      nodes.push(n);

      if (!n.children || !n.children.length) {
        n.x = left + n.span / 2;
        maxRight = Math.max(maxRight, n.x + n.w / 2);
        return n.x;
      }

      // Children fill the reserved span in order, keeping `gap` between them.
      // Leftover room is distributed so the group stays centred.
      const kids = n.children;
      const total = kids.reduce((s, c) => s + c.span, 0) + gap * (kids.length - 1);
      let cursor = left + (n.span - total) / 2;
      kids.forEach((c, i) => {
        place(c, cursor, depth + 1);
        cursor += c.span + (i < kids.length - 1 ? gap : 0);
      });

      // The parent is centred over its children, then nudged so its own box
      // never leaves the span reserved for this subtree.
      const first = kids[0];
      const last = kids[kids.length - 1];
      n.x = (first.x + last.x) / 2;
      const halfW = n.w / 2;
      const boxLeft = left;
      const boxRight = left + n.span;
      if (n.x - halfW < boxLeft) n.x = boxLeft + halfW;
      if (n.x + halfW > boxRight) n.x = boxRight - halfW;
      // Re-centre if the clamp left us off, as long as the box still fits.
      const ideal = (first.x + last.x) / 2;
      if (n.w <= n.span) n.x = ideal;
      maxRight = Math.max(maxRight, n.x + halfW);
      return n.x;
    }

    place(root, cfg.padX, 0);

    let maxDepth = 0;
    let maxH = 0;
    nodes.forEach((n) => {
      maxDepth = Math.max(maxDepth, n.depth);
      maxH = Math.max(maxH, n.h);
    });

    const W = Math.max(maxRight + cfg.padX, cfg.padX + root.span);
    const H = cfg.padY * 2 + maxDepth * cfg.levelH + maxH;
    return { nodes, W, H, root };
  }

  // ── Tree drawing ───────────────────────────────────────────
  // A connector always starts at the bottom-centre of the parent
  // box and ends at the top-centre of the child box. A straight
  // segment is used when the centres line up, otherwise a
  // three-segment elbow through the gap between the two rows.
  function drawTree(svg, spec) {
    const cfg = Object.assign(
      { padX: 26, padY: 30, levelH: 104, nodeH: 50, gap: 22, elbow: true, step: 15, rx: 10 },
      spec.cfg || {}
    );
    const L = treeLayout(spec.root, cfg);
    svg.innerHTML = "";
    // Keep intrinsic width/height alongside the viewBox: the CSS scales
    // the tree with width:100%; height:auto, which needs an explicit
    // aspect ratio or the SVG collapses to zero height.
    svg.setAttribute("viewBox", "0 0 " + L.W + " " + L.H);
    svg.setAttribute("width", L.W);
    svg.setAttribute("height", L.H);
    svg.setAttribute("preserveAspectRatio", "xMidYMin meet");
    // Pin the ceiling to the tree's own width. width:100% alone would stretch
    // a narrow tree up to the full card, blowing every box and label up with
    // it; capped here the tree only ever shrinks (narrow screens) so the whole
    // recursion stays visible at its natural size with no side scrolling.
    svg.style.maxWidth = L.W + "px";
    // ...and pin a floor as well: below it the boxes and labels would shrink
    // past readability, so the card scrolls the tree instead of squashing it.
    svg.style.minWidth = Math.min(L.W, SCALE.minTreeW) + "px";

    const links = [];
    L.nodes.forEach((n) => {
      if (!n.children) return;
      n.children.forEach((c) => links.push({ p: n, c: c }));
    });

    links.forEach(({ p, c }) => {
      const px = p.x, py = p.y + p.h / 2;
      const cx = c.x, cy = c.y - c.h / 2;
      const cls = "viz-link" + (c.linkClass ? " " + c.linkClass : "");
      const straight = Math.abs(px - cx) < 0.75;
      const d = straight
        ? "M " + px + " " + py + " L " + cx + " " + cy
        : "M " + px + " " + py +
          " L " + px + " " + (py + (cy - py) / 2) +
          " L " + cx + " " + (py + (cy - py) / 2) +
          " L " + cx + " " + cy;
      const path = document.createElementNS(SVGNS, "path");
      path.setAttribute("class", cls);
      path.setAttribute("d", d);
      svg.appendChild(path);
    });

    L.nodes.forEach((n) => {
      const g = document.createElementNS(SVGNS, "g");
      g.setAttribute("class", "viz-node" + (n.cls ? " " + n.cls : ""));
      g.setAttribute("data-node", n.id != null ? String(n.id) : "");
      const rect = document.createElementNS(SVGNS, "rect");
      rect.setAttribute("x", n.x - n.w / 2);
      rect.setAttribute("y", n.y - n.h / 2);
      rect.setAttribute("width", n.w);
      rect.setAttribute("height", n.h);
      rect.setAttribute("rx", cfg.rx);
      g.appendChild(rect);
      const lines = n.lines || [];
      const step = cfg.step;
      const top = n.y - ((lines.length - 1) * step) / 2;
      lines.forEach((ln, i) => {
        const t = document.createElementNS(SVGNS, "text");
        t.setAttribute("class", ln.cls || "viz-node-val");
        t.setAttribute("x", n.x);
        t.setAttribute("y", top + i * step);
        t.setAttribute("dy", "0.35em");
        t.textContent = ln.text;
        g.appendChild(t);
      });
      svg.appendChild(g);
    });

    return L;
  }

  // ── Merge ladder primitives ────────────────────────────────
  // A chip is one contiguous run of values as a single compact block, the
  // unit a bottom-up merge is built from. `cap` is the optional caption
  // underneath it (a call signature, a stage name).
  function chip(values, cls, cap) {
    const c = el("div", "viz-chip" + (cls ? " " + cls : ""));
    c.appendChild(el("span", "viz-chip-val", "[" + values.join(", ") + "]"));
    if (cap) c.appendChild(el("span", "viz-chip-cap", cap));
    return c;
  }

  // The same downward arrow the flow diagram uses, so a ladder step and a
  // flow step are visually identical.
  function downArrow(cls) {
    const a = el("div", cls || "viz-flow-arrow");
    a.setAttribute("aria-hidden", "true");
    a.innerHTML =
      '<svg width="14" height="16" viewBox="0 0 18 20" fill="none">' +
      '<path d="M9 1v14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
      '<path d="M3.5 11.5 9 17.5l5.5-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
      "</svg>";
    return a;
  }

  // ── Ladder connectors ─────────────────────────────────────
  // Draws the same three-segment elbow the tree uses, but between two HTML
  // rows of the merge ladder instead of two tree nodes. Geometry is read
  // back from the laid-out DOM, so a line always starts on the real
  // bottom edge of the chip it leaves and ends on the real top edge of the
  // chip it joins, however the rows wrapped on screen.
  //
  // `pairs` is [{ from, to, cls }] of DOM elements. The overlay is sized to
  // the ladder and absolutely positioned behind the chips.
  function ladderLinks(ladder, pairs) {
    if (!pairs.length) return;
    const box = ladder.getBoundingClientRect();
    if (!box.width) return;

    // This runs again on font load, window resize and ResizeObserver, so the
    // previous overlay has to go first or the connectors stack up and the
    // ladder fills with copies of itself.
    const stale = ladder.querySelector(":scope > .viz-ladder-links");
    if (stale) stale.remove();

    const svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("class", "viz-ladder-links");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("viewBox", "0 0 " + box.width + " " + box.height);
    svg.setAttribute("width", box.width);
    svg.setAttribute("height", box.height);

    // The horizontal run of an elbow sits halfway between the two ROWS, not
    // halfway between the two boxes. Rows are uniform in height but their
    // chips are not — a carried element has no caption, so it is shorter than
    // its neighbours. Centring each elbow on its own two boxes would give
    // neighbouring elbows different mid-points and send their horizontal runs
    // across each other; centring on the row gap keeps every elbow in a
    // transition on one shared line, so they can only meet at a shared target.
    const rowBand = (chip) => {
      const row = chip.closest(".viz-ladder-row");
      if (!row) return null;
      const r = row.getBoundingClientRect();
      return { top: r.top - box.top, bottom: r.bottom - box.top };
    };

    pairs.forEach((p) => {
      const a = p.from.getBoundingClientRect();
      const b = p.to.getBoundingClientRect();
      // Bottom-centre of the source, top-centre of the target, in ladder space.
      const x1 = a.left + a.width / 2 - box.left;
      const y1 = a.bottom - box.top;
      const x2 = b.left + b.width / 2 - box.left;
      const y2 = b.top - box.top;
      if (y2 <= y1) return;
      const fromBand = rowBand(p.from);
      const toBand = rowBand(p.to);
      const straight = Math.abs(x1 - x2) < 0.75;
      const my = fromBand && toBand
        ? (fromBand.bottom + toBand.top) / 2
        : y1 + (y2 - y1) / 2;
      const d = straight
        ? "M " + x1 + " " + y1 + " L " + x2 + " " + y2
        : "M " + x1 + " " + y1 + " L " + x1 + " " + my +
          " L " + x2 + " " + my + " L " + x2 + " " + y2;
      const path = document.createElementNS(SVGNS, "path");
      path.setAttribute("class", "viz-ladder-link" + (p.cls ? " " + p.cls : ""));
      path.setAttribute("d", d);
      svg.appendChild(path);
    });

    ladder.insertBefore(svg, ladder.firstChild);
  }

  // ── Divide → merge boundary links ──────────────────────────
  // The divide tree ends in a row of leaves and the bottom-up pass starts
  // from the very same elements, restated as merge inputs. The tree is an
  // SVG and the ladder is HTML, so the two halves are laid out by different
  // engines; the only reliable join is to measure both after layout and
  // draw the links in one overlay that spans the shared container.
  //
  // `leaves` is [{ node, chip }] matching a tree node (with x/y/w/h in SVG
  // user units) to the ladder chip it feeds.
  function leafLinks(flow, treeSvg, layout, leaves) {
    const stale = flow.querySelector(":scope > .viz-leaf-links");
    if (stale) stale.remove();
    if (!leaves.length) return;
    const box = flow.getBoundingClientRect();
    if (!box.width) return;

    const svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("class", "viz-leaf-links");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("viewBox", "0 0 " + box.width + " " + box.height);
    svg.setAttribute("width", box.width);
    svg.setAttribute("height", box.height);

    // The tree SVG is scaled to fit its card, so measure the live scale
    // rather than assuming user units equal CSS pixels.
    const tb = treeSvg.getBoundingClientRect();
    const sx = layout.W ? tb.width / layout.W : 1;
    const sy = layout.H ? tb.height / layout.H : 1;

    leaves.forEach((pair) => {
      const n = pair.node;
      const chip = pair.chip;
      if (!n || !chip) return;
      const cb = chip.getBoundingClientRect();
      const x1 = tb.left - box.left + n.x * sx;
      const y1 = tb.top - box.top + (n.y + n.h / 2) * sy;
      const x2 = cb.left - box.left + cb.width / 2;
      const y2 = cb.top - box.top;
      if (y2 <= y1) return;
      const path = document.createElementNS(SVGNS, "path");
      path.setAttribute("class", "viz-leaf-link");
      path.setAttribute("d", "M " + x1 + " " + y1 + " L " + x2 + " " + y2);
      svg.appendChild(path);
    });

    flow.insertBefore(svg, flow.firstChild);
  }

  // ── Array lane ─────────────────────────────────────────────
  // states is a per-index object; keys match the .viz-cell--*
  // modifiers so every algorithm reuses one tile component.
  // sepAfter is the index of the cell the divider follows; -1 puts it
  // ahead of the first cell (a leading "unsorted" marker). It stays null
  // when the caller asks for none, so a plain lane gets no divider at all
  // rather than an unlabelled bar pinned to its left edge.
  function arrayLane(values, states, opts) {
    const o = Object.assign({ sepAfter: null, sepLabel: "", showIndex: false }, opts || {});
    const lane = el("div", "viz-array");
    values.forEach((v, i) => {
      if (o.sepAfter != null && i === o.sepAfter + 1) {
        const sep = el("div", "viz-sep");
        if (o.sepLabel) sep.appendChild(el("div", "viz-sep-label", o.sepLabel));
        lane.appendChild(sep);
      }
      const st = [].concat((states && states[i]) || [])
        .filter(Boolean)
        .map((s) => "viz-cell--" + s);
      const cell = el("div", "viz-cell" + (st.length ? " " + st.join(" ") : ""));
      cell.textContent = v;
      if (o.showIndex) cell.appendChild(el("span", "viz-cell-idx", "i " + i));
      lane.appendChild(cell);
    });
    return lane;
  }

  // ── Bucket containers ──────────────────────────────────────
  // Each bucket is a real vertical container: header on top, a
  // bordered body, values stacked bottom-up inside the body.
  function bucketRow(buckets, opts) {
    const o = Object.assign({ emptySlot: true }, opts || {});
    const row = el("div", "viz-buckets");
    buckets.forEach((b) => {
      const box = el("div", "viz-bucket" + (b.cls ? " " + b.cls : ""));
      const head = el("div", "viz-bucket-head");
      head.appendChild(el("div", "viz-bucket-name", b.name));
      if (b.range) head.appendChild(el("div", "viz-bucket-range", b.range));
      box.appendChild(head);
      const body = el("div", "viz-bucket-body");
      (b.items || []).forEach((v) => body.appendChild(el("div", "viz-bucket-cell", String(v))));
      if (o.emptySlot && !(b.items || []).length) body.appendChild(el("div", "viz-bucket-empty"));
      box.appendChild(body);
      row.appendChild(box);
    });
    return row;
  }

  // ── Gap groups (Shell) ─────────────────────────────────────
  // Each group is one gapped chain, joined by a real connector so
  // the distance a value travels inside its group is visible.
  function groupRow(groups, opts) {
    const o = Object.assign({ link: "→" }, opts || {});
    const row = el("div", "viz-groups");
    groups.forEach((g) => {
      const box = el("div", "viz-group" + (g.cls ? " " + g.cls : ""));
      const head = el("div", "viz-group-head");
      head.appendChild(el("div", "viz-group-name", g.name));
      if (g.indices) head.appendChild(el("div", "viz-group-idx", g.indices));
      box.appendChild(head);
      const chain = el("div", "viz-group-chain");
      (g.items || []).forEach((it, i) => {
        if (i) chain.appendChild(el("span", "viz-group-link", o.link));
        chain.appendChild(el("div", "viz-group-cell" + (it.cls ? " " + it.cls : ""), String(it.v)));
      });
      box.appendChild(chain);
      row.appendChild(box);
    });
    return row;
  }

  // ── Flow (Introduction) ────────────────────────────────────
  function flow(steps) {
    const f = el("div", "viz-flow");
    steps.forEach((s, i) => {
      if (i) {
        const a = el("div", "viz-flow-arrow");
        a.innerHTML =
          '<svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">' +
          '<path d="M9 1v14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
          '<path d="M3.5 11.5 9 17.5l5.5-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
          "</svg>";
        f.appendChild(a);
      }
      if (s.label) f.appendChild(el("div", "viz-flow-label", s.label));
      if (s.box) f.appendChild(el("div", "viz-flow-box", s.box));
      if (s.nodes) f.appendChild(s.nodes);
    });
    return f;
  }

  function cardGrid(items) {
    const g = el("div", "viz-cards");
    items.forEach((it) => {
      const c = el("div", "viz-card-item");
      c.appendChild(el("p", "viz-card-name", it.name));
      c.appendChild(el("p", "viz-card-idea", it.idea));
      g.appendChild(c);
    });
    return g;
  }

  function legend(pairs) {
    const l = el("div", "viz-legend");
    pairs.forEach((p) => {
      const i = el("span", "viz-legend-item");
      i.appendChild(el("span", "viz-legend-swatch" + (p[1] ? " viz-legend-swatch--" + p[1] : "")));
      i.appendChild(document.createTextNode(p[0]));
      l.appendChild(i);
    });
    return l;
  }

  function el(tag, cls, text) {
    // "svg" must be created in the SVG namespace, otherwise it is just an
    // unknown HTML element: it never paints and collapses to zero height.
    const e = tag === "svg"
      ? document.createElementNS("http://www.w3.org/2000/svg", "svg")
      : document.createElement(tag);
    // SVGElement ignores .className, so set the class attribute directly.
    if (cls) {
      if (e.namespaceURI === "http://www.w3.org/2000/svg") e.setAttribute("class", cls);
      else e.className = cls;
    }
    if (text != null) e.textContent = text;
    return e;
  }

  function caption(text, after) {
    return el("div", "viz-caption" + (after ? " viz-caption--after" : ""), text);
  }

  function note(text) {
    return el("p", "viz-note", text);
  }

  return {
    SCALE, metrics,
    treeLayout, drawTree, arrayLane, bucketRow, groupRow, flow, cardGrid, legend,
    chip, downArrow, ladderLinks, leafLinks,
    el, caption, note,
  };
})();

// ── Figure registry ─────────────────────────────────────────
// data.js only ships a mount point; the figure itself is built
// here so every sorting page shares one implementation.
  // Figures may override their array from the mount point so the
  // article copy and the diagram can never drift apart.
  function readArray(host, fallback) {
    if (host && host.dataset.array) {
      try {
        const v = JSON.parse(host.dataset.array);
        if (Array.isArray(v) && v.length) return v;
      } catch (e) { /* fall through to the default */ }
    }
    return fallback;
  }

const SORT_FIGURES = {};

// ── Bubble Sort figure ──────────────────────────────────────
// Shows the three mechanical steps of one bubble pass: pick an
// adjacent pair, compare it, swap if out of order.
SORT_FIGURES["bubble-mechanics"] = (host) => {
  const a = [5, 1, 4, 2, 8];
  const step = (label, values, states, noteText) => {
    host.appendChild(VIZ.caption(label, true));
    host.appendChild(VIZ.arrayLane(values, states));
    if (noteText) host.appendChild(VIZ.note(noteText));
  };
  host.appendChild(VIZ.caption("Bubble Sort \u2014 one pass, step by step"));

  step("1. Compare the adjacent pair", a, { 0: ["cmp"], 1: ["cmp"] });
  const cmp = VIZ.el("div", "viz-cmp-note");
  cmp.appendChild(VIZ.el("span", "viz-op", "5 > 1"));
  cmp.appendChild(VIZ.el("span", "viz-op viz-op--yes", "yes \u2192 swap"));
  host.appendChild(cmp);

  step("2. Swap them", [1, 5, 4, 2, 8], { 0: ["swap"], 1: ["swap"] });

  step("3. Move one step right and repeat", [1, 5, 4, 2, 8], { 1: ["cmp"], 2: ["cmp"] });
  const cmp2 = VIZ.el("div", "viz-cmp-note");
  cmp2.appendChild(VIZ.el("span", "viz-op", "5 > 4"));
  cmp2.appendChild(VIZ.el("span", "viz-op viz-op--no", "no \u2192 keep, advance"));
  host.appendChild(cmp2);

  step("4. End of pass 1 \u2014 the largest value has bubbled to the end", [1, 4, 2, 5, 8], { 4: ["sorted"] },
    "Every pass pushes the largest remaining value into its final position on the right.");
  host.appendChild(VIZ.legend([
    ["compared", "cmp"], ["swapped", "swap"], ["already sorted", "sorted"],
  ]));
};

// ── Selection Sort figure ────────────────────────────────────
// The whole point is the scan for the minimum inside the
// unsorted range, then one swap across the divider.
SORT_FIGURES["selection-mechanics"] = (host) => {
  const a = [7, 4, 5, 2, 9];
  const step = (label, values, states, opts, noteText) => {
    host.appendChild(VIZ.caption(label, true));
    host.appendChild(VIZ.arrayLane(values, states, opts));
    if (noteText) host.appendChild(VIZ.note(noteText));
  };
  host.appendChild(VIZ.caption("Selection Sort \u2014 find the minimum, then swap it home"));

  step("1. The unsorted range starts at index 0", a,
    { 0: ["active"] },
    { sepAfter: -1, sepLabel: "unsorted" },
    "The sorted prefix is empty; every element is still a candidate.");

  step("2. Scan the range, remembering the smallest value so far", a,
    { 0: ["active"], 1: ["cmp"], 2: ["min"] },
    { sepAfter: -1, sepLabel: "unsorted" });

  step("3. A smaller value is found", a,
    { 0: ["active"], 2: ["min"], 3: ["cmp"] },
    { sepAfter: -1, sepLabel: "unsorted" },
    "2 is the minimum, so the scan can stop early.");

  step("4. Swap the minimum with the first unsorted position", [2, 4, 5, 7, 9],
    { 0: ["swap"], 3: ["swap"] },
    { sepAfter: 0, sepLabel: "sorted" },
    "One swap per pass \u2014 selection sort never shifts elements one at a time.");

  step("5. Pass complete, the sorted prefix grows", [2, 4, 5, 7, 9],
    { 0: ["sorted"], 1: ["active"], 2: ["active"], 3: ["active"], 4: ["active"] },
    { sepAfter: 0, sepLabel: "sorted" });
  host.appendChild(VIZ.legend([
    ["current position", "active"], ["comparing", "cmp"], ["minimum so far", "min"],
    ["swapping", "swap"], ["sorted prefix", "sorted"],
  ]));
};

// ── Insertion Sort figure ───────────────────────────────────
// A single key is lifted out and walked left across the sorted
// prefix, shifting bigger values right until the key fits.
SORT_FIGURES["insertion-mechanics"] = (host) => {
  const a = [4, 7, 3, 9, 1];
  const step = (label, values, states, opts, noteText) => {
    host.appendChild(VIZ.caption(label, true));
    host.appendChild(VIZ.arrayLane(values, states, opts));
    if (noteText) host.appendChild(VIZ.note(noteText));
  };
  host.appendChild(VIZ.caption("Insertion Sort \u2014 lift the key, walk it left"));

  step("1. The prefix is sorted, the key is the next element", a,
    { 0: ["sorted"], 1: ["sorted"], 2: ["key"] },
    { sepAfter: 1, sepLabel: "sorted" },
    "Elements 0 and 1 are already in order, so the key is 3.");

  step("2. Compare the key with the element to its left", a,
    { 1: ["cmp", "sorted"], 2: ["key"] },
    { sepAfter: 1, sepLabel: "sorted" });

  const cmp = VIZ.el("div", "viz-cmp-note");
  cmp.appendChild(VIZ.el("span", "viz-op", "7 > 3"));
  cmp.appendChild(VIZ.el("span", "viz-op viz-op--yes", "yes \u2192 shift 7 right"));
  host.appendChild(cmp);

  step("3. Shift every bigger value one slot right", [4, 7, 7, 9, 1],
    { 1: ["swap", "sorted"], 2: ["key"] },
    { sepAfter: 1, sepLabel: "sorted" },
    "The key is held in memory while the prefix is shifted, not copied.");

  step("4. Compare against the new left neighbour", [4, 3, 7, 9, 1],
    { 0: ["cmp", "sorted"], 1: ["key"] },
    { sepAfter: 1, sepLabel: "sorted" });

  const cmp2 = VIZ.el("div", "viz-cmp-note");
  cmp2.appendChild(VIZ.el("span", "viz-op", "4 > 3"));
  cmp2.appendChild(VIZ.el("span", "viz-op viz-op--yes", "yes \u2192 shift 4 right"));
  host.appendChild(cmp2);

  step("5. Insert the key into the gap it belongs in", [3, 4, 7, 9, 1],
    { 0: ["sorted"], 1: ["sorted"], 2: ["sorted"] },
    { sepAfter: 2, sepLabel: "sorted" },
    "The sorted prefix grew by one. Insertion sort is O(n) on sorted input.");
  host.appendChild(VIZ.legend([
    ["sorted prefix", "sorted"], ["key being inserted", "key"],
    ["comparing", "cmp"], ["shifting", "swap"],
  ]));
};

// ── Quick Sort figure ───────────────────────────────────────
// The partition tree is generated by actually running quicksort
// on the array, so every node, pivot and split shown in the
// figure is the real recursion — nothing is hand-placed.
SORT_FIGURES["quick-tree"] = (host) => {
  const src = readArray(host, [65, 34, 99, 18, 78, 25, 84]);
  const a = src.slice();
  const fmt = (r) => "[" + a.slice(r[0], r[1] + 1).join(", ") + "]";

  // Box metrics come from the shared sorting scale, so this tree and the
  // Merge Sort tree are built to identical dimensions by construction.
  const M = VIZ.metrics();

  const build = (lo, hi) => {
    if (lo > hi) {
      const lines = [M.val("[\u2205]")];
      return { id: "e" + lo + "_" + hi, lines, cls: "viz-node--leaf", width: M.emptyW(lines), height: M.leafH };
    }
    if (lo === hi) {
      const lines = [M.val(fmt([lo, hi]))];
      return { id: "s" + lo, lines, cls: "viz-node--leaf", width: M.leafW(lines), height: M.leafH };
    }
    // The node shows the range this call received, so snapshot it before the
    // partition below rearranges the shared array.
    const input = fmt([lo, hi]);
    // partition() exactly as the article's C code defines it: the pivot is
    // a[lo], i starts just after it and j at the far end, the two walks cross
    // over, and the pivot is then swapped onto the index j stopped on. The
    // j-walk needs no lower guard because a[lo] holds the pivot and is never
    // touched until that final swap.
    const pivot = a[lo];
    let i = lo + 1;
    let j = hi;
    while (i < j) {
      while (i <= hi && a[i] <= pivot) i++;
      while (a[j] > pivot) j--;
      if (i > j) break;
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    const first = a[lo]; a[lo] = a[j]; a[j] = first;
    const final = j;
    // fmt() now reads the range as the partition left it: the pivot at its
    // final index, everything smaller in front of it, everything larger behind.
    const lines = [
      M.val(input),
      M.cap("pivot " + pivot + " \u2192 index " + final),
      M.tag(fmt([lo, hi])),
    ];
    return {
      id: "p" + lo + "_" + hi,
      lines,
      cls: "viz-node--split",
      width: M.splitW(lines),
      height: M.splitH3,
      children: [build(lo, final - 1), build(final + 1, hi)],
    };
  };

  const root = build(0, a.length - 1);
  const svg = VIZ.el("svg", "viz-tree");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Quicksort partition recursion tree");
  host.appendChild(VIZ.caption("Quicksort \u2014 every partition recurses on two smaller ranges"));
  host.appendChild(svg);
  VIZ.drawTree(svg, {
    root: root,
    cfg: M.cfg,
  });
  host.appendChild(VIZ.note(
    "Each node is one partition(lo, hi) call: the pivot lands between the two recursive ranges, so every level of the tree works on a strictly shorter array."
  ));
};

// ── Merge Sort figure ───────────────────────────────────────
// The divide phase is a real recursion and stays a tree, drawn on
// the same compact scale as the Quicksort figure. The merge phase is
// deliberately NOT a second tree: merge sort does not recurse back up,
// so drawing it as an upside-down tree misrepresents the control flow.
// It is shown as a bottom-up ladder of runs instead — every merge is
// one row of "run + run → longer run", grouped by the depth at which
// it happens, with the single-element leaves at the top and the whole
// sorted array at the bottom. All of it is generated by running the
// real algorithm on the real array.
SORT_FIGURES["merge-tree"] = (host) => {
  const src = readArray(host, [13, 9, 7, 12, 6, 9, 12]);
  const a = src.slice();
  const M = VIZ.metrics();
  const fmt = (r) => "[" + a.slice(r[0], r[1] + 1).join(", ") + "]";

  // ── Divide phase ────────────────────────────────────────────
  // Snapshot the ranges first, before the merge phase below mutates
  // `a`, so the tree shows the array as it was received.
  const ranges = [];
  const collectRanges = (lo, hi) => {
    if (lo === hi) {
      ranges.push({ lo: lo, hi: hi, mid: lo, text: fmt([lo, hi]), leaf: true });
      return;
    }
    const mid = lo + Math.floor((hi - lo) / 2);
    const text = fmt([lo, hi]);
    collectRanges(lo, mid);
    collectRanges(mid + 1, hi);
    ranges.push({ lo: lo, hi: hi, mid: mid, text: text, leaf: false });
  };
  collectRanges(0, a.length - 1);

  const byId = new Map();
  ranges.forEach((r) => {
    const lines = r.leaf
      ? [M.val(r.text)]
      : [M.val(r.text), M.cap("mergeSort(" + r.lo + ", " + r.hi + ") \u2192 mid " + r.mid)];
    byId.set(r.lo + "_" + r.hi, {
      id: "d" + r.lo + "_" + r.hi,
      lines: lines,
      cls: r.leaf ? "viz-node--leaf" : "viz-node--split",
      width: r.leaf ? M.leafW(lines) : M.splitW(lines),
      height: r.leaf ? M.leafH : M.splitH2,
      children: [],
    });
  });
  // Re-link: every non-leaf range has the exact two halves it divided into.
  ranges.forEach((r) => {
    if (r.leaf) return;
    const node = byId.get(r.lo + "_" + r.hi);
    const mid = r.mid;
    [[r.lo, mid], [mid + 1, r.hi]].forEach((half) => {
      const child = byId.get(half[0] + "_" + half[1]);
      if (child) node.children.push(child);
    });
  });

  // ── Merge phase ────────────────────────────────────────────
  // Record every merge as a real bottom-up pass, grouped by depth:
  // depth 1 merges single elements into pairs, depth 2 merges pairs
  // into quads, and so on. The array is mutated by a genuine linear
  // merge, so each row's inputs are the runs the row above produced.
  const passes = [];
  const mergePass = (lo, hi, depth) => {
    if (lo >= hi) return;
    const mid = lo + Math.floor((hi - lo) / 2);
    if (lo < mid) mergePass(lo, mid, depth + 1);
    if (mid < hi) mergePass(mid + 1, hi, depth + 1);

    const left = a.slice(lo, mid + 1);
    const right = a.slice(mid + 1, hi + 1);
    const out = [];
    let li = 0;
    let ri = 0;
    while (li < left.length && ri < right.length) {
      out.push(left[li] <= right[ri] ? left[li++] : right[ri++]);
    }
    while (li < left.length) out.push(left[li++]);
    while (ri < right.length) out.push(right[ri++]);
    for (let k = 0; k < out.length; k++) a[lo + k] = out[k];

    (passes[depth] || (passes[depth] = [])).push({
      lo: lo, mid: mid, hi: hi,
      left: left, right: right, out: out,
    });
  };
  mergePass(0, a.length - 1, 0);
  // mergePass records depth 0 as the top-level merge, so the deepest
  // (smallest) passes come last in the array. A bottom-up ladder reads
  // from the bottom up, so render the passes deepest-first.
  passes.reverse();

  // ── Render ─────────────────────────────────────────────────
  host.appendChild(VIZ.caption("Merge Sort — divide down, merge back up"));

  // The divide tree and the bottom-up ladder are one figure, so they share a
  // single relative container: that is what lets the tree's leaves be joined
  // to the merge inputs by measured lines instead of dropping a single
  // generic arrow between two unrelated halves.
  const flow = VIZ.el("div", "viz-merge-flow");
  host.appendChild(flow);

  flow.appendChild(VIZ.el("div", "viz-flow-label", "Divide"));
  const splitSvg = VIZ.el("svg", "viz-tree");
  splitSvg.setAttribute("role", "img");
  splitSvg.setAttribute("aria-label", "Merge sort divide tree");
  flow.appendChild(splitSvg);
  const treeL = VIZ.drawTree(splitSvg, { root: byId.get("0_" + (a.length - 1)), cfg: M.cfg });

  flow.appendChild(VIZ.el("div", "viz-flow-label viz-flow-label--merge", "Merge (bottom-up)"));


  // Fold the passes into explicit levels: level 0 is the array as single
  // elements, and each level after it is the set of runs that exist once the
  // next pass has run. Tracking this way is what lets every connector be
  // drawn between a run and the two runs directly above it, so no line has
  // to skip a level or cross another.
  //
  // A run that no merge consumed this pass (an odd element left over at the
  // end of a pass) is carried down unchanged, which is what merge sort really
  // does; it stays in the figure so the run it eventually joins is one level
  // away from its partner rather than two.
  let level = src.map((v, i) => ({ lo: i, hi: i, values: [v], carried: false }));
  const levels = [level];
  passes.forEach((merges) => {
    const next = [];
    const used = new Set();
    merges.forEach((mg) => {
      const li = level.findIndex((r) => r.lo === mg.lo && r.hi === mg.mid);
      const ri = level.findIndex((r) => r.lo === mg.mid + 1 && r.hi === mg.hi);
      if (li < 0 || ri < 0) return;
      used.add(li);
      used.add(ri);
      next.push({
        lo: mg.lo, hi: mg.hi, values: mg.out, merge: mg, carried: false,
        sources: [level[li], level[ri]],
      });
    });
    level.forEach((r, i) => {
      if (!used.has(i)) next.push({ lo: r.lo, hi: r.hi, values: r.values, merge: null, carried: true, sources: [r] });
    });
    next.sort((p, q) => p.lo - q.lo);
    levels.push(next);
    level = next;
  });

  // Render the levels, remembering the chip element for every run so the
  // connectors can be measured against the real laid-out boxes afterwards.
  const ladder = VIZ.el("div", "viz-ladder");
  const pairs = [];
  levels.forEach((runs, depth) => {
    const row = VIZ.el("div", "viz-ladder-row");
    runs.forEach((run) => {
      const last = depth === levels.length - 1;
      const cls = last ? "viz-chip--final" : run.carried ? "viz-chip--carry" : "viz-chip--out";
      const cap = run.merge
        ? "merge(" + run.merge.lo + ", " + run.merge.mid + ", " + run.merge.hi + ")" + (last ? " \u2192 sorted" : "")
        : null;
      const node = VIZ.chip(run.values, cls, cap);
      run.node = node;
      row.appendChild(node);
    });
    ladder.appendChild(row);

    if (depth === 0) return;
    runs.forEach((run) => {
      const linkCls = run.carried ? "viz-ladder-link--carry" : null;
      run.sources.forEach((s) => {
        if (!s.node) return;
        pairs.push({ from: s.node, to: run.node, cls: linkCls });
      });
    });
  });
  flow.appendChild(ladder);

  // Divide leaves → merge inputs. The bottom-up pass starts from exactly the
  // elements the divide phase ended on, so each tree leaf is joined to the
  // chip it feeds. Node ids are "d" + lo + "_" + hi, so a single element is
  // always d<i>_<i>.
  const leafPairs = (levels[0] || []).map((run, i) => ({
    node: treeL.nodes.find((n) => n.id === "d" + i + "_" + i),
    chip: run.node,
  }));

  // Connectors are drawn from the laid-out DOM, so they need the chips in
  // place and measurable first.
  const redraw = () => {
    VIZ.ladderLinks(ladder, pairs);
    VIZ.leafLinks(flow, splitSvg, treeL, leafPairs);
  };
  redraw();
  // Re-measure if the webfont lands after first paint, or the window resizes
  // and the rows rewrap, so every line stays glued to the chip edges.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(redraw);
  window.addEventListener("resize", redraw);
  if (window.ResizeObserver) new ResizeObserver(redraw).observe(flow);

  host.appendChild(VIZ.note(
    "Each pass merges every pair of runs into one run twice as long, so the merge phase walks back up the exact ranges the divide phase split: single elements become pairs, pairs become quads, and the last pass is the whole array."
  ));
};

// ── Radix Sort figure ───────────────────────────────────────
// Ten real bucket containers. Elements are distributed by the
// current digit and then read back out in bucket order.
SORT_FIGURES["radix-buckets"] = (host) => {
  const src = readArray(host, [170, 45, 75, 90, 802, 24, 2, 66]);
  const passes = [
    { name: "Ones", digit: 0 },
    { name: "Tens", digit: 1 },
    { name: "Hundreds", digit: 2 },
  ];
  const maxDigit = (v, p) => Math.floor(v / Math.pow(10, p)) % 10;

  host.appendChild(VIZ.caption("Radix Sort \u2014 distribute by one digit, then collect 0 \u2192 9"));
  host.appendChild(VIZ.note("Start: [" + src.join(", ") + "]"));

  // LSD radix sort is a chain: each pass distributes the array the
  // previous pass produced, so the earlier digit ordering is carried
  // forward instead of being thrown away.
  let current = src.slice();
  const buckets = passes.map((p) => {
    const groups = [[], [], [], [], [], [], [], [], [], []];
    current.forEach((v) => groups[maxDigit(v, p.digit)].push(v));
    // Stable within a bucket: equal digits keep their incoming order,
    // so no extra sort is needed.
    const order = groups.reduce((acc, g) => acc.concat(g), []);
    current = order;
    return { name: p.name, items: groups, order: order };
  });

  buckets.forEach((b, i) => {
    host.appendChild(VIZ.caption(i + 1 + ". Distribute by the " + b.name.toLowerCase() + " digit", true));
    host.appendChild(VIZ.bucketRow(b.items.map((items, d) => ({
      name: "Bucket " + d,
      items: items,
      cls: items.length ? "viz-bucket--active" : "",
    }))));
    const out = VIZ.el("div", "viz-flow-row");
    out.appendChild(VIZ.caption("collect", true));
    out.appendChild(VIZ.arrayLane(b.order, b.order.map((v, k) => [
      "sorted", k === b.order.length - 1 ? "active" : "",
    ])));
    host.appendChild(out);
  });

  host.appendChild(VIZ.note(
    "Every pass is stable and reads the buckets in order, so the previous digit keeps its ordering \u2014 that is why LSD radix sort works from the least significant digit upward."
  ));
};

// ── Bucket Sort figure ──────────────────────────────────────
// Buckets are real containers spanning the value range, not text
// that names a bucket and prints a list.
SORT_FIGURES["bucket-containers"] = (host) => {
  const src = readArray(host, [7, 3, 4, 8, 13, 11, 9, 1]);
  const min = Math.min.apply(null, src);
  const max = Math.max.apply(null, src);
  const count = 5;
  const size = Math.max(1, Math.ceil((max - min + 1) / count));
  const rangeOf = (b) => {
    const lo = min + b * size;
    const hi = Math.min(max, lo + size - 1);
    return lo + "\u2013" + hi;
  };
  const nBuckets = Math.ceil((max - min + 1) / size);

  host.appendChild(VIZ.caption("Bucket Sort \u2014 scatter into " + nBuckets + " buckets, sort each, concatenate"));
  host.appendChild(VIZ.note("Input: [" + src.join(", ") + "]"));

  const groups = [];
  for (let b = 0; b < nBuckets; b++) groups.push([]);
  src.forEach((v) => groups[Math.min(nBuckets - 1, Math.floor((v - min) / size))].push(v));

  host.appendChild(VIZ.caption("1. Scatter \u2014 each value lands in the bucket covering its range", true));
  host.appendChild(VIZ.bucketRow(groups.map((items, b) => ({
    name: "Bucket " + b,
    range: rangeOf(b),
    items: items,
    cls: items.length ? "viz-bucket--active" : "",
  }))));

  host.appendChild(VIZ.caption("2. Sort inside each bucket", true));
  const sortedGroups = groups.map((g) => g.slice().sort((x, y) => x - y));
  host.appendChild(VIZ.bucketRow(sortedGroups.map((items, b) => ({
    name: "Bucket " + b,
    range: rangeOf(b),
    items: items,
    cls: items.length ? "viz-bucket--collected" : "",
  }))));

  const flat = sortedGroups.reduce((acc, g) => acc.concat(g), []);
  host.appendChild(VIZ.caption("3. Concatenate buckets 0 \u2192 " + (nBuckets - 1), true));
  host.appendChild(VIZ.arrayLane(flat, flat.map(() => ["sorted"])));
  host.appendChild(VIZ.note(
    "Every bucket covers a disjoint slice of the value range and each is sorted in place, so concatenating them in order yields a fully sorted array."
  ));
};

// ── Shell Sort figure ───────────────────────────────────────
// A gapped pass is a set of independent groups. The chains show
// exactly which array positions move together at a given gap.
SORT_FIGURES["shell-groups"] = (host) => {
  const src = readArray(host, [7, 3, 4, 8, 13, 11, 9, 1]);
  const a = src.slice();
  const n = a.length;
  const fmt = (arr) => "[" + arr.join(", ") + "]";

  const insertionOn = (arr, gap) => {
    for (let i = gap; i < arr.length; i++) {
      const v = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > v) { arr[j] = arr[j - gap]; j -= gap; }
      arr[j] = v;
    }
  };

  const gaps = [];
  let g = Math.floor(n / 2);
  while (g >= 1) { gaps.push(g); g = Math.floor(g / 2); }

  host.appendChild(VIZ.caption("Shell Sort \u2014 each gap splits the array into independent groups"));
  host.appendChild(VIZ.note("Start: " + fmt(a)));

  gaps.forEach((gap) => {
    const groups = [];
    for (let s = 0; s < gap; s++) {
      const idx = [];
      const vals = [];
      for (let i = s; i < n; i += gap) { idx.push(i); vals.push(a[i]); }
      groups.push({ s: s, idx: idx, vals: vals });
    }
    host.appendChild(VIZ.caption("Gap = " + gap + " \u2014 " + groups.length +
      (groups.length === 1 ? " group" : " groups"), true));
    host.appendChild(VIZ.groupRow(groups.map((gr) => ({
      name: "Group " + (gr.s + 1),
      indices: gr.idx.join(" \u2192 "),
      items: gr.vals.map((v) => ({ v: v })),
      cls: "viz-group--active",
    }))));

    const before = a.slice();
    insertionOn(a, gap);

    const after = groups.map((gr) => ({
      name: "Group " + (gr.s + 1),
      indices: gr.idx.join(" \u2192 "),
      items: gr.idx.map((i, k) => ({ v: a[i], cls: before[i] === a[i] ? "" : "viz-group-cell--done" })),
      cls: "viz-group--done",
    }));
    host.appendChild(VIZ.caption("After insertion-sorting each group, values return to their own indices", true));
    host.appendChild(VIZ.groupRow(after));
    host.appendChild(VIZ.arrayLane(a, a.map((v, i) => (before[i] === v ? [] : ["swap"]))));
    host.appendChild(VIZ.note("Array is now " + fmt(a)));
  });

  host.appendChild(VIZ.caption("Gap = 1 \u2014 one group, the array itself \u2192 fully sorted", true));
  host.appendChild(VIZ.arrayLane(a, a.map(() => ["sorted"])));
  host.appendChild(VIZ.note(
    "A group never contains two elements that are less than a gap apart in the rebuilt array, so the final gap-1 pass only has to do an ordinary insertion sort."
  ));
};

// ── Introduction overview ───────────────────────────────────
// A single clean pass-through: unsorted data, a sorting
// algorithm, sorted data, then the catalogue of algorithms.
SORT_FIGURES["sorting-overview"] = (host) => {
  const before = [7, 3, 9, 1, 5];
  const after = before.slice().sort((x, y) => x - y);
  host.appendChild(VIZ.flow([
    { label: "Unsorted data", nodes: VIZ.arrayLane(before, before.map(() => ["inactive"])) },
    { box: "Sorting algorithm" },
    { label: "Sorted data", nodes: VIZ.arrayLane(after, after.map(() => ["sorted"])) },
  ]));
  host.appendChild(VIZ.note(
    "Sorting only reorders elements \u2014 the same values, the same length, a defined order. A sorting algorithm decides how to get there."
  ));

  host.appendChild(VIZ.caption("The algorithms covered in this section", true));
  host.appendChild(VIZ.cardGrid([
    { name: "Bubble Sort", idea: "Compare every adjacent pair and swap the ones that are out of order. Each pass bubbles the largest value to the end." },
    { name: "Selection Sort", idea: "Scan the unsorted range for its minimum, then swap that minimum into place. One swap per pass." },
    { name: "Insertion Sort", idea: "Take the next element as a key and shift it left across the sorted prefix until it fits." },
    { name: "Quick Sort", idea: "Partition around a pivot, then recurse into the two smaller ranges. Divides the problem in half." },
    { name: "Merge Sort", idea: "Split to single elements, then merge sorted halves back together. Always n log n." },
    { name: "Radix Sort", idea: "Distribute into ten buckets by one digit at a time, from least to most significant digit." },
    { name: "Bucket Sort", idea: "Scatter values into buckets spanning the value range, sort each bucket, concatenate." },
    { name: "Shell Sort", idea: "Insertion sort over decreasing gaps, moving values far apart early so later passes finish quickly." },
    { name: "Heap Sort", idea: "Build a max heap, then repeatedly remove the root and heapify. Sorts in place in n log n." },
  ]));
};

// ── Quick Reference comparison table ────────────────────────
// Deliberately a table, not a diagram: this page is for looking
// values up, not for watching a process.
SORT_FIGURES["sorting-comparison"] = (host) => {
  const rows = [
    ["Bubble Sort", "O(n)", "O(n\u00b2)", "O(n\u00b2)", "O(1)", "Yes", "Swap adjacent pairs; each pass settles the largest remaining value at the end."],
    ["Selection Sort", "O(n\u00b2)", "O(n\u00b2)", "O(n\u00b2)", "O(1)", "No", "Find the minimum of the unsorted range and swap it home. Exactly n \u2212 1 swaps."],
    ["Insertion Sort", "O(n)", "O(n\u00b2)", "O(n\u00b2)", "O(1)", "Yes", "Shift a key left across the sorted prefix. Fast when the input is nearly sorted."],
    ["Quick Sort", "O(n log n)", "O(n log n)", "O(n\u00b2)", "O(log n)", "No", "Partition on a pivot and recurse. Best average case, but a bad pivot degrades to quadratic."],
    ["Merge Sort", "O(n log n)", "O(n log n)", "O(n log n)", "O(n)", "Yes", "Split to single elements and merge sorted halves. Predictable, needs extra memory."],
    ["Heap Sort", "O(n log n)", "O(n log n)", "O(n log n)", "O(1)", "No", "Build a heap and extract the root repeatedly. Worst-case safe and in place."],
    ["Shell Sort", "O(n log n)", "~O(n^1.5)", "O(n\u00b2)", "O(1)", "No", "Insertion sort over decreasing gaps. In place, cache friendly, no fixed bound."],
    ["Bucket Sort", "O(n + k)", "O(n + k)", "O(n + k)", "O(n + k)", "Yes", "Scatter into value-range buckets, sort each, concatenate."],
    ["Radix Sort", "O(dn)", "O(dn)", "O(dn)", "O(n)", "Yes", "Bucket by one digit per pass, least significant first. No comparisons."],
    ["Counting Sort", "O(n + k)", "O(n + k)", "O(n + k)", "O(k)", "Yes", "Count occurrences, then rebuild. Only for small integer ranges."],
  ];
  const scroll = VIZ.el("div", "viz-table-scroll");
  const t = VIZ.el("table", "viz-cmp");
  const thead = VIZ.el("thead");
  const hr = VIZ.el("tr");
  ["Algorithm", "Best", "Average", "Worst", "Space", "Stable", "Main idea"].forEach((h) => {
    hr.appendChild(VIZ.el("th", null, h));
  });
  thead.appendChild(hr);
  t.appendChild(thead);
  const tb = VIZ.el("tbody");
  rows.forEach((r) => {
    const tr = VIZ.el("tr");
    tr.appendChild(VIZ.el("th", null, r[0]));
    r.slice(1, 6).forEach((c) => tr.appendChild(VIZ.el("td", null, c)));
    tr.appendChild(VIZ.el("td", "viz-cmp-idea", r[6]));
    tb.appendChild(tr);
  });
  t.appendChild(tb);
  scroll.appendChild(t);
  host.appendChild(scroll);
  host.appendChild(VIZ.note(
    "O(n log n) is the practical target for general sorting. The O(1) space algorithms (Bubble, Selection, Insertion, Shell, Heap) also sort in place."
  ));
};

function initSortFigures(root) {
  if (!root) return;
  root.querySelectorAll("[data-viz]").forEach((host) => {
    const name = host.dataset.viz;
    const build = SORT_FIGURES[name];
    if (!build) return;
    if (host.dataset.vizBuilt === "1") return;
    host.dataset.vizBuilt = "1";
    build(host);
  });
}

// Highlight the sidebar entry for `headingId` among the lesson's in-page
// sections (the last one that started at or above it). Pass null to clear.
function syncOutlineActive(headingId) {
  const anchors = Array.from(document.querySelectorAll(".sidebar-anchor"));
  if (!anchors.length) return;
  if (!headingId) {
    anchors.forEach((a) => a.classList.remove("active"));
    return;
  }
  let best = null;
  anchors.forEach((a) => {
    if (a.dataset.anchor === headingId) best = a;
  });
  if (!best) {
    // Pick the nearest preceding section by document order.
    const target = document.getElementById(headingId);
    if (target) {
      anchors.forEach((a) => {
        const el = document.getElementById(a.dataset.anchor);
        if (el && el.compareDocumentPosition(target) & Node.DOCUMENT_POSITION_FOLLOWING) best = a;
      });
    }
  }
  anchors.forEach((a) => a.classList.toggle("active", a === best));
}

function buildTOC() {
  toc.innerHTML = "";
  tocScrollSpyCleanup();
  // Headings inside a [data-toc-skip] block are generated chrome (overview
  // cards, learning path) rather than document sections.
  const headings = Array.from(articleBody.querySelectorAll("h2, h3")).filter(
    (h) => !h.closest("[data-toc-skip]")
  );
  if (headings.length === 0) {
    rightSidebar.classList.remove("visible");
    mainEl.classList.remove("has-toc");
    return;
  }

  rightSidebar.classList.add("visible");
  mainEl.classList.add("has-toc");

  const pairs = [];
  headings.forEach((h, i) => {
    // Headings that already carry an id are anchor targets for the sidebar
    // section list, so that id must survive; others get a generated one.
    const id = h.id || "toc-" + i;
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
    pairs.push({ heading: h, item });
  });

  // Scroll-spy: mark the last heading that has passed the reading line.
  // Cheap rAF-throttled check, torn down whenever a new article is opened.
  const onScroll = () => {
    if (tocSpyTicking) return;
    tocSpyTicking = true;
    requestAnimationFrame(() => {
      tocSpyTicking = false;
      const topbarH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--topnav-h"),
        10
      ) || 64;
      const line = topbarH + 28;
      let activeIdx = 0;
      for (let i = 0; i < pairs.length; i++) {
        if (pairs[i].heading.getBoundingClientRect().top - line <= 0) activeIdx = i;
        else break;
      }
      // At the very bottom of the page, favour the last heading.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        activeIdx = pairs.length - 1;
      }
      pairs.forEach((p, i) => p.item.classList.toggle("active", i === activeIdx));
      // Keep the sidebar's in-page section list in step with the reader.
      if (document.querySelector(".sidebar-anchor")) {
        syncOutlineActive(pairs[activeIdx] && pairs[activeIdx].heading.id);
      }
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  tocScrollSpyCleanupFn = () => window.removeEventListener("scroll", onScroll);
  onScroll();
}

function tocScrollSpyCleanup() {
  if (tocScrollSpyCleanupFn) {
    tocScrollSpyCleanupFn();
    tocScrollSpyCleanupFn = null;
  }
  tocSpyTicking = false;
}

// ═══════════════════════════════════════════════════════════
//  SEARCH
// ═══════════════════════════════════════════════════════════

function flattenAll() {
  const flat = [];
  docs.forEach((topic) => {
    flattenTopic(topic).forEach(({ article, parents }) => {
      flat.push({ topic, article, parents });
    });
  });
  return flat;
}

const flatAll = flattenAll();

// Lazily-built, cached token set of each article's body text. Content is
// HTML, so tags are stripped first. Computed on first search only.
function bodyTokenSet(item) {
  if (!item.__bodyTokens) {
    const text = String(item.article.content || "")
      .replace(/<[^>]*>/g, " ")
      .replace(/&[a-zA-Z#0-9]+;/g, " ");
    item.__bodyTokens = new Set(stemTokens(tokenize(text)));
  }
  return item.__bodyTokens;
}

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
    // C++ scope resolution and member access join words into one token
    // ("Math::square" -> "mathsquare") that matches nothing. Split on the
    // operators first so each part stays searchable.
    .replace(/::|\.|->|\/|\[|\]\(/g, " $& ")
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
    const bodyTokens = bodyTokenSet(item);

    let matchCount = 0;
    let titleHits = 0;
    let descHits = 0;
    let bodyHits = 0;

    for (let i = 0; i < stemmedQuery.length; i++) {
      const st = stemmedQuery[i];
      const raw = queryTokens[i];

      const inTitle = titleTokens.some((t) => t === st || t.includes(raw));
      const inLabel = labelTokens.some((t) => t === st || t.includes(raw));
      const inTags = tagsTokens.some((t) => t === st || t.includes(raw));
      const inDesc = descTokens.some((t) => t === st || t.includes(raw));
      const inBody = bodyTokens.has(st) || bodyTokens.has(raw);

      if (inTitle || inLabel || inTags || inDesc || inBody) matchCount++;
      if (inTitle) titleHits++;
      if (inDesc) descHits++;
      if (inBody) bodyHits++;
    }

    // Body text is searchable but deliberately weighted below title/desc so
    // existing result ordering is preserved.
    const score =
      (matchCount / stemmedQuery.length) +
      (titleHits / stemmedQuery.length) * 1.5 +
      (descHits / stemmedQuery.length) * 0.5 +
      (bodyHits / stemmedQuery.length) * 0.3;

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
    const trail = item.parents && item.parents.length
      ? " › " + item.parents.map((p) => p.title).join(" › ")
      : "";
    div.innerHTML = `
      <span class="search-result-parent">${item.topic.label}${trail}</span>
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
