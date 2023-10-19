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

function changeBG(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve((body.style.backgroundColor = color));
    }, delay);
  });
}

async function f1() {
  const colors = ["yellow", "red", "cyan", "violet", "green", "purple"];
  for (i = 0; i < colors.length; i++) {
    await changeBG(colors[i], 1000);
  }
}

f1();