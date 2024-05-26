import './Story.css';

const Story = () => {
    return (
        <section id="story" className="story">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-10 text-center">
                        <span>Bagaimana cinta kami bersemi</span>
                        <h2>Cerita Kami</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Laudantium natus, error recusandae corrupti
                            asperiores accusamus?
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="timeline">
                            <li>
                                <div
                                    className="timeline-image"
                                    style={{
                                        backgroundImage:
                                            "url('images/rankum.jpg')",
                                    }}
                                ></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3>Pertama bertemu</h3>
                                        <span>1 Juni 2000</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. In
                                            quidem minus enim dolore velit
                                            vitae?
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div
                                    className="timeline-image"
                                    style={{
                                        backgroundImage:
                                            "url('images/rankum2.jpg')",
                                    }}
                                ></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3>Mulai Serius</h3>
                                        <span>1 Agustus 2020</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. In
                                            quidem minus enim dolore velit
                                            vitae?
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline">
                                <div
                                    className="timeline-image"
                                    style={{
                                        backgroundImage:
                                            "url('images/rankum3.jpg')",
                                    }}
                                ></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3>Disuruh Nikah</h3>
                                        <span>17 Agustus 1945</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. In
                                            quidem minus enim dolore velit
                                            vitae?
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
