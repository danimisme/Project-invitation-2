import './Head.css';

export default function Head(prop) {
    const { tagline, title, desc } = prop;
    return (
        <div className="head">
            <div className="row justify-content-center">
                <div className="col-md-8 col-10 text-center">
                    <span>{tagline}</span>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
}
