// 1
let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
alert( rabbit.jumps );
  
delete rabbit.jumps;
  
alert( rabbit.jumps );
  
delete animal.jumps;
  
alert( rabbit.jumps );

// ouotput = true, null, undefined

// 2

let head = {
    glasses: 1
  };
  
let table = {
    pen: 3,
    __proto__: head
  };
  
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
let pockets = {
    money: 2000,
    __proto__: bed
  };
  
alert( pockets.pen );
alert( bed.glasses ); 
alert( table.money );

// Output = 3, 1, undefined

// 3
let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat();
  
  alert("The rabbit is full: " + rabbit.full);
  // output = true

// 4
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();
// Rabbit.prototype = {}; //1
// Rabbit.prototype.eats = false; //2
// delete rabbit.eats; //3
delete Rabbit.prototype.eats; //4

alert( rabbit.eats );

// 1st output = True
// 2nd output = False
// 3rd output = True
// 4th output = Undefined

// 5

function User(name) {
    this.name = name;
  }
//   User.prototype = {};
  
  let user = new User('John');
  let user2 = new user.constructor('Pete');
  
  alert( user2.name );

  // output with user prototype = undefined
  // output withut user prototype = Pete

// 6
class Clock {
    constructor({ template }) {
      this.template = template;
    }
render() {
    let date = new Date();
  
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
  
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
  
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
  
    let output = this.template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', secs);
  
    alert(output);
    }
stop() {
    clearInterval(this.timer);
    }
start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
    }
  }

let clock = new Clock({template: 'h:m:s'});
  clock.start();

// Output =  clock

// 7

let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);

  // output = 1

  // 8 
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => alert('runs after 3 seconds'));

//   output = takes 3 seconds to run and then prints{runs after 3 seconds}
