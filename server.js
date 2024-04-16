// 기본구성

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, "/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

// 회원가입 API
app.post("/api/signup", async (req, res) => {
  const { user_id, name, email, password, tel, dateJoined, address } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);

  const sql =
    "INSERT INTO user (user_id, name, email, password, tel, dateJoined, address) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [user_id, name, email, hashedPassword, tel, dateJoined, address],
    (err, result) => {
      if (err) throw err;
      res.send({ message: "User registered successfully!" });
    }
  );
});

// 로그인 API
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM user WHERE email = ?";
  db.query(sql, [email], async (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      const comparison = await bcrypt.compare(password, result[0].password);
      if (comparison) {
        res.send({ message: "Logged in successfully!" });
        // 로그인 성공 시 추가 로직
      } else {
        res.status(401).send({ message: "Invalid email or password" });
      }
    } else {
      res.status(404).send({ message: "User not found" });
    }
  });
});

app.get("/product", (req, res) => {
  db.query("select * from itemForm", (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});
