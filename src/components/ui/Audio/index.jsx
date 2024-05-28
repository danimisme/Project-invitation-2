import { useSelector } from 'react-redux';
import './Audio.css';
import { useEffect, useState } from 'react';

export default function Audio() {
    const [showIcon, setShowIcon] = useState('none');
    const [icon, setIcon] = useState('bi-disc-fill');
    const isPlaying = useSelector((state) => state.open.open);

    const playAudio = () => {
        const audio = document.getElementById('audio');
        audio.volume = 0.2;
        setIcon('bi-disc-fill');
        audio.play();
    };

    const pauseAudio = () => {
        const audio = document.getElementById('audio');
        audio.pause();
        setIcon('bi-pause-circle-fill');
    };

    useEffect(() => {
        if (!isPlaying) {
            setShowIcon('none');
            pauseAudio();
        } else {
            setShowIcon('flex');
            playAudio();
        }
    }, [isPlaying]);

    return (
        <div id="audio-container">
            <audio id="audio" autoPlay loop>
                <source src="audio/audio.mp3" type="audio/mp3" />
            </audio>
            <div className="audio-icon-wrapper" style={{ display: showIcon }}>
                <i
                    className={`bi ${icon}`}
                    onClick={() =>
                        icon === 'bi-pause-circle-fill'
                            ? playAudio()
                            : pauseAudio()
                    }
                ></i>
            </div>
        </div>
    );
}
