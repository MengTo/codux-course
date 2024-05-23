import { createBoard } from '@wixc3/react-board';
import { BrowsePage } from '../../../components/browse-page/browse-page';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'BrowsePage',
    Board: () => (
        <MemoryRouter>
            <BrowsePage />
        </MemoryRouter>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1554,
    },
});
