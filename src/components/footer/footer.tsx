import classNames from 'classnames';
import styles from './footer.module.scss';
import LogoSvg from '../../assets/logo.svg';
import XLogoSvg from '../../assets/x  logo.svg';
import YoutubeLogoSvg from '../../assets/youtube  logo.svg';
import LineSvg from '../../assets/line.svg';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={styles.footer}>
            <img className={styles.lineIcon} alt="" src={LineSvg} />
            <div className={styles.col}>
                <div className={styles.company}>
                    <div className={styles.logoFooter}>
                        <a className={styles.logoDesigncode}>
                            <img className={styles.logoIcon} alt="" src={LogoSvg} />
                        </a>
                        <b className={styles.company1}>DesignCode</b>
                    </div>
                    <div className={styles.designIosApplications}>
                        Design iOS applications quickly using our comprehensive Figma UI kit
                    </div>
                    <div className={styles.social}>
                        <a className={styles.buttonCircle}>
                            <img className={styles.xLogo} alt="" src={XLogoSvg} />
                        </a>
                        <a className={styles.buttonCircle}>
                            <img className={styles.xLogo} alt="" src={YoutubeLogoSvg} />
                        </a>
                    </div>
                    <div className={styles.privacyTerms}>© 2024 . PRIVACY . TERMS</div>
                </div>
                <div className={styles.newsletter}>
                    <div className={styles.subscribeToThe}>
                        Subscribe to the DesignCode Newsletter
                    </div>
                    <div className={styles.recentUpdatesThoughts}>
                        Recent updates, thoughts, news, and announcements straight to your email.
                    </div>
                    <div className={styles.button}>
                        <div className={styles.elapsed}>
                            <div className={styles.elapsed1}>2024</div>
                            <div className={styles.div}>January</div>
                        </div>
                        <div className={styles.emailAddress}>Email address</div>
                        <div className={styles.elapsed}>
                            <div className={styles.elapsed1}>New</div>
                            <div className={styles.div}>Components</div>
                        </div>
                    </div>
                    <div className={styles.button1}>
                        <div className={styles.elapsed}>
                            <div className={styles.elapsed1}>2024</div>
                            <div className={styles.div}>January</div>
                        </div>
                        <div className={styles.subscribe}>Subscribe</div>
                        <div className={styles.elapsed}>
                            <div className={styles.elapsed1}>New</div>
                            <div className={styles.div}>Components</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.col1}>
                <div className={styles.menu}>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>Designs</div>
                        <div className={styles.glow} />
                    </div>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>Pricing</div>
                        <div className={styles.glow} />
                    </div>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>Updates</div>
                        <div className={styles.glow} />
                    </div>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>Sign in</div>
                        <div className={styles.glow} />
                    </div>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>Create account</div>
                        <div className={styles.glow} />
                    </div>
                </div>
                <div className={styles.menu}>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>Courses</div>
                        <div className={styles.glow} />
                    </div>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>UI Kit Web</div>
                        <div className={styles.glow} />
                    </div>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>UI Kit iOS</div>
                        <div className={styles.glow} />
                    </div>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>Mockups</div>
                        <div className={styles.glow} />
                    </div>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>Wallpapers</div>
                        <div className={styles.glow} />
                    </div>
                </div>
            </div>
        </div>
    );
};
