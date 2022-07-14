// Câu 1:
const text1 = document.getElementById("text1");
console.log(text1)
text1.style.color = '#777';
text1.style.fontSize = "2rem";
text1.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."


//Câu 2:
const c2 = document.getElementsByClassName('li1');
console.log(c2)
for (let i = 0; i < c2.length; i++) {
    c2[i].style.color = "blue";
}


// Câu 3:
const ul2 = document.querySelector(".ul2");
const item9 = document.createElement("li")
item9.innerHTML = " Item 9"
const item8 = document.createElement("li")
item8.innerHTML = " Item 8"
const item10 = document.createElement("li")
item10.innerHTML = " Item 10"
ul2.append(item8)
ul2.append(item9)
ul2.append(item10)

const li1 = document.querySelector(".ul2 :nth-child(1)");
li1.style.color = 'red';
const li3 = document.querySelector(".ul2 :nth-child(3)");
li3.style.backgroundColor='blue';
const li4 = document.querySelector(".ul2 :nth-child(4)");
li4.parentNode.removeChild(li4);
const replace = document.createElement("li");
replace.textContent = "Replace Item 4";
li3.append(replace);
li3.insertAdjacentElement("afterEnd", replace)




