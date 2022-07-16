import React, { FC } from 'react';
import { Flex, Text, jsx, ThemeUIStyleObject } from 'theme-ui';
import theme from '../styles/theme';

type PageTitleProps = {
    children: React.ReactNode
    style?: ThemeUIStyleObject
};

export const PageTitle: FC = (props: PageTitleProps) => {
    const { children, style } = props;
    return (
        <Flex
            sx={{
                borderBottom: 'solid #f0f0f0 1.5px',
                width: '100%',
                lineHeight: '34px',
                marginBottom: theme.space.large
            }}
        >
            <Text sx={{
                fontSize: 34,
                fontFamily: 'Trebuchet MS',
                color: 'black',
                fontWeight: 600,
                ...style
            }}>{children}</Text>
        </Flex>
    );
};
