import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Planets from "./pages/Planets";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // 从 localStorage 获取保存的主题偏好
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
        }
    }, []);

    useEffect(() => {
        // 当主题改变时，将其保存到 localStorage
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        // 设置文档的主题类
        document.documentElement.className = isDarkMode ? "dark" : "light";
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <NextUIProvider>
            <main className={isDarkMode ? "dark" : "light"}>
                <React.StrictMode>
                    <div>
                        <BrowserRouter>
                            <Navbar
                                isDarkMode={isDarkMode}
                                toggleDarkMode={toggleDarkMode}
                            />
                            <div>
                                <br />
                                <Routes>
                                    <Route index element={<Home />} />
                                    <Route path="/home" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="*" element={<NotFound />} />
                                    <Route
                                        path="/planets"
                                        element={<Planets />}
                                    />
                                    <Route
                                        path="/dashboard"
                                        element={<Dashboard />}
                                    />
                                </Routes>
                            </div>
                        </BrowserRouter>
                    </div>
                </React.StrictMode>
            </main>
        </NextUIProvider>
    );
}

export default App;
