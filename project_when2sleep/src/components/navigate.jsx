function Navigate(props) {
    
return(
    <header>
        <a href="/"><img class="light" id="logo" src="../../images/logo.png"/></a>
        <a href="/" id="when2sleep"> {props.title} </a>
    <nav>
        <ul>
        <li><a href="/tracker"> Tracker </a></li>
        <li> <button id="loginButton"><a href="/login">&nbsp; Login &nbsp;</a></button></li>
        </ul>
    </nav>
    </header>);
}

export default Navigate;