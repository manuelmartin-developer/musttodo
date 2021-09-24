import React, { Component } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

class Loader extends Component {
  render() {
    return (
      <Box sx={{ display: 'flex' }} className="loader">
        <CircularProgress />
      </Box>
    )
  }
}

export default Loader;
