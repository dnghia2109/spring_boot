// Câu 1:
function cau01() {
    const button1 = document.getElementById("btn-1")
    button1.innerHTML = "Thay đổi nội dung"
}

//câu 2:
function randomHex() {
    const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexCol = '#'; 
    for(let i = 0; i < 6; i++) { 
        let random = Math.floor(Math.random() * hexNumbers.length); 
        hexCol += hexNumbers[random]; 
    }
    
}

function randomRgbCode() {
    let rgb = [];
    for (let i = 0; i <= 2; i++) {
        rgb.push(Math.floor(Math.random() * 256));
    }
    return `rgb(${rgb.join(",")})`
}

function cau02() {
    const btn2 = document.getElementById("btn-2");
    btn2.style.color = randomRgbCode();
}


// Câu 3:
function cau03() {
    const btn3 = document.getElementById("btn-3");
    btn3.style.backgroundColor = randomRgbCode();
}