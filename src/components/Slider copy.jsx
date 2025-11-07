export default function Sldier({t}) {
    const cards = t('projects.cards')
    return (
        <section>
            <h2>{t('projects.title')}</h2>
            <ul className="flex gap-20 justify-center">
                { cards.map((card, i) => {
                    return (
                        <li className="flex flex-col justify-center items-center text-base" key={i}>
                            
                            <span className=" max-w-110">
                                <img src={`${card.img}`} styleName="" />
                            </span> 
                            <span><h3>{card.title}</h3></span>
                            <span className="text-secondary">{card.stack}</span>
                            <div className="flex justify-between w-full font-extrabold mt-4">
                                <span>
                                    <a href={`${card.demolink}`} target="_blank" >{card.live}</a>
                                </span>
                                <span>
                                    <a href={`${card.sourcelink}`} target="_blank" >{card.source}</a>
                                </span>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </section>
    )
}