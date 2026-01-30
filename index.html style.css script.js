# Earn-money
<!DOCTYPE html>
<html>
<head>
  <title>Task & Earn</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="app">
  <h2>💼 Task & Earn</h2>

  <div class="card">
    <p>Balance</p>
    <h1>Ksh <span id="balance">0</span></h1>
  </div>

  <div class="card">
    <input type="text" id="taskInput" placeholder="Enter task">
    <button onclick="addTask()">Add Task</button>
    <ul id="taskList"></ul>
  </div>

  <div class="card">
    <h3>💸 Withdraw</h3>
    <input type="number" id="withdrawAmount" placeholder="Amount">
    <button onclick="withdraw()">Withdraw</button>
    <p id="withdrawMsg"></p>
  </div>

</div>

<script src="script.js"></script>
</body>
</html>body {
  font-family: Arial;
  background: #f2f2f2;
}

.app {
  max-width: 400px;
  margin: auto;
  padding: 10px;
}

.card {
  background: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
}

button {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  background: green;
  color: white;
  border: none;
  border-radius: 5px;
}

input {
  width: 100%;
  padding: 7px;
  margin-top: 5px;
}

li {
  margin-top: 5px;
}let balance = localStorage.getItem("balance") || 0;
document.getElementById("balance").innerText = balance;

function addTask() {
  let task = document.getElementById("taskInput").value;
  if (task === "") return;

  let li = document.createElement("li");
  li.innerHTML = task + 
    ' <button onclick="completeTask(this)">Done</button>';

  document.getElementById("taskList").appendChild(li);
  document.getElementById("taskInput").value = "";
}

function completeTask(btn) {
  btn.parentElement.remove();
  balance = parseInt(balance) + 10; // 10 bob per task
  localStorage.setItem("balance", balance);
  document.getElementById("balance").innerText = balance;
}

function withdraw() {
  let amount = document.getElementById("withdrawAmount").value;
  let msg = document.getElementById("withdrawMsg");

  if (amount <= 0) {
    msg.innerText = "Enter valid amount";
    return;
  }

  if (amount > balance) {
    msg.innerText = "Insufficient balance";
    return;
  }

  msg.innerText = "Withdrawal pending ⏳ (Demo)";
}
