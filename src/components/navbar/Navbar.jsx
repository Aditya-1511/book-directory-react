import { Link } from 'react-router-dom';
import './navbar.css'



function Header() {

    return (
        <div>
            <ul className="nav wrapper bg-warning">
                <li>
                    <Link to='/'><img className='logo' style={{ height: "60px", width: "60px" }} src='https://st.depositphotos.com/1654249/1946/i/450/depositphotos_19469509-stock-photo-3d-man-sitting-on-the.jpg' alt='logo'></img></Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/books'>Books</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/about'>About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/order'>Order</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/signup'>Signup</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/login'>Login</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;