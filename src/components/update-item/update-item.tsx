import styles from './update-item.module.scss';
import ChevronRightSvg from '../../assets/Chevron Right.svg';
import Homeimagedark14Jpeg from '../../assets/homeimagedark14.jpeg';

export interface UpdateItemProps {
    className?: string;
    date?: string;
    title?: string;
    description?: string;
    imageSrc?: string;
}

export const UpdateItem = ({ date, title, description, imageSrc }: UpdateItemProps) => {
    return (
        <article className={styles.articleUpdate}>
            <div className={styles.textBlockDouble}>
                <div className={styles.may122024}>{date}</div>
                <h2 className={styles.changeEverythingWith}>{title}</h2>
                <p className={styles.improveYourDesigning}>{description}</p>
                <a className={styles.buttonSecondary}>
                    <div className={styles.buttonFreeText}>Read more</div>
                    <img className={styles.buttonFreeIcon} alt="" src={ChevronRightSvg} />
                </a>
            </div>
            <div className={styles.galleryItem}>
                <img
                    className={styles.galleryItemImage}
                    alt=""
                    src={imageSrc || Homeimagedark14Jpeg}
                />
            </div>
        </article>
    );
};
