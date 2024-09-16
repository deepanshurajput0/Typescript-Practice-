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
