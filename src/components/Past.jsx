export default function Past({t}) {
    const items = t('past.items');
    return (
        <section className="flex ">
            <div>
                <h2>{t('past.title')}</h2>
                <p>{t('past.subtitle')}</p>
                <ul>
                    {items.map(item=>{
                        return (
                            <li>
                                <span>{item.icon}</span>
                                <span>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <img src="./past.webp" width="300" height="300" />
            </div>
        </section>
    )
}