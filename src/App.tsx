import { HomePage } from './components/home-page/home-page';
import { BrowsePage } from './components/browse-page/browse-page';
import { Route, Routes } from 'react-router-dom'
import { MemoryRouter } from 'react-router-dom';

function App() {
    return (
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/browse" element={<BrowsePage />} />
            </Routes>
        </MemoryRouter>
    );
}

export default App;
