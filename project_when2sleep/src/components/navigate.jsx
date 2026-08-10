import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './authContext';

function Navigate({ title }) {
    const { user, setUser } = useContext(AuthContext);

    const handleLogout = () => {
        setUser({});
        sessionStorage.removeItem('user');
    };

    return (
        <header>
            <a href="/"><img className="light" id="logo" src="../../images/logo.png"/></a>
            <a href="/" id="when2sleep"> {title} </a>
            <nav>
                <ul>
                    <li><a href="/tracker"> Tracker </a></li>
                    <li>
                        {user && user.name ? (
                            <button id="logoutButton" onClick={handleLogout}>Logout</button>
                        ) : (
                            <button id="loginButton"><a href="/login">&nbsp; Login &nbsp;</a></button>
                        )}
                    </li>
                </ul>{/*<
                {user && user.name && (
                    <div className="user-profile">
                        <img src={user.getImageUrl()} alt={user.getName()} />
                        <span>{user.getName()}</span>
                    </div>
                )}*/}

            </nav>
        </header>
    );
}

Navigate.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Navigate;
