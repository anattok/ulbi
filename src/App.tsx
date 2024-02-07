import {  Routes, Route, Link } from "react-router-dom";
import  {AboutPageAsync}  from "./pages/AboutPage/AboutPage.async";
import  {MainPageAsync}  from "./pages/MainPage/MainPage.async";
import {Suspense} from "react";
import "./styles/index.scss"
import Counter from "./components/Counter/Counter";

export const App = () => {
    return (
            <div className="app">
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
