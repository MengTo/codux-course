import classNames from 'classnames';
import styles from './header.module.scss';
import DesigncodeLogoSvg from '../../assets/designcode  logo.svg';
import { Link } from 'react-router-dom';
import MenuAlignLeftDescSvg from '../../assets/menu align left desc.svg';
import { Drawer } from '../drawer/drawer';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.drawer}>
                <Drawer />
            </div>
            <Link to={'/'} className={styles.logo}>
                <img src={DesigncodeLogoSvg} alt="" />
                <div className={styles.logoText}>DesignCode</div>
            </Link>
            <a className={styles.buttonCircle}>
                <img src={MenuAlignLeftDescSvg} alt="" height="24px" width="24px" />
            </a>
            <div className={styles.header}>
                <Link to={'/browse'} className={styles.button}>
                    <div className={styles.designs}>Designs</div>
                    <div className={styles.info}>
                        <div className={styles.total}>Total</div>
                        <div className={styles.div}>252</div>
                    </div>
                </Link>
                <div className={styles.button}>
                    <div className={styles.designs}>Updates</div>
                    <div className={styles.info}>
                        <div className={styles.total}>2024</div>
                        <div className={styles.div}>May</div>
                    </div>
                </div>
                <div className={styles.button}>
                    <div className={styles.designs}>Buy Now</div>
                    <div className={styles.info}>
                        <div className={styles.total}>Early</div>
                        <div className={styles.div}>Access</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
