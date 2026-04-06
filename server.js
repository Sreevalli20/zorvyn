const express = require('express');
const app = express();
app.use(express.json());

let users = [];
let records = [];

// Middleware for role
function checkRole(allowedRoles) {
  return (req, res, next) => {
    const role = req.headers.role;
    if (!allowedRoles.includes(role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
}

// User APIs
app.post('/users', (req, res) => {
  users.push(req.body);
  res.json({ message: "User created" });
});

app.get('/users', (req, res) => {
  res.json(users);
});

// Record APIs
app.post('/records', checkRole(['admin']), (req, res) => {
  records.push(req.body);
  res.json({ message: "Record added" });
});

app.get('/records', (req, res) => {
  res.json(records);
});

// Dashboard
app.get('/dashboard', (req, res) => {
  let income = 0, expense = 0;
  records.forEach(r => {
    if (r.type === 'income') income += r.amount;
    else expense += r.amount;
  });
  res.json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense
  });
});

app.listen(5000, () => {
  console.log("✅ Server started successfully!");
  console.log(" Running at: http://localhost:5000");
});
