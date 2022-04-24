import { Routes, Route } from 'react-router-dom'

// Page component
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import FilmsPage from './pages/FilmsPage'
import PeoplePage from './pages/PeoplePage'
import NotFound from './pages/NotFound'

// style
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
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      
    </div>
  );
}

export default App;
