const todoListEl = document.querySelector(".todo-list");
const URL_API = "http://localhost:8080/api/todos";

const todo_inputEl = document.getElementById("todo-input");
const btn_addEl = document.getElementById("btn-add");
const btn_updateEl = document.querySelector("#btn-update");

//Lưu lại công việc
let todos = [];
// Lưu id todo khi cập nhật todo
let idUpdate;

let isUpdate = false;

// DANH SÁCH API
// 1. Lấy danh sách tất cả công việc
const getTodoApi = () => {
  return axios.get(URL_API); // axios.get luôn trả về promise
};

// 2. Xóa công việc
const deleteTodoApi = (id) => {
  return axios.delete(`${URL_API}/${id}`);
};

// 3. Thêm công việc
const createTodoApi = (title) => {
  return axios.post(`${URL_API}`, {
    title: title,
  });
};

// 4. Cập nhật trạng thái todo
function updateTodoApi(todo) {
  return axios.put(`${URL_API}/${todo.id}`, {
    title: todo.title,
    status: todo.status,
  });
}

// HÀM XỬ LÝ
// 1. Lấy danh danh sách tất cả công việc
const getTodo = async () => {
  try {
    let res = await getTodoApi();
    console.log(res);
    todos = res.data; // Lưu lại mảng kết quả
    renderTodo(todos); // res.data = array
  } catch (error) {
    console.log(error);
  }
};

// 2. Xóa công việc
const deleteTodo = async (id) => {
  try {
    let isConfirm = confirm("Bạn có muốn xóa không ?");
    if (isConfirm) {
      // Xóa trên sever
      await deleteTodoApi(id);

      // Xóa trên mảng ban đầu (todos) (sủ dụng splice, filter)
      todos = todos.filter((t) => t.id != id);

      renderTodo(todos);
    }
  } catch (error) {
    console.log(error);
  }
};

// 3. Thêm công việc
const createTodo = async (title) => {
  try {
    // Gọi API tạo todo
    let res = await createTodoApi(title);
    console.log(res);
    todos.push(res.data);
    renderTodo(todos);
  } catch (error) {
    console.log(error);
  }
};

// 4. Thay đổi trạng thái todo
const toggleStatus = async (id) => {
  try {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        todos[i].status = !todos[i].status;
      }
    }
    renderTodo(todos);
  } catch (error) {
    console.log(error);
  }
};

// 5. Cập nhật tiêu đề công việc
const updateTitle = (id) => {
  // btn_addEl.classList.add("hide");
  // btn_updateEl.classList.remove("hide");

  let title = "";
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      title = todos[i].title;
    }
  }

  btn_addEl.innerHTML = "Cập nhật";
  todo_inputEl.value = title;
  todo_inputEl.focus();
  idUpdate = id;
  isUpdate = true;
};

const updateTodo = async (todoUpdate) => {
  try {
    // Gọi API cập nhật
    let res = await updateTodoApi(todoUpdate);

    // Cập nhật lại trong mảng todos
    todos.forEach((todo, index) => {
      if (todo.id == todoUpdate.id) {
        todos[index] = res.data;
      }
    });

    btn_addEl.innerText = "Thêm";
    isUpdate = false;
    idUpdate = null;

    renderTodo(todos);
  } catch (error) {
    console.log(error);
  }
};

btn_addEl.addEventListener("click", async () => {
  let todoTitle = todo_inputEl.value;
  if (todoTitle == "") {
    alert("Tiêu đề không được để trống");
    return;
  }

  if (isUpdate) {
    // Tìm công viêc có id = idUpdate
    let todo = todos.find((todo) => todo.id == idUpdate);

    // Sửa lại tiêu đề của công việc đó = nội dung trong ô input
    todo.title = todoTitle;

    // Thực hiện cập nhật
    updateTodo(todo);
  } else {
    createTodo(todoTitle);
  }

  createTodo(todoTitle);
  todo_inputEl.value = "";
});

// Hiển thị danh sách todo ra ngoài dao diện
const renderTodo = (arr) => {
  todoListEl.innerHTML = "";

  if (arr.length == 0) {
    todoListEl.innerHTML = "Ko có cv";
    return;
  }

  let html = "";
  arr.forEach((todo) => {
    html += `
            <div class="todo-item ${todo.status ? "active-todo" : ""}">    
                <div class="todo-item-title">
                    <input type="checkbox" ${
                      todo.status ? "checked" : ""
                    } onclick="toggleStatus(${todo.id})"/>
                    <p>${todo.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update" onclick="updateTitle(${
                      todo.id
                    })">
                        <img src="./img/pencil.svg" alt="icon" />
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo(${
                      todo.id
                    })">
                        <img src="./img/remove.svg" alt="icon" />
                    </button>
                </div>
            </div>
        `;
  });

  todoListEl.innerHTML = html;
};

getTodo();
