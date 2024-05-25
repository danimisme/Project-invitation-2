import { useState, useEffect } from 'react';
import './Countdown.css';

export default function Countdown() {
    const initialTime = 360000; // Waktu awal dalam detik (misalnya, 1 jam)
    const [timeRemaining, setTimeRemaining] = useState(initialTime);

    useEffect(() => {
        if (timeRemaining > 0) {
            const timerId = setTimeout(() => {
                setTimeRemaining(timeRemaining - 1);
            }, 1000);
            return () => clearTimeout(timerId); // Membersihkan timer saat komponen unmount
        }
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
