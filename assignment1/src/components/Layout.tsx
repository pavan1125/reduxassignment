import { Outlet,NavLink } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <div className='bg-success-subtle mb-5'>
            <NavLink className={({isActive})=>isActive ?" text-decoration-none btn btn-success mx-2 px-2 my-2":"text-decoration-none mx-2 px-2 my-2"} end to=".">products</NavLink>
            <NavLink className={({isActive})=>isActive ?"text-decoration-none btn btn-success mx-2 px-2 my-2":"text-decoration-none mx-2 px-2 my-2"} to="/createProduct">add Product</NavLink>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )

}
export default Layout