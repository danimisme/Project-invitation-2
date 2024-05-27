import './CountdownSection.css';

const CountdownSection = (prop) => {
    return (
        <>
            <div className="section">
                <span>{prop.time}</span>
                {prop.text}
            </div>
        </>
    );
};

export default CountdownSection;
