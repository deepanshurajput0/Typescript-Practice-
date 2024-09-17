var form = document.getElementById('myform');
var myInput = document.querySelector('form > input');
var container = document.getElementById('container'); // Add an element with this ID in your HTML
form.onsubmit = function (e) {
    e.preventDefault();
    var value = Number(myInput.value);
    var totalValue = value + 20;
    var newElem = document.createElement('h1');
    newElem.innerHTML = String(totalValue);
    // Append the new element to a specific container
    container.appendChild(newElem);
};
