import React, { Component } from "react";
import Task from "../Task/Task";
import tasks from "../../tasks";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2'

const theme = createTheme({
  status: {
    danger: '#66A3BB',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#66A3BB',
      contrastText: '#fff',
    },
  },
});

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
        <ThemeProvider theme={theme}>
              <Button variant="contained" color="neutral" onClick={this.resetTasks}>
                Reset
              </Button>
              <Button className={`${filled ? "" : "invisible"}`} variant="contained" color="neutral" onClick={this.addTask}>
                Add
              </Button>
              <Button variant="contained" color="neutral" onClick={this.removeAllTasks}>
                Clear
              </Button>
            </ThemeProvider>
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
