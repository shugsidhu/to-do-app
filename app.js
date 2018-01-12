function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    
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
  let id= 0;
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  let deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'button';
  deleteButton.textContent = 'Remove';

  localStorage.getItem(function() {
    if(value===null){
      return;
    }
    toDos=JSON.parse(array);
  });

function createNewToDo () {
  if(!newToDoText.value) { return; }

  id++;

  toDos.push({
    title: newToDoText.value,
    complete:false,
    id: id,
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

      let deleteButton = document.createElement('button')
      deleteButton.innerHTML = 'button';
      deleteButton.textContent = 'Remove';

      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      newLi.appendChild(deleteButton);

      deleteButton.addEventListener('click', event => {
        toDos = toDos.filter(function(el){
          return el.id !== toDo.id;
        });
        renderTheUI();
        localStorage.setItem('array',(JSON.stringify(toDos)));
    });

      checkbox.addEventListener('CheckboxStateChange', event => {
        if(checkbox.checked === 'false') {
          toDo.complete = false;
        }
        else if (checkbox.checked === 'true') {
          toDo.complete = true;
        }
        return(toDos);
        localStorage.setItem('array',(JSON.stringify(toDos)));
});


  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    localStorage.setItem('array', (JSON.stringify(toDos)));
  });
});
  renderTheUI();
}

window.onload = function() {
  onReady();
}
};
