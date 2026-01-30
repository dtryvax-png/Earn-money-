# Earn-money-
learning-github
<!DOCTYPE html>
<html>
<head>
  <title>Earn Money Tasks</title>
</head>
<body>

<h2>📝 Task & Earn (Demo)</h2>
<p>Coins: <span id="coins">0</span> 💰</p>

<input type="text" id="taskInput" placeholder="Andika task hapa">
<button onclick="addTask()">Add Task</button>

<ul id="taskList"></ul>

<script>
let coins = localStorage.getItem("coins") || 0;
document.getElementById("coins").innerText = coins;

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
  coins++;
  localStorage.setItem("coins", coins);
  document.getElementById("coins").innerText = coins;
}
</script>

</body>
</html>
