"use strict"

/**
 * Функция реализует итерацию цикла
 * @param {array} i
 */
function iterate(i) {
    console.log(i[0])
    i[0]++
}

for (let i = [0]; i[0] <= 9; iterate(i)) {
    /* здесь пусто */
}