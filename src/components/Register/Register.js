import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        rePassword: ''
    });

    const changeHandler = (ev) => {
        ev.preventDefault();

        setUserData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    return (
        <section id="register">
            <div className="form">
                <h2>Register</h2>
                <form className="login-form">
                    <input
                        type="text"
                        name="email"
                        id="register-email"
                        placeholder="email"
                        value={userData.email}
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                        value={userData.password}
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <input
                        type="password"
                        name="rePassword"
                        id="repeat-password"
                        placeholder="repeat password"
                        value={userData.rePassword}
                        onChange={(ev) => changeHandler(ev)}
                    />
                    <button type="submit">login</button>
                    <p className="message">Already registered?
                        <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default Register;