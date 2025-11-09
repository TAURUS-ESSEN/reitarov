import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Contacts({t}) {
    return (
        <section className="flex flex-col justify-center gap-2 items-center my-6 md:my-15 reveal" id="contacts">
                <h2 className='text-6xl text-center'>{t('contact.title')}</h2>
                <h3 className='max-w-150 text-center'>{t('contact.text')}</h3>
                <a href="mailto:reitarovea@gmail.com" className='flex gap-2 justify-center items-center text-2xl'>
                    <FontAwesomeIcon icon={faEnvelope} /> 
                    <span>{t('contact.email')}</span>
                </a>
        </section>
    )
}