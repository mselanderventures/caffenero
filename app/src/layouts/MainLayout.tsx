import { useRouter } from 'next/router'
import { jsx, Flex } from 'theme-ui'
import Deals from '../containers/Deals'
import Locations from '../containers/Locations'
import Settings from '../containers/Settings'
import theme from '../styles/theme'


export type LayoutProps = {
    navBar: React.ReactNode
    children?: any;
}

export default function Layout(props: LayoutProps) {
    const { navBar, children } = props


    const router = useRouter();
    const { query: { tab }} = router

    console.log(tab)

    const isDealsTab = tab == 'deals';
    const isLocationsTab = tab == 'locations';
    const isSettingsTab = tab == 'settings';

    return (
        <Flex sx={{
            flexDirection: 'row',
            height: '100vh'
        }}>
            <Flex style={{
                width: '200px',
                flexShrink: 0,
                boxShadow: theme.shadows.subtle,
                overflow: 'visible',
                zIndex: 10
            }}>
                {navBar}
            </Flex>
            <Flex sx={{
                flexGrow: 1,
                backgroundColor: 'white',
                paddingLeft: 100,
                paddingRight: 100,
                paddingTop: 50
            }}>
                {isDealsTab && <Deals />}
                {isLocationsTab &&  <Locations />}
                {isSettingsTab && <Settings />}
            </Flex>
        </Flex>
    )
}