var myform = document.getElementById('myform');
var myInput = document.querySelector('form > input');
myform.onsubmit = function (e) {
    e.preventDefault();
    var value = myInput.value;
    var todos = [];
    todos.push(value);
    var h2 = document.createElement('h2');
    todos.forEach(function (item) {
        var todoItem = item;
        h2.textContent = todoItem;
        document.body.appendChild(h2);
    });
};
