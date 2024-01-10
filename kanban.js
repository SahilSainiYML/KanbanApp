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
  addDragListener(divEle);
  modelContainer.classList.add("hide");
  titleRef.value = "";
  descRef.value = "";
  dateRef.value = "";
  return divEle;
}

const getTheClosestElement = (board, yAxis) => {
  const tasksInThisBoard = board.querySelectorAll(".tasks:not(.is-dragging)");
  debugger;
  let closestElement = null;
  let closestDistance = Number.NEGATIVE_INFINITY;

  tasksInThisBoard.forEach((task) => {
    const boundry = task.getBoundingClientRect();
    const top = boundry.top;

    const distance = yAxis - top;

    if (distance < 0 && distance > closestDistance) {
      closestDistance = distance;
      closestElement = task;
    }
  });

  return closestElement;
};

function addDragListener(task) {
  task.addEventListener("dragstart", (e) => {
    task.classList.add("is-dragging");
  });

  task.addEventListener("dragend", (e) => {
    task.classList.remove("is-dragging");
  });
}
