import Countdown from '../../Countdown';
import './Hero.css';

const MainHero = ({ onClick }) => {
    return (
        <section className="hero w-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white">
            <main>
                <h4>Kepada Bapak/Ibu/Saudara/i</h4>
                <h1>Mat Jaung & Imaw Boting</h1>
                <p>Akan melangsungkan resepsi pernikahan dalam:</p>
                <Countdown />
                <a
                    id="show-invitation"
                    className="btn btn-lg mt-4"
                    href="#home"
                    type="button"
                    onClick={onClick}
                >
                    Lihat Undangan
                </a>
            </main>
        </section>
    );
};

export default MainHero;
