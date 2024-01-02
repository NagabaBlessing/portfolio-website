const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const path = require("path");
const fs = require("fs").promises;
admin.initializeApp();

const app = express();

function createHtmlData(title, desp) {
  return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="/sabrina.jpeg" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="${desp}" />
      <link rel="apple-touch-icon" href="/sabrina.jpeg" />
      <link rel="manifest" href="/manifest.json" />
      <title>${title}</title>
      <script defer="defer" src="/static/js/main.js"></script>
      <link href="/static/css/main.css" rel="stylesheet" />
    </head>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-45BHFCHGCF"
    ></script>
    <script>
      function gtag() {
        dataLayer.push(arguments);
      }
      (window.dataLayer = window.dataLayer || []),
        gtag("js", new Date()),
        gtag("config", "G-45BHFCHGCF");
    </script>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
    </body>
  </html>
  
`;
}

// Route handler using createHtmlData function
app.get("/", async (req, res) => {
  const htmldata = createHtmlData(
    "Dr. Sabrina Kitaka",
    "Portfolio Site for Dr. Sabrina Kitaka.",
  );
  res.send(htmldata);
});

app.get("/about", async (req, res) => {
  const htmldata = createHtmlData("About me", "About Dr. Sabrina Kitaka...");
  res.send(htmldata);
});

app.get("/contact-me", async (req, res) => {
  const htmldata = createHtmlData(
    "Contact Me",
    "Contact Dr. Sabrina Kitaka via email from here!",
  );
  res.send(htmldata);
});

app.get("/blog", async (req, res) => {
  const htmldata = createHtmlData(
    "My Blog",
    "Blog Posts by Dr. Sabrina Kitaka.",
  );
  res.send(htmldata);
});

app.get("/projects", async (req, res) => {
  const htmldata = createHtmlData(
    "My Projects",
    "My Projects and accomplishments...",
  );
  res.send(htmldata);
});

app.get("/blog/:id", async (req, res) => {
  const blogId = req.params.id;
  const blogContent = await getBlogContent(blogId);
  const htmldata = createHtmlData(
    blogContent.title || "Blog Post",
    blogContent.content && blogContent.content.length > 60
      ? blogContent.content.substring(0, 60) + "..."
      : "Blog Post by Dr. Sabrina Kitaka.",
  );
  res.send(htmldata);
});

async function getBlogContent(id) {
  const snapshot = await admin.firestore().collection("Posts").doc(id).get();
  if (snapshot.exists) {
    const data = snapshot.data();
    return data;
  } else {
    return null;
  }
}

exports.prerender = functions.https.onRequest(app);
