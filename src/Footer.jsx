import { t } from './languageToggler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className='flex flex-col border mt-12'>
            <div>
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
                            <a href="https://wa.me/491701234567" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} size="2xl"   />
                            </a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2xl"  />
                            </a>
                        </span>
                    </div>
            </div>
            <div>{t('footer.impressum')}</div>
            
        </footer>
    )
}