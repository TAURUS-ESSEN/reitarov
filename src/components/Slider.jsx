export default function Sldier({t}) {
    const cards = t('projects.cards')
    return (
        <section>
            {t('projects.title')}
            <ul className="flex gap-2">
                { cards.map((card, i) => {
                    return (
                        <li className="flex flex-col" key={i}>
                            
                            <span><img src="${card.img}" width={300} height={300} /></span> 
                            <span>{card.title}</span>
                            <span>{card.stack}</span>
                            <span>{card.live}</span>
                            <span>{card.source}</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}