import { jsx, Flex } from 'theme-ui';
import theme from '../../styles/theme';
import { IconName } from '../CustomIcon';
import NavBarItemElement from './NavBarItemElement';
import NavBarItem from './NavBarItemElement';

export type NavBarItem = {
    title: string;
    iconName: IconName;
    path: string;
};

export type NavBarProps = {
    items: NavBarItem[];
    children?: any;
};

export default function NavBar(props: NavBarProps) {
    const { items } = props;
    return (
        <Flex
            sx={{
                backgroundColor: '#fafafa',
                flexGrow: 1,
                paddingTop: 50,
                flexDirection: 'column'
            }}
        >
            {items.map((item) => {
                return <NavBarItemElement key={item.title} item={item} />;
            })}
        </Flex>
    );
}
