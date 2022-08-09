const btn = document.getElementById('btn');
const image = document.getElementById('image');

const breedList = document.getElementById('breed-list');

btn.addEventListener("click", async () => {
    let resSelect = breedList.value;

    let resURL = `https://dog.ceo/api/breed/${resSelect}/images/random`;
    
    let res = await axios.get(resURL);
    console.log(res);
    image.src = res.data.message;
})

const getBreedList = async () => {
    try {
        let res = await axios.get("https://dog.ceo/api/breeds/list/all");
        // console.log(res);
        renderBreedList(res.data.message);
    } catch (error) {
        console.log(error);
    }
}


const renderBreedList = obj => {
    // console.log(obj)
    let keys = Object.keys(obj);
    // console.log(keys);

    let html = "";
    keys.forEach(key => {
        html += `<option value=${key}>${key}</option>`; // Tạo danh sách trong dropdown
    });

    breedList.innerHTML = html;
}

getBreedList()


