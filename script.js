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
      {
        id: "git-01", title: "Install Git", difficulty: "beginner", time: "3 min",
        desc: "Set up Git on your machine.",
        content: `
          <h1>Install Git</h1><span class="step-badge">Step 1</span>
          <p>Git is a free, open-source distributed version control system. Before anything else you need it installed on your machine.</p>
          <h2>Windows</h2><p>Download the installer from <a href="https://git-scm.com" target="_blank">git-scm.com</a> and run it. Accept the defaults.</p>
          <h2>macOS</h2><pre><code>brew install git</code></pre>
          <h2>Linux (Debian / Ubuntu)</h2><pre><code>sudo apt update
sudo apt install git</code></pre>
          <h2>Verify</h2><pre><code>git --version</code></pre>
          <blockquote>You should see something like <code>git version 2.44.0</code>.</blockquote>`
      },
      {
        id: "git-02", title: "Configure Identity", difficulty: "beginner", time: "2 min",
        desc: "Set your name and email for commits.",
        content: `
          <h1>Configure Identity</h1><span class="step-badge">Step 2</span>
          <p>Git attaches your name and email to every commit. Set them once globally:</p>
          <pre><code>git config --global user.name "Your Name"
git config --global user.email "you@example.com"</code></pre>
          <h2>Check current config</h2><pre><code>git config --list</code></pre>`
      },
      {
        id: "git-03", title: "Create a Repo", difficulty: "beginner", time: "3 min",
        desc: "Initialize or clone a repository.",
        content: `
          <h1>Create a Repository</h1><span class="step-badge">Step 3</span>
          <p>A repository (repo) is a project folder tracked by Git.</p>
          <h2>New repo</h2><pre><code>mkdir my-project
cd my-project
git init</code></pre>
          <p>This creates a hidden <code>.git</code> directory that stores all version history.</p>
          <h2>Clone an existing repo</h2><pre><code>git clone https://github.com/user/repo.git</code></pre>`
      },
      {
        id: "git-04", title: "Stage & Commit", difficulty: "beginner", time: "4 min",
        desc: "Save snapshots of your project.",
        content: `
          <h1>Stage & Commit</h1><span class="step-badge">Step 4</span>
          <p>Commits are snapshots of your project. You stage changes first, then commit them.</p>
          <pre><code>git add file.txt        # stage one file
git add .               # stage everything
git commit -m "message" # commit with a message</code></pre>
          <h2>Workflow</h2><ol><li>Edit files in the working directory.</li><li><code>git add</code> to move changes to the staging area.</li><li><code>git commit</code> to save the snapshot.</li></ol>`
      },
      {
        id: "git-05", title: "Branches", difficulty: "intermediate", time: "5 min",
        desc: "Work on features in isolation.",
        content: `
          <h1>Branches</h1><span class="step-badge">Step 5</span>
          <p>Branches let you develop features in isolation.</p>
          <pre><code>git branch feature       # create branch
git checkout feature     # switch to it
# or combined:
git checkout -b feature  # create + switch</code></pre>
          <h2>Merging</h2><pre><code>git checkout main
git merge feature</code></pre>
          <h2>Delete branch</h2><pre><code>git branch -d feature</code></pre>`
      },
      {
        id: "git-06", title: "Remotes & Push", difficulty: "intermediate", time: "4 min",
        desc: "Upload and sync with remote repos.",
        content: `
          <h1>Remotes & Push</h1><span class="step-badge">Step 6</span>
          <p>A remote is a version of your repo hosted elsewhere (e.g., GitHub).</p>
          <pre><code>git remote add origin https://github.com/user/repo.git
git push -u origin main</code></pre>
          <p>The <code>-u</code> flag sets the upstream so future pushes are just <code>git push</code>.</p>
          <h2>Pull latest changes</h2><pre><code>git pull origin main</code></pre>`
      },
      {
        id: "git-07", title: "Log & Diff", difficulty: "intermediate", time: "3 min",
        desc: "View history and compare changes.",
        content: `
          <h1>Log & Diff</h1><span class="step-badge">Step 7</span>
          <h2>View history</h2><pre><code>git log --oneline --graph --all</code></pre>
          <h2>See what changed</h2><pre><code>git diff                 # unstaged changes
git diff --staged        # staged changes</code></pre>
          <h2>Show a specific commit</h2><pre><code>git show abc1234</code></pre>`
      },
      {
        id: "git-08", title: "GPG Signed Commits", difficulty: "advanced", time: "8 min",
        desc: "Add verified badges to your commits.",
        content: `
          <h1>GPG Signed Commits</h1><span class="step-badge">Step 8</span>
          <p>GPG signing adds a verified badge to your commits on GitHub.</p>
          <h2>1. Install GPG & Git</h2><pre><code>sudo apt update
sudo apt install gnupg git -y</code></pre>
          <h2>2. Generate a GPG Key</h2><pre><code>gpg --full-generate-key</code></pre>
          <h2>3. List Your Keys</h2><pre><code>gpg --list-secret-keys --keyid-format LONG</code></pre>
          <h2>4. Export Public Key</h2><pre><code>gpg --armor --export YOUR_KEY_ID</code></pre>
          <h2>5. Configure Git Identity</h2><pre><code>git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"</code></pre>
          <h2>6. Set Signing Key</h2><pre><code>git config --global user.signingkey YOUR_KEY_ID</code></pre>
          <h2>7. Enable Auto Signing</h2><pre><code>git config --global commit.gpgsign true
git config --global tag.gpgsign true</code></pre>
          <h2>8. Set GPG Program Path</h2><pre><code>which gpg
git config --global gpg.program "/usr/bin/gpg"</code></pre>
          <h2>9. Verify Setup</h2><pre><code>git config --global --list</code></pre>
          <h2>10. Test Signed Commit</h2><pre><code>git commit -S -m "test commit"</code></pre>
          <blockquote>Once this is set up, every commit you make will be automatically signed.</blockquote>`
      }
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
      { id: "js-01", title: "Variables & Types", difficulty: "beginner", time: "4 min", desc: "Declare variables and understand types.",
        content: `<h1>Variables & Types</h1><span class="step-badge">Step 1</span><pre><code>let name = "Roshan";
const age = 25;
var old = "avoid this";</code></pre><h2>Types</h2><ul><li><code>string</code> — "hello"</li><li><code>number</code> — 42, 3.14</li><li><code>boolean</code> — true, false</li><li><code>null</code> — intentional empty</li><li><code>undefined</code> — no value</li><li><code>object</code> — { key: value }</li><li><code>array</code> — [1, 2, 3]</li></ul>` },
      { id: "js-02", title: "Functions", difficulty: "beginner", time: "4 min", desc: "Reuse code with functions.",
        content: `<h1>Functions</h1><span class="step-badge">Step 2</span><pre><code>function greet(name) {
  return "Hello " + name;
}

const greet = (name) => "Hello " + name;</code></pre>` },
      { id: "js-03", title: "Arrays", difficulty: "beginner", time: "5 min", desc: "Store and manipulate lists.",
        content: `<h1>Arrays</h1><span class="step-badge">Step 3</span><pre><code>const fruits = ["apple", "banana", "cherry"];
fruits.push("date");
fruits.pop();
fruits.includes("apple");
fruits.forEach((f) => console.log(f));
const upper = fruits.map((f) => f.toUpperCase());</code></pre>` },
      { id: "js-04", title: "Objects", difficulty: "beginner", time: "4 min", desc: "Key-value data structures.",
        content: `<h1>Objects</h1><span class="step-badge">Step 4</span><pre><code>const user = {
  name: "Roshan",
  age: 25,
  greet() { return "Hi, I'm " + this.name; }
};
console.log(user.name);
console.log(user.greet());</code></pre>` },
      { id: "js-05", title: "DOM Manipulation", difficulty: "intermediate", time: "5 min", desc: "Change the page with JS.",
        content: `<h1>DOM Manipulation</h1><span class="step-badge">Step 5</span><pre><code>document.getElementById("app");
document.querySelector(".card");
el.textContent = "New text";
el.style.color = "blue";
el.addEventListener("click", () => {
  alert("Clicked!");
});</code></pre>` },
      { id: "js-06", title: "Async / Await", difficulty: "intermediate", time: "5 min", desc: "Handle async operations.",
        content: `<h1>Async / Await</h1><span class="step-badge">Step 6</span><pre><code>async function getData() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  console.log(data);
}
getData();</code></pre><blockquote><code>await</code> pauses until the promise resolves.</blockquote>` },
      { id: "js-07", title: "ES6 Modules", difficulty: "intermediate", time: "4 min", desc: "Import and export code.",
        content: `<h1>ES6 Modules</h1><span class="step-badge">Step 7</span><pre><code>// utils.js
export const add = (a, b) => a + b;

// main.js
import { add } from "./utils.js";
console.log(add(2, 3));</code></pre>` }
    ]
  },
  {
    id: "c", label: "C", icon: `<img src="assets/icons/c.svg" width="22" alt="C">`,
    desc: "Systems programming and memory management.",
    tags: ["systems", "pointers", "memory"],
    articles: [
      { id: "c-01", title: "Hello World", difficulty: "beginner", time: "3 min", desc: "Your first C program.",
        content: `<h1>Hello World</h1><span class="step-badge">Step 1</span><pre><code>#include &lt;stdio.h&gt;

int main() {
    printf("Hello, World!\\n");
    return 0;
}</code></pre><p>Compile and run:</p><pre><code>gcc hello.c -o hello
./hello</code></pre>` },
      { id: "c-02", title: "Variables & Data Types", difficulty: "beginner", time: "4 min", desc: "Declare variables in C.",
        content: `<h1>Variables & Data Types</h1><span class="step-badge">Step 2</span><pre><code>int age = 25;
float pi = 3.14;
char grade = 'A';
double big = 123456.789;</code></pre><h2>Format specifiers</h2><pre><code>printf("%d\\n", age);
printf("%f\\n", pi);
printf("%c\\n", grade);</code></pre>` },
      { id: "c-03", title: "Conditionals", difficulty: "beginner", time: "4 min", desc: "Make decisions in code.",
        content: `<h1>Conditionals</h1><span class="step-badge">Step 3</span><pre><code>if (age >= 18) {
    printf("Adult\\n");
} else {
    printf("Minor\\n");
}

switch (grade) {
    case 'A': printf("Excellent\\n"); break;
    case 'B': printf("Good\\n"); break;
    default: printf("Other\\n");
}</code></pre>` },
      { id: "c-04", title: "Loops", difficulty: "beginner", time: "4 min", desc: "Repeat code with loops.",
        content: `<h1>Loops</h1><span class="step-badge">Step 4</span><pre><code>for (int i = 0; i < 5; i++) {
    printf("%d\\n", i);
}

int i = 0;
while (i < 5) {
    printf("%d\\n", i);
    i++;
}

int i = 0;
do {
    printf("%d\\n", i);
    i++;
} while (i < 5);</code></pre>` },
      { id: "c-05", title: "Arrays", difficulty: "beginner", time: "4 min", desc: "Store multiple values.",
        content: `<h1>Arrays</h1><span class="step-badge">Step 5</span><pre><code>int nums[5] = {10, 20, 30, 40, 50};
printf("%d\\n", nums[0]);
for (int i = 0; i < 5; i++) {
    printf("%d\\n", nums[i]);
}</code></pre>` },
      { id: "c-06", title: "Functions", difficulty: "beginner", time: "4 min", desc: "Reusable code blocks.",
        content: `<h1>Functions</h1><span class="step-badge">Step 6</span><pre><code>int add(int a, int b) {
    return a + b;
}

int main() {
    printf("%d\\n", add(3, 4));
    return 0;
}</code></pre>` },
      { id: "c-07", title: "Pointers", difficulty: "intermediate", time: "6 min", desc: "Work with memory addresses.",
        content: `<h1>Pointers</h1><span class="step-badge">Step 7</span><pre><code>int x = 10;
int *p = &x;
printf("%d\\n", *p);

void double_it(int *n) {
    *n = *n * 2;
}

int main() {
    int val = 5;
    double_it(&val);
    printf("%d\\n", val);  // 10
}</code></pre>` },
      { id: "c-08", title: "Strings", difficulty: "beginner", time: "4 min", desc: "Work with text.",
        content: `<h1>Strings</h1><span class="step-badge">Step 8</span><pre><code>char name[] = "Roshan";
printf("%s\\n", name);
printf("%lu\\n", strlen(name));</code></pre><h2>String functions (include &lt;string.h&gt;)</h2><pre><code>strlen(s)
strcpy(dest, src)
strcat(dest, src)
strcmp(a, b)</code></pre>` }
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
        content: `<h1>Security Checklist</h1><span class="step-badge">Quick Runbook</span><ol><li>Update: <code>sudo apt update && sudo apt full-upgrade</code></li><li>Firewall: <code>sudo ufw enable</code></li><li>Install tools: <code>sudo apt install fail2ban lynis clamav rkhunter</code></li><li>Scan: <code>sudo rkhunter --check</code></li><li>Audit: <code>sudo lynis audit system</code></li><li>AppArmor: <code>sudo aa-status</code></li><li>Auto-updates: <code>sudo dpkg-reconfigure --priority=low unattended-upgrades</code></li></ol>` }
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
  // Documentation section
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

    // Children
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

      // Close all
      document.querySelectorAll(".sidebar-children.open").forEach((c) => c.classList.remove("open"));
      document.querySelectorAll(".sidebar-arrow.open").forEach((a) => a.classList.remove("open"));

      if (!isOpen) {
        children.classList.add("open");
        arrow.classList.add("open");
        // Open first article
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

  mainEl.scrollTo(0, 0);
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
    docs[0].articles[0], // Git Install
    docs[2].articles[0], // HTML Basic
    docs[3].articles[0], // CSS Selectors
    docs[4].articles[0], // JS Variables
    docs[5].articles[0], // C Hello World
    docs[1].articles[0], // GitHub CLI
  ];

  popular.forEach((article) => {
    const topic = docs.find((t) => t.articles.some((a) => a.id === article.id));
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

  articleHeader.innerHTML = `
    <button class="article-back" id="articleBack">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      Back to ${topic.label}
    </button>
    ${article.content}
  `;

  articleBody.innerHTML = article.content.includes("<h2") ? "" : "";
  // Content is already in header, restructure
  const fullContent = article.content;
  articleHeader.innerHTML = `
    <button class="article-back" id="articleBack">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      Back to ${topic.label}
    </button>
  `;
  articleBody.innerHTML = fullContent;

  // Copy buttons
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

  // Prev / Next
  const allArticles = [];
  docs.forEach((t) => t.articles.forEach((a) => allArticles.push({ topic: t, article: a })));
  const idx = allArticles.findIndex((a) => a.article.id === article.id);

  let navHTML = "";
  if (idx > 0) {
    const prev = allArticles[idx - 1];
    navHTML += `<button class="article-nav-btn prev" data-topic="${prev.topic.id}" data-article="${prev.article.id}"><div class="article-nav-label">Previous</div><div class="article-nav-title">${prev.article.title}</div></button>`;
  } else {
    navHTML += "<div></div>";
  }
  if (idx < allArticles.length - 1) {
    const next = allArticles[idx + 1];
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

  // Back button
  document.getElementById("articleBack")?.addEventListener("click", showHome);

  // Update sidebar active
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

  // TOC
  buildTOC();

  window.scrollTo(0, 0);
  mainEl.scrollTo(0, 0);
}

function buildTOC() {
  toc.innerHTML = "";
  const headings = articleBody.querySelectorAll("h2, h3");
  if (headings.length === 0) {
  rightSidebar.classList.remove("visible");
  mainEl.classList.remove("has-toc");
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
