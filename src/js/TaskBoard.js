import DragAndDrop from './DragAndDrop';
import AddTask from './AddTask';
import RemoveTask from './RemoveTask';

export default class TaskBoard {
  bindToDOM(parentEl) {
    this.parentEl = parentEl;

    const dnd = new DragAndDrop();
    dnd.bindToDOM(parentEl);

    const addTask = new AddTask();
    addTask.bindToDOM(parentEl);

    const removeTask = new RemoveTask();
    removeTask.bindToDOM(parentEl);
  }
}
