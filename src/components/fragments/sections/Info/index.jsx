import { useEffect } from 'react';
import Card from '../../../ui/Card';
import './Info.css';
import Animation from '../../../../utils/aos';

const Info = () => {
    useEffect(() => {
        Animation();
    }, []);
    return (
        <section className="info" id="info">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-10 text-center">
                        <h2 data-aos="fade-up">Informasi Acara</h2>
                        <p className="alamat">
                            Alamat : Gunung Semeru, Ranu Kumbolo. <br />
                            Jl. Raya Ranu Kumbolo - Gunung Semeru, Kec. Ranu
                            Kumbolo, Kab. Sumbawa Besar
                        </p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5115709087063!2d112.92093755!3d-8.0491835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd63943aafc7f71%3A0xdfe7abf595cdf6bd!2sRanu%20Kumbolo!5e0!3m2!1sid!2sid!4v1716879397610!5m2!1sid!2sid"
                            width="100%"
                            height="250"
                            allowfullscreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            data-aos="zoom-in"
                        />

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
                        data-aos="fade-up-right"
                    />
                    <Card
                        head="Resepsi"
                        icon="calendar3"
                        hours="11.00 WIB - Selesai"
                        data-aos="fade-up-left"
                    />
                </div>
            </div>
        </section>
    );
};

export default Info;
