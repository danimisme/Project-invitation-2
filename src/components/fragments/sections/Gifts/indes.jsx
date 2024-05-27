import Head from '../../../ui/Head';
import './Gifts.css';

export default function Gifts() {
    return (
        <div className="gifts" id="gifts">
            <div className="container">
                <Head
                    tagline="ungkapan tanda kasih"
                    title="Kirim Hadiah"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, laboriosam."
                />
                <div className="row justify-content-center text-center">
                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="ovo fw-bold">OVO</div>
                                08989809878 - Mat Jiung
                            </li>
                            <li className="list-group-item">
                                <div className="gopay fw-bold">GOPAY</div>
                                08989809878 - is Mat Jiung
                            </li>
                            <li className="list-group-item">
                                <div className="shopee fw-bold">SHOPEE PAY</div>
                                <p>08989809878 a/n Imaw Boting</p>
                                <img
                                    src="images/qrcode.svg"
                                    alt=""
                                    width={150}
                                    className="mb-3"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
