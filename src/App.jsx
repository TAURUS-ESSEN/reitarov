import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { t, setLang } from "./languageToggler";
import './App.css'
import Header from './Header';
import Footer from './Footer';

function App() {
  const [lang, setLangState] = useState("en");

  const switchLang = () => {
    const newLang = lang === "de" ? "en" : "de";
    setLang(newLang);        
    setLangState(newLang);   
  };

  return (
    <div className='flex flex-col lg:max-w-300 border bg-white border-gray-300 m-auto shadow-soft'>
      <Header lang={lang} switchLang={switchLang} />
        <Outlet context={{t}} />
      <Footer />
    </div>
  )
}

export default App
