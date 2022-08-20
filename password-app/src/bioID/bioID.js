import { useRef, useEffect } from 'react';
import '../css/bioID.css';

const video = document.getElementById('video');

const BioID = () => {
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const facialRecog = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: true
            })
            .then((stream) => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const leftBtn = () => {
        const width = 400;
    };
    const rightBtn = () => {
        const width = 400;
    };
    useEffect(() => {
        facialRecog();
    }, [videoRef]);
    // navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia; window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
    // const MotionDetector = () => {
    //     function g(a) { l = a; c.srcObject = a; c.play(); } function m(a) { console.error(a); } function n() {
    //         if (l) {
    //             d.width = c.offsetWidth;
    //             d.height = c.offsetHeight;
    //             h.width = c.offsetWidth;
    //             h.height = c.offsetHeight;
    //             k.drawImage(c, 0, 0);
    //             f[e] = k.getImageData(0, 0, d.width, d.height);
    //             e = 0 == e ? 1 : 0; a = k.getImageData(0, 0, d.width, d.height);
    //             const g = (a.data.length, b = 0, b < g);
    //             a.data[b] = .5 * (255 - a.data[b]) + .5 * f[e].data[b],
    //                 a.data[b + 1] = .5 * (255 - a.data[b + 1]) + .5 * f[e].data[b + 1],
    //                 a.data[b + 2] = .5 * (255 - a.data[b + 2]) + .5 * f[e].data[b + 2],
    //                 a.data[b + 3] = 255, b += 4; p.putImageData(a, 0, 0);

    //         }
    //     }
    //     var e = 0, d = document.getElementById("canvas"),
    //         h = document.getElementById("canvasFinal"),
    //         c = document.getElementById("camStream"),
    //         k = d.getContext("2d"),
    //         p = h.getContext("2d"),
    //         l = null,
    //         a = null,
    //         f = []; return {
    //             init: function () {
    //                 navigator.getUserMedia ? navigator.getUserMedia({ video: !0 }, g, m) :
    //                     console.error("Your browser does not support getUserMedia"); window.setInterval(n, 32);
    //             }
    //         }; MotionDetector.init();
    // };
    return (
        <div className="container">
            <canvas className="canvas"></canvas>
            <canvas className="canvasFinal"></canvas>
            <video ref={videoRef} className="videoWindow"></video>
            <button onClick={leftBtn} className="btn-left">Home</button>
            <button onClick={rightBtn} className="btn-right">View</button>
            <br /><br />
        </div>
    );
};
export default BioID;
