import React, { Component } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

class Task extends Component {

  constructor(props) {
    super(props)

    this.state = {
      complete: false
    }
  }

  crossLineTask = event => {
    let complete = this.state.complete;
    if (complete) {
      this.setState({
        complete: false
      })
    } else {
      this.setState({
        complete: true
      })
    }
  }

  render() {

    const { desc } = this.props.info;
    const complete = this.state.complete;
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
      <section className="Task">
        <article>
          <Checkbox
            {...label}
            onClick={this.crossLineTask}
            sx={{
              color: "#66A3BB",
              '&.Mui-checked': {
                color: "#66A3BB",
              },
            }}
          />
          <h3 className={`desc ${complete ? "crossLine" : ""}`}>{desc}</h3>
        </article>
        <IconButton aria-label="delete" size="small" onClick={this.props.remove}>
          <DeleteIcon fontSize="inherit" className="DeleteIcon" />
        </IconButton>
      </section>
    )
  }
}

export default Task;
