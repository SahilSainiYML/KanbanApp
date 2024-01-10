const containerRef = document.querySelector(".container");
const modelContainer = document.querySelector(".model-container");
const createBtnRef = document.querySelector(".create");
const titleRef = document.querySelector(".model input");
const descRef = document.querySelector(".model input:nth-child(2)");
const dateRef = document.querySelector(".model input:nth-child(3)");
let targetEle;

containerRef.addEventListener("click", (e) => {
  if (e.target.id === "addBtn") {
    modelContainer.classList.remove("hide");
    targetEle = e.target;
  }
});

createBtnRef.addEventListener("click", (e) => {
  createTask();
});

function createTask() {
  const divEle = document.createElement("div");
  divEle.setAttribute("draggable", "true");
  divEle.classList.add("task");
  divEle.innerHTML = `<div class="title-div">
      ${titleRef.value}
      <span>${dateRef.value}</span>
    </div>
    <div class="description-div">${descRef.value}</div>
  </div>`;
  let tasks = targetEle.parentElement.querySelector(".tasks");
  tasks.append(divEle);
  modelContainer.classList.add("hide");
  titleRef.value = "";
  descRef.value = "";
  dateRef.value = "";
  return divEle;
}
