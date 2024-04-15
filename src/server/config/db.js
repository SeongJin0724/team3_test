// mysql 연결할 정보 입력 파일
// 기본구성

let mysql = require("mysql");
/*const db = mysql.createPool({
  host: "59.29.225.162",
  user: "team3_data",
  password: "123456789@@",
  database: "shop",
  port: 3306,
});

module.exports = db;*/
const db = mysql.createPool({
  
  user: "root",
  password: "root",
  database: "selldb",
  port: 3306,
});

module.exports = db;
