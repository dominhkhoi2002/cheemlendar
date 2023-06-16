"use client"
import React, { useState } from "react"
import { CalendarOutlined, HomeOutlined, SettingOutlined, TeamOutlined } from "@ant-design/icons"
import { MenuProps, ConfigProvider, ThemeConfig } from "antd"
import { Layout, Menu } from "antd"
import CalendarHeader from "./CalendarHeader"

const { Header, Content, Footer, Sider } = Layout
const config: ThemeConfig = {
  token: {
    colorPrimary: "#ff7e04",
    colorPrimaryBgHover: "#fff",
  },
}

type MenuItem = Required<MenuProps>["items"][number]

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode): MenuItem {
  return {
    key,
    icon,
    label,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("Calendar", "2", <CalendarOutlined />),
  getItem("Team", "3", <TeamOutlined />),
  getItem("Setting", "4", <SettingOutlined />),
]

const activeNavOptions = ["Day", "Week", "Month", "Year"] as const

type Props = {
  activeNav: (typeof activeNavOptions)[number]
  content: any
}
const CalendarMenu = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <ConfigProvider theme={config}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{ backgroundColor: "#fff" }}
          theme="light"
        >
          <Menu defaultSelectedKeys={["2"]} mode="inline" items={items} />
        </Sider>
        <Layout>
          <CalendarHeader activeNav={props.activeNav} />
          <Content style={{ margin: "12px 16px 0" }}>
            <div>{props.content}</div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default CalendarMenu
