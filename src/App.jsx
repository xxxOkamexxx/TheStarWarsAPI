import { Routes, Route } from 'react-router-dom'

// Page component
import Navigation from './components/Navigation'
import PageContextProvider from './context/PageContext'
import HomePage from './pages/HomePage'
import FilmsPage from './pages/FilmsPage'
import EpisodePage from './pages/EpisodePage'
import PeoplePage from './pages/PeoplePage'
import CharacterPage from './pages/CharacterPage'
import NotFound from './pages/NotFound'

// style
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';


function App() {

  return (
    <div className="App">
      <PageContextProvider>
      <Navigation />
        <Container className='py-3'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/films" element={<FilmsPage />} />
            <Route path="/films/:id" element={<EpisodePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path='/people/:id' element={<CharacterPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </PageContextProvider>
    </div>
  );
}

export default App;
