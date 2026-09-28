let tasks = [
  { id: 1, text: "Review Array Methods", duration: 30 },
  { id: 2, text: "Build DOM Element", duration: 45 },
  { id: 3, text: "Test LocalStorage", duration: 20 }
];



const tasklist =document.getElementById('task-list');
const totalMinSpan = document.getElementById('total-mins');

function renderTasks() {
  // 1. Clear the taskList innerHTML to prevent duplication
tasklist.innerHTML = '';
// tasks.forEach((task) => {
//   const li = document.createElement('li');
//   li.textContent= `${task.text}(${task.duration} mins)`;
//   tasklist.append(li);}
// )

tasks.forEach(task => {
tasklist.innerHTML += `<li>${task.text} ( ${task.duration}mins)</li>`;
});

totalMinSpan.textContent = tasks.reduce((totalTime, taskTime) => totalTime+taskTime.duration ,0) ;
  
  // 2. Loop through tasks using forEach(), create <li> elements, 
  //    set their textContent to `${task.text} (${task.duration} mins)`, 
  //    and append them to taskList

  // 3. Use reduce() to sum up all task durations, 
  //    and display the total result inside totalMinsSpan.textContent
}

// Run it
renderTasks();