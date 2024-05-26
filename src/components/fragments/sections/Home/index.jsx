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
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-8 text-end">
                                <h3>Mat Jaung</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eaque, enim magni velit
                                    qui amet rem?
                                </p>
                                <p>
                                    Putra dari Bpk. Lorem <br /> dan <br />
                                    Ibu Ipsum{' '}
                                </p>
                            </div>
                            <div className="col-4">
                                <img
                                    src="/images/male.jpg"
                                    alt="mat jaung"
                                    className="img-responsive rounded-circle"
                                />
                            </div>
                        </div>
                    </div>
                    <span className='heart'>
                        <i className="bi bi-heart-fill"></i>
                    </span>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-4">
                                <img
                                    src="/images/female.jpg"
                                    alt="mat jaung"
                                    className="img-responsive rounded-circle"
                                />
                            </div>
                            <div className="col-8">
                                <h3>Imaw Boting</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eaque, enim magni velit
                                    qui amet rem?
                                </p>
                                <p>
                                    Putra dari Bpk. Ipsum
                                    <br /> dan <br />
                                    Ibu Lorem{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
