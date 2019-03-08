const age = "100";
document.write(age);

const somehting = "ddd";

const test = [
  { name: "something to talk about", shit: 10 },
  { name: "interesting love", shit: 10 }
];

function tester(name, age) {
  return function(name) {
    return name + age;
  };
}

const a = tester("nick", "34");

console.log(a);
