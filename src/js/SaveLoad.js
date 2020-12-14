import AddTask from './AddTask';

export default class SaveLoad {
  bindToDOM(parentEl) {
    this.parentEl = parentEl;
    this.taskColumns = parentEl.getElementsByClassName('task-column');

    window.addEventListener('unload', this.saveState.bind(this));
    window.addEventListener('DOMContentLoaded', SaveLoad.loadState);
  }

  saveState() {
    const state = {};

    for (const column of this.taskColumns) {
      state[column.id] = [];
      const tasks = column.getElementsByClassName('task');
      for (const task of tasks) {
        state[column.id].push(task.firstChild.data.trim());
      }
    }

    localStorage.setItem('boardState', JSON.stringify(state));
  }

  static loadState() {
    const state = JSON.parse(localStorage.getItem('boardState'));
    for (const column in state) {
      if (Object.prototype.hasOwnProperty.call(state, column)) {
        const columnEl = document.getElementById(column);
        for (const task of state[column]) {
          columnEl.querySelector('.add-task-btn').before(AddTask.createTaskEl(task));
        }
      }
    }
  }
}
