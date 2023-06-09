const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src"));

app.get("/", (req, res) => {
  res.render("homebef");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  let pilihan = req.body.radio;
  if (pilihan === "user") {
    res.redirect("/home");
  } else if (pilihan === "admin") {
    res.redirect("/admin");
  } else {
    res.redirect("/homebef");
  }
});

app.get("/homebef", (req, res) => {
  res.render("homebef");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.get("/aboutbef", (req, res) => {
  res.render("aboutbef");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/browse", (req, res) => {
  res.render("browse");
});

app.get("/browse2", (req, res) => {
  res.render("browse2");
});

app.get("/details", (req, res) => {
  res.render("details");
});

app.get("/details2", (req, res) => {
  res.render("details2");
});

app.get("/catat-lomba", (req, res) => {
  res.render("clomba");
});

app.get("/catat-beasiswa", (req, res) => {
  res.render("cbeasiswa");
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

app.get("/admin/pengajuan-mahasiswa", (req, res) => {
  res.render("pengajuan");
});

app.get("/admin/posting-lomba", (req, res) => {
  res.render("plomba");
});

app.get("/poslomba", (req, res) => {
  res.render("poslomba");
});

app.get("/admin/posting-beasiswa", (req, res) => {
  res.render("pbeasiswa");
});

app.get("/posbeasiswa", (req, res) => {
  res.render("posbeasiswa");
});

app.get("/admin/postingan-lomba", (req, res) => {
  res.render("poslomba");
});

app.get("/admin/postingan-beasiswa", (req, res) => {
  res.render("posbeasiswa");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
