import { createBoard } from '@wixc3/react-board';
import { UpdatesPage } from '../../../components/updates-page/updates-page';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'UpdatesPage',
    Board: () => (
        <MemoryRouter>
            <UpdatesPage />
        </MemoryRouter>
    ),
    isSnippet: true,
});
