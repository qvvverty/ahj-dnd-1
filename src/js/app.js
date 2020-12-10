import TaskBoard from './TaskBoard';

const taskBoard = new TaskBoard();
taskBoard.bindToDOM(document.querySelector('.taskboard-container'));
