import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';

export default function Contacts({t}) {
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
        <section id="contacts" className="flex flex-col justify-center gap-2 items-center my-6 md:my-15 reveal" >
                <h2 className='text-6xl text-center'>{t('contact.title')}</h2>
                <h3 className='max-w-150 text-center'>{t('contact.text')}</h3>
                <a ref={linkRef} className='flex gap-2 justify-center items-center text-2xl'>
                    <FontAwesomeIcon icon={faEnvelope} /> 
                    <div ref={mailRef}></div>
                </a>
        </section>
    )
}