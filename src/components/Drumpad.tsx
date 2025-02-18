import { useEffect, useState} from 'react';

interface DrumpadProps {
    keyTrigger: string;
    id: number;
    sound: string;
    label: string;
}

const Drumpad: React.FC<DrumpadProps> = ({ keyTrigger, id, sound, label }) => {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        setAudio(new Audio(sound));
    }, [sound]);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key.toUpperCase() === keyTrigger) {
                playSound();
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [keyTrigger, audio]);

    const playSound = () => {
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    };

    return (
        <div className="drum-pad" id={`pad-${id}`} onClick={playSound}>
            <span className="key-trigger">{keyTrigger}</span>
            <span className="pad-label">{label}</span>
        </div>
    );
};

export default Drumpad;
