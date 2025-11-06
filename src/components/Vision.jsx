export default function Vision({t}) {
    return (
        <section className="flex">
        <div>
            <img src="vision.webp" width="300" height="300" className="border"/>
        </div>
        <div>
            <h2>{t('vision.title')}</h2>
            <p>{t('vision.text')}</p>
        </div>
        </section>
    )
}