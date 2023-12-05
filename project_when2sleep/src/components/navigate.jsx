import { useContext } from 'react';
import { AuthContext } from './signIn';

function Navigate(props) {
    const { user, setUser } = useContext(AuthContext);

    const handleLogout = () => {
        setUser({}); 
        localStorage.removeItem('user'); 
    };

    return (
        <header>
            <a href="/"><img className="light" id="logo" src="../../images/logo.png"/></a>
            <a href="/" id="when2sleep"> {props.title} </a>
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

export default Navigate;
