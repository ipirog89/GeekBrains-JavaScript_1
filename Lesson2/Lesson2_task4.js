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

let a = 1, b = 2;

alert(`call add(${a},${b}) return ` + add(a,b));
alert(`call sub(${a},${b}) return ` + sub(a,b));
alert(`call mul(${a},${b}) return ` + mul(a,b));
alert(`call div(${a},${b}) return ` + div(a,b));