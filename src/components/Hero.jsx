
export default function Hero({t}) {
    const bullets = t('hero.bullets', { returnObjects: true });
    return (
        <section className="flex">
            <div className="flex flex-col">
                <h1 className="">{t('hero.title')}</h1>
                <p>{t('hero.subtitle')}</p>
                <ul>
                    {bullets.map((b, i) => (
                        <li key={i}>✓ {b}</li>
                    ))}
                </ul>
                <div className="flex justify-between">
                    <button>{t('hero.buttons.primary')}</button>
                    <a href="./cv-reitarov.pdf" download>{t('hero.buttons.secondary')}</a>

                </div>
            </div>
            <div className="">
                <img src="./hero.webp" width="300" />
            </div>
        </section>
    )
}