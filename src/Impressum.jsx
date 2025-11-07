import { useOutletContext } from "react-router-dom";

export default function Impressum() {
    const {t} = useOutletContext();
    return (
        <section id="impressum" className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">{t('impressum.title')}</h1>

        <div className="space-y-6 text-lg leading-relaxed">
            <div>
            <h2 className="font-semibold">{t('impressum.legalHeading')}</h2>
            <p>
                Yevhen Reitarov<br />
                {t('impressum.addressLine')}
            </p>
            </div>

            <div>
            <h2 className="font-semibold">{t('impressum.contactHeading')}</h2>
            <p>
                E-Mail: <a className="underline" href="mailto:contact@reitarov.dev">contact@reitarov.dev</a>
            </p>
            </div>

            <div>
            <h2 className="font-semibold">{t('impressum.responsibleHeading')}</h2>
            <p>
                Yevhen Reitarov<br />
                {t('impressum.addressLine')}
            </p>
            </div>

            <p className="text-base text-neutral-600">
            {t('impressum.note')}
            </p>
        </div>
        </section>
    );
}
