import classNames from 'classnames';
import styles from './header.module.scss';
import DesigncodeLogoSvg from '../../assets/designcode  logo.svg';
import { Link } from 'react-router-dom';
import MenuAlignLeftDescSvg from '../../assets/menu align left desc.svg';
import { Drawer } from '../drawer/drawer';
import { useState } from 'react';
import { useRef, useEffect } from 'react';

export interface HeaderProps {
    className?: string;
    selectedButton?: 'Designs' | 'Updates' | 'Buy Now';
}

export const Header = ({ className, selectedButton }: HeaderProps) => {
    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const drawerRef = useRef(null);

    const toggleDrawer = () => {
        setDrawerVisible(!isDrawerVisible);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (!drawerRef.current || !(drawerRef.current as any).contains(event.target)) {
            setDrawerVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={classNames(styles.root, className)}>
            {isDrawerVisible && (
                <div className={styles.drawer} ref={drawerRef}>
                    <Drawer />
                </div>
            )}
            <Link to={'/'} className={styles.logo}>
                <img src={DesigncodeLogoSvg} alt="" />
                <div className={styles.logoText}>DesignCode</div>
            </Link>
            <a className={styles.buttonCircle} onClick={toggleDrawer}>
                <img src={MenuAlignLeftDescSvg} alt="" height="24px" width="24px" />
            </a>
            <div className={styles.header}>
                <Link
                    to={'/browse'}
                    className={`${styles.button} ${
                        selectedButton === 'Designs' ? styles.selected : ''
                    }`}
                >
                    <div className={styles.designs}>Designs</div>
                    <div className={styles.info}>
                        <div className={styles.total}>Total</div>
                        <div className={styles.div}>252</div>
                    </div>
                </Link>
                <Link
                    to={'/updates'}
                    className={`${styles.button} ${
                        selectedButton === 'Updates' ? styles.selected : ''
                    }`}
                >
                    <div className={styles.designs}>Updates</div>
                    <div className={styles.info}>
                        <div className={styles.total}>2024</div>
                        <div className={styles.div}>May</div>
                    </div>
                </Link>
                <a
                    href="https://designcode.io"
                    target="_blank"
                    className={`${styles.button} ${
                        selectedButton === 'Buy Now' ? styles.selected : ''
                    }`}
                >
                    <div className={styles.designs}>Buy Now</div>
                    <div className={styles.info}>
                        <div className={styles.total}>Early</div>
                        <div className={styles.div}>Access</div>
                    </div>
                </a>
            </div>
        </div>
    );
};
