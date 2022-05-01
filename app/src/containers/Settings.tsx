import { Form, Input } from "antd";
import React from "react";
import { Flex } from "theme-ui";
import { PageTitle } from "../components/PageTitle";
import { AccountSettings } from "../components/Settings/AccountSettings";
import { GeneralSettings } from "../components/Settings/GeneralSettings";
import theme from "../styles/theme";

export default function Settings() {
    return (
        <Flex sx={{
            flexDirection: 'column',
            width: '100%'
        }}>
            <PageTitle>Settings</PageTitle>
            <GeneralSettings />
            <AccountSettings />
        </Flex>
    )
}
