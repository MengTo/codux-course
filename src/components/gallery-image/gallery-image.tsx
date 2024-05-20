import styles from './gallery-image.module.scss';
import BookmarkSvg from '../../assets/bookmark.svg';
import Homeimage2Jpeg from '../../assets/homeimage2.jpeg';

export interface GalleryImageProps {
    image?: string;
    alt?: string;
}

export const GalleryImage = ({ image = Homeimage2Jpeg, alt = 'Image' }: GalleryImageProps) => {
    return (
        <div className={styles.galleryItem}>
            <img className={styles.galleryItemImage} alt="Image" src={image} />
            <a className={styles.circleButton}>
                <img className={styles.bookmarkIcon} alt="Bookmark" src={BookmarkSvg} />
            </a>
        </div>
    );
};
