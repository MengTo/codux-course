import classNames from 'classnames';
import styles from './updates-page.module.scss';
import { UpdateItem } from '../update-item/update-item';
import { Header } from '../header/header';
import { Grid } from '../grid/grid';
import { Footer } from '../footer/footer';
import { Helmet } from 'react-helmet';
export interface UpdatesPageProps {
    className?: string;
}

import update1Image from '../../assets/homeimagedark10.jpeg';
import update2Image from '../../assets/homeimagedark11.jpeg';
const updates = [
    {
        date: 'May 22, 2024',
        title: 'Change everything with one click: colors, sizes, backgrounds, breakpoints.',
        description: `Improve your designing process through Figma UI Kit's easy-to-use elements like buttons, segmented controls, toggle, and search, cards, each designed for a smooth user experience.`,
        image: update1Image,
    },
    {
        date: 'May 23, 2024',
        title: 'Modify everything in a single click: hues, dimensions, backdrops, breakpoints',
        description: `Boost your design method by utilizing Figma UI Kit's simple elements including buttons, segmented controls, toggle, search, and cards, each built for a seamless user experience.`,
        image: update2Image,
    },
];

export const UpdatesPage = ({ className }: UpdatesPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Helmet>
                <title>Updates - DesignCode UI iOS</title>
                <meta
                    name="description"
                    content="Create iOS apps faster with our extensive Figma UI kit. It offers adaptive components, font/color variables, dynamic type sizes, and both light and dark mode designs."
                />
                <meta name="keywords" content="Figma UI Kit, iOS App Design, UI Design" />
            </Helmet>
            <Grid />
            <Header selectedButton="Updates" />
            {updates.map((update, index) => (
                <UpdateItem
                    key={index}
                    date={update.date}
                    title={update.title}
                    description={update.description}
                    imageSrc={update.image}
                />
            ))}
            <Footer />
        </div>
    );
};
