import classNames from 'classnames';
import styles from './gallery.module.scss';
import Homeimage3Jpeg from '../../assets/homeimage3.jpeg';
import Homeimage2Jpeg from '../../assets/homeimage2.jpeg';
import Homeimage4Jpeg from '../../assets/homeimage4.jpeg';
import BookmarkSvg from '../../assets/bookmark.svg';

export interface GalleryProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Gallery = ({ className }: GalleryProps) => {
    return (
        <div className={styles.gallery}>
            <div className={styles.galleryItem}>
                <img className={styles.galleryItemImage} alt="" src={Homeimage3Jpeg} />
                <a className={styles.circleButton}>
                    <img className={styles.bookmarkIcon} alt="" src={BookmarkSvg} />
                </a>
            </div>
            <div className={styles.galleryItem}>
                <img className={styles.galleryItemImage} alt="" src={Homeimage2Jpeg} />
            </div>
            <div className={styles.galleryItem}>
                <img className={styles.galleryItemImage} alt="" src={Homeimage4Jpeg} />
            </div>
        </div>
    );
};
