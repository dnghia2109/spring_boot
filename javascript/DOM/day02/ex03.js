const titles = document.querySelectorAll(".title");
const texts = document.querySelectorAll(".myText")
titles.forEach((title) => {
    function display() {
        // title.nextElementSibling.classList.toggle("active")

        title.addEventListener('click', (e)=> {
            e.target.nextElementSibling.classList.toggle("active");
        })
    }
});

