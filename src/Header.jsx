import { t } from './languageToggler';

export default function Header({ lang, switchLang }) {
    return (
        <header className="flex justify-between border">
            <div>
                {t('brand.title')}
                {t('brand.subtitle')}
            </div>
            <nav className='flex gap-2'>
                <ul className='flex gap-2'>
                    <li>{t('nav.menu1')}</li>
                    <li>{t('nav.menu2')}</li>
                    <li>{t('nav.menu3')}</li>
                </ul>
                <button className="border" onClick={switchLang}>
                    {lang === 'de' ? 'EN' : 'DE'}
                </button>
            </nav>
        </header>
    )
}