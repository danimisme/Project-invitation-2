export default function Card(prop) {
    const { head, icon, hours } = prop;
    return (
        <div className="col-md-5 col-10">
            <div className="card text-center text-bg-light mb-5">
                <div className="card-header">{head}</div>
                <div className="card-body">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <i className={`bi bi-${icon} d-block`}></i>
                            <span>{hours}</span>
                        </div>
                        <div className="col-md-6">
                            <i className="bi bi-calendar3 d-block"></i>
                            <span>Minggu, 17 Agustus 1945</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    Saat acara akad diharapkan untuk kondusif menjaga
                    kekhidmatan dan kekhusyuan seluruh prosesi
                </div>
            </div>
        </div>
    );
}
