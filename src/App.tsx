import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Lazy load components
const Navbar = React.lazy(() => import('./components/NavBar/Navbar'));
const Home = React.lazy(() => import('./components/pages/Home'));
const Gallery = React.lazy(() => import('./components/pages/Gallery'));
const Loading = React.lazy(() => import('./components/utils/Loader'));
const Pricing = React.lazy(() => import('./components/pages/Pricing'));
//const About = React.lazy(() => import('./components/pages/About'));
const Info = React.lazy(() => import('./components/pages/Info'));

const Construction = React.lazy(() => import('./components/pages/Construction'));

const App: React.FC = () => {
    const [loader, setLoading] = useState<boolean>(false); // State for loader visibility
    const location = useLocation(); // Hook to track location changes

    useEffect(() => {
        const handleStart = () => {
            setLoading(true);
            setTimeout(() => {
                const overlay = document.querySelector('.loading-overlay') as HTMLElement;
                if (overlay) {
                    overlay.classList.add('fade-out');
                }
            }, 500);
        };

        const handleComplete = () => {
            setLoading(false);
        };

        handleStart();
        setTimeout(handleComplete, 1000);

        return () => handleComplete();// Cleanup on unmount
    }, [location.pathname]); // Dependency on location.pathname

    return (
        <Suspense >
            {loader && <Loading />} {/* Conditionally render the loading component */}

            <Navbar /> {/* Render Navbar component */}


            <Routes>
                <Route path="/" element={<Home />} /> {/* Route for Home */}
                <Route path="/gallery" element={<Gallery />} /> {/* Under Construction  */}
                <Route path="/pricing" element={<Pricing />} /> {/* Under Construction  */}
                <Route path="/about" element={<Construction />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </Suspense>
    );
}

export default function RootApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}
