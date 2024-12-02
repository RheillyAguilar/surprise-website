

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import ForthPage from "./Pages/ForthPage";
import { AudioProvider } from "./Components/Navigation/AudioContext";
import Auth from "./Components/Authentication/Auth";
import EnvelopePage from "./Pages/EnvelopePage";

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AudioProvider>
            {isAuthenticated ? (
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/first" element={<FirstPage />} />
                    <Route path="/second" element={<SecondPage />} />
                    <Route path="/third" element={<ThirdPage />} />
                    <Route path="/forth" element={<ForthPage />} />
                    <Route path="/envelope" element={<EnvelopePage />}/>
                </Routes>
            ) : (
                <Auth onLogin={() => setIsAuthenticated(true)} />
            )}
        </AudioProvider>
    );
}
