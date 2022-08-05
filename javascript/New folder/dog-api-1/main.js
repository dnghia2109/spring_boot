// I. số cách gọi API:
// 1. Sử dụng fetch API có sẵn của JS.
// 2. Sử dụng Axious (package bên thứ 3) -> import (Reoommend cách này).
// 3. Sử dụng Ajax (jquery).

// Thao tác
// Bấm nút -> Gọi API -> Có kết quả -> Hiển thị ảnh

const btnRandom = document.getElementById("btn");
const imageD = document.getElementById("image");

// //Cách 1: Sử dụng fetch API có sẵn của JS
// btnRandom.addEventListener("click", async () => {
//     try {
//         let response = await fetch("https://dog.ceo/api/breeds/image/random")
//         console.log(response);

//         let responseJSON = await response.json();
//         console.log(responseJSON);

//         imageD.src = responseJSON.message;
//     } catch (error) {
//         console.log(error);
//     }
    
// })



// Cách 2: Sử dụng Axious (package bên thứ 3) -> import


btnRandom.addEventListener("click", async () => {
    try {
        // Gọi API lấy ảnh random của dog
        let res = await axios.get("https://dog.ceo/api/breeds/image/random")
        console.log(res);

        // Gán URL cho thẻ image
        image.src = res.data.message
    } catch (error) {
        console.log(error);
    }
})



























