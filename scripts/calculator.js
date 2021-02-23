function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

function quadraticFormula(a, b, c) {

    var add = (-b + Math.sqrt(Math.pow(b,2) - (4 * a * c))) / (2 * a);
    var subtract = (-b - Math.sqrt(Math.pow(b,2) - (4 * a * c))) / (2 * a);
    
    return [add, subtract];
}