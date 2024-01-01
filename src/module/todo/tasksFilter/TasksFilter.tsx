import { Button } from "../../../components/button/Button";
import { List } from "../../../components/list/List";
import "./TasksFilter.css";

function TasksFilter() {
  return (
    <div className="footer">
      <span className="todo-count">1 items left</span>
      <List className="filters" mode="primary">
        <li>
          <Button size="md" mode="primary">
            All
          </Button>
        </li>
        <li>
          <Button size="md" mode="primary">
            Active
          </Button>
        </li>
        <li>
          <Button size="md" mode="primary">
            Complited
          </Button>
        </li>
      </List>
      <Button size="md" mode="inline">
        Clear completed
      </Button>
    </div>
  );
}

export { TasksFilter };
