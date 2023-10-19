// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve('resolved');
//         }, 2000);
//       });
//     }

//     async function asyncCall() {
//       console.log('calling');
//       const result = await resolveAfter2Seconds();
//       console.log(result);
//       // Expected output: "resolved"
//     }

//     asyncCall();

const body = document.querySelector("body");
console.log(body);
let colorBg = (body.style.background = "black");

function changeBG(color) {
  return new Promise((resolve) => {
    setTimeout(() => {
      colorBg = color;
    }, 10);
  });
}

changeBG("red");
