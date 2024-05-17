import { createBoard } from '@wixc3/react-board';
import { PageBrowse } from '../../../components/page-browse/page-browse';

export default createBoard({
    name: 'PageBrowse',
    Board: () => <PageBrowse />,
    isSnippet: true,
});