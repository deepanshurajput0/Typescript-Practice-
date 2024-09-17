/// Generics 
// Generics in TypeScript are a powerful feature that allows you to create reusable, flexible, and type-safe components, functions, and classes
function Identity(arg) {
    return arg;
}
var results = Identity('deepanshu');
console.log(results);
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
var ourType = add(2, 'deepanshu');
function names(nam, lNam) {
    console.log(nam, lNam);
}
names('deepanshu', 'verma');
var product1 = {
    name: 'Laptop',
    price: 40000,
    quantity: 5
};
console.log(product1);
function totalPrice(product1) {
    console.log(product1.quantity * product1.price);
}
totalPrice(product1);
var getValue = function (data) {
    console.log(data);
};
var person1 = {
    name: 'deepanshu',
    age: 19
};
getValue(person1);
var user2 = {
    name: 'deepanshu',
    age: 19,
    email: 'deepanshu@gmail.com'
};
var user = {
    name: 'shivam',
    age: 17
};
var func = function (n, o) {
    return { n: n, o: o };
};
var ans = func(user, user2);
console.log(ans);
