// Bài 1:
function findMinMax(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return [min, max];
}
console.log(findMinMax([1, 5, 6, 2, 9, 8]));

// Bài 2:
function findMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(findMin([-1, 5, 6, 2, 9, 8]));

// Bài 5:
function repeatString(string, n, symbol) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(string, symbol);
  }
  return arr;
}
console.log(repeatString("a", 10, "-"));

// Cách 2:
function repeat(s, n) {
  let a = [];
  while (a.length < n) {
    a.push(s);
  }
  return a.join("-");
}

let str = "a";
console.log(repeat(str, 4));

// Array (2)
// Bài 2:
function getElementGreater(arr, num) {
  let rs = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      rs.push(arr[i]);
    }
  }
  return rs;
}

//Bài 4:
function randomRgbCode() {
  let rgb = [];
  for (let i = 0; i <= 2; i++) {
    rgb.push(Math.floor(Math.random() * 256));
  }
  return rgb.join(",");
}
console.log(`rgb(${randomRgbCode()})`); //ES6

// Hiển thị ngày/giờ/phút/giây from now to ...
const endDate = "Sept 2 2022";
function countdown() {
  const total = Date.parse(endDate) - new Date();
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((total / 1000 / 60) % 60);
  const secs = Math.floor((total / 1000) % 60);
  return {
    days,
    hrs,
    mins,
    secs,
  };
}
function update() {
  const temp = countdown();
  let output = "";
  for (const property in temp) {
    output += `${property}: ${temp[property]} `;
  }
  console.log(output);
}
setInterval(update, 1000);
