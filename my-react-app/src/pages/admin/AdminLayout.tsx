import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function AdminLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet />
    </div>
  )
}

export default AdminLayout