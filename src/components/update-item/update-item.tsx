import classNames from 'classnames';
import styles from './update-item.module.scss';
import ChevronRightSvg from '../../assets/Chevron Right.svg';
import Homeimagedark14Jpeg from '../../assets/homeimagedark14.jpeg';

export interface UpdateItemProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UpdateItem = ({ className }: UpdateItemProps) => {
    return (
        <article className={styles.articleUpdate}>
            <div className={styles.textBlockDouble}>
                <div className={styles.may122024}>MAY 12, 2024</div>
                <h2 className={styles.changeEverythingWith}>
                    Change everything with one click: colors, sizes, backgrounds, breakpoints.
                </h2>
                <p className={styles.improveYourDesigning}>
                    Improve your designing process through Figma UI Kit's easy-to-use elements like
                    buttons, segmented controls, toggle, and search, cards, each designed for a
                    smooth user experience.
                </p>
                <a className={styles.buttonSecondary}>
                    <div className={styles.buttonFreeText}>Read more</div>
                    <img className={styles.buttonFreeIcon} alt="" src={ChevronRightSvg} />
                </a>
            </div>
            <div className={styles.galleryItem}>
                <img className={styles.galleryItemImage} alt="" src={Homeimagedark14Jpeg} />
            </div>
        </article>
    );
};
