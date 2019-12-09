import {generateTasks} from './mock/task.js';
import {generateFilters} from './mock/filter.js';
import BoardController from './controllers/board.js';

const TASK_COUNT = 22;

const tasks = generateTasks(TASK_COUNT);
const filters = generateFilters();

const boardController = new BoardController(filters);

boardController.render(tasks);
