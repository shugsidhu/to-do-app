function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the next
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');
    //Create a delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'delete';
    //set the input's type to checkbox
    checkbox.type="checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);
    //attach delete button to li
    newLi.appendChild(deleteButton);
    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
    deleteButton.addEventListener("click", event => {
      event.preventDefault();
      newLi.remove();
    });
  });
}

function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

function createNewToDo () {
  if(!newToDoText.value) { return; }

  toDos.push({
    title: newToDoText.value,
    complete:false
  });

   newToDoText.value = '';

   renderTheUI();
 }

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });
  renderTheUI();
 }

window.onload = function() {
  onReady();
};
