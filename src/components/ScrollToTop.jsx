import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const revealBefore = (target) => {
        if (!target) return;
        const all = Array.from(document.querySelectorAll(".reveal:not(.is-visible)"));
        all.forEach((el) => {
            if (el.getBoundingClientRect().top + window.scrollY <= target.offsetTop) {
            el.classList.add("is-visible");
            }
        });
        if (target.classList.contains("reveal")) target.classList.add("is-visible");
        };

        if (hash) {
        requestAnimationFrame(() => {
            const el = document.querySelector(hash);
            revealBefore(el);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname, hash]);

    return null;
}
