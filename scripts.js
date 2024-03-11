const container = document.querySelector(".container");
const thisInput1 = document.querySelectorAll(".input-value1");
const thisInput2 = document.querySelectorAll(".input-value2");
const thisInput3 = document.querySelectorAll(".input-value3");
const thisInput4 = document.querySelectorAll(".input-value4");
const thisInput5 = document.querySelectorAll(".input-value5");
const thisInput6 = document.querySelectorAll(".input-value6");
const button = document.querySelector(".enter");
const parent = document.querySelector(".key-board");
let header2 = document.querySelector(".header2");
const keyBoard = document.querySelectorAll(".key-board");
let finalVal1 = "";
let finalVal2 = "";
let finalVal3 = "";
let finalVal4 = "";
let finalVal5 = "";
let finalVal6 = "";
let wordOfDay = "";
const URL = "https://words.dev-apis.com/word-of-the-day";
async function fetchData() {
  const response = await fetch(URL);
  const data = await response.json();
  wordOfDay = data.word;
  wordOfDay = wordOfDay.toUpperCase();
  console.log(wordOfDay);
}

fetchData();
let one = document.getElementById("first-input");
document.addEventListener("keyup", (event) => {
  if ("KeyA" <= event.code && event.code <= "KeyZ") {
    keyBoard.forEach((element) => {
      element.style.pointerEvents = "auto";
      let index1 = Array.from(thisInput1).indexOf(event.target);
      let index2 = Array.from(thisInput2).indexOf(event.target);
      let index3 = Array.from(thisInput3).indexOf(event.target);
      let index4 = Array.from(thisInput4).indexOf(event.target);
      let index5 = Array.from(thisInput5).indexOf(event.target);
      let index6 = Array.from(thisInput6).indexOf(event.target);
      let nextInput1;
      if (index1 >= 0 && index1 <= 3) {
        nextInput1 = index1[index1 + 1];
        if (nextInput1 !== -1) {
          nextInput1.focus();
        }
      }
      if (index2 >= 0 && index2 <= 3) {
        let nextInput2 = index2[index2 + 1];
        console.log(nextInput2.length);
        if (nextInput2 !== -1) {
          nextInput2.focus();
        }
      }
      if (index3 >= 0 && index3 <= 3) {
        let nextInput3 = index3[index3 + 1];
        console.log(nextInput3.length);
        if (nextInput3 !== -1) {
          // nextInput3.focus();
        }
      }
      if (index4 >= 0 && index4 <= 3) {
        let nextInput4 = index4[index4 + 1];
        console.log(nextInput4.length);
        if (nextInput4 !== -1) {
          nextInput4.focus();
        }
      }
      if (index5 >= 0 && index5 <= 3) {
        let nextInput5 = index5[index5 + 1];
        console.log(nextInput5.length);
        if (nextInput5 !== -1) {
          nextInput5.focus();
        }
      }
      if (index6 >= 0 && index6 <= 3) {
        let nextInput6 = index6[index6 + 1];
        console.log(nextInput6.length);
        if (nextInput6 !== -1) {
          nextInput6.focus();
        }
      }
    });
  }
});
function checkAnswer() {
  thisInput1.forEach((input) => {
    finalVal1 = input.value;
    finalVal1.toString();
    // finalVal1.toUpperCase();
  });
  console.log(typeof finalVal1);
  thisInput2.forEach((input) => {
    finalVal2 = input.value;
    finalVal2.toString();
    // finalVal2.toUpperCase();
  });
  thisInput3.forEach((input) => {
    finalVal3 = input.value;
    finalVal3.toString();
    // finalVal3.toUpperCase();
  });
  thisInput4.forEach((input) => {
    finalVal4 = input.value;
    finalVal4.toString();
    // finalVal4.toUpperCase();
  });
  thisInput5.forEach((input) => {
    finalVal5 = input.value;
    finalVal5.toString();
    // finalVal5.toUpperCase();
  });
  thisInput6.forEach((input) => {
    finalVal6 = input.value;
    finalVal6.toString();
    // finalVal6.toUpperCase();
  });
}
function getFinalAnswer() {
  let countsLeft = 5;
  for (let i = 0; i <= countsLeft; i++) {
    if (finalVal1 === wordOfDay) {
      thisInput1.forEach((elem) => {
        elem.style.backgroundColor = "green";
      });
      header2.textContent = "YOU WIN!";
      header2.style.fontSize = "52px";
    } else if (
      finalVal1.split("").some((char) => wordOfDay.includes(char)) &&
      finalVal1 !== wordOfDay
    ) {
      thisInput1.forEach((input, index) => {
        if (wordOfDay.includes(finalVal1[index])) {
          input.style.backgroundColor = "yellow";
          header2.textContent = "Try Again";
        } else {
          input.style.backgroundColor = "gray";
          header2.textContent = "Letter Not Found ";
        }
      });
      i++;
    }

    document.querySelectorAll(".input-value2").forEach((element) => {
      element.style.pointerEvents = "auto";
    });
    if (finalVal2 === wordOfDay) {
      thisInput2.forEach((elem) => {
        elem.style.backgroundColor = "green";
      });
      header2.textContent = "YOU WIN!";
      header2.style.fontSize = "52px";
      return;
    } else if (
      finalVal2.split("").some((char) => wordOfDay.includes(char)) &&
      finalVal2 !== wordOfDay
    ) {
      thisInput2.forEach((input, index) => {
        if (wordOfDay.includes(finalVal2[index])) {
          input.style.backgroundColor = "yellow";
          header2.textContent = "Try Again";
        } else {
          input.style.backgroundColor = "gray";
          header2.textContent = "Letter Not Found";
        }
      });
      i++;
    }
    document.querySelectorAll(".input-value3").forEach((element) => {
      element.style.pointerEvents = "auto";
    });
    if (finalVal3 === wordOfDay) {
      thisInput3.forEach((elem) => {
        elem.style.backgroundColor = "green";
      });
      header2.textContent = "YOU WIN!";
      header2.style.fontSize = "52px";
    } else if (
      finalVal3.split("").some((char) => wordOfDay.includes(char)) &&
      finalVal3 !== wordOfDay
    ) {
      thisInput3.forEach((input, index) => {
        if (wordOfDay.includes(finalVal3[index])) {
          input.style.backgroundColor = "yellow";
          header2.textContent = "Try Again";
        } else {
          input.style.backgroundColor = "gray";
          header2.textContent = "Letter Not Found";
        }
      });
      i++;
    }
    document.querySelectorAll(".input-value4").forEach((element) => {
      element.style.pointerEvents = "auto";
    });
    if (finalVal4 === wordOfDay) {
      thisInput4.forEach((elem) => {
        elem.style.backgroundColor = "green";
      });
      header2.textContent = "YOU WIN!";
      header2.style.fontSize = "52px";
    } else if (
      finalVal4.split("").some((char) => wordOfDay.includes(char)) &&
      finalVal4 !== wordOfDay
    ) {
      thisInput4.forEach((input, index) => {
        if (wordOfDay.includes(finalVal4[index])) {
          input.style.backgroundColor = "yellow";
          header2.textContent = "Try Again";
        } else {
          input.style.backgroundColor = "gray";
          header2.textContent = "Letter Not Found";
        }
      });
      i++;
    }
    document.querySelectorAll(".input-value5").forEach((element) => {
      element.style.pointerEvents = "auto";
    });
    if (finalVal5 === wordOfDay) {
      thisInput5.forEach((elem) => {
        elem.style.backgroundColor = "green";
      });
    } else if (
      finalVal5.split("").some((char) => wordOfDay.includes(char)) &&
      finalVal5 !== wordOfDay
    ) {
      thisInput5.forEach((input, index) => {
        if (wordOfDay.includes(finalVal5[index])) {
          input.style.backgroundColor = "yellow";
          header2.textContent = "Try Again";
        } else {
          input.style.backgroundColor = "gray";
          header2.textContent = "Letter Not Found";
        }
      });
      i++;
    }
    document.querySelectorAll(".input-value6").forEach((element) => {
      element.style.pointerEvents = "auto";
    });

    if (finalVal6 === wordOfDay) {
      thisInput6.forEach((elem) => {
        elem.style.backgroundColor = "green";
        header2.textContent = "You Win";
      });
    } else if (finalVal6 !== wordOfDay) {
      header2.textContent = "You Lose";
    }
  }
}
button.addEventListener("click", getFinalAnswer);
