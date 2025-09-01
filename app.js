const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.static(path.join(__dirname, "public"))); // for CSS, JS, Images
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Me" });
});

app.get("/projects", (req, res) => {
  res.render("projects", { title: "Projects" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
