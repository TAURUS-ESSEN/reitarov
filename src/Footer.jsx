import { t } from './languageToggler';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className='flex flex-col gap-4 border mt-12 p-10 bg-black text-white'>
            <div className='flex justify-between items-center '>
                <div>{t('footer.copyright')}</div>
                <div className="flex justify-center gap-2 brands">
                        <span>
                            <a href="https://github.com/TAURUS-ESSEN" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2xl"  />
                            </a>
                        </span>
                        <span>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2xl"  />
                            </a>
                        </span>
                        <span>
                            <a href="https://wa.me/491604514509" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} size="2xl"   />
                            </a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/yevhen-reitarov-96297b2b9/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2xl"  />
                            </a>
                        </span>
                    </div>
            </div>
            <div className='text-right text-base'><Link to="impressum">{t('footer.impressum')}</Link></div>
            
        </footer>
    )
}