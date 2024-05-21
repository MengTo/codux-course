import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1272,
        windowHeight: 792,
        canvasHeight: 1496,
    },
    isSnippet: false,
});
