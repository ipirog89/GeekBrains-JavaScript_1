"use strict"

let a = 5
let b = 6

if (a >= 0 && b >= 0) {
    alert(`a - b = ${a - b}`);
} else if (a < 0 && b < 0) {
    alert(`a * b = ${a * b}`);
} else if ((a * b) < 0) {
    alert(`a + b = ${a + b}`);
}

// Или плоско

// if (a >= 0 && b >= 0) alert(`a - b = ${a - b}`);
// if (a < 0 && b < 0) alert(`a * b = ${a * b}`);
// if ((a * b) < 0) alert(`a + b = ${a + b}`);