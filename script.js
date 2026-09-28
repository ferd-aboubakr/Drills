let tasks = [
  { id: 1, text: "Review Array Methods", duration: 30 },
  { id: 2, text: "Build DOM Element", duration: 45 },
  { id: 3, text: "Test LocalStorage", duration: 20 }
];



const tasklist =document.getElementById('task-list');
const totalMinSpan = document.getElementById('total-mins');
const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');


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





// TODO: Write your form submit event listener here!
form.addEventListener('submit', (e) => {
  // 1. Prevent the default form submission (page reload)
  e.preventDefault();

  // 2. Create a new task object:
  //    - id: Date.now() (gives us a unique timestamp ID)
  //    - text: taskInput.value
  //    - duration: 15 (let's default it to 15 mins for now)
  
  const task = {id: Date.now(), text: `${taskInput.value}`, duration: 15};
  // 3. Push the new task into the 'tasks' array
  
  tasks.push(task);
  // 4. Reset the input field (taskInput.value = '')
  taskInput.value= '';
  // 5. Call renderTasks() to update the screen
  renderTasks();
});
renderTasks();