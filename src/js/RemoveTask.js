export default class RemoveTask {
  bindToDOM(parentEl) {
    this.taskBoardEl = parentEl.querySelector('.taskboard');
    this.taskBoardEl.addEventListener('click', RemoveTask.removeTask);
  }

  static removeTask(click) {
    if (click.target.classList.contains('remove-task')) {
      click.target.closest('.task').remove();
    }
  }
}
