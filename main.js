//get canvas
const canvas = document.getElementById("canvas");

//get lion
const lion = document.getElementById("lion");

let elapsed = 0;

//create setInterval
setInterval(function () {
  elapsed++;
  console.log(elapsed);

  //create random
  let randomTop = Math.floor(Math.random() * 500);
  let randomLeft = Math.floor(Math.random() * 500);

  lion.style.position = "absolute";
  lion.style.top = `${randomTop}px`;
  lion.style.left = `${randomLeft}px`;
}, 1000);
