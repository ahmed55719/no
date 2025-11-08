           let ul=document.querySelector("ul");
           let count=1;
function addListItem() {
    let ul=document.querySelector("ul");
    let li =document.createElement("li");
    li.innerHTML="لأ "+count;
    ul.appendChild(li);
    count++;
};

function remove() {
ul.lastElementChild.remove();
    count--;
};