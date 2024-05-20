import classNames from 'classnames';
import styles from './gallery-image.module.scss';
import BookmarkSvg from '../../assets/bookmark.svg';
import Homeimage2Jpeg from '../../assets/homeimage2.jpeg';

export interface GalleryImageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const GalleryImage = ({ className }: GalleryImageProps) => {
    return (
        <div className={styles.galleryItem}>
            <img className={styles.galleryItemImage} alt="" src={Homeimage2Jpeg} />
            <a className={styles.circleButton}>
                <img className={styles.bookmarkIcon} alt="" src={BookmarkSvg} />
            </a>
        </div>
    );
};
