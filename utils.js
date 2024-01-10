function addDragListener(task) {
  task.addEventListener("dragstart", (e) => {
    task.classList.add("is-dragging");
  });

  task.addEventListener("dragend", (e) => {
    task.classList.remove("is-dragging");
  });
}

const getTheClosestElement = (board, yAxis) => {
  const tasksInThisBoard = board.querySelectorAll(".tasks:not(.is-dragging)");
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
