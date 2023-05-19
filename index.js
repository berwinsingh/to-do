const taskVal = document.querySelector(".task-name");
const listContainer = document.querySelector("#list-container");

function addTask () {
    if (taskVal.value==='') {
        alert("Please enter a value to add it")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = taskVal.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskVal.value= "";
    saveData();
}

//Deleting the element that we have created
listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//Saving and showcasing data
const saveData = ()=>{
    localStorage.setItem("data",listContainer.innerHTML);
};

const showList = ()=>{
    listContainer.innerHTML = localStorage.getItem("data");
};

showList();