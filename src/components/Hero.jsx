
export default function Hero({t}) {
    const bullets = t('hero.bullets', { returnObjects: true });
    return (
        <section className="flex gap-10 items-center" id="about">
            <div className="flex flex-col gap-6 w-full">
                <h1 className="text-3xl font-semibold">{t('hero.title')}</h1>
                <p>{t('hero.subtitle')}</p>
                <ul className="flex flex-col gap-2">
                    {bullets.map((b, i) => (
                        <li key={i}>✓ {b}</li>
                    ))}
                </ul>
                <div className="flex justify-between">
                    <button className="px-4 py-2 rounded-lg bg-black text-white font-medium  duration-300 shine-btn">
                        {t('hero.buttons.primary')}
                    </button>
                    <span className="flex items-center gap-2 px-4 border-b font-medium ">
                        <img src="download.webp" width={34} />
                        <a href="./cv-reitarov.pdf" download>{t('hero.buttons.secondary')}</a>
                    </span>
                </div>
            </div>
            <div className="w-full h-auto">
                <img src="./hero.webp" className="rounded-xl" />
            </div>
        </section>
    )
}