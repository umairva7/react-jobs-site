import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'


function mainLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default mainLayout