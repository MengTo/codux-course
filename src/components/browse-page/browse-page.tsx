import classNames from 'classnames';
import styles from './browse-page.module.scss';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Gallery } from '../gallery/gallery';

export interface BrowsePageProps {
    className?: string;
}

export const BrowsePage = ({ className }: BrowsePageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header />
            <Gallery />
            <Footer />
        </div>
    );
};
