import classNames from 'classnames';
import styles from './page-browse.module.scss';

export interface PageBrowseProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PageBrowse = ({ className }: PageBrowseProps) => {
    return <div className={classNames(styles.root, className)}>PageBrowse</div>;
};
