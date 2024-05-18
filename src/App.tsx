import { HomePage } from './components/home-page/home-page';
import { BrowsePage } from './components/browse-page/browse-page';
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowsePage />} />
        </Routes>
    );
}

export default App;
