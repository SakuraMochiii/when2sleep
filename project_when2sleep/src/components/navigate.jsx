function Navigate(props) {
    
return(
    <header>
        <img id="logo" src="../../images/logo.png"/>
        <a href="/" id="when2sleep"> {props.title} </a>
    <nav>
        <ul>
        <li><a href="/tracker"> Tracker </a></li>
        <li><a href="/login"> Login </a></li>
        </ul>
    </nav>
    </header>);
}

export default Navigate;