import { Routes, Route } from 'react-router-dom';
import Create from './components/Create/Create';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Register from "./Register/Register";

function App() {
    return (
        <div id="wrapper">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
