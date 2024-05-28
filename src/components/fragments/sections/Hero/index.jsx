import { useDispatch } from 'react-redux';
import Countdown from '../../Countdown';
import './Hero.css';
import { setUrl } from '../../../../redux/slice/urlSlice';
import { useEffect } from 'react';

const MainHero = ({ onClick }) => {
    const dispatch = useDispatch();
    const urlParams = new URLSearchParams(window.location.search);
    const nama = urlParams.get('n') || '';
    const pronount = urlParams.get('p') || 'Kepada Bapak/Ibu/Saudara/i';

    useEffect(() => {
        dispatch(setUrl(nama));
    }, []);

    return (
        <section className="hero w-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white">
            <main>
                <h4>
                    Kepada {pronount}
                    {'.'}
                    {nama.charAt(0).toUpperCase() + nama.slice(1)}
                </h4>
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
