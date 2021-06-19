import "./styles.css";

// let boxOne = document.getElementById("boxone");
// let boxTwo = document.getElementById("boxtwo");
// let boxThree = document.getElementById("boxthree");
// let boxFour = document.getElementById("boxfour");
// let boxFive = document.getElementById("boxfive");



let boxes = document.getElementsByClassName("box");
let boxesArray = [...boxes];


for (let i = 0; i < boxesArray.length; i++) {
  let box = boxesArray[i];

  console.log(box);
  
  box.onclick = (e) => {
    for (let j = 0; j < boxesArray.length; j++) {
      let _box = boxesArray[j];
      if (_box.classList.contains("active")) {
        _box.classList.remove("active");
        console.log(j);
      }
    }

    e.target.classList.add("active");
  };
}

// boxOne.onclick = () => {
//   // console.log(boxOne);
//   boxOne.classList.add("active");
//   boxTwo.classList.remove("active");
//   boxThree.classList.remove("active");
//   boxFour.classList.remove("active");
//   boxFive.classList.remove("active");
// };
// boxTwo.onclick = () => {
//   boxTwo.classList.add("active");
//   boxOne.classList.remove("active");
//   boxThree.classList.remove("active");
//   boxFour.classList.remove("active");
//   boxFive.classList.remove("active");
// };
// boxThree.onclick = () => {
//   boxThree.classList.add("active");
//   boxOne.classList.remove("active");
//   boxTwo.classList.remove("active");
//   boxFour.classList.remove("active");
//   boxFive.classList.remove("active");
// };
// boxFour.onclick = () => {
//   boxFour.classList.add("active");
//   boxOne.classList.remove("active");
//   boxTwo.classList.remove("active");
//   boxThree.classList.remove("active");
//   boxFive.classList.remove("active");
// };
// boxFive.onclick = () => {
//   boxFive.classList.add("active");
//   boxOne.classList.remove("active");
//   boxTwo.classList.remove("active");
//   boxThree.classList.remove("active");
//   boxFour.classList.remove("active");
// };
