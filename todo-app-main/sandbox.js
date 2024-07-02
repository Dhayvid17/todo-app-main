const addForm = document.querySelector(".todo");
const list = document.querySelector("ul");
const itemsCount = document.querySelector(".no-items");

let i = 4;


const generateTemplate = function (addTodo) {
  let html = `
 <li>
   <label>
     <input type="checkbox" name="checkbox" class="checkbox">
     <span class="circle"></span>
     <span class="item">${addTodo}</span>
   </label>
   <div>
     <img class="cancel" src="images/icon-cross.svg" alt="">
   </div>  
 </li>
`;
  list.innerHTML += html;
};

addForm.addEventListener("submit", e => {
  e.preventDefault();

  const addTodo = addForm.todo.value.trim();
  if (addTodo.length > 5) {
    generateTemplate(addTodo);
    addForm.reset();
    i++;
    updateCount(i);
  }
});

list.addEventListener("click", function (e) {
  if (e.target.classList.contains('cancel')) {
    e.target.parentElement.parentElement.remove();
    i--;
    updateCount(i);
  }
});

function updateCount(i) {
  itemsCount.innerHTML = i;
}


const allBtn = document.querySelector(".all");
const activeBtn = document.querySelector(".active");
const completedBtn = document.querySelector(".completed");
const checkboxes = document.querySelectorAll(".checkbox");
const clearBtn = document.querySelector(".p-ii");

list.addEventListener("change", function (event) {
  if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
    if (event.target.checked) {
      i--;
    } else {
      i++;
    }
    updateCount(i);
  }
});

function showAll() {
  Array.from(list.children).forEach(item => {
    item.style.display = "flex";
  });
}

function showActive() {
  Array.from(list.children).forEach(item => {
    if (item.querySelector('input').checked) {
      item.style.display = "none";
    } else {
      item.style.display = "flex";
    }
  });
}

function showCompleted() {
  Array.from(list.children).forEach(item => {
    if (item.querySelector('input').checked) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function clearCompleted() {
  Array.from(list.children).forEach(item => {
    if (item.querySelector('input').checked) {
      item.style.display = "none";
    }
  });
}

allBtn.addEventListener("click", showAll);
activeBtn.addEventListener("click", showActive);
completedBtn.addEventListener("click", showCompleted);
clearBtn.addEventListener("click", clearCompleted);


const sun = document.querySelector(".icon-i");
const moon = document.querySelector(".icon-ii");
const body = document.querySelector("body");
const todoInput = document.querySelector("form input");
const ulContainer = document.querySelector(".ul-container");
const items = document.querySelectorAll(".item");
const absolute = document.querySelector(".flex-items");

sun.addEventListener("click", () => {
  sun.style.display = "none";
  moon.style.display = 'block';
  body.classList.add('body-active');
  todoInput.classList.remove('todo-input');
  todoInput.classList.add('todo-active');
  ulContainer.classList.add("container-active");
  absolute.style.backgroundColor = 'hsl(0, 0%, 98%)';
});

moon.addEventListener("click", () => {
  moon.style.display = "none";
  sun.style.display = 'block';
  body.classList.remove('body-active');
  todoInput.classList.add('todo-input');
  todoInput.classList.remove('todo-active');
  ulContainer.classList.remove("container-active");
  absolute.style.backgroundColor = 'hsl(235, 24%, 19%)'
});

new Sortable(list, {
  animation: 150,
});




