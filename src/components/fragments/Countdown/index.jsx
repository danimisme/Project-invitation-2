import { useState, useEffect } from 'react';
import './Countdown.css';

export default function Countdown() {
    const initialTime = 99999999; // Waktu awal dalam detik (misalnya, 1 jam)
    const [timeRemaining, setTimeRemaining] = useState(
        localStorage.getItem('timeRemaining') || initialTime
    );

    useEffect(() => {
        const timerId = setInterval(() => {
            if (timeRemaining > 0) {
                setTimeRemaining(timeRemaining - 1);
                localStorage.setItem('timeRemaining', timeRemaining - 1);
            }
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, [timeRemaining]);

    const days = Math.floor(timeRemaining / 86400);
    const hours = Math.floor((timeRemaining % 86400) / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    return (
        <div className="countdown">
            <div>
                <div className="section">
                    <span>{days}</span>hari
                </div>
                <div className="section">
                    <span>{hours}</span> jam
                </div>
                <div className="section">
                    <span>{minutes}</span> menit
                </div>
                <div className="section">
                    <span>{seconds}</span> detik
                </div>
            </div>
        </div>
    );
}
