import { t } from './languageToggler';
import { Link } from 'react-router-dom'

export default function Header({ lang, switchLang }) {
    return (
        <header className="flex justify-between items-center shadow-header p-6 mb-10">
            <div>
                <Link to="/">
                    <span className='text-2xl font-semibold'>{t('brand.title')}</span>
                    <span className='text-xl'>{t('brand.subtitle')}</span>
                </Link>
            </div>
            <nav className='flex gap-6 items-center'>
                <ul className='flex gap-6 font-semibold text-xl'>
                    <li className=''><a href="/#about" className="">{t('nav.menu1')}</a></li>
                    <li><a href="/#projects" >{t('nav.menu2')}</a></li>
                    <li><a href="/#contacts">{t('nav.menu3')}</a></li>
                </ul>
                <button className=" p-2 rounded-lg bg-black text-white shadow-leicht hover:bg-additional duration-300 shine-btn" onClick={switchLang}>
                    {lang === 'de' ? 'EN' : 'DE'}
                </button>
            </nav>
        </header>
    )
}