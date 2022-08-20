import { useRef, useEffect } from 'react';
import '../css/bioID.css';

function BioID() {
    const videoRef = useRef(null);
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
    useEffect(() => {
        facialRecog();
    }, [videoRef]);
    return (
        <div className="container">
            <video ref={videoRef} className="videoWindow"></video>
        </div>
    );
};

export default BioID;
