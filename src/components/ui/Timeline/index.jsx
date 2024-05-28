import './Timeline.css';
export default function Timeline(prop) {
    const { image, headline, date, bodyline, classname, ...rest } = prop;
    return (
        <li className={classname}>
            <div
                className="timeline-image"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            />
            <div {...rest} className="timeline-panel">
                <div className="timeline-heading">
                    <h3>{headline}</h3>
                    <span>{date}</span>
                </div>
                <div className="timeline-body">
                    <p>{bodyline}</p>
                </div>
            </div>
        </li>
    );
}
