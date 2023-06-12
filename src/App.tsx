import { useState } from 'react'
import { DatePicker } from 'antd'
import reactLogo from './assets/react.svg'
import { Layout, Menu } from 'antd'
import { RouterMap } from './Router'
import { NavigationMenu } from './components/NavigationMenu'
const { Header, Footer, Content, Sider } = Layout

function App() {
  return (
    <Layout style={{ height: '100vh' }}>
      <NavigationMenu />

      <Layout>
        <Sider></Sider>
        <Content>
          <RouterMap />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
