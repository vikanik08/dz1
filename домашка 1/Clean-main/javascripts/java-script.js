document.addEventListener("DOMContentLoaded", function () {
    let str = "abcde"; // Исправлено
    console.log(str[0]); 
    console.log(str[1]);
    console.log(str[2]);
    console.log(str[3]);


// задача 2
let x = parseInt(prompt("Напишите первое число:"));
let y = parseInt(prompt("Напишите второе число:"));
console.log(x > 0 || y > 0); // Исправлено

// задача 3
let age = parseInt(prompt("Напишите ваш возраст:"));
if (age >= 18) {
    console.log("Старик");
} else {
    console.log("Чиловый гай");
}

});





