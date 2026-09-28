// ═══════════════════════════════════════════════════════════
//  ROSHAN DOCS — Content Data
// ═══════════════════════════════════════════════════════════

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
        content: `<h1>Forms</h1><span class="step-badge">Step 3</span><p>Forms collect user input and send it to a server.</p><h2>Basic Form</h2><pre><code>&lt;form action="/submit" method="POST"&gt;
  &lt;label for="name"&gt;Name&lt;/label&gt;
  &lt;input type="text" id="name" name="name"&gt;
  &lt;button type="submit"&gt;Send&lt;/button&gt;
&lt;/form&gt;</code></pre><h2>Input Types</h2><table><thead><tr><th>Type</th><th>Purpose</th></tr></thead><tbody><tr><td><code>text</code></td><td>Single-line text</td></tr><tr><td><code>password</code></td><td>Hidden text</td></tr><tr><td><code>email</code></td><td>Email validation</td></tr><tr><td><code>number</code></td><td>Numeric input</td></tr><tr><td><code>checkbox</code></td><td>Multiple choices</td></tr><tr><td><code>radio</code></td><td>Single choice</td></tr><tr><td><code>file</code></td><td>Upload file</td></tr><tr><td><code>submit</code></td><td>Submit button</td></tr></tbody></table><h2>Select & Textarea</h2><pre><code>&lt;select name="color" id="color"&gt;
  &lt;option value="red"&gt;Red&lt;/option&gt;
  &lt;option value="blue"&gt;Blue&lt;/option&gt;
&lt;/select&gt;

&lt;textarea name="msg" rows="4" cols="50"&gt;
  Default text
&lt;/textarea&gt;</code></pre><h2>Form Attributes</h2><pre><code>&lt;form action="/submit" method="POST" enctype="multipart/form-data"&gt;
  &lt;input type="text" name="user" required minlength="3" maxlength="20"&gt;
  &lt;input type="email" name="email" required&gt;
  &lt;input type="text" placeholder="Search..."&gt;
  &lt;input type="text" readonly&gt;
  &lt;input type="text" disabled&gt;
&lt;/form&gt;</code></pre>` },
      { id: "html-04", title: "Semantic Elements", difficulty: "beginner", time: "4 min", desc: "Meaningful HTML tags.",
        content: `<h1>Semantic Elements</h1><span class="step-badge">Step 4</span><p>Semantic tags describe their meaning, improving accessibility and SEO.</p><h2>Why Semantic HTML?</h2><ul><li>Screen readers understand page structure</li><li>Search engines rank pages better</li><li>Code is easier to read and maintain</li></ul><h2>Layout Elements</h2><pre><code>&lt;header&gt;  — Page or section header
&lt;nav&gt;     — Navigation links
&lt;main&gt;    — Main content (one per page)
&lt;section&gt; — Thematic grouping
&lt;article&gt; — Self-contained content
&lt;aside&gt;   — Sidebar / tangential content
&lt;footer&gt;  — Page or section footer
&lt;figure&gt;  — Image with optional caption
&lt;figcaption&gt; — Caption for figure</code></pre><h2>Example</h2><pre><code>&lt;body&gt;
  &lt;header&gt;
    &lt;nav&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/nav&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;article&gt;
      &lt;h1&gt;Blog Post&lt;/h1&gt;
      &lt;p&gt;Content here...&lt;/p&gt;
    &lt;/article&gt;
    &lt;aside&gt;Related links&lt;/aside&gt;
  &lt;/main&gt;
  &lt;footer&gt;© 2025&lt;/footer&gt;
&lt;/body&gt;</code></pre><blockquote>Never use <code>&lt;div&gt;</code> when a semantic tag fits. Use <code>&lt;button&gt;</code> not <code>&lt;div onclick&gt;</code>.</blockquote>` },
      { id: "html-05", title: "Links & Images", difficulty: "beginner", time: "4 min", desc: "Anchor tags, paths, and image formats.",
        content: `<h1>Links &amp; Images</h1><span class="step-badge">Step 5</span><h2>Anchor Tag</h2><pre><code>&lt;a href="https://example.com"&gt;External link&lt;/a&gt;
&lt;a href="/about"&gt;Internal link&lt;/a&gt;
&lt;a href="#section2"&gt;Jump to section&lt;/a&gt;
&lt;a href="file.pdf" download&gt;Download file&lt;/a&gt;
&lt;a href="mailto:user@example.com"&gt;Email&lt;/a&gt;

&lt;a href="https://example.com" target="_blank" rel="noopener"&gt;
  Opens in new tab
&lt;/a&gt;</code></pre><h2>Relative vs Absolute Paths</h2><pre><code>/* Absolute — full URL */
&lt;a href="https://example.com/about"&gt;

/* Relative — from current file */
&lt;a href="about.html"&gt;
&lt;a href="../images/photo.jpg"&gt;
&lt;a href="/css/style.css"&gt;</code></pre><h2>Images</h2><pre><code>&lt;img src="photo.jpg" alt="Description" width="600" height="400"&gt;

&lt;picture&gt;
  &lt;source srcset="photo.webp" type="image/webp"&gt;
  &lt;source srcset="photo.jpg" type="image/jpeg"&gt;
  &lt;img src="photo.jpg" alt="Description"&gt;
&lt;/picture&gt;</code></pre><h2>Image Formats</h2><table><thead><tr><th>Format</th><th>Best For</th><th>Transparency</th></tr></thead><tbody><tr><td>JPEG</td><td>Photos</td><td>No</td></tr><tr><td>PNG</td><td>Graphics, screenshots</td><td>Yes</td></tr><tr><td>WebP</td><td>Web (best compression)</td><td>Yes</td></tr><tr><td>SVG</td><td>Icons, logos</td><td>Yes</td></tr></tbody></table><blockquote>Always include <code>alt</code> text. Use <code>loading="lazy"</code> for below-fold images.</blockquote>` },
      { id: "html-06", title: "Lists", difficulty: "beginner", time: "3 min", desc: "Ordered, unordered, and description lists.",
        content: `<h1>Lists</h1><span class="step-badge">Step 6</span><h2>Unordered List</h2><pre><code>&lt;ul&gt;
  &lt;li&gt;HTML&lt;/li&gt;
  &lt;li&gt;CSS&lt;/li&gt;
  &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;</code></pre><h2>Ordered List</h2><pre><code>&lt;ol&gt;
  &lt;li&gt;Install Node.js&lt;/li&gt;
  &lt;li&gt;Run npm init&lt;/li&gt;
  &lt;li&gt;Start coding&lt;/li&gt;
&lt;/ol&gt;

&lt;ol start="5"&gt;
  &lt;li&gt;Starts at 5&lt;/li&gt;
&lt;/ol&gt;

&lt;ol reversed&gt;
  &lt;li&gt;Counts down&lt;/li&gt;
&lt;/ol&gt;</code></pre><h2>Description List</h2><pre><code>&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;HyperText Markup Language&lt;/dd&gt;
  &lt;dt&gt;CSS&lt;/dt&gt;
  &lt;dd&gt;Cascading Style Sheets&lt;/dd&gt;
&lt;/dl&gt;</code></pre><h2>Nested Lists</h2><pre><code>&lt;ul&gt;
  &lt;li&gt;Frontend
    &lt;ul&gt;
      &lt;li&gt;HTML&lt;/li&gt;
      &lt;li&gt;CSS&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Backend&lt;/li&gt;
&lt;/ul&gt;</code></pre>` },
      { id: "html-07", title: "Tables", difficulty: "beginner", time: "4 min", desc: "Rows, columns, and data tables.",
        content: `<h1>Tables</h1><span class="step-badge">Step 7</span><h2>Basic Table</h2><pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Name&lt;/th&gt;
      &lt;th&gt;Role&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Alice&lt;/td&gt;
      &lt;td&gt;Developer&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Bob&lt;/td&gt;
      &lt;td&gt;Designer&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre><h2>Colspan &amp; Rowspan</h2><pre><code>&lt;td colspan="2"&gt;Spans 2 columns&lt;/td&gt;
&lt;td rowspan="3"&gt;Spans 3 rows&lt;/td&gt;</code></pre><h2>Table Elements</h2><table><thead><tr><th>Tag</th><th>Purpose</th></tr></thead><tbody><tr><td><code>&lt;table&gt;</code></td><td>Table container</td></tr><tr><td><code>&lt;thead&gt;</code></td><td>Header group</td></tr><tr><td><code>&lt;tbody&gt;</code></td><td>Body group</td></tr><tr><td><code>&lt;tfoot&gt;</code></td><td>Footer group</td></tr><tr><td><code>&lt;tr&gt;</code></td><td>Table row</td></tr><tr><td><code>&lt;th&gt;</code></td><td>Header cell</td></tr><tr><td><code>&lt;td&gt;</code></td><td>Data cell</td></tr></tbody></table><blockquote>Use tables for data only, not for page layout. Use Flexbox or Grid for layout.</blockquote>` },
      { id: "html-08", title: "Media & Embedding", difficulty: "beginner", time: "4 min", desc: "Audio, video, iframes, and embeds.",
        content: `<h1>Media &amp; Embedding</h1><span class="step-badge">Step 8</span><h2>Video</h2><pre><code>&lt;video src="video.mp4" controls width="640" autoplay muted loop&gt;
  Your browser does not support video.
&lt;/video&gt;</code></pre><h2>Audio</h2><pre><code>&lt;audio src="audio.mp3" controls autoplay&gt;
  Your browser does not support audio.
&lt;/audio&gt;</code></pre><h2>Iframe</h2><pre><code>&lt;iframe
  src="https://example.com"
  width="600"
  height="400"
  frameborder="0"
  allowfullscreen
&gt;&lt;/iframe&gt;</code></pre><h2>Embed &amp; Object</h2><pre><code>&lt;embed src="file.pdf" type="application/pdf" width="100%" height="500px"&gt;

&lt;object data="file.pdf" type="application/pdf" width="100%" height="500px"&gt;
  Fallback content
&lt;/object&gt;</code></pre><h2>Responsive Video</h2><pre><code>&lt;div style="position:relative; padding-bottom:56.25%; height:0"&gt;
  &lt;iframe src="..."
    style="position:absolute; top:0; left:0; width:100%; height:100%"
    allowfullscreen&gt;
  &lt;/iframe&gt;
&lt;/div&gt;</code></pre><blockquote>Use <code>loading="lazy"</code> on iframes to improve page load performance.</blockquote>` },
      { id: "html-09", title: "Meta Tags & SEO", difficulty: "intermediate", time: "4 min", desc: "Viewport, descriptions, Open Graph.",
        content: `<h1>Meta Tags &amp; SEO</h1><span class="step-badge">Step 9</span><p>Meta tags live in <code>&lt;head&gt;</code> and control how browsers and search engines treat your page.</p><h2>Essential Meta Tags</h2><pre><code>&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;meta name="description" content="Page description for search engines"&gt;
&lt;meta name="robots" content="index, follow"&gt;</code></pre><h2>Open Graph (Social Media)</h2><pre><code>&lt;meta property="og:title" content="Page Title"&gt;
&lt;meta property="og:description" content="Page description"&gt;
&lt;meta property="og:image" content="https://example.com/image.jpg"&gt;
&lt;meta property="og:url" content="https://example.com/page"&gt;
&lt;meta property="og:type" content="website"&gt;</code></pre><h2>Twitter Cards</h2><pre><code>&lt;meta name="twitter:card" content="summary_large_image"&gt;
&lt;meta name="twitter:title" content="Page Title"&gt;
&lt;meta name="twitter:description" content="Description"&gt;
&lt;meta name="twitter:image" content="https://example.com/image.jpg"&gt;</code></pre><h2>Favicon</h2><pre><code>&lt;link rel="icon" href="/favicon.ico"&gt;
&lt;link rel="icon" type="image/svg+xml" href="/icon.svg"&gt;
&lt;link rel="apple-touch-icon" href="/icon-192.png"&gt;</code></pre><blockquote>The <code>viewport</code> meta tag is mandatory for responsive design. Without it, mobile browsers render at 960px width.</blockquote>` },
      { id: "html-10", title: "Accessibility", difficulty: "intermediate", time: "5 min", desc: "ARIA, roles, and screen reader support.",
        content: `<h1>Accessibility</h1><span class="step-badge">Step 10</span><p>Accessibility (a11y) ensures your site works for everyone, including users with disabilities.</p><h2>Why It Matters</h2><ul><li>15% of the world population has a disability</li><li>Screen readers need semantic HTML to navigate</li><li>Required by law in many countries (ADA, EAA)</li></ul><h2>ARIA Roles</h2><pre><code>&lt;div role="button" tabindex="0" onclick="handle()"&gt;
  Click me
&lt;/div&gt;

&lt;div role="alert"&gt;
  Error message shown here
&lt;/div&gt;

&lt;nav aria-label="Main navigation"&gt;
  &lt;a href="/"&gt;Home&lt;/a&gt;
&lt;/nav&gt;</code></pre><h2>ARIA Attributes</h2><pre><code>&lt;input aria-label="Search"&gt;
&lt;div aria-hidden="true"&gt;Decorative content&lt;/div&gt;
&lt;button aria-expanded="false" aria-controls="menu"&gt;Menu&lt;/button&gt;
&lt;div aria-live="polite"&gt;Updates announced&lt;/div&gt;</code></pre><h2>Accessibility Checklist</h2><table><thead><tr><th>Rule</th><th>Why</th></tr></thead><tbody><tr><td>Use semantic HTML</td><td>Screen readers understand structure</td></tr><tr><td>Alt text on images</td><td>Describes image to blind users</td></tr><tr><td>Label form inputs</td><td>Screen readers announce field purpose</td></tr><tr><td>Keyboard navigation</td><td>Not everyone uses a mouse</td></tr><tr><td>Color contrast (4.5:1)</td><td>Low vision readability</td></tr><tr><td>Focus indicators</td><td>Shows where keyboard focus is</td></tr></tbody></table><blockquote>Use <code>tabindex="0"</code> to make non-interactive elements focusable. Use <code>tabindex="-1"</code> to remove from tab order.</blockquote>` },
      { id: "html-11", title: "HTML5 APIs", difficulty: "intermediate", time: "4 min", desc: "Canvas, storage, geolocation overview.",
        content: `<h1>HTML5 APIs</h1><span class="step-badge">Step 11</span><p>HTML5 introduced powerful APIs that extend beyond markup.</p><h2>Canvas</h2><pre><code>&lt;canvas id="myCanvas" width="400" height="300"&gt;&lt;/canvas&gt;

&lt;script&gt;
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(10, 10, 150, 100);
  ctx.font = "24px Arial";
  ctx.fillText("Hello Canvas", 10, 80);
&lt;/script&gt;</code></pre><h2>Web Storage</h2><pre><code>// localStorage — persists until cleared
localStorage.setItem("theme", "dark");
localStorage.getItem("theme");

// sessionStorage — clears when tab closes
sessionStorage.setItem("user", "Alice");

// Remove
localStorage.removeItem("theme");
localStorage.clear();</code></pre><h2>Geolocation</h2><pre><code>navigator.geolocation.getCurrentPosition(
  (pos) => {
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
  },
  (err) => console.error(err),
  { enableHighAccuracy: true }
);</code></pre><h2>Drag and Drop</h2><pre><code>&lt;div draggable="true" id="drag"&gt;Drag me&lt;/div&gt;
&lt;div id="drop"&gt;Drop here&lt;/div&gt;

&lt;script&gt;
  drag.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", "hello");
  });
  drop.addEventListener("dragover", (e) => e.preventDefault());
  drop.addEventListener("drop", (e) => {
    e.preventDefault();
    drop.textContent = e.dataTransfer.getData("text/plain");
  });
&lt;/script&gt;</code></pre><blockquote>These APIs are browser-only. For server-side, use Node.js equivalents.</blockquote>` }
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
}</code></pre><h2>Box Sizing</h2><pre><code>/* content-box (default) — width = content only */
width: 200px; /* total = 200 + padding + border */

/* border-box — width = content + padding + border */
box-sizing: border-box;
width: 200px; /* total = 200px exactly */</code></pre><blockquote>Use <code>box-sizing: border-box</code> on everything. It makes layouts predictable.</blockquote>` },
      { id: "css-03", title: "Typography & Colors", difficulty: "beginner", time: "4 min", desc: "Fonts, sizes, and color formats.",
        content: `<h1>Typography &amp; Colors</h1><span class="step-badge">Step 3</span><h2>Font Properties</h2><pre><code>body {
  font-family: "Inter", system-ui, sans-serif;
  font-size: 1rem;       /* 16px default */
  font-weight: 400;      /* normal */
  font-weight: 700;      /* bold */
  line-height: 1.6;
  letter-spacing: -0.02em;
}</code></pre><h2>Font Stacks</h2><pre><code>/* Sans-serif */
font-family: "Inter", "Helvetica Neue", Arial, sans-serif;

/* Monospace */
font-family: "JetBrains Mono", "Fira Code", monospace;

/* Serif */
font-family: "Georgia", "Times New Roman", serif;</code></pre><h2>Text Properties</h2><pre><code>text-align: center;          /* left | center | right | justify */
text-decoration: underline;   /* none | underline | line-through */
text-transform: uppercase;    /* none | uppercase | lowercase | capitalize */
text-indent: 2em;             /* indent first line */
white-space: nowrap;          /* prevent wrapping */
overflow-wrap: break-word;    /* wrap long words */</code></pre><h2>Color Formats</h2><pre><code>color: #fa6e09;              /* hex */
color: rgb(250, 110, 9);     /* rgb */
color: rgba(250, 110, 9, 0.5);  /* rgb + alpha */
color: hsl(26, 96%, 51%);    /* hue, saturation, lightness */
color: hsl(26, 96%, 51%, 0.5);  /* hsl + alpha */
color: currentColor;          /* inherits from parent */</code></pre><h2>Font Shorthand</h2><pre><code>/* font: weight size/line-height family */
font: 700 1.2rem/1.4 "Inter", sans-serif;</code></pre>` },
      { id: "css-04", title: "Flexbox", difficulty: "beginner", time: "5 min", desc: "One-dimensional layout system.",
        content: `<h1>Flexbox</h1><span class="step-badge">Step 4</span><p>Flexbox handles layout in one direction (row or column).</p><h2>Container</h2><pre><code>.container {
  display: flex;

  /* Main axis (row) */
  justify-content: flex-start;    /* flex-start | center | flex-end | space-between | space-around | space-evenly */

  /* Cross axis */
  align-items: stretch;           /* stretch | flex-start | center | flex-end | baseline */

  /* Wrapping */
  flex-wrap: wrap;                /* nowrap | wrap | wrap-reverse */

  /* Direction */
  flex-direction: row;            /* row | row-reverse | column | column-reverse */

  /* Gap */
  gap: 16px;
  row-gap: 8px;
  column-gap: 16px;
}</code></pre><h2>Items</h2><pre><code>.item {
  flex: 1;           /* grow equally */
  flex: 0 0 200px;   /* fixed width */
  flex-shrink: 0;    /* don't shrink */
  align-self: center; /* override container align-items */
  order: -1;          /* appear first */
}</code></pre><h2>Common Patterns</h2><pre><code>/* Center anything */
.center { display: flex; justify-content: center; align-items: center; }

/* Space between items */
.between { display: flex; justify-content: space-between; }

/* Equal width columns */
.cols { display: flex; gap: 16px; }
.cols > * { flex: 1; }

/* Sidebar layout */
.layout { display: flex; gap: 24px; }
.sidebar { flex: 0 0 250px; }
.content { flex: 1; }</code></pre>` },
      { id: "css-05", title: "Grid", difficulty: "beginner", time: "5 min", desc: "Two-dimensional layout system.",
        content: `<h1>CSS Grid</h1><span class="step-badge">Step 5</span><p>Grid handles layout in two dimensions (rows AND columns).</p><h2>Container</h2><pre><code>.grid {
  display: grid;

  /* Define columns */
  grid-template-columns: 200px 1fr 1fr;     /* fixed + flexible */
  grid-template-columns: repeat(3, 1fr);     /* 3 equal columns */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* responsive */

  /* Define rows */
  grid-template-rows: auto 1fr auto;

  /* Gap */
  gap: 16px;
  row-gap: 8px;
  column-gap: 16px;
}</code></pre><h2>Item Placement</h2><pre><code>.item {
  grid-column: 1 / 3;      /* span columns 1 to 3 */
  grid-column: span 2;     /* span 2 columns */
  grid-row: 1 / 2;         /* span rows 1 to 2 */
  grid-row: span 3;        /* span 3 rows */
}

/* Named areas */
.grid {
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }</code></pre><h2>Responsive Grid</h2><pre><code>/* Auto-fit: fills available space */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

/* Auto-fill: creates empty tracks */
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));</code></pre><blockquote>Use Grid for page-level layouts. Use Flexbox for component-level layouts.</blockquote>` },
      { id: "css-06", title: "Positioning", difficulty: "beginner", time: "4 min", desc: "Static, relative, absolute, fixed, sticky.",
        content: `<h1>Positioning</h1><span class="step-badge">Step 6</span><h2>Position Values</h2><pre><code>/* static — default, no positioning */
position: static;

/* relative — moves from its normal position */
position: relative;
top: 10px;
left: 20px;

/* absolute — positioned relative to nearest positioned ancestor */
position: absolute;
top: 0;
right: 0;

/* fixed — positioned relative to viewport */
position: fixed;
bottom: 24px;
right: 24px;

/* sticky — toggles between relative and fixed */
position: sticky;
top: 0;</code></pre><h2>Centering with Absolute</h2><pre><code>.parent { position: relative; }

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}</code></pre><h2>z-index</h2><pre><code>.overlay {
  position: fixed;
  z-index: 100;  /* higher = on top */
}

/* Only works on positioned elements */
z-index: auto | 0 | 100 | -1;</code></pre><h2>Common Patterns</h2><pre><code>/* Sticky header */
.header { position: sticky; top: 0; z-index: 50; }

/* Fixed back-to-top */
.back-top { position: fixed; bottom: 24px; right: 24px; }

/* Modal overlay */
.modal { position: fixed; inset: 0; z-index: 200; }</code></pre><blockquote><code>z-index</code> only works on positioned elements (<code>relative</code>, <code>absolute</code>, <code>fixed</code>, <code>sticky</code>).</blockquote>` },
      { id: "css-07", title: "Display & Visibility", difficulty: "beginner", time: "3 min", desc: "Block, inline, inline-block, none.",
        content: `<h1>Display &amp; Visibility</h1><span class="step-badge">Step 7</span><h2>Display Values</h2><pre><code>/* block — full width, starts new line */
div, p, h1, section, header { display: block; }

/* inline — only takes content width, no width/height */
span, a, strong { display: inline; }

/* inline-block — inline but accepts width/height */
.badge { display: inline-block; width: 20px; height: 20px; }

/* flex — flex container */
.container { display: flex; }

/* grid — grid container */
.grid { display: grid; }

/* none — removes from layout entirely */
.hidden { display: none; }</code></pre><h2>Visibility vs Display</h2><pre><code>/* display: none — element removed from layout */
display: none;

/* visibility: hidden — element hidden but keeps space */
visibility: hidden;

/* visibility: visible — default */
visibility: visible;</code></pre><h2>Overflow</h2><pre><code>overflow: visible;  /* default, content spills out */
overflow: hidden;   /* clips content */
overflow: scroll;   /* always show scrollbar */
overflow: auto;     /* scrollbar only when needed */
overflow-x: auto;   /* horizontal scroll only */
overflow-y: scroll; /* vertical scroll always */</code></pre>` },
      { id: "css-08", title: "Pseudo-Classes & Elements", difficulty: "beginner", time: "4 min", desc: "State-based and generated content.",
        content: `<h1>Pseudo-Classes &amp; Elements</h1><span class="step-badge">Step 8</span><h2>Common Pseudo-Classes</h2><pre><code>/* User interaction */
a:hover { color: var(--accent); }
a:active { transform: scale(0.98); }
input:focus { border-color: var(--accent); }
input:disabled { opacity: 0.5; }

/* Structure */
li:first-child { font-weight: 700; }
li:last-child { margin-bottom: 0; }
li:nth-child(odd) { background: #f5f5f5; }
li:nth-child(3n) { color: red; }

/* Form states */
input:checked + label { color: var(--accent); }
input:required { border-left: 3px solid red; }
input:valid { border-color: green; }
input:invalid { border-color: red; }</code></pre><h2>Pseudo-Elements</h2><pre><code>/* Double colon for pseudo-elements */
.element::before {
  content: "★";
  margin-right: 4px;
}

.element::after {
  content: "";
  display: block;
  clear: both;
}

/* Style first letter / line */
p::first-letter { font-size: 2rem; font-weight: 700; }
p::first-line { font-style: italic; }

/* Selection highlight */
::selection { background: var(--accent); color: white; }

/* Placeholder */
::placeholder { color: var(--text-muted); }</code></pre><h2>Link States Order</h2><pre><code>a:link    { }  /* unvisited */
a:visited { }  /* visited */
a:hover   { }  /* mouse over */
a:active  { }  /* being clicked */
/* Remember: LoVe HAte */</code></pre>` },
      { id: "css-09", title: "Responsive Design", difficulty: "beginner", time: "4 min", desc: "Media queries, mobile-first, viewport units.",
        content: `<h1>Responsive Design</h1><span class="step-badge">Step 9</span><h2>Media Queries</h2><pre><code>/* Mobile-first: base styles for mobile, override for larger */
.container { padding: 16px; }

@media (min-width: 768px) {
  .container { padding: 24px; }
}

@media (min-width: 1024px) {
  .container { padding: 40px; max-width: 1200px; margin: 0 auto; }
}

/* Max-width (desktop-first) */
@media (max-width: 768px) {
  .sidebar { display: none; }
}</code></pre><h2>Viewport Units</h2><pre><code>height: 100vh;     /* 100% of viewport height */
width: 100vw;      /* 100% of viewport width */
font-size: 4vw;    /* relative to viewport width */
min-height: 100dvh; /* dynamic viewport height (accounts for mobile bars) */</code></pre><h2>Responsive Typography</h2><pre><code>/* clamp(min, preferred, max) */
font-size: clamp(1rem, 2.5vw, 2rem);
line-height: clamp(1.4, 1.6, 1.8);</code></pre><h2>Container Queries</h2><pre><code>/* Style based on parent width, not viewport */
.card-container { container-type: inline-size; }

@container (min-width: 400px) {
  .card { flex-direction: row; }
}</code></pre><blockquote>Always design mobile-first. Write base styles for small screens, then add <code>min-width</code> breakpoints.</blockquote>` },
      { id: "css-10", title: "Transitions & Animations", difficulty: "beginner", time: "4 min", desc: "Hover effects, keyframes, and motion.",
        content: `<h1>Transitions &amp; Animations</h1><span class="step-badge">Step 10</span><h2>Transitions</h2><pre><code>.btn {
  background: var(--accent);
  transition: background 0.2s ease, transform 0.15s ease;
}

.btn:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
}

/* Transition shorthand */
transition: property duration timing-function delay;
transition: all 0.3s ease;

/* Timing functions */
transition-timing-function: ease | linear | ease-in | ease-out | cubic-bezier(0.4, 0, 0.2, 1);</code></pre><h2>Keyframe Animations</h2><pre><code>@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate {
  animation: fadeIn 0.3s ease;
  animation: spin 1s linear infinite;
}

/* Animation shorthand */
animation: name duration timing-function delay iteration-count direction fill-mode;
animation: fadeIn 0.3s ease 0s 1 normal forwards;</code></pre><h2>Common Animations</h2><pre><code>/* Subtle hover */
.card { transition: transform 0.2s, box-shadow 0.2s; }
.card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(0,0,0,0.1); }

/* Fade in on load */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

/* Scale on click */
.btn:active { transform: scale(0.96); }</code></pre><blockquote>Prefer CSS transitions for simple hover effects. Use <code>@keyframes</code> for complex multi-step animations.</blockquote>` },
      { id: "css-11", title: "Variables & Units", difficulty: "beginner", time: "3 min", desc: "Custom properties, rem, em, percentages.",
        content: `<h1>Variables &amp; Units</h1><span class="step-badge">Step 11</span><h2>CSS Custom Properties</h2><pre><code>:root {
  --accent: #fa6e09;
  --text: #1a1a1a;
  --radius: 12px;
  --sidebar-w: 280px;
}

.btn {
  background: var(--accent);
  border-radius: var(--radius);
  color: var(--text);
}

