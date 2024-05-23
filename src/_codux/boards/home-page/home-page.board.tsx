import { createBoard } from '@wixc3/react-board';
import { HomePage } from '../../../components/home-page/home-page';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'HomePage',
    Board: () => (
        <MemoryRouter>
            <HomePage />
        </MemoryRouter>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1072,
        canvasWidth: 1200,
    },
});
