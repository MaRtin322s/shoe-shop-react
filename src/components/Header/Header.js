const Header = () => {
    return (
        <header>
            <a id="logo" href="/"
            >
                <img id="logo-img" src="./images/logo.png" alt="logo" />
            </a>

            <nav>
                <div>
                    <a href="">Dashboard</a>
                    <a href="">Search</a>
                </div>

                <div class="user">
                    <a href="">Add Pair</a>
                    <a href="">Logout</a>
                </div>

                <div class="guest">
                    <a href="">Login</a>
                    <a href="">Register</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;