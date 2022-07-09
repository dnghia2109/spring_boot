function calculateFactorial(num) {
  if (num == 1) {
    return 1;
  }
  return num * calculateFactorial(num - 1);
}
console.log(calculateFactorial(3));

// Câu 2:
function reverseStringname(text) {
  let reverseString = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reverseString += text[i];
  }
  return reverseString;
}
console.log(reverseStringname("hello"));

// Câu 3:
function translateCode(code) {
  switch (code) {
    case "VN":
      console.log("Viet Nam");
      break;

    case "US":
      console.log("United State");
      break;

    case "ENG":
      console.log("England");
      break;

    default:
      console.log("Alo");
      break;
  }
}
translateCode("VN");

// Câu 4:
function subString(text) {
  let newSubString = "";
  for (let i = 0; i < 10; i++) {
    newSubString += text[i];
  }
  return newSubString + "...";
}
console.log(subString("ToiNayTroiKhongMua"));

// Câu 5:
function keoBuaBao(yourAction) {
  let action = ["keo", "bua", "bao"];
  let turn = Math.floor(Math.random() * 3);
  // console.log(turn);

  if (yourAction == "keo") {
    if (action[turn] == "bua") {
      return "YOU LOSE";
    } else if (action[turn] == "bao") {
      return "YOU WIN";
    } else {
      return "DRAW";
    }
  }

  if (yourAction == "bua") {
    if (action[turn] == "keo") {
      return "YOU WIN";
    } else if (action[turn] == "bao") {
      return "YOU LOSE";
    } else {
      return "DRAW";
    }
  }

  if (yourAction == "bao") {
    if (action[turn] == "keo") {
      return "YOU LOSE";
    } else if (action[turn] == "bua") {
      return "YOU WIN";
    } else {
      return "DRAW";
    }
  }
}
console.log(keoBuaBao("keo"));
