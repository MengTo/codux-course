import { createBoard } from '@wixc3/react-board';
import { UpdateItem } from '../../../components/update-item/update-item';

export default createBoard({
    name: 'UpdateItem',
    Board: () => <UpdateItem />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1096,
    },
});
