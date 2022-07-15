const counter = document.getElementById("counter");

const plus = document.querySelector(".nextBtn");
let rs = Number(counter.textContent);
console.log(rs);
plus.onclick = function () {
    rs++;

    counter.textContent = rs;
};
