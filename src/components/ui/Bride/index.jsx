import './Bride.css';

export default function Bride(prop) {
    const { name, word, dad, mom, image, classname, option } = prop;
    return (
        <>
            <div className="col-lg-6">
                <div className={`${classname}`}>
                    <div className={`col-8 ${option}`}>
                        <h3>{name}</h3>
                        <p>{word}</p>
                        <p>
                            Putra dari Bpk. {dad} <br /> dan <br />
                            Ibu {mom}{' '}
                        </p>
                    </div>
                    <div className="col-4">
                        <img
                            src={image}
                            alt="mat jaung"
                            className="img-responsive rounded-circle"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
