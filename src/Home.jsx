import { useOutletContext } from "react-router-dom";
import Hero from './components/Hero'
import Vision from './components/Vision'
import Slider from './components/Slider'
import Past from './components/Past'
import Contacts from './components/Contacts'

export default function Home() {
    const {t} = useOutletContext();
    return (
        <main className="flex flex-col">
            <Hero t={t} />
            <Vision t={t} />
            <Slider t={t} />
            <Past t={t} />
            <Contacts t={t}  />
        </main>
    )
}