const btn = document.getElementById('btn');
const image = document.getElementById('image');
const breedList = document.getElementById('breed-list');
const subBreedList = document.getElementById("sub-breed-list")
// btn.addEventListener("click", async () => {
//     let resSelect = breedList.value;

//     let resURL = `https://dog.ceo/api/breed/${resSelect}/images/random`;
    
//     let res = await axios.get(resURL);
//     console.log(res);
//     image.src = res.data.message;
// })

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

    let html = "<option hidden>Chọn</option>";
    keys.forEach(key => {
        html += `<option value=${key}>${key}</option>`; // Tạo danh sách trong dropdown
    });

    breedList.innerHTML = html;
}

getBreedList()


// Lấy danh sách giống loài phụ (Sub breed list)
btn.addEventListener("click", async () => {
    try {
        subBreedList.innerHTML = "";
        // subBreedList.style.display = "none"
        let breedListValue = breedList.value;
        let res = await axios.get(`https://dog.ceo/api/breed/${breedListValue}/list`); 
        // console.log(res);

        if (res.data.message.length != 0){
            // subBreedList.style.display = "contents"
            renderSubBreedList(res.data.message, breedListValue);
        } else {
            // subBreedList.style.display = "contents"
            let li = document.createElement("li");
            li.innerText = "Không có sub breed";
            subBreedList.appendChild(li);
        }
        
    } catch (error) {
        console.log(error);
    }
})


function renderSubBreedList (obj, value) {
    let keys = Object.values(obj);

    keys.forEach(key => {
        let li = document.createElement("li");
        li.innerText = `${key}`;
        subBreedList.appendChild(li);

        li.addEventListener("click", async () => {
            try {
                let res = await axios.get(`https://dog.ceo/api/breed/${value}/${key}/images/random`);
                image.src = res.data.message;
            } catch (error) {
                console.log(error)
            }
        });
    });
}



