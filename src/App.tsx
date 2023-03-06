import { useState } from 'react'
import { Layout, Menu } from 'antd'
const { Header, Footer, Content, Sider } = Layout
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const items = [
    { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
    { label: 'item 2', key: 'item-2' }, // which is required
    {
      label: 'sub menu',
      key: 'submenu',
    },
  ]

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`)
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ background: 'white' }}>
        <Menu mode="horizontal" items={items}></Menu>
      </Header>
      <Layout>
        <Content>
          <RouterProvider router={router} />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
