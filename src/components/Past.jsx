export default function Past({t}) {
    const items = t('past.items');
    return (
        <section className="flex bg-primary mx-0 p-4 reveal">
            <div className="w-full">
                <h2>{t('past.title')}</h2>
                <p>{t('past.subtitle')}</p>
                <ul className="">
                    {items.map(item=>{
                        return (
                            <li className="flex gap-6  text-base items-center my-4">
                                <span><img src={`${item.icon}`} width="35" className="min-w-10"/></span>
                                <span>
                                    <h3>{item.title}</h3>
                                    <p className="text-secondary">{item.text}</p>
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="hidden md:block">
                <img src="past.webp" width="300" height="300" className="w-auto" />
            </div>
        </section>
    )
}