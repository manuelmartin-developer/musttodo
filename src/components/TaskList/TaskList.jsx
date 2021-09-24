import React, { Component } from "react";
import Task from "../Task/Task";
import tasks from "../../tasks";
import Fab from '@mui/material/Fab';
import Swal from 'sweetalert2'

class TaskList extends Component {

  constructor(props) {
    super(props)

    this.desc = React.createRef();

    this.state = {
      tasks: [],
      inputFilled: false,
      inputText: '',
      checked: false
    }
  }

  componentDidMount() {

    this.setState({
      tasks: tasks
    })
  }


  addTask = (event) => {
    event.preventDefault();

    const desc = this.desc.current.value;

    if (desc.length > 5) {
      const task = { desc };
      this.setState({ tasks: [...this.state.tasks, task] });
      this.desc.current.value = "";

      this.setState({ inputFilled: false })

      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true
      })

      Toast.fire({
        icon: 'success',
        title: 'Task added successfully'
      })

    } else {

    }

  }

  removeAllTasks = () => {
    this.setState({
      tasks: []
    })
  }
  resetTasks = () => {
    this.setState({
      tasks: tasks
    })
  }
  removeOneTask = (index) => {
    const remainTasks = this.state.tasks.filter((current, currentIndex) => currentIndex !== index);
    this.setState({ tasks: remainTasks });
  }

  paintTask = () => {
    return this.state.tasks.map((task, index) => <Task info={task} key={index} remove={() => this.removeOneTask(index)} />)
  }

  isInputFilled = event => {

    let task = event.target.value;
    this.setState({ inputText: task })


    if (task.length > 0) {
      this.setState({
        inputFilled: true
      })

    } else {
      this.setState({
        inputFilled: false
      })
    }

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputText !== this.state.inputText) {
      this.handleCheck();
    }
  }
  handleCheck = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.toggleCheck();
      if (this.desc.current.value !== ""){

        this.desc.current.value = "";
        this.setState({
          inputFilled: false
        })
  
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true
        })
  
        Toast.fire({
          icon: 'error',
          title: 'Opss! too slow ... :('
        })
      }
    }, 20000);
  }

  toggleCheck = () => {
    this.setState(prevState => ({ checked: !prevState.checked }));
  }

  render() {

    const filled = this.state.inputFilled;
    return (
      <>
        <form onSubmit={this.addTask} autoComplete="off">
          <input className="input" type="text" name="desc" ref={this.desc} onChange={this.isInputFilled} />
        </form>
        <section className="buttons">
          <Fab aria-label="add" onClick={this.resetTasks}>
            Reset
          </Fab>
          <Fab className={`${filled ? "" : "invisible"}`} aria-label="add" onClick={this.addTask}>
            Add
          </Fab>
          <Fab aria-label="add" onClick={this.removeAllTasks}>
            Clear
          </Fab>
        </section>
        <section className="tasks">
          <article>
            {this.paintTask()}
          </article>
        </section>
      </>
    )
  }
}

export default TaskList;
