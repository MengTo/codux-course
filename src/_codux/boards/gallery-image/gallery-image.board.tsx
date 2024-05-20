import { createBoard } from '@wixc3/react-board';
import { GalleryImage } from '../../../components/gallery-image/gallery-image';

export default createBoard({
    name: 'GalleryImage',
    Board: () => <GalleryImage />,
    isSnippet: true,
});