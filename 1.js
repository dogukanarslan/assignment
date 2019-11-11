const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(item => copy.push(item));
console.log(copy);
document.getElementById("one").innerHTML = copy;
