
export default function Hero({t}) {
    const bullets = t('hero.bullets', { returnObjects: true });
    return (
        <section className="flex flex-col lg:flex-row gap-10 lg:items-start xl:items-center animate-fade-up reveal" id="about">
            <div className="w-full h-auto  overflow-hidden rounded-2xl">
                <img src="./hero.webp" className="rounded-xl w-full h-auto aspect-video object-cover animate-zoom-in-slow" alt={t("hero.title")} loading="lazy" />
            </div>
            <div className="flex flex-col gap-6 w-full">
                <h1 className="text-3xl font-semibold">{t('hero.title')}</h1>
                <p>{t('hero.subtitle')}</p>
                <ul className="flex flex-col gap-2 text-base">
                    {bullets.map((b, i) => (
                        <li key={i}>✓ {b}</li>
                    ))}
                </ul>
                <div className="flex justify-between animate-fade-up-600 text-lg">
                    <a  
                        href="https://wa.me/491604514509" 
                        className="px-4 py-2 rounded-lg bg-black text-white font-medium duration-300 shine-btn hover:scale-105 hover:bg-additional"
                        aria-label="Open WhatsApp chat with Yevhen Reitarov"
                    >
                        {t('hero.buttons.primary')}
                    </a>
                    <span className="flex items-center gap-2 px-2 md:px-4 font-medium ">
                    <a 
                        href="./cv_reitarov.pdf" download
                        className="group flex items-center gap-2 px-2 md:px-4 border-b font-medium hover:text-additional transition duration-300"
                    >
                    <img
                        src="download.webp"
                        width={34}
                        alt=""
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105"
                    />
                    {t('hero.buttons.secondary')}
                    </a>
                    </span>
                </div>
            </div>
        </section>
    )
}