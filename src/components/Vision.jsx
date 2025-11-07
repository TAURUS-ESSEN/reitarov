export default function Vision({t}) {
    return (
        <section className="flex gap-20 bg-primary mx-0 px-4 py-10">
        <div className="w-full text-center">
            <img src="vision.webp" width="300" height="300" className="w-full"/>
        </div>
        <div className="w-full">
            <h2 className="w-45">{t('vision.title')}</h2>
            <p className="leading-relaxed">{t('vision.text')}</p>
        </div>
        </section>
    )
}