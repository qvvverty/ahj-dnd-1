// const taskBoardEl = document.querySelector('.taskboard');
// let shiftGrabbedElX;
// let shiftGrabbedElY;
// let grabbedEl = null;

// function drag(event) {
//   grabbedEl.style.left = `${event.pageX - shiftGrabbedElX - taskBoardEl.offsetLeft}px`;
//   grabbedEl.style.top = `${event.pageY - shiftGrabbedElY - taskBoardEl.offsetTop}px`;
// }

// taskBoardEl.addEventListener('mousedown', (event) => {
//   if (event.target.classList.contains('task')) {
//     grabbedEl = event.target;
//     event.target.classList.add('grabbed');
//     shiftGrabbedElX = event.clientX - grabbedEl.getBoundingClientRect().left;
//     shiftGrabbedElY = event.clientY - grabbedEl.getBoundingClientRect().top;
//     taskBoardEl.addEventListener('mousemove', drag);
//   }
// });
import TaskBoard from './TaskBoard';

const taskBoard = new TaskBoard();
taskBoard.bindToDOM(document.querySelector('.taskboard-container'));
