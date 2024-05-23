import classNames from 'classnames';
import styles from './updates-page.module.scss';
import { UpdateItem } from '../update-item/update-item';
import { Header } from '../header/header';
import { Grid } from '../grid/grid';
import { Footer } from '../footer/footer';

export interface UpdatesPageProps {
    className?: string;
}

export const UpdatesPage = ({ className }: UpdatesPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Grid />
            <Header selectedButton="Updates" />
            <UpdateItem />
            <Footer />
        </div>
    );
};
