import { useEffect } from 'react';
import './Head.css';
import Animation from '../../../utils/aos';

export default function Head(prop) {
    const { tagline, title, desc } = prop;
    useEffect(() => {
        Animation();
    }, []);
    return (
        <div className="head">
            <div className="row justify-content-center">
                <div className="col-md-8 col-10 text-center">
                    <span>{tagline}</span>
                    <h2 data-aos="fade-up">{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
}
