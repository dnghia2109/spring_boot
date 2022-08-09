const btnRandomColorName = document.querySelector("#buttonRandomColor");

btnRandomColorName.addEventListener("click", async () => {
    try {
        let res = await axios.get("http://localhost:8080/random-color?type=2");
        console.log(res);
        document.body.style.backgroundColor = res.data;
    } catch (error) {
        console.log(error);
        alert(error.response.data.message);
    }
    
})
//console.log(btnRandomColorName.getAttribute("typeColor"));
console.log(btnRandomColorName.dataset.type);