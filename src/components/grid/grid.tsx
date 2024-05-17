import classNames from 'classnames';
import styles from './grid.module.scss';

export interface GridProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Grid = ({ className }: GridProps) => {
    return (
        <div className={styles.lines}>
            <div className={styles.linesChild} />
            <div className={styles.linesItem} />
            <div className={styles.linesItem} />
            <div className={styles.linesItem} />
            <div className={styles.linesChild} />
        </div>
    );
};
