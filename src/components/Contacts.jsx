export default function Contacts({t}) {
    return (
        <section className="flex flex-col text-center">
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.subtitle')}</p>
            <p>{t('contact.email')}</p>
        </section>
    )
}