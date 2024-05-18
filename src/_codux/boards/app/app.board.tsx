import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { MemoryRouter } from 'react-router-dom'

export default createBoard({
    name: 'App',
    Board: () => <MemoryRouter><App /></MemoryRouter>,
    environmentProps: {
        windowWidth: 1094,
        windowHeight: 792,
    },
    isSnippet: false,
});
