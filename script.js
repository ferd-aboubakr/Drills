// Ex 01: forEach + reduce
const warmupScores = [12, 18, 22, 15, 9];
const ex01List = document.querySelector('#ex01-list');
const ex01Total = document.querySelector('#ex01-total');
document.querySelector('#ex01-render').addEventListener('click', () => {
  ex01List.innerHTML = '';
  warmupScores.forEach((score, index) => {
    const li = document.createElement('li');
    li.textContent = `Attempt ${index + 1}: ${score}`;
    ex01List.append(li);
  });
  const total = warmupScores.reduce((sum, value) => sum + value, 0);
  ex01Total.textContent = String(total);
});

// Ex 02 + Ex 03: form state + localStorage bridge
const PROFILE_KEY = 'dom-storage-series-profile';
const profileForm = document.querySelector('#profile-form');
const profileName = document.querySelector('#profile-name');
const profileRole = document.querySelector('#profile-role');
const profileState = document.querySelector('#profile-state');
const profileStorageStatus = document.querySelector('#profile-storage-status');

const renderProfileState = (profile) => {
  profileState.textContent = `${profile.name} (${profile.role})`;
  profileStorageStatus.textContent = 'Saved to localStorage';
};

profileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const profile = {
    name: profileName.value.trim(),
    role: profileRole.value.trim(),
  };

  if (!profile.name || !profile.role) {
    profileStorageStatus.textContent = 'Please fill in both fields';
    return;
  }

  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  renderProfileState(profile);
  profileForm.reset();
});

document.querySelector('#restore-profile').addEventListener('click', () => {
  const saved = localStorage.getItem(PROFILE_KEY);
  if (!saved) {
    profileStorageStatus.textContent = 'Nothing stored';
    return;
  }

  const parsed = JSON.parse(saved);
  profileName.value = parsed.name;
  profileRole.value = parsed.role;
  renderProfileState(parsed);
});

document.querySelector('#clear-profile').addEventListener('click', () => {
  localStorage.removeItem(PROFILE_KEY);
  profileState.textContent = 'None';
  profileStorageStatus.textContent = 'Storage cleared';
});

// Ex 04: filter + map
const students = [
  { name: 'Nina', grade: 88 },
  { name: 'Leo', grade: 64 },
  { name: 'Ari', grade: 91 },
  { name: 'Mia', grade: 72 },
];
document.querySelector('#ex04-run').addEventListener('click', () => {
  const passingNames = students
    .filter((student) => student.grade >= 70)
    .map((student) => student.name);
  document.querySelector('#ex04-output').textContent = passingNames.join(', ') || 'None';
});

// Ex 05: find cart item
const cart = [];
const renderCart = () => {
  const cartList = document.querySelector('#cart-list');
  cartList.innerHTML = '';
  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x${item.quantity}`;
    cartList.append(li);
  });
};

document.querySelector('#cart-add').addEventListener('click', () => {
  const cartInput = document.querySelector('#cart-item');
  const name = cartInput.value.trim().toLowerCase();
  if (!name) return;

  const existing = cart.find((item) => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, quantity: 1 });
  }

  cartInput.value = '';
  renderCart();
});

// Ex 06: method chaining
const movies = [
  { title: 'Dune', year: 2021, rating: 8.0 },
  { title: 'The Batman', year: 2022, rating: 7.8 },
  { title: 'Soul', year: 2020, rating: 8.1 },
  { title: 'Tenet', year: 2020, rating: 7.3 },
];
document.querySelector('#ex06-run').addEventListener('click', () => {
  const result = movies
    .filter((movie) => movie.year >= 2020 && movie.rating >= 7.8)
    .sort((a, b) => b.rating - a.rating)
    .map((movie) => `${movie.title} (${movie.rating})`)
    .join(', ');

  document.querySelector('#ex06-output').textContent = result || 'No results';
});

// Ex 07: every + some
const users = [
  { username: 'ava', active: true, trial: false },
  { username: 'kai', active: true, trial: true },
  { username: 'zoe', active: true, trial: false },
];
document.querySelector('#ex07-run').addEventListener('click', () => {
  const allActive = users.every((user) => user.active);
  const hasTrial = users.some((user) => user.trial);
  document.querySelector('#ex07-every').textContent = allActive ? 'Yes' : 'No';
  document.querySelector('#ex07-some').textContent = hasTrial ? 'Yes' : 'No';
});

// Ex 08: deletion pattern
const seedTasks = [
  { id: 1, title: 'Review notes' },
  { id: 2, title: 'Practice arrays' },
  { id: 3, title: 'Ship mini app' },
];
let tasks = [...seedTasks];

const renderTasks = () => {
  const list = document.querySelector('#ex08-list');
  list.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `${task.title} <button data-task-id="${task.id}">Delete</button>`;
    list.append(li);
  });
};

document.querySelector('#ex08-list').addEventListener('click', (event) => {
  const deleteButton = event.target.closest('button[data-task-id]');
  if (!deleteButton) return;
  const id = Number(deleteButton.dataset.taskId);
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
});

document.querySelector('#ex08-reset').addEventListener('click', () => {
  tasks = [...seedTasks];
  renderTasks();
});

// Ex 09: event delegation via parent
const ex09Status = document.querySelector('#ex09-status');
document.querySelector('#ex09-actions').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  ex09Status.textContent = button.dataset.action;
});

// Ex 10: expense tracker (form + localStorage + reduce + render)
const EXPENSE_KEY = 'dom-storage-series-expenses';
const expenseForm = document.querySelector('#expense-form');
const expenseTitle = document.querySelector('#expense-title');
const expenseAmount = document.querySelector('#expense-amount');
const expenseList = document.querySelector('#expense-list');
const expenseTotal = document.querySelector('#expense-total');

const loadExpenses = () => {
  const saved = localStorage.getItem(EXPENSE_KEY);
  if (!saved) return [];
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

let expenses = loadExpenses();

const saveExpenses = () => {
  localStorage.setItem(EXPENSE_KEY, JSON.stringify(expenses));
};

const renderExpenses = () => {
  expenseList.innerHTML = '';
  expenses.forEach((expense) => {
    const li = document.createElement('li');
    li.textContent = `${expense.title}: $${expense.amount.toFixed(2)}`;
    expenseList.append(li);
  });

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  expenseTotal.textContent = total.toFixed(2);
};

expenseForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = expenseTitle.value.trim();
  const amount = Number.parseFloat(expenseAmount.value);

  if (!title || Number.isNaN(amount) || amount < 0) return;

  expenses.push({ id: Date.now(), title, amount });
  saveExpenses();
  renderExpenses();
  expenseForm.reset();
});

renderTasks();
renderExpenses();
