import Bride from '../../../ui/Bride';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2>Acara Pernikahan</h2>
                        <h3>
                            Diselenggarakan pada 17 Agustus 1945 di Jakarta,
                            Indonesia
                        </h3>
                        <p>
                            Oleh karena itu, dengan segala hormat, kami
                            bermaksut untuk mengundang Bapak/Ibu/Saudara/i,
                            untuk hadir ke acara pernikahan kami
                        </p>
                    </div>
                </div>

                <div className="row couple">
                    <Bride
                        name="Mat Jaung"
                        word="Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eaque, enim magni velit
                                    qui amet rem?"
                        dad="Lorem"
                        mom="Ipsum"
                        image="/images/male.jpg"
                        classname="row"
                        option="text-end"
                    />
                    <span className="heart">
                        <i className="bi bi-heart-fill"></i>
                    </span>
                    <Bride
                        name="Imaw Boting"
                        word="Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eaque, enim magni velit
                                    qui amet rem?"
                        dad="Ipsum"
                        mom="Lorem"
                        image="/images/female.jpg"
                        classname="row reverse"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
