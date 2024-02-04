import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return(
        <nav className='navbar-container-box'>
            <ul>
                <li>
                    <NavLink to="/" className='nav-link-item'>О сайте</NavLink>
                </li>
                <li>
                    <NavLink to="/consultations" className='nav-link-item'>Консультации</NavLink>
                </li>
                <li>
                    <NavLink to="/todolist" className='nav-link-item'>Список дел</NavLink>
                </li>
                <li>
                    <NavLink to="/posts" className='nav-link-item'>Посты</NavLink>
                </li>
            </ul>
        </nav>
    );
}