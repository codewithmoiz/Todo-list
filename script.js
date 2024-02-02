var inp = document.getElementById('task-input');
var uList = document.getElementById('ul');
var editInp = document.getElementById('edit-inp');
var editingElement = null;

var indexOfLists = 1;

function createTodo() {
    var createLi = document.createElement('li');
    createLi.className += ` li${indexOfLists}`
    indexOfLists++;
    
    var list_text = document.createTextNode(inp.value);
    createLi.appendChild(list_text);
    uList.appendChild(createLi);
    inp.value = '';

    var editBtn = document.createElement('button');
    editBtn.setAttribute("onclick", "openEdit(this)");
    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    createLi.appendChild(editBtn);

    var deleteBtn = document.createElement('button');
    deleteBtn.setAttribute("onclick", "deleteList(this)");
    deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    createLi.appendChild(deleteBtn);
}

function deleteList(elem) {
    elem.parentNode.style.display = 'none';
}

function openEdit(element) {
    editingElement = element.parentNode;
    editInp.value = editingElement.firstChild.nodeValue.trim();
    document.getElementById('edit').style.left = '1%';
}

function closeEdit() {
    document.getElementById('edit').style.left = '-100%';
}

function updateText() {
    if (editingElement) {
        editingElement.firstChild.nodeValue = editInp.value;
    }
}