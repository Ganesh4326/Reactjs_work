import {Outlet,Link} from 'react-router-dom';

const Layout=()=>{
    return(
        <div className='layout'>
            <div className='layout-title'>
                Welcome to SG Transports
            </div>
            <nav className='links'>
                <ul>
                    <li>
                    <Link to="/login" className='lin' >Login</Link>
                    </li>
                    <li>
                    <Link to="/reg" className='lin' >Register</Link>
                    </li>
                </ul>
            </nav>
        <Outlet/>
        </div>
    )
}

export default Layout;