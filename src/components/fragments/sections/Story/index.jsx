import Head from '../../../ui/Head';
import Timeline from '../../../ui/Timeline';
import './Story.css';

const Story = () => {
    return (
        <section id="story" className="story">
            <div className="container">
                <Head
                    tagline="Bagaimana cinta kami bersemi"
                    title="Cerita Kami"
                    desc="   Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Laudantium natus, error recusandae corrupti
                            asperiores accusamus?"
                />
                <div className="row">
                    <div className="col">
                        <ul className="timeline">
                            <Timeline
                                image="images/rankum.jpg"
                                headline="Pertama bertemu"
                                date="20 Februari 1980"
                                bodyline="Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. In
                                            quidem minus enim dolore velit
                                            vitae?"
                            />
                            <Timeline
                                image="images/rankum2.jpg"
                                headline="Mulai Serius"
                                date="1 Agustus 2000"
                                bodyline="Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. In
                                            quidem minus enim dolore velit
                                            vitae?"
                                classname="timeline-inverted"
                            />
                            <Timeline
                                image="images/rankum3.jpg"
                                headline="Disuruh Nikah"
                                date="17 Agustus 1945"
                                bodyline="Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem minus enim dolore velit vitae?"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
