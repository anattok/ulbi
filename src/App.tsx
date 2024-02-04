import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//заменил <Router> на <BrowserRouter as Router>,
// что явно указывает, что мы используем маршрутизатор для браузера.
// Это должно решить проблему, связанную с отсутствием свойств location и navigator
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { MainPage } from "./pages/MainPage/MainPage";

export const App = () => {
    return (
        <Router>
            <div className="app">
                <Link to="/">Main</Link>
                <Link to="/about">About</Link>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/main" element={<MainPage />} />
                </Routes>
            </div>
        </Router>
    );
};
