function Navigate(props) {
    
return(
    <header>
    <nav>
        <ul>
        <li id="when2sleep"><a href="/"> {props.title} </a></li>
        <li><a href="/tracker"> Tracker </a></li>
        <li><a href="/login"> Login </a></li>
        </ul>
    </nav>
    </header>);
}

export default Navigate;