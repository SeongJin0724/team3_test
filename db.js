// mysql 연결할 정보 입력 파일
// 기본구성

const mariadb = require('mariadb');
const db = mariadb.createPool({
  host: "svc.sel5.cloudtype.app",
  user: "root",
  password: "123456789@@",
  database: "shop",
  port: 30044,
});

module.exports = db;
