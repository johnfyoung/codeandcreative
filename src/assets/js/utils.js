export const isScrolledIntoView = (el, reveal) => {
    const pageTop = window.scrollY;
    const pageBottom = pageTop + window.innerHeight;
    const elRect = el.getBoundingClientRect();
    const elementBottom = elRect.y + elRect.height * reveal;

    return ((elRect.y < window.innerHeight) && (elementBottom <= window.innerHeight));
}

export const watchScrollVisibility = (el, cb, reveal = .5) => {
    window.addEventListener('scroll', (win) => {
        if (isScrolledIntoView(el, reveal)) {
            cb(el);
        }
    })
}