import { Form, Input } from "antd";
import React from "react";
import { Flex } from "theme-ui";
import { AccountSettings } from "../components/Settings/AccountSettings";
import { GeneralSettings } from "../components/Settings/GeneralSettings";
import theme from "../styles/theme";

export default function Settings() {
    return (
        <Flex sx={{
            flexDirection: 'column',
            width: '100%'
        }}>
            <GeneralSettings />
            <AccountSettings />
        </Flex>
    )
}
