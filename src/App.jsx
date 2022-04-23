import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import SearchFilm from './pages/SearchFilm'
import SearchPeople from './pages/SearchPeople'
import NotFound from './pages/NotFound'
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
          <Route path="/films" element={<SearchFilm />} />
          <Route path="/people" element={<SearchPeople />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      
    </div>
  );
}

export default App;
