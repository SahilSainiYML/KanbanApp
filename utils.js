function addDragListener(task) {
  task.addEventListener("dragstart", (e) => {
    task.classList.add("is-dragging");
  });

  task.addEventListener("dragend", (e) => {
    task.classList.remove("is-dragging");
  });
}
