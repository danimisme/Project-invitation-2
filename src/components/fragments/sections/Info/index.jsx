import './Info.css';

const Info = () => {
    return (
        <section className="info" id="info">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-10 text-center">
                        <h2>Informasi Acara</h2>
                        <p className="alamat">
                            Alamat : Gunung Semeru, Ranu Kumbolo. <br />
                            Jl. Raya Ranu Kumbolo - Gunung Semeru, Kec. Ranu
                            Kumbolo, Kab. Sumbawa Besar
                        </p>
                        <a
                            href="https://maps.app.goo.gl/Ew5VQTfknTfm47CC6"
                            target="_blank"
                            className="btn btn-light btn-sm my-3"
                        >
                            Klik Untuk Membuka Peta
                        </a>
                        <p className="desc">
                            Diharapkan untuk tidak salah alamat dan tanggal,
                            Manakala tiba di tujuan namun tidak ada tanda-tanda
                            sedang dilangsungkan pernikahan, boleh jadi anda
                            salah jadwal atau salah tempat
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center mt-4">
                    <div className="col-md-5 col-10">
                        <div className="card text-center text-bg-light mb-5">
                            <div className="card-header">Akad Nikah</div>
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-md-6">
                                        <i className="bi bi-clock-fill d-block"></i>
                                        <span>08.00 WIB - 10.00 WIB</span>
                                    </div>
                                    <div className="col-md-6">
                                        <i className="bi bi-calendar3 d-block"></i>
                                        <span>Minggu, 17 Agustus 1945</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                Saat acara akad diharapkan untuk kondusif
                                menjaga kekhidmatan dan kekhusyuan seluruh
                                prosesi
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-10">
                        <div className="card text-center text-bg-light">
                            <div className="card-header">Resepsi</div>
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-md-6">
                                        <i className="bi bi-clock-fill d-block"></i>
                                        <span>11.00 WIB - Selesai</span>
                                    </div>
                                    <div className="col-md-6">
                                        <i className="bi bi-calendar3 d-block"></i>
                                        <span>Minggu, 17 Agustus 1945</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                Saat acara akad diharapkan untuk kondusif
                                menjaga kekhidmatan dan kekhusyuan seluruh
                                prosesi
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
