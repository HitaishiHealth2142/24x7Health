// db.js — 24x7health.in

const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'health24x7',
  password: 'Health@2142',
  database: 'healthcare_24x7',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('❌ DB connection error:', err);
    return;
  }
  console.log('✅ 24x7Health DB connected');
  connection.release();
});

module.exports = db;