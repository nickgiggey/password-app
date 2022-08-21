import React, {useState} from 'react';
import '../css/fingerPrint.css';
function FingerPrint() {
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    function randoNumber(min, max) {
        return Math.floor(Math.random() * ((max - min + 1)) * Math.PI) + min;
    }

    const handleClick = () => {
        setNum(randoNumber(1, 100));
        setNum2(randoNumber(1, 100))
    };

    return (
        <div className="fingerPrint-main-container">
            <h2>number is: {num}</h2>
            <h2>number2 is: {num2}</h2>
            <button onClick={handleClick}
                className="btn"
                type='Submit'
                required
            >
                <i className="fas fa-fingerprint i1" aria-hidden="true"></i>
            </button>
        </div>
    );
};

export default FingerPrint;