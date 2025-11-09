export default function Vision({t}) {
    return (
        <section className="flex flex-col md:flex-row gap-2 bg-primary2 md:bg-primary mx-0 px-4 py-4 md:py-10 animate-fade-up-1000">
            <div className="w-full order-2 md:order-1 reveal">
                <h2 className=" ">{t('vision.title')}</h2>
                <p className="leading-relaxed">{t('vision.text')}</p>
            </div>
            <div className="w-full text-center order-1 md:order-2 reveal ">
                <img src="vision.webp" width="300"  className="w-full" alt={t("vision.title")} loading="lazy"/>
            </div>
        </section>
    )
}