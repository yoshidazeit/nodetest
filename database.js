
// MySQLを使うためのコードを貼り付けてください
const mysql = require('mysql');

// 定数connectionを定義して接続情報の書かれたコードを代入してください
const connection = mysql.createConnection({
  host: 'gas-test',
  user: 'gas_user',
  password: 'gastest',
  port : 3306,
  database: 'board'
});

connection.query(

  'SELECT * FROM categorys',
  (error, results) => {
    console.log(error);
    console.log(results);
  }
);
