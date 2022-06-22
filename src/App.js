import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, CharactersPage, ErrorPage } from './pages';
import { Navbar } from './components';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='characters' element={<CharactersPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default App;
