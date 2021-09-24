import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './styles/styles.scss';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
