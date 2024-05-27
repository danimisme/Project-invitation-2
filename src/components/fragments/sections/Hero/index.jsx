import { useEffect } from 'react';
import Countdown from '../../Countdown';
import './Hero.css';

const MainHero = () => {
    useEffect(() => {
        const rootElement = document.querySelector(':root');
        function disableScroll() {
            scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            (scrollLeft =
                window.pageXOffset || document.documentElement.scrollLeft),
                (window.onscroll = function () {
                    window.scrollTo(scrollLeft, scrollTop);
                });
            rootElement.style.scrollBehavior = 'auto';
        }

        function enableScroll() {
            window.onscroll = function () {};
            rootElement.style.scrollBehavior = 'smooth';
            localStorage.setItem('open', 'true');

            if (!localStorage.getItem('open')) {
                disableScroll();
            }
        }
        enableScroll();
    }, []);

    return (
        <section className="hero w-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white">
            <main>
                <h4>Kepada Bapak/Ibu/Saudara/i</h4>
                <h1>Mat Jaung & Imaw Boting</h1>
                <p>Akan melangsungkan resepsi pernikahan dalam:</p>
                <Countdown />
                <a
                    className="btn btn-lg mt-4"
                    href="#home"
                    onClick={() => enableScroll()}
                >
                    Lihat Undangan
                </a>
            </main>
        </section>
    );
};

export default MainHero;
