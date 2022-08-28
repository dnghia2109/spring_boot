const URL_API = "https://course-list-01.herokuapp.com/api/course";
const URL_SP_API = "https://course-list-01.herokuapp.com/supporter";

const param = new URLSearchParams(window.location.search);

const breadcrumbEl = document.querySelector(".breadcrumb");
const titleEl = document.querySelector(".course-title");
const descriptionEl = document.querySelector(".course-description");
const supporterEl = document.querySelector(".supporter");

 
// DANH SÁCH API
// Lấy thông tin của khóa học
const getCourseAPI = () => {
    let id = param.get("id"); // Lấy ra id của khóa học
    // console.log(id);
    return axios.get(`${URL_API }?id=${id}`);
} 

// Lấy thông tin của supporter
const getSupporterAPI = (id) => {
    return axios.get(`${URL_SP_API}?id=${id}`);
}


// HÀM XỬ LÝ
const getCourse = async () => {
    try {
        let course = await getCourseAPI();
        // console.log(course.data);
       
        let supporter = await getSupporterAPI(course.data.supporterId)
        // console.log(supporter.data);
        
        renderCourse(course.data, supporter.data);
        
    } catch (error) {
        console.log(error)
    }
}


const renderCourse = (course, supporter) => {
   
    breadcrumbEl.innerHTML = `
            <li class="breadcrumb-item"><a href="./course-list.html">Khóa học</a></li>
            <li class="breadcrumb-item active" aria-current="page">${course.title}</li>
        `
    titleEl.innerText = course.title;
    descriptionEl.innerText = course.description;

        if(supporter == null){
            supporterEl.innerHTML = `<p>No supporter</p>`
        } else {
            supporterEl.innerHTML = `
            <div class="supporter d-flex align-items-center">
                <div class="supporter-image">
                    <img src="${supporter.avatar}" alt="tư vấn viên" class="rounded-circle w-75 h-75">
                </div>
                <div class="supporter-info">
                    <p>
                        <b>Tư vấn viên :</b>
                        ${supporter.name}
                    </p>
                    <p>
                        <b>Email :</b>
                        ${supporter.email}
                    </p>
                    <p>
                        <b>Số điện thoại :</b>
                        ${supporter.phone}
                    </p>
                </div>
             </div>
            `
        }
}



getCourse();