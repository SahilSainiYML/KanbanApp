const containerRef = document.querySelector(".container");
const modelContainer = document.querySelector(".model-container");
const createBtnRef = document.querySelector(".create");
const titleRef = document.querySelector(".model input");
const descRef = document.querySelector(".model input:nth-child(2)");
const dateRef = document.querySelector(".model input:nth-child(3)");
const boards = document.querySelectorAll(".status-div");

let targetEle;

boards.forEach((board) => {
  board.addEventListener("dragover", (e) => {
    e.preventDefault();
    const task = document.querySelector(".is-dragging");
    const closestElement = getTheClosestElement(board, e.clientY);

    if (closestElement) {
      board.insertBefore(task, closestElement);
    } else {
      const tasks = board.querySelector(".tasks");
      tasks.appendChild(task);
    }
  });
});

containerRef.addEventListener("click", (e) => {
  if (e.target.id === "addBtn") {
    modelContainer.classList.remove("hide");
    targetEle = e.target;
  } else if (e.target.classList.contains("fa-trash")) {
    e.target.closest(".task").remove();
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
    <div class="description-div">${descRef.value}<i class="fa fa-trash"></i>
  </div>`;
  let tasks = targetEle.parentElement.querySelector(".tasks");
  tasks.append(divEle);
  addDragListener(divEle);
  modelContainer.classList.add("hide");
  titleRef.value = "";
  descRef.value = "";
  dateRef.value = "";
  return divEle;
}
