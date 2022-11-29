import React from 'react';
import './form.css';
interface formProps {
  value:React.ChangeEventHandler<HTMLInputElement>;
  addTask:React.MouseEventHandler;
}

const TaskForm:React.FC<formProps> = props => {
    return (
      <div className="form-wrapper">
        <form className="form">
          <input className="input" placeholder="ваше сообщение" onChange={props.value}/>
          <button onClick={props.addTask} className='btn btn-primary'>Add</button>
        </form>
      </div>
    );
};

export default TaskForm;