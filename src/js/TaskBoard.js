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
      event.target.classList.add('grabbed');
      this.shiftGrabbedElX = event.clientX - this.grabbedEl.getBoundingClientRect().left;
      this.shiftGrabbedElY = event.clientY - this.grabbedEl.getBoundingClientRect().top;
      this.taskBoardEl.addEventListener('mousemove', this.drag.bind(this));
    }
  }

  drag(event) {
    this.grabbedEl.style.left = `${event.pageX - this.shiftGrabbedElX - this.taskBoardEl.offsetLeft}px`;
    this.grabbedEl.style.top = `${event.pageY - this.shiftGrabbedElY - this.taskBoardEl.offsetTop}px`;

    console.log(document.elementFromPoint(parseInt(this.grabbedEl.style.left, 10), parseInt(this.grabbedEl.style.top, 10)).classList.contains('task'));
      // console.log('Aaa!');
      // console.log(parseInt(this.grabbedEl.style.left, 10));
    // }
  }
}
