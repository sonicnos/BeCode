const addinput = document.querySelector(".add-todo-input");
const addBtn = document.querySelector(".btn-add");
const todoList = document.querySelector(".todo-list");

let todoListArray = []


const deleteTask = (indexArr) => {
    console.log("works " + indexArr);
}

const addTaskToList = (input) => {
    let newItem = document.createElement("li");
    itemId = todoListArray.length - 1;

    todoList.appendChild(newItem);
    newItem.appendChild(document.createTextNode(input));
    createDeleteItemBtn = newItem.appendChild(document.createElement("button"));
    createDeleteItemBtn.innerText = "Delete " + itemId;
    createDeleteItemBtn.className = 'dlt-btn-' + itemId;
    createDeleteItemBtn.setAttribute('id' + "#dlt-btn");
    selectedDeleteBtn = document.querySelector("#dlt-btn");
    createDeleteItemButton.setAttribute("onclick", "deleteTask()");
    newItem.addEventListener ("click", (e) => {
        console.log(newItem);
    })

}

addBtn.addEventListener ("click", (e) => {
    let addInputValue = addinput.value
    let checkTaskExistInTodoList = todoListArray.includes(addInputValue);
    if(!checkTaskExistInTodoList) {
        todoListArray.push(addInputValue);
        addTaskToList(addInputValue);
    }


    console.log(todoListArray);
    console.log(checkTaskExistInTodoList);
});


