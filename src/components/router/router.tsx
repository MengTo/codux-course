import classNames from 'classnames';
import styles from './router.module.scss';

export interface RouterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Router = ({ className }: RouterProps) => {
    return <div className={classNames(styles.root, className)}>Router</div>;
};
