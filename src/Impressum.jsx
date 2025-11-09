import { useOutletContext } from "react-router-dom";
import { useEffect, useRef } from 'react';

export default function Impressum() {
    const {t} = useOutletContext();

    const mailRef = useRef(null);
    const linkRef = useRef(null);

    useEffect(() => {
        const name = 'reitarovea';
        const domain = 'gmail.com';
        const email = `${name}@${domain}`;

        if (mailRef.current) mailRef.current.textContent = email;
        if (linkRef.current) linkRef.current.href = `mailto:${email}`;
    }, []);

    return (
        <section id="impressum" className="max-w-3xl   px-6 py-2">
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
                E-Mail: <a ref={linkRef} className=' text-xl'> <span ref={mailRef}></span>
                </a>
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
