import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'antd/dist/antd.css'
import { Layout, Menu, Switch } from 'antd'
const { Header, Footer, Content, Sider } = Layout
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/kimi',
    element: <div>Hello kimi!</div>,
  },
  {
    path: '/lele',
    element: <div>Hello lele!</div>,
  },
])

const items = [
  { label: 'home', key: 'item-1', path: '/' }, // remember to pass the key prop
  { label: 'kimi', key: 'item-2', path: '/kimi' }, // which is required
  {
    label: 'sub menu',
    key: 'submenu',
  },
]

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
