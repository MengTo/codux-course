import styles from './home-page.module.scss';
import FigmaLogoSvg from '../../assets/Figma  Logo.svg';
import ChevronRightSvg from '../../assets/Chevron Right.svg';
import Homeimage1Jpeg from '../../assets/homeimage1.jpeg';
import { Header } from '../../components/header/header';
import { Gallery } from '../../components/gallery/gallery';
import { Grid } from '../../components/grid/grid';
import { Footer } from '../../components/footer/footer';
import { Helmet } from 'react-helmet';

export interface HomePageProps {
    className?: string;
}

export const HomePage = ({}: HomePageProps) => {
    return (
        <div className={styles.root}>
            <Helmet>
                <title>Figma UI Kit and design system for iOS</title>
                <meta
                    name="description"
                    content="Create iOS apps faster with our extensive Figma UI kit. It offers adaptive components, font/color variables, dynamic type sizes, and both light and dark mode designs."
                />
                <meta name="keywords" content="Figma UI Kit, iOS App Design, UI Design" />
            </Helmet>
            <Grid />
            <Header />
            <div className={styles.hero}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Speed up iOS app design with our robust Figma UI kit
                    </h1>
                    <h2 className={styles.subtitle}>Figma UI Kit and design system for iOS</h2>
                    <p className={styles.text}>
                        Create iOS apps faster with our extensive Figma UI kit. It offers adaptive
                        components, font/color variables, dynamic type sizes, and both light and
                        dark mode designs.
                    </p>
                    <div className={styles.buttons}>
                        <a
                            href="https://www.figma.com/file/tMjSwKbrcKbmb1Q4aDokxn/DesignCode-UI?type=design&node-id=0%3A1&mode=design&t=rHj8CqbIvJLLUtty-1&utm_medium=affiliate&utm_source=partnerstack&utm_campaign=mengto6739&link=figma-3-signup-promo"
                            className={styles.primary}
                        >
                            <img src={FigmaLogoSvg} alt="" height="20" width="20" />
                            Preview in figma
                        </a>
                        <a
                            href="https://www.figma.com/community/file/1316701892522528301"
                            className={styles.secondary}
                        >
                            Free download
                            <img src={ChevronRightSvg} alt="" height="20" width="20" />
                        </a>
                    </div>
                </div>
                <img
                    src={Homeimage1Jpeg}
                    alt=""
                    height="500"
                    className={styles.image}
                    width="500px"
                />
            </div>
            <Gallery />
            <Footer />
        </div>
    );
};
