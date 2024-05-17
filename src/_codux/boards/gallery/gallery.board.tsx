import { createBoard } from '@wixc3/react-board';
import { Gallery } from '../../../components/gallery/gallery';

export default createBoard({
    name: 'Gallery',
    Board: () => <Gallery />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 966,
    },
});
