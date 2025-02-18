// DrumMachine.js
import Drumpad from "./Drumpad";
import './DrumMachine.css';

const DrumMachine = () => {
    const sounds = [
        { keyTrigger: 'J', id: 1, sound: 'https://www.myinstants.com/media/sounds/kick.mp3', label: 'Kvatch Kick' },
        { keyTrigger: 'K', id: 2, sound: 'https://www.myinstants.com/media/sounds/snare.mp3', label: 'Stormcloak Snare' },
        { keyTrigger: 'F', id: 3, sound: 'https://www.myinstants.com/media/sounds/hi-hat.mp3', label: 'Hrothgar Hat' },
        { keyTrigger: 'G', id: 4, sound: 'https://www.myinstants.com/media/sounds/cymbal.mp3', label: 'Cyrodil Crash' },
    ];

    return (
        <div className="fantasy-drum-machine">
            <h2 className="fantasy-title">Dragonborn Drums</h2>
            <div className="drum-grid">
                {sounds.map((sound) => (
                    <Drumpad
                        key={sound.id}
                        keyTrigger={sound.keyTrigger}
                        id={sound.id}
                        sound={sound.sound}
                        label={sound.label}
                    />
                ))}
            </div>
            <div className="scroll-text">
                Press the ancient runes or click the symbols to summon sounds
            </div>
        </div>
    );
};

DrumMachine.displayName = 'DrumMachine';

export default DrumMachine;