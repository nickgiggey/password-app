import React from 'react';
import '../css/fingerPrint.css';

let body = document.querySelector('body');
function FingerPrint() {
    const [counter, setCounter] = React.useState(100);
    const intervalRef = React.useRef(null);
    React.useEffect(() => {
        return () => stopCounter(); // when App is unmounted we should stop counter
    }, []);
    function startCounter() {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
            setTimeout(onSuccess, 2000);
        }, 50);

    };
    function onSuccess() {
        body.removeEventListener('mousedown', startCounter);
        body.removeEventListener('touchstart', startCounter);
        clearTimeout();
        setTimeout(() => {
            body.addEventListener('mousedown', startCounter);
            body.addEventListener('touchstart', stopCounter);
        }, 3000);
    }

    const stopCounter = () => {
        if (intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 50);
        };
    };
    body.addEventListener('mousedown', startCounter);
    body.addEventListener('touchstart', startCounter);
    body.addEventListener('mouseup', stopCounter);
    body.addEventListener('touchend', stopCounter);
    return (
        <section className="finger-print">
            <div className="btn"
                onMouseDown={startCounter}
                onMouseUp={stopCounter}
                onMouseLeave={stopCounter}>
                <i className="fas fa-fingerprint i1" aria-hidden="true"></i>
            </div>
        </section>
    );
};

export default FingerPrint;


// const body = document.querySelector("body");
// const FingerPrint = () => { style={elementStyle} style={containerStyle}
//     // const c = document.querySelector("#battery");
//     let root = document.documentElement;
//     let num = 1;
//     let run;
//     function addNumber() {
//         if (run) {
//             num++;
//             if (num < 101) {
//                 body.innerHTML = num + "%";
//                 root.style.setProperty("--charge", num + "%");
//             } else {
//                 num = 100;
//             }
//         } else {
//             num--;
//             if (num > 0) {
//                 body.innerHTML = num + "%";
//                 root.style.setProperty("--charge", num + "%");
//             } else {
//                 num = 0;
//             }
//         }

//         if (num < 50) {
//             root.style.setProperty("--color", "gold");
//         } else {
//             root.style.setProperty("--color", "limegreen");
//         }
//         if (num < 10) {
//             root.style.setProperty("--color", "red");
//         }
//     }

//     body.addEventListener('mousedown', () => {
//         run = true;
//     });
//     body.addEventListener("mouseup", () => {
//         run = false;
//     });
//     body.addEventListener("touchstart", () => {
//         run = true;
//     });
//     body.addEventListener("touchend", () => {
//         run = false;
//     });
//     let play = setInterval(addNumber, 1000 / 30);
// }
