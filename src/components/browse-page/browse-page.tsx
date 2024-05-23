import classNames from 'classnames';
import styles from './browse-page.module.scss';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import HomeimageDark1 from '../../assets/homeimagedark1.jpeg';
import HomeimageDark2 from '../../assets/homeimagedark2.jpeg';
import HomeimageDark3 from '../../assets/homeimagedark3.jpeg';
import HomeimageDark4 from '../../assets/homeimagedark4.jpeg';
import HomeimageDark5 from '../../assets/homeimagedark5.jpeg';
import HomeimageDark6 from '../../assets/homeimagedark6.jpeg';
import HomeimageDark7 from '../../assets/homeimagedark7.jpeg';
import HomeimageDark8 from '../../assets/homeimagedark8.jpeg';
import HomeimageDark9 from '../../assets/homeimagedark9.jpeg';
import { GalleryImage } from '../gallery-image/gallery-image';
import ChevronDownSvg from '../../assets/chevron down.svg';
import MagnifyingGlassSvg from '../../assets/magnifying glass.svg';
import { Grid } from '../grid/grid';
import { Helmet } from 'react-helmet';

const images = [
    { src: HomeimageDark1, alt: 'Home Image Dark 1' },
    { src: HomeimageDark2, alt: 'Home Image Dark 2' },
    { src: HomeimageDark3, alt: 'Home Image Dark 3' },
    { src: HomeimageDark4, alt: 'Home Image Dark 4' },
    { src: HomeimageDark5, alt: 'Home Image Dark 5' },
    { src: HomeimageDark6, alt: 'Home Image Dark 6' },
    { src: HomeimageDark7, alt: 'Home Image Dark 7' },
    { src: HomeimageDark8, alt: 'Home Image Dark 8' },
    { src: HomeimageDark9, alt: 'Home Image Dark 9' },
];

export interface BrowsePageProps {
    className?: string;
}

export const BrowsePage = ({ className }: BrowsePageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Helmet>
                <title>Browse - DesignCode UI iOS</title>
                <meta
                    name="description"
                    content="Create iOS apps faster with our extensive Figma UI kit. It offers adaptive components, font/color variables, dynamic type sizes, and both light and dark mode designs."
                />
                <meta name="keywords" content="Figma UI Kit, iOS App Design, UI Design" />
            </Helmet>
            <Grid />
            <Header selectedButton="Designs" />
            <div className={styles.menu}>
                <div className={styles.dropdowns}>
                    <div className={classNames(styles.button, styles.selected)}>
                        <div className={styles.newest}>Newest</div>
                        <img className={styles.chevronDownIcon} alt="" src={ChevronDownSvg} />
                    </div>
                    <div className={styles.button}>
                        <div className={styles.newest}>Designs</div>
                        <img className={styles.chevronDownIcon} alt="" src={ChevronDownSvg} />
                    </div>
                    <div className={styles.button}>
                        <div className={styles.newest}>Bookmarks</div>
                        <img className={styles.chevronDownIcon} alt="" src={ChevronDownSvg} />
                    </div>
                </div>
                <div className={styles.search}>
                    <div className={styles.timer}>
                        <input className={styles.search1} placeholder="Search" />
                        <img className={styles.chevronDownIcon} alt="" src={MagnifyingGlassSvg} />
                    </div>
                </div>
            </div>
            <div className={styles.gallery}>
                {images.map((image, index) => (
                    <GalleryImage key={index} image={image.src} alt={image.alt} />
                ))}
            </div>
            <Footer />
        </div>
    );
};
