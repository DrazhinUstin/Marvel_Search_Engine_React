import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    HomePage,
    CharactersPage,
    SingleCharacterPage,
    ComicsPage,
    SingleComicPage,
    CreatorsPage,
    SingleCreatorPage,
    FavoritesPage,
    ErrorPage,
} from './pages';
import { Navbar, PageFooter, ScrollUpBtn } from './components';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='characters' element={<CharactersPage />} />
                <Route path='characters/:id' element={<SingleCharacterPage />} />
                <Route path='comics' element={<ComicsPage />} />
                <Route path='comics/:id' element={<SingleComicPage />} />
                <Route path='creators' element={<CreatorsPage />} />
                <Route path='creators/:id' element={<SingleCreatorPage />} />
                <Route path='favorites' element={<FavoritesPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <PageFooter />
            <ScrollUpBtn />
            <ToastContainer position='top-center' theme='dark' />
        </Router>
    );
};

export default App;
