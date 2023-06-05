// //1
// promise
//   .then(f1)
//   .catch(f2);

// // output = ReferenceError: promise is not defined

// // part 2
//   promise
//   .then(f1, f2);

// function f1(result) {
//   alert('Promise resolved: ' + result);
// }

// function f2(error) {
//   alert('Promise rejected: ' + error);
// }
// output =ReferenceError: promise is not defined

// // 3

// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       throw new Error("Whoops!");
//     }, 1000);
//   }).catch(alert);

//   // output= no output

// // 4

// async function loadJson(url) {
//     let response = await fetch(url);
  
//     if (response.status == 200) {
//       let json = await response.json();
//       return json;
//     }
  
//     throw new Error(response.status);
//   }
  
//   loadJson('https://javascript.info/no-such-user.json')
//     .catch(alert);

//     // output = error404 (as expected)

// // 5

// class HttpError extends Error {
//     constructor(response) {
//       super(`${response.status} for ${response.url}`);
//       this.name = 'HttpError';
//       this.response = response;
//     }
//   }
//   async function loadJson(url) {
//     let response = await fetch(url);
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new HttpError(response);
//     }
//   }
//   async function demoGithubUser() {
//     let user;
//     while(true) {
//       let name = prompt("Enter a name?", "iliakan");
//       try {
//         user = await loadJson(`https://api.github.com/users/${name}`);
//         break;
//       } catch(err) {
//         if (err instanceof HttpError && err.response.status == 404) {
     
//           alert("No such user, please reenter.");
//         } else {
//           throw err;
//         }
//       }
//     }
//     alert(`Full name: ${user.name}.`);
//     return user;
//   }
//   demoGithubUser();  // input iliakan output Ilya Kantor, input abc output Alastair Blake Campbell

// 6
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    // shows 10 after 1 second
    wait().then(result => alert(result));
  }
  
  f();

  // output = 10 after 1 second