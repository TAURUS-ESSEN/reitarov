import { useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

export default function Sldier({ t }) {
    const raw = t("projects.cards");
    const cards = useMemo(() => (Array.isArray(raw) ? raw : Object.values(raw || {})), [raw]);

    // 2) сколько карточек одновременно видно (1 / 2)
    const getPerView = () =>
    typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches ? 2 : 1;

    const [perView, setPerView] = useState(getPerView);
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const onChange = () => setPerView(getPerView());
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    // 3) текущий ЛЕВЫЙ индекс окна
    const [index, setIndex] = useState(0);

    // 4) анимация сдвига на 1 карточку
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState(0); // -1 влево, 1 вправо
    const trackRef = useRef(null);

  // корректируем index, если поменялся perView
  useEffect(() => {
    const maxStart = Math.max(0, (cards.length ?? 0) - perView);
    setIndex((i) => Math.min(i, maxStart));
  }, [perView, cards.length]);

  if (!cards.length) {
    return (
      <section>
        <h2>{t("projects.title")}</h2>
        <p className="text-secondary">Нет карточек для отображения.</p>
      </section>
    );
  }

  // границы (без зацикливания)
  const canPrev = index > 0 && !isAnimating;
  const canNext = index < cards.length - perView && !isAnimating;

  // вычисляем, какие карточки рендерить в треке:
  // текущее окно + сосед (слева/справа) для плавного заезда
  const windowCards = cards.slice(index, index + perView);
  const extraLeft = cards[index - 1];
  const extraRight = cards[index + perView];

  let renderCards = [];
  if (direction === -1 && extraLeft) {
    renderCards = [extraLeft, ...windowCards]; // слева вставляем соседнюю
  } else if (direction === 1 && extraRight) {
    renderCards = [...windowCards, extraRight]; // справа вставляем соседнюю
  } else {
    renderCards = [...windowCards]; // без анимации
  }

  // ширина слайда = 100% контейнера / perView
  const slideBasis = `${100 / perView}%`;
  // на сколько сдвигать трек во время анимации: на одну карточку
  // т.е. 100% / perView
  const shiftPercent = 100 / perView;

  const transform =
    isAnimating && direction !== 0
      ? `translateX(${direction === 1 ? -shiftPercent : shiftPercent}%)`
      : "translateX(0%)";

  const handlePrev = () => {
    if (!canPrev) return;
    setDirection(-1);
    setIsAnimating(true);
  };

  const handleNext = () => {
    if (!canNext) return;
    setDirection(1);
    setIsAnimating(true);
  };

  // по окончании CSS-перехода фиксим индекс и сбрасываем состояние
  const onTransitionEnd = () => {
    if (!isAnimating) return;
    setIndex((i) => {
      if (direction === 1) return Math.min(i + 1, cards.length - perView);
      if (direction === -1) return Math.max(i - 1, 0);
      return i;
    });
    setIsAnimating(false);
    setDirection(0);
  };

  return (
    <section id="projects">
      <h2>{t("projects.title")}</h2>

      <div className="flex items-center gap-4 mt-4">
        <button
          type="button"
          onClick={handlePrev}
          disabled={!canPrev}
          className={`px-4 py-2 border rounded-lg transition ${
            canPrev ? "bg-black text-white hover:bg-additional hover:text-black" : "opacity-40 cursor-not-allowed"
          }`}
          aria-label="Previous"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        {/* Витрина без горизонтального скролла */}
        <div className="relative w-full overflow-hidden">
          <ul
            ref={trackRef}
            onTransitionEnd={onTransitionEnd}
            className="flex"
            style={{
              transform,
              transition: isAnimating ? "transform 350ms ease" : "none",
              willChange: "transform",
            }}
          >
            {renderCards.map((card, i) => (
              <li
                key={`${index}-${direction}-${i}-${card.title}`}
                className="px-3 py-2"
                style={{ flex: `0 0 ${slideBasis}` }}
              >
                <article className="h-full rounded-xl p-4 shadow-soft    flex flex-col items-center text-base">
                  <div className="w-full aspect-video overflow-hidden rounded-lg shadow">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-center">{card.title}</h3>
                  <p className="text-secondary text-center">{card.stack}</p>
                  <div className="flex justify-between w-full font-semibold mt-4">
                    <a
                      href={card.demolink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-8 "
                    >
                      {card.live}
                    </a>
                    <a
                      href={card.sourcelink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="  hover:underline underline-offset-8"
                    >
                      {card.source}
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={!canNext}
          className={`px-4 py-2 border rounded-lg transition ${
            canNext ? "bg-black text-white hover:bg-additional hover:text-black" : "opacity-40 cursor-not-allowed"
          }`}
          aria-label="Next"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
  );
}
