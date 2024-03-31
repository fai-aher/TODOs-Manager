import '../styles/TodoItem.css';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem(props) {
    return (
      <div className="TodoItemContainer">

        <li className="TodoItem">
          <div className="Icons-container">
            <CompleteIcon
              completed={props.completed}
              onComplete={props.onComplete}
            />
            <DeleteIcon 
            onDelete = {props.onDelete}
          />
          </div>

          <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        </li>
      </div>
    );
  }

export {TodoItem};