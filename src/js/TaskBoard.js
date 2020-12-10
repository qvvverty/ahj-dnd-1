export default class TaskBoard {
  bindToDOM(parentEl) {
    this.parentEl = parentEl;

    this.taskBoardEl = this.parentEl.querySelector('.taskboard');
    this.grabbedEl = null;

    this.taskBoardEl.addEventListener('mousedown', this.grab.bind(this));
  }

  grab(event) {
    if (event.target.classList.contains('task')) {
      this.grabbedEl = event.target;
      this.prevToGrabbedEl = this.grabbedEl.previousElementSibling;
      this.grabbedEl.classList.add('grabbed');

      // cursor "grabbing" from the start
      this.grabbedEl.closest('.task-column').classList.add('keep-grabbing');

      this.shiftGrabbedElX = event.clientX - this.grabbedEl.getBoundingClientRect().left;
      this.shiftGrabbedElY = event.clientY - this.grabbedEl.getBoundingClientRect().top;
      this.taskBoardEl.addEventListener('mousemove', this.drag.bind(this));
    }
  }

  drag(event) {
    this.grabbedEl.style.left = `${event.pageX - this.shiftGrabbedElX - this.taskBoardEl.offsetLeft}px`;
    this.grabbedEl.style.top = `${event.pageY - this.shiftGrabbedElY - this.taskBoardEl.offsetTop}px`;

    this.taskBoardEl.addEventListener('mouseover', TaskBoard.keepGrabbing);

    if (document.elementFromPoint(event.pageX, event.pageY).classList.contains('task')) {
      console.log('Aaa!');
    }
  }

  static keepGrabbing(event) {
    event.target.classList.add('keep-grabbing');
    event.relatedTarget.classList.remove('keep-grabbing');
  }
}
