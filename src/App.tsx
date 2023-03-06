import { useState } from 'react'
import { DatePicker, Switch } from 'antd'
import reactLogo from './assets/react.svg'
import { Layout, Menu } from 'antd'
const { Header, Footer, Content, Sider } = Layout
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: '',
  },
  {
    path: '/kimi',
    element: <div> kimi!</div>,
  },
  {
    path: '/lele',
    element: <div> lele!</div>,
  },
])

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
        <Content></Content>
      </Layout>
    </Layout>
  )
}

export default App
