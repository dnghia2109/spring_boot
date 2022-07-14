// Câu 1
const cau1 = document.getElementById("heading");
cau1.style.color = "red";
cau1.style.textTransform = "uppercase";
// console.log(cau1);

// Câu 2:
const cau2 = document.getElementsByClassName("para");
for (let i = 0; i < cau2.length; i++) {
  cau2[i].style.color = "blue";
  cau2[i].style.size = "20px";
}

//Câu 3:
const c3 = document.querySelector(".para-3")
const para3 = document.getElementsByClassName("para-3");
const link = document.createElement("a");
console.log(para3)
link.href = "https://www.facebook.com/";
link.innerText = "Facebook";
c3.appendChild(link)
// Cách 2:
// for (let i = 0; i < para3.length; i++) {
//     para3[i].appendChild(link);
// }

//Câu 4:
const title = document.getElementById("title");
title.innerHTML = "Đây là thẻ tiêu đề";

// Câu 5:
// title.nextSibling.


// Câu 6:
const button = document.createElement('button');
button.innerText = "Click me";
document.body.replaceChild(button,c3)
// Cách 2:
// for (let i = 0; i < para3.length; i++) {
//     document.body.replaceChild(button, para3[i])
// }


// Câu 7:
const para2 = document.querySelector(".para-2");
const paraCopy = para2.cloneNode(true);
paraCopy.innerText = "Thẻ para copy";
para2.insertAdjacentElement("afterEnd", paraCopy)


// Câu 8:
const para1 = document.querySelector(".para-1") 
para1.parentNode.removeChild(para1)



// BTVN
// Câu 1:
