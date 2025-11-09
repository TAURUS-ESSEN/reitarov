export default function Vision({t}) {
    return (
        <section className="flex flex-col md:flex-row gap-20 bg-primary mx-0 px-4 py-2 md:py-10">
            <div className="w-full order-2 md:order-1">
                <h2 className="w-45">{t('vision.title')}</h2>
                <p className="leading-relaxed">{t('vision.text')}</p>
            </div>
            <div className="w-full text-center order-1 md:order-2">
                <img src="vision.webp" width="300" height="300" className="w-full"/>
            </div>
        </section>
    )
}