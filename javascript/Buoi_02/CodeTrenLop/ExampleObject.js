// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 30000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
// console.log("Câu 1:");
// function showProduct(list) {
//     let rs = [];
//     for (let i = 0; i < list.length; i++) {
//         rs.push(Object.values(list[i]).join(' - '));
//     }
//     return rs.join("\n");
// }
// console.log(showProduct(products));


// // 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// // Tổng tiền mỗi sản phẩm = price * count
// console.log("Câu 2:")
// function sumPrice(list) {
//     let key = Object.keys(list);
//     let sum = 0;
//     for (let i = 0; i < key.length; i++) {
//         sum += list[key[i]].price * list[key[i]].count;
//     }
//     return sum;
// }
// console.log(sumPrice(products));


// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
console.log("Câu 3:")
function findApple(list) {
    let key = Object.keys(list);
    let rs = [];
    for (let i = 0; i < key.length; i++) {
        if (list[key[i]].brand == 'Apple' ) {
            //console.log(list[key[i]].name);
            rs.push(list[key[i]].name);
        }
    }
    return rs.join(' - ');
}
console.log(findApple(products))


// // 4. Tìm các sản phẩm có giá > 20000000
// console.log("Câu 4:")
// function findByPrice(list) {
//     let key = Object.keys(list);
//     let rs = [];
//     for (let i = 0; i < key.length; i++) {
//         if (list[key[i]].price > 20000000 ) {
//             rs.push(list[key[i]].name);
//         }
//     }
//     return rs.join(' - ');
// }
// console.log(findByPrice(products))

// // 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
// console.log("Câu 5:")
// function cau5(list) {
//     let key = Object.keys(list);
//     let rs = [];
//     for (let i = 0; i < key.length; i++) {
//         // let name = list[key[i]].name.toLowerCase().includes('pro');
//         // console.log(name);
//         if (list[key[i]].name.toLowerCase().includes("pro") == true ) {
//             rs.push(list[key[i]].name);
//         }
//     }
//     return rs.join(' - ');
    
// }
// console.log(cau5(products))


// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product


// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng


// 8. Sắp xếp giỏ hàng theo price tăng dần

// 9. Sắp xếp giỏ hàng theo count giảm dần

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
