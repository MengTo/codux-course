import { createBoard } from '@wixc3/react-board';
import { Grid } from '../../../components/grid/grid';

export default createBoard({
    name: 'Grid',
    Board: () => <Grid />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 2056,
        canvasHeight: 946,
    },
});
