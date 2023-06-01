//1
let user = {
    name: "John",
    years: 30
};
  
  let {name, years: age, isAdmin = false} = user;
  
  alert( name );
  alert( age );
  alert( isAdmin );

// Output Jonh, 30, false

//2
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
}

alert(topSalary(salaries))
// output= pete

//3
let user1 = {
    name:"John Smith",
    age: 35
};
user1 = JSON.parse(JSON.stringify(user));
alert (JSON.stringify(user));

//output = string form evertyhing

//4
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
 return (key != "" && value == meetup) ? undefined : value;
  }));

 // output= {"title":"Conference","occupiedBy":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}

// 5
function f() {
    try {
      alert('start');
      return "result";
    } catch (err) {
      
    } finally {SS
      alert('cleanup!');
    }
  }
  
  f();

  // output start

// 6
function f() {
    try {
      alert('start');
      throw new Error("an error");
    } catch (err) {
      // ...
      if("can't handle the error") {
        throw err;
      }
  
    } finally {
      alert('cleanup!')
    }
  }
  
  f();

  // putput start, cleanup