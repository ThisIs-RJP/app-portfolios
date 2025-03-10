import React, { useEffect, useState } from 'react';

// Dynamically import the components
const MobileApp = React.lazy(() => import('./components/MobileApp')); // Mobile-specific component
const DesktopApp = React.lazy(() => import('./components/DesktopApp')); // Desktop-specific component

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Handle viewport resizing
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {isMobile ? <MobileApp /> : <DesktopApp />}
        </React.Suspense>
    );
}

export default App;
