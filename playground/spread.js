// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd))

// var groupA = ['Jen', 'Cory'] ;
// var groupB = ['Vikram']
// var final = [3, ...groupB, ...groupA];
//
// console.log(final)

var person = ['Andrew', 25];
var person2 = ['Jen', 29];
// Hi andrew, you are 25
function greet(name, age) {
  return "Hi " + name +", you are " + age + ".";
}
console.log(greet(...person))
console.log(greet(...person2))

var names = ['Mike', 'Ben'];
var final = ['Chris', ...names];

final.forEach(function(name) {
  console.log("Hello " + name);
});
