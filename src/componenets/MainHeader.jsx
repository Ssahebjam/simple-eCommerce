const MainHeader = () => {
    return (
        <header id="siteHead" className="container">
            <a className="site-logo-link" href="#"> <img src={"./Meubel House_Logos-05.svg"} alt="" /> <h1>Furniro</h1></a>
            <nav>
                <ul className="menu">
                    <li><a href="#"> Home </a></li>
                    <li><a href="#"> Shop </a></li>
                    <li><a href="#"> About </a></li>
                    <li><a href="#"> Contact Us </a></li>
                </ul>
            </nav>
            <div className="icon-group">
                <button className="btn" type="button"> F </button>
                <button className="btn" type="button"> F </button>
                <button className="btn" type="button"> F </button>
                <button className="btn" type="button"> F </button>
            </div>
        </header>
    )
}

export default MainHeader;