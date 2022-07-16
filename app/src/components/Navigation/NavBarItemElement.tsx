import { HomeOutlined } from '@ant-design/icons';
import { jsx, Flex, Text, Link } from 'theme-ui';
import theme from '../../styles/theme';
import * as Icon from 'react-feather';
import { NavBarItem } from './NavBar';
import useHover from '../../hooks/useHover';
import { useRouter } from 'next/router';
import { CustomIcon } from '../CustomIcon';

export type NavBarItemProps = {
    item: NavBarItem;
    children?: any;
};

export default function NavBarItemElement(props: NavBarItemProps) {
    const { item } = props;

    const [hoverRef, isHovered] = useHover<HTMLDivElement>();
    const router = useRouter()

    const { query: { tab }} = router

    const isBold = isHovered || tab == item.path

    return (
        <Flex
            ref={hoverRef}
            sx={{
                cursor: 'pointer',
                fontSize: 18,
                marginLeft: theme.space.larger,
                display: 'flex',
                flexDirection: 'row',
                marginBottom: theme.space.large
            }}
            onClick={() => router.push({
                query: {
                    tab: item.path
                }
            })}
        >
            <Flex
                sx={{
                    marginTop: '4px',
                    marginRight: '8px',
                    opacity: isBold ? 1.0 : 0.8,
                }}
            >
                <CustomIcon iconName={item.iconName} size={20}  strokeWidth={2} color={isBold ? theme.colors.primary : 'rgba(0,0,0,0.6)'}/>
            </Flex>

            <Text
                sx={{
                    color: isBold ? 'black':'rgba(0,0,0,0.6)',
                    fontSize: 18,
                    fontFamily: 'Trebuchet MS',
                    fontWeight: isBold ? '500' : '400',
                    
                }}
            >
                {item.title}
            </Text>
        </Flex>
    );
}
