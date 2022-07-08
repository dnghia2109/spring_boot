// console.log("Hello World");
// let add = (a, b) => a + b;
// console.log(add(10, 11));

// function plusTwoNum(a, b) {
//   return a + b;
// }
// console.log(plusTwoNum(2, 3));

//VD
// let person = prompt("Mời bạn nhập tên của mình", "Harry Potter");
// let text;
// if (person == null || person == "") {
// text = "Buồn quá, bạn không muốn nhập tên!";
// } else {
// text = "Xin chào " + person + "!";
// }
// console.log(text);

// Bài 1:
// for (let i = 0; i < 100; i++) {
//     if (i >= 85) {
//         console.log("A");
//     } else if ((i >= 70) && (i < 85)) {
//         console.log("B");
//     } else if ((i >= 70) && (i < 85)) {
//         console.log("C");
//     } else {
//         console.log("D");
//     }
// }

// Bài 2:
// function soLonHon(a, b) {
//     if (a > b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// }
// soLonHon(8, 10);

// Bài 2 (Switch case)
// function Month(month) {
//   switch (month) {
//     case (1, 2, 3):
//       console.log("Spring");
//       break;
//     case (4, 5, 6):
//       console.log("Summer");
//       break;
//     case (7, 8, 9):
//       console.log("Fall");
//       break;
//     case (10, 11, 12):
//       console.log("Winter");
//       break;
//     default:
//       break;
//   }
// }
// Month(9);
// let mon = Number(prompt("Nhap thang:"));
// console.log(typeof mon);
// console.log(Month(mon));

// Bài 1 (Vòng lặp)
// function repeatString(text) {
//     for (let i = 0; i < 10; i++) {
//         console.log(text);
//     }
// }
// repeatString("a");

// // Bài 6 (vòng lặp)
// function sumNums(a, b) {
//   let sum = 0;
//   if (a > b) {
//     for (let i = a + 1; i < b; i++) {
//       sum += i;
//     }
//   } else {
//     for (let i = b + 1; i < a; i++) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }
// sumNums(2, 6);

// Bài 8 (vòng lặp)
function soNguyenTo(num) {
  if (num < 2) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}
// console.log(soNguyenTo(3));
function sumNums1(a) {
  let sum1 = 0;
  for (let i = 0; i <= a; i++) {
    if (soNguyenTo(i)) {
      sum1 += i;
    }
  }
  console.log(sum1);
}
sumNums1(10);

// Bài 9 (vòng lặp)
function uocSo(num) {
  let sum2 = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      sum2 += i;
    }
  }
  console.log(sum2);
}
uocSo(20);

// Số hoàn thiện
function soHoanThien(num) {
    let sum3 = 0;
    for (let i = 0; i < 100; i++) {
        if (num % i == 0) {
            sum3 += i;
        }
        if (num == sum3) {
            console.log(num);
        }
    }
}
function tongSoHoanThien(n) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        name
    }
}
