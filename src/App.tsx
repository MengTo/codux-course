import { HomePage } from './components/home-page/home-page';
import { BrowsePage } from './components/browse-page/browse-page';
import { UpdatesPage } from './components/updates-page/updates-page';
import { Route, Routes } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

function App() {
    return (
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/browse" element={<BrowsePage />} />
                <Route path="/updates" element={<UpdatesPage />} />
            </Routes>
        </MemoryRouter>
    );
}

export default App;
