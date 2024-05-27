import Card from '../../../ui/Card';
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
                    <Card
                        head="Akad Nikah"
                        icon="clock-fill"
                        hours="08.00 WIB - 10.00 WIB"
                    />
                    <Card
                        head="Resepsi"
                        icon="calendar3"
                        hours="11.00 WIB - Selesai"
                    />
                </div>
            </div>
        </section>
    );
};

export default Info;
