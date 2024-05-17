import { createBoard } from '@wixc3/react-board';
import { Router } from '../../../components/router/router';

export default createBoard({
    name: 'Router',
    Board: () => <Router />,
    isSnippet: true,
});