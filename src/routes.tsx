import { createBrowserRouter } from 'react-router-dom'
import { KimiComponent } from './KimiComponent'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <KimiComponent />,
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
