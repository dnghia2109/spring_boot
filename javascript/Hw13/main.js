const usernameInp = document.getElementById("username");
const passwordInp = document.getElementById("password");
const btnloginEl = document.getElementById("btn-login");
const loginFormEl = document.getElementById("login-div")
const loginSuccessEl = document.getElementById("login-success"); 

btnloginEl.addEventListener("click", async () => {
    try {
        let res = await axios.post(`http://localhost:8080/login`, {
            "username" : usernameInp.value,
            "password" : passwordInp.value
        });
        console.log(res);
        if (res.data.username != null && res.data.password != null) {
            loginSuccess(res.data);
        } else {
            alert("Không được để trống Username");
        }

    } catch (error) {
       
    }
});

const loginSuccess = (obj) => {
    loginFormEl.classList.add("invisible");
    loginSuccessEl.classList.add("visible") 
    html = "";
    let titleMessage = `<p> Welcome ${obj.username} </p>`+
                       `<p> Email ${obj.email} </p>`;
    let avatar = `<img src="${obj.avatar}" alt="${obj.avatar}">`;

    html = titleMessage + avatar;
    loginSuccessEl.innerHTML = html;
}