/* Fallback */
color: var(--accent, #333);</code></pre><h2>Length Units</h2><table><thead><tr><th>Unit</th><th>Relative To</th><th>Use Case</th></tr></thead><tbody><tr><td><code>px</code></td><td>Nothing (absolute)</td><td>Borders, small values</td></tr><tr><td><code>rem</code></td><td>Root font-size</td><td>Font sizes, spacing</td></tr><tr><td><code>em</code></td><td>Parent font-size</td><td>Padding, margins inside text</td></tr><tr><td><code>%</code></td><td>Parent element</td><td>Widths, responsive sizing</td></tr><tr><td><code>vw</code></td><td>Viewport width</td><td>Full-width elements</td></tr><tr><td><code>vh</code></td><td>Viewport height</td><td>Full-height sections</td></tr><tr><td><code>dvh</code></td><td>Dynamic viewport height</td><td>Mobile-safe full height</td></tr><tr><td><code>svh</code></td><td>Small viewport height</td><td>Mobile safe area</td></tr></tbody></table><h2>rem vs em</h2><pre><code>/* rem — relative to ROOT (16px default) */
font-size: 1.5rem;  /* always 24px */

/* em — relative to PARENT */
.parent { font-size: 20px; }
.child { font-size: 1.5em; }  /* 30px */</code></pre><blockquote>Use <code>rem</code> for font sizes (predictable). Use <code>em</code> for padding/margins that should scale with text.</blockquote>` },
      { id: "css-12", title: "Specificity & Cascade", difficulty: "beginner", time: "4 min", desc: "Which rules win and why.",
        content: `<h1>Specificity &amp; Cascade</h1><span class="step-badge">Step 12</span><p>When multiple rules target the same element, CSS uses specificity to decide which wins.</p><h2>Specificity Hierarchy</h2><pre><code>/* Order from lowest to highest: */

1. Type selectors         p { }           /* 0-0-1 */
2. Class selectors        .text { }       /* 0-1-0 */
3. ID selectors           #header { }     /* 1-0-0 */
4. Inline styles          style="..."     /* 1-0-0-0 */
5. !important             color: red !important;</code></pre><h2>Specificity Examples</h2><pre><code>/* Specificity: 0-0-1 */
p { color: blue; }

/* Specificity: 0-1-0 — wins */
.text { color: red; }

/* Specificity: 1-0-0 — wins over class */
#header { color: green; }

/* Specificity: 0-1-1 — wins over ID */
.text .title { color: purple; }</code></pre><h2>Cascade Rules</h2><ol><li>Specificity wins (higher beats lower)</li><li>Last rule wins (equal specificity)</li><li>Inheritance (child inherits from parent)</li><li><code>!important</code> overrides everything</li></ol><h2>Best Practices</h2><ul><li>Never use <code>!important</code> unless absolutely necessary</li><li>Keep specificity low — use classes over IDs</li><li>Use a naming convention (BEM) to avoid specificity wars</li><li>Override with higher specificity, not <code>!important</code></li></ul><pre><code>/* BEM naming */
.card { }
.card__title { }
.card__title--large { }
.card--featured { }</code></pre><blockquote>Specificity wars are a code smell. If you need <code>!important</code>, your selectors need refactoring.</blockquote>` }
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
    id: "linear-ds", label: "Linear DS", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>`,
    desc: "Linear data structures in C — arrays, stacks, queues and linked lists.",
    tags: ["arrays", "stacks", "queues", "linked lists", "linear"],
    articles: [
      { id: "lds-01", title: "Arrays & Memory Layout", difficulty: "beginner", time: "5 min", desc: "Array basics, indexing, base address, contiguous memory.",
        content: `<h1>Arrays &amp; Memory Layout</h1><span class="step-badge">Chapter 1</span><h2>What is an array?</h2><p>A collection of elements of the same data type stored under one name at one location.</p><p>Example:</p><pre><code>int arr[5];</code></pre><pre><code>               size of array
                     ▼
        int   arr   [5]
         ▲     ▲
         │     └─ name of array
         └─ data type</code></pre><ul><li><code>int</code> ► data type</li><li><code>arr</code> ► name of array</li><li><code>[5]</code> ► size of array</li></ul><h2>Array Declaration and Initialization</h2><h3>Declaration</h3><pre><code>int arr[5];</code></pre><p>We tell the compiler to create an array with the data type mentioned and name and size of array.</p><h3>Initialization</h3><pre><code>int arr[5];</code></pre><p>We are giving value in array / index.</p><h2>Array Indexing</h2><ul><li>Elements of the array are accessed using their index or position.</li><li>Example: <code>arr[0]</code>, <code>arr[1]</code></li><li>In most languages, indexing starts from <code>0</code>.</li></ul><h3>Why indexing starts from 0?</h3><p>Because the first element is at the starting memory location, called the <strong>base element</strong>.</p><pre><code>arr[0]</code></pre><p>means <code>0</code> elements away from the start, so its address is exactly the base address. Therefore, array indexing naturally starts from <code>0</code>.</p><h2>Base Address</h2><p><strong>Base Address:</strong> The memory address of the first element of an array.</p><pre><code>arr[0] ► Base Address</code></pre><h2>Index / Offset</h2><p><strong>Index / Offset:</strong> It tells how many elements an array element is from the base address.</p><p>For example <code>arr[0]</code> has offset <code>0</code>, so it is stored exactly at the base address.</p><h2>Contiguous Memory Allocation</h2><p>Array elements are stored in contiguous/adjacent memory locations.</p><pre><code>arr[0] ► 1000
arr[1] ► 1004
arr[2] ► 1008</code></pre><p>That is why array elements can be accessed directly using an index.</p><h3>How address is assigned with different data type?</h3><p><strong>Assuming <code>int</code> occupies 4 bytes</strong></p><pre><code>arr[0] ► 1000
arr[1] ► 1004
arr[2] ► 1008</code></pre><p>From the base address to <code>arr[size-1]</code>, each element's address increases by <code>4 bytes</code> for an <code>int</code> array.</p><p><strong>Assuming <code>char</code> occupies 1 byte</strong></p><pre><code>arr[0] ► 1000
arr[1] ► 1001
arr[2] ► 1002</code></pre><p>From the base address to <code>arr[size-1]</code>, each element's address increases by <code>1 byte</code> for a <code>char</code> array.</p><blockquote>Because array elements are stored in contiguous memory locations, they can be accessed directly using an index.</blockquote>` },
      { id: "lds-02", title: "1-D Array Address Calculation", difficulty: "beginner", time: "5 min", desc: "Formula and solved examples with base address.",
        content: `<h1>1-D Array Address Calculation</h1><span class="step-badge">Chapter 2</span><h2>Formula</h2><pre><code>A[i] = Base Address + (i × size of each element)</code></pre><h2>Example</h2><p>If:</p><pre><code>Base address = 1000
size of int = 4 bytes
size of char = 1 byte</code></pre><p>Find address of <code>A[5]</code>.</p><p><strong>For <code>int</code>:</strong></p><pre><code>A[5] = 1000 + (5 × 4)
     = 1020</code></pre><p><strong>For <code>char</code>:</strong></p><pre><code>A[5] = 1000 + (5 × 1)
     = 1005</code></pre><h2>Question 1</h2><p>An integer array <code>A[10]</code> is stored in contiguous memory. The base address is <code>1000</code> and each integer occupies <code>4 bytes</code>. Find address of <code>A[7]</code>.</p><pre><code>A[7] = 1000 + (7 × 4)
     = 1000 + 28
     = 1028</code></pre><p><strong>Answer: <code>1028</code></strong></p><h2>Question 2</h2><pre><code>B[20]
Base address = 5000
Each element occupies 2 bytes
Calculate B[13]'s address.</code></pre><pre><code>B[13] = 5000 + (13 × 2)
      = 5000 + 26
      = 5026</code></pre><p><strong>Answer: <code>5026</code></strong></p><blockquote><code>A[i] = Base Address + (i × size of each element)</code> — the size depends on the data type (int = 4 bytes, char = 1 byte).</blockquote>` },
      { id: "lds-03", title: "2-D Arrays & Address Calculation", difficulty: "beginner", time: "5 min", desc: "Row-major and column-major formulas with examples.",
        content: `<h1>2-D Arrays &amp; Address Calculation</h1><span class="step-badge">Chapter 3</span><h2>Example</h2><pre><code>        columns
          0   1   2
row 0    10  20  30
row 1    40  50  60
row 2    70  80  90</code></pre><p>Declaration:</p><pre><code>int arr[3][3];</code></pre><p>There are:</p><pre><code>3 rows × 3 columns = 9 total elements</code></pre><p>Example:</p><pre><code>printf("%d", arr[1][2]);</code></pre><p>Output:</p><pre><code>60</code></pre><h2>2-D Array Memory Representation</h2><pre><code>        Column
          0      1      2

Row 0    10     20     30
        1000   1004   1008

Row 1    40     50     60
        1012   1016   1020

Row 2    70     80     90
        1024   1028   1032</code></pre><h2>Formula to find address in 2-D array</h2><p>For row-major order:</p><pre><code>Address of A[i][j]
= Base address + ((i × number of columns) + j) × size of int</code></pre><p>General form:</p><pre><code>Address of A[i][j]
= Base address + ((i × No. of columns) + j) × size of element</code></pre><h2>Question: Find A[0][2] address</h2><p>Given:</p><pre><code>Base address = 1000
i = 0
number of columns = 3
j = 2
size of int = 4</code></pre><pre><code>Address = 1000 + ((0 × 3) + 2) × 4
        = 1000 + 8
        = 1008</code></pre><p><strong>Answer: <code>1008</code></strong></p><h2>2-D Array Address Calculation</h2><h3>Question 1</h3><p>A 2-D integer array <code>A[4][5]</code> is stored in row-major order. The base address is <code>1000</code> and each element occupies <code>4 bytes</code>. Find address of <code>A[2][3]</code>.</p><pre><code>= Base address + ((i × no. of columns) + j) × size of integer

= 1000 + ((2 × 5) + 3) × 4
= 1000 + (10 + 3) × 4
= 1000 + 13 × 4
= 1000 + 52
= 1052</code></pre><p><strong>Answer: <code>1052</code></strong></p><h3>Column-major example from notebook</h3><pre><code>B[3][6]
Base address = 2000
Calculate B[?][4]</code></pre><p>The notebook applies the column-major form:</p><pre><code>2000 + (4 × 3 + 1) × 2
= 2000 + 28
= 2028</code></pre><p>The notebook records the result as <code>2028</code>.</p><h3>Row-major order matrix</h3><p>Example:</p><pre><code>C[5][4]

Base Address = 5000
Size of int = 8 bytes

C[3][2]
= 5000 + ((3 × 4) + 2) × 8
= 5000 + (12 + 2) × 8
= 5000 + 14 × 8
= 5000 + 112
= 5112</code></pre><p><strong>Answer: <code>5112</code></strong></p><blockquote>Row-major: <code>Address of A[i][j] = Base + ((i × No. of columns) + j) × size of element</code>.</blockquote>` },
      { id: "lds-04", title: "Sparse Matrix & Polynomial", difficulty: "beginner", time: "4 min", desc: "Triplet representation and 2-D array polynomial storage.",
        content: `<h1>Sparse Matrix &amp; Polynomial</h1><span class="step-badge">Chapter 4</span><h2>3-Tuple Form — Sparse Matrix Representation</h2><h3>Triplet Representation</h3><p>Triplet form represents a sparse matrix using:</p><pre><code>(row, column, value)</code></pre><p>Example matrix:</p><pre><code>        columns
        0  1  2  3
row 0   0  0  0  5
row 1   0  8  0  0
row 2   0  0  0  0
row 3   3  0  0  9
row 4   0  0  0  6</code></pre><p>Triplet representation:</p><pre><code>Row   Column   Value
----- -------- -------
0        3       5
1        1       8
3        0       3
3        3       9
4        3       6</code></pre><h2>Polynomial Expression</h2><p>Represent the polynomial using a 2-D array where each row stores coefficient and exponent.</p><p>Given:</p><pre><code>P(x) = 6x⁵ − 4x³ + 7x² − 9x + 2</code></pre><p>Representation:</p><pre><code>Coefficient     Exponent

6               5
4               3
7               2
9               1
2               0</code></pre><p>2-D array representation:</p><pre><code>[6  5]
[4  3]
[7  2]
[9  1]
[2  0]</code></pre><p>The notebook also shows the positions:</p><pre><code>6 ► [0,0]       5 ► [0,1]
4 ► [1,0]       3 ► [1,1]
7 ► [2,0]       2 ► [2,1]
9 ► [3,0]       1 ► [3,1]
2 ► [4,0]       0 ► [4,1]</code></pre><h2>Sparse Matrix Representation of the Polynomial Example</h2><p>The notebook shows:</p><pre><code>0 0 0 8
0 3 0 0
5 0 0 0
0 0 6 0</code></pre><p>Triplet form shown:</p><pre><code>row   column   value

0       3        8
1       1        3
2       0        5
3       2        6</code></pre><blockquote>Triplet representation stores only <code>(row, column, value)</code> for non-zero entries — it saves memory for sparse matrices.</blockquote>` },
      { id: "lds-05", title: "Stacks", difficulty: "beginner", time: "5 min", desc: "LIFO, push, pop, peek, underflow, overflow, display.",
        content: `<h1>Stacks</h1><span class="step-badge">Chapter 5</span><p>A stack is a linear data structure that follows the:</p><pre><code>LIFO principle
Last In First Out</code></pre><p>The element inserted at last is removed first.</p><h2>Example</h2><pre><code>        ┌───────┐
TOP ──→ │ plate3│
        ├───────┤
        │ plate2│
        ├───────┤
        │ plate1│
        └───────┘</code></pre><p>If we want to remove a plate, remove <code>plate3</code> (TOP) first.</p><h2>Conditions in Stack</h2><p>There are two conditions:</p><ol><li><strong>Underflow</strong></li><li><strong>Overflow</strong></li></ol><h2>Three Main Stack Operations</h2><h3>1. Push</h3><p>Which insert element into stack.</p><h3>2. Pop</h3><p>Which delete the last inserted element in stack.</p><h3>3. Peek</h3><p>Which print the TOP element of stack, which basically is the last inserted element in the stack.</p><h2>Stack Display Function</h2><p>Display function is a stack traversal which travel the stack and print all the stack elements from top to bottom.</p><p>Example stack:</p><pre><code>Index:       0   1   2   3   4   5
           ┌───┬───┬───┬───┬───┬───┐
Stack:     │ 5 │ 4 │ 3 │ 9 │ 7 │12 │
           └───┴───┴───┴───┴───┴───┘
                                 ▲
                                TOP</code></pre><p>Push direction:</p><pre><code>0 ► 1 ► 2 ► 3 ► 4 ► 5</code></pre><p>Pop direction:</p><pre><code>12 ► 7 ► 9 ► 3 ► 4 ► 5
TOP                BOTTOM</code></pre><p>Notebook code:</p><pre><code>int display()
{
    if (top == -1) {
        printf("stack is empty");
        return 0;
    }

    printf("Stack elements:\n");

    for (int i = top; i &gt;= 0; i--) {
        printf("%d ", stack[i]);
    }

    return 0;
}</code></pre><h2>Stack Underflow</h2><h3>Meaning</h3><p>Underflow condition: when we try to pop elements from stack when stack is empty.</p><pre><code>int stack_isEmpty()
{
    if (top == -1) {
        return printf("underflow");
    }
}</code></pre><p>Condition:</p><pre><code>top == -1</code></pre><p>means the stack is empty.</p><h2>Stack Overflow</h2><h3>Meaning</h3><p>Overflow happens when we try to push element into the stack when the stack is already full.</p><pre><code>int stack_isFull()
{
    if (top == size - 1) {
        return printf("overflow");
    }
}</code></pre><p>Condition:</p><pre><code>top == size - 1</code></pre><p>means the stack is full.</p><h2>Push Operation</h2><p>Push operation: when we insert element into the stack at the TOP index.</p><p>TOP index means:</p><ul><li>If stack is empty, top is the first position.</li><li>If stack contains elements, top is the last index containing an element.</li></ul><h3>Empty stack</h3><pre><code>┌───┬───┬───┬───┐
│   │   │   │   │
└───┴───┴───┴───┘
  0   1   2   3
  ▲
 TOP</code></pre><h3>Stack with elements</h3><pre><code>┌────┬────┬────┬───┐
│ 10 │ 20 │ 30 │   │
└────┴────┴────┴───┘
  0    1    2    3
            ▲
           TOP</code></pre><p>In stack, we can't insert at middle or start. We can only push at the TOP index position.</p><h2>Pop Operation</h2><p>Pop operation: basically deletion of elements from stack. It also operates at TOP index.</p><p>If stack is:</p><pre><code>┌────┬────┬────┐
│ 10 │ 20 │ 30 │
└────┴────┴────┘
  0    1    2
            ▲
           TOP</code></pre><p>Pop removes <code>30</code>. Then:</p><pre><code>┌────┬────┐
│ 10 │ 20 │
└────┴────┘
  0    1
       ▲
      TOP</code></pre><p>We can only pop the element from TOP index, no other position.</p><h2>Peek Operation</h2><p>Peek operation basically print or return the TOP index value from stack.</p><p>Example:</p><pre><code>┌────┬────┬────┐
│ 10 │ 20 │ 30 │
└────┴────┴────┘
            ▲
           TOP</code></pre><pre><code>peek() ► 30</code></pre><blockquote>Last In First Out — the element inserted at last is removed first.</blockquote>` },
      { id: "lds-06", title: "Queues", difficulty: "beginner", time: "5 min", desc: "FIFO, linear queue, initial values, dequeue cases.",
        content: `<h1>Queues</h1><span class="step-badge">Chapter 6</span><h2>Linear Data Structure</h2><p>Elements are arranged sequentially, one after another.</p><h2>Queue</h2><p>Queue is a data structure that follows FIFO principle:</p><pre><code>First In First Out</code></pre><p>where elements are inserted at the rear and removed from the front.</p><h3>Three types of queue</h3><ol><li>Linear Queue</li><li>Circular Queue</li><li>Priority Queue</li></ol><h2>Linear Queue</h2><p>A linear queue is a queue where elements are inserted at the rear and removed from front, following the FIFO principle.</p><p>Example:</p><pre><code>FRONT          REAR
  ▼              ▼
┌────┬────┬────┬────┐
│ 10 │ 20 │ 30 │ 40 │
└────┴────┴────┴────┘
  0    1    2    3</code></pre><ul><li>Element at the first is the front.</li><li>Last inserted element is considered rear.</li><li>Rear and front point to the index, not the element.</li></ul><p>After deleting <code>10</code>:</p><pre><code>FRONT     REAR
  ▼         ▼
┌────┬────┬────┐
│ 20 │ 30 │ 40 │
└────┴────┴────┘
  1    2    3</code></pre><ul><li>Rear will increase when new element is inserted.</li><li>Direction will be from left to right.</li><li>When a value is dequeued (deleted), front increments to the next index, if available index.</li></ul><h2>Linear Queue — Initial Values</h2><pre><code>int front = -1;
int rear = -1;</code></pre><p>This is the initial value when queue is empty.</p><p>Example:</p><pre><code>int queue[5];
enqueue(50);</code></pre><p>When we insert an element into queue in empty state, element goes to <code>0</code> index. Therefore:</p><pre><code>rear = 0
front = 0</code></pre><p>Initially both are <code>-1</code>, and after inserting the first element both change to <code>0</code>.</p><h2>Linear Queue Enqueue</h2><pre><code>queue[rear] = value;</code></pre><p>When queue is empty:</p><pre><code>front = 0</code></pre><p>Then:</p><pre><code>queue[++rear] = value;</code></pre><p>The notebook notes that when we want to dequeue an element, we cannot dequeue the front directly; we increment the front to <code>0</code>.</p><p>Example:</p><pre><code>enqueue(50)

queue = [50]
index   0 1 2 3 4
front = 0
rear  = 0</code></pre><p>Then:</p><pre><code>enqueue(40)

queue = [50, 40]
index   0   1  2  3  4</code></pre><h2>Basic Queue Operations and Conditions</h2><h3>Operations</h3><ol><li><strong>Enqueue</strong> — Same as push, inserting element to rear index.</li><li><strong>Dequeue</strong> — Same as pop, delete element from the front (index front).</li><li><strong>Front</strong> — To view or track the first element in queue.</li><li><strong>Rear</strong> — To view and track the last inserted element in queue.</li></ol><h3>Conditions</h3><ol><li><strong>Is-empty</strong> — Check if queue is empty.</li><li><strong>Is-full</strong> — Check if queue is full.</li></ol><h2>Linear Queue Dequeue Cases</h2><pre><code>Queue = {1, 2, 3}</code></pre><h3>Case 3: Dequeue</h3><p>If we dequeue one element, it will be deleted from the front index.</p><pre><code>dequeued = front</code></pre><p>Means <code>0</code> index value will be deleted and front incremented to next index.</p><pre><code>Queue = {2, 3}
front ► 1</code></pre><p>Now we check <code>is-empty()</code> condition. It is false as element is present and it is not empty yet.</p><h3>Case 4: Dequeue</h3><p>Value deleted from front index.</p><pre><code>Queue = { }</code></pre><h3>Case 5: Dequeue</h3><p>After deleting the last element:</p><pre><code>rear = -1
front = -1</code></pre><p>Now <code>is-empty</code> condition will be true because no element is present in queue. It will return underflow due to no element present in queue as we dequeue.</p><blockquote>Queue follows FIFO — First In First Out. Elements are inserted at the rear and removed from the front.</blockquote>` },
      { id: "lds-07", title: "Circular Queue", difficulty: "beginner", time: "5 min", desc: "Wrap-around rear, full/empty conditions, enqueue cases.",
        content: `<h1>Circular Queue</h1><span class="step-badge">Chapter 7</span><p>Circular queue follows FIFO principle.</p><h2>Circular Queue</h2><p>It is the queue where the last position is connected to the first position.</p><h3>Initial value when circular queue is empty</h3><pre><code>front = -1
rear  = -1</code></pre><p>because no element is present in circular queue.</p><h2>Circular Queue — Visual Idea</h2><p>For size <code>4</code>:</p><pre><code>              0
           ┌─────┐
     3 ┌─┘       └─┐ 1
         │         │
       2 └─────────┘</code></pre><p>The last index connects back to the first index.</p><h2>Circular Queue Example</h2><p>Insert 4 elements:</p><pre><code>Queue = {4, 3, 1, 2}

Index:
        0   1   2   3
       ┌───┬───┬───┬───┐
       │ 4 │ 3 │ 1 │ 2 │
       └───┴───┴───┴───┘
         ▲           ▲
       FRONT        REAR</code></pre><p>After this:</p><pre><code>front = 0
rear  = 3</code></pre><h2>Circular Queue Dequeue</h2><p>Perform:</p><pre><code>dequeue(4)</code></pre><p>The value at front is deleted and front is incremented.</p><pre><code>front: 0 ► 1</code></pre><h2>Circular Queue Enqueue</h2><p>Suppose we want to insert <code>10</code>. To insert a new element into queue, first find the next rear position.</p><p>Formula:</p><pre><code>rear = (rear + 1) % size</code></pre><p>Example:</p><pre><code>rear = 3
size = 4

rear = (3 + 1) % 4
     = 4 % 4
     = 0</code></pre><p>So the next rear position is index <code>0</code>. Now check whether the index position is empty or not.</p><p>Full condition:</p><pre><code>(rear + 1) % size == front</code></pre><p>If the condition is false, we can insert the value because there is space.</p><p>The notebook example says the current front index is <code>1</code> and last index is <code>3</code>; therefore the next rear can wrap around to index <code>0</code>.</p><h2>Circular Queue Is-Full and Is-Empty</h2><h3>Is-full</h3><p>For size <code>4</code>:</p><pre><code>queue = [0, 1, 2, 3]
index   0  1  2  3

size - 1 = 3</code></pre><p>When the queue is full, no space is available.</p><p>The notebook notes that <code>(rear + 1) % size == front</code> is the condition used to know the queue is full.</p><h3>Is-empty</h3><pre><code>rear == -1</code></pre><p>means the queue is empty in the initial state. If we try to dequeue when it is empty, it will underflow.</p><h2>Circular Queue Enqueue Cases</h2><h3>Case 1: Enqueue</h3><p>If <code>is-full</code> is false, insert element through rear. First check <code>is-empty</code>. If it is true, then front also increases.</p><h3>Case 2: Enqueue</h3><p>Try to insert another element. If full condition is checked and it is false, insert element through rear and also check <code>is-empty</code>. This time it will be false because the queue is not empty.</p><blockquote><code>is-empty</code> will only be true if queue is empty.</blockquote>` },
      { id: "lds-08", title: "Priority Queue", difficulty: "beginner", time: "5 min", desc: "Priority-based removal, highest priority element, shifting.",
        content: `<h1>Priority Queue</h1><span class="step-badge">Chapter 8</span><h2>Priority Queue</h2><p>A priority queue is a special type of queue in which each element is associated with a priority. The element with highest priority is removed first, regardless of insertion order.</p><h2>Main Difference</h2><pre><code>Normal Queue ► follows FIFO
               (linear / circular queue)

Priority Queue ► follows priority-based removal
                 rather than simply first-in-first-out</code></pre><h2>Priority Queue Initial Value</h2><pre><code>rear = -1</code></pre><p>In priority queue, we have rear to track if the queue is empty or not. Empty condition:</p><pre><code>rear == -1</code></pre><h2>Priority Queue Enqueue</h2><p>Example:</p><pre><code>Step 1:
Initial queue:

┌───┬───┬───┬───┐
│   │   │   │   │
└───┴───┴───┴───┘
  0   1   2   3</code></pre><p>Enqueue <code>10</code>:</p><pre><code>queue[++rear] = value;</code></pre><p>Initially <code>rear = -1</code>. After insertion:</p><pre><code>rear = 0
queue = [10]</code></pre><p>Then enqueue <code>20</code>:</p><pre><code>rear = 1

queue = [10, 20]</code></pre><p>Then enqueue <code>40</code> and <code>30</code>. The notebook gives:</p><pre><code>queue = [10, 20, 40, 30]
index:    0   1   2   3
          │   │   │   │
                      ▲
                      │
                     rear</code></pre><h2>Finding Highest Priority Element and Deleting It</h2><p>The notebook uses:</p><pre><code>int let_priority = 0;</code></pre><p>At this index, we are considering the element as having highest priority initially. Then:</p><pre><code>for (int i = 1; i &lt;= rear; i++)
{
    if (queue[i] &gt; queue[let_priority])
    {
        let_priority = i;
    }
}</code></pre><p>Meaning:</p><ul><li>Compare each queue element.</li><li>If a higher-priority element is found, update <code>let_priority</code>.</li><li><code>let_priority</code> stores the index of the highest-priority element.</li></ul><p>After finding the highest-priority element, delete it from that index.</p><h2>Shifting Elements After Deletion</h2><p>After deleting the priority element from the queue, shift elements from right to left to fill the blank space.</p><p>Notebook code:</p><pre><code>for (int i = let_priority; i &lt; rear; i++)
{
    queue[i] = queue[i + 1];
}</code></pre><p>Example:</p><pre><code>Before shift:
queue = [10, 20, 40, 30]
index:    0   1   2   3
          │   │   │   │
                  ▲
                  │
           highest priority</code></pre><p>If <code>40</code> is deleted:</p><pre><code>After shift:
queue = [10, 20, 30]
index:    0   1   2
          │   │   │
                  ▲
                  │
                 rear</code></pre><p>The notebook notes:</p><pre><code>40 ► higher priority
30 ► rear</code></pre><blockquote>The element with highest priority is removed first, regardless of insertion order.</blockquote>` },
      { id: "lds-09", title: "Linked Lists", difficulty: "beginner", time: "4 min", desc: "Singly linked list, node structure, memory example.",
        content: `<h1>Linked Lists</h1><span class="step-badge">Chapter 9</span><h2>Linked List</h2><p>A linked list is a linear data structure where elements are stored in separate memory locations and connected using pointers.</p><pre><code>[data | address] ► [data | address] ► [data | address]</code></pre><p>Each node contains two parts:</p><pre><code>┌────────┬─────────┐
│  data  │ address │
└────────┴─────────┘</code></pre><p>The address stores the location of the next node. If no node is left, the next pointer points to <code>NULL</code>.</p><h2>Singly Linked List</h2><p>A singly linked list contains:</p><pre><code>[data | next] ► [data | next] ► [data | NULL]</code></pre><p>The <code>next</code> pointer stores the address of the next node.</p><h3>Node Structure in C</h3><p>In C, we create a node using <code>struct</code>.</p><pre><code>struct Node
{
    int data;
    struct Node *next;
};</code></pre><p>Here:</p><ul><li><code>int data</code> ► data/value</li><li><code>struct Node *next</code> ► address of next node</li></ul><h2>Singly Linked List Memory Example</h2><p>Three nodes are created.</p><pre><code>Address   Data   Next
--------- ------ ------
1000        10    5000
5000        20    8000
8000        30    NULL</code></pre><p>Visual:</p><pre><code> 1000            5000              8000
┌────────┐       ┌────────┐       ┌────────┐
│ 10     │       │ 20     │       │ 30     │
│  5000 ─┼──────►│  8000 ─┼──────►│ NULL   │
└────────┘       └────────┘       └────────┘

1000 ► 5000 ► 8000 ► NULL</code></pre><blockquote>Nodes are stored in separate memory locations and connected using pointers.</blockquote>` },
      { id: "lds-10", title: "Doubly Linked List", difficulty: "beginner", time: "4 min", desc: "Prev/data/next nodes, memory overhead, vs singly.",
        content: `<h1>Doubly Linked List</h1><span class="step-badge">Chapter 10</span><h2>Doubly Linked List</h2><p>A doubly linked list (DLL) is a linked list where each node contains three parts:</p><pre><code>previous | data | next</code></pre><h3>Meaning</h3><ul><li><code>previous</code> ► address of previous node</li><li><code>data</code> ► actual data</li><li><code>next</code> ► address of next node</li></ul><p>Example:</p><pre><code>NULL ◄ [10] ⇄ [20] ⇄ [30] ► NULL</code></pre><p>You can move forward and backward.</p><h2>Doubly Linked List Memory Allocation</h2><p>Suppose an <code>int</code> is <code>4 bytes</code> and a pointer is <code>8 bytes</code> on a 64-bit system.</p><h3>Singly node</h3><pre><code>data = 4 bytes
next = 8 bytes

Total = 12 bytes</code></pre><h3>Doubly node</h3><pre><code>prev = 8 bytes
data = 4 bytes
next = 8 bytes

Total = 20 bytes</code></pre><h2>Difference Between Singly &amp; Doubly Linked List</h2><table><thead><tr><th>Singly Linked List</th><th>Doubly Linked List</th></tr></thead><tbody><tr><td>Node contains data and next pointer.</td><td>Node contains prev, data, next.</td></tr><tr><td>It has a next pointer which points to the next available node.</td><td>It has prev and next pointers.</td></tr><tr><td>Direction is forward only.</td><td>Direction is backward and forward.</td></tr><tr><td>Singly LL occupies smaller memory due to having single pointer.</td><td>Doubly LL occupies more memory than singly LL due to having double pointer.</td></tr><tr><td>Previous node access is not possible.</td><td>Previous node access is possible.</td></tr><tr><td>Traversal: head ► tail.</td><td>Traversal: head ► tail and tail ► head.</td></tr><tr><td>Memory overhead is smaller.</td><td>Memory overhead is larger.</td></tr></tbody></table><h2>Doubly Linked List — Continued Points</h2><h3>Singly LL</h3><pre><code>Traversal ► head ► tail
Memory overhead ► 1 pointer
Previous node access is not possible.</code></pre><h3>Doubly LL</h3><pre><code>Traversal ► head ► tail &amp; tail ► head
Memory overhead ► 2 pointers
Previous node access is possible.</code></pre><blockquote>Singly linked list has one pointer; doubly linked list has two pointers — more memory but allows backward traversal.</blockquote>` },
      { id: "lds-11", title: "Circular Linked Lists", difficulty: "beginner", time: "4 min", desc: "Singly and doubly circular linked lists.",
        content: `<h1>Circular Linked Lists</h1><span class="step-badge">Chapter 11</span><h2>Doubly Circular Linked List</h2><p>A doubly circular linked list is a linked list where:</p><ul><li>Each node has 3 parts: <code>prev</code> ► address of previous node, <code>data</code> ► value, <code>next</code> ► address of next node.</li><li>The last node points back to the first node.</li><li>The first node's <code>prev</code> points to the last node.</li></ul><h3>Visual Representation</h3><pre><code>                 ┌──────────────────────────────┐
                 │                              ▼
             ┌─────────┐      ┌─────────┐      ┌─────────┐
             │ prev    │      │ prev    │      │ prev    │
        ┌───►│  30     │      │  10     │      │  20     │◄───┐
        │    │  next ──┼─────►│  next ──┼─────►│  next   │    │
        │    └─────────┘      └─────────┘      └─────────┘    │
        │                                                     │
        └─────────────────────────────────────────────────────┘</code></pre><p>Simplified:</p><pre><code>10 ⇄ 20 ⇄ 30
▲         ▼
└─────────┘</code></pre><h3>Node connections</h3><p>For nodes <code>10</code>, <code>20</code>, <code>30</code>:</p><pre><code>10:
prev ► 30
next ► 20

20:
prev ► 10
next ► 30

30:
prev ► 20
next ► 10</code></pre><h2>Singly Circular Linked List</h2><p>A singly circular linked list is a linked list where:</p><ul><li>Each node contains data and a next pointer.</li><li>Each node points to the next node.</li><li>The last node does not point to <code>NULL</code>.</li><li>Instead, the last node points to the first node.</li><li>Therefore, the list forms a circle.</li></ul><h3>Node Structure</h3><pre><code>┌────────┬────────┐
│  data  │  next  │
└────────┴────────┘</code></pre><h3>Visual Representation</h3><p>Example with <code>10 ► 20 ► 30</code>. Because it is circular:</p><pre><code>      ┌───────────────────────┐
      │                       │
      ▼                       │
    [10] ► [20] ► [30] ───────┘</code></pre><p>Or:</p><pre><code>    head ► [10] ► [20] ► [30]
            ▲             ▲
          first          last</code></pre><h3>Node structure example</h3><pre><code>head
     ▼
┌──────────┐      ┌──────────┐      ┌──────────┐
│ 10 |next │├────►│ 20 |next │├────►│ 30 |next │
└──────────┘      └──────────┘      └────────┬┘
     ▲                                   │
     └───────────────────────────────────┘</code></pre><p>Addresses shown in the notebook:</p><ul><li><code>head</code> ► address 1000</li><li><code>second</code> ► address 2000</li><li><code>tail</code> ► address 3000</li></ul><p>Data: <code>head ► data = 10</code>, <code>head ► next = second</code>.</p><blockquote>The last node points back to the first node, forming a circle.</blockquote>` },
      { id: "lds-12", title: "Quick Structure & Key Formulas", difficulty: "beginner", time: "3 min", desc: "Full linear data structure map and key formulas.",
        content: `<h1>Quick Structure &amp; Key Formulas</h1><span class="step-badge">Chapter 12</span><h2>Linear Data Structure — Quick Structure</h2><pre><code>LINEAR DATA STRUCTURE
│
├── ARRAY
│   ├── 1-D Array
│   ├── 2-D Array
│   ├── Address Calculation
│   └── Sparse Matrix / Triplet Representation
│
├── STACK
│   ├── LIFO
│   ├── Push
│   ├── Pop
│   ├── Peek
│   ├── Underflow
│   ├── Overflow
│   └── Display
│
├── QUEUE
│   ├── FIFO
│   ├── Linear Queue
│   ├── Circular Queue
│   └── Priority Queue
│
└── LINKED LIST
    ├── Singly Linked List
    ├── Doubly Linked List
    ├── Singly Circular Linked List
    └── Doubly Circular Linked List</code></pre><h2>Important Formulas from the Notebook</h2><h3>1-D Array</h3><pre><code>A[i] = Base Address + (i × size of each element)</code></pre><h3>2-D Array — Row Major</h3><pre><code>Address A[i][j]
= Base Address + ((i × number of columns) + j) × size of element</code></pre><h3>Circular Queue — Next Rear</h3><pre><code>rear = (rear + 1) % size</code></pre><h3>Circular Queue — Full Condition</h3><pre><code>(rear + 1) % size == front</code></pre><h3>Empty Queue / Initial State</h3><pre><code>front = -1
rear  = -1</code></pre><h3>Stack Empty Condition</h3><pre><code>top == -1</code></pre><h3>Stack Full Condition</h3><pre><code>top == size - 1</code></pre><blockquote>Keep these formulas handy — they appear throughout the notebook.</blockquote>` },
      { id: "lds-13", title: "Core Differences", difficulty: "beginner", time: "3 min", desc: "Stack vs queue, linear vs circular queue, singly vs doubly.",
        content: `<h1>Core Differences</h1><span class="step-badge">Chapter 13</span><h2>Stack vs Queue</h2><table><thead><tr><th>Stack</th><th>Queue</th></tr></thead><tbody><tr><td>LIFO</td><td>FIFO</td></tr><tr><td>Insertion at TOP</td><td>Insertion at REAR</td></tr><tr><td>Deletion from TOP</td><td>Deletion from FRONT</td></tr><tr><td>Main operations: Push, Pop, Peek</td><td>Main operations: Enqueue, Dequeue, Front, Rear</td></tr><tr><td>Has overflow and underflow</td><td>Has empty/full conditions</td></tr></tbody></table><h2>Linear Queue vs Circular Queue</h2><table><thead><tr><th>Linear Queue</th><th>Circular Queue</th></tr></thead><tbody><tr><td>Elements move from left to right.</td><td>Last position is connected to first position.</td></tr><tr><td>Rear normally increases forward.</td><td>Rear can wrap around using <code>% size</code>.</td></tr><tr><td>Uses linear positions.</td><td>Reuses positions after deletion.</td></tr><tr><td>Full/empty handling is linear.</td><td>Uses circular full condition.</td></tr></tbody></table><h2>Singly LL vs Doubly LL</h2><pre><code>Singly:
[data | next]

Doubly:
[prev | data | next]</code></pre><p>Singly linked list has one pointer.</p><p>Doubly linked list has two pointers.</p><p>Therefore, doubly linked list uses more memory but allows backward traversal.</p><blockquote>Choose the data structure by the operation you need — LIFO (stack), FIFO (queue), priority (priority queue), or free-form links (linked list).</blockquote>` }
    ]
  },
  {
    id: "non-linear-ds", label: "Non-Linear DS", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="9" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5"/><path d="M5 17v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2"/></svg>`,
    desc: "Non-linear data structures in C — trees, BSTs and graphs.",
    tags: ["trees", "bst", "graphs", "bfs", "dfs", "data structures"],
    articles: [
      { id: "nlds-01", title: "Introduction to Non-Linear DS", difficulty: "beginner", time: "4 min", desc: "Linear vs non-linear, and where each one is used.",
        content: `<h1>Introduction to Non-Linear DS</h1><span class="step-badge">Chapter 1</span><p>A <strong>linear</strong> data structure stores elements in a <strong>sequence</strong> — one after another, in one level. A <strong>non-linear</strong> data structure stores elements in <strong>multiple levels</strong> or lets elements connect in more than one way.</p><h2>Linear vs Non-Linear</h2><pre><code>LINEAR (one level)            NON-LINEAR (many levels)

[10] - [20] - [30] - [40]          (50)
                                    /   \\
                              (30)     (70)
                              /  \\     /  \\
                          (20)  (40) (60)  (80)

Traversal order is fixed      No single order
Stored in arrays or links     Stored with nodes + pointers/edges</code></pre><h2>Types of Non-Linear Data Structures</h2><h3>1. Trees</h3><pre><code>        A              exactly ONE root
       / \\             a child has exactly ONE parent
      B   C            NO cycles
     / \\
    D   E</code></pre><p>Used in: file systems, databases (B-trees), HTML DOM, compilers, priority queues.</p><h3>2. Graphs</h3><pre><code>   (1) --- (2)       NO root (or many "sources")
    |   \\   |        a node can have MANY edges
   (3) -- (4)         cycles are allowed</code></pre><p>Used in: social networks, maps, road networks, dependency graphs.</p><h2>Comparison Table</h2><table><thead><tr><th>Point</th><th>Linear DS</th><th>Non-Linear DS</th></tr></thead><tbody><tr><td>Arrangement</td><td>Sequence</td><td>Hierarchy / connections</td></tr><tr><td>Levels</td><td>One</td><td>Many</td></tr><tr><td>Traversal order</td><td>Fixed (front to back)</td><td>Depends on the structure</td></tr><tr><td>Implementation</td><td>Arrays, linked lists</td><td>Nodes with pointers/edges</td></tr><tr><td>Examples</td><td>Array, stack, queue, linked list</td><td>Tree, BST, graph, heap</td></tr><tr><td>Memory use</td><td>Less</td><td>More (extra pointers/edges)</td></tr></tbody></table><h2>Real-World Examples</h2><table><thead><tr><th>Structure</th><th>Real example</th></tr></thead><tbody><tr><td>Tree</td><td>File system: <code>/home/user/docs</code></td></tr><tr><td>Tree</td><td>HTML DOM: <code>&lt;body&gt; &rarr; &lt;div&gt; &rarr; &lt;p&gt;</code></td></tr><tr><td>Graph</td><td>Social network: users are nodes, friendships are edges</td></tr><tr><td>Graph</td><td>Google Maps: cities are nodes, roads are edges</td></tr></tbody></table><blockquote>Linear structures answer "what is next?". Non-linear structures answer "what is connected to this?" — which is why graphs model real networks so well.</blockquote>` },
      { id: "nlds-02", title: "Trees & Terminology", difficulty: "beginner", time: "5 min", desc: "Root, node, edge, leaf, depth, height, degree and tree types.",
        content: `<h1>Trees &amp; Terminology</h1><span class="step-badge">Chapter 2</span><p>A <strong>tree</strong> is a non-linear data structure made of <strong>nodes</strong> connected by <strong>edges</strong>, where one node is the <strong>root</strong> and every other node has exactly one parent.</p><h2>Anatomy of a Binary Tree</h2><pre><code>                 (100)   &#8593; level 0
                /       \\
             (50)      (150)   &#8593; level 1
             /   \\      /
          (30)  (70)  (120)  &#8593; level 2

           root
          /     \\
      child   child
      /  \\      /
   leaf  leaf  leaf</code></pre><h2>Terms</h2><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody><tr><td>Root</td><td>The top node, no parent</td></tr><tr><td>Node</td><td>Stores data + links</td></tr><tr><td>Edge</td><td>The connection between two nodes</td></tr><tr><td>Parent</td><td>Node one level above</td></tr><tr><td>Child</td><td>Node one level below</td></tr><tr><td>Leaf</td><td>Node with no children</td></tr><tr><td>Sibling</td><td>Nodes sharing the same parent</td></tr><tr><td>Subtree</td><td>A node plus all its descendants</td></tr><tr><td>Depth</td><td>Distance from the root to the node</td></tr><tr><td>Height</td><td>Longest path from node down to a leaf</td></tr><tr><td>Degree</td><td>Number of children of a node</td></tr></tbody></table><p>In the tree above, <code>(100)</code> is the root, <code>(30)</code> and <code>(70)</code> are siblings, the bottom nodes are leaves, and the degree of <code>(100)</code> is 2.</p><h2>Binary Tree</h2><p>Every node has <strong>at most two</strong> children, called the <strong>left</strong> and <strong>right</strong> child. This limit of two is what makes binary trees useful — it gives us the index maths for arrays.</p><h2>Types of Binary Trees</h2><pre><code>Full tree          every node has 0 or 2 children

        (1)
       /   \\
     (2)   (3)
    /  \\   /
  (4)  (5) (6)

Complete tree       all levels filled except the last,
                    filled from left to right

        (1)
       /   \\
     (2)   (3)
    /   \\
  (4)   (5)   &#9656; 6 would go far left, not right

Perfect tree        every internal node has 2 children
                    and all leaves are at the same level

        (1)
       /   \\
     (2)   (3)
    /  \\  / \\
  (4)  (5)(6) (7)

Degenerate tree     every node has only one child
                    (same as a linked list)

   (1)
    |
   (2)
    |
   (3)</code></pre><blockquote>Most real trees are a mix of these. A degenerate tree is the worst case — it behaves like a linked list, so the shape of the tree decides how fast it works.</blockquote>` },
      { id: "nlds-03", title: "Tree Representation in C", difficulty: "beginner", time: "5 min", desc: "Node structure with pointers and the array representation.",
        content: `<h1>Tree Representation in C</h1><span class="step-badge">Chapter 3</span><p>C has no built-in tree, so a tree is built from <strong>self-referencing structures</strong> — a node that points to nodes of the same type.</p><h2>Node Structure</h2><pre><code>struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
};</code></pre><p>A node holds three things: the data, a pointer to the left child and a pointer to the right child.</p><h2>Memory Picture</h2><pre><code>        100                 50                 30
   +-----------+       +-----------+       +-----------+
   | data: 100 |       | data:  50 |       | data:  30 |
   +-----------+       +-----------+       +-----------+
   | left  ----+--------&gt; | left  ----+--------&gt; | left  NULL |
   | right ----+        | right ----+       | right NULL |
   +-----------+       +-----------+       +-----------+

value 8 bytes         value 8 bytes        value 8 bytes</code></pre><h2>Creating a Tree in C</h2><pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
};

struct Node *newNode(int value)
{
    struct Node *node = malloc(sizeof(struct Node));

    node-&gt;data = value;
    node-&gt;left = NULL;
    node-&gt;right = NULL;

    return node;
}

int main()
{
    struct Node *root  = newNode(100);
    root-&gt;left  = newNode(50);
    root-&gt;right = newNode(150);
    root-&gt;left-&gt;left  = newNode(30);
    root-&gt;left-&gt;right = newNode(70);

    return 0;
}</code></pre><p><code>malloc</code> creates the node on the heap, and <code>NULL</code> marks the end of every branch. Forgetting to set the pointers to <code>NULL</code> is the most common bug.</p><h2>Array Representation</h2><p>A binary tree can also be stored in a plain array. The position of a node decides its children:</p><pre><code>Root at index 0

left child  of index i  = 2 * i + 1
right child of index i  = 2 * i + 2
parent       of index i  = (i - 1) / 2

        index:   0    1     2      3     4      5
        +------+----+-----+-----+------+------+
        | 100  | 50 | 150 |  30 |  70  | 120  |
        +------+----+-----+-----+------+------+</code></pre><h2>Pointer vs Array</h2><table><thead><tr><th></th><th>Pointer (linked)</th><th>Array</th></tr></thead><tbody><tr><td>Access node i</td><td>Walk from the root (O(n))</td><td>Direct jump (O(1))</td></tr><tr><td>Missing node</td><td>NULL pointer</td><td>Wastes memory (holes)</td></tr><tr><td>Memory</td><td>Only what is used</td><td>Needs the full size upfront</td></tr><tr><td>Best for</td><td>Sparse trees</td><td>Dense / complete trees</td></tr></tbody></table><blockquote>The index formulas 2i+1, 2i+2 and (i-1)/2 are the same maths behind a heap, a segment tree and a binary search tree stored in an array.</blockquote>` },
      { id: "nlds-04", title: "Binary Search Tree", difficulty: "beginner", time: "5 min", desc: "The BST property, insertion order and why inorder gives sorted output.",
        content: `<h1>Binary Search Tree</h1><span class="step-badge">Chapter 4</span><p>A <strong>binary search tree (BST)</strong> is a binary tree with one extra rule at every node:</p><pre><code>Left subtree  &#8804;  node value  &#8804;  Right subtree

          (50)
         /    \\
   (30)      (70)
   /  \\      /
(20)  (40)  (60)</code></pre><p>Values smaller than the node go to the <strong>left</strong>, bigger values go to the <strong>right</strong>. This is exactly the same idea as binary search on a sorted array — but the shape is built automatically while inserting.</p><h2>Insertion Step by Step</h2><pre><code>Insert 50:
      (50)

Insert 30  (30 &lt; 50 &#8594; left):
      (50)
      /
    (30)

Insert 70  (70 &gt; 50 &#8594; right):
      (50)
      /   \\
    (30) (70)

Insert 20  (20 &lt; 50 &#8594; left, 20 &lt; 30 &#8594; left):
          (50)
         /    \\
      (30)    (70)
      /  \\
   (20)  (40)

Insert 60:
            (50)
           /    \\
        (30)    (70)
        /  \\     /
     (20)  (40) (60)</code></pre><h2>Inorder Gives Sorted Output</h2><pre><code>Inorder traversal  =  Left &#8594; Node &#8594; Right

        (50)
       /    \\
    (30)    (70)
    /  \\     /
 (20)  (40) (60)

20, 30, 40, 50, 60, 70   &#9656;  sorted ascending</code></pre><p>That is the key property: a BST is a sorted array stored as a tree, so it supports search, insert, delete and finding min/max in O(log n) — but only when the tree stays balanced.</p><h2>Balanced vs Skewed</h2><pre><code>Insert 50, 30, 70, 10, 20, 80, 90

BALANCED (good)              SKEWED (bad)

        (50)                    (10)
       /    \\                    |
    (30)    (70)                 (20)
    /      /                        |
 (10)    (80)                     (30)
   \       \                        |
   (20)     (90)                  (50)
                                     |
                                   (70)
                                    /  \
                                 (80) (90)

O(log n) search              looks like a linked list
                             O(n) search</code></pre><p>Inserting already-sorted values always produces a skewed tree, so self-balancing trees (AVL, Red-Black) exist to fix that.</p><blockquote>A BST is only as fast as its shape. Balanced = O(log n), skewed = O(n) — the same complexity as no data structure at all.</blockquote>` },
      { id: "nlds-05", title: "BST Operations", difficulty: "intermediate", time: "6 min", desc: "Search, insert and delete with the three deletion cases.",
        content: `<h1>BST Operations</h1><span class="step-badge">Chapter 5</span><h2>Search</h2><pre><code>struct Node *search(struct Node *root, int key)
{
    if (root == NULL || root-&gt;data == key)
        return root;

    if (key &lt; root-&gt;data)
        return search(root-&gt;left, key);

    return search(root-&gt;right, key);
}</code></pre><p>At each node only <strong>one</strong> branch is followed, so the search walks down a single path instead of scanning everything.</p><h2>Insert</h2><pre><code>struct Node *insert(struct Node *root, int key)
{
    if (root == NULL)
        return newNode(key);

    if (key &lt; root-&gt;data)
        root-&gt;left  = insert(root-&gt;left, key);
    else if (key &gt; root-&gt;data)
        root-&gt;right = insert(root-&gt;right, key);

    return root;
}</code></pre><p>Insertion always ends at a <code>NULL</code> pointer, which becomes the new leaf. The returned root matters because <code>root-&gt;left = ...</code> attaches the new subtree.</p><h2>Delete — Three Cases</h2><pre><code>Case 1: node is a LEAF  &#8594;  just remove it

   (20)              (20) is deleted
     \
     (30)  &#8594;  30's right child becomes NULL

Case 2: node has ONE CHILD  &#8594;  replace it with its child

     (20)                (40)
    /                     /
  (10)       &#8594;       (10)
    \
    (30)

Case 3: node has TWO CHILDREN  &#8594;  replace its value with the
                                 INORDER SUCCESSOR (the smallest
                                 value in the right subtree)

        (50)                 (50)
       /    \\               /    \\
    (30)    (70)    &#8594;   (30)    (70)
    /  \\    /                 /  \\     /
 (20)  (40) (60)            (20)  (40) (60)
                             deleted node 70 is replaced
                             by 60, then 60's old spot is
                             deleted with case 1 or 2</code></pre><h2>C Code</h2><pre><code>struct Node *deleteNode(struct Node *root, int key)
{
    if (root == NULL)
        return NULL;

    if (key &lt; root-&gt;data)
        root-&gt;left  = deleteNode(root-&gt;left, key);
    else if (key &gt; root-&gt;data)
        root-&gt;right = deleteNode(root-&gt;right, key);
    else
    {
        if (root-&gt;left == NULL)
            return root-&gt;right;

        if (root-&gt;right == NULL)
            return root-&gt;left;

        struct Node *temp = root-&gt;right;

        while (temp-&gt;left != NULL)
            temp = temp-&gt;left;

        root-&gt;data = temp-&gt;data;
        root-&gt;right = deleteNode(root-&gt;right, temp-&gt;data);
    }

    return root;
}</code></pre><h2>Min and Max</h2><pre><code>int minValue(struct Node *root)
{
    while (root-&gt;left != NULL)
        root = root-&gt;left;

    return root-&gt;data;
}</code></pre><h2>Complexity</h2><p>All three operations cost <strong>O(h)</strong>, where <code>h</code> is the height of the tree.</p><table><thead><tr><th>Case</th><th>Height</th><th>Search / Insert / Delete</th></tr></thead><tbody><tr><td>Balanced tree</td><td>log2(n)</td><td>O(log n)</td></tr><tr><td>Skewed tree</td><td>n - 1</td><td>O(n)</td></tr></tbody></table><p>Space: <strong>O(h)</strong> for recursion. New nodes need <code>malloc</code>, deleted nodes should be freed with <code>free()</code>.</p><blockquote>Replacing the deleted value with the inorder successor keeps the BST property intact — that is why case 3 is solved in two steps.</blockquote>` },
      { id: "nlds-06", title: "Tree Traversals", difficulty: "intermediate", time: "6 min", desc: "Inorder, preorder, postorder and level order with their orders and uses.",
        content: `<h1>Tree Traversals</h1><span class="step-badge">Chapter 6</span><p>Traversing means visiting every node once. Trees have no single "next" element, so the order must be defined by the algorithm: either go <strong>depth-first</strong> (DFS) or <strong>breadth-first</strong> (BFS).</p><h2>DFS — Three Orders</h2><pre><code>            (50)
           /    \\
        (30)    (70)
        /  \\     /
     (20)  (40) (60)

Preorder  (Node, Left, Right)   &#9656;  50 30 20 40 70 60
Inorder   (Left, Node, Right)   &#9656;  20 30 40 50 60 70
Postorder (Left, Right, Node)   &#9656;  20 40 30 60 70 50</code></pre><table><thead><tr><th>Traversal</th><th>Order</th><th>Used for</th></tr></thead><tbody><tr><td>Preorder</td><td>Node, Left, Right</td><td>Copying / cloning a tree, expression trees, prefix (Polish) notation</td></tr><tr><td>Inorder</td><td>Left, Node, Right</td><td>Getting the BST values in sorted order</td></tr><tr><td>Postorder</td><td>Left, Right, Node</td><td>Deleting a tree, freeing memory, postfix notation</td></tr></tbody></table><h2>DFS Code</h2><pre><code>void preorder(struct Node *root)
{
    if (root == NULL) return;

    printf("%d ", root-&gt;data);
    preorder(root-&gt;left);
    preorder(root-&gt;right);
}

void inorder(struct Node *root)
{
    if (root == NULL) return;

    inorder(root-&gt;left);
    printf("%d ", root-&gt;data);
    inorder(root-&gt;right);
}

void postorder(struct Node *root)
{
    if (root == NULL) return;

    postorder(root-&gt;left);
    postorder(root-&gt;right);
    printf("%d ", root-&gt;data);
}</code></pre><p>Each function is identical except for the position of the <code>printf</code> line. That single line decides the traversal order.</p><h2>BFS — Level Order</h2><p>Visit all nodes level by level, using a queue.</p><pre><code>Level 0:   50
Level 1:   30      70
Level 2:   20   40  60

Output:  50 30 70 20 40 60</code></pre><pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

struct Node { int data; struct Node *left, *right; };

void levelOrder(struct Node *root)
{
    if (root == NULL) return;

    struct Node *queue[100];
    int front = 0, rear = 0;

    queue[rear++] = root;

    while (front &lt; rear)
    {
        struct Node *node = queue[front++];
        printf("%d ", node-&gt;data);

        if (node-&gt;left != NULL)
            queue[rear++] = node-&gt;left;

        if (node-&gt;right != NULL)
            queue[rear++] = node-&gt;right;
    }
}</code></pre><h2>Complexity</h2><table><thead><tr><th>Traversal</th><th>Time</th><th>Space</th></tr></thead><tbody><tr><td>DFS (recursive)</td><td>O(n)</td><td>O(h) — call stack</td></tr><tr><td>DFS (iterative)</td><td>O(n)</td><td>O(h) — explicit stack</td></tr><tr><td>BFS</td><td>O(n)</td><td>O(w) — queue, w = widest level</td></tr></tbody></table><h2>DFS vs BFS</h2><table><thead><tr><th></th><th>DFS</th><th>BFS</th></tr></thead><tbody><tr><td>Uses</td><td>Recursion / stack</td><td>Queue</td></tr><tr><td>Goes</td><td>As deep as possible</td><td>Level by level</td></tr><tr><td>Shortest path</td><td>No</td><td>Yes (unweighted graph)</td></tr><tr><td>Memory</td><td>O(h)</td><td>O(w)</td></tr></tbody></table><blockquote>Preorder copies a tree, inorder sorts a BST, postorder deletes it, and level order prints it the way you see it in a diagram.</blockquote>` },
      { id: "nlds-07", title: "Graphs & Terminology", difficulty: "beginner", time: "5 min", desc: "Vertices, edges, directed graphs, degree, path, cycle and graph types.",
        content: `<h1>Graphs &amp; Terminology</h1><span class="step-badge">Chapter 7</span><p>A <strong>graph</strong> is a collection of <strong>vertices</strong> connected by <strong>edges</strong>. Unlike a tree, a graph has no root, a vertex can have any number of edges, and cycles are allowed.</p><h2>Undirected vs Directed</h2><pre><code>UNDIRECTED                DIRECTED
edge works both ways    edge works one way only

   (1) --- (2)              (1) &#8594; (2)
    |   \\   |               |      |
   (3) -- (4)               (3) &#8594; (4)
                            &#9656; 1 &#8594; 2 is allowed, 2 &#8594; 1 is not</code></pre><h2>Terms</h2><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody><tr><td>Vertex (node)</td><td>A single element</td></tr><tr><td>Edge</td><td>Connection between two vertices</td></tr><tr><td>Degree</td><td>Number of edges touching a vertex</td></tr><tr><td>In-degree / Out-degree</td><td>Incoming / outgoing edges (directed graph)</td></tr><tr><td>Path</td><td>Sequence of vertices connected by edges</td></tr><tr><td>Cycle</td><td>A path that starts and ends at the same vertex</td></tr><tr><td>Adjacent</td><td>Two vertices joined by an edge</td></tr><tr><td>Connected</td><td>Every vertex is reachable from every other vertex</td></tr><tr><td>Weighted graph</td><td>Edges carry a value (cost, distance)</td></tr><tr><td>Subgraph</td><td>A smaller graph made from part of the graph</td></tr></tbody></table><p>Example degrees in the undirected graph above:</p><pre><code>(1) &#8594; edges to (2) and (3)   degree 2
(2) &#8594; edges to (1), (3), (4)  degree 3
(3) &#8594; edges to (1) and (2)   degree 2
(4) &#8594; edges to (2) and (3)   degree 2</code></pre><h2>Handshaking Rule</h2><p>In an undirected graph, the sum of all degrees is <strong>twice</strong> the number of edges.</p><pre><code>sum of degrees = 2 * number of edges</code></pre><h2>Types of Graphs</h2><table><thead><tr><th>Type</th><th>Meaning</th></tr></thead><tbody><tr><td>Simple graph</td><td>No loops, no parallel edges</td></tr><tr><td>Complete graph</td><td>Every vertex connected to every other vertex</td></tr><tr><td>Cycle graph</td><td>Vertices arranged in a ring</td></tr><tr><td>Bipartite graph</td><td>Vertices split into two sets with no edges inside a set</td></tr><tr><td>Weighted graph</td><td>Every edge has a cost or distance</td></tr><tr><td>Directed graph (digraph)</td><td>Edges have a direction</td></tr></tbody></table><h2>Tree vs Graph</h2><table><thead><tr><th></th><th>Tree</th><th>Graph</th></tr></thead><tbody><tr><td>Root</td><td>Exactly one</td><td>None</td></tr><tr><td>Cycles</td><td>Not allowed</td><td>Allowed</td></tr><tr><td>Parent</td><td>One per node</td><td>Any number</td></tr><tr><td>Edges</td><td>n - 1</td><td>Any number</td></tr></tbody></table><blockquote>A tree is just a special graph with no cycles and a single root — which is why tree algorithms are simpler than graph algorithms.</blockquote>` },
      { id: "nlds-08", title: "Graph Representation in C", difficulty: "intermediate", time: "6 min", desc: "Adjacency matrix and adjacency list with code and space comparison.",
        content: `<h1>Graph Representation in C</h1><span class="step-badge">Chapter 8</span><p>Since C has no graph type, we must store the connections ourselves. There are two standard ways: an <strong>adjacency matrix</strong> and an <strong>adjacency list</strong>.</p><h2>The Example Graph</h2><pre><code>Edges:  0 - 1,  0 - 2,  1 - 2,  1 - 3

    0 --- 1
    |   / |
    2 --- 3</code></pre><h2>1. Adjacency Matrix</h2><p>A 2-D array where <code>matrix[i][j] = 1</code> means there is an edge from vertex <code>i</code> to vertex <code>j</code>.</p><pre><code>     0  1  2  3
  0 [ 0  1  1  0 ]
  1 [ 1  0  1  1 ]
  2 [ 1  1  0  0 ]
  3 [ 0  1  0  0 ]</code></pre><pre><code>#define V 4

int matrix[V][V] = {
    {0, 1, 1, 0},
    {1, 0, 1, 1},
    {1, 1, 0, 0},
    {0, 1, 0, 0}
};

for (int i = 0; i &lt; V; i++)
{
    for (int j = 0; j &lt; V; j++)
    {
        if (matrix[i][j] == 1)
            printf("Edge %d -> %d\\n", i, j);
    }
}</code></pre><p>For a <strong>weighted</strong> graph, store the weight instead of 1, and use a large value like <code>INT_MAX</code> for "no edge".</p><h2>2. Adjacency List</h2><p>An array of linked lists. Each vertex keeps a pointer to its first neighbour.</p><pre><code>0  &#9656; 1 &#9656; 2 &#9656; NULL
1  &#9656; 0 &#9656; 2 &#9656; 3 &#9656; NULL
2  &#9656; 0 &#9656; 1 &#9656; NULL
3  &#9656; 1 &#9656; NULL</code></pre><pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

#define V 4

struct Node
{
    int vertex;
    struct Node *next;
};

struct Node *adjList[V];

void addEdge(int u, int v)
{
    struct Node *node = malloc(sizeof(struct Node));
    node-&gt;vertex = v;
    node-&gt;next = adjList[u];
    adjList[u] = node;
}

void printGraph()
{
    for (int i = 0; i &lt; V; i++)
    {
        printf("%d &#9656; ", i);

        for (struct Node *temp = adjList[i]; temp; temp = temp-&gt;next)
            printf("%d ", temp-&gt;vertex);

        printf("\\n");
    }
}</code></pre><h2>Which One To Use</h2><table><thead><tr><th></th><th>Adjacency Matrix</th><th>Adjacency List</th></tr></thead><tbody><tr><td>Storage</td><td>V * V</td><td>V + 2E</td></tr><tr><td>Space</td><td>O(V²)</td><td>O(V + E)</td></tr><tr><td>Check edge (u, v)</td><td>O(1)</td><td>O(degree)</td></tr><tr><td>Find all neighbours</td><td>O(V)</td><td>O(degree)</td></tr><tr><td>Best for</td><td>Dense graphs, few vertices</td><td>Sparse graphs and real networks</td></tr></tbody></table><blockquote>Real networks like social graphs are very sparse, so the adjacency list is the normal choice — a matrix for 1 million users would need 10¹² cells.</blockquote>` },
      { id: "nlds-09", title: "BFS & DFS Traversal", difficulty: "intermediate", time: "6 min", desc: "Breadth-first with a queue, depth-first with recursion, and their uses.",
        content: `<h1>BFS &amp; DFS Traversal</h1><span class="step-badge">Chapter 9</span><p>Both algorithms visit every vertex of a connected graph. The only difference is the <strong>order</strong>: BFS goes level by level, DFS goes as deep as possible first.</p><h2>BFS — Uses a Queue</h2><pre><code>Graph:   0 --- 1
         |   / |
         2 --- 3

Start at 0:

Queue: [0]        visit 0
   &#9656; neighbours 1, 2 go in the queue
Queue: [1, 2]     visit 1
   &#9656; neighbour 3 joins (0 already visited)
Queue: [2, 3]     visit 2
   &#9656; no new neighbours
Queue: [3]        visit 3
Queue: [ ]

BFS order:  0 1 2 3</code></pre><pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

#define V 4

int adjList[V][V] = {
    {0, 1, 1, 0},
    {1, 0, 1, 1},
    {1, 1, 0, 0},
    {0, 1, 0, 0}
};

int visited[V] = {0};

void bfs(int start)
{
    int queue[V];
    int front = 0, rear = 0;

    visited[start] = 1;
    queue[rear++] = start;

    while (front &lt; rear)
    {
        int node = queue[front++];
        printf("%d ", node);

        for (int i = 0; i &lt; V; i++)
        {
            if (adjList[node][i] == 1 &amp;&amp; visited[i] == 0)
            {
                visited[i] = 1;
                queue[rear++] = i;
            }
        }
    }
}</code></pre><p>Marking a vertex as visited <strong>when it enters the queue</strong> (not when it leaves) prevents the same vertex being added twice in cyclic graphs.</p><h2>DFS — Uses Recursion or a Stack</h2><pre><code>Start at 0:

visit 0
  &#9656; first neighbour 1
      visit 1
        &#9656; next neighbour 2
            visit 2
              &#9656; no new neighbours
        &#9656; back to 1
          &#9656; next neighbour 3
              visit 3
            &#9656; no new neighbours

DFS order:  0 1 2 3</code></pre><pre><code>int visited[V] = {0};

void dfs(int node)
{
    visited[node] = 1;
    printf("%d ", node);

    for (int i = 0; i &lt; V; i++)
    {
        if (adjList[node][i] == 1 &amp;&amp; visited[i] == 0)
            dfs(i);
    }
}</code></pre><p>The recursive version is the stack — each call is one level of depth. An iterative version can use an explicit array as a stack.</p><h2>Comparison</h2><table><thead><tr><th></th><th>BFS</th><th>DFS</th></tr></thead><tbody><tr><td>Data structure</td><td>Queue</td><td>Stack / recursion</td></tr><tr><td>Order</td><td>Level by level</td><td>Depth first</td></tr><tr><td>Time</td><td>O(V + E)</td><td>O(V + E)</td></tr><tr><td>Space</td><td>O(V)</td><td>O(V)</td></tr><tr><td>Shortest path</td><td>Yes (unweighted)</td><td>No</td></tr></tbody></table><h2>Applications</h2><table><thead><tr><th>BFS</th><th>DFS</th></tr></thead><tbody><tr><td>Shortest path in an unweighted graph</td><td>Cycle detection</td></tr><tr><td>Level order tree traversal</td><td>Path finding, maze solving</td></tr><tr><td>Web crawling by link depth</td><td>Topological sorting</td></tr><tr><td>Social network friend suggestions</td><td>Connected components</td></tr><tr><td>Broadcasting in a network</td><td>Detecting dead ends / backtracking</td></tr></tbody></table><blockquote>BFS finds the fewest steps, DFS finds all possible routes. Both need a visited array, or an infinite graph will loop forever.</blockquote>` },
      { id: "nlds-10", title: "Non-Linear DS Quick Reference", difficulty: "beginner", time: "4 min", desc: "Linear vs non-linear, complexities, key formulas and when to use which.",
        content: `<h1>Non-Linear DS Quick Reference</h1><span class="step-badge">Chapter 10</span><h2>Linear vs Non-Linear</h2><table><thead><tr><th>Point</th><th>Linear DS</th><th>Non-Linear DS</th></tr></thead><tbody><tr><td>Shape</td><td>Sequence, one level</td><td>Hierarchy / connections, many levels</td></tr><tr><td>Examples</td><td>Array, stack, queue, linked list</td><td>Tree, BST, heap, graph</td></tr><tr><td>Traversal</td><td>Front to back</td><td>DFS or BFS</td></tr><tr><td>Relation</td><td>One predecessor, one successor</td><td>One or many parents/edges</td></tr><tr><td>Memory</td><td>Low</td><td>Higher (extra pointers/edges)</td></tr><tr><td>Speed</td><td>Simple and predictable</td><td>Much faster when many relationships exist</td></tr></tbody></table><h2>Complexity Cheat Sheet</h2><table><thead><tr><th>Operation</th><th>Balanced / average</th><th>Worst case</th></tr></thead><tbody><tr><td>Tree traversal (any)</td><td>O(n)</td><td>O(n)</td></tr><tr><td>BST search / insert / delete</td><td>O(log n)</td><td>O(n) — skewed</td></tr><tr><td>Graph BFS / DFS</td><td>O(V + E)</td><td>O(V + E)</td></tr><tr><td>Min / max in BST</td><td>O(log n)</td><td>O(n)</td></tr></tbody></table><h2>Formulas To Remember</h2><pre><code>Array representation of a binary tree
  left child of i   = 2 * i + 1
  right child of i  = 2 * i + 2
  parent of i       = (i - 1) / 2

Tree sizes (n nodes)
  height of a perfect tree  = log2(n)
  n - 1                    = edges in a tree
  sum of degrees           = 2 * edges
  n * (n - 1) / 2          = edges in a complete graph</code></pre><h2>Which Structure To Use</h2><table><thead><tr><th>Need</th><th>Use</th></tr></thead><tbody><tr><td>Fast search with sorted order</td><td>BST / balanced tree</td></tr><tr><td>Fast min and max</td><td>Heap</td></tr><tr><td>Parent-child hierarchy</td><td>Tree</td></tr><tr><td>Many-to-many connections</td><td>Graph</td></tr><tr><td>Shortest route</td><td>BFS or Dijkstra</td></tr><tr><td>Only sequential processing</td><td>Linear DS is enough</td></tr></tbody></table><h2>When to Go Non-Linear</h2><p>Stay with a linear structure while the data is a simple list. Move to a tree or graph only when you need <strong>relationships</strong> — hierarchy, ordering, many-to-many links or fast lookup beyond a sorted array.</p><blockquote>Linear data structures store data; non-linear data structures store relationships. That single idea separates the two families.</blockquote>` }
    ]
  },
  {
    id: "sorting", label: "Sorting", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5h10"/><path d="M11 9h7"/><path d="M11 13h4"/><path d="M3 17l3 3 3-3"/><path d="M6 4v16"/></svg>`,
    desc: "Sorting algorithms in C — bubble, selection, insertion, quick and merge sort.",
    tags: ["bubble sort", "quick sort", "merge sort", "algorithms"],
    articles: [
      { id: "sort-01", title: "Introduction to Sorting", difficulty: "beginner", time: "4 min", desc: "What is sorting, key, orders, stability and classifications.",
        content: `<h1>Introduction to Sorting</h1><span class="step-badge">Chapter 1</span><p><strong>Sorting</strong> means arranging the elements of a collection in a particular order so the data becomes easy to search and process.</p><h2>Unsorted vs Sorted</h2><pre><code>Unsorted:   40  10  70  20  60

Ascending:  10  20  40  60  70
            small &#8594; big

Descending: 70  60  40  20  10
            big &#8594; small</code></pre><h2>Why Sorting?</h2><ul><li>Binary search works <strong>only</strong> on sorted data.</li><li>Duplicates become easy to count and group.</li><li>Sorting is the first step of many algorithms — searching, merging, grouping.</li></ul><h2>Key Terms</h2><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody><tr><td>Key</td><td>The value used for comparison.</td></tr><tr><td>Record</td><td>A key plus its other information.</td></tr><tr><td>Collection</td><td>The list (array) of records to sort.</td></tr><tr><td>Internal sort</td><td>All data stays in memory (arrays).</td></tr><tr><td>External sort</td><td>Data is larger than memory, sorted as files.</td></tr></tbody></table><h2>Types of Sorting Algorithms</h2><h3>1. Comparison Based</h3><p>Compare two elements and decide the order.</p><ul><li>Bubble sort</li><li>Selection sort</li><li>Insertion sort</li><li>Quick sort</li><li>Merge sort</li></ul><h3>2. Non-Comparison Based</h3><p>Use the value of the element directly, without comparing two elements.</p><ul><li>Counting sort</li><li>Bucket sort</li><li>Radix sort</li></ul><h2>Other Ways to Classify</h2><table><thead><tr><th>Type</th><th>Meaning</th><th>Examples</th></tr></thead><tbody><tr><td>In-place</td><td>Sorting happens inside the same array, no extra array.</td><td>Bubble, selection, insertion, quick</td></tr><tr><td>Out-of-place</td><td>Needs extra memory (an extra array).</td><td>Merge, counting, radix</td></tr><tr><td>Stable</td><td>Equal keys keep their original relative order.</td><td>Bubble, insertion, merge</td></tr><tr><td>Unstable</td><td>Equal keys may change their relative order.</td><td>Selection, quick</td></tr></tbody></table><h2>What Stability Means</h2><pre><code>Records:  (name, score)

Ana   70
Bina  70
Chai  80</code></pre><p>Both <code>Ana</code> and <code>Bina</code> have the same score. A <strong>stable</strong> sort keeps <code>Ana</code> before <code>Bina</code>. An unstable sort may give any order.</p><blockquote>Sorting is only a rearrangement — the number of elements stays the same, only their positions change.</blockquote>` },
      { id: "sort-02", title: "Bubble Sort", difficulty: "beginner", time: "5 min", desc: "Compare neighbours and swap, largest element bubbles to the end.",
        content: `<h1>Bubble Sort</h1><span class="step-badge">Chapter 2</span><h2>Code</h2><pre><code>void bubbleSort(int arr[], int size) {
    for (int i = 0; i &lt; size; i++) {
        for (int j = 0; j &lt; size - i - 1; j++) {
            if (arr[j] &gt; arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}</code></pre><blockquote><strong>Note:</strong> some notebooks show the swap as <code>int temp = arr[j+1]; arr[j+1] = arr[j+1]; arr[j] = temp;</code> — as written that assigns the same value twice and never actually swaps. The code above uses the standard correct swap.</blockquote>

<h2>Dry Run</h2><p>Array: <code>[5, 4, 2, 1]</code></p><table><thead><tr><th>Index</th><th>0</th><th>1</th><th>2</th><th>3</th></tr></thead><tbody><tr><td>Value</td><td>5</td><td>4</td><td>2</td><td>1</td></tr></tbody></table>

<h3>Pass 1 (i = 0, j runs [0, 1, 2])</h3><pre><code>j=0:  [ 5,  4,  2,  1]
        0   1   2   3
        ↑   ↑
        swap            5 &gt; 4 → swap
    → [ 4,  5,  2,  1]

j=1:  [ 4,  5,  2,  1]
        0   1   2   3
            ↑   ↑
            swap        5 &gt; 2 → swap
    → [ 4,  2,  5,  1]

j=2:  [ 4,  2,  5,  1]
        0   1   2   3
                ↑   ↑
                swap    5 &gt; 1 → swap
    → [ 4,  2,  1,  5]</code></pre><p>End of Pass 1: <code>[4, 2, 1, 5]</code></p><pre><code>    → [ 4,  2,  1,  5]
                   ┌─┐
                   │5│  ← sorted
                   └─┘</code></pre>

<h3>Pass 2 (i = 1, j runs [0, 1])</h3><pre><code>j=0:  [ 4,  2,  1,  5]
        0   1   2   3
        ↑   ↑
        swap            4 &gt; 2 → swap
    → [ 2,  4,  1,  5]

j=1:  [ 2,  4,  1,  5]
        0   1   2   3
            ↑   ↑
            swap        4 &gt; 1 → swap
    → [ 2,  1,  4,  5]</code></pre><p>End of Pass 2: <code>[2, 1, 4, 5]</code></p><pre><code>    → [ 2,  1,  4,  5]
               ┌─────┐
               │4,  5│  ← sorted
               └─────┘</code></pre>

<h3>Pass 3 (i = 2, j runs [0])</h3><pre><code>j=0:  [ 2,  1,  4,  5]
        0   1   2   3
        ↑   ↑
        swap            2 &gt; 1 → swap
    → [ 1,  2,  4,  5]</code></pre><p>End of Pass 3: <code>[1, 2, 4, 5]</code></p><pre><code>    → [ 1,  2,  4,  5]
       ┌─────────────┐
       │1,  2,  4,  5│  ← sorted ✓
       └─────────────┘</code></pre>

<h3>Pass 4 (i = 3)</h3><p>The inner loop condition <code>j &lt; size - i - 1</code> becomes <code>j &lt; 0</code>, so it never runs. The array is already fully sorted.</p><ul><li>Outer loop: <code>for (i = 0; i &lt; size; i++)</code></li><li>Inner loop: <code>for (j = 0; j &lt; size - i - 1; j++)</code> — when <code>i = 0</code>: <code>j &lt; 4 - 0 - 1</code> → <code>j &lt; 3</code>, so <code>j</code> runs through <code>[0, 1, 2]</code></li></ul><p>Each inner-loop pass compares <code>arr[j]</code> with <code>arr[j + 1]</code> and swaps them if <code>arr[j] &gt; arr[j + 1]</code>. Then <code>i</code> increases, and the inner loop runs over a slightly smaller range each time.</p>

<h2>Interactive Visualizer</h2><p>Step forwards one move at a time through the real algorithm. The pipeline above the array reads left to right, and the emphasis colours map to the algorithm&rsquo;s moves: compare (dashed), swap (red), key or pivot (accent), merged halves, and green for everything that is already in its final position. Change the array preset and the whole run recomputes from the algorithm.</p><div class="bs-wrap" id="bubble-wrap" data-array="[7,3,4,8,13,11,9,1]"></div><p class="bs-guide">Tip: <strong>Step</strong> shows one compare and then its swap, <strong>Reset</strong> rewinds, and <strong>Play</strong> runs every pass. Once a pass performs no swaps the array is already sorted and the run stops early.</p>
<h2>Why It Works</h2><ul><li>On every full inner-loop pass, the largest remaining element "bubbles" up to the last unsorted position.</li><li>So the biggest element gets sorted into the last position, and the same loops run until all array elements are sorted.</li></ul>` },
      { id: "sort-03", title: "Selection Sort", difficulty: "beginner", time: "5 min", desc: "Find the minimum element and place it at the front, one swap per pass.",
        content: `<h1>Selection Sort</h1><span class="step-badge">Chapter 3</span>

<h2>Algorithm Dry Run</h2><p>Array:</p><pre><code>[13, 46, 24, 52, 20,  9]
  0   1   2   3   4   5</code></pre>

<h3>Step 1</h3><pre><code>[13, 46, 24, 52, 20,  9]
  0   1   2   3   4   5
  ↑                   ↑
  └─────── swap ──────┘</code></pre>

<p>9 is the minimum in the array, so it swaps with 13 (index 0) → <code>[9, 46, 24, 52, 20, 13]</code></p>

<p>End of Step 1: <code>[9, 46, 24, 52, 20, 13]</code></p>

<pre><code>[ 9, 46, 24, 52, 20, 13]
 ┌─┐
 │9│  ← sorted
 └─┘</code></pre>

<h3>Step 2</h3><pre><code>[ 9, 46, 24, 52, 20, 13]
  0   1   2   3   4   5
      ↑               ↑
      └───── swap ────┘</code></pre>

<p>13 is the minimum of the remaining unsorted part (index 1-5), so it swaps with 46 (index 1) → <code>[9, 13, 24, 52, 20, 46]</code></p>

<p>End of Step 2: <code>[9, 13, 24, 52, 20, 46]</code></p>

<pre><code>[ 9, 13, 24, 52, 20, 46]
 ┌─────┐
 │9, 13│  ← sorted
 └─────┘</code></pre>

<h3>Step 3</h3><pre><code>[ 9, 13, 24, 52, 20, 46]
  0   1   2   3   4   5
          ↑       ↑
          └─ swap ┘</code></pre>

<p>20 is the minimum of indices 2-5, so it swaps with 24 (index 2) → <code>[9, 13, 20, 52, 24, 46]</code></p>

<p>End of Step 3: <code>[9, 13, 20, 52, 24, 46]</code></p>

<pre><code>[ 9, 13, 20, 52, 24, 46]
 ┌─────────┐
 │9, 13, 20│  ← sorted
 └─────────┘</code></pre>

<h3>Step 4</h3><pre><code>[ 9, 13, 20, 52, 24, 46]
  0   1   2   3   4   5
              ↑   ↑
              └swap┘</code></pre>

<p>24 is the minimum of indices 3-5, so it swaps with 52 (index 3) → <code>[9, 13, 20, 24, 52, 46]</code></p>

<p>End of Step 4: <code>[9, 13, 20, 24, 52, 46]</code></p>

<pre><code>[ 9, 13, 20, 24, 52, 46]
 ┌─────────────┐
 │9, 13, 20, 24│  ← sorted
 └─────────────┘</code></pre>

<h3>Step 5</h3><pre><code>[ 9, 13, 20, 24, 52, 46]
  0   1   2   3   4   5
                  ↑   ↑
                  └swap┘</code></pre>

<p>46 is the minimum of indices 4-5, so it swaps with 52 (index 4) → <code>[9, 13, 20, 24, 46, 52]</code></p>

<p>End of Step 5: <code>[9, 13, 20, 24, 46, 52]</code></p>

<pre><code>[ 9, 13, 20, 24, 46, 52]
 ┌─────────────────┐
 │9, 13, 20, 24, 46│  ← sorted ✓
 └─────────────────┘</code></pre>

<h2>Basic Working → Select minimum &amp; swap</h2><ul><li><strong>1st step</strong> → swap happens at index 0 with the minimum in the array</li><li><strong>2nd step</strong> → swap happens at index 1 with the minimum in the array</li><li><strong>3rd step</strong> → swap happens at index 2 with the minimum in the array</li><li>It continues until the array is sorted.</li></ul>

<h2>Interactive Visualizer</h2><p>Step forwards one move at a time through the real algorithm. The pipeline above the array reads left to right, and the emphasis colours map to the algorithm&rsquo;s moves: compare (dashed), swap (red), key or pivot (accent), merged halves, and green for everything that is already in its final position. Change the array preset and the whole run recomputes from the algorithm.</p><div class="bs-wrap" id="selection-wrap" data-array="[7,3,4,8,13,11,9,1]"></div><p class="bs-guide">Tip: watch the running minimum (accent) travel through the unsorted part in orange, then a single swap locks it into the front of the array in green.</p>
<h2>Code for Selection Sort</h2><pre><code>for (int i = 0; i &lt; n - 1; i++) {
    int minIndex = i; // assume current index is the minimum

    for (int j = i + 1; j &lt; n; j++) {
        if (arr[j] &lt; arr[minIndex]) {
            minIndex = j;
        }
    }

    swap(arr[minIndex], arr[i]);
}</code></pre>

<blockquote><strong>Note:</strong> some notebooks show the update line as <code>j = min</code> — read here as <code>minIndex = j</code> (updating the tracked minimum index), since that is the standard pattern and it matches the dry run above.</blockquote>

<h2>Trace of the <code>if</code> check (finding the minimum, Step 1)</h2><pre><code>arr[] = {13, 46, 24, 52, 20, 9}

if (arr[j] &lt; arr[minIndex])

13 &lt; 13   ✗
46 &lt; 13   ✗
24 &lt; 13   ✗
52 &lt; 13   ✗
20 &lt; 13   ✗
9  &lt; 13   ✓ → swap 13 with 9</code></pre>

<p>We get: <code>[9, 46, 24, 52, 20, 13]</code></p>` },
      { id: "sort-04", title: "Insertion Sort", difficulty: "beginner", time: "5 min", desc: "Take the current element as key and shift all larger elements one step right.",
        content: `<h1>Insertion Sort</h1><span class="step-badge">Chapter 4</span>

<p>Insertion sort works like sorting playing cards in your hand. You take the next card and slide it left by swapping it with its left neighbour, one index at a time, until it settles in the right spot.</p>

<h2>Core Idea</h2><ol><li>Start at <code>i = 1</code>, because the first element is already in place on its own.</li><li>Set <code>j = i - 1</code>, the index just behind <code>i</code>.</li><li>While <code>j &gt;= 0</code> and <code>arr[j] &gt; arr[j + 1]</code>, swap the pair and step <code>j</code> one index left.</li><li>Stop when <code>j</code> falls below 0, or when the pair is already in order — the card is now in place.</li></ol>

<h2>Algorithm Dry Run</h2><p>Array:</p><pre><code>[ 5,  3,  8,  1,  2]
  0   1   2   3   4</code></pre>

<h3>Step 1 (i = 1, j = i - 1 = 0)</h3>

<pre><code>[ 5,  3,  8,  1,  2]
  0   1   2   3   4
      ↑
                       i = 1 and j = i - 1 = 0

[ 5,  3,  8,  1,  2]
  0   1   2   3   4
  ↑   ↑
                       5 &gt; 3 → swap arr[0] with arr[1]</code></pre>

<p>5 is bigger than 3, so the pair is swapped and j steps left past index 0, which ends the step → <code>[3, 5, 8, 1, 2]</code></p>

<p>End of Step 1: <code>[3, 5, 8, 1, 2]</code></p>

<pre><code>[ 3,  5,  8,  1,  2]
 ┌─────┐
 │3,  5│  ← sorted
 └─────┘</code></pre>

<h3>Step 2 (i = 2, j = i - 1 = 1)</h3>

<pre><code>[ 3,  5,  8,  1,  2]
  0   1   2   3   4
          ↑
                       i = 2 and j = i - 1 = 1

[ 3,  5,  8,  1,  2]
  0   1   2   3   4
      ↑   ↑
                       5 &lt; 8 → stop the walk</code></pre>

<p>5 is smaller than 8, so the walk stops at once and nothing moves → <code>[3, 5, 8, 1, 2]</code></p>

<p>End of Step 2: <code>[3, 5, 8, 1, 2]</code></p>

<pre><code>[ 3,  5,  8,  1,  2]
 ┌─────────┐
 │3,  5,  8│  ← sorted
 └─────────┘</code></pre>

<h3>Step 3 (i = 3, j = i - 1 = 2)</h3>

<pre><code>[ 3,  5,  8,  1,  2]
  0   1   2   3   4
              ↑
                       i = 3 and j = i - 1 = 2

[ 3,  5,  8,  1,  2]
  0   1   2   3   4
          ↑   ↑
                       8 &gt; 1 → swap arr[2] with arr[3]

[ 3,  5,  1,  8,  2]
  0   1   2   3   4
      ↑   ↑
                       5 &gt; 1 → swap arr[1] with arr[2]

[ 3,  1,  5,  8,  2]
  0   1   2   3   4
  ↑   ↑
                       3 &gt; 1 → swap arr[0] with arr[1]</code></pre>

<p>8, 5 and 3 are all bigger than 1, so every swap steps j one index left until 1 sits at index 0 → <code>[1, 3, 5, 8, 2]</code></p>

<p>End of Step 3: <code>[1, 3, 5, 8, 2]</code></p>

<pre><code>[ 1,  3,  5,  8,  2]
 ┌─────────────┐
 │1,  3,  5,  8│  ← sorted
 └─────────────┘</code></pre>

<h3>Step 4 (i = 4, j = i - 1 = 3)</h3>

<pre><code>[ 1,  3,  5,  8,  2]
  0   1   2   3   4
                  ↑
                       i = 4 and j = i - 1 = 3

[ 1,  3,  5,  8,  2]
  0   1   2   3   4
              ↑   ↑
                       8 &gt; 2 → swap arr[3] with arr[4]

[ 1,  3,  5,  2,  8]
  0   1   2   3   4
          ↑   ↑
                       5 &gt; 2 → swap arr[2] with arr[3]

[ 1,  3,  2,  5,  8]
  0   1   2   3   4
      ↑   ↑
                       3 &gt; 2 → swap arr[1] with arr[2]

[ 1,  2,  3,  5,  8]
  0   1   2   3   4
  ↑   ↑
                       1 &lt; 2 → stop the walk</code></pre>

<p>8, 5 and 3 are all bigger than 2, so j steps left until 1 stops it at index 0 → <code>[1, 2, 3, 5, 8]</code></p>

<p>End of Step 4: <code>[1, 2, 3, 5, 8]</code></p>

<pre><code>[ 1,  2,  3,  5,  8]
 ┌─────────────────┐
 │1,  2,  3,  5,  8│  ← sorted ✓
 └─────────────────┘</code></pre>

<h2>Basic Working → Both <code>i</code> and <code>j</code> are indexes</h2><ul><li><strong>i = 1</strong> → <code>j = i - 1 = 0</code>, only arr[0] and arr[1] are compared</li><li><strong>i = 2</strong> → <code>j = 1</code>, the sorted part on the left is now [3, 5]</li><li><strong>i = 3</strong> → <code>j = 2</code>, the whole left part is swapped right one at a time</li><li>It continues until every index has been placed and the array is sorted.</li></ul>

<h2>C Code</h2><pre><code>void insertionSort(int arr[], int n)
{
    for (int i = 1; i &lt; n; i++)
    {
        int j = i - 1;             // j starts just behind i

        while (j &gt;= 0 &amp;&amp; arr[j] &gt; arr[j + 1])
        {
            swap(arr[j], arr[j + 1]);
            j--;
        }
    }
}</code></pre>

<h2>Interactive Visualizer</h2><p>Step forwards one move at a time through the real algorithm. The pipeline above the array reads left to right, and the emphasis colours map to the algorithm&rsquo;s moves: compare (dashed), swap (red), key or pivot (accent), merged halves, and green for everything that is already in its final position. Change the array preset and the whole run recomputes from the algorithm.</p><div class="bs-wrap" id="insertion-wrap" data-array="[7,3,4,8,13,11,9,1]"></div><p class="bs-guide">Tip: keep an eye on the key tile while everything larger than it is shifted one step right, then watch it drop into the freshly opened gap.</p>
<h2>Complexity</h2><table><thead><tr><th>Case</th><th>Time</th><th>When</th></tr></thead><tbody><tr><td>Best</td><td>O(n)</td><td>Already sorted — the while loop never runs</td></tr><tr><td>Average</td><td>O(n²)</td><td>Random data</td></tr><tr><td>Worst</td><td>O(n²)</td><td>Reverse sorted</td></tr></tbody></table>

<p><strong>Space:</strong> O(1) — in place. <strong>Stable:</strong> yes. The number of swaps equals the number of inversions.</p>

<h2>When Insertion Sort Shines</h2><ul><li>Small arrays (under ~10 elements) — many real libraries use it inside quicksort.</li><li>Nearly sorted data, where it behaves almost like O(n).</li><li>Inserting one element into an already sorted list — no need to sort everything again.</li></ul>

<blockquote>Insertion sort is the fastest simple sort when the data is small or almost sorted, and it is the only simple sort that handles linked lists naturally.</blockquote>` },
      { id: "sort-05", title: "Quick Sort", difficulty: "intermediate", time: "6 min", desc: "Divide and conquer with a pivot, partition step and recursion.",
        content: `<h1>Quick Sort</h1><span class="step-badge">Chapter 5</span>

<p>Quick sort picks one element as the <strong>pivot</strong>, then rearranges the array so that everything smaller sits on its left and everything bigger on its right. Once the pivot is in the middle with its final index, the same job is repeated on the left part and the right part.</p>

<h2>Core Idea</h2><ol><li><strong>Pick</strong> a pivot — here <code>a[low]</code>.</li><li><strong>Walk</strong> <code>i</code> right and <code>j</code> left until they meet or cross.</li><li><strong>Swap</strong> every out-of-order pair, then swap the pivot into the spot <code>j</code> landed on.</li><li><strong>Recurse</strong> on the left part and the right part, which are both shorter.</li></ol>

<h2>Algorithm Dry Run</h2><p>Array:</p><pre><code>[65, 34, 99, 18, 78, 25, 84]
  0   1   2   3   4   5   6</code></pre>

<h3>Step 1 → partition(0, 6) pivot 65</h3>

<pre><code>[65, 34, 99, 18, 78, 25, 84]
  0   1   2   3   4   5   6
      ↑                   ↑
                               pivot = a[0] = 65, i = 1, j = 6

[65, 34, 99, 18, 78, 25, 84]
  0   1   2   3   4   5   6
      ↑                   ↑
                               i scan: 34 &lt;= 65 ✓, 99 &lt;= 65 ✗ → i = 2

[65, 34, 99, 18, 78, 25, 84]
  0   1   2   3   4   5   6
          ↑           ↑
                               j scan: 84 &gt; 65 ✓, 25 &gt; 65 ✗ → j = 5

[65, 34, 99, 18, 78, 25, 84]
  0   1   2   3   4   5   6
          ↑           ↑
                               i = 2 &lt; j = 5 → swap a[2] with a[5]

[65, 34, 25, 18, 78, 99, 84]
  0   1   2   3   4   5   6
          ↑           ↑
                               i scan: 25 &lt;= 65 ✓, 18 &lt;= 65 ✓, 78 &lt;= 65 ✗ → i = 4

[65, 34, 25, 18, 78, 99, 84]
  0   1   2   3   4   5   6
              ↑   ↑
                               j scan: 99 &gt; 65 ✓, 78 &gt; 65 ✓, 18 &gt; 65 ✗ → j = 3

[65, 34, 25, 18, 78, 99, 84]
  0   1   2   3   4   5   6
              ↑   ↑
                               i = 4 &gt; j = 3 → the walk is over, break

[65, 34, 25, 18, 78, 99, 84]
  0   1   2   3   4   5   6
  ↑           ↑
                               swap a[0] with a[3] → pivot 65 is now at index 3</code></pre>

<p>the walk crosses over (i = 4, j = 3), so the pivot is swapped into index 3 and 65 never moves again → <code>[18, 34, 25, 65, 78, 99, 84]</code></p>

<p>End of Step 1: <code>[18, 34, 25, 65, 78, 99, 84]</code></p>

<pre><code>[18, 34, 25, 65, 78, 99, 84]
            ┌──┐
            │65│  ← final position
            └──┘</code></pre>

<h3>Step 2 → partition(0, 2) pivot 18</h3>

<pre><code>[18, 34, 25, 65, 78, 99, 84]
  0   1   2   3   4   5   6
      ↑   ↑
                               pivot = a[0] = 18, i = 1, j = 2

[18, 34, 25, 65, 78, 99, 84]
  0   1   2   3   4   5   6
      ↑   ↑
                               i scan: 34 &lt;= 18 ✗ → i = 1

[18, 34, 25, 65, 78, 99, 84]
  0   1   2   3   4   5   6
  ↑   ↑
                               j scan: 25 &gt; 18 ✓, 34 &gt; 18 ✓, 18 &gt; 18 ✗ → j = 0

[18, 34, 25, 65, 78, 99, 84]
  0   1   2   3   4   5   6
  ↑   ↑
                               i = 1 &gt; j = 0 → the walk is over, break

[18, 34, 25, 65, 78, 99, 84]
  0   1   2   3   4   5   6
  ↑
                               swap a[0] with a[0] → a[0] swaps with itself, nothing moves</code></pre>

<p>j is pulled all the way to index 0 by the pivot itself, so 18 is already in its final spot and nothing moves → <code>[18, 34, 25, 65, 78, 99, 84]</code></p>

<p>End of Step 2: <code>[18, 34, 25, 65, 78, 99, 84]</code></p>

<pre><code>[18, 34, 25, 65, 78, 99, 84]
┌──┐
│18│  ← final position
└──┘</code></pre>

<h3>Step 3 → partition(1, 2) pivot 34</h3>

<pre><code>[18, 34, 25, 65, 78, 99, 84]
  0   1   2   3   4   5   6
          ↑
                               pivot = a[1] = 34, i = 2, j = 2

[18, 34, 25, 65, 78, 99, 84]
  0   1   2   3   4   5   6
      ↑   ↑
                               swap a[1] with a[2] → pivot 34 is now at index 2</code></pre>

<p>the main loop never runs, because i = 2 is not less than j = 2, and the final swap puts 34 at index 2 → <code>[18, 25, 34, 65, 78, 99, 84]</code></p>

<p>End of Step 3: <code>[18, 25, 34, 65, 78, 99, 84]</code></p>

<pre><code>[18, 25, 34, 65, 78, 99, 84]
        ┌──┐
        │34│  ← final position
        └──┘</code></pre>

<h3>Step 4 → partition(4, 6) pivot 78</h3>

<pre><code>[18, 25, 34, 65, 78, 99, 84]
  0   1   2   3   4   5   6
                      ↑   ↑
                               pivot = a[4] = 78, i = 5, j = 6

[18, 25, 34, 65, 78, 99, 84]
  0   1   2   3   4   5   6
                      ↑   ↑
                               i scan: 99 &lt;= 78 ✗ → i = 5

[18, 25, 34, 65, 78, 99, 84]
  0   1   2   3   4   5   6
                  ↑   ↑
                               j scan: 84 &gt; 78 ✓, 99 &gt; 78 ✓, 78 &gt; 78 ✗ → j = 4

[18, 25, 34, 65, 78, 99, 84]
  0   1   2   3   4   5   6
                  ↑   ↑
                               i = 5 &gt; j = 4 → the walk is over, break

[18, 25, 34, 65, 78, 99, 84]
  0   1   2   3   4   5   6
                  ↑
                               swap a[4] with a[4] → a[4] swaps with itself, nothing moves</code></pre>

<p>same shape as step 2: 78 is the smallest of the three, so the partition is a no-op → <code>[18, 25, 34, 65, 78, 99, 84]</code></p>

<p>End of Step 4: <code>[18, 25, 34, 65, 78, 99, 84]</code></p>

<pre><code>[18, 25, 34, 65, 78, 99, 84]
                ┌──┐
                │78│  ← final position
                └──┘</code></pre>

<h3>Step 5 → partition(5, 6) pivot 99</h3>

<pre><code>[18, 25, 34, 65, 78, 99, 84]
  0   1   2   3   4   5   6
                          ↑
                               pivot = a[5] = 99, i = 6, j = 6

[18, 25, 34, 65, 78, 99, 84]
  0   1   2   3   4   5   6
                      ↑   ↑
                               swap a[5] with a[6] → pivot 99 is now at index 6</code></pre>

<p>the main loop never runs, and the final swap puts 99 at index 6 → <code>[18, 25, 34, 65, 78, 84, 99]</code></p>

<p>End of Step 5: <code>[18, 25, 34, 65, 78, 84, 99]</code></p>

<pre><code>[18, 25, 34, 65, 78, 84, 99]
┌──────────────────────────┐
│18, 25, 34, 65, 78, 84, 99│  ← sorted ✓
└──────────────────────────┘</code></pre>

<h2>Basic Working → every <code>partition()</code> call</h2><ul><li><code>partition(0, 6)</code> → puts 65 at index 3</li><li><code>partition(0, 2)</code> → puts 18 at index 0</li><li><code>partition(1, 2)</code> → puts 34 at index 2</li><li><code>partition(4, 6)</code> → puts 78 at index 4</li><li><code>partition(5, 6)</code> → puts 99 at index 6</li></ul>

<h2>Partition Tree</h2><p>Each node is one <code>partition()</code> call, and the tree splits exactly where the pivot landed:</p><div class="st2-wrap"><div class="st2-canvas" style="width:693px;height:668px;"><svg class="st2-lines st2-lines-split" width="693" height="668" viewBox="0 0 693 668" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><line x1="304.5" y1="72.0" x2="304.5" y2="100.0"/><line x1="136.5" y1="100.0" x2="472.5" y2="100.0"/><line x1="136.5" y1="100.0" x2="136.5" y2="128.0"/><line x1="472.5" y1="100.0" x2="472.5" y2="128.0"/><line x1="136.5" y1="240.0" x2="136.5" y2="268.0"/><line x1="52.5" y1="268.0" x2="220.5" y2="268.0"/><line x1="52.5" y1="268.0" x2="52.5" y2="332.0"/><line x1="220.5" y1="268.0" x2="220.5" y2="296.0"/><line x1="220.5" y1="408.0" x2="220.5" y2="454.0"/><line x1="164.5" y1="454.0" x2="276.5" y2="454.0"/><line x1="164.5" y1="454.0" x2="164.5" y2="500.0"/><line x1="276.5" y1="454.0" x2="276.5" y2="500.0"/><line x1="472.5" y1="240.0" x2="472.5" y2="268.0"/><line x1="388.5" y1="268.0" x2="556.5" y2="268.0"/><line x1="388.5" y1="268.0" x2="388.5" y2="332.0"/><line x1="556.5" y1="268.0" x2="556.5" y2="296.0"/><line x1="556.5" y1="408.0" x2="556.5" y2="454.0"/><line x1="500.5" y1="454.0" x2="612.5" y2="454.0"/><line x1="500.5" y1="454.0" x2="500.5" y2="500.0"/><line x1="612.5" y1="454.0" x2="612.5" y2="500.0"/><line x1="304.5" y1="556.0" x2="304.5" y2="592.0"/><path class="st2-arrow" d="M298.5 578.0 L 304.5 592.0 L 310.5 578.0"/></svg><div class="st2-node" style="width:261.9px;height:112px;left:173.6px;top:-40.0px;"><span class="st2-label">[65, 34, 99, 18, 78, 25, 84]</span><span class="st2-meta">partition(0, 6) · pivot 65 → index 3</span><span class="st2-ranges">left (0, 2) · right (4, 6)</span><span class="st2-tag">After partition</span><span class="st2-result">[18, 34, 25] [65] [78, 99, 84]</span></div><div class="st2-node" style="width:241.0px;height:112px;left:16.0px;top:128.0px;"><span class="st2-label">[18, 34, 25]</span><span class="st2-meta">partition(0, 2) · pivot 18 → index 0</span><span class="st2-ranges">left ∅ · right (1, 2)</span><span class="st2-tag">After partition</span><span class="st2-result">[18] [34, 25]</span></div><div class="st2-node" style="width:44.2px;height:40px;left:30.4px;top:332.0px;"><span class="st2-label">[∅]</span></div><div class="st2-node" style="width:241.0px;height:112px;left:100.0px;top:296.0px;"><span class="st2-label">[34, 25]</span><span class="st2-meta">partition(1, 2) · pivot 34 → index 2</span><span class="st2-ranges">left (1, 1) · right ∅</span><span class="st2-tag">After partition</span><span class="st2-result">[25] [34]</span></div><div class="st2-node" style="width:52.2px;height:40px;left:138.4px;top:500.0px;"><span class="st2-label">[25]</span></div><div class="st2-node" style="width:44.2px;height:40px;left:254.4px;top:500.0px;"><span class="st2-label">[∅]</span></div><div class="st2-node" style="width:241.0px;height:112px;left:352.0px;top:128.0px;"><span class="st2-label">[78, 99, 84]</span><span class="st2-meta">partition(4, 6) · pivot 78 → index 4</span><span class="st2-ranges">left ∅ · right (5, 6)</span><span class="st2-tag">After partition</span><span class="st2-result">[78] [99, 84]</span></div><div class="st2-node" style="width:44.2px;height:40px;left:366.4px;top:332.0px;"><span class="st2-label">[∅]</span></div><div class="st2-node" style="width:241.0px;height:112px;left:436.0px;top:296.0px;"><span class="st2-label">[99, 84]</span><span class="st2-meta">partition(5, 6) · pivot 99 → index 6</span><span class="st2-ranges">left (5, 5) · right ∅</span><span class="st2-tag">After partition</span><span class="st2-result">[84] [99]</span></div><div class="st2-node" style="width:52.2px;height:40px;left:474.4px;top:500.0px;"><span class="st2-label">[84]</span></div><div class="st2-node" style="width:44.2px;height:40px;left:590.4px;top:500.0px;"><span class="st2-label">[∅]</span></div><div class="st2-node" style="width:245.8px;height:56px;left:181.6px;top:596.0px;"><span class="st2-label">[18, 25, 34, 65, 78, 84, 99]</span><span class="st2-tag">Sorted Array</span></div></div></div>

<p><code>[ ∅ ]</code> is the empty side of the split: when a pivot lands at the very edge of its range (18 → index 0, 78 → index 4, 99 → index 6), one half has no elements left, so no recursive call is made for it.</p>

<h2>C Code</h2><pre><code>void quickSort(int a[], int low, int high)
{
    if (low &gt;= high) return;
    int p = partition(a, low, high);
    quickSort(a, low, p - 1);
    quickSort(a, p + 1, high);
}

int partition(int a[], int low, int high)
{
    int pivot = a[low];
    int i = low + 1;
    int j = high;

    while (i &lt; j) {
        while (i &lt;= high &amp;&amp; a[i] &lt;= pivot) i++;
        while (a[j] &gt; pivot) j--;
        if (i &gt; j) break;
        swap(a[i], a[j]);
    }

    swap(a[low], a[j]);
    return j;
}</code></pre>

<h2>Interactive Visualizer</h2><p>Step forwards one move at a time through the real algorithm. The pipeline above the array reads left to right, and the emphasis colours map to the algorithm&rsquo;s moves: compare (dashed), swap (red), key or pivot (accent), merged halves, and green for everything that is already in its final position. Change the array preset and the whole run recomputes from the algorithm.</p><div class="bs-wrap" id="quick-wrap" data-array="[7,3,4,8,13,11,9,1]"></div><p class="bs-guide">Tip: the pivot is amber. Smaller values swap left of it, bigger ones stay right, and then the pivot settles in its exact final position in green.</p>
<h2>Complexity</h2><table><thead><tr><th>Case</th><th>Time</th><th>When</th></tr></thead><tbody><tr><td>Best</td><td>O(n log n)</td><td>The pivot keeps landing in the middle</td></tr><tr><td>Average</td><td>O(n log n)</td><td>Random data</td></tr><tr><td>Worst</td><td>O(n²)</td><td>Sorted or reverse sorted with a[low] as pivot</td></tr></tbody></table>

<p><strong>Space:</strong> O(log n) on average from the recursion stack. <strong>Stable:</strong> no.</p>

<h2>When Quick Sort Shines</h2><ul><li>Large arrays — it is the fastest general-purpose sort in practice.</li><li>Arrays that are nearly sorted, as long as the pivot is not always taken from one end.</li><li>It sorts in place, so no extra array is needed for the data itself.</li></ul>

<blockquote>Quick sort is the fastest comparison sort in practice, and picking the pivot carefully is what keeps the O(n²) worst case away.</blockquote>` },
      { id: "sort-06", title: "Merge Sort", difficulty: "intermediate", time: "6 min", desc: "Split into halves, sort each half, then merge them back in order.",
        content: `<h1>Merge Sort</h1><span class="step-badge">Chapter 6</span>

<p>Merge sort is a pure <strong>divide and conquer</strong> algorithm: split the array into two halves, sort each half recursively, then <strong>merge</strong> the two sorted halves back into one sorted array. Because the halves are always equal in size, every case runs in <strong>O(n log n)</strong>.</p>

<h2>Divide &amp; Merge</h2><p>The recursion splits the range at its middle: halving gives <code>log2(n)</code> levels and each level costs <code>O(n)</code>, so the total is <strong>O(n log n)</strong>. Here is the array:</p><pre><code>[13,  9,  7, 12,  6,  9, 12]
  0   1   2   3   4   5   6</code></pre>

<p>To find the middle we use <code>low + (high - low) / 2</code> — the subtraction keeps the mid safe from integer overflow:</p>
<pre><code>mid = low + (high - low) / 2
mid = 0 + (6 - 0) / 2 = 0 + 3 → 3</code></pre>

<h2>Divide Step</h2><p>First the range splits into a left half and a right half:</p>
<pre><code>[13, 9, 7, 12]                [6, 9, 12]
low=0   mid=3             mid+1=4 high=6</code></pre>
<p>Each half keeps dividing the same way, until every part holds a single element:</p>
<pre><code>[13, 9]  [7, 12]  [6, 9]  [12]
[13] [9] [7] [12] [6] [9] [12]</code></pre>

<h2>Merge Step → Working Back Up</h2><p>Now the halves are joined back together, always taking the smaller of the two current elements. Each merge reads two sorted halves and writes one sorted result back into the array:</p>

<h3>Step 1 → merge(0, 0, 1): [13] and [9]</h3>

<pre><code>left:  [13]             right: [9]
        ↓                       ↓
   compare 13 vs 9 → 9 &lt; 13 → take 9 (right)
   right exhausted → take remaining 13 (left)

temp = [9, 13]</code></pre>

<p>the right side takes its 9 first, then the leftover 13 is copied — the two single elements come back as one sorted pair → <code>[9, 13]</code></p>

<p>End of Step 1: <code>[9, 13, 7, 12, 6, 9, 12]</code></p>

<pre><code>[ 9, 13,  7, 12,  6,  9, 12]
 ┌─────┐
 │9, 13│  ← merged region
 └─────┘</code></pre>

<h3>Step 2 → merge(2, 2, 3): [7] and [12]</h3>

<pre><code>left:  [7]              right: [12]
        ↓                       ↓
   compare 7 vs 12 → 7 &lt;= 12 → take 7 (left)
   left exhausted → take remaining 12 (right)

temp = [7, 12]</code></pre>

<p>7 ≤ 12 sends the left element first, then the leftover 12 is copied — the two single elements come back as one sorted pair → <code>[7, 12]</code></p>

<p>End of Step 2: <code>[9, 13, 7, 12, 6, 9, 12]</code></p>

<pre><code>[ 9, 13,  7, 12,  6,  9, 12]
         ┌─────┐
         │7, 12│  ← merged region
         └─────┘</code></pre>

<h3>Step 3 → merge(0, 1, 3): [9, 13] and [7, 12]</h3>

<pre><code>left:  [9, 13]          right: [7, 12]
        ↓                       ↓
   compare 9 vs 7 → 7 &lt; 9 → take 7 (right)
   compare 9 vs 12 → 9 &lt;= 12 → take 9 (left)
   compare 13 vs 12 → 12 &lt; 13 → take 12 (right)
   right exhausted → take remaining 13 (left)

temp = [7, 9, 12, 13]</code></pre>

<p>right 7 leads, then 9 from the left beats 12, then 12 from the right, and 13 is copied last → <code>[7, 9, 12, 13]</code></p>

<p>End of Step 3: <code>[7, 9, 12, 13, 6, 9, 12]</code></p>

<pre><code>[ 7,  9, 12, 13,  6,  9, 12]
 ┌─────────────┐
 │7,  9, 12, 13│  ← merged region
 └─────────────┘</code></pre>

<h3>Step 4 → merge(4, 4, 5): [6] and [9]</h3>

<pre><code>left:  [6]              right: [9]
        ↓                       ↓
   compare 6 vs 9 → 6 &lt;= 9 → take 6 (left)
   left exhausted → take remaining 9 (right)

temp = [6, 9]</code></pre>

<p>6 ≤ 9 sends the left element first, then the leftover 9 is copied — the two single elements come back as one sorted pair → <code>[6, 9]</code></p>

<p>End of Step 4: <code>[7, 9, 12, 13, 6, 9, 12]</code></p>

<pre><code>[ 7,  9, 12, 13,  6,  9, 12]
                 ┌─────┐
                 │6,  9│  ← merged region
                 └─────┘</code></pre>

<h3>Step 5 → merge(4, 5, 6): [6, 9] and [12]</h3>

<pre><code>left:  [6, 9]           right: [12]
        ↓                       ↓
   compare 6 vs 12 → 6 &lt;= 12 → take 6 (left)
   compare 9 vs 12 → 9 &lt;= 12 → take 9 (left)
   left exhausted → take remaining 12 (right)

temp = [6, 9, 12]</code></pre>

<p>both left elements win, then the leftover 12 from the right is copied → <code>[6, 9, 12]</code></p>

<p>End of Step 5: <code>[7, 9, 12, 13, 6, 9, 12]</code></p>

<pre><code>[ 7,  9, 12, 13,  6,  9, 12]
                 ┌─────────┐
                 │6,  9, 12│  ← merged region
                 └─────────┘</code></pre>

<h3>Step 6 → merge(0, 3, 6): [7, 9, 12, 13] and [6, 9, 12]</h3>

<pre><code>left:  [7, 9, 12, 13]   right: [6, 9, 12]
        ↓                       ↓
   compare 7 vs 6 → 6 &lt; 7 → take 6 (right)
   compare 7 vs 9 → 7 &lt;= 9 → take 7 (left)
   compare 9 vs 9 → 9 &lt;= 9 → take 9 (left)
   compare 12 vs 9 → 9 &lt; 12 → take 9 (right)
   compare 12 vs 12 → 12 &lt;= 12 → take 12 (left)
   compare 13 vs 12 → 12 &lt; 13 → take 12 (right)
   right exhausted → take remaining 13 (left)

temp = [6, 7, 9, 9, 12, 12, 13]  ← sorted ✓</code></pre>

<p>the equal 9s and equal 12s stay in their original order — the ≤ keeps the sort stable — and the leftover 13 is copied last → <code>[6, 7, 9, 9, 12, 12, 13]</code></p>

<p>End of Step 6: <code>[6, 7, 9, 9, 12, 12, 13]</code></p>

<pre><code>[ 6,  7,  9,  9, 12, 12, 13]
 ┌─────────────────────────┐
 │6,  7,  9,  9, 12, 12, 13│  ← sorted ✓
 └─────────────────────────┘</code></pre>

<h2>Basic Working → every <code>merge()</code> call</h2><ul><li><code>merge(0, 0, 1)</code> → merges [13] and [9] into [9, 13]</li><li><code>merge(2, 2, 3)</code> → merges [7] and [12] into [7, 12]</li><li><code>merge(0, 1, 3)</code> → merges [9, 13] and [7, 12] into [7, 9, 12, 13]</li><li><code>merge(4, 4, 5)</code> → merges [6] and [9] into [6, 9]</li><li><code>merge(4, 5, 6)</code> → merges [6, 9] and [12] into [6, 9, 12]</li><li><code>merge(0, 3, 6)</code> → merges [7, 9, 12, 13] and [6, 9, 12] into [6, 7, 9, 9, 12, 12, 13]</li></ul>

<h2>Merge Sort Tree</h2><p><code>mergeSort()</code> plays both sides of the recursion in one figure below. The top half is the <strong>divide</strong> phase: the original array splits range by range (the <code>mergeSort(low, high) &rarr; mid</code> captions) down to seven single-element leaves in the middle. The bottom half, read on upward after the middle, is the <strong>conquer</strong> phase: the leaves merge in pairs (<code>merge(low, mid, high)</code> captions) until the root holds the final sorted array:</p><div class="st2-wrap"><div class="st2-canvas" style="width:710px;height:681px;"><svg class="st2-lines" width="710" height="680" viewBox="0 0 710 680" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g class="st2-lines-split"><line x1="395.6" y1="40.0" x2="395.6" y2="68.0"/><line x1="200.6" y1="68.0" x2="590.6" y2="68.0"/><line x1="200.6" y1="68.0" x2="200.6" y2="96.0"/><line x1="590.6" y1="68.0" x2="590.6" y2="96.0"/><line x1="200.6" y1="144.0" x2="200.6" y2="172.0"/><line x1="96.6" y1="172.0" x2="304.6" y2="172.0"/><line x1="96.6" y1="172.0" x2="96.6" y2="200.0"/><line x1="304.6" y1="172.0" x2="304.6" y2="200.0"/><line x1="590.6" y1="144.0" x2="590.6" y2="172.0"/><line x1="512.6" y1="172.0" x2="668.6" y2="172.0"/><line x1="512.6" y1="172.0" x2="512.6" y2="200.0"/><line x1="668.6" y1="172.0" x2="668.6" y2="200.0"/><line x1="96.6" y1="248.0" x2="96.6" y2="276.0"/><line x1="44.6" y1="276.0" x2="148.6" y2="276.0"/><line x1="44.6" y1="276.0" x2="44.6" y2="304.0"/><line x1="148.6" y1="276.0" x2="148.6" y2="304.0"/><line x1="304.6" y1="248.0" x2="304.6" y2="276.0"/><line x1="252.6" y1="276.0" x2="356.6" y2="276.0"/><line x1="252.6" y1="276.0" x2="252.6" y2="304.0"/><line x1="356.6" y1="276.0" x2="356.6" y2="304.0"/><line x1="512.6" y1="248.0" x2="512.6" y2="276.0"/><line x1="460.6" y1="276.0" x2="564.6" y2="276.0"/><line x1="460.6" y1="276.0" x2="460.6" y2="304.0"/><line x1="564.6" y1="276.0" x2="564.6" y2="304.0"/><g class="st2-lines-merge"><line x1="200.6" y1="560.0" x2="200.6" y2="588.0"/><line x1="590.6" y1="560.0" x2="590.6" y2="588.0"/><line x1="200.6" y1="588.0" x2="590.6" y2="588.0"/><line x1="395.6" y1="588.0" x2="395.6" y2="616.0"/><line x1="96.6" y1="456.0" x2="96.6" y2="484.0"/><line x1="304.6" y1="456.0" x2="304.6" y2="484.0"/><line x1="96.6" y1="484.0" x2="304.6" y2="484.0"/><line x1="200.6" y1="484.0" x2="200.6" y2="512.0"/><line x1="512.6" y1="456.0" x2="512.6" y2="484.0"/><line x1="668.6" y1="456.0" x2="668.6" y2="484.0"/><line x1="512.6" y1="484.0" x2="668.6" y2="484.0"/><line x1="590.6" y1="484.0" x2="590.6" y2="512.0"/><line x1="44.6" y1="352.0" x2="44.6" y2="380.0"/><line x1="148.6" y1="352.0" x2="148.6" y2="380.0"/><line x1="44.6" y1="380.0" x2="148.6" y2="380.0"/><line x1="96.6" y1="380.0" x2="96.6" y2="408.0"/><line x1="252.6" y1="352.0" x2="252.6" y2="380.0"/><line x1="356.6" y1="352.0" x2="356.6" y2="380.0"/><line x1="252.6" y1="380.0" x2="356.6" y2="380.0"/><line x1="304.6" y1="380.0" x2="304.6" y2="408.0"/><line x1="460.6" y1="352.0" x2="460.6" y2="380.0"/><line x1="564.6" y1="352.0" x2="564.6" y2="380.0"/><line x1="460.6" y1="380.0" x2="564.6" y2="380.0"/><line x1="512.6" y1="380.0" x2="512.6" y2="408.0"/></svg><div class="st2-node" style="width:213.5px;height:48px;left:288.8px;top:-8.0px;"><span class="st2-label">[13, 9, 7, 12, 6, 9, 12]</span><span class="st2-cap">mergeSort(0, 6) → mid 3</span></div><div class="st2-node" style="width:161.2px;height:48px;left:120.0px;top:96.0px;"><span class="st2-label">[13, 9, 7, 12]</span><span class="st2-cap">mergeSort(0, 3) → mid 1</span></div><div class="st2-node" style="width:161.2px;height:48px;left:510.0px;top:96.0px;"><span class="st2-label">[6, 9, 12]</span><span class="st2-cap">mergeSort(4, 6) → mid 5</span></div><div class="st2-node" style="width:161.2px;height:48px;left:16.0px;top:200.0px;"><span class="st2-label">[13, 9]</span><span class="st2-cap">mergeSort(0, 1) → mid 0</span></div><div class="st2-node" style="width:161.2px;height:48px;left:224.0px;top:200.0px;"><span class="st2-label">[7, 12]</span><span class="st2-cap">mergeSort(2, 3) → mid 2</span></div><div class="st2-node" style="width:161.2px;height:48px;left:432.0px;top:200.0px;"><span class="st2-label">[6, 9]</span><span class="st2-cap">mergeSort(4, 5) → mid 4</span></div><div class="st2-node" style="width:52.2px;height:48px;left:642.5px;top:200.0px;"><span class="st2-label">[12]</span></div><div class="st2-node" style="width:52.2px;height:48px;left:18.5px;top:304.0px;"><span class="st2-label">[13]</span></div><div class="st2-node" style="width:44.2px;height:48px;left:126.5px;top:304.0px;"><span class="st2-label">[9]</span></div><div class="st2-node" style="width:44.2px;height:48px;left:230.5px;top:304.0px;"><span class="st2-label">[7]</span></div><div class="st2-node" style="width:52.2px;height:48px;left:330.5px;top:304.0px;"><span class="st2-label">[12]</span></div><div class="st2-node" style="width:44.2px;height:48px;left:438.5px;top:304.0px;"><span class="st2-label">[6]</span></div><div class="st2-node" style="width:44.2px;height:48px;left:542.5px;top:304.0px;"><span class="st2-label">[9]</span></div><div class="st2-node" style="width:213.5px;height:48px;left:288.8px;top:616.0px;"><span class="st2-label">[6, 7, 9, 9, 12, 12, 13]</span><span class="st2-cap">merge(0, 3, 6)</span></div><div class="st2-node" style="width:132.9px;height:48px;left:134.2px;top:512.0px;"><span class="st2-label">[7, 9, 12, 13]</span><span class="st2-cap">merge(0, 1, 3)</span></div><div class="st2-node" style="width:105.9px;height:48px;left:537.6px;top:512.0px;"><span class="st2-label">[6, 9, 12]</span><span class="st2-cap">merge(4, 5, 6)</span></div><div class="st2-node" style="width:105.9px;height:48px;left:43.6px;top:408.0px;"><span class="st2-label">[9, 13]</span><span class="st2-cap">merge(0, 0, 1)</span></div><div class="st2-node" style="width:105.9px;height:48px;left:251.6px;top:408.0px;"><span class="st2-label">[7, 12]</span><span class="st2-cap">merge(2, 2, 3)</span></div><div class="st2-node" style="width:105.9px;height:48px;left:459.6px;top:408.0px;"><span class="st2-label">[6, 9]</span><span class="st2-cap">merge(4, 4, 5)</span></div><div class="st2-node" style="width:52.2px;height:48px;left:642.5px;top:408.0px;"><span class="st2-label">[12]</span></div></div></div><p>Every internal node has two children, because a mid always leaves at least one element on each side. The six merges run in exactly the reverse order of the first tree: <code>[13] + [9]</code>, <code>[7] + [12]</code>, then <code>[9, 13] + [7, 12]</code>, and so on upward to <code>[7, 9, 12, 13] + [6, 9, 12]</code> at the root &mdash; the exact calls listed in <strong>Basic Working</strong> above.</p>

<h2>C Code</h2><p>The <code>merge()</code> function — the comparison lives in the first <code>while</code> loop, and the two leftover loops copy whatever remains:</p>
<pre><code>void merge(int arr[], int low, int mid, int high) {
    int temp[high - low + 1];
    int left = low;       // left half starting point
    int right = mid + 1;  // right half starting point
    int k = 0;

    while (left &lt;= mid &amp;&amp; right &lt;= high) {
        if (arr[left] &lt;= arr[right]) {
            temp[k++] = arr[left++];
        } else {
            temp[k++] = arr[right++];
        }
    }

    while (left &lt;= mid) {
        temp[k++] = arr[left++];
    }

    while (right &lt;= high) {
        temp[k++] = arr[right++];
    }

    for (int i = low; i &lt;= high; i++) {
        arr[i] = temp[i - low];
    }
}</code></pre>
<p>The <code>mergeSort()</code> function only divides and recurses — all the sorting happens inside <code>merge()</code>:</p>
<pre><code>void mergeSort(int arr[], int low, int high) {
    if (low &gt;= high) return;

    int mid = low + (high - low) / 2;

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}</code></pre>

<h2>Key Idea</h2><blockquote><p>Merge sort keeps dividing the array until every part has only one element, then joins those parts back together in sorted order.</p></blockquote>
<p>The <strong>sorting happens during the merge step</strong>. Equal elements are taken from the left half first, so the <code>&lt;=</code> comparison keeps the sort <strong>stable</strong>:</p>
<pre><code>while (left &lt;= mid &amp;&amp; right &lt;= high) {
    if (arr[left] &lt;= arr[right]) {
        temp[k++] = arr[left++];
    } else {
        temp[k++] = arr[right++];
    }
}</code></pre>

<h2>Interactive Visualizer</h2><p>Step forwards one move at a time through the real algorithm. The pipeline above the array reads left to right, and the emphasis colours map to the algorithm&rsquo;s moves: compare (dashed), swap (red), key or pivot (accent), merged halves, and green for everything that is already in its final position. Change the array preset and the whole run recomputes from the algorithm.</p><div class="bs-wrap" id="merge-wrap" data-array="[7,3,4,8,13,11,9,1]"></div><p class="bs-guide">Tip: the two halves being merged are tinted (left orange, right green); watch them combine into Aux and then be written back into the array.</p>
<h2>Complexity</h2><table><thead><tr><th>Case</th><th>Time</th><th>Why it never changes</th></tr></thead><tbody><tr><td>Best</td><td>O(n log n)</td><td>The array always splits into two equal halves</td></tr><tr><td>Average</td><td>O(n log n)</td><td>The tree shape is the same for any data</td></tr><tr><td>Worst</td><td>O(n log n)</td><td>A balanced split never degrades to O(n²)</td></tr></tbody></table>

<p><strong>Space:</strong> O(n) for the temporary array, plus O(log n) recursion stack. <strong>Stable:</strong> yes.</p>

<h2>When Merge Sort Shines</h2><ul><li>Linked lists — merging needs no random access, you can rewire pointers.</li><li>When stability matters — equal elements keep their original order.</li><li>When the worst case must stay O(n log n) — no bad input exists.</li><li>External sorting — big files are sorted in chunks, then merged.</li></ul>

<blockquote>Merge sort trades extra memory for a guaranteed, stable O(n log n): it always needs O(n) extra space instead of sorting in place.</blockquote>` },


                  { id: "sort-08", title: "Radix Sort", difficulty: "intermediate", time: "6 min", desc: "Ten FIFO buckets, one digit at a time, no comparisons needed.",
                    content: `<h1>Radix Sort</h1><span class="step-badge">Chapter 7</span>

<p><strong>Radix sort</strong> (also called <strong>LSD radix sort</strong>), shown here in its bucket form, never compares two elements. Instead it looks at one <strong>digit</strong> of every number at a time and drops each number into one of <strong>10 buckets numbered 0&ndash;9</strong> that match its digit. After every number has been placed, the buckets are collected back in order &mdash; and after as many passes as the biggest number has digits, the array comes out fully sorted.</p>

<h2>Key Idea</h2><blockquote><p>Radix sort uses buckets as FIFO queues &mdash; each pass distributes every number into the bucket for its current digit, then collects the buckets from 0 to 9. Because a queue always keeps first-in-first-out order, the work of every earlier pass is preserved.</p></blockquote>

<h2>The Digits &mdash; HTO</h2><p>Decimal numbers are made of place values, usually remembered as <strong>H</strong>undreds &mdash; <strong>T</strong>ens &mdash; <strong>O</strong>nes. The biggest number here is <code>802</code> (three digits), so we need three passes: ones first, then tens, then hundreds.</p><pre><code>H T O
1 2 3  → place value (how many times 10²…)
8 0 2  → 802 = 8 hundreds, 0 tens, 2 ones
      ^
      → pass 1 reads this O digit
</code></pre>

<h2>Visualizer</h2><p>Stepping forward one move at a time is the clearest way to see the FIFO rule: a number drops out of the <strong>input</strong>, lands on top of its bucket&rsquo;s stack, and during collection leaves from the <em>bottom</em> of the stack &mdash; the earliest value in exits first &mdash; bucket 0 first, bucket 9 last.</p><div class="bs-wrap" id="bs-wrap" data-array="[9,45,802,3,67,100]"></div><p class="bs-guide">Tip: <strong>Step</strong> shows one move at a time, <strong>Reset</strong> rewinds, and <strong>Play</strong> runs all three passes at a comfortable speed. Watch the <code>O</code>/<code>T</code>/<code>H</code> highlight above the buckets &mdash; it marks the digit each pass is reading.</p>

<h2>Radix Sort &mdash; Pass by Pass</h2><p>Initial array: <code>[9, 45, 802, 3, 67, 100]</code></p>

<h3>Pass 1 of 3 &mdash; ONES digit (O)</h3><p>Pass 1 of 3 &mdash; read the <strong>ones (O)</strong> digit. First every number is placed into the bucket for its ones (O) digit:</p><pre><code>bucket 00  [100]
bucket 02  [802]
bucket 03  [3]
bucket 05  [45]
bucket 07  [67]
bucket 09  [9]</code></pre><p>Collecting every non-empty bucket from 0 to 9 &mdash; each queue shifted from its front &mdash; gives:</p><pre><code>[100, 802, 3, 45, 67, 9]</code></pre>

<h3>Pass 2 of 3 &mdash; TENS (T digit (T)</h3><p>Pass 2 of 3 &mdash; read the <strong>tens (T)</strong> digit. First every number is placed into the bucket for its tens (T) digit:</p><pre><code>bucket 00  [100, 802, 3, 9]
bucket 04  [45]
bucket 06  [67]</code></pre><p>Collecting every non-empty bucket from 0 to 9 &mdash; each queue shifted from its front &mdash; gives:</p><pre><code>[100, 802, 3, 9, 45, 67]</code></pre>

<h3>Pass 3 of 3 &mdash; HUNDREDS (H digit (H)</h3><p>Pass 3 of 3 &mdash; read the <strong>hundreds (H)</strong> digit. First every number is placed into the bucket for its hundreds (H) digit:</p><pre><code>bucket 00  [3, 9, 45, 67]
bucket 01  [100]
bucket 08  [802]</code></pre><p>Collecting every non-empty bucket from 0 to 9 &mdash; each queue shifted from its front &mdash; gives:</p><pre><code>[3, 9, 45, 67, 100, 802]</code></pre>

<p>The final, fully sorted result after the hundreds pass:</p><pre><code>[3, 9, 45, 67, 100, 802]</code></pre>

<h2>Why the Buckets Must Stay FIFO</h2><p>The collection step only works if every bucket preserves the order its values arrived in. Look at bucket 0 after pass 2: <code>[100, 802, 3, 9]</code> &mdash; 100 arrived first, then 802, 3 and 9. Collecting takes the <em>front</em> of the queue, so 100 leaves before 802. If a bucket reversed its order at collection time, the previous passes&rsquo; sorting would be undone &mdash; the stable, order-preserving queue is exactly what makes radix sort work.</p>

<h2>Digit Places &mdash; How Many Passes?</h2><p>One pass per digit, from the least significant digit upward:</p><table><thead><tr><th>Place</th><th>Example number</th><th>Passes needed</th></tr></thead><tbody><tr><td>O</td><td>9 &mdash; ones only</td><td>1 pass</td></tr><tr><td>TO</td><td>45 &mdash; tens and ones</td><td>2 passes</td></tr><tr><td>HTO</td><td>802 &mdash; hundreds, tens, ones</td><td>3 passes</td></tr><tr><td>THTO</td><td>8020 &mdash; thousands and up</td><td>4 passes</td></tr></tbody></table>

<h2>Complexity</h2><table><thead><tr><th>Case</th><th>Time</th><th>Note</th></tr></thead><tbody><tr><td>Best</td><td>O(d &middot; (n + k))</td><td>d = digit passes, k = 10 buckets</td></tr><tr><td>Average</td><td>O(d &middot; (n + k))</td><td>independent of the values themselves</td></tr><tr><td>Worst</td><td>O(d &middot; (n + k))</td><td>stable at each digit &mdash; no bad input</td></tr></tbody></table><p><strong>Space:</strong> O(n + k) for the ten buckets. <strong>Stable:</strong> yes, because of the FIFO queues (though stability depends on collecting in a stable order).</p>

<h2>When Radix Sort Shines</h2><ul><li>Fixed-length keys &mdash; IDs, phone numbers, dates, IP addresses.</li><li>Small value ranges, short digits &mdash; few passes of n + 10 work each.</li><li>When stability across passes matters &mdash; the FIFO queues preserve order.</li><li>As the building block inside suffix arrays, radix-trie and hashing tools.</li></ul>

<blockquote>Radix sort trades ten extra lists for a sort that runs in near-linear time &mdash; but it can only sort keys that can be split into digits or ranks.</blockquote>` },
      { id: "sort-09", title: "Bucket Sort", difficulty: "intermediate", time: "8 min", desc: "Range buckets, insertion sort inside, left-to-right concatenation.",
        content: `<h1>Bucket Sort</h1><span class="step-badge">Chapter 8</span><p><strong>Bucket sort</strong> never compares two values directly. It uses arithmetic to work out which <strong>range</strong> a value falls into, drops every value into the bucket for that range, sorts each bucket&rsquo;s few values with a simple sort, and finally walks the buckets from left to right to produce one sorted array.</p><h2>Key Idea</h2><blockquote><p>Bucket sort replaces one hard problem with many tiny ones: scatter the values into ordered range-sized buckets, sort every bucket&rsquo;s short list, then concatenate the buckets left to right. It is fast when the values spread out evenly, so that nearly every bucket stays tiny.</p></blockquote><h2>How Bucket Sort Works</h2><ol><li><strong>Input</strong> &mdash; take the unsorted array.</li><li><strong>Bucket distribution</strong> &mdash; compute each value&rsquo;s bucket from a range formula and insert the value inside that bucket. Buckets are ordered: every value in bucket <code>i</code> is smaller than every value in bucket <code>i + 1</code>.</li><li><strong>Sort each bucket</strong> &mdash; every non-empty bucket is sorted internally (here with insertion sort).</li><li><strong>Concatenation</strong> &mdash; copy the buckets back into one array, bucket 0 first, then bucket 1, and so on.</li><li><strong>Sorted array</strong> &mdash; because each bucket was already ordered and the buckets come out in order, the concatenated result is fully sorted.</li></ol><h2>Bucket Index Formula</h2><p>Every value must land in <em>exactly one</em> bucket, and never outside the last bucket. The two methods differ only in how the ranges are chosen:</p><pre><code>Fixed-width:   bucket = floor((value - min) / width)      where  width = ceil((max - min) / k)</code></pre><pre><code>Fixed-count:   bucket = floor((value - min) * k / (max - min + 1))     for k buckets</code></pre><p>Both formulas subtract <code>min</code> first, so the smallest value lands exactly in <strong>bucket 0</strong> and the largest value can never spill past the last bucket &mdash; the index is never <code>k</code> and never negative. The visualizer above and below uses exactly these formulas on the array you choose.</p><h2>Interactive Visualizer</h2><p>Step forwards one move at a time. The pipeline reads left to right: an <strong>Input</strong> value leaves the array and enters the <strong>Bucket</strong> whose range it fits, that bucket is <strong>sorted</strong> internally, and the buckets are <strong>concatenated</strong> into the <strong>Output</strong>. The two method buttons rebuild the same array under the other bucket formula.</p><div class="bs-wrap" id="bucket-wrap" data-array="[7,45,250,4790]"></div><p class="bs-guide">Tip: <strong>Step</strong> shows one move at a time &mdash; during distribution every value first shows its index calculation, then enters its bucket. <strong>Reset</strong> rewinds to the input, <strong>Play</strong> runs the whole pipeline, and try the other presets &mdash; a shuffled array makes the insertion-sort step inside each bucket visible.</p><h2>Fixed-Width Bucket Method</h2><p>Pick a bucket <strong>width</strong> and split the whole value range into ranges of that width. This page picks the width dynamically from the data so that the number of buckets stays small and readable, but the rule is the same for any width:</p><ol><li>Compute <code>min</code> and <code>max</code> of the array.</li><li>Choose a bucket width so that <code>width = ceil((max - min) / k)</code> for a small <code>k</code>.</li><li>Index every value with <code>floor((value - min) / width)</code>.</li><li>Insert each value into its bucket.</li><li>Sort each bucket (insertion sort).</li><li>Concatenate the buckets from left to right.</li><li>The result is the sorted array.</li></ol><pre><code>min = 7   max = 4790   width = 1196            (ceil(4783 / 4))</code></pre><pre><code>value  (value - min)  bucket   range→
     7          0         0      7–1202→
    45         38         0      7–1202→
   250        243         0      7–1202→
  4790       4783         3    3595–4790</code></pre><p>Boundary check: <code>7</code> (the minimum) lands in bucket 0 because <code>(7 - 7) / 1196 = 0</code>, and <code>4790</code> (the maximum) lands in the last bucket because <code>floor(4783 / 1196) = 3</code> &mdash; never 4. A value that is off the bottom would clamp to bucket 0 and a value above the top would clamp to the last bucket, so the index is always valid. All three small values share bucket 0 because they are much closer together than the bucket width.</p><h2>Fixed-Count Bucket Method</h2><p>Instead of a width, choose the <strong>number</strong> <code>k</code> of buckets and split the range into <code>k</code> equally sized slices:</p><pre><code>bucket = floor((value - min) * k / (max - min + 1))</code></pre><p>With <code>k = 4</code> on the same example, every bucket covers <code>1196</code> values and the result is identical: the three small values share bucket 0 and <code>4790</code> sits alone in bucket 3.</p><p>Because the denominator <code>max - min + 1</code> is one larger than the range, <code>(max - min) * k / (max - min + 1) &lt; k</code> always &mdash; the maximum value maps to <code>k - 1</code> at most, never to <code>k</code>, so the index never overflows the bucket array. For arrays whose minimum is zero this is the classic formula <code>floor(k * value / (max + 1))</code>.</p><h2>Sorting Inside Buckets</h2><p>Once the values are inside, each bucket is a short array that insertion sort fixes in place &mdash; hold one value, slide every bigger neighbour to the right, then insert:</p><pre><code>Bucket 1 before:  [29, 43, 34]→
hold 34      34 < 43   → shift 43 right   [29, .., 43]→
             34 > 29   → stop→
insert 34    → [29, 34, 43]→
Bucket 1 sorted:     [29, 34, 43]</code></pre><p>The comparison test is strict (<code>bucket[j-1] &gt; key</code>), so equal values never swap &mdash; bucket sort stays <strong>stable</strong> inside each bucket.</p><h2>Concatenation</h2><p>Every bucket is already sorted and every bucket is ordered relative to its neighbours, so copying the buckets out from left to right rebuilds a fully sorted array:</p><pre><code>Bucket 0 → [7, 45, 250]→
Bucket 1 → (empty)→
Bucket 2 → (empty)→
Bucket 3 → [4790]→
Output   → [7, 45, 250, 4790]</code></pre><h2>Complexity</h2><table><thead><tr><th>Case</th><th>Time</th><th>When</th></tr></thead><tbody><tr><td>Best</td><td>O(n + k)</td><td>Values spread evenly &mdash; every bucket holds only a few</td></tr><tr><td>Average</td><td>O(n + k)</td><td>Rounding error in the distribution stays small</td></tr><tr><td>Worst</td><td>O(n²)</td><td>All values fall into the same bucket (insertion sort)</td></tr></tbody></table><p><strong>Space:</strong> O(n + k) extra buckets. <strong>Stable:</strong> yes &mdash; a stable sort runs inside each bucket and concatenation keeps bucket order.</p><h2>When Bucket Sort Works Well</h2><ul><li>Values that are <strong>uniformly distributed</strong> over a bounded range &mdash; grades, scores, percentages, uniformly spread floats.</li><li>When the number of buckets is close to the number of keys, so each bucket holds almost nothing.</li><li>Sorting keys whose range arithmetic is cheap (no comparisons needed just to distribute them).</li><li>As a first pass before inserting, when the data is known to spread evenly.</li><li>Not for heavily skewed data &mdash; if every value stacks into one bucket you pay insertion sort&rsquo;s O(n²) on the whole array.</li></ul>` },
      { id: "sort-10", title: "Shell Sort", difficulty: "intermediate", time: "8 min", desc: "Gap-driven groups, insertion sort inside each group, shrink the gap to 1.",
        content: `<h1>Shell Sort</h1><span class="step-badge">Chapter 9</span><p><strong>Shell sort</strong> is insertion sort taken to extremes: instead of comparing every element with its immediate neighbour, it first compares elements that are far apart, using a <strong>gap</strong>. It divides the array into <strong>groups</strong> of elements separated by that gap, insertion-sorts each group, writes the groups back, and reduces the gap. The final gap of 1 is an ordinary insertion sort &mdash; but by then the array is almost sorted, so it finishes in a few moves.</p><h2>Key Idea</h2><blockquote><p>Shell sort makes the array <em>almost sorted</em> first. A large gap lets a misplaced element travel a long distance in one move, and every smaller gap refines the order a little more. When the gap reaches 1, plain insertion sort has almost nothing left to do.</p></blockquote><h2>How Shell Sort Works</h2><ol><li>Start with a gap &mdash; for the simple halving sequence, <code>gap = floor(n / 2)</code>.</li><li>Form the <strong>groups</strong>: every element halves apart, indices <code>i</code>, <code>i + gap</code>, <code>i + 2·gap</code>, &hellip;, join the same group.</li><li><strong>Insertion-sort each group</strong> using the gap (compare an element with the one <code>gap</code> positions before it).</li><li><strong>Reconstruct</strong> the array by writing every sorted group back to its original indices.</li><li>Halve the gap and repeat.</li><li>Stop after the <code>gap = 1</code> pass &mdash; the array is sorted.</li></ol><h2>The Gap Sequence</h2><p>The classic halving sequence used here is the one taught with Shell sort:</p><pre><code>gap = floor(n / 2)
gap = floor(gap / 2)   repeat until gap = 1</code></pre><p>For the running example <code>[7, 3, 4, 8, 13, 11, 9, 1]</code> with <code>n = 8</code>, the passes are <strong>gap = 4</strong>, then <strong>gap = 2</strong>, then <strong>gap = 1</strong>. Every pass with a larger gap fixes far-apart disorder cheaply, so the final gap-1 pass is nearly free.</p><h2>Interactive Visualizer</h2><p>Step forwards one move at a time. The flow is always the same: <strong>Array</strong> &rarr; <strong>Gap</strong> &rarr; <strong>Groups</strong> &rarr; <strong>Insertion sort inside each group</strong> &rarr; <strong>Reconstruct</strong> the array at the original indices &rarr; <strong>reduce the gap</strong> &rarr; next pass &rarr; final sorted array. The bracket under the array shows the current gap; the active group is highlighted in the array and in its group card, and the operation strip explains every compare, shift and insert. Change the array preset and the whole pipeline recomputes from the algorithm.</p><div class="bs-wrap" id="shell-wrap" data-array="[7,3,4,8,13,11,9,1]"></div><p class="bs-guide">Tip: watch Group 4 of Pass 1 &mdash; <code>8 and 1</code> swap through a shift, the only real work of the first pass. By Pass 3 the gap is 1, the array is almost sorted, and insertion sort glides through it.</p><h2>Groups, Not Subarrays</h2><p>The biggest trap is confusing a group with a contiguous slice. For <code>gap = 4</code>, <strong>Group 1 is NOT [7, 3, 4, 8]</strong>. Elements join a group by <em>index step</em>, stepping through the array by the gap:</p><pre><code>Index:  [0] [1] [2] [3] [4]  [5]  [6] [7]
Array:  [7] [3] [4] [8] [13] [11] [9] [1]

Gap = 4  →  4 groups, each picking every 4th index

Group 1: indices 0 → 4   values [7, 13]
Group 2: indices 1 → 5   values [3, 11]
Group 3: indices 2 → 6   values [4, 9]
Group 4: indices 3 → 7   values [8, 1]</code></pre><p>For gap = 2 there are 2 groups stepping by 2:</p><pre><code>Group 1: indices 0 → 2 → 4 → 6   values [7, 4, 13, 9]
Group 2: indices 1 → 3 → 5 → 7   values [3, 1, 11, 8]</code></pre><h2>Insertion Sort Inside a Group</h2><p>Each group is sorted with insertion sort, but the comparison jumps by the gap instead of by 1 &mdash; an element is shifted back only within its own group. Group 1 of Pass 2, <code>[7, 4, 13, 9]</code>:</p><pre><code>hold 4:   7 > 4      → shift 7 right   [4, 7, 13, 9]
hold 13:  13 > 7     → no shift
hold 9:   13 > 9     → shift 13 right  [4, 7, 9, 13]
          7 < 9      → stop, insert 9
result:  [4, 7, 9, 13]</code></pre><p>Because only a strict <code>&gt;</code> triggers a shift, equal values are never swapped inside a group. Across groups, however, a later group can overtake an earlier one, which is why Shell sort is <strong>not stable</strong>.</p><h2>Reconstructing the Array</h2><p>After the groups are sorted they are written straight back to their <strong>original indices</strong> &mdash; never concatenated. After gap = 4:</p><pre><code>Group 1 [7, 13] → stays   at indices 0, 4
Group 2 [3, 11] → stays   at indices 1, 5
Group 3 [4, 9]  → stays   at indices 2, 6
Group 4 [1, 8]  → written at indices 3, 7

Array becomes  [7, 3, 4, 1, 13, 11, 9, 8]</code></pre><p>The next gap is then computed from this reconstructed array, so every pass works on the previous pass&rsquo;s result.</p><h2>Pass-by-Pass Walkthrough</h2><table><thead><tr><th>Pass</th><th>Gap</th><th>Groups</th><th>Array after reconstructing</th></tr></thead><tbody><tr><td>1</td><td>4</td><td>[7,13] [3,11] [4,9] [8,1]</td><td>[7, 3, 4, 1, 13, 11, 9, 8]</td></tr><tr><td>2</td><td>2</td><td>[4,7,9,13] [1,3,8,11]</td><td>[4, 1, 7, 3, 9, 8, 13, 11]</td></tr><tr><td>3</td><td>1</td><td>whole array</td><td>[1, 3, 4, 7, 8, 9, 11, 13]</td></tr></tbody></table><p>Check the middle column carefully &mdash; each band is one group&rsquo;s values in sorted order, and the right column is those values placed back at the group&rsquo;s original indices.</p><h2>Why Gap = 1 Finishes the Sort</h2><p>With gap = 1 there is only one group: the whole array. Insertion sort on the whole array always sorts, but by now the array is already almost sorted (every element is within one gap-slot of its final position), so each key travels only a few places. Gap 1 is the proof stage: it runs plain insertion sort over the nearly sorted array and produces the final result.</p><h2>Complexity</h2><table><thead><tr><th>Case</th><th>Time</th><th>Note</th></tr></thead><tbody><tr><td>Best</td><td>O(n log n)</td><td>Nearly sorted input for good gap sequences</td></tr><tr><td>Average</td><td>~O(n^(3/2))</td><td>Halving gap sequence on typical data</td></tr><tr><td>Worst</td><td>O(n²)</td><td>Halving sequence on adversarial input</td></tr></tbody></table><p><strong>Space:</strong> O(1) in place. <strong>Stable:</strong> no &mdash; a later group can move an equal key past an earlier one. <strong>In place:</strong> yes.</p><h2>When Shell Sort Works Well</h2><ul><li>Medium arrays where insertion sort is too slow but a full O(n log n) sort is overkill.</li><li>Making an array &ldquo;almost sorted&rdquo; before a cheap finishing pass.</li><li>Environments with tight memory &mdash; it sorts in place with no recursion.</li><li>Embedded or teaching contexts where the gap/groups idea is the point.</li><li>Not for huge arrays &mdash; better gap sequences exist, but O(n log n) sorts win at scale.</li></ul>` },
      { id: "sort-11", title: "Heap Sort", difficulty: "intermediate", time: "8 min", desc: "Build a max heap, extract the root, heapify &mdash; repeat until sorted.",
        content: `<h1>Heap Sort</h1><span class="step-badge">Chapter 10</span><p><strong>Heap sort</strong> is a comparison-based sort that reuses the <strong>max heap</strong> structure. First the array is rearranged into a max heap (the parent of every position is larger than or equal to its children). The largest value then always sits at the root, so it is swapped out &mdash; and the small element that replaces it is pushed back down with a <strong>heapify</strong> pass. Doing that repeatedly produces the sorted array with O(n log n) worst-case time.</p>

<h2>Key Idea</h2><blockquote><p>Heap logic turns the array itself into a complete binary tree: index 0 is the root, the left child of index i is 2i + 1, the right child is 2i + 2, and the parent of index i is (i - 1) / 2. As a <strong>max heap</strong>, every parent value is greater than or equal to both of its children, so the root always holds the maximum.</p></blockquote>

<h2>The Input Array As A Tree</h2><p>Start with the array <code>[4, 10, 3, 5, 1, 6, 9, 7, 2]</code> and read it top-to-bottom, left-to-right as a complete binary tree.</p><div class="heap-tree-card"><div class="heap-tree-caption">Original array as a complete binary tree</div><svg class="heap-tree-svg" data-array="[4,10,3,5,1,6,9,7,2]" role="img" aria-label="Initial array 4 10 3 5 1 6 9 7 2 drawn as a complete binary tree"></svg><div class="heap-tree-array-label">Array representation</div><div class="heap-tree-array" data-heap-array="[4,10,3,5,1,6,9,7,2]"></div></div><p>Every element maps to a tree node through its array index: the left child of index <code>i</code> is <code>2&times;i + 1</code>, the right child is <code>2&times;i + 2</code>, and the parent is <code>(i - 1) / 2</code>.</p><table><thead><tr><th>Index</th><th>Value</th><th>Position in the tree</th></tr></thead><tbody><tr><td>0</td><td>4</td><td>root</td></tr><tr><td>1</td><td>10</td><td>left child of 0</td></tr><tr><td>2</td><td>3</td><td>right child of 0</td></tr><tr><td>3</td><td>5</td><td>left child of 1</td></tr><tr><td>4</td><td>1</td><td>right child of 1</td></tr><tr><td>5</td><td>6</td><td>left child of 2</td></tr><tr><td>6</td><td>9</td><td>right child of 2</td></tr><tr><td>7</td><td>7</td><td>left child of 3</td></tr><tr><td>8</td><td>2</td><td>right child of 3</td></tr></tbody></table><p>Empty positions are skipped when the tree is not perfect, but the index arithmetic stays the same. This is exactly the mapping the visualizer uses &mdash; the tree and the array are always two views of the same data.</p><h2>Phase 1 &mdash; Build Max Heap (Bottom-Up)</h2><p>The last non-leaf node of a heap of size n is at index <code>n/2 - 1</code>. For this array that is index 3, holding <code>5</code>. Every node from there down/up to the root gets one <strong>heapify</strong> pass: compare the node with its children, and if a child is larger, swap and keep pushing the smaller value down until it is a leaf or already bigger than its children.</p><ul><li>Index 3 &mdash; 5  vs 7 and 2: 7 &gt; 5 &rarr; SWAP(5, 7) &rarr; [4, 10, 3, 7, 1, 6, 9, 5, 2]</li><li>Index 2 &mdash; 3  vs 6 and 9: 9 &gt; 3 &rarr; SWAP(3, 9) &rarr; [4, 10, 9, 7, 1, 6, 3, 5, 2]</li><li>Index 1 &mdash; 10 vs 7 and 1: children are smaller &rarr; no swap</li><li>Index 0 &mdash; 4: 10 &gt; 4 &rarr; swap, then 7 &gt; 4 &rarr; swap, then 5 &gt; 4 &rarr; swap</li></ul><p>The build finishes on the root: <code>[10, 7, 9, 5, 1, 6, 3, 4, 2]</code>. The maximum (10) is now at index 0, and the visualizer marks this with a <strong>MAX HEAP BUILT</strong> beat.</p>

<h2>Phase 2 &mdash; Extract The Maximum</h2><p>Now the sort peels off the max repeatedly: highlight the root as the current maximum, swap it with the last element of the active heap, shrink the heap size by one (the removed max joins the sorted tail), and heapify the root back down. The bars in the visualizer show the swap of the root with the last active element, then the heapify cascade. Because the tail grows on the right, the extracted elements are collected largest-first:</p><pre><code>[4,10,3,5,1,6,9,7,2]   initial
[10,7,9,5,1,6,3,4,2]   max heap built
[ 9,7,6,5,1,2,3,4 |10] remove 10, heapify
[ 7,5,6,4,1,2,3 |9,10] remove 9,  heapify
[ 6,5,3,4,1,2   |7,9,10]   remove 7, heapify
[ 5,4,3,2,1     |6,7,9,10] remove 6, ...
[ 1,2,3,4,5,6,7,9,10]  sorted</code></pre><p>Every step keeps everything right of the <code>|</code> in its final position, so the extraction order <code>[10, 9, 7, 6, 5, 4, 3, 2, 1]</code> reversed is the final ascending array.</p>

<h2>Interactive Visualizer</h2><p>Step through the real algorithm: watch the array build into a max heap bottom-up, then extract each maximum. The heap tree and the array representation are two views of the same state and always agree. Emphasis colours map to the move: the array is a complete binary tree (dashed = child being compared, accent = current node / largest child, red = swap, grey dashed = outside the active heap). The <strong>Heap type</strong> selector switches between a <strong>MAX heap</strong> (root is the maximum, sorted ascending in place) and a <strong>MIN heap</strong> (root is the minimum, in-place result descending). Change the preset or the heap type and the whole run recomputes from the algorithm.</p><div class="bs-wrap" id="heap-wrap" data-array="[4,10,3,5,1,6,9,7,2]"></div><p class="bs-guide">Tip: <strong>Step</strong> walks the build heapify passes and then every extraction, <strong>Reset</strong> rewinds to the initial array, and <strong>Play</strong> runs the whole sort. The pipeline above the tree tracks which phase is active.</p>

<h2>Why It Works</h2><ul><li>The max heap guarantees the root is the largest element of the heap &mdash; every extraction finds the current maximum.</li><li>Swapping the root with the last active element and shrinking the heap places each maximum into its final position.</li><li>Each heapify takes O(log n), and there are n - 1 extractions, giving <strong>n log n</strong> total.</li></ul>

<h2>Complexity</h2><table><thead><tr><th>Case</th><th>Time</th><th>Note</th></tr></thead><tbody><tr><td>Best</td><td>O(n log n)</td><td>Build is O(n), each of the (n-1) heapify passes is O(log n)</td></tr><tr><td>Average</td><td>O(n log n)</td><td>Heapify cost stays logarithmic on any input</td></tr><tr><td>Worst</td><td>O(n log n)</td><td>Guaranteed, unlike quicksort</td></tr></tbody></table><p><strong>Space:</strong> O(1) extra in place. <strong>Stable:</strong> no &mdash; swapping the root across the heap can jump equal keys past each other. <strong>In place:</strong> yes.</p>

<h2>When Heap Sort Works Well</h2><ul><li>Worst-case-safe O(n log n) sorting without needing extra memory.</li><li>Priority-queue style tasks, because the heap is the underlying structure.</li><li>Embedded systems where quicksort&rsquo;s recursion and mergesort&rsquo;s extra array are not acceptable.</li><li>Not when stability matters, and often beaten in practice by quicksort&rsquo;s better cache behaviour.</li></ul>` },
      { id: "sort-07", title: "Sorting Quick Reference", difficulty: "beginner", time: "4 min", desc: "All sorting algorithms compared, plus how to choose one.",
        content: `<h1>Sorting Quick Reference</h1><span class="step-badge">Chapter 11</span><h2>Complexity Table</h2><table><thead><tr><th>Algorithm</th><th>Best</th><th>Average</th><th>Worst</th><th>Space</th><th>Stable</th></tr></thead><tbody><tr><td>Bubble Sort</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>Yes</td></tr><tr><td>Selection Sort</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>No</td></tr><tr><td>Insertion Sort</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>Yes</td></tr><tr><td>Quick Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n²)</td><td>O(log n)</td><td>No</td></tr><tr><td>Merge Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n)</td><td>Yes</td></tr><tr><td>Counting Sort</td><td>O(n + k)</td><td>O(n + k)</td><td>O(n + k)</td><td>O(k)</td><td>Yes</td></tr></tbody></table><p>where <code>n</code> = number of elements and <code>k</code> = range of values (for counting sort).</p><h2>Which Sort Should You Use?</h2><table><thead><tr><th>Situation</th><th>Use</th></tr></thead><tbody><tr><td>Very small array</td><td>Insertion sort</td></tr><tr><td>Nearly sorted data</td><td>Insertion sort</td></tr><tr><td>Few swaps needed / big records</td><td>Selection sort</td></tr><tr><td>Fastest general purpose, in place</td><td>Quick sort</td></tr><tr><td>Stability required, or linked list</td><td>Merge sort</td></tr><tr><td>Small value range (marks, grades)</td><td>Counting sort</td></tr></tbody></table><h2>Formulas To Remember</h2><ul><li>Comparisons in selection sort: <code>n(n-1)/2</code></li><li>Maximum swaps in selection sort: <code>n - 1</code></li><li>Height of the recursion tree (merge/quick): <code>log2(n)</code></li><li>Levels of merge sort: <code>log2(n)</code>, work per level: <code>O(n)</code>, total: <code>O(n log n)</code></li></ul><h2>Comparison vs Non-Comparison</h2><pre><code>Comparison based  &#8594; compares two elements
                    bubble, selection, insertion,
                    quick, merge
                    lower bound: O(n log n)

Non-comparison    &#8594; uses the value directly
                    counting, bucket, radix
                    can be O(n)</code></pre><blockquote>No single algorithm is best for everything — pick based on the size of the data, how sorted it already is, whether stability matters, and how much extra memory you can use.</blockquote>` },

    ]
  },
  {
    id: "searching", label: "Searching", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>`,
    desc: "Find elements fast — linear search, binary search and hashing in C.",
    tags: ["linear search", "binary search", "hashing", "algorithms"],
    articles: [
      { id: "sear-01", title: "Introduction to Searching", difficulty: "beginner", time: "4 min", desc: "What is searching, successful vs unsuccessful, types of search.",
        content: `<h1>Introduction to Searching</h1><span class="step-badge">Chapter 1</span><p><strong>Searching</strong> means finding a given element (the <strong>key</strong>) inside a collection of elements, and returning its position (index).</p><h2>Example</h2><pre><code>Array:  10  20  30  40  50  60  70
Index:   0   1   2   3   4   5   6

Search for 60  &#8594;  found at index 5
Search for 99  &#8594;  not found, return -1</code></pre><h2>Two Types of Search Result</h2><ul><li><strong>Successful search</strong> — the key is present in the collection.</li><li><strong>Unsuccessful search</strong> — the key is not present.</li></ul><p>Notebooks usually return the index on success and <code>-1</code> on failure, because <code>-1</code> can never be a valid index.</p><h2>How Fast Is a Search?</h2><p>Two things decide the speed of a search:</p><ol><li><strong>Is the data sorted?</strong> If yes, you can skip half of the array every step.</li><li><strong>Where do you start?</strong> Beginning, middle, or jumping by a fixed step.</li></ol><h2>Types of Searching</h2><table><thead><tr><th>Type</th><th>Idea</th><th>Time</th></tr></thead><tbody><tr><td>Linear (sequential) search</td><td>Check every element one by one.</td><td>O(n)</td></tr><tr><td>Binary search</td><td>Halve the search space each step (needs sorted data).</td><td>O(log n)</td></tr><tr><td>Jump search</td><td>Jump ahead by a fixed block size, then search inside the block.</td><td>O(&#8730;n)</td></tr><tr><td>Interpolation search</td><td>Guess the position using the value itself.</td><td>O(log log n) average</td></tr><tr><td>Hashing</td><td>Compute the index directly with a hash function.</td><td>O(1) average</td></tr></tbody></table><h2>Key Terms</h2><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody><tr><td>Key</td><td>The value being searched for.</td></tr><tr><td>n</td><td>Number of elements in the collection.</td></tr><tr><td>Comparison</td><td>One check of a key against an element.</td></tr><tr><td>low / high</td><td>First and last index of the current search range.</td></tr></tbody></table><blockquote>Searching is the most common operation on a collection — sorting exists mainly to make searching fast.</blockquote>` },
      { id: "sear-02", title: "Linear Search", difficulty: "beginner", time: "4 min", desc: "Sequential search — check every element from the start until found.",
        content: `<h1>Linear Search</h1><span class="step-badge">Chapter 2</span><p>Linear search checks the elements <strong>one by one</strong> from the beginning of the collection until the key is found or the collection ends.</p><h2>Core Idea</h2><pre><code>for (i = 0; i &lt; n; i++)
{
    if (arr[i] == key)
        return i;
}
return -1;</code></pre><h2>Dry Run — search 60</h2><pre><code>Array:  10  20  30  40  50  60  70
Index:   0   1   2   3   4   5   6

i = 0:  arr[0] = 10, 10 == 60 ? no
i = 1:  arr[1] = 20, 20 == 60 ? no
i = 2:  arr[2] = 30, 30 == 60 ? no
i = 3:  arr[3] = 40, 40 == 60 ? no
i = 4:  arr[4] = 50, 50 == 60 ? no
i = 5:  arr[5] = 60, 60 == 60 ? yes  &#9656; return 5

Search for 99:
every element is compared, loop ends, return -1</code></pre><h2>C Code</h2><pre><code>#include &lt;stdio.h&gt;

int linearSearch(int arr[], int n, int key)
{
    for (int i = 0; i &lt; n; i++)
    {
        if (arr[i] == key)
            return i;
    }

    return -1;
}

int main()
{
    int arr[7] = {10, 20, 30, 40, 50, 60, 70};
    int index = linearSearch(arr, 7, 60);

    if (index == -1)
        printf("Element not found\\n");
    else
        printf("Element found at index %d\\n", index);

    return 0;
}</code></pre><h2>Complexity</h2><table><thead><tr><th>Case</th><th>Time</th><th>Comparisons</th></tr></thead><tbody><tr><td>Best</td><td>O(1)</td><td>1 — key is the first element</td></tr><tr><td>Average</td><td>O(n)</td><td>About n / 2</td></tr><tr><td>Worst</td><td>O(n)</td><td>n</td></tr></tbody></table><p>Space: <strong>O(1)</strong>. Linear search works on <strong>unsorted</strong> data, which is its main advantage.</p><h2>Sentinel Search — a Faster Variant</h2><p>Temporarily place the key at the last position. Then the loop no longer needs a bounds check, which makes it about twice as fast in practice.</p><pre><code>int sentinelSearch(int arr[], int n, int key)
{
    int last = arr[n - 1];
    arr[n - 1] = key;

    int i = 0;
    while (arr[i] != key)
        i++;

    arr[n - 1] = last;

    return (i == n - 1) ? -1 : i;
}</code></pre><h2>When to Use Linear Search</h2><ul><li>The array is <strong>not sorted</strong>.</li><li>The data is in a <strong>linked list</strong> (no random access).</li><li>The array is small, or you only need a single one-time search.</li></ul><blockquote>Linear search is the slowest search, but the only one that works on unsorted data. Always ask "is the array sorted?" first — if it is, use binary search.</blockquote>` },
      { id: "sear-03", title: "Binary Search", difficulty: "beginner", time: "5 min", desc: "Halve the search space every step on a sorted array.",
        content: `<h1>Binary Search</h1><span class="step-badge">Chapter 3</span><p>Binary search works on a <strong>sorted array</strong>. It compares the key with the middle element and throws away half of the remaining array, again and again, until the key is found or the range becomes empty.</p><h2>Prerequisite</h2><blockquote>Sorted array (ascending). Binary search gives wrong answers on unsorted data.</blockquote><h2>Core Idea</h2><pre><code>low  = 0
high = n - 1

while (low &lt;= high)
{
    mid = low + (high - low) / 2;

    if (arr[mid] == key)  return mid;
    if (arr[mid] &lt; key)   low  = mid + 1;
    else                   high = mid - 1;
}

return -1;</code></pre><p>Each step removes half of the elements:</p><pre><code>100 &#8594; 50 &#8594; 25 &#8594; 12 &#8594; 6 &#8594; 3 &#8594; 1

so about log2(n) comparisons</code></pre><h2>Dry Run — search 60 in 10 20 30 40 50 60 70</h2><pre><code>low 0, high 6  &#8594;  mid = 3  &#8594; arr[3] = 40  (60 &gt; 40)  low = 4

low 4, high 6  &#8594;  mid = 5  &#8594; arr[5] = 60  (60 == 60) &#9656; return 5</code></pre><h2>C Code — Iterative</h2><pre><code>int binarySearch(int arr[], int n, int key)
{
    int low = 0;
    int high = n - 1;

    while (low &lt;= high)
    {
        int mid = low + (high - low) / 2;

        if (arr[mid] == key)
            return mid;
        else if (arr[mid] &lt; key)
            low = mid + 1;
        else
            high = mid - 1;
    }

    return -1;
}</code></pre><h2>C Code — Recursive</h2><pre><code>int binarySearchRecursive(int arr[], int low, int high, int key)
{
    if (low &gt; high)
        return -1;

    int mid = low + (high - low) / 2;

    if (arr[mid] == key)
        return mid;

    if (arr[mid] &lt; key)
        return binarySearchRecursive(arr, mid + 1, high, key);

    return binarySearchRecursive(arr, low, mid - 1, key);
}</code></pre><h2>Overflow-Safe Mid</h2><pre><code>mid = (low + high) / 2        &#8594; can overflow for large arrays
mid = low + (high - low) / 2  &#8594; always safe, use this</code></pre><h2>Complexity</h2><table><thead><tr><th>Case</th><th>Time</th><th>Position of key</th></tr></thead><tbody><tr><td>Best</td><td>O(1)</td><td>Exactly the middle element</td></tr><tr><td>Average</td><td>O(log n)</td><td>Any position</td></tr><tr><td>Worst</td><td>O(log n)</td><td>First or last element</td></tr></tbody></table><p>Space: <strong>O(1)</strong> for the iterative version, <strong>O(log n)</strong> for the recursive version (recursion stack).</p><h2>Common Mistakes</h2><ul><li>Using <code>low &lt; high</code> instead of <code>low &lt;= high</code> — the last element becomes unreachable.</li><li>Forgetting to move the boundary: <code>low = mid + 1</code> and <code>high = mid - 1</code>, otherwise the loop never ends.</li><li>Running binary search on unsorted data.</li></ul><blockquote>If the data is sorted, binary search turns an O(n) search into an O(log n) search — 1000 elements need only about 10 comparisons.</blockquote>` },
      { id: "sear-04", title: "Binary Search Variations", difficulty: "intermediate", time: "6 min", desc: "First and last occurrence, lower bound, count and rotated array search.",
        content: `<h1>Binary Search Variations</h1><span class="step-badge">Chapter 4</span><p>Once the binary search idea is clear, the same "halve the range" trick solves many other problems.</p><h2>1. Lower Bound — First Index With Value &gt;= Key</h2><p>Returns the first position where the key could be inserted while keeping the array sorted. The loop does <strong>not</strong> stop at an equal value; it keeps moving left.</p><pre><code>int lowerBound(int arr[], int n, int key)
{
    int low = 0, high = n;

    while (low &lt; high)
    {
        int mid = low + (high - low) / 2;

        if (arr[mid] &lt; key)
            low = mid + 1;
        else
            high = mid;
    }

    return low;
}</code></pre><pre><code>arr:  2  4  4  4  7  9
key:  4

lowerBound(arr, 6, 4)  &#8594;  1   (first 4)</code></pre><h2>2. First Occurrence of a Key</h2><pre><code>int firstOccurrence(int arr[], int n, int key)
{
    int index = lowerBound(arr, n, key);

    if (index &lt; n &amp;&amp; arr[index] == key)
        return index;

    return -1;
}</code></pre><h2>3. Last Occurrence and Count of Occurrences</h2><p>Upper bound = first index with value <strong>&gt;</strong> the key. Count = upper bound − lower bound.</p><pre><code>int upperBound(int arr[], int n, int key)
{
    int low = 0, high = n;

    while (low &lt; high)
    {
        int mid = low + (high - low) / 2;

        if (arr[mid] &lt;= key)
            low = mid + 1;
        else
            high = mid;
    }

    return low;
}

int countOccurrences(int arr[], int n, int key)
{
    return upperBound(arr, n, key) - lowerBound(arr, n, key);
}</code></pre><pre><code>arr:  2  4  4  4  7  9
key:  4

lowerBound = 1
upperBound = 4
count      = 4 - 1 = 3   &#9656; 4 appears three times</code></pre><h2>4. Search in a Rotated Sorted Array</h2><p>An array is rotated somewhere in the middle, and exactly one half is always sorted. Check which half is sorted, then decide which half contains the key.</p><pre><code>int rotatedSearch(int arr[], int low, int high, int key)
{
    while (low &lt;= high)
    {
        int mid = low + (high - low) / 2;

        if (arr[mid] == key)
            return mid;

        if (arr[low] &lt;= arr[mid])
        {
            if (arr[low] &lt;= key &amp;&amp; key &lt; arr[mid])
                high = mid - 1;
            else
                low = mid + 1;
        }
        else
        {
            if (arr[mid] &lt; key &amp;&amp; key &lt;= arr[high])
                low = mid + 1;
            else
                high = mid - 1;
        }
    }

    return -1;
}</code></pre><pre><code>arr:  4  5  6  7  1  2  3
      \_________/  \___/
       sorted part   sorted part

search 3  &#8594;  found at index 6</code></pre><h2>Key Point</h2><p>All of these variations keep the same rule: after every comparison, the search range becomes roughly half. That is why they all run in <strong>O(log n)</strong>.</p><blockquote>Learn <code>lowerBound</code> first — first occurrence, last occurrence and count are all built from it.</blockquote>` },
      { id: "sear-05", title: "Hashing & Hash Tables", difficulty: "intermediate", time: "6 min", desc: "Compute the index directly with a hash function, plus collisions.",
        content: `<h1>Hashing &amp; Hash Tables</h1><span class="step-badge">Chapter 5</span><p>Instead of comparing the key with every element, hashing <strong>computes</strong> the index where the key should be stored. Search, insert and delete all become almost instant.</p><h2>The Hash Function</h2><pre><code>index = hash(key) % size</code></pre><pre><code>size = 10

key 43  &#8594;  43 % 10 = 3
key 23  &#8594;  23 % 10 = 3
key 15  &#8594;  15 % 10 = 5
key 67  &#8594;  67 % 10 = 7

Table:  0   1   2   3     4   5    6   7    8   9
              &#9656;     &#9656;
              43    15   67
              23
         both 43 and 23 want index 3
         this is a COLLISION</code></pre><p>Two keys that map to the same index is called a <strong>collision</strong>. Collisions are normal — the hash function must have a way to handle them.</p><h2>Collision Handling</h2><h3>1. Chaining (separate chaining)</h3><p>Every index holds a <strong>list</strong> of keys. Colliding keys are simply appended to the list. This is the most commonly used method.</p><pre><code>Table:  0   1   2   3      4   5    6   7
                            43 &#9656; 23</code></pre><h3>2. Open Addressing — Linear Probing</h3><p>If the index is already taken, check the next index, then the next, wrapping around at the end.</p><pre><code>key 23 wants index 3, but 43 is there
  index 3 &#8594; taken, try index 4
  index 4 &#8594; free, store 23 here

position = (hash(key) + i) % size</code></pre><h2>C Code — Insert and Search with Linear Probing</h2><pre><code>#define SIZE 10

int hashTable[SIZE];

int hash(int key)
{
    return key % SIZE;
}

int searchHash(int key)
{
    int index = hash(key);

    while (hashTable[index] != 0 &amp;&amp; hashTable[index] != key)
        index = (index + 1) % SIZE;

    if (hashTable[index] == key)
        return index;

    return -1;
}

void insertHash(int key)
{
    int index = hash(key);

    while (hashTable[index] != 0)
        index = (index + 1) % SIZE;

    hashTable[index] = key;
}</code></pre><p>Two rules make this work:</p><ul><li><code>0</code> marks an <strong>empty</strong> slot, so 0 can never be stored as a key.</li><li>The probe stops when an <strong>empty</strong> slot is found, because keys are always placed in the first free slot from their hash position.</li></ul><h2>Complexity</h2><table><thead><tr><th>Operation</th><th>Average</th><th>Worst</th></tr></thead><tbody><tr><td>Search</td><td>O(1)</td><td>O(n)</td></tr><tr><td>Insert</td><td>O(1)</td><td>O(n)</td></tr><tr><td>Delete</td><td>O(1)</td><td>O(n)</td></tr></tbody></table><p>Space: <strong>O(n)</strong> for the table itself.</p><h2>Hashing vs Binary Search</h2><table><thead><tr><th></th><th>Hashing</th><th>Binary Search</th></tr></thead><tbody><tr><td>Prerequisite</td><td>Nothing — no sorting needed</td><td>Sorted data</td></tr><tr><td>Search time</td><td>O(1) average</td><td>O(log n)</td></tr><tr><td>Range queries (min, max)</td><td>Poor — no order preserved</td><td>Good</td></tr><tr><td>Memory</td><td>Extra table needed</td><td>None</td></tr></tbody></table><blockquote>Use hashing when you only need exact-match lookups. If you also need sorted order, ranges and sorting by key, use binary search on sorted data instead.</blockquote>` },
      { id: "sear-06", title: "Searching Quick Reference", difficulty: "beginner", time: "4 min", desc: "All searching algorithms compared, plus how to choose one.",
        content: `<h1>Searching Quick Reference</h1><span class="step-badge">Chapter 6</span><h2>Complexity Table</h2><table><thead><tr><th>Algorithm</th><th>Best</th><th>Average</th><th>Worst</th><th>Needs sorted data?</th></tr></thead><tbody><tr><td>Linear Search</td><td>O(1)</td><td>O(n)</td><td>O(n)</td><td>No</td></tr><tr><td>Sentinel Search</td><td>O(1)</td><td>O(n)</td><td>O(n)</td><td>No</td></tr><tr><td>Binary Search</td><td>O(1)</td><td>O(log n)</td><td>O(log n)</td><td>Yes</td></tr><tr><td>Jump Search</td><td>O(&#8730;n)</td><td>O(&#8730;n)</td><td>O(&#8730;n)</td><td>Yes</td></tr><tr><td>Interpolation Search</td><td>O(1)</td><td>O(log log n)</td><td>O(n)</td><td>Yes</td></tr><tr><td>Hashing</td><td>O(1)</td><td>O(1)</td><td>O(n)</td><td>No</td></tr></tbody></table><h2>Which Search Should You Use?</h2><table><thead><tr><th>Situation</th><th>Use</th></tr></thead><tbody><tr><td>Unsorted array or linked list</td><td>Linear search</td></tr><tr><td>Sorted array, single lookup</td><td>Binary search</td></tr><tr><td>Sorted array, many lookups</td><td>Sort once, then binary search</td></tr><tr><td>First / last occurrence or count</td><td>lowerBound / upperBound binary search</td></tr><tr><td>Dictionary, map, cache, database index</td><td>Hashing</td></tr></tbody></table><h2>Formulas To Remember</h2><pre><code>Binary search mid     = low + (high - low) / 2
Comparisons needed    = log2(n) + 1
Search space after k  = n / 2^k

Hash index            = key % size
Probing (linear)      = (hash(key) + i) % size

Linear search average  = n / 2 comparisons
Jump search block size = sqrt(n)</code></pre><h2>Growth Visual</h2><pre><code>1000 elements
Linear search    &#8594; up to 1000 comparisons
Binary search    &#8594; about 10 comparisons

1,000,000 elements
Linear search    &#8594; up to 1,000,000 comparisons
Binary search    &#8594; about 20 comparisons</code></pre><blockquote>Searching is fast only when the data is sorted or hashed. The first question in every search problem is always: is the data sorted?</blockquote>` }
    ]
  },
  {
    id: "two-pointers", label: "Two Pointers Method", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 6h14"/><path d="M5 12h14"/><path d="M5 18h14"/><path d="M9 3l-2 3 2 3"/><path d="M15 15l-2 3 2 3"/></svg>`,
    desc: "Solve targeted problems using the Two Pointers pattern.",
    tags: ["two-pointers", "pointers", "algorithms"],
    articles: [
      { id: "tp-01", title: "Two Sum II", difficulty: "easy", time: "12 min", desc: "Two Sum II explained with diagrams, malloc, and pointer arithmetic.",
        content: `<h1>Two Sum II</h1><p>Solve <strong>Two Sum II (LeetCode #167)</strong> with the Two Pointers pattern — visual diagrams, dry runs, C code, and line-by-line explanations.</p>

<h2>What is Two Pointers?</h2><p>Two pointers means using <strong>two variables/pointers</strong> to move through an array instead of checking every possible pair.</p><div class="diagram-wrap"><span class="label">Two pointers moving toward each other</span><div class="ptr-grid cols-4">
<div class="g-col"><span class="g-label">low</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-label">high</span></div>
<div class="g-col"><span class="g-arrow">↓</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-arrow">↓</span></div>
<div class="h-row"><span class="arr-cell">2</span></div><div class="h-row"><span class="arr-cell">7</span></div><div class="h-row"><span class="arr-cell">11</span></div><div class="h-row"><span class="arr-cell">15</span></div>
<div class="g-col"><span class="g-arrow dim">→</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-arrow dim">←</span></div>
</div></div><p>The key idea:</p><ul><li><code>low</code> starts from the beginning.</li><li><code>high</code> starts from the end.</li><li>Both pointers move toward each other.</li><li>The loop continues while <code>low &lt; high</code>.</li><li>We decide which pointer to move based on the current sum.</li></ul><div class="diagram-wrap"><span class="label">Moving the pointers</span><div class="v-flow">
<span class="v-step">low++  &#8594; move toward right</span><span class="v-step">high-- &#8594; move toward left</span>
</div></div>

<h2>Why Two Pointers?</h2><p>The whole trick is deciding <strong>which pointer to move</strong>. This only works on a sorted array, because a sorted array tells us which direction leads to a bigger or smaller sum.</p><div class="diagram-wrap"><span class="label">The decision rule</span><div class="ptr-grid cols-3">
<div class="g-col"><div class="v-flow"><span class="v-step">sum &lt; target</span><span class="v-arrow">&#8595;</span><span class="v-step accent">low++</span></div></div>
<div class="g-col"><div class="v-flow"><span class="v-step">sum &gt; target</span><span class="v-arrow">&#8595;</span><span class="v-step accent">high--</span></div></div>
<div class="g-col"><div class="v-flow"><span class="v-step">sum == target</span><span class="v-arrow">&#8595;</span><span class="v-step accent">return answer</span></div></div>
</div></div><p><strong>If <code>sum &lt; target</code></strong> — the sum is too small. We need a larger value, so move <code>low++</code> (right) toward bigger numbers.</p><p><strong>If <code>sum &gt; target</code></strong> — the sum is too big. We need a smaller value, so move <code>high--</code> (left) toward smaller numbers.</p><p><strong>If <code>sum == target</code></strong> — we found the answer.</p><p>Why does this avoid checking every pair? Because at each step we can discard a whole side of the search. The brute-force way checks all <code>n²</code> pairs. Two pointers only walk each pointer once across the array.<p><table><thead><tr><th></th><th>Time</th><th>Space</th></tr></thead><tbody><tr><td>Brute force</td><td>O(n²)</td><td>O(1)</td></tr><tr><td>Two Pointers</td><td>O(n)</td><td>O(1)</td></tr></tbody></table><blockquote>Time: O(n) — Space: O(1) for the two-pointer logic (excluding the returned result array).</blockquote>

<h2>Two Sum II (LeetCode #167)</h2><p>Given a <strong>sorted</strong> array of integers and a target, return the two indices whose values add up to the target.</p><p>Example:</p><pre><code>numbers = [2, 7, 11, 15]
target = 9</code></pre><p>We start with:</p><pre><code>low  = 0
high = 3</code></pre><div class="diagram-wrap"><span class="label">Start — low at index 0, high at index 3</span><div class="arrow-figure">
<div class="ptr-grid cols-4">
<div class="g-col"><span class="g-label">low</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-label">high</span></div>
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-arrow">&#8595;</span></div>
<div class="h-row"><span class="arr-cell">2</span></div><div class="h-row"><span class="arr-cell">7</span></div><div class="h-row"><span class="arr-cell">11</span></div><div class="h-row"><span class="arr-cell">15</span></div>
</div>
<div class="v-flow"><span class="v-step">sum = 2 + 15 = 17</span><span class="v-step accent">17 &gt; 9</span><span class="v-step">Therefore:</span><span class="v-step accent">high--</span></div>
</div></div><p><code>17 &gt; 9</code> — the sum is too big, so we need a smaller number. Move <code>high--</code>.</p><div class="diagram-wrap"><span class="label">Step 2 — high moves left</span><div class="arrow-figure">
<div class="ptr-grid cols-4">
<div class="g-col"><span class="g-label">low</span></div><div class="g-col"></div><div class="g-col"><span class="g-label">high</span></div><div class="g-col"></div>
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div><div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div>
<div class="h-row"><span class="arr-cell">2</span></div><div class="h-row"><span class="arr-cell">7</span></div><div class="h-row"><span class="arr-cell">11</span></div><div class="h-row"><span class="arr-cell">15</span></div>
</div>
<div class="v-flow"><span class="v-step">sum = 2 + 11 = 13</span><span class="v-step accent">13 &gt; 9</span><span class="v-step">Therefore:</span><span class="v-step accent">high--</span></div>
</div></div><p><code>13 &gt; 9</code> — still too big, move <code>high--</code> again.</p><div class="diagram-wrap"><span class="label">Step 3 — high moves to index 1</span><div class="arrow-figure">
<div class="ptr-grid cols-4">
<div class="g-col"><span class="g-label">low</span></div><div class="g-col"><span class="g-label">high</span></div><div class="g-col"></div><div class="g-col"></div>
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div><div class="g-col"></div>
<div class="h-row"><span class="arr-cell">2</span></div><div class="h-row"><span class="arr-cell">7</span></div><div class="h-row"><span class="arr-cell">11</span></div><div class="h-row"><span class="arr-cell">15</span></div>
</div>
<div class="v-flow"><span class="v-step">sum = 2 + 7 = 9</span><span class="v-step accent">9 == 9</span><span class="v-step">Answer:</span><span class="v-step accent">[1, 2]</span></div>
</div></div><p><code>9 == 9</code> — we found the pair <code>2</code> and <code>7</code>.</p><p><strong>Important:</strong> LeetCode uses <strong>1-based indexing</strong> for this problem. The positions in the C array are <code>0</code> and <code>1</code>, but the answer LeetCode expects is <code>[1, 2]</code>. So:</p><pre><code>result[0] = low + 1
result[1] = high + 1</code></pre><div class="diagram-wrap"><span class="label">C index vs. LeetCode answer</span><div class="arrow-figure">
<div class="v-flow"><span class="v-step">C array:</span></div>
<div class="ptr-grid cols-4">
<div class="g-col"><span class="arr-cell">2</span></div><div class="g-col"><span class="arr-cell">7</span></div><div class="g-col"><span class="arr-cell">11</span></div><div class="g-col"><span class="arr-cell">15</span></div>
<div class="g-col"><span class="g-label hint">0</span></div><div class="g-col"><span class="g-label hint">1</span></div><div class="g-col"><span class="g-label hint">2</span></div><div class="g-col"><span class="g-label hint">3</span></div>
</div>
<div class="v-flow"><span class="v-step">low = 0 → result[0] = 0 + 1 = 1</span><span class="v-step">high = 1 → result[1] = 1 + 1 = 2</span><span class="v-step accent">LeetCode answer: [1, 2]</span></div>
</div></div>

<h2>The C Function</h2><p>Here is the complete solution. Do not change the algorithm.</p><pre><code>int* twoSum(int* numbers, int numbersSize, int target, int* returnSize) {
    
    int low = 0;
    int high = numbersSize - 1;

    int *result = malloc(2 * sizeof(int));

    while (low &lt; high) {
 
        int sum = numbers[low] + numbers[high];

        if (sum == target) {
            result[0] = low + 1;
            result[1] = high + 1;
            *returnSize = 2;
            return result;
       
        } else if (sum &lt; target) {
            low++;

        } else {
            high--;
        }
    }

    *returnSize = 0;
    free(result);
    return NULL;
}</code></pre><p>Let's walk through each important piece.</p>

<h2>Understanding malloc()</h2><p>This line allocates memory at runtime:</p><pre><code>int *result = malloc(2 * sizeof(int));</code></pre><div class="diagram-wrap"><span class="label">How malloc() works</span><div class="v-flow">
<span class="v-step">malloc()</span><span class="v-arrow">&#8595;</span>
<span class="v-step">allocates memory for 2 integers</span><span class="v-arrow">&#8595;</span>
<span class="v-step">returns the address of the allocated memory</span><span class="v-arrow">&#8595;</span>
<span class="v-step">result stores that address</span>
</div></div><p><code>malloc(2 * sizeof(int))</code> asks the computer for enough memory to hold <strong>two integers</strong>. It returns the <strong>address</strong> where that memory starts.</p><div class="diagram-wrap"><span class="label">The allocated block</span><div class="arrow-figure">
<div class="v-flow"><span class="v-step accent">result</span></div>
<div class="ptr-grid cols-2">
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div>
<div class="g-col"><span class="mem-cell"><span class="mem-val">result[0]</span></span></div><div class="g-col"><span class="mem-cell"><span class="mem-val">result[1]</span></span></div>
</div>
</div></div><p><strong>Important:</strong> the two elements do <strong>NOT</strong> have the same address. The memory is <strong>contiguous</strong> (one block right after the other).</p><div class="diagram-wrap"><span class="label">Each element has its own address</span><div class="ptr-grid cols-2">
<div class="g-col"><span class="g-label">result</span></div><div class="g-col"><span class="g-label">result + 1</span></div>
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"><span class="g-arrow">&#8595;</span></div>
<div class="g-col"><span class="g-label hint">address of result[0]</span></div><div class="g-col"><span class="g-label hint">address of result[1]</span></div>
</div></div><p>For example, if <code>sizeof(int) = 4</code> (bytes), the addresses might look like this:</p><div class="diagram-wrap"><span class="label">Contiguous memory addresses</span><div class="ptr-grid cols-2">
<div class="g-col"><span class="mem-cell"><span class="mem-addr">1000</span><span class="mem-val">&#8212;</span></span></div><div class="g-col"><span class="mem-cell"><span class="mem-addr">1004</span><span class="mem-val">&#8212;</span></span></div>
<div class="g-col"><span class="g-label hint">result[0]</span></div><div class="g-col"><span class="g-label hint">result[1]</span></div>
</div></div><p><code>malloc</code> gives you the <strong>starting address</strong> of the allocated block — that starting address is stored in <code>result</code>.</p>

<h2>Pointer Arithmetic</h2><p>Pointer arithmetic means <strong>moving a pointer between elements</strong> of an array.</p><p>Example:</p><pre><code>int arr[3] = {10, 20, 30};
int *p = arr;</code></pre><p>Here <code>p</code> points to the start of <code>arr</code>:</p><div class="diagram-wrap"><span class="label">p points to the first element</span><div class="arrow-figure">
<div class="ptr-grid cols-3">
<div class="g-col"><span class="g-label">p</span></div><div class="g-col"></div><div class="g-col"></div>
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div><div class="g-col"></div>
<div class="h-row"><span class="arr-cell">10</span></div><div class="h-row"><span class="arr-cell">20</span></div><div class="h-row"><span class="arr-cell">30</span></div>
</div>
</div></div><div class="diagram-wrap"><span class="label">p + 1 points to the second element</span><div class="arrow-figure">
<div class="ptr-grid cols-3">
<div class="g-col"></div><div class="g-col"><span class="g-label">p + 1</span></div><div class="g-col"></div>
<div class="g-col"></div><div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div>
<div class="h-row"><span class="arr-cell">10</span></div><div class="h-row"><span class="arr-cell">20</span></div><div class="h-row"><span class="arr-cell">30</span></div>
</div>
</div></div><p>Dereferencing (<code>*</code>) reads the value at the address the pointer holds:</p><pre><code>*(p)     → 10
*(p + 1) → 20
*(p + 2) → 30</code></pre><p><strong>Key idea:</strong> <code>p + 1</code> does <strong>NOT</strong> mean "move 1 byte". It means <strong>move by <code>sizeof(int)</code> bytes</strong>. C automatically calculates the correct memory offset based on the pointer type. For an <code>int</code> that is 4 bytes, <code>p + 1</code> moves the pointer forward by 4 bytes.</p>

<h2>int* twoSum</h2><p>Let's read this function declaration very carefully:</p><pre><code>int* twoSum(...)</code></pre><div class="diagram-wrap"><span class="label">Breaking down the declaration</span><div class="v-flow">
<span class="v-step accent">int*</span><span class="v-arrow">&#8595;</span><span class="v-step">return type is pointer to int</span>
<span class="v-step accent">twoSum</span><span class="v-arrow">&#8595;</span><span class="v-step">function name</span>
</div></div><p>So <code>int* twoSum(...)</code> means:</p><blockquote>"The twoSum function returns an address pointing to an integer."</blockquote><div class="diagram-wrap"><span class="label">What twoSum returns</span><div class="arrow-figure">
<div class="v-flow"><span class="v-step">twoSum()</span><span class="v-arrow">&#8595;</span><span class="v-step hint">returns address</span></div>
<div class="ptr-grid cols-2">
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div>
<div class="g-col"><span class="mem-cell"><span class="mem-val">result[0]</span></span></div><div class="g-col"><span class="mem-cell"><span class="mem-val">result[1]</span></span></div>
</div>
</div></div><p>In this problem, that returned address points to the <strong>first element of the dynamically allocated result array</strong>.</p>

<h2>returnSize Pointer</h2><p>In the parameter list we see:</p><pre><code>int* returnSize</code></pre><p><code>returnSize</code> is also a pointer — it points to some address where we are allowed to store the size of our answer.</p><p>Then inside the function:</p><pre><code>*returnSize = 2;</code></pre><div class="diagram-wrap"><span class="label">Memory diagram</span><div class="arrow-figure">
<div class="ptr-stack"><span class="pt-label">returnSize</span><span class="pt-arrow">&#8595;</span></div>
<div class="ptr-stack"><span class="pt-label hint">address 5000</span><span class="pt-arrow">&#8595;</span></div>
<div class="mem-block"><span class="mem-cell"><span class="mem-val">2</span></span></div>
</div></div><p>Here is the meaning:</p><ul><li><code>returnSize</code> contains an <strong>address</strong> (like 5000).</li><li><code>*returnSize</code> means: <em>"go to the address stored in returnSize and access the value there."</em></li></ul><p>So:</p><pre><code>*returnSize = 2;</code></pre><p>means: <em>"go to that address and store 2 there."</em></p><p><strong>Make sure you see the difference:</strong></p><div class="diagram-wrap"><span class="label">return vs. dereference</span><div class="v-flow">
<span class="v-step accent">return result;</span><span class="v-step">&#8594; returns the address of the result array.</span>
<span class="v-step accent">*returnSize = 2;</span><span class="v-step">&#8594; does NOT return anything.</span><span class="v-step">&#8594; it changes the value stored at the address</span><span class="v-step">provided through returnSize.</span>
</div></div>

<h2>result[0] and result[1]</h2><p>These two lines store the answer indexes:</p><pre><code>result[0] = low + 1;
result[1] = high + 1;</code></pre><div class="diagram-wrap"><span class="label">Storing the answer</span><div class="arrow-figure">
<div class="v-flow"><span class="v-step accent">result</span></div>
<div class="ptr-grid cols-2">
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div>
<div class="g-col"><span class="mem-cell"><span class="mem-val">result[0]</span><span class="mem-addr">low + 1</span></span></div><div class="g-col"><span class="mem-cell"><span class="mem-val">result[1]</span><span class="mem-addr">high + 1</span></span></div>
</div>
</div></div><p>Why is <code>+1</code> required?</p><ul><li>C arrays use <strong>0-based indexing</strong>.</li><li>LeetCode Two Sum II expects <strong>1-based positions</strong>.</li></ul><p>Example:</p><div class="diagram-wrap"><span class="label">Index translation</span><div class="arrow-figure">
<div class="v-flow"><span class="v-step">C index:</span></div>
<div class="ptr-grid cols-4">
<div class="g-col"><span class="arr-cell">2</span></div><div class="g-col"><span class="arr-cell">7</span></div><div class="g-col"><span class="arr-cell">11</span></div><div class="g-col"><span class="arr-cell">15</span></div>
<div class="g-col"><span class="g-label hint">0</span></div><div class="g-col"><span class="g-label hint">1</span></div><div class="g-col"><span class="g-label hint">2</span></div><div class="g-col"><span class="g-label hint">3</span></div>
</div>
<div class="v-flow"><span class="v-step accent">LeetCode answer:</span><span class="v-step">[1, 2]</span><span class="v-step">Therefore:</span><span class="v-step accent">low + 1</span><span class="v-step accent">high + 1</span></div>
</div></div><p>So if <code>low = 0</code> and <code>high = 1</code>, we store <code>result[0] = 1</code> and <code>result[1] = 2</code>.</p>

<h2>return result</h2><p>Finally, we give the answer back:</p><pre><code>return result;</code></pre><p>The pointer <code>result</code> contains the <strong>address of the allocated result array</strong>. Returning it gives the caller the <strong>address of the answer array</strong>.</p><div class="diagram-wrap"><span class="label">Returning the answer</span><div class="arrow-figure">
<div class="v-flow"><span class="v-step accent">result</span></div>
<div class="v-flow"><span class="v-step hint">address</span></div>
<div class="ptr-grid cols-2">
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div>
<div class="g-col"><span class="mem-cell"><span class="mem-val">1</span></span></div><div class="g-col"><span class="mem-cell"><span class="mem-val">2</span></span></div>
</div>
<div class="v-flow"><span class="v-step accent">return result;</span><span class="v-arrow">&#8595;</span><span class="v-step">caller receives this address</span></div>
</div></div>

<h2>No Solution</h2><p>What if no pair adds up to the target? The last three lines handle it:</p><pre><code>*returnSize = 0;
free(result);
return NULL;</code></pre><h3>1. *returnSize = 0;</h3><p>This means: <em>"No elements are being returned because no valid pair was found."</em> The caller sees size <code>0</code> and knows there is no answer.</p><h3>2. free(result);</h3><p>Earlier we allocated memory:</p><pre><code>int *result = malloc(2 * sizeof(int));</code></pre><p>Since there is no answer, we <strong>release that unused memory</strong> so the program does not leak it.</p><h3>3. return NULL;</h3><p>The function returns an <code>int*</code>. Since there is no valid result array, we return <code>NULL</code> (which means "no address").</p><div class="diagram-wrap"><span class="label">No pair found path</span><div class="v-flow">
<span class="v-step">No pair found</span><span class="v-arrow">&#8595;</span>
<span class="v-step">*returnSize = 0</span><span class="v-arrow">&#8595;</span>
<span class="v-step">free(result)</span><span class="v-arrow">&#8595;</span>
<span class="v-step">return NULL</span>
</div></div>

<h2>Complete Flow</h2><p>Here is the whole algorithm in one picture:</p><div class="diagram-wrap"><span class="label">Full algorithm summary</span><div class="arrow-figure">
<div class="v-flow">
<span class="v-step">Sorted Array</span><span class="v-arrow">&#8595;</span>
<span class="v-step">low = beginning<br>high = end</span><span class="v-arrow">&#8595;</span>
<span class="v-step">while (low &lt; high)</span><span class="v-arrow">&#8595;</span>
<span class="v-step">sum = numbers[low] + numbers[high]</span><span class="v-arrow">&#8595;</span>
</div>
<div class="decision-table">
<div class="dt-cell"><span class="dt-cond">sum &lt; target</span><span class="dt-arrow">&#8595;</span><span class="dt-act">low++</span></div>
<div class="dt-cell"><span class="dt-cond">sum == target</span><span class="dt-arrow">&#8595;</span><span class="dt-act">return result</span></div>
<div class="dt-cell"><span class="dt-cond">sum &gt; target</span><span class="dt-arrow">&#8595;</span><span class="dt-act">high--</span></div>
</div>
<div class="v-flow"><span class="v-step">Then:</span></div>
<div class="ptr-grid cols-2">
<div class="g-col"><div class="v-flow"><span class="v-step accent">Found</span><span class="v-arrow">&#8595;</span><span class="v-step">store indexes</span><span class="v-arrow">&#8595;</span><span class="v-step">*returnSize = 2</span><span class="v-arrow">&#8595;</span><span class="v-step">return result</span></div></div>
<div class="g-col"><div class="v-flow"><span class="v-step accent">Not found</span><span class="v-arrow">&#8595;</span><span class="v-step">*returnSize = 0</span><span class="v-arrow">&#8595;</span><span class="v-step">free(result)</span><span class="v-arrow">&#8595;</span><span class="v-step">return NULL</span></div></div>
</div>
</div></div>

<h2>Problems (Two Pointers)</h2><p>This section will grow as more Two Pointers problems are added. Each problem will include the problem, pattern, approach, dry run, diagram, C solution, line-by-line explanation, and complexity.</p><div class="problem-list"><div class="problem-card"><div class="problem-num">01</div><h4>Two Sum II</h4><p>Sorted array, find two numbers adding to target. <strong>Solved below.</strong></p></div><div class="problem-card"><div class="problem-num">02</div><h4>Valid Palindrome</h4><p>Check if a string reads the same forward and backward, ignoring non-alphanumerics.</p></div><div class="problem-card"><div class="problem-num">03</div><h4>3Sum</h4><p>Find all triplets that sum to zero using two pointers.</p></div><div class="problem-card"><div class="problem-num">04</div><h4>Container With Most Water</h4><p>Find the container that holds the most water using two pointers.</p></div><div class="problem-card"><div class="problem-num">05</div><h4>Remove Duplicates from Sorted Array</h4><p>Remove duplicates in place and return the new length.</p></div><div class="problem-card"><div class="problem-num">06</div><h4>Move Zeroes</h4><p>Move all zeroes to the end while keeping relative order.</p></div><div class="problem-card"><div class="problem-num">07</div><h4>Squares of a Sorted Array</h4><p>Return an array of squares in non-decreasing order.</p></div><div class="problem-card"><div class="problem-num">08</div><h4>Merge Sorted Array</h4><p>Merge two sorted arrays into one sorted array.</p></div></div><blockquote>Master the Two Pointers pattern and these problems become the same idea: use a sorted property to skip options, moving only toward the answer.</blockquote>` },
      { id: "tp-02", title: "Valid Palindrome", difficulty: "easy", time: "10 min", desc: "Two pointers compare characters from both ends of a string.",
        content: `<h1>Valid Palindrome</h1><p>Check a string the Two Pointers way, ignoring everything that isn't a letter or digit.</p>

<h2>Problem Statement</h2><p>A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Return <code>true</code> if the string is a palindrome, and <code>false</code> otherwise.</p><pre><code>Input:  s = "A man, a plan, a canal: Panama"
Output: true

Explanation: after cleanups s becomes "amanaplanacanalpanama",
which reads the same forward and backward.</code></pre><blockquote>"amanaplanacanalpanama" is a palindrome.</blockquote>

<h2>What is the Two Pointer approach?</h2><p>Using two pointers means starting one pointer at the <strong>beginning</strong> of the string and one at the <strong>end</strong>. They move <strong>toward each other</strong>, comparing one pair of characters at a time.</p><div class="diagram-wrap"><span class="label">low starts at the start, high at the end</span><div class="ptr-grid cols-5">
<div class="g-col"><span class="g-label">low</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-label">high</span></div>
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-arrow">&#8595;</span></div>
<div class="h-row"><span class="arr-cell">A</span></div><div class="h-row"><span class="arr-cell">m</span></div><div class="h-row"><span class="arr-cell">a</span></div><div class="h-row"><span class="arr-cell">n</span></div><div class="h-row"><span class="arr-cell">a</span></div>
</div></div><p>Just like Two Sum II, the two pointers meet in the middle.</p>

<h2>Why Two Pointers works for this problem</h2><ul><li>A palindrome is defined by matching the <strong>outermost</strong> characters, then moving inward.</li><li>Every <code>low</code>/<code>high</code> pair either matches (keep going) or does not match (answer is <code>false</code>).</li><li>Non-alphanumeric characters are <strong>skipped</strong> by moving the pointer one step — they do not count.</li><li>Because we only move pointers inward, each character is visited at most once.</li></ul><blockquote>The string is a palindrome if, going from the outside inward, every pair of alphanumeric characters matches.</blockquote>

<h2>Example</h2><p>We use the classic example:</p><pre><code>s = "A man, a plan, a canal: Panama"</code></pre><p>If we remove spaces, punctuation, and ignore case, we get:</p><pre><code>"amanaplanacanalpanama"</code></pre><p>which reads the same forwards and backwards.</p>

<h2>Initial pointer positions</h2><p>The string has 30 characters, so:</p><pre><code>low  = 0
high = strlen(s) - 1 = 29</code></pre><div class="diagram-wrap"><span class="label">low is at index 0, high is at index 29</span><div class="ptr-grid cols-6">
<div class="g-col"><span class="g-label">low</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-label">high</span></div>
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-arrow">&#8595;</span></div>
<div class="h-row"><span class="arr-cell">A</span></div><div class="h-row"><span class="arr-cell">&#32;</span></div><div class="h-row"><span class="arr-cell">m</span></div><div class="h-row"><span class="arr-cell">.</span></div><div class="h-row"><span class="arr-cell">.</span></div><div class="h-row"><span class="arr-cell">a</span></div>
</div></div><p><code>A</code> is at index 0 and the last character <code>a</code> is at index 29.</p>

<h2>Step-by-step dry run</h2><p>We compare <code>s[low]</code> with <code>s[high]</code>, ignoring anything that is not a letter or digit.</p>

<h3>Final step — they match</h3><p>As the pointers move inward, each matching pair brings them closer. Here is the whole process on the cleaned-up string:</p><div class="diagram-wrap"><span class="label">Clean string: "amanaplanacanalpanama"</span><div class="ptr-grid cols-4">
<div class="g-col"><span class="g-label">low</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-label">high</span></div>
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-arrow">&#8595;</span></div>
<div class="h-row"><span class="arr-cell">a</span></div><div class="h-row"><span class="arr-cell">m</span></div><div class="h-row"><span class="arr-cell">a</span></div><div class="h-row"><span class="arr-cell">a</span></div>
</div>
<div class="v-flow"><span class="v-step">s[low] = 'a' and s[high] = 'a'</span><span class="v-step accent">tolower matches</span><span class="v-step">low++ (move right)</span><span class="v-step">high-- (move left)</span></div>
</div></div><p>Because every pair matched and no <code>return false</code> was triggered, we reach the end and return <code>true</code>.</p>

<h3>1. Compare outermost letters</h3><div class="diagram-wrap"><span class="label">s[0]='A', s[29]='a'</span><div class="ptr-grid cols-5">
<div class="g-col"><span class="g-label">low</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-label">high</span></div>
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-arrow">&#8595;</span></div>
<div class="h-row"><span class="arr-cell">A</span></div><div class="h-row"><span class="arr-cell">m</span></div><div class="h-row"><span class="arr-cell">a</span></div><div class="h-row"><span class="arr-cell">n</span></div><div class="h-row"><span class="arr-cell">a</span></div>
</div>
<div class="v-flow"><span class="v-step">tolower('A') == tolower('a') &rarr; 'a' == 'a'</span><span class="v-step accent">Match</span><span class="v-step">low++ then high--</span></div>
</div></div><p><code>'A'</code> and <code>'a'</code> are the same letter once we lower the case, so we move both pointers inward.</p>

<h3>2. Skip the space (non-alphanumeric)</h3><p>Now <code>low = 1</code>, which is a space. A space is not alphanumeric, so we skip it with <code>low++</code> until we reach a letter.</p><div class="diagram-wrap"><span class="label">low skips the space at index 1</span><div class="ptr-grid cols-6">
<div class="g-col"><span class="g-label">low</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div>
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div>
<div class="h-row"><span class="arr-cell">&#32;</span></div><div class="h-row"><span class="arr-cell">&#32;</span></div><div class="h-row"><span class="arr-cell">m</span></div><div class="h-row"><span class="arr-cell">a</span></div><div class="h-row"><span class="arr-cell">n</span></div><div class="h-row"><span class="arr-cell">&#32;</span></div>
</div>
<div class="v-flow"><span class="v-step accent">!isalnum(' ') is true</span><span class="v-step">low++ &rarr; move past the space</span></div>
</div></div><p><code>low</code> now points at <code>'m'</code> (index 2), an actual letter.</p>

<h2>The C Function</h2><p>Here is the complete solution. Do not change the algorithm.</p><pre><code>bool isPalindrome(char* s) {
    int low = 0 ;
    int high = strlen(s)-1;

while (low &lt; high) {

    while (low &lt; high &amp;&amp; !isalnum(s[low])){
        low++;
    }

    while (low &lt; high &amp;&amp; !isalnum(s[high])){
        high--;
    }

    if (tolower(s[low]) != tolower(s[high])){
        return false;
    }

    low++;
    high--;
}
   return true ;
 
} </code></pre><p>Let's walk through each piece.</p>

<h2>Line-by-line explanation</h2>

<h3>The low pointer</h3><p><code>low</code> is an integer index that starts at <code>0</code> (the first character of the string). It moves <strong>rightward</strong> through the string as we progress.</p>
<div class="diagram-wrap"><span class="label">low starts at index 0</span><div class="ptr-grid cols-5">
<div class="g-col"><span class="g-label">low</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div>
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div>
<div class="h-row"><span class="arr-cell">A</span></div><div class="h-row"><span class="arr-cell">&#32;</span></div><div class="h-row"><span class="arr-cell">m</span></div><div class="h-row"><span class="arr-cell">a</span></div><div class="h-row"><span class="arr-cell">n</span></div>
</div></div>

<h3>The high pointer</h3><p><code>high</code> starts at <code>strlen(s) - 1</code> (the last character of the string). It moves <strong>leftward</strong> toward <code>low</code>.</p>
<div class="diagram-wrap"><span class="label">high starts at index 29</span><div class="ptr-grid cols-5">
<div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-label">high</span></div>
<div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-arrow">&#8595;</span></div>
<div class="h-row"><span class="arr-cell">a</span></div><div class="h-row"><span class="arr-cell">n</span></div><div class="h-row"><span class="arr-cell">a</span></div><div class="h-row"><span class="arr-cell">m</span></div><div class="h-row"><span class="arr-cell">a</span></div>
</div></div>

<h4>why low &lt; high in the inner while loops</h4><p>Each inner <code>while (low &lt; high &amp;&amp; !isalnum(...))</code> only skips forward if the two pointers have not crossed. This stops <code>low</code> from running past <code>high</code> and <code>high</code> from running past <code>low</code> while skipping punctuation.</p>

<h3>strlen()</h3><p><code>strlen(s)</code> returns the number of characters in the string (not counting the null terminator <code>\\0</code>). We subtract <code>1</code> to get the index of the last character.</p><pre><code>int high = strlen(s) - 1;</code></pre><p>For <code>"A man, a plan, a canal: Panama"</code>, <code>strlen</code> returns <code>30</code>, so <code>high = 29</code>.</p>

<h3>isalnum()</h3><p><code>isalnum(c)</code> returns <code>true</code> if <code>c</code> is a letter or a digit (alphanumeric). It returns <code>false</code> for spaces, punctuation, and symbols.</p><pre><code>while (low &lt; high &amp;&amp; !isalnum(s[low])) low++;</code></pre><p><code>!isalnum(s[low])</code> means "the character is NOT alphanumeric," so the loop just moves <code>low</code> past anything that should be ignored.</p>

<h3>tolower()</h3><p><code>tolower(c)</code> converts an uppercase letter to lowercase so <code>'A'</code> and <code>'a'</code> compare equal. Comparing these makes the check case-insensitive.</p><pre><code>if (tolower(s[low]) != tolower(s[high])) return false;</code></pre>

<h3>low++</h3><p><code>low++</code> moves the low pointer one step to the right after a successful match.</p>
<div class="diagram-wrap"><span class="label">low++ moves right</span><div class="ptr-grid cols-5">
<div class="g-col"><span class="g-label">low</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div>
<div class="g-col"><span class="g-arrow">&#8595;</span></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div>
<div class="h-row"><span class="arr-cell">a</span></div><div class="h-row"><span class="arr-cell">m</span></div><div class="h-row"><span class="arr-cell">a</span></div><div class="h-row"><span class="arr-cell">n</span></div><div class="h-row"><span class="arr-cell">&#32;</span></div>
</div>
<div class="v-flow"><span class="v-step accent">low++</span><span class="v-step">low now points to the next character on the right</span></div>
</div></div>

<h3>high--</h3><p><code>high--</code> moves the high pointer one step to the left after a successful match.</p>
<div class="diagram-wrap"><span class="label">high-- moves left</span><div class="ptr-grid cols-5">
<div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-label">high</span></div>
<div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"></div><div class="g-col"><span class="g-arrow">&#8595;</span></div>
<div class="h-row"><span class="arr-cell">a</span></div><div class="h-row"><span class="arr-cell">n</span></div><div class="h-row"><span class="arr-cell">a</span></div><div class="h-row"><span class="arr-cell">m</span></div><div class="h-row"><span class="arr-cell">a</span></div>
</div>
<div class="v-flow"><span class="v-step accent">high--</span><span class="v-step">high now points to the previous character on the left</span></div>
</div></div>

<h2>Important edge cases</h2><table><thead><tr><th>Case</th><th>Behaviour</th></tr></thead><tbody><tr><td>Empty string <code>""</code></td><td><code>strlen = 0</code>, <code>high = -1</code>, loop never runs &rarr; <code>true</code></td></tr><tr><td>Only punctuation <code>"!!!"</code></td><td>All skipped, loop ends &rarr; <code>true</code></td></tr><tr><td>Single character <code>"a"</code></td><td><code>low == high</code>, loop ends &rarr; <code>true</code></td></tr><tr><td>Mismatch in the middle</td><td>Unequal pair found &rarr; <code>return false</code> immediately</td></tr><tr><td>Case differences <code>"Aa"</code></td><td><code>tolower</code> makes them match &rarr; <code>true</code></td></tr></tbody></table>

<h2>Time complexity</h2><p>Each character is examined at most once by <code>low</code> and once by <code>high</code>, so:</p><table><thead><tr><th></th><th>Complexity</th></tr></thead><tbody><tr><td>Time</td><td>O(n)</td></tr><tr><td>Space</td><td>O(1)</td></tr></tbody></table>

<h2>Space complexity</h2><p>We only use two scalar integer variables (<code>low</code> and <code>high</code>). No extra arrays or strings are created, so the extra space is constant: <strong>O(1)</strong>.</p>

<h2>Complete algorithm summary</h2><div class="diagram-wrap"><span class="label">Valid Palindrome — full flow</span><div class="arrow-figure">
<div class="v-flow"><span class="v-step">while (low &lt; high)</span></div>
<div class="decision-table">
<div class="dt-cell"><span class="dt-cond">s[low] not alnum</span><span class="dt-arrow">&#8595;</span><span class="dt-act">low++</span></div>
<div class="dt-cell"><span class="dt-cond">s[high] not alnum</span><span class="dt-arrow">&#8595;</span><span class="dt-act">high--</span></div>
<div class="dt-cell"><span class="dt-cond">letters differ</span><span class="dt-arrow">&#8595;</span><span class="dt-act">return false</span></div>
</div>
<div class="v-flow"><span class="v-step accent">match &rarr; low++, high--</span><span class="v-arrow">&#8595;</span><span class="v-step">loop repeats toward the middle</span><span class="v-arrow">&#8595;</span><span class="v-step accent">return true</span></div>
</div></div><p>The algorithm works only on the <strong>outer edges</strong>, skipping anything that is not alphanumeric and lowering case, until the pointers cross.</p><blockquote>Two pointers, one at each end, moving inward — if every alphanumeric pair matches after lowering case, it is a palindrome.</blockquote>` }
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
      { id: "lin-09", title: "Basic Commands", difficulty: "beginner", time: "4 min", desc: "Essential Linux commands every beginner should know.",
        content: `<h1>Basic Linux Commands</h1><span class="step-badge">Beginner</span><p>These are the commands you will use every single day in Linux. Think of them as your daily toolkit.</p><h2>Moving Around</h2><table><thead><tr><th>Command</th><th>What It Does</th><th>Example</th></tr></thead><tbody><tr><td><code>pwd</code></td><td>Shows where you are right now</td><td><code>pwd</code> → /home/yourname</td></tr><tr><td><code>ls</code></td><td>Lists files in current folder</td><td><code>ls -la</code> (shows hidden files too)</td></tr><tr><td><code>cd</code></td><td>Go to a folder</td><td><code>cd Documents</code> or <code>cd ..</code> (go back)</td></tr></tbody></table><h2>Working with Files</h2><table><thead><tr><th>Command</th><th>What It Does</th><th>Example</th></tr></thead><tbody><tr><td><code>touch</code></td><td>Create an empty file</td><td><code>touch notes.txt</code></td></tr><tr><td><code>mkdir</code></td><td>Create a new folder</td><td><code>mkdir projects</code></td></tr><tr><td><code>cp</code></td><td>Copy a file</td><td><code>cp file.txt backup.txt</code></td></tr><tr><td><code>mv</code></td><td>Move or rename a file</td><td><code>mv old.txt new.txt</code></td></tr><tr><td><code>rm</code></td><td>Delete a file</td><td><code>rm old.txt</code></td></tr><tr><td><code>rm -r</code></td><td>Delete a folder and everything inside</td><td><code>rm -r old_folder</code></td></tr></tbody></table><blockquote>Be careful with <code>rm</code>. There is no trash bin. Once deleted, it's gone.</blockquote><h2>Reading Files</h2><table><thead><tr><th>Command</th><th>What It Does</th></tr></thead><tbody><tr><td><code>cat file.txt</code></td><td>Shows entire file content</td></tr><tr><td><code>less file.txt</code></td><td>Opens file in scrollable view (press q to quit)</td></tr><tr><td><code>head -20 file.txt</code></td><td>Shows first 20 lines</td></tr><tr><td><code>tail -20 file.txt</code></td><td>Shows last 20 lines</td></tr></tbody></table><h2>Helpful Shortcuts</h2><table><thead><tr><th>Shortcut</th><th>What It Does</th></tr></thead><tbody><tr><td>Tab</td><td>Auto-completes file names</td></tr><tr><td>Up Arrow</td><td>Shows your last command</td></tr><tr><td>Ctrl + C</td><td>Stops whatever is running</td></tr><tr><td>Ctrl + L</td><td>Clears the screen</td></tr></tbody></table>` },
      { id: "lin-10", title: "Networking Basics", difficulty: "beginner", time: "4 min", desc: "Check internet, IP, WiFi, and DNS from terminal.",
        content: `<h1>Networking Basics</h1><span class="step-badge">Beginner</span><p>These commands help you check your internet connection, find your IP address, and fix network problems.</p><h2>Check Your Connection</h2><table><thead><tr><th>Command</th><th>What It Does</th></tr></thead><tbody><tr><td><code>ping google.com</code></td><td>Checks if you can reach the internet</td></tr><tr><td><code>curl ifconfig.me</code></td><td>Shows your public IP address</td></tr><tr><td><code>ip a</code></td><td>Shows all your network interfaces and IPs</td></tr><tr><td><code>hostname -I</code></td><td>Shows your local IP address only</td></tr></tbody></table><h2>WiFi Commands</h2><table><thead><tr><th>Command</th><th>What It Does</th></tr></thead><tbody><tr><td><code>nmcli device wifi list</code></td><td>Scans and lists available WiFi networks</td></tr><tr><td><code>nmcli device wifi connect "SSID" password "PASS"</code></td><td>Connects to a WiFi network</td></tr><tr><td><code>nmcli connection show</code></td><td>Shows saved WiFi connections</td></tr><tr><td><code>nmcli device status</code></td><td>Shows if your network device is connected</td></tr></tbody></table><h2>DNS (Domain Name System)</h2><p>DNS translates website names into IP addresses. If websites don't load but your internet works, it might be a DNS problem.</p><table><thead><tr><th>Command</th><th>What It Does</th></tr></thead><tbody><tr><td><code>nslookup google.com</code></td><td>Checks if DNS is working for a website</td></tr><tr><td><code>cat /etc/resolv.conf</code></td><td>Shows your current DNS servers</td></tr></tbody></table><h2>Fix WiFi Not Working (Kali/Ubuntu)</h2><pre><code># Restart network manager
sudo systemctl restart NetworkManager

# Check if WiFi is blocked
rfkill list

# Unblock if needed
rfkill unblock wifi</code></pre><blockquote>If WiFi keeps disconnecting, try: <code>sudo ip link set wlan0 down && sudo ip link set wlan0 up</code></blockquote>` },
      { id: "lin-11", title: "Useful Commands", difficulty: "beginner", time: "4 min", desc: "Handy commands for system info, searching, and shortcuts.",
        content: `<h1>Useful Commands</h1><span class="step-badge">Beginner</span><p>These are commands you'll find yourself using all the time. They help you find files, check system info, and save time.</p><h2>Find Anything</h2><table><thead><tr><th>Command</th><th>What It Does</th><th>Example</th></tr></thead><tbody><tr><td><code>find</code></td><td>Search for files by name</td><td><code>find /home -name "*.txt"</code></td></tr><tr><td><code>grep</code></td><td>Search for text inside files</td><td><code>grep "error" logfile.txt</code></td></tr><tr><td><code>which</code></td><td>Find where a program is installed</td><td><code>which python3</code></td></tr><tr><td><code>locate</code></td><td>Fast file search using database</td><td><code>sudo updatedb && locate filename</code></td></tr></tbody></table><h2>System Information</h2><table><thead><tr><th>Command</th><th>What It Shows</th></tr></thead><tbody><tr><td><code>uname -a</code></td><td>Linux version and kernel info</td></tr><tr><td><code>df -h</code></td><td>How much disk space is used/free</td></tr><tr><td><code>free -h</code></td><td>How much RAM is used/free</td></tr><tr><td><code>top</code></td><td>Live view of what's using CPU/RAM</td></tr><tr><td><code>htop</code></td><td>Prettier version of top (install: <code>sudo apt install htop</code>)</td></tr><tr><td><code>uptime</code></td><td>How long your system has been running</td></tr><tr><td><code>whoami</code></td><td>Shows your current username</td></tr></tbody></table><h2>Time Savers</h2><table><thead><tr><th>Command</th><th>What It Does</th></tr></thead><tbody><tr><td><code>history</code></td><td>Shows all commands you've typed before</td></tr><tr><td><code>!!</code></td><td>Runs your last command again</td></tr><tr><td><code>alias ll='ls -la'</code></td><td>Creates a shortcut (add to ~/.bashrc to keep it)</td></tr><tr><td><code>clear</code></td><td>Clears the terminal screen</td></tr></tbody></table><h2>Install Software</h2><pre><code># Update package list
sudo apt update

# Install a program
sudo apt install package-name

# Remove a program
sudo apt remove package-name

# Search for available packages
apt search keyword</code></pre><blockquote>Always run <code>sudo apt update</code> before installing anything. This ensures you get the latest versions.</blockquote>` },
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
