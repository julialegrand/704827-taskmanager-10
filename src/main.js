
import {createMenuTemplate} from './components/menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createBoardTemplate} from './components/board.js';
import {createTaskTemplate} from './components/task.js';
import {createTaskEditTemplate} from './components/task-edit.js';
import {createLoadMoreButtonTemplate} from './components/button.js';
const TASK_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const mainElement = document.querySelector(`.main`);
const headerElement = mainElement.querySelector(`.main__control`);

render(headerElement, createMenuTemplate());
render(mainElement, createFilterTemplate());
render(mainElement, createBoardTemplate());

const listTaskElement = mainElement.querySelector(`.board__tasks`);
render(listTaskElement, createTaskEditTemplate());

new Array(TASK_COUNT)
.fill(``)
.forEach(
    () => render(listTaskElement, createTaskTemplate())
);

const boardElememnt = mainElement.querySelector(`.board`);
render(boardElememnt, createLoadMoreButtonTemplate());
