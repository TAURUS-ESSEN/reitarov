import { t } from './languageToggler';
import { Link } from 'react-router-dom'

export default function Header({ lang, switchLang }) {
    const closeMenu = () => {
  const cb = document.getElementById('menu-toggler');
  if (cb) cb.checked = false;
};
    return (
        <header className="flex justify-between items-center shadow-header p-6 mb-10">
            <div className='animate-fade-left'>
                <Link to="/" className='flex flex-col '>
                    <span className='text-2xl font-semibold '>{t('brand.title')}</span>
                    <span className='text-sm -mt-0.5 text-center text-secondary '>
                        <span className="text-gray-400">{'<>'}</span>
                            {t('brand.subtitle')}
                        <span className="text-gray-400">{'</>'}</span>
                    </span>
                </Link>
            </div>
            <input type="checkbox" id="menu-toggler" className="peer hidden" />
            <label htmlFor="menu-toggler" role="button" tabIndex="0" className="ml-auto md:hidden animate-fade-right ">
                <span className="open text-orange shine-btn peer-checked:hidden ">☰</span>
                <span className="close text-orange shine-btn hidden peer-checked:inline">✕</span>
            </label>
            <nav className=' '>
                <ul className='flex gap-6 font-semibold text-xl items-center  animate-fade-right'>
                    
                    <li><Link to="/#about"  onClick={closeMenu}>{t('nav.menu1')}</Link></li>
                    <li><Link to="/#projects"  onClick={closeMenu}>{t('nav.menu2')}</Link></li>
                    <li><Link to="/#contacts"  onClick={closeMenu}>{t('nav.menu3')}</Link></li>
                    <li>
                        <button
                            className="p-2 rounded-lg bg-black text-white shadow-leicht hover:bg-additional duration-300 shine-btn" 
                            onClick={switchLang}
                        >
                            {lang === 'de' ? 'EN' : 'DE'}
                        </button>
                    </li>
                </ul>

            </nav>
        </header>
    )
}