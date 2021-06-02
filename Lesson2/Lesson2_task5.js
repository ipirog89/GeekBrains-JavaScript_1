"use strict"

/**
 * function for adding 2 numbers
 * @param {number} a
 * @param {number} b
 * @return {number} a + b
 */
function add(a, b) {
    return a + b;
}

/**
 * function for subtraction 2 numbers
 * @param {number} a
 * @param {number} b
 * @return {number} a - b
 */
function sub(a, b) {
    return a - b;
}

/**
 * function for multiplication 2 numbers
 * @param {number} a
 * @param {number} b
 * @return {number} a * b
 */
function mul(a, b) {
    return a * b;
}

/**
 * function for division 2 numbers
 * @param {number} a
 * @param {number} b
 * @return {number} a / b
 */
function div(a, b) {
    return a / b;
}

/**
 * function for math operation 2 numbers
 * @param {number} arg1
 * @param {number} arg2
 * @param {string} operation
 * @return {number}
 */
function mathOperationWithSwitch(arg1, arg2, operation) {
    switch (operation) {
        case "add":
            return arg1 + arg2;
        case "sub":
            return arg1 - arg2;
        case "mul":
            return arg1 * arg2;
        case "div":
            return arg1 / arg2;
        default:
            throw(`В функцию передана не поддерживаемая операция ${operation}\n Поддерживаются только add, mul, sub, div`);
    }
}

// альтернативная версия используя функции и 4 го задания
/**
 * function for math operation 2 numbers
 * @param {number} arg1
 * @param {number} arg2
 * @param {function} operation
 * @return {number}
 */
function mathOperation(arg1, arg2, operation) {
    return operation(arg1,arg2);
}

let a = 1, b = 2

alert(`call mathOperation(${a},${b},add) return ` + mathOperation(a,b,add));
alert(`call mathOperation(${a},${b},sub) return ` + mathOperation(a,b,sub));
alert(`call mathOperation(${a},${b},mul) return ` + mathOperation(a,b,mul));
alert(`call mathOperation(${a},${b},div) return ` + mathOperation(a,b,div));

alert(`call mathOperationWithSwitch(${a},${b},add) return ` + mathOperationWithSwitch(a,b,"add"));
alert(`call mathOperationWithSwitch(${a},${b},sub) return ` + mathOperationWithSwitch(a,b,"sub"));
alert(`call mathOperationWithSwitch(${a},${b},mul) return ` + mathOperationWithSwitch(a,b,"mul"));
alert(`call mathOperationWithSwitch(${a},${b},div) return ` + mathOperationWithSwitch(a,b,"div"));

alert(`call mathOperationWithSwitch(${a},${b},div) return ` + mathOperationWithSwitch(a,b,"grow"));