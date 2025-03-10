import { useState, useEffect } from 'react';
import './styles/App.css';
import Nav from "./components/navbar";
import Comp1 from "./components/comp_1";
import MobileNav from "./components/mobile/navbar_mobile";
import MobileComp1 from "./components/mobile/comp_1_mobile";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      {isMobile ? (
        <>
          <MobileNav />
          <MobileComp1 />
        </>
      ) : (
        <>
          <Nav />
          <Comp1 />
        </>
      )}
    </div>
  );
}

export default App;
