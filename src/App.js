import './css/App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UsersListPage from './pages/UsersListPage';

function App() {
    return (
        <div className="main-container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/data" element={<UsersListPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;