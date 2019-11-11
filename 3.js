var numbers = [12, 5, 20, 130, 44, 9, 240]

const lowerThan15 = numbers.filter(item => item < 15);
console.log(lowerThan15);
document.getElementById("three").innerHTML = lowerThan15;
