// ═══════════════════════════════════════════════════════════
//  ROSHAN DOCS — Main Script
// ═══════════════════════════════════════════════════════════

// ── Docs Data ──────────────────────────────────

const docs = [
  {
    id: "git", label: "Git", icon: `<img src="assets/icons/git.svg" width="24" height="24" alt="Git">`,
    desc: "Version control system for tracking code changes.",
    tags: ["version control", "cli", "repo"],
    articles: [
      { id: "git-01", title: "Git Basics", difficulty: "beginner", time: "5 min", desc: "Core commands: init, add, commit, and log.",
        content: `<h1>Git Basics</h1><p>The fundamental commands you will use every day.</p><h2>git init</h2><p><strong>Purpose:</strong> Initialize a folder as a Git repository.</p><p>Start tracking this folder with Git.</p><pre><code>git init</code></pre><h2>git add</h2><p><strong>Purpose:</strong> Stage changes before committing.</p><p>Tell Git which changes you want to save.</p><pre><code>git add .</code></pre><h2>git commit</h2><p><strong>Purpose:</strong> Save staged changes.</p><p>Save a snapshot of your work.</p><pre><code>git commit -m "Add login page"</code></pre><h2>git log</h2><p>Show all saved versions.</p><pre><code>git log</code></pre><h2>git log --oneline</h2><p>Show all commits in one short line.</p><pre><code>git log --oneline</code></pre>` },
      { id: "git-02", title: "Atomic Commits", difficulty: "beginner", time: "3 min", desc: "One commit, one purpose.",
        content: `<h1>Atomic Commits</h1><p><strong>Definition:</strong> One commit should contain <strong>one complete change</strong>.</p><h2>Good</h2><ul><li>Add login page</li><li>Fix navbar bug</li><li>Update README</li></ul><h2>Bad</h2><ul><li>Login, CSS, README and bug fixes</li></ul><p>One commit = One purpose.</p>` },
      { id: "git-03", title: "Commit Messages", difficulty: "beginner", time: "2 min", desc: "Write clear, imperative commit messages.",
        content: `<h1>Commit Messages</h1><p>Use the <strong>imperative mood</strong>:</p><ul><li>Add login page</li><li>Fix bug</li><li>Update README</li><li>Remove unused code</li></ul><p>Think:</p><blockquote><p>If applied, this commit will <strong>Add</strong> login page.</p></blockquote>` },
      { id: "git-04", title: "VS Code as Git Editor", difficulty: "beginner", time: "2 min", desc: "Set VS Code as default Git editor.",
        content: `<h1>VS Code as Git Editor</h1><pre><code>git config --global core.editor "code --wait"</code></pre><p>Makes VS Code the default editor for Git.</p>` },
      { id: "git-05", title: "git rm --cached", difficulty: "beginner", time: "2 min", desc: "Stop tracking a file without deleting it.",
        content: `<h1>git rm --cached</h1><p>Stops Git from tracking a file but keeps it on your computer.</p><pre><code>git rm --cached .env</code></pre>` },
      { id: "git-06", title: ".gitignore", difficulty: "beginner", time: "3 min", desc: "Tell Git which files to ignore.",
        content: `<h1>.gitignore</h1><p><strong>Type:</strong> File (not a command)</p><p>Example:</p><pre><code>node_modules/
.env
.vscode/
dist/</code></pre><p>Best location:</p><pre><code>project/
├── .git/
├── .gitignore
├── src/
└── README.md</code></pre>` },
      { id: "git-07", title: ".gitkeep", difficulty: "beginner", time: "1 min", desc: "Keep empty folders tracked by Git.",
        content: `<h1>.gitkeep</h1><p><strong>Type:</strong> File (not a command)</p><p>Used to keep empty folders in Git.</p><pre><code>images/
└── .gitkeep</code></pre>` },
      { id: "git-08", title: "Git Internals", difficulty: "intermediate", time: "5 min", desc: "How Git stores data under the hood.",
        content: `<h1>Git Internals</h1><h2>Commit Object</h2><p>Stores:</p><ul><li>Tree</li><li>Parent Commit</li><li>Author</li><li>Committer</li><li>Commit Message</li></ul><p>Save point.</p><h2>Tree Object</h2><p>Stores:</p><ul><li>Folder structure</li><li>File names</li><li>File hashes</li><li>Child folders</li></ul><p>Map of your project.</p><h2>Blob Object</h2><p>Stores the <strong>actual contents of a file</strong>.</p><p>What's inside the file.</p><p>Relationship:</p><pre><code>Commit
  ↓
Tree
  ↓
Blob</code></pre>` },
      { id: "git-09", title: "git show", difficulty: "intermediate", time: "3 min", desc: "Inspect a specific commit.",
        content: `<h1>git show</h1><pre><code>git show -s --pretty=raw &lt;commit-id&gt;</code></pre><p>Shows:</p><ul><li>Commit hash</li><li>Parent commit</li><li>Tree</li><li>Author</li><li>Committer</li><li>Commit message</li></ul><p><code>-s</code> = Don't show code changes.</p>` },
      { id: "git-10", title: "Quick Reference", difficulty: "beginner", time: "2 min", desc: "Cheat sheet of all Git commands.",
        content: `<h1>Quick Reference</h1><table><thead><tr><th>Item</th><th>Purpose</th></tr></thead><tbody><tr><td><code>git init</code></td><td>Start Git</td></tr><tr><td><code>git add</code></td><td>Stage changes</td></tr><tr><td><code>git commit</code></td><td>Save snapshot</td></tr><tr><td><code>git log</code></td><td>Show history</td></tr><tr><td><code>git log --oneline</code></td><td>Short history</td></tr><tr><td><code>git rm --cached</code></td><td>Stop tracking file</td></tr><tr><td><code>.gitignore</code></td><td>Ignore files</td></tr><tr><td><code>.gitkeep</code></td><td>Keep empty folders</td></tr><tr><td><code>git show -s --pretty=raw</code></td><td>Show raw commit info</td></tr></tbody></table>` }
    ]
  },
  {
    id: "github", label: "GitHub", icon: `<img src="assets/icons/github.svg" width="24" height="24" alt="GitHub">`,
    desc: "Collaborate, fork, and host your code.",
    tags: ["hosting", "collaboration", "cli"],
    articles: [
      { id: "gh-01", title: "Install GitHub CLI", difficulty: "beginner", time: "3 min", desc: "Set up gh command line tool.",
        content: `<h1>Install GitHub CLI</h1><span class="step-badge">Step 1</span><p>GitHub CLI lets you interact with GitHub from the terminal.</p><h2>Ubuntu / Debian</h2><pre><code>sudo apt install gh</code></pre><h2>Fedora</h2><pre><code>sudo dnf install gh</code></pre><h2>Arch</h2><pre><code>sudo pacman -S github-cli</code></pre><h2>macOS</h2><pre><code>brew install gh</code></pre><h2>Windows</h2><pre><code>winget install GitHub.cli</code></pre><p>Or download from <code>cli.github.com</code>.</p>` },
      { id: "gh-02", title: "Authenticate", difficulty: "beginner", time: "2 min", desc: "Log in to your GitHub account.",
        content: `<h1>Authenticate</h1><span class="step-badge">Step 2</span><p>Log in to your GitHub account from the terminal.</p><pre><code>gh auth login</code></pre><blockquote>After this step, <code>gh</code> remembers your credentials.</blockquote>` },
      { id: "gh-03", title: "Create a Repo", difficulty: "beginner", time: "3 min", desc: "Create repos from the terminal.",
        content: `<h1>Create a Repository</h1><span class="step-badge">Step 3</span><pre><code>gh repo create my-project --public
gh repo create my-project --private</code></pre><h2>From existing folder</h2><pre><code>cd my-project
git init
gh repo create my-project --source=. --push</code></pre>` },
      { id: "gh-04", title: "Full Example", difficulty: "beginner", time: "4 min", desc: "End-to-end workflow.",
        content: `<h1>Full Example</h1><span class="step-badge">Step 4</span><pre><code>mkdir test-repo
cd test-repo
echo "# Hello World" > README.md
git init
gh repo create test-repo --public --source=. --push</code></pre><p>Your repo is now live on GitHub.</p>` },
      { id: "gh-05", title: "Tips", difficulty: "beginner", time: "2 min", desc: "Best practices for GitHub.",
        content: `<h1>Tips</h1><span class="step-badge">Step 5</span><ul><li>Always add a <code>.gitignore</code> file.</li><li>Write clear, meaningful commit messages.</li><li>Check your repo with <code>gh repo view</code>.</li></ul><pre><code>gh repo view</code></pre>` },
      { id: "gh-06", title: "Fork a Repository", difficulty: "intermediate", time: "3 min", desc: "Create your own copy of a project.",
        content: `<h1>Fork a Repository</h1><span class="step-badge">Step 6</span><p>Forking creates your own copy of someone else's repo under your GitHub account.</p><p>Go to the repository page and click the <strong>Fork</strong> button in the top-right corner.</p>` },
      { id: "gh-07", title: "Clone Your Fork", difficulty: "intermediate", time: "2 min", desc: "Download your fork locally.",
        content: `<h1>Clone Your Fork</h1><span class="step-badge">Step 7</span><pre><code>git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME</code></pre>` },
      { id: "gh-08", title: "Create a Branch", difficulty: "intermediate", time: "2 min", desc: "Isolate your changes.",
        content: `<h1>Create a Branch</h1><span class="step-badge">Step 8</span><pre><code>git checkout -b improve-fibonacci</code></pre><p>Use a descriptive branch name.</p>` },
      { id: "gh-09", title: "Make Changes", difficulty: "intermediate", time: "3 min", desc: "Edit files in your project.",
        content: `<h1>Make Changes</h1><span class="step-badge">Step 9</span><p>Open the file you want to edit and make your changes.</p>` },
      { id: "gh-10", title: "Stage Changes", difficulty: "intermediate", time: "2 min", desc: "Prepare files for commit.",
        content: `<h1>Stage Changes</h1><span class="step-badge">Step 10</span><pre><code>git add leetcode/src/509.c</code></pre>` },
      { id: "gh-11", title: "Commit Changes", difficulty: "intermediate", time: "2 min", desc: "Save your work.",
        content: `<h1>Commit Changes</h1><span class="step-badge">Step 11</span><pre><code>git commit -m "improve: optimize fibonacci implementation"</code></pre>` },
      { id: "gh-12", title: "Push to GitHub", difficulty: "intermediate", time: "2 min", desc: "Upload your changes.",
        content: `<h1>Push to GitHub</h1><span class="step-badge">Step 12</span><pre><code>git push origin improve-fibonacci</code></pre>` },
      { id: "gh-13", title: "Create Pull Request", difficulty: "intermediate", time: "3 min", desc: "Submit your changes for review.",
        content: `<h1>Create Pull Request</h1><span class="step-badge">Step 13</span><p>Go to your forked repo and click <strong>Compare & pull request</strong>.</p><ul><li>Add a clear title.</li><li>Write a description.</li><li>Submit the pull request.</li></ul>` },
      { id: "gh-14", title: "Best Practices", difficulty: "intermediate", time: "3 min", desc: "Tips for better contributions.",
        content: `<h1>Best Practices</h1><span class="step-badge">Step 14</span><ul><li><strong>One branch per feature</strong></li><li><strong>Write meaningful commit messages</strong></li><li><strong>Keep PRs small and focused</strong></li><li><strong>Follow project guidelines</strong></li></ul>` }
    ]
  },
  {
    id: "html", label: "HTML", icon: `<img src="assets/icons/html5.svg" width="24" height="24" alt="HTML5">`,
    desc: "Structure and content of web pages.",
    tags: ["markup", "web", "frontend"],
    articles: [
      { id: "html-01", title: "Basic Structure", difficulty: "beginner", time: "3 min", desc: "HTML document boilerplate.",
        content: `<h1>Basic HTML Structure</h1><span class="step-badge">Step 1</span><p>Every HTML document follows this boilerplate:</p><pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;My Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello World&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>` },
      { id: "html-02", title: "Elements & Tags", difficulty: "beginner", time: "4 min", desc: "Building blocks of HTML.",
        content: `<h1>Elements & Tags</h1><span class="step-badge">Step 2</span><p>HTML elements are the building blocks. They come in opening/closing pairs.</p><pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;a href="https://example.com"&gt;Link&lt;/a&gt;
&lt;img src="photo.jpg" alt="description"&gt;</code></pre><h2>Common elements</h2><ul><li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> — headings</li><li><code>&lt;p&gt;</code> — paragraph</li><li><code>&lt;div&gt;</code> — generic container</li><li><code>&lt;span&gt;</code> — inline container</li></ul>` },
      { id: "html-03", title: "Forms", difficulty: "intermediate", time: "5 min", desc: "Collect user input.",
        content: `<h1>Forms</h1><span class="step-badge">Step 3</span><p>Forms collect user input and send it to a server.</p><pre><code>&lt;form action="/submit" method="POST"&gt;
  &lt;label for="name"&gt;Name&lt;/label&gt;
  &lt;input type="text" id="name" name="name"&gt;
  &lt;button type="submit"&gt;Send&lt;/button&gt;
&lt;/form&gt;</code></pre>` }
    ]
  },
  {
    id: "css", label: "CSS", icon: `<img src="assets/icons/css3.svg" width="24" height="24" alt="CSS3">`,
    desc: "Style and layout your web pages.",
    tags: ["styling", "layout", "responsive"],
    articles: [
      { id: "css-01", title: "Selectors", difficulty: "beginner", time: "4 min", desc: "Target elements for styling.",
        content: `<h1>CSS Selectors</h1><span class="step-badge">Step 1</span><p>Selectors target HTML elements for styling.</p><pre><code>/* element */
p { color: blue; }

/* class */
.highlight { background: yellow; }

/* id */
#header { font-size: 2rem; }

/* descendant */
nav a { text-decoration: none; }</code></pre>` },
      { id: "css-02", title: "Box Model", difficulty: "beginner", time: "3 min", desc: "How elements are sized.",
        content: `<h1>Box Model</h1><span class="step-badge">Step 2</span><p>Every element is a box: content, padding, border, margin.</p><pre><code>.box {
  width: 200px;
  padding: 16px;
  border: 2px solid #333;
  margin: 20px auto;
  box-sizing: border-box;
}</code></pre>` }
    ]
  },
  {
    id: "js", label: "JavaScript", icon: `<img src="assets/icons/javascript.svg" width="24" height="24" alt="JavaScript">`,
    desc: "Add interactivity and logic to your sites.",
    tags: ["programming", "frontend", "async"],
    articles: [
      { id: "js-01", title: "Introduction to JavaScript", difficulty: "beginner", time: "5 min", desc: "What is JS, where it runs, and your first program.",
        content: `<h1>Introduction to JavaScript</h1><p>JavaScript (JS) is a high-level, interpreted, dynamically-typed programming language. Invented by Brendan Eich in 1995, it became the backbone of the modern web.</p><h2>Where Does JavaScript Run?</h2><ul><li><strong>Browser:</strong> Chrome, Firefox, Safari, Edge all have JS engines</li><li><strong>Server:</strong> Node.js lets you run JS outside the browser</li><li><strong>Mobile:</strong> React Native builds iOS and Android apps</li><li><strong>Desktop:</strong> Electron (VS Code, Discord, Slack)</li></ul><h2>The Three Pillars of Web Dev</h2><table><thead><tr><th>Language</th><th>Role</th><th>Analogy</th></tr></thead><tbody><tr><td>HTML</td><td>Structure / Content</td><td>The skeleton of a building</td></tr><tr><td>CSS</td><td>Styling / Appearance</td><td>The paint and furniture</td></tr><tr><td>JavaScript</td><td>Behaviour / Interactivity</td><td>The electricity and switches</td></tr></tbody></table><h2>Running JavaScript</h2><p><strong>Browser Console:</strong> Open Chrome, press F12, click Console.</p><pre><code>console.log("Hello, World!");
alert("This is an alert");</code></pre><p><strong>External File:</strong></p><pre><code>&lt;script src="app.js"&gt;&lt;/script&gt;</code></pre><p><strong>Node.js:</strong></p><pre><code>node app.js</code></pre><h2>JS vs C — Key Differences</h2><table><thead><tr><th>Feature</th><th>C</th><th>JavaScript</th></tr></thead><tbody><tr><td>Type System</td><td>Static</td><td>Dynamic</td></tr><tr><td>Memory</td><td>Manual (malloc/free)</td><td>Garbage Collected</td></tr><tr><td>Compilation</td><td>Compiled</td><td>Interpreted (JIT)</td></tr><tr><td>Classes</td><td>Structs</td><td>Prototypal + ES6 Classes</td></tr><tr><td>First-Class Functions</td><td>No (function pointers)</td><td>Yes</td></tr></tbody></table>` },
      { id: "js-02", title: "Variables & Data Types", difficulty: "beginner", time: "5 min", desc: "var, let, const, primitives, type coercion, truthy/falsy.",
        content: `<h1>Variables & Data Types</h1><h2>Declaring Variables</h2><pre><code>const name = "Alice";   // cannot reassign
let age = 25;           // can reassign
var old = "avoid this"; // function-scoped, avoid</code></pre><p><code>const</code> does NOT freeze objects/arrays — only prevents reassignment of the variable.</p><h2>Primitive Data Types</h2><ul><li><code>number</code> — 42, 3.14, NaN, Infinity</li><li><code>string</code> — "hello", 'world', \`template\`</li><li><code>boolean</code> — true, false</li><li><code>null</code> — intentional empty value</li><li><code>undefined</code> — no value assigned</li><li><code>bigint</code> — 9007199254740991n</li><li><code>symbol</code> — Symbol("id")</li></ul><pre><code>typeof "hello"    // "string"
typeof 42         // "number"
typeof null       // "object" (famous JS bug!)</code></pre><h2>Type Coercion</h2><p>JS auto-converts types in mixed operations:</p><pre><code>"5" + 3       // "53" (string wins)
"5" - 3       // 2 (arithmetic forces number)
true + 1      // 2
[] + []       // "" (empty string)
[] + {}       // "[object Object]"</code></pre><h2>Truthy and Falsy Values</h2><p><strong>Falsy:</strong> <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code></p><p><strong>Truthy:</strong> Everything else — including <code>"0"</code>, <code>[]</code>, <code>{}</code>, <code>-1</code></p><pre><code>if ("0") console.log("truthy!"); // runs!
if ("")  console.log("never");   // skipped</code></pre>` },
      { id: "js-03", title: "Operators & Expressions", difficulty: "beginner", time: "4 min", desc: "Arithmetic, comparison, logical operators, and modern features.",
        content: `<h1>Operators &amp; Expressions</h1><h2>Arithmetic Operators</h2><pre><code>10 + 3   // 13
10 - 3   // 7
10 * 3   // 30
10 / 3   // 3.333 (always decimals)
10 % 3   // 1 (remainder)
10 ** 3  // 1000 (exponentiation)</code></pre><p>Use <code>Math.floor()</code> for integer division.</p><h2>== vs === (Most Important Rule)</h2><pre><code>5 == "5"   // true  (type coercion)
5 === "5"  // false (strict, no coercion)
null == undefined  // true
null === undefined // false</code></pre><p>ALWAYS use <code>===</code>.</p><h2>Logical Operators</h2><pre><code>true && false  // false (AND)
true || false  // true  (OR)
!true          // false (NOT)</code></pre><h2>Nullish Coalescing &amp; Optional Chaining</h2><pre><code>const name = user?.name ?? "Guest";
// ?. safely accesses nested properties
// ?? falls back only for null/undefined (not 0 or "")</code></pre>` },
      { id: "js-04", title: "Control Flow", difficulty: "beginner", time: "5 min", desc: "if/else, switch, ternary, and all loop types.",
        content: `<h1>Control Flow</h1><h2>if / else</h2><pre><code>const grade = 85;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else {
  console.log("C");
}</code></pre><h2>Ternary Operator</h2><pre><code>const status = age >= 18 ? "adult" : "minor";</code></pre><h2>switch</h2><pre><code>switch (day) {
  case "Monday": console.log("Start"); break;
  case "Friday": console.log("End"); break;
  default: console.log("Other day");
}</code></pre><h2>Loops</h2><pre><code>// Classic for
for (let i = 0; i < 5; i++) { }

// while
while (condition) { }

// do-while (runs at least once)
do { } while (condition);

// for...of — iterates over VALUES (arrays, strings)
for (const fruit of ["apple", "banana"]) {
  console.log(fruit);
}

// for...in — iterates over KEYS (objects, don't use on arrays)
for (const key in obj) {
  console.log(key, obj[key]);
}</code></pre><p>Use <code>break</code> to exit a loop, <code>continue</code> to skip to next iteration.</p>` },
      { id: "js-05", title: "Functions", difficulty: "beginner", time: "5 min", desc: "Declarations, expressions, arrow functions, scope, and closures.",
        content: `<h1>Functions</h1><h2>Function Declaration</h2><p>Hoisted — can call before definition.</p><pre><code>function greet(name) {
  return "Hello, " + name;
}</code></pre><h2>Function Expression</h2><p>NOT hoisted.</p><pre><code>const greet = function(name) {
  return "Hello, " + name;
};</code></pre><h2>Arrow Functions</h2><p>Shorter syntax, no own <code>this</code> binding.</p><pre><code>const greet = (name) => "Hello, " + name;
const square = (x) => x * x;
const add = (a, b) => a + b;</code></pre><h2>Default &amp; Rest Parameters</h2><pre><code>function greet(name = "World") { }
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}</code></pre><h2>Scope &amp; Closures</h2><pre><code>function makeCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = makeCounter();
counter(); // 1
counter(); // 2 (count persists!)</code></pre><p>Closures: inner functions remember outer variables even after the outer function returns.</p>` },
      { id: "js-06", title: "Arrays", difficulty: "beginner", time: "5 min", desc: "Creating, iterating, and mastering array methods.",
        content: `<h1>Arrays</h1><h2>Creating &amp; Accessing</h2><pre><code>const fruits = ["apple", "banana", "cherry"];
fruits[0];           // "apple"
fruits.length;       // 3
fruits.push("date"); // add to end
fruits.pop();        // remove from end</code></pre><h2>The Power Three: map, filter, reduce</h2><pre><code>// map — transform every element
const doubled = [1, 2, 3].map(n => n * 2); // [2, 4, 6]

// filter — keep elements passing test
const evens = [1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]

// reduce — fold to single value
const sum = [1, 2, 3].reduce((acc, n) => acc + n, 0); // 6</code></pre><h2>More Array Methods</h2><pre><code>arr.find(x => x > 3)        // first match
arr.findIndex(x => x > 3)   // index of first match
arr.includes(5)              // true/false
arr.some(x => x > 3)        // any match?
arr.every(x => x > 0)       // all pass?
arr.sort((a, b) => a - b)   // mutates! use [...arr].sort()
arr.slice(1, 3)              // no mutation
arr.splice(1, 1)             // mutates!</code></pre><h2>Destructuring &amp; Spread</h2><pre><code>const [first, second, ...rest] = fruits;
const copy = [...fruits];
const merged = [...arr1, ...arr2];</code></pre>` },
      { id: "js-07", title: "Objects", difficulty: "beginner", time: "5 min", desc: "Object literals, methods, destructuring, and spread.",
        content: `<h1>Objects</h1><h2>Object Literals</h2><pre><code>const user = {
  name: "Alice",
  age: 25,
  greet() { return "Hi, I'm " + this.name; }
};</code></pre><h2>Dot vs Bracket Notation</h2><pre><code>user.name          // dot
user["name"]       // bracket (for dynamic keys)
const key = "age";
user[key];         // 25</code></pre><h2>Object Methods &amp; this</h2><pre><code>const car = {
  speed: 0,
  accelerate() { this.speed += 10; },
  brake() { this.speed -= 10; }
};</code></pre><p>Arrow functions do NOT have their own <code>this</code> — they use the outer scope.</p><h2>Destructuring &amp; Spread</h2><pre><code>const { name, age } = user;
const { name: userName, role = "guest" } = user;
const { name, ...rest } = user;
const updated = { ...user, age: 26, country: "USA" };</code></pre><h2>Object Utility Methods</h2><pre><code>Object.keys(user);    // ["name", "age"]
Object.values(user);  // ["Alice", 25]
Object.entries(user); // [["name","Alice"],["age",25]]</code></pre>` },
      { id: "js-08", title: "Strings (Deep Dive)", difficulty: "beginner", time: "4 min", desc: "String methods, template literals, and regex basics.",
        content: `<h1>Strings (Deep Dive)</h1><h2>Immutability</h2><p>Strings are immutable — every operation creates a new string.</p><pre><code>let s = "hello";
s[0] = "H";  // silently fails!
s = "Hello"; // must reassign</code></pre><h2>Template Literals</h2><pre><code>const name = "Alice";
\`Hello, \${name}!\`            // "Hello, Alice!"
\`1 + 1 = \${1 + 1}\`          // "1 + 1 = 2"
\`Multi
line\`                        // works!</code></pre><h2>Essential String Methods</h2><pre><code>" hello ".trim()                    // "hello"
"hello".toUpperCase()               // "HELLO"
"Hello".includes("ell")             // true
"Hello".startsWith("He")            // true
"Hello".indexOf("llo")              // 2
"Hello".replace("l", "L")           // "HeLlo"
"Hello".replaceAll("l", "L")        // "HeLLo"
"a,b,c".split(",")                  // ["a","b","c"]
"hello".slice(1, 3)                 // "el"
"5".padStart(3, "0")               // "005"</code></pre><h2>Regular Expressions</h2><pre><code>/\d+/.test("abc123")              // true
"hello world".match(/\w+/g)        // ["hello", "world"]
"Hello".replace(/l/g, "L")        // "HeLLo"</code></pre>` },
      { id: "js-09", title: "DOM Manipulation", difficulty: "intermediate", time: "5 min", desc: "Select, change, create, and remove elements.",
        content: `<h1>DOM Manipulation</h1><h2>What Is the DOM?</h2><p>The DOM (Document Object Model) is the browser's tree representation of your HTML. JavaScript reads and modifies it.</p><h2>Selecting Elements</h2><pre><code>document.getElementById("app");
document.querySelector(".card");       // first match
document.querySelectorAll("p");        // NodeList of all</code></pre><h2>Changing Content &amp; Styles</h2><pre><code>el.textContent = "New text";     // safe (escapes HTML)
el.innerHTML = "&lt;b&gt;Bold&lt;/b&gt;";  // parses HTML (XSS risk)
el.style.color = "blue";
el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("active");</code></pre><h2>Creating &amp; Removing Elements</h2><pre><code>const li = document.createElement("li");
li.textContent = "Item 1";
ul.appendChild(li);
ul.prepend(li);
li.remove();</code></pre>` },
      { id: "js-10", title: "Events", difficulty: "intermediate", time: "5 min", desc: "addEventListener, event object, delegation, and common events.",
        content: `<h1>Events</h1><h2>addEventListener</h2><pre><code>button.addEventListener("click", () => {
  alert("Clicked!");
});

// Remove with named function
function handleClick() { console.log("clicked"); }
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);</code></pre><h2>The Event Object</h2><pre><code>button.addEventListener("click", (e) => {
  console.log(e.type);     // "click"
  console.log(e.target);   // the element clicked
  console.log(e.clientX);  // mouse position
});</code></pre><p><code>e.preventDefault()</code> stops default behaviour (link navigation, form submit).</p><h2>Event Delegation</h2><p>One listener on a parent + check <code>event.target</code>. Efficient and works for dynamic elements.</p><pre><code>document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});</code></pre><h2>Common Events</h2><table><thead><tr><th>Category</th><th>Events</th></tr></thead><tbody><tr><td>Mouse</td><td>click, dblclick, mouseenter, mouseleave</td></tr><tr><td>Keyboard</td><td>keydown, keyup</td></tr><tr><td>Form</td><td>submit, change, input</td></tr><tr><td>Document</td><td>DOMContentLoaded, load</td></tr></tbody></table>` },
      { id: "js-11", title: "ES6+ Modern JavaScript", difficulty: "intermediate", time: "5 min", desc: "Destructuring, modules, classes, and modern features.",
        content: `<h1>ES6+ Modern JavaScript</h1><h2>Destructuring (Revisited)</h2><pre><code>function displayUser({ name, age, role = "user" }) {
  console.log(\`\${name} (\${role})\`);
}

const { address: { city, zip } } = user; // nested</code></pre><h2>Modules — import &amp; export</h2><pre><code>// utils.js
export const add = (a, b) => a + b;
export default function greet() {}

// app.js
import greet, { add } from "./utils.js";
import * as utils from "./utils.js";</code></pre><p>Modules require a server or bundler (<code>&lt;script type="module"&gt;</code>).</p><h2>Classes</h2><pre><code>class Animal {
  constructor(name) { this.name = name; }
  speak() { return \`\${this.name} makes a sound\`; }
  static create(name) { return new Animal(name); }
}

class Dog extends Animal {
  speak() { return \`\${this.name} barks\`; }
}</code></pre><h2>Other ES6+ Features</h2><pre><code>// Logical assignment
x ??= "default";  // assign if null/undefined
x ||= "fallback"; // assign if falsy

// Array.from
Array.from("hello"); // ["h","e","l","l","o"]</code></pre>` },
      { id: "js-12", title: "Asynchronous JavaScript", difficulty: "intermediate", time: "6 min", desc: "Callbacks, promises, async/await, and fetch API.",
        content: `<h1>Asynchronous JavaScript</h1><h2>Why Asynchronous?</h2><p>JS is single-threaded. Async lets tasks run in the background via the Event Loop.</p><h2>Callbacks</h2><p>Pass functions as arguments. Can lead to "callback hell".</p><pre><code>fetchData(url, onSuccess, onError);</code></pre><h2>Promises</h2><p>Three states: pending, fulfilled, rejected.</p><pre><code>const promise = new Promise((resolve, reject) => {
  resolve("done");
});

promise
  .then(result => console.log(result))
  .catch(err => console.error(err))
  .finally(() => console.log("always runs"));</code></pre><h2>async / await</h2><p>Syntactic sugar over Promises. Always wrap in try/catch.</p><pre><code>async function loadUser() {
  try {
    const res = await fetch("/api/user");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}</code></pre><h2>Fetch API</h2><pre><code>// GET
const res = await fetch("https://api.example.com/data");
const data = await res.json();

// POST
await fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Alice" })
});</code></pre><p><code>response.ok</code> checks for HTTP errors.</p>` },
      { id: "js-13", title: "Error Handling & Debugging", difficulty: "intermediate", time: "5 min", desc: "try/catch, custom errors, console methods, and debugging.",
        content: `<h1>Error Handling &amp; Debugging</h1><h2>try / catch / finally</h2><pre><code>try {
  const data = JSON.parse(invalidJSON);
} catch (err) {
  console.error("Parse error:", err.message);
} finally {
  console.log("cleanup here");
}</code></pre><h2>Throwing Custom Errors</h2><pre><code>function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.field = field;
  }
}

if (age < 0) throw new ValidationError("age", "Must be positive");</code></pre><h2>Common JavaScript Bugs</h2><ul><li><code>==</code> instead of <code>===</code> — coercion surprises</li><li>Forgetting <code>await</code> — gets Promise object, not result</li><li>Mutating array while iterating — use <code>filter</code> instead of <code>splice</code></li><li>Reference vs value — <code>const b = a</code> copies reference, not object</li></ul><h2>Console Debugging Methods</h2><pre><code>console.log("debug");
console.error("error");
console.warn("warning");
console.table([{name:"A"}, {name:"B"}]);
console.group("group"); console.log("1"); console.groupEnd();
console.time("t"); /* code */ console.timeEnd("t");
console.trace(); // call stack</code></pre><p>Add <code>debugger;</code> in code to pause execution in DevTools.</p>` },
      { id: "js-14", title: "Object-Oriented Programming in JS", difficulty: "advanced", time: "6 min", desc: "Prototypes, classes, private fields, and design patterns.",
        content: `<h1>Object-Oriented Programming in JS</h1><h2>Prototypes</h2><p>JS OOP is prototype-based. ES6 classes are syntactic sugar.</p><pre><code>const dog = { bark() { return "Woof!"; } };
const puppy = Object.create(dog);
puppy.bark(); // "Woof!" (inherited)</code></pre><h2>Classes (Deep Dive)</h2><pre><code>class Vehicle {
  #fuel = 0;  // private field (ES2022)

  constructor(brand) {
    this.brand = brand;
  }

  get fuel() { return this.#fuel; }
  set fuel(val) { if (val >= 0) this.#fuel = val; }

  static create(brand) { return new Vehicle(brand); }

  info() { return \`\${this.brand}, \${this.#fuel}L\`; }
}

class ElectricCar extends Vehicle {
  info() { return \`\${super.info()} (electric)\`; }
}</code></pre><h2>Mixins</h2><p>Pattern for composing behaviours (multiple inheritance simulation).</p><pre><code>const Serializable = (Base) => class extends Base {
  serialize() { return JSON.stringify(this); }
};

class User extends Serializable(Vehicle) {}</code></pre><h2>Module Pattern (IIFE + Closure)</h2><pre><code>const BankAccount = (function() {
  let balance = 0; // truly private
  return {
    deposit(amount) { balance += amount; },
    getBalance() { return balance; }
  };
})();</code></pre>` },
      { id: "js-15", title: "Real-World JavaScript", difficulty: "intermediate", time: "4 min", desc: "Browser vs Node.js, npm, clean code, and what to learn next.",
        content: `<h1>Real-World JavaScript</h1><h2>Browser vs Node.js</h2><table><thead><tr><th>Feature</th><th>Browser</th><th>Node.js</th></tr></thead><tbody><tr><td>Global</td><td>window</td><td>globalThis</td></tr><tr><td>DOM</td><td>Available</td><td>Not available</td></tr><tr><td>File System</td><td>No</td><td>Yes (fs module)</td></tr><tr><td>Module System</td><td>ES Modules</td><td>CommonJS + ESM</td></tr></tbody></table><h2>npm Basics</h2><pre><code>npm init -y                  # create package.json
npm install lodash           # install package
npm install --save-dev jest  # dev dependency
npm run test                 # run script</code></pre><h2>Writing Clean JavaScript</h2><ol><li>Meaningful variable names</li><li>Early returns / guard clauses</li><li>Prefer <code>const</code>, pure functions</li><li>Array methods over loops (<code>filter().map()</code>)</li><li>Optional chaining + nullish coalescing</li><li>Named constants (no magic numbers)</li><li>Async error handling with try/catch</li></ol><h2>What to Learn Next</h2><ul><li>React / Vue / Svelte</li><li>Node.js + Express</li><li>TypeScript</li><li>Jest / Vitest</li><li>MongoDB / Prisma</li><li>REST / GraphQL APIs</li></ul>` }
    ]
  },
  {
    id: "c", label: "C Programming", icon: `<img src="assets/icons/c.svg" width="22" alt="C">`,
    desc: "Systems programming and memory management.",
    tags: ["systems", "pointers", "memory"],
    articles: [
      { id: "c-01", title: "Introduction to C", difficulty: "beginner", time: "5 min", desc: "What is C, compilation, first program.",
        content: `<h1>Introduction to C</h1><span class="step-badge">Chapter 1</span><p>C is a general-purpose programming language created by Dennis Ritchie at Bell Labs between 1969 and 1973. It was designed to write the Unix operating system. C is the closest thing to Assembly that humans can comfortably read and write.</p><h2>Why Learn C?</h2><ul><li>The Linux kernel, Python interpreter, and SQLite are written in C</li><li>C compilers exist for every platform: from microcontrollers to supercomputers</li><li>Learning C teaches you how memory actually works</li><li>C is the parent of C++, Java, JavaScript, Python, and many more</li></ul><blockquote>Think of C as the foundation of a building. You might never live in the foundation, but if it is weak, everything built on top will crack.</blockquote><h2>The Compilation Process</h2><p>When you write a C program, you write text (source file ending in .c). A compiler converts your text into machine code (binary 0s and 1s). The most popular C compiler is GCC.</p><ol><li><strong>Pre-processing</strong> — Expands #include, #define macros</li><li><strong>Compilation</strong> — Converts C code to Assembly language</li><li><strong>Assembly</strong> — Converts Assembly to machine code (object file)</li><li><strong>Linking</strong> — Combines object files + libraries into final program</li></ol><h2>Your First C Program</h2><pre><code>#include &lt;stdio.h&gt;

int main() {
    printf("Hello, World!\\n");
    return 0;
}</code></pre><p><code>#include &lt;stdio.h&gt;</code> tells the compiler to paste the contents of stdio.h. <code>int main()</code> is where every C program starts. <code>printf()</code> prints text to the screen. <code>return 0;</code> means the program finished without errors.</p><h2>Basic Syntax Rules</h2><ul><li>Every statement ends with a semicolon <code>;</code></li><li>Code blocks are wrapped in curly braces <code>{ }</code></li><li>C is case-sensitive: <code>main</code>, <code>Main</code>, and <code>MAIN</code> are three different names</li><li>Single-line comments use <code>//</code> and multi-line use <code>/* ... */</code></li></ul><pre><code>#include &lt;stdio.h&gt;

int main() {
    int age = 20;
    int year = 2025;
    printf("I am %d years old in %d\\n", age, year);
    return 0;
}</code></pre><blockquote>Compile and run: <code>gcc hello.c -o hello</code> then <code>./hello</code></blockquote>` },
      { id: "c-02", title: "Variables & Data Types", difficulty: "beginner", time: "5 min", desc: "Primitive types, memory, scope, casting.",
        content: `<h1>Variables &amp; Data Types</h1><span class="step-badge">Chapter 2</span><p>A variable is a named box in the computer's memory that holds a value. Think of memory as a giant street of numbered houses. A variable gives one of those houses a friendly name.</p><h2>Primitive Data Types</h2><pre><code>int age = 25;          // 4 bytes, whole numbers
float pi = 3.14f;      // 4 bytes, decimal numbers
char grade = 'A';      // 1 byte, single character
double big = 123456.789; // 8 bytes, high precision</code></pre><h2>Format Specifiers</h2><pre><code>printf("%d\\n", age);    // %d = integer
printf("%f\\n", pi);     // %f = float/double
printf("%.2f\\n", pi);   // %.2f = 2 decimal places
printf("%c\\n", grade);  // %c = character</code></pre><h2>Memory Address</h2><p>Every variable lives at a specific memory address. Use <code>&amp;</code> to get the address:</p><pre><code>int x = 42;
printf("Value: %d\\n", x);      // prints 42
printf("Address: %p\\n", &amp;x);   // prints memory address</code></pre><h2>Global vs Local Variables</h2><pre><code>#include &lt;stdio.h&gt;

int global_count = 0;  // GLOBAL — lives for entire program

void increment() {
    global_count++;     // can access global variable
    int local_x = 10;  // LOCAL — only visible here
    printf("local_x: %d\\n", local_x);
}

int main() {
    increment();
    increment();
    printf("global_count: %d\\n", global_count); // prints 2
    return 0;
}</code></pre><blockquote>WARNING: Local variables in C are NOT automatically zero. They contain garbage values. Always initialize your variables!</blockquote><h2>Type Conversion (Casting)</h2><pre><code>int a = 7, b = 2;
float result;

result = a / b;           // Without cast: 3.0 (integer division!)
result = (float)a / b;    // With cast: 3.5 (decimal result)</code></pre><blockquote>Integer division discards the remainder. 7/2 = 3, not 3.5. Always cast when you need decimal results.</blockquote>` },
      { id: "c-03", title: "Operators & Expressions", difficulty: "beginner", time: "5 min", desc: "Arithmetic, logical, bitwise operators.",
        content: `<h1>Operators &amp; Expressions</h1><span class="step-badge">Chapter 3</span><h2>Arithmetic Operators</h2><pre><code>int a = 10, b = 3;
printf("Add: %d\\n", a + b);       // 13
printf("Sub: %d\\n", a - b);       // 7
printf("Mul: %d\\n", a * b);       // 30
printf("Div: %d\\n", a / b);       // 3 (integer!)
printf("Mod: %d\\n", a % b);       // 1 (remainder)</code></pre><h2>Pre vs Post Increment</h2><pre><code>int a = 5;
int b = a++;   // b = 5 (old value), THEN a becomes 6
int c = ++a;   // a becomes 7 FIRST, THEN c = 7
printf("a=%d b=%d c=%d\\n", a, b, c); // a=7 b=5 c=7</code></pre><blockquote>Pre-increment (++x) increments FIRST then uses the value. Post-increment (x++) uses the value FIRST then increments.</blockquote><h2>Relational &amp; Logical Operators</h2><pre><code>int a = 10, b = 20;
printf("%d\\n", a == b);  // 0 (false)
printf("%d\\n", a != b);  // 1 (true)
printf("%d\\n", a &lt; b);   // 1 (true)

int x = 1, y = 0;
printf("%d\\n", x &amp;&amp; y);  // AND: 0 (both must be true)
printf("%d\\n", x || y);  // OR: 1 (at least one true)
printf("%d\\n", !x);      // NOT: 0 (inverts)</code></pre><blockquote>IMPORTANT: == tests EQUALITY. = ASSIGNS a value. Writing if(x = 5) instead of if(x == 5) is a classic bug.</blockquote><h2>Bitwise Operators</h2><pre><code>unsigned char a = 0b00001100;  // 12
unsigned char b = 0b00001010;  // 10
printf("AND: %d\\n", a &amp; b);   // 8
printf("OR: %d\\n", a | b);    // 14
printf("XOR: %d\\n", a ^ b);   // 6
printf("Left shift: %d\\n", a &lt;&lt; 1);  // 24 (multiply x2)
printf("Right shift: %d\\n", a &gt;&gt; 1); // 6 (divide by 2)</code></pre><h2>Operator Precedence</h2><p>When multiple operators appear in one expression, C evaluates them in a specific order — just like BODMAS in mathematics. When in doubt, use parentheses.</p><pre><code>2 + 3 * 4 - 1     // = 13 (multiplication first)
(2 + 3) * (4 - 1) // = 15 (parentheses first)</code></pre>` },
      { id: "c-04", title: "Control Flow", difficulty: "beginner", time: "5 min", desc: "if/else, switch, loops, break/continue.",
        content: `<h1>Control Flow</h1><span class="step-badge">Chapter 4</span><h2>if / else Statements</h2><pre><code>int marks = 75;

if (marks &gt;= 90) {
    printf("Grade: A+\\n");
} else if (marks &gt;= 75) {
    printf("Grade: A\\n");    // This will print
} else if (marks &gt;= 60) {
    printf("Grade: B\\n");
} else {
    printf("Grade: F\\n");
}</code></pre><h2>The switch Statement</h2><pre><code>int day = 3;
switch (day) {
    case 1: printf("Monday\\n"); break;
    case 2: printf("Tuesday\\n"); break;
    case 3: printf("Wednesday\\n"); break;  // This runs
    case 4: printf("Thursday\\n"); break;
    case 5: printf("Friday\\n"); break;
    default: printf("Weekend!\\n"); break;
}</code></pre><blockquote>WARNING: The 'break' at the end of each case is critical! Without it, execution FALLS THROUGH to the next case.</blockquote><h2>For Loop</h2><pre><code>// Print 1 to 10
for (int i = 1; i &lt;= 10; i++) {
    printf("%d ", i);
}

// Print even numbers from 2 to 20
for (int i = 2; i &lt;= 20; i += 2) {
    printf("%d ", i);
}</code></pre><h2>While Loop</h2><pre><code>int n;
printf("Enter a positive number: ");
scanf("%d", &amp;n);

int sum = 0, i = 1;
while (i &lt;= n) {
    sum += i;
    i++;
}
printf("Sum of 1 to %d = %d\\n", n, sum);</code></pre><h2>Do-While Loop</h2><pre><code>int choice;
do {
    printf("1. Start Game\\n");
    printf("2. Settings\\n");
    printf("3. Quit\\n");
    printf("Enter choice: ");
    scanf("%d", &amp;choice);
} while (choice &lt; 1 || choice &gt; 3);</code></pre><h2>Nested Loops — Star Pattern</h2><pre><code>for (int row = 1; row &lt;= 5; row++) {
    for (int col = 1; col &lt;= row; col++) {
        printf("* ");
    }
    printf("\\n");
}
// Output:
// *
// * *
// * * *
// * * * *
// * * * * *</code></pre><h2>break and continue</h2><pre><code>// break: exit the loop immediately
for (int i = 0; i &lt; 10; i++) {
    if (i == 5) break;
    printf("%d ", i);  // prints 0 1 2 3 4
}

// continue: skip to next iteration
for (int i = 0; i &lt; 10; i++) {
    if (i % 2 == 0) continue;
    printf("%d ", i);  // prints 1 3 5 7 9
}</code></pre>` },
      { id: "c-05", title: "Functions", difficulty: "beginner", time: "5 min", desc: "Defining, calling, scope, recursion.",
        content: `<h1>Functions</h1><span class="step-badge">Chapter 5</span><p>A function is a reusable, named block of code that performs a specific task. Instead of writing the same code 10 times, you write it once as a function and call it 10 times.</p><h2>Anatomy of a Function</h2><pre><code>return_type function_name(parameters) {
    // function body
    return value;
}

// Example: add two integers
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(3, 7);
    printf("Sum = %d\\n", result);  // prints 10
    return 0;
}</code></pre><h2>Function Prototypes</h2><pre><code>#include &lt;stdio.h&gt;

int add(int, int);  // prototype — declare before use

int main() {
    printf("%d\\n", add(4, 6));
    return 0;
}

int add(int a, int b) {
    return a + b;
}</code></pre><h2>Call by Value vs Call by Reference</h2><pre><code>// Call by Value — changes do NOT affect original
void double_it(int x) {
    x = x * 2;
    printf("Inside: %d\\n", x);  // 10
}

int main() {
    int num = 5;
    double_it(num);
    printf("Outside: %d\\n", num);  // still 5!
}</code></pre><pre><code>// Call by Reference — changes DO affect original
void double_it(int *x) {
    *x = *x * 2;
}

int main() {
    int num = 5;
    double_it(&amp;num);  // pass ADDRESS of num
    printf("num = %d\\n", num);  // 10!
}</code></pre><h2>Static Local Variables</h2><pre><code>void counter() {
    static int count = 0;  // persists across calls
    count++;
    printf("Called %d time(s)\\n", count);
}

int main() {
    counter();  // Called 1 time(s)
    counter();  // Called 2 time(s)
    counter();  // Called 3 time(s)
    return 0;
}</code></pre><blockquote>A static local variable keeps its value between function calls. It is local in scope but global in lifetime.</blockquote>` },
      { id: "c-06", title: "Arrays & Strings", difficulty: "beginner", time: "5 min", desc: "1D/2D arrays, memory, strings.",
        content: `<h1>Arrays &amp; Strings</h1><span class="step-badge">Chapter 6</span><h2>What Is an Array?</h2><p>An array is a collection of elements of the same type stored in contiguous memory locations.</p><pre><code>int marks[5] = {85, 90, 78, 92, 88};
printf("%d\\n", marks[0]);  // 85 — first element
printf("%d\\n", marks[4]);  // 88 — last element
marks[2] = 100;             // change element at index 2</code></pre><blockquote>Array indices start at 0, not 1. An array of size 5 has indices 0, 1, 2, 3, 4. Accessing marks[5] is OUT OF BOUNDS.</blockquote><h2>Memory Layout</h2><pre><code>int arr[5] = {10, 20, 30, 40, 50};
for (int i = 0; i &lt; 5; i++) {
    printf("arr[%d] = %d, address = %p\\n", i, arr[i], &amp;arr[i]);
}
// Addresses will be exactly 4 bytes apart</code></pre><h2>2-D Arrays (Matrices)</h2><pre><code>int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
for (int row = 0; row &lt; 3; row++) {
    for (int col = 0; col &lt; 3; col++) {
        printf("%3d ", matrix[row][col]);
    }
    printf("\\n");
}</code></pre><h2>Strings in C</h2><p>C does not have a built-in string type. A string is just an array of char values ending with <code>'\\0'</code> (null terminator).</p><pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

int main() {
    char name[20] = "Alice";
    printf("Name: %s\\n", name);
    printf("Length: %zu\\n", strlen(name));  // 5 (not 6!)

    char greeting[50];
    strcpy(greeting, "Hello, ");
    strcat(greeting, name);
    printf("%s\\n", greeting);  // Hello, Alice

    char other[20] = "Bob";
    int cmp = strcmp(name, other);
    if (cmp == 0) printf("Same\\n");
    else printf("Different\\n");
    return 0;
}</code></pre><blockquote>Never use == to compare strings. It compares memory addresses, not content. Always use strcmp().</blockquote>` },
      { id: "c-07", title: "Pointers", difficulty: "intermediate", time: "6 min", desc: "Memory addresses, arithmetic, arrays.",
        content: `<h1>Pointers</h1><span class="step-badge">Chapter 7</span><p>A pointer is a variable that stores a memory address. Instead of holding a number or a character, it holds the location of another variable in memory. This is the most powerful — and most dangerous — feature of C.</p><h2>Basic Pointer Syntax</h2><pre><code>#include &lt;stdio.h&gt;

int main() {
    int x = 42;
    int *p = &amp;x;   // p stores the address of x

    printf("Value of x: %d\\n", x);      // 42
    printf("Address of x: %p\\n", &amp;x);   // e.g. 0x7fff5244
    printf("Value of p: %p\\n", p);       // same address
    printf("Value at *p: %d\\n", *p);     // 42 (dereference)

    *p = 100;  // change x through the pointer
    printf("x is now: %d\\n", x);         // 100
    return 0;
}</code></pre><h2>Pointer Arithmetic</h2><pre><code>int arr[5] = {10, 20, 30, 40, 50};
int *p = arr;    // p points to arr[0]

printf("%d\\n", *p);   // 10
p++;                   // move to next element
printf("%d\\n", *p);   // 20
p += 2;                // jump 2 elements ahead
printf("%d\\n", *p);   // 40

int *start = &amp;arr[0];
int *end = &amp;arr[4];
printf("Distance: %ld elements\\n", end - start);  // 4</code></pre><blockquote>When you add 1 to a pointer, it advances by sizeof(type) bytes, not 1 byte. For int *, adding 1 advances by 4 bytes.</blockquote><h2>Pointers and Arrays</h2><pre><code>int arr[5] = {1, 2, 3, 4, 5};
printf("%d\\n", arr[2]);      // using array notation
printf("%d\\n", *(arr + 2));  // using pointer arithmetic — SAME!</code></pre><h2>NULL and Dangling Pointers</h2><pre><code>int *p = NULL;  // safe — points to nothing
if (p != NULL) {
    printf("%d\\n", *p);  // only dereference if not NULL
}

int *p = malloc(sizeof(int));
*p = 42;
free(p);
// p is now DANGLING — points to freed memory
p = NULL;  // GOOD PRACTICE: set to NULL after free</code></pre><h2>Pointer to Pointer</h2><pre><code>int x = 10;
int *p = &amp;x;
int **pp = &amp;p;

printf("%d\\n", x);    // 10
printf("%d\\n", *p);   // 10
printf("%d\\n", **pp); // 10

**pp = 99;
printf("%d\\n", x);    // 99 — changed through double pointer!</code></pre>` },
      { id: "c-08", title: "Memory Management", difficulty: "intermediate", time: "5 min", desc: "Stack vs heap, malloc, free.",
        content: `<h1>Memory Management</h1><span class="step-badge">Chapter 8</span><h2>Stack vs Heap</h2><ul><li><strong>Stack</strong> — fast, automatic, small (1-8 MB). Local variables live here.</li><li><strong>Heap</strong> — manual, large, flexible. Dynamic allocation lives here.</li></ul><h2>Dynamic Memory Allocation</h2><pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main() {
    int n;
    printf("How many numbers? ");
    scanf("%d", &amp;n);

    // Allocate n integers on the heap
    int *arr = (int*)malloc(n * sizeof(int));

    if (arr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }

    // Use the array normally
    for (int i = 0; i &lt; n; i++) {
        arr[i] = i * i;
    }

    for (int i = 0; i &lt; n; i++) {
        printf("%d ", arr[i]);
    }

    free(arr);      // ALWAYS free when done!
    arr = NULL;     // prevent dangling pointer
    return 0;
}</code></pre><h2>calloc and realloc</h2><pre><code>// calloc — allocates AND zeros memory
int *arr = (int*)calloc(n, sizeof(int));
// All n integers are guaranteed to be 0

// realloc — resize existing allocation
int *temp = (int*)realloc(arr, 10 * sizeof(int));
if (temp == NULL) {
    printf("Realloc failed\\n");
    free(arr);
    return 1;
}
arr = temp;</code></pre><h2>Memory Leaks</h2><pre><code>// BAD — memory leak!
void bad_function() {
    int *p = (int*)malloc(100 * sizeof(int));
    return;  // LEAK! p goes out of scope, memory never freed
}

// GOOD — always free before returning
void good_function() {
    int *p = (int*)malloc(100 * sizeof(int));
    if (!p) return;
    // do some work
    free(p);
    p = NULL;
}</code></pre><blockquote>Golden Rule: For every malloc/calloc, there must be exactly one free. No more, no less. Freeing twice is a serious error.</blockquote>` },
      { id: "c-09", title: "Recursion", difficulty: "intermediate", time: "5 min", desc: "Base case, recursive case, examples.",
        content: `<h1>Recursion</h1><span class="step-badge">Chapter 9</span><p>Recursion is when a function calls itself to solve a smaller version of the same problem. Every recursive function has two parts: a base case (where it stops) and a recursive case (where it calls itself).</p><h2>Factorial</h2><pre><code>#include &lt;stdio.h&gt;

int factorial(int n) {
    if (n == 0 || n == 1) return 1;  // Base Case
    return n * factorial(n - 1);      // Recursive Case
}

int main() {
    printf("5! = %d\\n", factorial(5));  // 120
    printf("0! = %d\\n", factorial(0));  // 1
    return 0;
}</code></pre><h2>Call Stack Trace for factorial(4)</h2><ul><li>factorial(4) calls factorial(3)</li><li>factorial(3) calls factorial(2)</li><li>factorial(2) calls factorial(1)</li><li>factorial(1) returns 1 (base case)</li><li>Unwinding: factorial(2) = 2*1 = 2</li><li>factorial(3) = 3*2 = 6</li><li>factorial(4) = 4*6 = 24</li></ul><h2>Fibonacci</h2><pre><code>int fibonacci(int n) {
    if (n &lt;= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
// fib(0)=0, fib(1)=1, fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5</code></pre><blockquote>WARNING: This recursive Fibonacci has O(2^n) time complexity — extremely slow for large n. A loop version is O(n).</blockquote><h2>When to Use Recursion</h2><ul><li>Use recursion when: the problem is naturally defined in terms of smaller sub-problems, working with trees/graphs, or implementing divide-and-conquer algorithms</li><li>Avoid recursion when: the problem can easily be solved with a loop, or the recursion depth could be very large</li></ul>` },
      { id: "c-10", title: "Time & Space Complexity", difficulty: "intermediate", time: "4 min", desc: "Big-O notation, analyzing code.",
        content: `<h1>Time &amp; Space Complexity</h1><span class="step-badge">Chapter 10</span><p>Two programs can both give the correct answer, but one might take 1 second and the other 1 hour. Big-O notation gives us a mathematical way to measure how a program's performance scales with input size.</p><h2>Big-O Notation</h2><pre><code>// O(1) — Constant time
int first = arr[0];

// O(n) — Linear: single loop
for (int i = 0; i &lt; n; i++) {
    printf("%d ", arr[i]);
}

// O(n²) — Quadratic: nested loop
for (int i = 0; i &lt; n; i++) {
    for (int j = 0; j &lt; n; j++) {
        printf("%d ", matrix[i][j]);
    }
}

// O(log n) — Logarithmic: halving
int binary_search(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    while (low &lt;= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] &lt; target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}</code></pre><h2>Complexity Rankings</h2><p>O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2^n) — lower is always better.</p><h2>Space Complexity</h2><pre><code>// O(1) space — just a few variables
int find_max(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i &lt; n; i++)
        if (arr[i] &gt; max) max = arr[i];
    return max;
}

// O(n) space — creates a new array
int* copy_array(int arr[], int n) {
    int *copy = malloc(n * sizeof(int));
    for (int i = 0; i &lt; n; i++) copy[i] = arr[i];
    return copy;
}</code></pre><blockquote>Trade-offs exist: sometimes you use more memory to get faster speed.</blockquote>` },
      { id: "c-11", title: "Structures & Advanced Types", difficulty: "intermediate", time: "5 min", desc: "struct, typedef, enum, arrow operator.",
        content: `<h1>Structures &amp; Advanced Types</h1><span class="step-badge">Chapter 11</span><h2>What Is a struct?</h2><p>A struct lets you group related variables of different types under one name.</p><pre><code>#include &lt;stdio.h&gt;

struct Student {
    int roll_no;
    char name[50];
    float gpa;
    int semester;
};

int main() {
    struct Student s1;
    s1.roll_no = 1001;
    s1.gpa = 8.7f;

    struct Student s2 = {1002, "Alice", 9.1f, 2};
    printf("Roll: %d Name: %s GPA: %.1f\\n",
           s2.roll_no, s2.name, s2.gpa);
    return 0;
}</code></pre><h2>typedef — Cleaner Type Names</h2><pre><code>typedef struct {
    int roll_no;
    char name[50];
    float gpa;
} Student;

int main() {
    Student s = {1001, "Bob", 8.5f};
    printf("%s: %.1f\\n", s.name, s.gpa);
    return 0;
}</code></pre><h2>Arrow Operator (Struct with Pointers)</h2><pre><code>typedef struct { int x, y; } Point;

int main() {
    Point p = {3, 4};
    Point *pp = &amp;p;

    printf("(%d, %d)\\n", p.x, p.y);     // dot — direct
    printf("(%d, %d)\\n", pp->x, pp->y);  // arrow — via pointer
    return 0;
}</code></pre><h2>Enumerations (enum)</h2><pre><code>typedef enum {
    MON=1, TUE, WED, THU, FRI, SAT, SUN
} Weekday;

int main() {
    Weekday today = WED;
    if (today == WED)
        printf("It's Wednesday!\\n");
    printf("Day number: %d\\n", today);  // 3
    return 0;
}</code></pre>` },
      { id: "c-12", title: "File Handling", difficulty: "intermediate", time: "5 min", desc: "Open, read, write, binary files.",
        content: `<h1>File Handling</h1><span class="step-badge">Chapter 12</span><p>Programs that only use variables lose all data when they exit. Files let you persist data — store it permanently on disk.</p><h2>Opening and Closing Files</h2><pre><code>#include &lt;stdio.h&gt;

int main() {
    FILE *fp = fopen("data.txt", "w");  // open for writing
    if (fp == NULL) {
        printf("Error: could not open file!\\n");
        return 1;
    }

    fprintf(fp, "Hello, File World!\\n");
    fprintf(fp, "Line 2\\n");
    fclose(fp);  // ALWAYS close the file
    return 0;
}</code></pre><h2>Reading from Files</h2><pre><code>FILE *fp = fopen("data.txt", "r");  // open for reading
if (fp == NULL) { printf("Error!\\n"); return 1; }

char line[100];
while (fgets(line, sizeof(line), fp)) {
    printf("%s", line);
}
fclose(fp);</code></pre><h2>File Modes</h2><ul><li><code>"r"</code> — read only</li><li><code>"w"</code> — write only (creates new or truncates)</li><li><code>"a"</code> — append (creates new if doesn't exist)</li><li><code>"r+"</code> — read and write</li><li><code>"rb"</code>, <code>"wb"</code> — binary mode</li></ul><h2>Binary Files</h2><pre><code>// Write binary data
FILE *fp = fopen("data.bin", "wb");
int nums[] = {10, 20, 30, 40, 50};
fwrite(nums, sizeof(int), 5, fp);
fclose(fp);

// Read binary data
FILE *fp2 = fopen("data.bin", "rb");
int read_nums[5];
fread(read_nums, sizeof(int), 5, fp2);
fclose(fp2);</code></pre>` },
      { id: "c-13", title: "Common Mistakes & Debugging", difficulty: "advanced", time: "4 min", desc: "Segfaults, undefined behavior, debugging.",
        content: `<h1>Common Mistakes &amp; Debugging</h1><span class="step-badge">Chapter 13</span><h2>Segmentation Faults</h2><p>A segfault happens when your program tries to access memory it doesn't own. Common causes:</p><ul><li>Dereferencing a NULL pointer</li><li>Dereferencing a dangling pointer (after free)</li><li>Array out-of-bounds access</li><li>Stack overflow from too-deep recursion</li></ul><pre><code>// BAD — dereferencing NULL
int *p = NULL;
printf("%d", *p);  // SEGFAULT!

// BAD — dangling pointer
int *p = malloc(sizeof(int));
free(p);
printf("%d", *p);  // UNDEFINED BEHAVIOUR!
p = NULL;          // FIX: set to NULL after free</code></pre><h2>Undefined Behavior</h2><pre><code>// BAD — using uninitialized variable
int x;
printf("%d", x);  // UNDEFINED — could be anything!

// FIX — always initialize
int x = 0;
printf("%d", x);  // SAFE — prints 0</code></pre><h2>Logic Bugs</h2><pre><code>// BAD — off-by-one error
for (int i = 0; i &lt;= 5; i++) {  // should be &lt; not &lt;=
    arr[i] = 0;  // accesses arr[5] which is OUT OF BOUNDS!
}

// FIX
for (int i = 0; i &lt; 5; i++) {
    arr[i] = 0;  // safe
}</code></pre><h2>Using printf to Debug</h2><pre><code>int add(int a, int b) {
    printf("DEBUG: a=%d, b=%d\\n", a, b);  // temporary debug
    return a + b;
}

// Remove debug prints when done, or use a macro:
#define DEBUG 1
#if DEBUG
  #define LOG(msg) printf("DEBUG: %s\\n", msg)
#else
  #define LOG(msg)
#endif</code></pre><blockquote>Golden rule of debugging: if printf fixed the bug, it was a race condition or timing issue. If it didn't, the bug is elsewhere.</blockquote>` },
      { id: "c-14", title: "Real-World Thinking in C", difficulty: "advanced", time: "4 min", desc: "How C powers systems, performance mindset.",
        content: `<h1>Real-World Thinking in C</h1><span class="step-badge">Chapter 14</span><h2>How C Powers Systems</h2><ul><li><strong>Operating Systems</strong> — Linux, Windows kernel, macOS are written in C</li><li><strong>Databases</strong> — MySQL, PostgreSQL, SQLite use C for performance</li><li><strong>Embedded Systems</strong> — microcontrollers in cars, medical devices, IoT</li><li><strong>Compilers</strong> — GCC, Clang are written in C</li><li><strong>Python</strong> — CPython (the standard Python) is written in C</li></ul><h2>Writing Maintainable Code</h2><pre><code>// BAD — cryptic code
int f(int a, int b) { return a &gt; b ? a : b; }

// GOOD — clear, self-documenting
int find_max(int first, int second) {
    if (first &gt; second)
        return first;
    else
        return second;
}</code></pre><h2>Performance Mindset</h2><ul><li>Prefer stack allocation over heap when possible (faster)</li><li>Use <code>restrict</code> keyword to help compiler optimize</li><li>Cache-friendly code: access memory sequentially, not randomly</li><li>Profile before optimizing — measure, don't guess</li></ul><h2>Next Steps</h2><ul><li>Learn Data Structures &amp; Algorithms (DSA) in C</li><li>Build projects: a shell, a simple HTTP server, a text editor</li><li>Read source code of open-source C projects</li><li>Learn about compiler flags: <code>gcc -Wall -Wextra -O2</code></li></ul><blockquote>C teaches you to think like a computer. Every concept you learn here will make you a better programmer in any language.</blockquote>` }
    ]
  },
  {
    id: "python", label: "Python", icon: `<img src="assets/icons/python.svg" width="24" height="24" alt="Python">`,
    desc: "General-purpose language for web, data science, and automation.",
    tags: ["programming", "backend", "data science"],
    articles: [
      { id: "python-01", title: "Introduction to Python", difficulty: "beginner", time: "5 min", desc: "What is Python, installation, and your first program.",
        content: `<h1>Introduction to Python</h1><p>Python is a high-level, interpreted, dynamically-typed language created by Guido van Rossum in 1991. It reads almost like plain English.</p><h2>Where Python Is Used</h2><table><thead><tr><th>Domain</th><th>Libraries</th></tr></thead><tbody><tr><td>Data Science</td><td>Pandas, NumPy</td></tr><tr><td>Machine Learning</td><td>TensorFlow, PyTorch</td></tr><tr><td>Web</td><td>Django, FastAPI</td></tr><tr><td>Automation</td><td>os, subprocess</td></tr></tbody></table><h2>Installation</h2><pre><code>python3 --version
pip3 install requests</code></pre><h2>First Program</h2><pre><code>name = "Alice"
age = 25
print(f"Hello, {name}. You are {age} years old.")</code></pre><h2>Python vs C vs JavaScript</h2><table><thead><tr><th>Feature</th><th>C</th><th>JavaScript</th><th>Python</th></tr></thead><tbody><tr><td>Typing</td><td>Static</td><td>Dynamic</td><td>Dynamic</td></tr><tr><td>Memory</td><td>Manual</td><td>Garbage Collected</td><td>Garbage Collected</td></tr><tr><td>Speed</td><td>Fastest</td><td>Fast (JIT)</td><td>Slower (Interpreted)</td></tr><tr><td>Indentation</td><td>Optional</td><td>Optional</td><td>Mandatory</td></tr></tbody></table><p>Python uses indentation (4 spaces) instead of curly braces for code blocks.</p>` },
      { id: "python-02", title: "Variables & Data Types", difficulty: "beginner", time: "5 min", desc: "Dynamic typing, core types, truthy/falsy values.",
        content: `<h1>Variables &amp; Data Types</h1><h2>Variables</h2><p>No type declaration needed. Reassignable to different types.</p><pre><code>x = 42        # int
x = "hello"   # now a string
a, b, c = 1, 2, 3  # tuple unpacking</code></pre><h2>Core Types</h2><ul><li><code>int</code> — arbitrary precision (no overflow)</li><li><code>float</code> — IEEE 754 (3.14)</li><li><code>str</code> — immutable Unicode ("hello")</li><li><code>bool</code> — subclass of int (True/False)</li><li><code>None</code> — Python's null</li></ul><pre><code>isinstance(42, int)  # True
type(3.14)           # &lt;class 'float'&gt;</code></pre><h2>Type Conversion</h2><pre><code>int("42")        # 42
int("3.14")      # ERROR — must do: int(float("3.14"))
int(3.9)         # 3 (truncates, does NOT round)
float("3.14")    # 3.14
str(42)          # "42"
bool(0)          # False</code></pre><h2>Truthy and Falsy</h2><p><strong>Falsy:</strong> <code>False, None, 0, 0.0, 0j, "", [], (), {}, set()</code></p><p>Everything else is truthy, including <code>"0"</code>, <code>[0]</code>, <code>-1</code>.</p><pre><code>if not name:
    print("empty")</code></pre>` },
      { id: "python-03", title: "Operators & Expressions", difficulty: "beginner", time: "4 min", desc: "Arithmetic, comparison, logical, and bitwise operators.",
        content: `<h1>Operators &amp; Expressions</h1><h2>Arithmetic</h2><pre><code>17 / 5    # 3.4 (always float)
17 // 5   # 3 (integer division)
17 % 5    # 2 (remainder)
17 ** 5   # 1419857 (power)</code></pre><p>No <code>++</code> or <code>--</code> in Python. Use <code>abs()</code>, <code>round()</code>, <code>divmod()</code>, <code>pow()</code>.</p><h2>Comparison Chaining</h2><pre><code>1 < x < 10    # unique to Python
x == y == z</code></pre><h2>Logical Operators</h2><pre><code>0 and "hello"   # 0 (first falsy)
"hi" or "bye"   # "hi" (first truthy)</code></pre><p><strong>Rule:</strong> <code>and</code> returns first falsy or last. <code>or</code> returns first truthy or last.</p><h2>is vs ==</h2><pre><code>x is None     # ALWAYS use this
x == None     # works but bad practice</code></pre><p><code>is</code> checks identity (same object). <code>==</code> checks value equality.</p><h2>Walrus Operator</h2><pre><code>if (n := len(input("Enter: "))) > 10:
    print(f"Too long: {n}")</code></pre><p>Assigns and returns in one expression (Python 3.8+).</p>` },
      { id: "python-04", title: "Control Flow", difficulty: "beginner", time: "5 min", desc: "if/elif/else, for/while loops, and loop control.",
        content: `<h1>Control Flow</h1><h2>if / elif / else</h2><pre><code>score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C")</code></pre><p>Ternary: <code>x = "adult" if age >= 18 else "minor"</code></p><h2>match Statement (Python 3.10+)</h2><pre><code>match command:
    case "start": print("Starting...")
    case "stop": print("Stopping...")
    case _: print("Unknown")</code></pre><h2>for Loops</h2><pre><code>for i in range(5):        # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 10, 2): # 1, 3, 5, 7, 9
    print(i)

# enumerate — index + value
for i, fruit in enumerate(["a", "b", "c"], start=1):
    print(f"{i}. {fruit}")

# zip — iterate multiple iterables
for name, age in zip(["A", "B"], [25, 30]):
    print(name, age)</code></pre><h2>while Loops</h2><pre><code>while condition:
    do_something()</code></pre><h2>Loop Control</h2><pre><code>break      # exit loop
continue   # skip to next iteration
pass       # no-op placeholder</code></pre><h2>for...else / while...else</h2><pre><code>for i in range(5):
    if i == 10: break
else:
    print("Loop completed without break")</code></pre><p>The <code>else</code> block runs only if the loop finished without hitting <code>break</code>.</p>` },
      { id: "python-05", title: "Functions", difficulty: "beginner", time: "5 min", desc: "def, arguments, scope, and lambda functions.",
        content: `<h1>Functions</h1><h2>Defining Functions</h2><pre><code>def greet(name):
    """Greet someone."""  # docstring
    return f"Hello, {name}"

# Multiple return values
def position():
    return 10, 20  # returns tuple
x, y = position()</code></pre><h2>Default &amp; Keyword Arguments</h2><pre><code>def greet(name="World"):
    print(f"Hello, {name}")

# Mutable default bug — DON'T do this:
def f(lst=[]):  # shared across calls!
    lst.append(1)
    return lst

# Fix:
def f(lst=None):
    if lst is None:
        lst = []
    lst.append(1)
    return lst</code></pre><h2>*args and **kwargs</h2><pre><code>def func(*args, **kwargs):
    print(args)   # tuple of positional args
    print(kwargs) # dict of keyword args

func(1, 2, 3, name="Alice")</code></pre><h2>Scope — LEGB Rule</h2><p>Python looks up names in order: <strong>L</strong>ocal → <strong>E</strong>nclosing → <strong>G</strong>lobal → <strong>B</strong>uilt-in.</p><pre><code>def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print(x)  # "local"
    inner()</code></pre><h2>Lambda Functions</h2><pre><code>square = lambda x: x ** 2
nums.sort(key=lambda x: -x)
list(map(lambda x: x*2, range(5)))</code></pre>` },
      { id: "python-06", title: "Lists & Tuples", difficulty: "beginner", time: "5 min", desc: "List operations, comprehensions, and tuple unpacking.",
        content: `<h1>Lists &amp; Tuples</h1><h2>Lists</h2><p>Ordered, mutable, allow duplicates.</p><pre><code>fruits = ["apple", "banana", "cherry"]
fruits[0]        # "apple"
fruits[-1]       # "cherry"
fruits[1:3]      # ["banana", "cherry"]
fruits[::-1]     # reversed</code></pre><h2>List Methods</h2><pre><code>fruits.append("date")     # add to end
fruits.insert(1, "fig")   # insert at index
fruits.extend(["grape"])  # add multiple
fruits.pop()              # remove &amp; return last
fruits.remove("banana")   # remove by value
fruits.sort()             # in-place sort
sorted(fruits)            # returns new list</code></pre><h2>List Comprehensions</h2><pre><code>squares = [x**2 for x in range(10)]
evens = [x for x in range(10) if x % 2 == 0]
flat = [x for row in matrix for x in row]</code></pre><h2>Tuples</h2><p>Immutable. Single element needs trailing comma.</p><pre><code>t = (42,)    # single-element tuple
t = (1, 2, 3)
a, b, c = t  # unpacking
a, b = b, a  # swap</code></pre><h2>Shallow vs Deep Copy</h2><pre><code>b = a          # alias (same object)
b = a.copy()   # shallow copy
import copy
b = copy.deepcopy(a)  # deep copy</code></pre>` },
      { id: "python-07", title: "Dictionaries & Sets", difficulty: "beginner", time: "5 min", desc: "Key-value stores, sets, and comprehensions.",
        content: `<h1>Dictionaries &amp; Sets</h1><h2>Dictionaries</h2><pre><code>user = {"name": "Alice", "age": 25}
user["name"]           # "Alice"
user.get("email", "N/A")  # safe access
user["email"] = "a@b.com" # add/update
del user["age"]            # delete</code></pre><h2>Dict Methods</h2><pre><code>user.keys()     # dict_keys(["name", ...])
user.values()   # dict_values(["Alice", ...])
user.items()    # dict_items([("name","Alice"), ...])
user.update({"age": 26})</code></pre><h2>Useful Dict Patterns</h2><pre><code>from collections import defaultdict, Counter
word_count = defaultdict(int)
c = Counter("abracadabra")  # {'a':5, 'b':2, ...}

# Merge (Python 3.9+)
merged = defaults | user</code></pre><h2>Dict Comprehension</h2><pre><code>squares = {x: x**2 for x in range(6)}</code></pre><h2>Sets</h2><p>Unordered, unique elements.</p><pre><code>s = {1, 2, 3}
s.add(4)
s.discard(1)  # no error if missing
s.remove(1)   # KeyError if missing</code></pre><h2>Set Operations</h2><pre><code>a | b   # union
a &amp; b   # intersection
a - b   # difference
a ^ b   # symmetric difference</code></pre><p>Sets have O(1) membership check — great for deduplication.</p>` },
      { id: "python-08", title: "Strings (Deep Dive)", difficulty: "beginner", time: "4 min", desc: "f-strings, methods, and formatting.",
        content: `<h1>Strings — Deep Dive</h1><h2>Strings Are Immutable</h2><pre><code>s = "hello"
s[0] = "H"  # ERROR — must create new string</code></pre><h2>f-Strings</h2><pre><code>name = "Alice"
f"Hello, {name}!"           # "Hello, Alice!"
f"{3.14159:.2f}"            # "3.14"
f"{255:x}"                  # "ff"
f"{x = }"                   # "x = 42" (debug, 3.8+)
f"{'centered':^20}"         # "      centered      "</code></pre><p>Expressions inside <code>{}</code>: <code>f"{2+2}"</code>, <code>f"{name.upper()}"</code></p><h2>Essential Methods</h2><pre><code>" hello ".strip()                  # "hello"
"Hello".upper()                    # "HELLO"
"Hello".lower()                    # "hello"
"Hello".title()                    # "Hello"
"Hello".find("ell")                # 2
"Hello".startswith("He")           # true
"a,b,c".split(",")                 # ["a","b","c"]
",".join(["a","b","c"])            # "a,b,c"
"Hello".replace("l", "L")          # "HeLLo"
"Hello World".split()              # ["Hello","World"]</code></pre><h2>Efficient String Building</h2><pre><code># Don't do this in loops:
result += s  # O(n²)

# Do this:
result = "".join(parts)  # O(n)</code></pre>` },
      { id: "python-09", title: "File Handling", difficulty: "beginner", time: "5 min", desc: "Reading/writing files, CSV, JSON, and pathlib.",
        content: `<h1>File Handling</h1><h2>Reading &amp; Writing</h2><pre><code>with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()

with open("output.txt", "w") as f:
    f.write("Hello, world!")</code></pre><p>Always use <code>with</code> — it auto-closes the file even on exception.</p><h2>File Modes</h2><table><thead><tr><th>Mode</th><th>Description</th></tr></thead><tbody><tr><td><code>'r'</code></td><td>Read (default)</td></tr><tr><td><code>'w'</code></td><td>Write (overwrites)</td></tr><tr><td><code>'a'</code></td><td>Append</td></tr><tr><td><code>'r+'</code></td><td>Read + Write</td></tr><tr><td><code>'x'</code></td><td>Exclusive create</td></tr></tbody></table><h2>CSV</h2><pre><code>import csv
with open("data.csv") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"])</code></pre><h2>JSON</h2><pre><code>import json
data = {"name": "Alice", "age": 25}
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

with open("data.json") as f:
    loaded = json.load(f)</code></pre><h2>Path Handling with pathlib</h2><pre><code>from pathlib import Path
p = Path.home() / "Documents" / "data.txt"
p.exists()
p.name      # "data.txt"
p.suffix    # ".txt"
p.parent    # Path("/home/user/Documents")
list(p.glob("*.py"))</code></pre>` },
      { id: "python-10", title: "Exception Handling", difficulty: "beginner", time: "5 min", desc: "try/except, custom exceptions, and context managers.",
        content: `<h1>Exception Handling</h1><h2>try / except / else / finally</h2><pre><code>try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
else:
    print("No error occurred")
finally:
    print("Always runs")</code></pre><p>Catch specific exceptions before general ones.</p><h2>Raising Exceptions</h2><pre><code>def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b</code></pre><h2>Custom Exceptions</h2><pre><code>class ValidationError(Exception):
    def __init__(self, field, message):
        self.field = field
        super().__init__(f"Field '{field}': {message}")

if age < 0:
    raise ValidationError("age", "Must be positive")</code></pre><h2>Context Managers</h2><pre><code>from contextlib import contextmanager

@contextmanager
def managed_resource():
    print("Setup")
    try:
        yield "the resource"
    finally:
        print("Teardown")</code></pre><p>Context managers ensure cleanup happens even if an error occurs.</p>` },
      { id: "python-11", title: "Object-Oriented Programming", difficulty: "intermediate", time: "6 min", desc: "Classes, inheritance, properties, and dunder methods.",
        content: `<h1>Object-Oriented Programming</h1><h2>Classes &amp; Objects</h2><pre><code>class BankAccount:
    interest_rate = 0.05  # class variable

    def __init__(self, owner, balance=0):
        self.owner = owner      # instance variable
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self  # method chaining</code></pre><h2>Inheritance</h2><pre><code>class SavingsAccount(BankAccount):
    def __init__(self, owner, balance=0):
        super().__init__(owner, balance)

    def add_interest(self):
        self.balance *= (1 + self.interest_rate)</code></pre><h2>Properties</h2><pre><code>class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32</code></pre><h2>Dunder Methods</h2><pre><code>class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
    def __abs__(self):
        return (self.x**2 + self.y**2)**0.5</code></pre><h2>Class &amp; Static Methods</h2><pre><code>class Date:
    @classmethod
    def from_string(cls, s):
        return cls(*map(int, s.split("-")))

    @staticmethod
    def is_valid(y, m, d):
        return 1 <= m <= 12</code></pre>` },
      { id: "python-12", title: "Modules & Packages", difficulty: "beginner", time: "4 min", desc: "Import system, standard library, pip, and virtual environments.",
        content: `<h1>Modules &amp; Packages</h1><h2>Importing</h2><pre><code>import math
from math import sqrt
import numpy as np
from math import *  # avoid this</code></pre><h2>Key Standard Library</h2><pre><code>import os
os.getcwd()
os.listdir(".")
os.makedirs("new_dir", exist_ok=True)

import sys
sys.argv
sys.version

import math
math.ceil(3.2)   # 4
math.floor(3.8)  # 3
math.gcd(12, 8)  # 4

import random
random.randint(1, 10)
random.choice(["a", "b", "c"])
random.shuffle(my_list)

from collections import Counter, defaultdict, deque
from datetime import datetime, timedelta</code></pre><h2>Module File Pattern</h2><pre><code># utils.py
def add(a, b):
    return a + b

if __name__ == '__main__':
    print(add(2, 3))  # runs only when executed directly</code></pre><h2>Virtual Environments</h2><pre><code>python3 -m venv venv
source venv/bin/activate
pip install requests
pip freeze > requirements.txt</code></pre>` },
      { id: "python-13", title: "Iterators, Generators & Comprehensions", difficulty: "intermediate", time: "5 min", desc: "Memory-efficient sequences and functional tools.",
        content: `<h1>Iterators, Generators &amp; Comprehensions</h1><h2>Generators</h2><p>Functions that <code>yield</code> values one at a time. O(1) memory.</p><pre><code>def countdown(n):
    while n > 0:
        yield n
        n -= 1

squares = (x**2 for x in range(1_000_000))  # generator expression</code></pre><h2>All Comprehension Types</h2><pre><code># List comprehension
squares = [x**2 for x in range(10)]

# Dict comprehension
squares_dict = {x: x**2 for x in range(5)}

# Set comprehension
unique = {x % 3 for x in range(10)}

# Generator expression (lazy)
gen = (x**2 for x in range(10))</code></pre><h2>itertools</h2><pre><code>from itertools import count, cycle, chain, islice, product, combinations
list(islice(count(10), 5))       # [10, 11, 12, 13, 14]
list(combinations([1,2,3], 2))   # [(1,2),(1,3),(2,3)]</code></pre><h2>functools</h2><pre><code>from functools import reduce, partial, lru_cache
reduce(lambda a, b: a + b, [1, 2, 3])  # 6

@lru_cache(maxsize=None)
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)
fib(100)  # instant!</code></pre>` },
      { id: "python-14", title: "Decorators & Closures", difficulty: "intermediate", time: "5 min", desc: "First-class functions, closures, and decorator patterns.",
        content: `<h1>Decorators &amp; Closures</h1><h2>Closures</h2><p>Inner functions remember outer scope variables even after the outer function returns.</p><pre><code>def make_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter

c = make_counter()
c()  # 1
c()  # 2</code></pre><h2>Function Decorators</h2><pre><code>import functools, time

def timer(func):
    @functools.wraps(func)  # preserves __name__, __doc__
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.time()-start:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)</code></pre><h2>Parametrised Decorator</h2><pre><code>def repeat(n):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(n):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def say_hello():
    print("Hello!")</code></pre><h2>@dataclass</h2><pre><code>from dataclasses import dataclass, field

@dataclass
class Point:
    x: float
    y: float
    label: str = "point"</code></pre><p>Auto-generates <code>__init__</code>, <code>__repr__</code>, <code>__eq__</code>.</p>` },
      { id: "python-15", title: "Regular Expressions", difficulty: "intermediate", time: "4 min", desc: "Pattern matching with the re module.",
        content: `<h1>Regular Expressions</h1><pre><code>import re</code></pre><h2>Key Functions</h2><pre><code>re.search(r"\d+", "Order 42")    # first match
re.match(r"\d+", "42 items")     # start of string only
re.findall(r"\d+", "a1 b2 c3")  # ["1", "2", "3"]
re.sub(r"\s+", " ", "  too  many  ")  # " too many "</code></pre><h2>Metacharacters</h2><table><thead><tr><th>Pattern</th><th>Meaning</th></tr></thead><tbody><tr><td><code>\d</code></td><td>Digit [0-9]</td></tr><tr><td><code>\w</code></td><td>Word char [a-zA-Z0-9_]</td></tr><tr><td><code>\s</code></td><td>Whitespace</td></tr><tr><td><code>.</code></td><td>Any character</td></tr><tr><td><code>^</code></td><td>Start of string</td></tr><tr><td><code>$</code></td><td>End of string</td></tr></tbody></table><h2>Quantifiers</h2><pre><code>*     # 0 or more
+     # 1 or more
?     # 0 or 1
{n,m} # n to m times</code></pre><h2>Groups</h2><pre><code>match = re.search(r"(?P&lt;year&gt;\d{4})-(?P&lt;month&gt;\d{2})", "2024-01")
match.group("year")   # "2024"
match.group("month")  # "01"</code></pre><p>Always use raw strings (<code>r""</code>) with regex to avoid backslash issues.</p>` },
      { id: "python-16", title: "Testing & Debugging", difficulty: "intermediate", time: "5 min", desc: "unittest, pytest, pdb, and common Python bugs.",
        content: `<h1>Testing &amp; Debugging</h1><h2>unittest</h2><pre><code>import unittest

class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)

    def test_divide(self):
        with self.assertRaises(ZeroDivisionError):
            divide(1, 0)</code></pre><h2>pytest</h2><pre><code>import pytest

@pytest.mark.parametrize("a,b,expected", [(1,2,3), (0,0,0)])
def test_add(a, b, expected):
    assert add(a, b) == expected</code></pre><h2>Debugging</h2><pre><code>import pdb
pdb.set_trace()  # breakpoint

# Python 3.7+:
breakpoint()

# Commands: n (next), s (step), c (continue), p (print), l (list), q (quit)</code></pre><h2>Logging</h2><pre><code>import logging
logging.basicConfig(level=logging.DEBUG)
logging.debug("Debug message")
logging.info("Info")
logging.warning("Warning")
logging.error("Error")</code></pre><h2>Common Python Bugs</h2><ul><li><strong>Mutable default:</strong> <code>def f(lst=[])</code> shares list across calls</li><li><strong>Late binding:</strong> <code>lambda x: x + i</code> uses final <code>i</code> — fix with <code>i=i</code></li><li><strong>Modifying list while iterating:</strong> use list comprehension instead</li><li><strong>Implicit None return:</strong> functions without return return <code>None</code></li></ul>` },
      { id: "python-17", title: "Real-World Python & Next Steps", difficulty: "intermediate", time: "4 min", desc: "Popular libraries, web scraping, async, and learning path.",
        content: `<h1>Real-World Python &amp; Next Steps</h1><h2>Popular Libraries</h2><table><thead><tr><th>Category</th><th>Libraries</th></tr></thead><tbody><tr><td>Data Science</td><td>NumPy, Pandas, Matplotlib</td></tr><tr><td>Machine Learning</td><td>TensorFlow, PyTorch, scikit-learn</td></tr><tr><td>Web</td><td>Django, FastAPI, Flask</td></tr><tr><td>Scraping</td><td>requests, BeautifulSoup4, Selenium</td></tr><tr><td>Async</td><td>asyncio, aiohttp</td></tr><tr><td>Testing</td><td>pytest, unittest</td></tr></tbody></table><h2>Web Scraping</h2><pre><code>import requests
from bs4 import BeautifulSoup

response = requests.get("https://example.com")
soup = BeautifulSoup(response.text, "html.parser")
print(soup.title.text)</code></pre><h2>Async Python</h2><pre><code>import asyncio

async def fetch_all(urls):
    tasks = [fetch_url(url) for url in urls]
    return await asyncio.gather(*tasks)

asyncio.run(fetch_all(urls))</code></pre><h2>Learning Roadmap</h2><table><thead><tr><th>Level</th><th>Topics</th></tr></thead><tbody><tr><td>Beginner</td><td>Variables, Control Flow, Functions, Lists</td></tr><tr><td>Intermediate</td><td>OOP, File I/O, Exceptions, Modules</td></tr><tr><td>Upper-Intermediate</td><td>Decorators, Generators, Regex</td></tr><tr><td>Advanced</td><td>Async, Testing, Design Patterns</td></tr><tr><td>Specialise</td><td>Data Science, Web, ML, Automation</td></tr></tbody></table><blockquote>Python teaches you to write clean, readable code. Every concept you learn here will make you a better programmer in any language.</blockquote>` }
    ]
  },
  {
    id: "dsa", label: "DSA", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    desc: "Data Structures & Algorithms in C.",
    tags: ["algorithms", "data structures", "complexity"],
    articles: [
      { id: "dsa-01", title: "Introduction to DSA", difficulty: "beginner", time: "5 min", desc: "What are data structures and algorithms?",
        content: `<h1>Introduction to DSA</h1><span class="step-badge">Chapter 1</span><p>Data Structures &amp; Algorithms (DSA) is the core of every technical interview, every high-performance system, and every software engineer's toolkit.</p><h2>What Is a Data Structure?</h2><p>A data structure is a way of organising and storing data so it can be accessed and modified efficiently.</p><ul><li><strong>Linear</strong> — Array, Linked List, Stack, Queue (sequential data)</li><li><strong>Non-Linear</strong> — Tree, Graph (hierarchical/networked relationships)</li><li><strong>Hash-Based</strong> — Hash Table, Hash Set (fast lookup by key)</li><li><strong>Heap</strong> — Min-Heap, Max-Heap (priority ordering)</li></ul><h2>What Is an Algorithm?</h2><p>An algorithm is a step-by-step procedure for solving a problem. It takes an input, processes it, and produces an output. A good algorithm must be correct, finite, unambiguous, and efficient.</p><h2>Why DSA Matters</h2><ul><li>Every major tech company (Google, Amazon, Meta) tests DSA in interviews</li><li>Understanding DSA makes you a fundamentally better programmer</li><li>Real systems — databases, operating systems, search engines — are built on DSA</li><li>Writing efficient code can make the difference between a product that scales and one that crashes</li></ul><h2>How Data Lives in Memory</h2><p>Every variable exists as bytes at a specific memory address. Arrays are contiguous (back-to-back). Linked lists are scattered and connected by pointers.</p><pre><code>// Array: contiguous in memory
int arr[5] = {10, 20, 30, 40, 50};
// [10][20][30][40][50] at addresses 1000, 1004, 1008, 1012, 1016

// Linked list: scattered, connected by pointers
// [10|next] -> [20|next] -> [30|null]
// @1000       @2500       @4100</code></pre><blockquote>Choosing the right data structure can make operations millions of times faster.</blockquote>` },
      { id: "dsa-02", title: "Time & Space Complexity", difficulty: "beginner", time: "5 min", desc: "Big-O notation, best/worst case.",
        content: `<h1>Time &amp; Space Complexity</h1><span class="step-badge">Chapter 2</span><p>Complexity analysis gives us a mathematical way to compare algorithms before we even run them. We use Big-O notation to describe how performance grows as input size n increases.</p><h2>Big-O Notation</h2><pre><code>// O(1) — Constant
int get_first(int arr[]) {
    return arr[0];  // always one step
}

// O(n) — Linear
int find_max(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i &lt; n; i++)
        if (arr[i] &gt; max) max = arr[i];
    return max;
}

// O(n²) — Quadratic
void bubble_sort(int arr[], int n) {
    for (int i = 0; i &lt; n; i++)
        for (int j = 0; j &lt; n-i-1; j++)
            if (arr[j] &gt; arr[j+1])
                swap(arr[j], arr[j+1]);
}

// O(log n) — Logarithmic
int binary_search(int arr[], int n, int target) {
    int lo = 0, hi = n - 1;
    while (lo &lt;= hi) {
        int mid = (lo + hi) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] &lt; target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}</code></pre><h2>Complexity Rankings</h2><p>O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2^n) — lower is always better.</p><h2>Big-O Rules</h2><ul><li>Drop constants: O(2n) = O(n)</li><li>Drop lower-order terms: O(n² + n) = O(n²)</li><li>Sequential code ADDS complexity. Nested code MULTIPLIES.</li></ul><h2>Space Complexity</h2><pre><code>// O(1) space — only a few variables
int sum_array(int arr[], int n) {
    int total = 0;
    for (int i = 0; i &lt; n; i++)
        total += arr[i];
    return total;
}

// O(n) space — creates a new array
int* double_array(int arr[], int n) {
    int *result = malloc(n * sizeof(int));
    for (int i = 0; i &lt; n; i++)
        result[i] = arr[i] * 2;
    return result;
}

// O(n) space via recursion call stack
int factorial(int n) {
    if (n &lt;= 1) return 1;
    return n * factorial(n - 1);  // n stack frames!
}</code></pre><blockquote>Time-space trade-off: use more memory to gain speed (memoisation, hash sets).</blockquote>` },
      { id: "dsa-03", title: "Arrays", difficulty: "beginner", time: "5 min", desc: "Memory layout, operations, patterns.",
        content: `<h1>Arrays</h1><span class="step-badge">Chapter 3</span><p>An array is the simplest and most widely used data structure. It stores elements of the same type in contiguous memory, allowing O(1) random access by index.</p><h2>Array Operations</h2><pre><code>// ACCESS — O(1): direct address calculation
int val = arr[i];

// SEARCH (unsorted) — O(n)
int linear_search(int arr[], int n, int target) {
    for (int i = 0; i &lt; n; i++)
        if (arr[i] == target) return i;
    return -1;
}

// INSERT at end — O(1) amortized
arr[size++] = new_value;

// INSERT at index i — O(n): shift elements right
void insert_at(int arr[], int *size, int index, int val) {
    for (int j = *size; j &gt; index; j--)
        arr[j] = arr[j-1];  // shift right
    arr[index] = val;
    (*size)++;
}

// DELETE at index i — O(n): shift elements left
void delete_at(int arr[], int *size, int index) {
    for (int j = index; j &lt; *size - 1; j++)
        arr[j] = arr[j+1];  // shift left
    (*size)--;
}</code></pre><h2>Two Pointers Pattern</h2><pre><code>// Reverse array in-place — O(n), O(1) space
void reverse(int arr[], int n) {
    int left = 0, right = n - 1;
    while (left &lt; right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

// Check pair sum in sorted array — O(n), O(1) space
int has_pair_sum(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left &lt; right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return 1;
        else if (sum &lt; target) left++;
        else right--;
    }
    return 0;
}</code></pre><h2>Prefix Sums</h2><pre><code>// O(n) preprocessing → O(1) per range query
void build_prefix(int arr[], int prefix[], int n) {
    prefix[0] = arr[0];
    for (int i = 1; i &lt; n; i++)
        prefix[i] = prefix[i-1] + arr[i];
}

int range_sum(int prefix[], int l, int r) {
    if (l == 0) return prefix[r];
    return prefix[r] - prefix[l-1];  // O(1)!
}</code></pre><blockquote>Dynamic arrays double capacity on resize → amortised O(1) append. This is how Python lists and C++ vectors work.</blockquote>` },
      { id: "dsa-04", title: "Strings", difficulty: "beginner", time: "5 min", desc: "String operations, pattern matching, KMP.",
        content: `<h1>Strings</h1><span class="step-badge">Chapter 4</span><p>In C, a string is an array of char values ending with <code>'\\0'</code>. Understanding string memory is critical for writing efficient code.</p><h2>Common String Operations</h2><pre><code>#include &lt;string.h&gt;

char s[] = "Hello World";
int n = strlen(s);  // O(n) — scans to find \\0

// Traverse character by character — O(n)
for (int i = 0; i &lt; n; i++)
    printf("%c ", s[i]);

// Compare — O(min(len1, len2))
strcmp("abc", "abc");  // 0 = equal

// Copy — O(n) — ALWAYS use n limit:
char dest[50];
strncpy(dest, s, 49);
dest[49] = '\\0';  // manual null-termination!

// Reverse in-place — O(n), O(1) space
void reverse_str(char *s, int n) {
    int l = 0, r = n - 1;
    while (l &lt; r) {
        char tmp = s[l]; s[l] = s[r]; s[r] = tmp;
        l++; r--;
    }
}</code></pre><h2>Palindrome Check — Two Pointers</h2><pre><code>int is_palindrome(char *s, int n) {
    int l = 0, r = n - 1;
    while (l &lt; r) {
        if (s[l] != s[r]) return 0;
        l++; r--;
    }
    return 1;
}</code></pre><h2>Pattern Matching — Naive vs KMP</h2><pre><code>// Naive — O(n*m)
int naive_search(char *t, int n, char *p, int m) {
    for (int i = 0; i &lt;= n - m; i++) {
        int j = 0;
        while (j &lt; m &amp;&amp; t[i+j] == p[j]) j++;
        if (j == m) return i;
    }
    return -1;
}

// KMP — O(n+m) using failure function
// Never backtracks in the text!</code></pre><h2>Frequency Counting</h2><pre><code>// Count frequency of each character — O(n), O(1) space
void char_freq(char *s, int freq[26]) {
    memset(freq, 0, 26 * sizeof(int));
    for (int i = 0; s[i]; i++)
        freq[tolower(s[i]) - 'a']++;
}

// Check if two strings are anagrams — O(n)
int is_anagram(char *a, char *b) {
    if (strlen(a) != strlen(b)) return 0;
    int freq[26] = {0};
    for (int i = 0; a[i]; i++) freq[tolower(a[i])-'a']++;
    for (int i = 0; b[i]; i++) freq[tolower(b[i])-'a']--;
    for (int i = 0; i &lt; 26; i++) if (freq[i]) return 0;
    return 1;
}</code></pre><blockquote>KMP is a classic example of precomputation reducing time complexity from O(n×m) to O(n+m).</blockquote>` },
      { id: "dsa-05", title: "Linked Lists", difficulty: "beginner", time: "5 min", desc: "Singly, doubly, operations, cycle detection.",
        content: `<h1>Linked Lists</h1><span class="step-badge">Chapter 5</span><p>A linked list is a sequence of nodes where each node stores a value and a pointer to the next node. Unlike arrays, nodes are scattered in memory and connected by pointers.</p><h2>Implementation</h2><pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

typedef struct Node {
    int data;
    struct Node *next;
} Node;

// Create a new node — O(1)
Node* create_node(int val) {
    Node *node = (Node*)malloc(sizeof(Node));
    node->data = val;
    node->next = NULL;
    return node;
}

// Insert at beginning — O(1)
Node* insert_front(Node *head, int val) {
    Node *new_node = create_node(val);
    new_node->next = head;
    return new_node;
}

// Insert at end — O(n)
void insert_end(Node *head, int val) {
    Node *curr = head;
    while (curr->next != NULL) curr = curr->next;
    curr->next = create_node(val);
}

// Delete a node by value — O(n)
Node* delete_node(Node *head, int val) {
    if (!head) return NULL;
    if (head->data == val) {
        Node *temp = head->next;
        free(head);
        return temp;
    }
    Node *curr = head;
    while (curr->next &amp;&amp; curr->next->data != val)
        curr = curr->next;
    if (curr->next) {
        Node *to_del = curr->next;
        curr->next = to_del->next;
        free(to_del);
    }
    return head;
}

// Traverse and print — O(n)
void print_list(Node *head) {
    while (head) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\\n");
}</code></pre><h2>Reverse a Linked List — O(n), O(1) space</h2><pre><code>Node* reverse(Node *head) {
    Node *prev = NULL, *curr = head, *next = NULL;
    while (curr) {
        next = curr->next;   // save next
        curr->next = prev;   // reverse pointer
        prev = curr;          // advance prev
        curr = next;          // advance curr
    }
    return prev;  // prev is now the new head
}</code></pre><h2>Detect Cycle — Floyd's Tortoise and Hare</h2><pre><code>int has_cycle(Node *head) {
    Node *slow = head, *fast = head;
    while (fast &amp;&amp; fast->next) {
        slow = slow->next;       // moves 1 step
        fast = fast->next->next; // moves 2 steps
        if (slow == fast) return 1;  // cycle detected!
    }
    return 0;
}</code></pre><h2>Find Middle Node</h2><pre><code>Node* find_middle(Node *head) {
    Node *slow = head, *fast = head;
    while (fast &amp;&amp; fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;  // when fast reaches end, slow is at middle
}</code></pre><blockquote>The two-pointer 'tortoise and hare' technique appears in cycle detection, finding middle, and detecting intersections. Master it — it's O(n) time, O(1) space.</blockquote>` },
      { id: "dsa-06", title: "Stacks", difficulty: "beginner", time: "5 min", desc: "LIFO, implementation, applications.",
        content: `<h1>Stacks</h1><span class="step-badge">Chapter 6</span><p>A stack is a Last In, First Out (LIFO) data structure. The last element added is the first one removed. Think of a stack of plates.</p><h2>Array-based Stack</h2><pre><code>#define MAX 1000

typedef struct {
    int data[MAX];
    int top;
} Stack;

void init(Stack *s) { s->top = -1; }
int is_empty(Stack *s) { return s->top == -1; }
int is_full(Stack *s) { return s->top == MAX - 1; }

// Push — O(1)
void push(Stack *s, int val) {
    if (is_full(s)) { printf("Overflow!\\n"); return; }
    s->data[++s->top] = val;
}

// Pop — O(1)
int pop(Stack *s) {
    if (is_empty(s)) { printf("Underflow!\\n"); return -1; }
    return s->data[s->top--];
}

// Peek — O(1)
int peek(Stack *s) {
    if (is_empty(s)) return -1;
    return s->data[s->top];
}</code></pre><h2>Balanced Parentheses Checker</h2><pre><code>int is_balanced(char *expr) {
    Stack s; init(&amp;s);
    for (int i = 0; expr[i]; i++) {
        char c = expr[i];
        if (c=='(' || c=='[' || c=='{') { push(&amp;s, c); }
        else if (c==')' || c==']' || c=='}') {
            if (is_empty(&amp;s)) return 0;
            char top = pop(&amp;s);
            if ((c==')' &amp;&amp; top!='(') ||
                (c==']' &amp;&amp; top!='[') ||
                (c=='}' &amp;&amp; top!='{')) return 0;
        }
    }
    return is_empty(&amp;s);
}</code></pre><h2>Next Greater Element — O(n)</h2><pre><code>void next_greater(int arr[], int n) {
    Stack s; init(&amp;s);
    int result[n];
    for (int i = 0; i &lt; n; i++) result[i] = -1;

    for (int i = 0; i &lt; n; i++) {
        while (!is_empty(&amp;s) &amp;&amp; arr[peek(&amp;s)] &lt; arr[i])
            result[pop(&amp;s)] = arr[i];
        push(&amp;s, i);
    }
}</code></pre><blockquote>The monotonic stack pattern maintains sorted order in stack to solve 'next greater/smaller' problems in O(n) instead of O(n²).</blockquote>` },
      { id: "dsa-07", title: "Queues", difficulty: "beginner", time: "4 min", desc: "FIFO, circular queue, BFS.",
        content: `<h1>Queues</h1><span class="step-badge">Chapter 7</span><p>A queue is a First In, First Out (FIFO) data structure. The first element added is the first one removed — like a queue at a ticket counter.</p><h2>Circular Queue Implementation</h2><pre><code>#define MAX 1000
typedef struct {
    int data[MAX];
    int front, rear, size;
} Queue;

void init_q(Queue *q) { q->front=0; q->rear=-1; q->size=0; }
int q_empty(Queue *q) { return q->size == 0; }

// Enqueue (add to rear) — O(1)
void enqueue(Queue *q, int val) {
    if (q->size == MAX) { printf("Full!\\n"); return; }
    q->rear = (q->rear + 1) % MAX;  // circular!
    q->data[q->rear] = val;
    q->size++;
}

// Dequeue (remove from front) — O(1)
int dequeue(Queue *q) {
    if (q_empty(q)) return -1;
    int val = q->data[q->front];
    q->front = (q->front + 1) % MAX;  // circular!
    q->size--;
    return val;
}</code></pre><blockquote>Note the (rear+1) % MAX — this is a CIRCULAR queue. Without the modulo, the rear would go past the array end even though the front has freed up space.</blockquote><h2>BFS Uses a Queue</h2><p>BFS traversal of a tree/graph uses a queue to process nodes level by level:</p><pre><code>Level 0: [1]
Level 1: [2] [3]
Level 2: [4][5][6][7]

Queue: [1] → dequeue 1 → [2,3] → dequeue 2 → [3,4,5]
→ dequeue 3 → [4,5,6,7] → ... level by level!</code></pre>` },
      { id: "dsa-08", title: "Recursion", difficulty: "intermediate", time: "5 min", desc: "Call stack, three laws, fibonacci, Tower of Hanoi.",
        content: `<h1>Recursion</h1><span class="step-badge">Chapter 8</span><p>Recursion is when a function calls itself to solve a smaller version of the same problem. Every recursive solution has a base case (when to stop) and a recursive case (how to reduce the problem).</p><h2>The Three Laws of Recursion</h2><ol><li><strong>Base Case</strong> — Must have at least one case that does NOT recurse</li><li><strong>Move Toward Base</strong> — Each recursive call must be 'smaller' or 'closer' to base</li><li><strong>Call Itself</strong> — The function must call itself on the smaller problem</li></ol><h2>Factorial</h2><pre><code>int factorial(int n) {
    if (n == 0) return 1;  // BASE CASE
    return n * factorial(n-1);  // RECURSIVE CASE
}
// factorial(4) trace: 4*3*2*1 = 24</code></pre><h2>Fibonacci — Naive vs Memoised</h2><pre><code>// NAIVE — O(2^n) exponential
int fib(int n) {
    if (n &lt;= 1) return n;
    return fib(n-1) + fib(n-2);
}

// MEMOISED — O(n) time, O(n) space
int memo[1000];
int fib_memo(int n) {
    if (n &lt;= 1) return n;
    if (memo[n] != -1) return memo[n];
    return memo[n] = fib_memo(n-1) + fib_memo(n-2);
}</code></pre><h2>Tower of Hanoi — O(2^n)</h2><pre><code>void hanoi(int n, char src, char dst, char aux) {
    if (n == 1) {
        printf("Move disk 1 from %c to %c\\n", src, dst);
        return;
    }
    hanoi(n-1, src, aux, dst);
    printf("Move disk %d from %c to %c\\n", n, src, dst);
    hanoi(n-1, aux, dst, src);
}
// hanoi(3, 'A', 'C', 'B') — generates 2^3 - 1 = 7 moves</code></pre><h2>Convert Recursion to Iteration</h2><pre><code>// Recursive factorial — O(n) call stack space
int fact_recursive(int n) {
    if (n == 0) return 1;
    return n * fact_recursive(n-1);
}

// Iterative factorial — O(1) space!
int fact_iterative(int n) {
    int result = 1;
    for (int i = 2; i &lt;= n; i++)
        result *= i;
    return result;
}</code></pre><blockquote>Any recursive algorithm can be converted to an iterative one by explicitly managing a stack.</blockquote>` },
      { id: "dsa-09", title: "Trees", difficulty: "intermediate", time: "5 min", desc: "BST, traversals, height, balance.",
        content: `<h1>Trees</h1><span class="step-badge">Chapter 9</span><p>A tree is a non-linear hierarchical data structure consisting of nodes connected by edges. Trees are everywhere: file systems, HTML DOM, database indexes.</p><h2>Binary Search Tree (BST)</h2><pre><code>typedef struct Node {
    int data;
    struct Node *left, *right;
} Node;

// Insert — O(h) where h = height
Node* bst_insert(Node *root, int val) {
    if (!root) {
        Node *n = malloc(sizeof(Node));
        n->data = val; n->left = n->right = NULL;
        return n;
    }
    if (val &lt; root->data) root->left = bst_insert(root->left, val);
    else if (val &gt; root->data) root->right = bst_insert(root->right, val);
    return root;
}

// Search — O(h)
Node* bst_search(Node *root, int val) {
    if (!root || root->data == val) return root;
    if (val &lt; root->data) return bst_search(root->left, val);
    return bst_search(root->right, val);
}</code></pre><h2>Tree Traversals</h2><pre><code>// INORDER: Left → Root → Right (gives SORTED output for BST!)
void inorder(Node *root) {
    if (!root) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}

// PREORDER: Root → Left → Right (useful for copying a tree)
void preorder(Node *root) {
    if (!root) return;
    printf("%d ", root->data);
    preorder(root->left);
    preorder(root->right);
}

// POSTORDER: Left → Right → Root (useful for deleting a tree)
void postorder(Node *root) {
    if (!root) return;
    postorder(root->left);
    postorder(root->right);
    printf("%d ", root->data);
}

// LEVEL ORDER (BFS) — uses a queue
void level_order(Node *root) {
    Queue q; init_q(&amp;q);
    enqueue(&amp;q, root);
    while (!q_empty(&amp;q)) {
        Node *curr = dequeue(&amp;q);
        printf("%d ", curr->data);
        if (curr->left) enqueue(&amp;q, curr->left);
        if (curr->right) enqueue(&amp;q, curr->right);
    }
}</code></pre><h2>Height and Count</h2><pre><code>int height(Node *root) {
    if (!root) return -1;
    int lh = height(root->left);
    int rh = height(root->right);
    return 1 + (lh &gt; rh ? lh : rh);
}

int count(Node *root) {
    if (!root) return 0;
    return 1 + count(root->left) + count(root->right);
}</code></pre><blockquote>Worst case for BST: inserting sorted data creates a straight line — O(n) for all operations. Balanced BSTs (AVL, Red-Black) guarantee O(log n).</blockquote>` },
      { id: "dsa-10", title: "Graphs", difficulty: "intermediate", time: "5 min", desc: "Representations, BFS, DFS, topological sort.",
        content: `<h1>Graphs</h1><span class="step-badge">Chapter 10</span><p>A graph is a collection of vertices (nodes) connected by edges. Unlike trees, graphs can have cycles, multiple edges, and disconnected components.</p><h2>Graph Representations</h2><pre><code>// Adjacency Matrix — O(V²) space, O(1) edge check
int adj[4][4] = {
    {0, 1, 1, 0},  // vertex 0 connects to 1 and 2
    {1, 0, 0, 1},  // vertex 1 connects to 0 and 3
    {1, 0, 0, 1},  // vertex 2 connects to 0 and 3
    {0, 1, 1, 0}   // vertex 3 connects to 1 and 2
};

// Adjacency List — O(V + E) space (preferred for sparse graphs)
typedef struct {
    int *neighbors;
    int degree;
    int capacity;
} Vertex;

typedef struct {
    Vertex *adj;
    int V;
} Graph;</code></pre><h2>BFS — Queue-based, Level-by-Level</h2><pre><code>void bfs(Graph *g, int start) {
    int visited[g->V];
    memset(visited, 0, sizeof(visited));

    Queue q; init_q(&amp;q);
    enqueue(&amp;q, start);
    visited[start] = 1;

    while (!q_empty(&amp;q)) {
        int v = dequeue(&amp;q);
        printf("%d ", v);

        for (int i = 0; i &lt; g->adj[v].degree; i++) {
            int neighbor = g->adj[v].neighbors[i];
            if (!visited[neighbor]) {
                visited[neighbor] = 1;
                enqueue(&amp;q, neighbor);
            }
        }
    }
}
// Time: O(V + E). Space: O(V)</code></pre><h2>DFS — Stack/Recursion, Goes Deep First</h2><pre><code>void dfs(Graph *g, int v, int visited[]) {
    visited[v] = 1;
    printf("%d ", v);

    for (int i = 0; i &lt; g->adj[v].degree; i++) {
        int neighbor = g->adj[v].neighbors[i];
        if (!visited[neighbor])
            dfs(g, neighbor, visited);
    }
}

void dfs_all(Graph *g) {
    int visited[g->V];
    memset(visited, 0, sizeof(visited));
    for (int v = 0; v &lt; g->V; v++)
        if (!visited[v])
            dfs(g, v, visited);  // handles disconnected graph!
}</code></pre><h2>Topological Sort</h2><pre><code>// Topological sort using DFS + stack — O(V + E)
void topo_dfs(Graph *g, int v, int visited[], Stack *s) {
    visited[v] = 1;
    for (int i = 0; i &lt; g->adj[v].degree; i++) {
        int nb = g->adj[v].neighbors[i];
        if (!visited[nb])
            topo_dfs(g, nb, visited, s);
    }
    push(s, v);  // push AFTER all neighbours processed
}</code></pre><blockquote>BFS → uses QUEUE → guarantees shortest path in unweighted graph. DFS → uses STACK (recursion) → good for connectivity, cycles.</blockquote>` },
      { id: "dsa-11", title: "Hashing", difficulty: "intermediate", time: "5 min", desc: "Hash functions, collisions, applications.",
        content: `<h1>Hashing</h1><span class="step-badge">Chapter 11</span><p>Hashing converts a key into an index in an array using a hash function. This enables average O(1) insert, delete, and lookup — the holy grail of data structures.</p><h2>Hash Functions</h2><pre><code>// Simple hash for integers
int hash_int(int key, int size) {
    return key % size;  // modulo gives index 0..size-1
}

// Hash for strings (djb2 — widely used)
unsigned int hash_str(char *key, int size) {
    unsigned int hash = 5381;
    int c;
    while ((c = *key++))
        hash = ((hash &lt;&lt; 5) + hash) + c;  // hash * 33 + c
    return hash % size;
}</code></pre><h2>Collision Resolution — Chaining</h2><pre><code>// Each bucket holds a linked list
// Index 3 → [3] → [10] → NULL  (both hash to 3)
// Worst case: all keys hash to same bucket → O(n)</code></pre><h2>Collision Resolution — Open Addressing</h2><pre><code>// Linear probing: if index i is taken, try i+1, i+2, ...
int hash_insert(int table[], int size, int key) {
    int index = key % size;
    int i = 0;
    while (i &lt; size) {
        int probe = (index + i) % size;
        if (table[probe] == -1) {
            table[probe] = key;
            return probe;
        }
        i++;
    }
    return -1;  // table full
}</code></pre><h2>Applications</h2><pre><code>// Two Sum in O(n): find indices of two numbers summing to target
// Hash map: value → index
// For each arr[i], check if (target - arr[i]) is already in map
// If yes: found! If no: add arr[i] to map

// Frequency count in O(n)
// Detect duplicate elements in O(n)
// Implement LRU Cache (hash map + doubly linked list)</code></pre><blockquote>Load factor = n/m. Keep below 0.75 by resizing (doubling array and rehashing). Most implementations resize automatically.</blockquote>` },
      { id: "dsa-12", title: "Sorting Algorithms", difficulty: "intermediate", time: "5 min", desc: "Bubble, merge, quick sort, comparison.",
        content: `<h1>Sorting Algorithms</h1><span class="step-badge">Chapter 12</span><p>Sorting is one of the most fundamental operations in computer science. Sorted data enables binary search (O(log n) instead of O(n)).</p><h2>Bubble Sort — O(n²)</h2><pre><code>void bubble_sort(int arr[], int n) {
    for (int i = 0; i &lt; n-1; i++) {
        int swapped = 0;
        for (int j = 0; j &lt; n-i-1; j++) {
            if (arr[j] &gt; arr[j+1]) {
                int tmp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = tmp;
                swapped = 1;
            }
        }
        if (!swapped) break;  // already sorted — early exit!
    }
}</code></pre><h2>Selection Sort — O(n²)</h2><pre><code>void selection_sort(int arr[], int n) {
    for (int i = 0; i &lt; n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j &lt; n; j++)
            if (arr[j] &lt; arr[min_idx]) min_idx = j;
        int tmp = arr[i]; arr[i] = arr[min_idx]; arr[min_idx] = tmp;
    }
}</code></pre><h2>Insertion Sort — O(n²), but O(n) best case</h2><pre><code>void insertion_sort(int arr[], int n) {
    for (int i = 1; i &lt; n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j &gt;= 0 &amp;&amp; arr[j] &gt; key) {
            arr[j+1] = arr[j];  // shift right
            j--;
        }
        arr[j+1] = key;  // insert in correct position
    }
}</code></pre><h2>Merge Sort — O(n log n) always</h2><pre><code>void merge(int arr[], int l, int m, int r) {
    int n1=m-l+1, n2=r-m;
    int L[n1], R[n2];
    for(int i=0;i&lt;n1;i++) L[i]=arr[l+i];
    for(int j=0;j&lt;n2;j++) R[j]=arr[m+1+j];
    int i=0,j=0,k=l;
    while(i&lt;n1 &amp;&amp; j&lt;n2) arr[k++] = (L[i]&lt;=R[j]) ? L[i++] : R[j++];
    while(i&lt;n1) arr[k++]=L[i++];
    while(j&lt;n2) arr[k++]=R[j++];
}

void merge_sort(int arr[], int l, int r) {
    if (l &gt;= r) return;
    int m = l + (r-l)/2;
    merge_sort(arr, l, m);
    merge_sort(arr, m+1, r);
    merge(arr, l, m, r);
}</code></pre><h2>Quick Sort — O(n log n) average</h2><pre><code>int partition(int arr[], int lo, int hi) {
    int pivot = arr[hi];
    int i = lo - 1;
    for (int j = lo; j &lt; hi; j++) {
        if (arr[j] &lt;= pivot) {
            i++;
            int tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
        }
    }
    int tmp = arr[i+1]; arr[i+1] = arr[hi]; arr[hi] = tmp;
    return i + 1;
}

void quick_sort(int arr[], int lo, int hi) {
    if (lo &lt; hi) {
        int pi = partition(arr, lo, hi);
        quick_sort(arr, lo, pi-1);
        quick_sort(arr, pi+1, hi);
    }
}</code></pre><blockquote>Quick Sort is faster than Merge Sort in practice despite same O(n log n) average because of better cache locality. Use randomised pivot to avoid O(n²) worst case.</blockquote>` },
      { id: "dsa-13", title: "Searching Algorithms", difficulty: "intermediate", time: "4 min", desc: "Linear search, binary search deep dive.",
        content: `<h1>Searching Algorithms</h1><span class="step-badge">Chapter 13</span><h2>Linear Search — O(n)</h2><pre><code>int linear_search(int arr[], int n, int target) {
    for (int i = 0; i &lt; n; i++)
        if (arr[i] == target) return i;
    return -1;
}
// Best: O(1). Worst: O(n). Works on unsorted arrays.</code></pre><h2>Binary Search — O(log n)</h2><p>Binary search requires a sorted array and halves the search space with each comparison. For n = 1,000,000 elements: binary search takes at most 20 steps while linear search takes up to 1,000,000 steps.</p><pre><code>// Iterative — O(log n) time, O(1) space
int binary_search(int arr[], int n, int target) {
    int lo = 0, hi = n - 1;
    while (lo &lt;= hi) {
        int mid = lo + (hi - lo) / 2;  // CORRECT: avoids overflow!
        if (arr[mid] == target) return mid;
        else if (arr[mid] &lt; target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}

// Recursive — O(log n) time, O(log n) space (call stack)
int bs_rec(int arr[], int lo, int hi, int target) {
    if (lo &gt; hi) return -1;
    int mid = lo + (hi - lo) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] &lt; target) return bs_rec(arr, mid+1, hi, target);
    return bs_rec(arr, lo, mid-1, target);
}</code></pre><h2>Binary Search Trace</h2><pre><code>// Searching for 7 in: [1, 3, 5, 7, 9, 11, 13]
// Step 1: lo=0, hi=6, mid=3 → arr[3]=7 → FOUND!
// For 1,000,000 elements: max 20 steps (log₂(1,000,000) ≈ 20)</code></pre><blockquote>Binary search is THE most important search algorithm. Always use lo + (hi - lo) / 2 to avoid integer overflow, NOT (lo + hi) / 2.</blockquote>` },
      { id: "dsa-14", title: "Advanced Problem-Solving Patterns", difficulty: "advanced", time: "5 min", desc: "Two pointers, sliding window, DP intro.",
        content: `<h1>Advanced Problem-Solving Patterns</h1><span class="step-badge">Chapter 14</span><h2>Two Pointers</h2><pre><code>// Find pair with given sum in sorted array — O(n), O(1)
int two_sum_sorted(int arr[], int n, int target) {
    int l = 0, r = n - 1;
    while (l &lt; r) {
        int sum = arr[l] + arr[r];
        if (sum == target) return 1;
        else if (sum &lt; target) l++;
        else r--;
    }
    return 0;
}</code></pre><h2>Sliding Window</h2><pre><code>// Maximum sum subarray of size k — O(n)
int max_sum_k(int arr[], int n, int k) {
    int window_sum = 0;
    for (int i = 0; i &lt; k; i++) window_sum += arr[i];
    int max_sum = window_sum;
    for (int i = k; i &lt; n; i++) {
        window_sum += arr[i] - arr[i-k];  // slide window
        if (window_sum &gt; max_sum) max_sum = window_sum;
    }
    return max_sum;
}</code></pre><h2>Divide &amp; Conquer</h2><pre><code>// Merge sort and quick sort are divide &amp; conquer
// 1. DIVIDE the problem into smaller sub-problems
// 2. CONQUER each sub-problem recursively
// 3. COMBINE the results</code></pre><h2>Greedy Algorithm</h2><pre><code>// Activity Selection: always pick the earliest finishing activity
// Sort by finish time, greedily select non-overlapping activities
// O(n log n) for sorting + O(n) for selection</code></pre><h2>Dynamic Programming Intro</h2><pre><code>// Fibonacci with DP — O(n) time, O(n) space
int fib_dp(int n) {
    int dp[n+1];
    dp[0] = 0; dp[1] = 1;
    for (int i = 2; i &lt;= n; i++)
        dp[i] = dp[i-1] + dp[i-2];
    return dp[n];
}

// Fibonacci with O(1) space
int fib_opt(int n) {
    if (n &lt;= 1) return n;
    int a = 0, b = 1;
    for (int i = 2; i &lt;= n; i++) {
        int temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}</code></pre><blockquote>DP = recursion + memoisation. If you see overlapping subproblems and optimal substructure, think DP.</blockquote>` },
      { id: "dsa-15", title: "Common Mistakes & Debugging", difficulty: "advanced", time: "4 min", desc: "Off-by-one, infinite loops, memory issues.",
        content: `<h1>Common Mistakes &amp; Debugging</h1><span class="step-badge">Chapter 15</span><h2>Off-By-One Errors</h2><pre><code>// BAD — accessing arr[n] which is OUT OF BOUNDS
for (int i = 0; i &lt;= n; i++) {  // should be &lt; not &lt;=
    printf("%d ", arr[i]);
}

// BAD — string traversal missing null check
for (int i = 0; s[i]; i++) { }  // correct
for (int i = 0; i &lt;= strlen(s); i++) { }  // wrong!</code></pre><h2>Infinite Loops</h2><pre><code>// BAD — i never changes
while (i &lt; n) {
    printf("%d ", arr[i]);
    // forgot i++!
}

// BAD — recursion without base case
int factorial(int n) {
    return n * factorial(n-1);  // NEVER STOPS!</code></pre><h2>Memory Issues</h2><pre><code>// BAD — memory leak
int *p = malloc(100 * sizeof(int));
// ... use p ...
return;  // forgot free(p)!

// BAD — double free
free(p);
free(p);  // CRASH!

// GOOD — safe pattern
free(p);
p = NULL;  // prevent dangling pointer</code></pre><h2>Debugging Strategies</h2><ul><li>Use printf to trace variable values at each step</li><li>Draw the data structure on paper</li><li>Test with small inputs first</li><li>Use a debugger (gdb) for complex issues</li><li>Check edge cases: empty input, single element, duplicates</li></ul><blockquote>The best debugging tool is a clear mind. Understand your code before trying to fix it.</blockquote>` },
      { id: "dsa-16", title: "Real-World Applications", difficulty: "advanced", time: "4 min", desc: "How DSA powers real systems.",
        content: `<h1>Real-World Applications</h1><span class="step-badge">Chapter 16</span><h2>How DSA Powers Real Systems</h2><ul><li><strong>Databases</strong> — B-trees for indexing, hash tables for lookups, sorting for query optimization</li><li><strong>Operating Systems</strong> — scheduling queues, memory management (paging), file systems (trees)</li><li><strong>Search Engines</strong> — inverted indexes (hash maps), PageRank (graph algorithms)</li><li><strong>Social Networks</strong> — graphs for friend connections, BFS for friend suggestions</li><li><strong>GPS Navigation</strong> — Dijkstra's algorithm on weighted graphs for shortest path</li><li><strong>Compilers</strong> — symbol tables (hash maps), parse trees, topological sort for dependency resolution</li></ul><h2>Choosing the Right Data Structure</h2><ul><li><strong>Need fast lookup by key?</strong> → Hash Table (O(1) average)</li><li><strong>Need sorted data?</strong> → BST or balanced tree (O(log n))</li><li><strong>Need FIFO processing?</strong> → Queue</li><li><strong>Need LIFO processing?</strong> → Stack</li><li><strong>Need to find shortest path?</strong> → Graph + BFS/Dijkstra</li><li><strong>Need priority processing?</strong> → Heap / Priority Queue</li><li><strong>Need frequent insert/delete at front?</strong> → Linked List</li></ul><h2>Performance Mindset</h2><pre><code>// BAD: O(n²) — checking every pair
for (int i = 0; i &lt; n; i++)
    for (int j = i+1; j &lt; n; j++)
        if (arr[i] + arr[j] == target) return 1;

// GOOD: O(n) — using hash set
// For each arr[i], check if (target - arr[i]) is in hash set</code></pre><h2>Next Steps</h2><ul><li>Practice problems on LeetCode, HackerRank, or Codeforces</li><li>Focus on patterns, not individual problems</li><li>Implement data structures from scratch in C</li><li>Read "Introduction to Algorithms" (CLRS) for deeper understanding</li></ul><blockquote>DSA is not just an academic subject — it is the core of every technical interview and every high-performance system. Master it, and you will be a fundamentally better programmer.</blockquote>` }
    ]
  },
  {
    id: "linux", label: "Linux", icon: `<img src="assets/icons/linux.svg" width="24" height="24" alt="Linux">`,
    desc: "System administration and security.",
    tags: ["security", "hardening", "commands"],
    articles: [
      { id: "lin-01", title: "Malware & Rootkit Scanning", difficulty: "intermediate", time: "5 min", desc: "Scan for threats.",
        content: `<h1>Malware & Rootkit Scanning</h1><span class="step-badge">Safe</span><h2>ClamAV</h2><pre><code>sudo apt install clamav clamav-daemon
sudo freshclam
sudo clamscan -r --bell -i /</code></pre><h2>Chkrootkit</h2><pre><code>sudo apt install chkrootkit
sudo chkrootkit</code></pre><h2>RKHunter</h2><pre><code>sudo apt install rkhunter
sudo rkhunter --update
sudo rkhunter --check</code></pre><h2>Lynis</h2><pre><code>sudo apt install lynis
sudo lynis audit system</code></pre>` },
      { id: "lin-02", title: "Firewall & Network", difficulty: "intermediate", time: "3 min", desc: "Configure UFW.",
        content: `<h1>Firewall & Network Protection</h1><span class="step-badge">Safe</span><pre><code>sudo ufw enable
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw status verbose</code></pre>` },
      { id: "lin-03", title: "AppArmor", difficulty: "intermediate", time: "3 min", desc: "System sandboxing.",
        content: `<h1>AppArmor</h1><span class="step-badge">Safe</span><pre><code>sudo aa-status
sudo systemctl restart apparmor</code></pre>` },
      { id: "lin-04", title: "File Integrity", difficulty: "advanced", time: "4 min", desc: "Lock files with chattr.",
        content: `<h1>File Integrity Protection</h1><span class="step-badge">Caution</span><pre><code>sudo chattr +i /path/to/file
sudo chattr -i /path/to/file</code></pre><blockquote>WARNING: Do NOT use on system directories.</blockquote>` },
      { id: "lin-05", title: "Dangerous Commands", difficulty: "advanced", time: "3 min", desc: "Commands to avoid.",
        content: `<h1>Dangerous Commands</h1><span class="step-badge">Danger</span><p>Never manually delete files from <code>/etc</code>, <code>/usr</code>, <code>/lib</code>, or <code>/boot</code>.</p><h2>Color Legend</h2><ul><li><strong>Safe</strong> — read-only commands</li><li><strong>Caution</strong> — changes system config</li><li><strong>Dangerous</strong> — can break the system</li></ul>` },
      { id: "lin-06", title: "Hardening Tools", difficulty: "intermediate", time: "4 min", desc: "Fail2Ban and Firejail.",
        content: `<h1>Optional Hardening Tools</h1><span class="step-badge">Safe</span><h2>Fail2Ban</h2><pre><code>sudo apt install fail2ban</code></pre><h2>Firejail</h2><pre><code>sudo apt install firejail
firejail firefox</code></pre>` },
      { id: "lin-07", title: "Security Checklist", difficulty: "intermediate", time: "5 min", desc: "Quick hardening runbook.",
        content: `<h1>Security Checklist</h1><span class="step-badge">Quick Runbook</span><ol><li>Update: <code>sudo apt update && sudo apt full-upgrade</code></li><li>Firewall: <code>sudo ufw enable</code></li><li>Install tools: <code>sudo apt install fail2ban lynis clamav rkhunter</code></li><li>Scan: <code>sudo rkhunter --check</code></li><li>Audit: <code>sudo lynis audit system</code></li><li>AppArmor: <code>sudo aa-status</code></li><li>Auto-updates: <code>sudo dpkg-reconfigure --priority=low unattended-upgrades</code></li></ol>` },
      { id: "lin-08", title: "macOS Security Alternatives", difficulty: "intermediate", time: "6 min", desc: "Ubuntu equivalents to macOS built-in security features.",
        content: `<h1>macOS Security Alternatives</h1><span class="step-badge">High Security</span><p>Ubuntu equivalents to macOS built-in security tools, reaching similar or higher security levels.</p><h2>1. Gatekeeper → AppArmor</h2><p>macOS Gatekeeper restricts app execution. Ubuntu uses AppArmor for mandatory access control.</p><ul><li>Limits what applications can access</li><li>Preinstalled on Ubuntu LTS</li></ul><pre><code>sudo aa-status
sudo systemctl restart apparmor</code></pre><h2>2. XProtect → ClamAV, Chkrootkit, RKHunter</h2><p>macOS XProtect scans for malware signatures. Ubuntu alternatives:</p><table><thead><tr><th>Tool</th><th>Purpose</th><th>Install</th></tr></thead><tbody><tr><td>ClamAV</td><td>Antivirus scanner</td><td><code>sudo apt install clamav clamav-daemon</code></td></tr><tr><td>Chkrootkit</td><td>Rootkit detection</td><td><code>sudo apt install chkrootkit</code></td></tr><tr><td>RKHunter</td><td>Rootkit hunter</td><td><code>sudo apt install rkhunter</code></td></tr></tbody></table><pre><code>sudo freshclam
sudo clamscan -r --bell -i /
sudo chkrootkit
sudo rkhunter --update
sudo rkhunter --check</code></pre><h2>3. MRT → Lynis</h2><p>macOS MRT removes malware. On Ubuntu, use ClamAV for removal and Lynis for auditing.</p><pre><code>sudo apt install lynis
sudo lynis audit system</code></pre><h2>4. SIP → root-only + chattr + AppArmor</h2><p>macOS SIP protects system files. Ubuntu equivalents:</p><ol><li><strong>Root-only access</strong> — protected system directories</li><li><strong>chattr immutable flag</strong> — lock critical files</li></ol><pre><code>sudo chattr +i /path/to/file
sudo chattr -i /path/to/file</code></pre><blockquote>WARNING: Do NOT use chattr on system directories.</blockquote><ol start="3"><li><strong>AppArmor + Kernel hardening</strong> — executable restrictions, limits system modification</li></ol><h2>5. macOS Firewall → UFW</h2><pre><code>sudo ufw enable
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw status</code></pre><h2>6. Sandboxing → Snap + Flatpak</h2><p>Snap and Flatpak apps run fully sandboxed.</p><pre><code>sudo apt install flatpak</code></pre><h2>7. Secure Boot + T2 → UEFI + TPM + fscrypt</h2><ul><li><strong>Secure Boot</strong> — prevents unsigned OS/kernel modules (enable in BIOS)</li><li><strong>TPM 2.0 + fscrypt</strong> — encrypt home directory</li></ul><pre><code>sudo apt install fscrypt</code></pre><h2>8. Auto Updates → unattended-upgrades</h2><pre><code>sudo dpkg-reconfigure --priority=low unattended-upgrades</code></pre><h2>Additional Hardening Tools</h2><table><thead><tr><th>Tool</th><th>Purpose</th><th>Install</th></tr></thead><tbody><tr><td>Fail2Ban</td><td>Brute-force protection</td><td><code>sudo apt install fail2ban</code></td></tr><tr><td>Firejail</td><td>Application sandbox</td><td><code>sudo apt install firejail</code></td></tr></tbody></table><pre><code>firejail firefox</code></pre><blockquote>The full high-security setup: AppArmor + UFW + ClamAV + Lynis + Snap/Flatpak + Fail2Ban + Firejail.</blockquote>` }
    ]
  },
  {
    id: "tripleboot", label: "Triple Boot", icon: `<img src="assets/icons/tripleboot.svg" width="24" height="24" alt="Triple Boot">`,
    desc: "Windows 11 + Kali Linux + Fedora 43 on HP Victus.",
    tags: ["dual boot", "GRUB", "partitioning"],
    articles: [
      { id: "tb-01", title: "Quick Reference", difficulty: "beginner", time: "2 min", desc: "Partition sizes, file systems, and install order.",
        content: `<h1>Quick Reference</h1><div style="display:flex;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap"><img src="assets/icons/windows.svg" width="40" height="40" alt="Windows"><img src="assets/icons/kali.svg" width="40" height="40" alt="Kali"><img src="assets/icons/fedora.svg" width="40" height="40" alt="Fedora"></div><table><thead><tr><th>OS</th><th>Partition</th><th>File System</th><th>Install Order</th><th>Bootloader</th></tr></thead><tbody><tr><td><img src="assets/icons/windows.svg" width="16" height="16" alt="Windows"> Windows 11</td><td>150 GB</td><td>NTFS</td><td>1st</td><td>Windows Boot Manager</td></tr><tr><td><img src="assets/icons/kali.svg" width="16" height="16" alt="Kali"> Kali Linux</td><td>80 GB</td><td>ext4</td><td>2nd</td><td>Kali GRUB (temporary)</td></tr><tr><td><img src="assets/icons/fedora.svg" width="16" height="16" alt="Fedora"> Fedora 43</td><td>220 GB</td><td>ext4</td><td>3rd (LAST)</td><td>Fedora GRUB (FINAL)</td></tr></tbody></table><blockquote><strong>GOLDEN RULE:</strong> Always install Windows FIRST. Windows will destroy GRUB if installed after Linux! Fedora installs LAST — Fedora's GRUB becomes the boot manager for all 3 OSes.</blockquote>` },
      { id: "tb-02", title: "BIOS Settings", difficulty: "beginner", time: "3 min", desc: "Configure BIOS before installing any OS.",
        content: `<h1>BIOS Settings</h1><p>Before installing ANY OS, configure BIOS:</p><table><thead><tr><th>Setting</th><th>Value</th><th>Why</th></tr></thead><tbody><tr><td>Secure Boot</td><td>DISABLE</td><td>Required for Kali Linux</td></tr><tr><td>Boot Mode</td><td>UEFI</td><td>Modern standard, required</td></tr><tr><td>Fast Boot</td><td>DISABLE</td><td>Prevents boot issues</td></tr><tr><td>Boot Order</td><td>USB first</td><td>To boot from USB installer</td></tr></tbody></table><p><strong>How to enter BIOS on HP Victus:</strong> Press F10 or Esc repeatedly right after powering on.</p>` },
      { id: "tb-03", title: "Creating Bootable USBs", difficulty: "beginner", time: "3 min", desc: "Tools and steps for flashing ISOs.",
        content: `<h1>Creating Bootable USB Drives</h1><p>Tools needed:</p><ul><li><strong>Rufus</strong> (Windows) — for flashing any ISO</li><li><strong>Fedora Media Writer</strong> — best for Fedora ISO</li><li><strong>balenaEtcher</strong> — works on any OS</li></ul><table><thead><tr><th>OS</th><th>ISO Size</th><th>USB Size</th><th>Recommended Tool</th></tr></thead><tbody><tr><td>Windows 11</td><td>~5-6 GB</td><td>8 GB+</td><td>Rufus</td></tr><tr><td>Kali Linux</td><td>~4 GB</td><td>8 GB+</td><td>Rufus / Etcher</td></tr><tr><td>Fedora 43</td><td>~2 GB</td><td>4 GB+</td><td>Fedora Media Writer</td></tr></tbody></table>` },
      { id: "tb-04", title: "Install Windows 11", difficulty: "beginner", time: "5 min", desc: "Step 1: Partition and install Windows.",
        content: `<h1><img src="assets/icons/windows.svg" width="32" height="32" alt="Windows"> Installing Windows 11 (Step 1)</h1><h2>During Installation</h2><ol><li>Create partition of <strong>150 GB</strong> for Windows</li><li>Leave remaining ~300 GB as <strong>UNALLOCATED</strong> — do NOT touch it</li><li>Install Windows on the 150 GB partition</li></ol><h2>After Install — Setup Checklist</h2><ul><li>Complete Windows setup (skip Microsoft account, use local account)</li><li>Turn OFF all privacy settings</li><li>Do NOT shrink C: drive again — leave unallocated space as is</li></ul><blockquote><strong>Do NOT install Windows updates before Kali/Fedora</strong> — it may re-enable Secure Boot!</blockquote>` },
      { id: "tb-05", title: "Install Kali Linux", difficulty: "beginner", time: "5 min", desc: "Step 2: Install Kali and fix WiFi.",
        content: `<h1><img src="assets/icons/kali.svg" width="32" height="32" alt="Kali"> Installing Kali Linux (Step 2)</h1><h2>Installation</h2><ol><li>Choose 'Graphical Install'</li><li>Network: Select wlan0 (WiFi) or eth0 (LAN)</li><li>Partitioning: Choose 'Guided - use largest continuous free space'</li><li>This will use the 80 GB unallocated space automatically</li><li>When asked to write changes — select YES</li></ol><h2>Software Selection</h2><ul><li>Xfce (default, lightweight) OR GNOME</li><li>top10 tools</li><li>default recommended tools</li></ul><p>If software installation fails, install desktop later:</p><pre><code>sudo apt update && sudo apt install kali-desktop-gnome -y</code></pre><h2>Fix WiFi (NetworkManager)</h2><pre><code>sudo nano /etc/NetworkManager/NetworkManager.conf
# Set managed=true under [ifupdown]
sudo systemctl restart NetworkManager</code></pre><h2>Fix WiFi Power Management</h2><pre><code>sudo nano /etc/NetworkManager/conf.d/wifi-fix.conf
[device]
wifi.scan-rand-mac-address=no
[connection]
wifi.powersave=2

sudo iwconfig wlan0 power off</code></pre>` },
      { id: "tb-06", title: "Install Fedora 43", difficulty: "beginner", time: "5 min", desc: "Step 3: Install Fedora LAST — it controls GRUB.",
        content: `<h1><img src="assets/icons/fedora.svg" width="32" height="32" alt="Fedora"> Installing Fedora 43 (Step 3 - LAST)</h1><blockquote><strong>Fedora MUST be installed last</strong> — it will control the GRUB boot menu!</blockquote><h2>During Installation</h2><ol><li>Choose 'Custom' or 'Automatic' partitioning</li><li>Select the remaining unallocated space (~220 GB)</li><li>Fedora will automatically use it</li><li>Bootloader location: <code>/dev/nvme0n1</code> (main drive)</li></ol><p>After Fedora installs, GRUB menu will show all 3 OSes automatically!</p>` },
      { id: "tb-07", title: "Fedora Post-Install", difficulty: "intermediate", time: "6 min", desc: "NVIDIA drivers, GPU switching, sound fix, and apps.",
        content: `<h1><img src="assets/icons/fedora.svg" width="32" height="32" alt="Fedora"> Fedora 43 Post-Install Setup</h1><h2>NVIDIA RTX 3050 Driver</h2><pre><code># Enable RPM Fusion
sudo dnf install -y https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

# Install NVIDIA driver
sudo dnf install -y akmod-nvidia xorg-x11-drv-nvidia-cuda
sudo akmods --force
sudo dracut --force</code></pre><blockquote>Wait 5 minutes after install before rebooting!</blockquote><h2>GPU On-Demand Switching</h2><pre><code>sudo dnf install -y switcheroo-control
sudo systemctl enable switcheroo-control
sudo systemctl start switcheroo-control</code></pre><h2>Sound Fix</h2><pre><code>sudo dnf install -y alsa-sof-firmware
sudo reboot</code></pre><h2>Useful Apps</h2><table><thead><tr><th>App</th><th>Install Command</th></tr></thead><tbody><tr><td>VS Code</td><td>sudo dnf install code -y</td></tr><tr><td>Brave Browser</td><td>sudo dnf install brave-browser -y</td></tr><tr><td>GNOME Tweaks</td><td>sudo dnf install gnome-tweaks gnome-extensions-app -y</td></tr><tr><td>GParted</td><td>sudo dnf install gparted -y</td></tr><tr><td>LocalSend</td><td>flatpak install flathub app.localsend.LocalSend -y</td></tr><tr><td>Signal</td><td>flatpak install flathub org.signal.Signal -y</td></tr></tbody></table>` },
      { id: "tb-08", title: "Command Reference", difficulty: "beginner", time: "3 min", desc: "Quick commands for Fedora and Kali.",
        content: `<h1>Quick Command Reference</h1><h2>Fedora Terminal Commands</h2><table><thead><tr><th>App</th><th>Command</th></tr></thead><tbody><tr><td>Terminal</td><td>ptyxis</td></tr><tr><td>File Manager</td><td>nautilus</td></tr><tr><td>Settings</td><td>gnome-control-center</td></tr><tr><td>Tweaks</td><td>gnome-tweaks</td></tr><tr><td>Text Editor</td><td>gedit</td></tr><tr><td>Disk Tool</td><td>gparted</td></tr></tbody></table><h2>Kali Linux Commands</h2><table><thead><tr><th>Task</th><th>Command</th></tr></thead><tbody><tr><td>Update system</td><td>sudo apt update && sudo apt upgrade -y</td></tr><tr><td>Install GNOME</td><td>sudo apt install kali-desktop-gnome -y</td></tr><tr><td>Fix WiFi driver</td><td>sudo modprobe -r mt7921e && sudo modprobe mt7921e</td></tr><tr><td>Check WiFi</td><td>sudo nmcli device wifi list</td></tr><tr><td>Restart NetworkMgr</td><td>sudo systemctl restart NetworkManager</td></tr><tr><td>Check GPU</td><td>nvidia-smi</td></tr></tbody></table>` },
      { id: "tb-09", title: "Common Issues & Fixes", difficulty: "intermediate", time: "5 min", desc: "GRUB, WiFi, sound, and NVIDIA troubleshooting.",
        content: `<h1>Common Issues &amp; Fixes</h1><h2>GRUB not showing after install</h2><pre><code># Boot from Fedora USB → select 'Rescue' → run:
sudo grub2-install /dev/nvme0n1
sudo grub2-mkconfig -o /boot/grub2/grub.cfg</code></pre><h2>Windows not showing in GRUB</h2><pre><code># Boot into Fedora → run:
sudo os-prober
sudo grub2-mkconfig -o /boot/grub2/grub.cfg</code></pre><h2>Kali WiFi not working</h2><pre><code>sudo nmcli device set wlan0 managed yes
sudo systemctl restart NetworkManager</code></pre><h2>No sound on Fedora</h2><pre><code>sudo dnf install alsa-sof-firmware -y
sudo reboot</code></pre><h2>NVIDIA not working on Fedora</h2><pre><code>sudo akmods --force
sudo dracut --force
# Wait 5 min, then reboot</code></pre><h2>Black screen after NVIDIA install</h2><pre><code># Boot with nomodeset kernel param → reinstall:
sudo dnf reinstall akmod-nvidia</code></pre>` }
    ]
  }
];

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
const articlesList = document.getElementById("articlesList");
const articleView = document.getElementById("articleView");
const articleHeader = document.getElementById("articleHeader");
const articleBody = document.getElementById("articleBody");
const articleNav = document.getElementById("articleNav");
const searchTrigger = document.getElementById("searchTrigger");
const searchOverlay = document.getElementById("searchOverlay");
const searchModalInput = document.getElementById("searchModalInput");
const searchModalResults = document.getElementById("searchModalResults");
const progressBar = document.getElementById("progressBar");
const backToTop = document.getElementById("backToTop");
const rightSidebar = document.getElementById("rightSidebar");
const toc = document.getElementById("toc");
const logoLink = document.getElementById("logoLink");

