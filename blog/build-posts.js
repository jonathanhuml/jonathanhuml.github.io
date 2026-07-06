const fs = require("fs");
const path = require("path");

const postsDir = path.join(__dirname, "posts");
const outputPath = path.join(__dirname, "posts-data.js");

function slugFromFilename(filename) {
  return filename.replace(/\.md$/i, "");
}

function parseFrontMatter(raw, filename) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(`${filename} is missing YAML-style front matter.`);
  }

  const metadata = {};

  match[1].split("\n").forEach((line) => {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      return;
    }

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    value = value.replace(/^["']|["']$/g, "");
    metadata[key] = value;
  });

  if (!metadata.title) {
    throw new Error(`${filename} is missing a title.`);
  }

  if (!metadata.date) {
    throw new Error(`${filename} is missing a date.`);
  }

  return {
    metadata,
    content: match[2].trim()
  };
}

const posts = fs.readdirSync(postsDir)
  .filter((filename) => filename.endsWith(".md"))
  .map((filename) => {
    const raw = fs.readFileSync(path.join(postsDir, filename), "utf8");
    const { metadata, content } = parseFrontMatter(raw, filename);

    return {
      slug: metadata.slug || slugFromFilename(filename),
      title: metadata.title,
      date: metadata.date,
      content
    };
  })
  .sort((a, b) => {
    return new Date(`${b.date}T00:00:00Z`) - new Date(`${a.date}T00:00:00Z`);
  });

const output = `window.BLOG_POSTS = ${JSON.stringify(posts, null, 2)};\n`;

if (process.argv.includes("--check")) {
  const existingOutput = fs.existsSync(outputPath)
    ? fs.readFileSync(outputPath, "utf8")
    : "";

  if (existingOutput !== output) {
    console.error("blog/posts-data.js is out of date. Run `node blog/build-posts.js`.");
    process.exit(1);
  }

  console.log("blog/posts-data.js is up to date.");
  process.exit(0);
}

fs.writeFileSync(outputPath, output, "utf8");

console.log(`Wrote ${posts.length} posts to ${path.relative(process.cwd(), outputPath)}`);
