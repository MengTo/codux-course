import styles from './gallery.module.scss';
import Homeimage2Jpeg from '../../assets/homeimage2.jpeg';
import Homeimage3Jpeg from '../../assets/homeimage3.jpeg';
import Homeimage4Jpeg from '../../assets/homeimage4.jpeg';
import { GalleryImage } from '../gallery-image/gallery-image';

export interface GalleryProps {
    className?: string;
}

const images = [
    { src: Homeimage2Jpeg, alt: 'Home Image 2' },
    { src: Homeimage3Jpeg, alt: 'Home Image 3' },
    { src: Homeimage4Jpeg, alt: 'Home Image 4' },
];

export const Gallery = ({ className }: GalleryProps) => {
    return (
        <div className={styles.gallery}>
            {images.map((image, index) => (
                <GalleryImage key={index} image={image.src} alt={image.alt} />
            ))}
        </div>
    );
};
