export default class TaskBoard {
  bindToDOM(parentEl) {
    this.grab = this.grab.bind(this);
    this.drag = this.drag.bind(this);
    this.drop = this.drop.bind(this);

    this.parentEl = parentEl;

    this.taskBoardEl = this.parentEl.querySelector('.taskboard');
    this.grabbedEl = null;

    this.taskBoardEl.addEventListener('mousedown', this.grab);
  }

  grab(event) {
    if (event.target.classList.contains('task')) {
      this.grabbedEl = event.target;
      this.grabbedElClone = this.grabbedEl.cloneNode(true);
      this.grabbedElClone.classList.add('dropzone');
      this.grabbedEl.style.width = `${this.grabbedEl.getBoundingClientRect().width}px`;
      this.grabbedEl.classList.add('grabbed');

      this.taskBoardEl.addEventListener('mouseover', this.keepGrabbing);

      this.shiftGrabbedElX = event.clientX - this.grabbedEl.getBoundingClientRect().left;
      this.shiftGrabbedElY = event.clientY - this.grabbedEl.getBoundingClientRect().top;
      this.drag(event);
      this.taskBoardEl.addEventListener('mousemove', this.drag);
      this.taskBoardEl.addEventListener('mouseup', this.drop);
    }
  }

  drag(event) {
    event.preventDefault();
    this.grabbedEl.style.left = `${event.pageX - this.shiftGrabbedElX - this.taskBoardEl.offsetLeft}px`;
    this.grabbedEl.style.top = `${event.pageY - this.shiftGrabbedElY - this.taskBoardEl.offsetTop}px`;

    this.underDraggedEl = document.elementFromPoint(event.pageX, event.pageY);
    this.showDropPlace(event);

    // if (
    //   !this.underDraggedEl.classList.contains('task')
    //   && !this.underDraggedEl.classList.contains('task-column')
    //   && !this.underDraggedEl.classList.contains('taskboard')
    // ) {
    //   this.taskBoardEl.dispatchEvent(new Event('mouseup'));
    //   console.log('Aaa!');
    // }
  }

  // eslint-disable-next-line class-methods-use-this
  keepGrabbing(event) {
    event.target.classList.add('keep-grabbing');
    event.relatedTarget.classList.remove('keep-grabbing');
  }

  drop() {
    this.taskBoardEl.removeEventListener('mousemove', this.drag);
    this.taskBoardEl.removeEventListener('mouseover', this.keepGrabbing);

    this.underDraggedEl.classList.remove('keep-grabbing');
    this.grabbedEl.remove();
    this.grabbedElClone.classList.remove('dropzone');

    this.taskBoardEl.removeEventListener('mouseup', this.drop);
  }

  showDropPlace(dragEvent) {
    if (this.underDraggedEl.classList.contains('task')) {
      const underDraggedElCoords = this.underDraggedEl.getBoundingClientRect();
      if (dragEvent.pageY < underDraggedElCoords.top + underDraggedElCoords.height / 2) {
        this.underDraggedEl.before(this.grabbedElClone);
      } else {
        this.underDraggedEl.after(this.grabbedElClone);
      }
    }

    if (this.underDraggedEl.classList.contains('task-column')) {
      this.underDraggedEl.append(this.grabbedElClone);
    }
  }
}
