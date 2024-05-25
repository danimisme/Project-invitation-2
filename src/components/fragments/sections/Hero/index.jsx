import './Hero.css';

const MainHero = () => {
    return (
        <section className="hero w-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white">
            <main>
                <h4>Kepada Bapak/Ibu/Saudara/i</h4>
                <h1>Mat Jaung & Imaw Boting</h1>
                <p>Akan melangsungkan resepsi pernikahan dalam:</p>
                <a className="btn btn-lg" href="#undangan">
                    Lihat Undangan
                </a>
            </main>
        </section>
    );
};

export default MainHero;
