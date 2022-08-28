const courseListEl = document.querySelector(".course-list");
const URL_API = "https://course-list-01.herokuapp.com/api/courses/onlab";
//Lưu ds khóa học
let courses = [];
// Đặt biến ở URL
let topic = "";
let title = "";

const topicItemEl = document.querySelectorAll(".topic-item input") // Phải thêm cả input
const btn_searchEl = document.querySelector(".seach-form-button")

// DANH SÁCH API
const getCourseAPI = () => {
    return axios.get(`${URL_API}/?topic=${topic}&title=${title}`);
}


// HÀM XỬ LÝ
const getCourses = async () =>{
    try{
        let res = await getCourseAPI(); 
        courses = res.data;
        console.log(res.data)
        renderCourses(courses);

    }catch(error){
        console.log(error)
    }
}

// Lọc theo topic
// Lấy giá trị trong 1 ô input radio
function getOptionSelected() {
    for (let i = 0; i < topicItemEl.length; i++) {
        if (topicItemEl[i].checked) {
            return topicItemEl[i].value;
        }
    }
}

// L
topicItemEl.forEach((btn) => {
    btn.addEventListener("change", function () {
        topic = getOptionSelected();
        getCourses();
    });
});


// Lọc theo Title
btn_searchEl.addEventListener("click", function() {
    title = document.querySelector(".seach-form-input").value
    getCourses();
})




// Hiển thị khóa học
const renderCourses = (arr) =>{
    courseListEl.innerHTML = "";
    if (arr.length == 0) {
        courseListEl.innerHTML = "Không có khóa học";
        return;
    }

    let html = "";
    arr.forEach(course => {
        html += `
            <div class="col-md-4">
                <a href="./detail.html?id=${course.id}">
                    <div class="course-item shadow-sm rounded mb-4">
                        <div class="course-item-image">
                            <img src="${course.image}"
                            alt="Khoa hoc">
                        </div>
                        <div class="course-item-info p-3">
                            <h2 class="fs-5 mb-3 text-dark">${course.title}</h2>
                            <p class="type fw-light text-black-50 ">${course.type}</p>
                        </div>
                    </div>
                </a>
            </div>
        `
    });


    courseListEl.innerHTML = html;
}

getCourses();
