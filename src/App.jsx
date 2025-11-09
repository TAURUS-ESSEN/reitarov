import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { t, setLang } from "./languageToggler";
import './App.css'
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [lang, setLangState] = useState("en");

  const switchLang = () => {
    const newLang = lang === "de" ? "en" : "de";
    setLang(newLang);        
    setLangState(newLang);   
  };

  
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!els.length || !("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target); 
          }
        });
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 }
    );

    requestAnimationFrame(() => {
      els.forEach((el) => io.observe(el));
    });

    return () => io.disconnect();
  }, [location.pathname, location.hash]);  
  
  return (
    <div className='flex flex-col lg:max-w-300 border bg-white border-gray-300 m-auto shadow-soft'>
      <Header lang={lang} switchLang={switchLang} />
        <ScrollToTop />
        <Outlet context={{t}} />
      <Footer />
    </div>
  )
}

export default App
