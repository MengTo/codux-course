import styles from './App.module.scss';
import FigmaLogoSvg0, { ReactComponent as FigmaLogoSvg } from './assets/Figma  Logo.svg';
import ChevronRightSvg0, { ReactComponent as ChevronRightSvg } from './assets/Chevron Right.svg';
import Homeimage1Jpeg from './assets/homeimage1.jpeg';
import { Header } from './components/header/header';
import { Gallery } from './components/gallery/gallery';
import { Grid } from './components/grid/grid';
import { Footer } from './components/footer/footer';

function App() {
    return (
        <div className={styles.App}>
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
                        <button className={styles.primary}>
                            <img src={FigmaLogoSvg0} alt="" height="20" width="20" />
                            Preview in figma
                        </button>
                        <button className={styles.secondary}>
                            Free download
                            <img src={ChevronRightSvg0} alt="" height="20" width="20" />
                        </button>
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
}

export default App;
