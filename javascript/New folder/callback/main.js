
// Cách 1: Regular function
function sum(a, b) {
    return a + b;
}

// Cách 2: Function expression
const sum1 = function(a, b) {
    return a + b;
}

// Cách 3: Arrow function
const sum2 = (a, b) => {
    return a + b;
}

const sum3 = (a, b) => a + b;

console.log(sum(21, 9));
console.log(sum1(21, 9));
console.log(sum2(21, 9));
console.log(sum3(21, 9));

// // Công việc 3 : Giả sử sau 3s thì thực hiện xong
// function funcC() {
//     setTimeout(function () {
//         console.log("three");
//     }, 3000)
// }

// // Công việc 4 : Giả sử sau 4s thì thực hiện xong
// function funcD() {
//     setTimeout(function () {
//         console.log("four");
//     }, 4000)
// }

// // Tổng thời gian thực hiện hết 2 cv3 và cv4 là 4s
// // Thực hiện công việc
// funcC();
// funcD();

// // forEach()
// let numbers = [1,2,3,4,5];
// numbers.forEach((number, index) => {
//     if (index == 2) {
//         return; // như continue trong Java
//     }
//     console.log(index, number);
// });


// // Mô tả về hoạt đồng hằng ngày
// // 1. Làm bài tập (3s)
// // 2. Đá bóng (4s)
// // 3. Nấu cơm (5s)

// function doTask1(name, callback) {
//     console.log("Bắt đầu công việc");
//     console.log(`Thực hiện công việc ${name}`);
//     setTimeout(function () {
//         callback();
//     }, 3000);
// }

// function doTask2(name, callback) {
//     console.log(`Thực hiện công việc ${name}`);
//     setTimeout(function () {
//         callback();
//     }, 4000);
// }

// function doTask3(name, callback) {
//     console.log(`Thực hiện công việc ${name}`);
//     setTimeout(function () {
//         callback();
//     }, 5000);
// }

// function finish() {
//     console.log("Kết thúc công việc");
// }

// // Thực hiện công việc nối chuỗi nhau
// doTask1("Làm bài tập", function () {
//     doTask2("Đá bóng", function () {
//         doTask3("Nấu cơm", finish);
//     });
// });

// // Thực hiện đồng thời các công việc
// doTask1("Làm bài tập", function () {
//     console.log("Làm bài tập xong");
// })

// doTask2("Đá bóng", function () {
//     console.log("Đá bóng xong");
// })

// doTask3("Nấu cơm", function () {
//     console.log("Nấu cơm xong");
// })

// // Nếu nhiều công việc => Dẫn đến tình trạng callback hell
// // Để khắc phục tình trạng callback hell => Dẫn đến sự ra đời của promise (ES6)



// Mô tả công việc
// Công việc 1:
const doTask1 = (name, callback) => {
    console.log("Bắt đầu thực hiện cv.");
    console.log(`Thực hiện công việc : ${name}`);
    setTimeout(() => {
        callback();
    }, 3000);
}

// Công việc 2:
const doTask2 = (name, callback) => {
    console.log(`Thực hiện công việc : ${name}`);
    setTimeout(() => {
        callback();
    }, 4000);
}

// Công việc 3:
const doTask3 = (name, callback) => {
    console.log(`Thực hiện công việc : ${name}`);
    setTimeout(() => {
        callback();
    }, 5000);
}

// Kết thúc công việc
const finish = () => {
    console.log("KT công việc");
}

// // Thực hiện cv đồng thời (nếu các cv k liên quan đến nhau)
// doTask1("Làm bài tập", finish);
// doTask2("Đi làm", finish);
// doTask3("Về nhà",finish);

// Function không có tên (Anonymous function)
doTask1("Đi chợ", () => {
    doTask2("Nấu cơm", () => {
        doTask3("Ăn cơm", finish);
    })
});






