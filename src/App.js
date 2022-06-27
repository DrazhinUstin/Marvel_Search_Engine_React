import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    HomePage,
    CharactersPage,
    ComicsPage,
    SingleComicPage,
    FavoritesPage,
    ErrorPage,
} from './pages';
import { Navbar } from './components';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='characters' element={<CharactersPage />} />
                <Route path='comics' element={<ComicsPage />} />
                <Route path='comics/:id' element={<SingleComicPage />} />
                <Route path='favorites' element={<FavoritesPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default App;
