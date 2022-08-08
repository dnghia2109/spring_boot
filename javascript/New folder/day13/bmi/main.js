const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const getBmiEl = document.getElementById("bmiGet");
const postBmiEl = document.getElementById("bmiPost");

getBmiEl.addEventListener("click", async () => {
  try {
    let res = await axios.get(
      `http://localhost:8080/bmi-get?height=${heightEl.value}&weight=${weightEl.value}`
    );
    console.log(res);
    // const text = document.createElement("p");
    renderBmi(res.data);
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
  }
});

postBmiEl.addEventListener("click", async () => {
  try {
    let res = await axios.post(`http://localhost:8080/bmi-post`, {
      height: 1.65,
      weight: 58.5,
    });
    console.log(res);
    // const text = document.createElement("p");
    renderBmi(res.data);
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
  }
});

const renderBmi = (data) => {
  if (data < 18.5) {
    alert("Thiếu cân");
  } else if (data >= 18.5 && data <= 24.9) {
    alert("Bình thường");
  } else if (data >= 25 && data <= 29.9) {
    alert("Thừa cân");
  } else {
    alert("Béo phì");
  }
};
