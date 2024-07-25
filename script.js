const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const btn = document.querySelector('.input-button');

btn.addEventListener('click', addTask);

inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveToStorage();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveToStorage();
    }
}, false);

function addTask() {
    if (inputBox.value === '') {
        alert("Write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();
