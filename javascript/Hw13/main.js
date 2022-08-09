const usernameInp = document.getElementById("username");
const passwordInp = document.getElementById("password");
const btnloginEl = document.getElementById("btn-login");
const loginFormEl = document.getElementById("login-form")
const loginSuccessEl = document.getElementsById("login-success"); 

btnloginEl.addEventListener("click", async () => {
    try {
        let res = await axios.post(`http://localhost:8080/login`, {
            "username" : usernameInp.value,
            "password" : passwordInp.value
        });
        console.log(res);
        if (usernameInp.value != null) {
            loginSuccess(res.data);
        } else {
            alert("Không được để trống Username");
        }

    } catch (error) {
        
    }
});

function loginSuccess(obj) {
    loginFormEl.classList.add("invisible");
    html = "";
    let titleMessage = `<p> Welcome ${obj.username} </p>`+
                       `<p> Email ${obj.email} </p>`;
    let avatar = `<img src="../image/${obj.avatar}" alt="${obj.avatar}" width="150">`;
    html = titleMessage + avatar
    
    loginSuccessEl.innerHTML = html;
}