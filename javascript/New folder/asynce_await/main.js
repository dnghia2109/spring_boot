let money = 32
const buyIphone = () => {
    return new Promise((resolve, reject) => {
        if (money > 30) {
            resolve("Đủ tiền mua Iphone 13 prm.");
        } else {
            reject("Không đủ tiền mua Iphone 13 prm, cày tiếp.");
        }
    })
}

const buyAirpod = () => {
    return new Promise(function (resolve, reject) {
        if (money - 30 - 4 >= 0) {
            resolve("Mua thêm airpod")
        } else {
            reject("Không đủ tiền mua airpod")
        }
    })
}

// async function buy() {}
// const buy = async function() {}
const buy = async () => {
    try {
        let res = await buyIphone();
        console.log(res);

        let res1 = await buyAirpod();
        console.log(res1);
    } catch (error) {
        console.log(error);
    }

    return "Về nhà";    
}

console.log(buy())
buy().then(res => console.log(res))
buy()