import { useTranslation } from 'next-i18next'
import SectionTitle from '../components/SectionTitle'
import { BsWhatsapp } from 'react-icons/bs'
import { GrLinkedin } from 'react-icons/gr'
import { SiGmail } from 'react-icons/si'
import CopyToClipboard from '../components/CopyToClipboard'
import AnimatedShape from '../components/AnimatedShape'

const Contact = () => {
    const { t } = useTranslation('common')

    return (
        <section className="min-h-screen section-padding py-28 relative overflow-hidden" id="contact">
            {/* Title */}
            <div className="mb-16">
                <SectionTitle word={t('contact.title')} />
            </div>
            {/* Contacts */}
            <section className="flex flex-col gap-8 lg:flex-row lg:gap-16">
                {/* Email - Whatsapp - Linkedin  */}
                <address className="flex flex-col gap-4 lg:pt-8 lg:gap-8">
                    {/* Whatsapp */}
                    <div className="flex items-center gap-4">
                        <a
                            className="flex items-center gap-4 hover:underline"
                            href="https://wa.me/542494209572"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Send whatsapp to 542494209572"
                        >
                            <BsWhatsapp size={25} className="text-sky-400" />
                            <p className="mr-2 text-lg font-semibold not-italic">2494209572</p>
                        </a>

                        <CopyToClipboard text="2494209572" />
                    </div>
                    {/* Email */}
                    <div className="flex items-center gap-4">
                        <a
                            className="flex items-center gap-4 hover:underline"
                            href="mailto:gersaracca@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Send email to gersaracca@gmail.com"
                        >
                            <SiGmail size={25} className="text-sky-400" />
                            <p className="mr-2 text-lg font-semibold not-italic">gersaracca@gmail.com</p>
                        </a>
                        <CopyToClipboard text="gersaracca@gmail.com" />
                    </div>
                    {/* Linkedin */}

                    <a
                        className="flex items-center gap-4 hover:underline"
                        href="https://www.linkedin.com/in/german-saracca/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open linkedin profile"
                    >
                        <GrLinkedin size={25} className="text-sky-400" />
                        <p className="text-lg font-semibold not-italic">{t('contact.linkedin_profile')}</p>
                    </a>
                </address>
            </section>
            <div className="hidden lg:block absolute top-[75vh] right-[15vw]">
                <AnimatedShape />
            </div>
        </section>
    )
}
export default Contact
