import DragAndDrop from './DragAndDrop';
import AddTask from './AddTask';
import RemoveTask from './RemoveTask';
import SaveLoad from './SaveLoad';

export default class TaskBoard {
  bindToDOM(parentEl) {
    this.parentEl = parentEl;

    const dnd = new DragAndDrop();
    dnd.bindToDOM(parentEl);

    const addTask = new AddTask();
    addTask.bindToDOM(parentEl);

    const removeTask = new RemoveTask();
    removeTask.bindToDOM(parentEl);

    const saveLoad = new SaveLoad();
    saveLoad.bindToDOM(parentEl);
    // saveLoad.saveState();
    // SaveLoad.loadState();
  }
}