let currentTopicId = null;
let currentArticleId = null;
let searchFocusIdx = -1;

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
  document.getElementById("popularArticles").style.display = "";
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

function buildPopularArticles() {
  const popular = [
    { topic: docs[0], article: docs[0].articles[0] },
    { topic: docs[2], article: docs[2].articles[0] },
    { topic: docs[3], article: docs[3].articles[0] },
    { topic: docs[4], article: docs[4].articles[0] },
    { topic: docs[5], article: docs[5].articles[0] },
    { topic: docs[6], article: docs[6].articles[0] },
    { topic: docs[1], article: docs[1].articles[0] },
  ];

  popular.forEach(({ topic, article }) => {
    const item = document.createElement("div");
    item.className = "article-item";
    item.innerHTML = `
      <div class="article-item-info">
        <div class="article-item-title">${article.title}</div>
        <div class="article-item-desc">${article.desc}</div>
      </div>
      <div class="article-item-meta">
        <span class="article-badge badge-${article.difficulty}">${article.difficulty}</span>
        <span class="article-reading-time">${article.time}</span>
        <svg class="article-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
    `;
    item.addEventListener("click", () => openArticle(topic, article));
    articlesList.appendChild(item);
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
  document.getElementById("popularArticles").style.display = "none";
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

  const idx = flatAll.findIndex((a) => a.article.id === article.id);

  let navHTML = "";
  if (idx > 0) {
    const prev = flatAll[idx - 1];
    navHTML += `<button class="article-nav-btn prev" data-topic="${prev.topic.id}" data-article="${prev.article.id}"><div class="article-nav-label">Previous</div><div class="article-nav-title">${prev.article.title}</div></button>`;
  } else {
    navHTML += "<div></div>";
  }
  if (idx < flatAll.length - 1) {
    const next = flatAll[idx + 1];
    navHTML += `<button class="article-nav-btn next" data-topic="${next.topic.id}" data-article="${next.article.id}"><div class="article-nav-label">Next</div><div class="article-nav-title">${next.article.title}</div></button>`;
  }
  articleNav.innerHTML = navHTML;

  articleNav.querySelectorAll(".article-nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const t = docs.find((d) => d.id === btn.dataset.topic);
      const a = t.articles.find((ar) => ar.id === btn.dataset.article);
      openArticle(t, a);
    });
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

function runSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) {
    searchModalResults.innerHTML = '<div class="search-modal-empty">Start typing to search across all documentation</div>';
    searchFocusIdx = -1;
    return;
  }

  const results = flatAll.filter((item) => {
    return (
      item.article.title.toLowerCase().includes(q) ||
      item.article.desc.toLowerCase().includes(q) ||
      item.topic.label.toLowerCase().includes(q) ||
      (item.topic.tags && item.topic.tags.some((t) => t.includes(q)))
    );
  });

  if (results.length === 0) {
    searchModalResults.innerHTML = '<div class="search-modal-empty">No results found</div>';
    searchFocusIdx = -1;
    return;
  }

  searchModalResults.innerHTML = "";
  searchFocusIdx = -1;

  results.forEach((item) => {
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

buildSidebar();
buildCards();
buildPopularArticles();