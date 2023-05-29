import { useState } from 'react'
import { DatePicker } from 'antd'
import reactLogo from './assets/react.svg'
import { Layout, Menu} from 'antd'
import { RouterMap } from './Router'
import { NavigationMenu } from './components/NavigationMenu'
const { Header, Footer, Content, Sider} = Layout

function App() {
  const [count, setCount] = useState(0)


  const items = [
    { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
    { label: 'item 2', key: 'item-2' }, // which is required
    {
      label: 'sub menu',
      key: 'submenu',
    },
  ];

  return (
      <Layout style={{ height: '100vh' }}>
          <RouterMap/>
          <NavigationMenu/>
          <Header style={{ background: "white" }}>
          <Menu mode="horizontal" items={items}></Menu>
          </Header>
          <Layout>
            <Sider></Sider>
            <Content></Content>
          </Layout>
      </Layout>
  )
}

export default App
