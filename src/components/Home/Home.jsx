import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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


class Home extends Component {
  render() {
    return (
      <section className="Home">
        <h1>Welcome!!</h1>
        <p>We are sure that you must do something</p>
        <Link to="/todo" className="home-link">
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="neutral">
              I must to do...
            </Button>
            </ThemeProvider>
        </Link>
      </section>
      )
  }
}

export default Home;
