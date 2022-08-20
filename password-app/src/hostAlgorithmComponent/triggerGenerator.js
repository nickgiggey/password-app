import '../css/hostAlgorithm.css';
import { useState } from 'react';

function TriggerGenerator() {
    const [num, setNum] = useState(0);

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        setNum(randomNumberInRange(1, 100));
    };
    return (
        <div>
            <h2>number is: {num}</h2>
            <button onClick={handleClick}>Generate random number</button>
        </div>
    );
}

export default TriggerGenerator;