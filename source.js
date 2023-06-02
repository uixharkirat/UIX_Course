// 1
let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi();
//output = Hi, Pete

//2 

function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  let work = makeWorker();
  
  work();
  //output = Pete

  //3

function makeCounter(){
    let count = 0;

    return function() {return count++;}

};

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter2());
alert(counter2());

//output = 0,1

// 4

function Counter(){
    let count = 0;
    this.up = function(){ return ++count;};
    this.down = function() {return --count;};
}

let counter = new Counter();

alert(counter.up());
alert(counter.up());
alert(counter.down());

// output = 1,2,1

// 5

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

// output = Hello, John

// 6

function sum(a) {

    return function(b) {
      return a + b;
    };
  }
alert( sum(1)(2) );
alert( sum(5)(-1) );

// output = 3,4

// 7

let x = 1;

function func() {
  alert(x);
  let x = 2;
}

func();

//output = error

// 8

function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  alert( arr.filter(inBetween(3, 6)) );

  // output = 3,4,5,6
  
//9 
function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  alert( arr.filter(inArray([1, 2, 10])) );

  // output = 1,2

// 10

function printNum(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  printNum(5, 10);
  //output 5,6,7,8,9,10

  //11

  let i = 0;

setTimeout(() => alert(i), 100); 
for(let j = 0; j < 100000000; j++) {
  i++;
}

// 100000000