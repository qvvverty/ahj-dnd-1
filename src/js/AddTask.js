export default class AddTask {
  bindToDOM(parentEl) {
    this.TaskBoardEl = parentEl.querySelector('.taskboard');
    this.TaskBoardEl.addEventListener('click', this.taskBtnsHandler.bind(this));
    this.TaskBoardEl.addEventListener('keydown', this.addTask.bind(this));
  }

  taskBtnsHandler(click) {
    if (click.target.classList.contains('add-task-btn')) {
      this.closeAddTaskPopup();
      this.activeNewTaskEl = click.target.querySelector('.new-task-text-wrapper');
      this.activeNewTaskTextarea = this.activeNewTaskEl.querySelector('.new-task-text');
      this.activeNewTaskEl.classList.add('visible');
      this.activeNewTaskTextarea.select();
    } else if (!click.target.classList.contains('new-task-text')) {
      this.closeAddTaskPopup();
    }
  }

  addTask(keydown) {
    if (keydown.keyCode === 13 && keydown.target.classList.contains('new-task-text')) {
      if (this.activeNewTaskTextarea.value) {
        const newTaskEl = AddTask.createTaskEl(this.activeNewTaskTextarea.value);
        this.activeNewTaskEl.closest('.add-task-btn').before(newTaskEl);

        this.closeAddTaskPopup();
      } else {
        keydown.preventDefault();
      }
    }
  }

  static createTaskEl(content) {
    const taskEl = document.createElement('div');
    taskEl.classList.add('task');
    taskEl.innerHTML = `
      ${content}
      <div class="remove-task">✕</div>
    `;

    return taskEl;
  }

  closeAddTaskPopup() {
    if (this.activeNewTaskEl) {
      this.activeNewTaskTextarea.value = '';
      this.activeNewTaskEl.classList.remove('visible');
      this.activeNewTaskEl = null;
    }
  }
}
