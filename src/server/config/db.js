// mysql 연결할 정보 입력 파일
// 기본구성

let mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "aa123456789@@",
  database: "shop",
  port: 3306,
});

module.exports = db;
