import { Link, NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../logo.svg';

const Header = props => {
    const { rockets = [], changeRocket } = props;

    return (
        <header className='header'>
            <Link to='/'>
                <img src={logo} alt='Logo Space X' className='logo' />
            </Link>
            <nav className='main-nav nav'>
                <ul className='list'>
                    {rockets.map((item) => (
                        <li key={item} className='item'>
                            <Link
                                to={`/rocket/${item.replace(' ', '_')}`}
                                onClick={() => changeRocket(item)}
                                className='item-link'
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className='secondary-nav'>
                <ul className='list'>
                    <li className='item'>
                        <NavLink
                            exact
                            to='/'
                            className='item-link'
                            activeClassName='active'
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className='item'>
                        <NavLink
                            to='/calendar'
                            className='item-link'
                            activeClassName='active'
                        >
                            Calendar
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export { Header };
