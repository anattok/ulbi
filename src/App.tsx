import {  Routes, Route, Link } from "react-router-dom";
import  {AboutPageAsync}  from "./pages/AboutPage/AboutPage.async";
import  {MainPageAsync}  from "./pages/MainPage/MainPage.async";
import {Suspense, useContext} from "react";
import "./styles/index.scss"
import Counter from "./components/Counter/Counter";
import {Theme, ThemeContext} from "./theme/ThemeContext";

export const App = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }

    return (
            <div className={`app ${theme}`}>
                <button onClick={toggleTheme}>toggleTheme</button>
                <Counter/>
                <Link to={"/"}>Главная</Link>
                <Link to={"/about"}>About</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/about" element={<AboutPageAsync />} />
                        <Route path="/" element={<MainPageAsync />} />
                    </Routes>
                </Suspense>
            </div>
    );
};
