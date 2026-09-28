let tasks = [
  { id: 1, text: "Review Array Methods", duration: 30 },
  { id: 2, text: "Build DOM Element", duration: 45 },
  { id: 3, text: "Test LocalStorage", duration: 20 }
];

const taskList = document.getElementById('task-list');
const totalMinsSpan = document.getElementById('total-mins');

function renderTasks() {
  // 1. Clear the taskList innerHTML to prevent duplication
  
  // 2. Loop through tasks using forEach(), create <li> elements, 
  //    set their textContent to `${task.text} (${task.duration} mins)`, 
  //    and append them to taskList

  // 3. Use reduce() to sum up all task durations, 
  //    and display the total result inside totalMinsSpan.textContent
}

// Run it
renderTasks();