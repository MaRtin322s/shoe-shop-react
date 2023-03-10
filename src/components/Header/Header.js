import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link id="logo" to="/">
                <img id="logo-img" src="./images/logo.png" alt="logo" />
            </Link>

            <nav>
                <div>
                    <Link to="/dashboard">Dashboard </Link>
                    <Link to="/search">Search </Link>
                </div>

                <div className="user">
                    <Link to="/create">Add Pair </Link>
                    <Link to="/logout">Logout </Link>
                </div>

                <div className="guest">
                    <Link to="/login">Login </Link>
                    <Link to="/register">Register </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;