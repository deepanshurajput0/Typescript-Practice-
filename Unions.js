/// Unions 
function Input(value) {
    return value;
}
console.log(Input('deepanshu'));
var userInput = function (value) {
    if (typeof value === 'number') {
        return value * 2;
    }
    else {
        return value.toUpperCase();
    }
};
console.log(userInput(24));
var homework = function (value) {
    if (typeof value === 'number') {
        return " $ ".concat(value / 100);
    }
    else if (typeof value === 'string') {
        return value.toString()[0].toUpperCase() + value.slice(1);
    }
    else {
        return value === true ? 'Yes' : 'No';
    }
};
console.log(homework('deepanshu'));
