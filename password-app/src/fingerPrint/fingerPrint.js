import React, {useState} from 'react';
import '../css/fingerPrint.css';
function FingerPrint() {
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
            <button onClick={handleClick}
                className="btn"
                type='Submit'
                required
            >
                {' '}
                <i className="fas fa-fingerprint i1" aria-hidden="true"></i>
            </button>
        </div>
    );
};

export default FingerPrint;