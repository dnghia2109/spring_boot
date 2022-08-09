// Khởi tạo Promise
let promise = new Promise((resolve, reject) => {

});
console.log(promise);

let promiseSuccess = new Promise((resolve, reject) => {
    resolve("Thực hiện lời hứa thành công.");

});
console.log(promiseSuccess);

let promiseError = new Promise((resolve, reject) => {
    reject("Thực hiện lời hứa thất bại.");

});
console.log(promiseError);


// Promise : Lời hứa

// HỨA : Nếu có trên 30 triệu, sẽ mua iphone 13 pro max
let money = 35

// Hứa
const buyIphone = () => {
    return new Promise((resolve, reject) => {
        if (money > 30) {
            resolve("Đủ tiền mua Iphone 13 prm.");
        } else {
            reject("Không đủ tiền mua Iphone 13 prm, cày tiếp.");
        }
    })
}

// Hứa tiếp
// Nếu mua iphone xong, còn thừa tiền, nếu đủ thì mua con airpod (4 củ)
const buyAirpod = () => {
    return new Promise(function (resolve, reject) {
        if (money - 30 - 4 >= 0) {
            resolve("Mua thêm airpod")
        } else {
            reject("Không đủ tiền mua airpod")
        }
    })
}
new Promise(function (resolve, reject) {
    if (money - 30 - 4 >= 0) {
        resolve("Mua thêm airpod")
    } else {
        reject("Không đủ tiền mua airpod")
    }
})

// console.log(buyIphone())
// buyIphone()
//     .then(res => console.log(res))
//     .catch(error => console.log(error))

// buyAirpod()
//     .then(res => console.log(res))
//     .catch(error => console.log(error))

buyIphone()
    .then(res => {
        console.log(res);
        return buyAirpod();
    })
    .then(res1 => {
        console.log(res1);
    })
    .catch(error => console.log(error))
    .finally(() => { // Finally luôn được thực hiện
        console.log("Về nhà.")
    })




