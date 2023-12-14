let todos = [];
const todoList = document.getElementById("todo-list");
const removeAllButton = document.getElementById("remove-all-completed");

function addNewTodo() {
    let input = document.querySelector("input").value;
    todos[todos.length] = { task: input, completed: false };
    console.log(todos);
    populateTodoList();
}

function populateTodoList() {
  let input = document.querySelector("input").value;
   todoList.innerHTML = "";
   for (const item of todos) {
     let listItem = document.createElement("li");
     let checkbox = document.createElement("input");
     checkbox.setAttribute("type", "checkbox");
     checkbox.setAttribute("id", todos.indexOf(item));
     let listItemLabel = document.createElement("label");
     listItemLabel.setAttribute("for", todos.indexOf(item));
     listItemLabel.innerText = item.task;
     listItem.appendChild(listItemLabel);
     listItem.appendChild(checkbox);

     // Check box line strike
     checkbox.addEventListener("change", function (event) {
       if (event.target.checked) {
         listItem.setAttribute("class", "strike");
         item.completed = true;
       } else {
         listItem.setAttribute("class", "no-strike");
         item.completed = false;
       }
     });

     //  //trash button
     let trashSpan = document.createElement("span");
     listItem.appendChild(trashSpan);
     let trashIcon = document.createElement("i");
     trashIcon.setAttribute("class", "fa fa-trash-o");
     trashSpan.appendChild(trashIcon);

     //  //delete task event

     trashSpan.addEventListener("click", () => {
       let index = todos.indexOf(item);
       if (index > -1) {
         todos.splice(index, 1);
       }
       populateTodoList(); //refresh the todo list
     });

     function removeCompletedItems() {
       if (item.completed === true) {
        let completedItem = item.completed === true;
         let index = todos.indexOf(completedItem);
          todos.splice(index);
         document.querySelector(".strike").remove();
       }
     }
     //remove all button
     removeAllButton.addEventListener("click", removeCompletedItems);

     todoList.appendChild(listItem);
   }
}
 




// populateTodoList(); // populate Todo List when the page loads

