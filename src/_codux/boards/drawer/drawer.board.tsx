import { createBoard } from '@wixc3/react-board';
import { Drawer } from '../../../components/drawer/drawer';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'Drawer',
    Board: () => (
        <MemoryRouter>
            <Drawer />
        </MemoryRouter>
    ),
    isSnippet: true,
    environmentProps: {
        windowHeight: 727,
        canvasWidth: 280,
    },
});
