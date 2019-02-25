import starterstyle from "scssstarter/scss/index.scss";
import style from "./assets/scss/main.scss";
import { watchScrollVisibility } from './assets/js/utils';

const setScrollWatcher = () => {
    document.querySelectorAll('.scroll-watch-fade-up').forEach(el => {
        watchScrollVisibility(el, (el) => {
            el.classList.add('fade-up');
        })
    })
}

const debug = () => {
    window.addEventListener('scroll', (win) => {
        const el = document.querySelector('#debug').innerHTML = `window.scrollY: ${window.scrollY}<br>bottom: ${window.scrollY + window.innerHeight}`;
    })
}

const init = () => {
    setScrollWatcher();
    window.onload = () => { document.body.classList.remove('preload') }
}

init();