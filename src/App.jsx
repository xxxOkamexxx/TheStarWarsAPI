import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container className='py-3'>
        <Routes>
          <Route path="/" element={<HomePage />} />

        </Routes>
      </Container>
      
    </div>
  );
}

export default App;
