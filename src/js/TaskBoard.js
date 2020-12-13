import DragAndDrop from './DragAndDrop';
import AddTask from './AddTask';

export default class TaskBoard {
  bindToDOM(parentEl) {
    this.parentEl = parentEl;

    const dnd = new DragAndDrop();
    dnd.bindToDOM(parentEl);

    const addTask = new AddTask();
    addTask.bindToDOM(parentEl);
  }
}
