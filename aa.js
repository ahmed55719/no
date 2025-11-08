let ul = document.querySelector("ul");
let count = 1;
window.onload = function() {
    const savedItems = JSON.parse(localStorage.getItem("laaList")) || [];
    savedItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = item;
        ul.appendChild(li);
    });
    count = savedItems.length + 1;
};
function saveList() {
    const items = Array.from(ul.children).map(li => li.innerHTML);
    localStorage.setItem("laaList", JSON.stringify(items));
}
function addListItem() {
    const li = document.createElement("li");
    li.innerHTML = "لأ " + count;
    ul.appendChild(li);
    count++;
    saveList();
}


function remove() {
    if (ul.lastElementChild) {
        ul.lastElementChild.remove();
        count--;
        saveList(); 
    }
}
